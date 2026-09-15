import { createClient } from "npm:@supabase/supabase-js@2.116.0";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN") ?? "";
const REPOSITORY = Deno.env.get("GITHUB_REPOSITORY") ?? "UmarErth/uMath";
const BRANCH = Deno.env.get("GITHUB_BRANCH") ?? "main";
const LOADER_PATH = "loader.js";
const API_VERSION = "2022-11-28";

const trustedOrigin = (origin: string) => {
  if (!origin) return "";
  try {
    const { hostname, protocol } = new URL(origin);
    if (protocol !== "https:" && origin !== "http://localhost:3000" && origin !== "http://localhost:5173") return "";
    return hostname === "nova.staticdomains.app" ||
      hostname === "cdn.jsdelivr.net" ||
      hostname === "umarerth.github.io" ||
      hostname.endsWith(".staticdomains.app") ||
      hostname.endsWith(".static.app") ||
      hostname.endsWith(".github.io")
      ? origin
      : "";
  } catch {
    return "";
  }
};

const cors = (req: Request) => ({
  "Access-Control-Allow-Origin": trustedOrigin(req.headers.get("Origin") ?? "") || "https://nova.staticdomains.app",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Vary": "Origin",
});

const json = (req: Request, body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(req), "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const githubHeaders = () => {
  const headers: Record<string, string> = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": API_VERSION,
    "User-Agent": "Nova-Gaming-Admin",
  };
  if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  return headers;
};

const decodeBase64Utf8 = (value: string) => {
  const binary = atob(value.replace(/\s/g, ""));
  return new TextDecoder().decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)));
};

const encodeBase64Utf8 = (value: string) => {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
  }
  return btoa(binary);
};

type Game = {
  title: string;
  url: string;
  desc: string;
  newTab: boolean;
  download: boolean;
};

const gameLine = /^\s*\{\s*title:("(?:\\.|[^"\\])*"),\s*url:("(?:\\.|[^"\\])*"),\s*desc:("(?:\\.|[^"\\])*"),\s*newTab:(true|false),\s*download:(true|false)\s*\},?\s*$/gm;

const findGamesBlock = (source: string) => {
  const match = /const\s+GAMES\s*=\s*\[/.exec(source);
  if (!match) throw new Error("Could not locate the GAMES catalog in loader.js");
  const open = source.indexOf("[", match.index);
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = open; index < source.length; index++) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[") depth++;
    else if (char === "]" && --depth === 0) return { open, close: index };
  }
  throw new Error("The GAMES catalog is not closed");
};

const parseGames = (source: string) => {
  const { open, close } = findGamesBlock(source);
  const block = source.slice(open + 1, close);
  const games: Array<Game & { start: number; end: number }> = [];
  gameLine.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = gameLine.exec(block))) {
    games.push({
      title: JSON.parse(match[1]),
      url: JSON.parse(match[2]),
      desc: JSON.parse(match[3]),
      newTab: match[4] === "true",
      download: match[5] === "true",
      start: open + 1 + match.index,
      end: open + 1 + gameLine.lastIndex,
    });
  }
  return { games, open, close };
};

const normalizeGame = (input: unknown): Game => {
  const value = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const title = String(value.title ?? "").trim();
  const url = String(value.url ?? "").trim();
  const desc = String(value.desc ?? "").trim();
  if (!title || title.length > 120) throw new Error("Title must be between 1 and 120 characters");
  if (!desc || desc.length > 300) throw new Error("Description must be between 1 and 300 characters");
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error("Enter a valid game URL");
  }
  if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("Game URL must use HTTP or HTTPS");
  return { title, url: parsed.href, desc, newTab: value.newTab === true, download: value.download !== false };
};

const renderGame = (game: Game) =>
  `    { title:${JSON.stringify(game.title)}, url:${JSON.stringify(game.url)}, desc:${JSON.stringify(game.desc)}, newTab:${game.newTab}, download:${game.download} },`;

const loadCatalog = async () => {
  const response = await fetch(
    `https://api.github.com/repos/${REPOSITORY}/contents/${LOADER_PATH}?ref=${encodeURIComponent(BRANCH)}`,
    { headers: githubHeaders() },
  );
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.message || `GitHub returned ${response.status}`);
  return { source: decodeBase64Utf8(payload.content), sha: String(payload.sha) };
};

const commitCatalog = async (source: string, sha: string, message: string) => {
  if (!GITHUB_TOKEN) throw new Error("GitHub write access is not configured yet");
  const response = await fetch(
    `https://api.github.com/repos/${REPOSITORY}/contents/${LOADER_PATH}`,
    {
      method: "PUT",
      headers: { ...githubHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ message, content: encodeBase64Utf8(source), sha, branch: BRANCH }),
    },
  );
  const payload = await response.json();
  if (!response.ok) {
    const error = new Error(payload?.message || `GitHub returned ${response.status}`);
    (error as Error & { status?: number }).status = response.status;
    throw error;
  }
  return String(payload?.commit?.sha ?? "");
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(req) });
  if (req.method !== "POST") return json(req, { error: "Method not allowed" }, 405);

  try {
    const authorization = req.headers.get("Authorization") ?? "";
    const token = authorization.replace(/^Bearer\s+/i, "");
    if (!token) return json(req, { error: "Sign in required" }, 401);

    const authClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authorization } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: { user }, error: authError } = await authClient.auth.getUser(token);
    if (authError || !user) return json(req, { error: "Your session is invalid or expired" }, 401);

    const serviceClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: admin, error: adminError } = await serviceClient
      .from("nova_admins")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!admin) return json(req, { error: "This account is not a Nova administrator" }, 403);

    const body = await req.json().catch(() => ({})) as Record<string, unknown>;
    const action = String(body.action ?? "list");
    const catalog = await loadCatalog();
    const parsed = parseGames(catalog.source);

    if (action === "list") {
      return json(req, {
        games: parsed.games.map(({ start: _start, end: _end, ...game }) => game),
        githubConfigured: Boolean(GITHUB_TOKEN),
        repository: REPOSITORY,
        branch: BRANCH,
      });
    }

    if (!["add", "update", "delete"].includes(action)) return json(req, { error: "Unknown action" }, 400);
    if (!GITHUB_TOKEN) return json(req, { error: "Add GITHUB_TOKEN to the Edge Function secrets first" }, 503);

    const originalUrl = String(body.originalUrl ?? "").trim();
    let title = "";
    let gameUrl = "";
    let updatedSource = catalog.source;

    if (action === "add") {
      const game = normalizeGame(body.game);
      if (parsed.games.some((item) => item.url === game.url)) return json(req, { error: "That game URL already exists" }, 409);
      const beforeClose = catalog.source.slice(0, parsed.close);\n      const separator = beforeClose.trimEnd().endsWith(",") ? "" : ",";\n      updatedSource = beforeClose + separator + "\n" + renderGame(game) + "\n" + catalog.source.slice(parsed.close);
      title = game.title;
      gameUrl = game.url;
    } else {
      const existing = parsed.games.find((item) => item.url === originalUrl);
      if (!existing) return json(req, { error: "That game was changed or no longer exists. Refresh and try again." }, 409);
      title = existing.title;
      gameUrl = existing.url;
      if (action === "update") {
        const game = normalizeGame(body.game);
        if (parsed.games.some((item) => item.url === game.url && item.url !== originalUrl)) {
          return json(req, { error: "Another game already uses that URL" }, 409);
        }
        updatedSource = catalog.source.slice(0, existing.start) + renderGame(game) + catalog.source.slice(existing.end);
        title = game.title;
        gameUrl = game.url;
      } else {
        let end = existing.end;
        if (catalog.source[end] === "\r") end++;
        if (catalog.source[end] === "\n") end++;
        updatedSource = catalog.source.slice(0, existing.start) + catalog.source.slice(end);
      }
    }

    const safeTitle = title.replace(/[\r\n]/g, " ").slice(0, 72);
    const commitSha = await commitCatalog(updatedSource, catalog.sha, `${action === "add" ? "Add" : action === "update" ? "Update" : "Remove"} ${safeTitle} via Nova Admin`);

    await serviceClient.from("nova_admin_audit").insert({
      user_id: user.id,
      action,
      game_title: title,
      game_url: gameUrl || null,
      github_commit_sha: commitSha || null,
    });

    fetch(`https://purge.jsdelivr.net/gh/${REPOSITORY}@${BRANCH}/${LOADER_PATH}`).catch(() => {});
    return json(req, { ok: true, commitSha });
  } catch (error) {
    const status = Number((error as Error & { status?: number }).status) || 500;
    return json(req, { error: error instanceof Error ? error.message : "Unexpected server error" }, status);
  }
});
