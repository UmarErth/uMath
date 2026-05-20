/**
 * Nova Gaming - Ultimate Kinetic Frosted Engine [Premium Card Edition]
 * ============================================================
 * CONFIGURATION GUIDE
 * ============================================================
 *
 * ① REGISTRY — the games list
 *    Each game supports:
 *      title    : display name
 *      url      : source URL
 *      desc     : short description
 *      newTab   : true  → shows in-page confirm dialog, then opens in a new tab
 *                 false → loads inside the theater iframe (default)
 *      download : true  → right-click "Download File" appears (default)
 *                 false → download option is hidden from the context menu
 *
 *    TIP: Use newTab: true for large/Unity/WebGL games, or anything that
 *         needs full browser context (CORS, localStorage, etc.)
 *
 * ② HEADER BUTTONS — rendered right-side of titlebar
 *    Each button supports:
 *      id      : unique element id
 *      icon    : character / symbol shown on the button
 *      label   : tooltip + text label (hidden on small screens)
 *      action  : "reload" | "cloak" | "url:https://..." | "custom:fnName"
 *      newTab  : (optional) true → show confirmation dialog before opening url: action
 *
 * ③ MENU ITEMS — rendered in the slide-out drawer
 *    Same fields as header buttons, plus:
 *      action  : "separator" → draws a divider line (no icon/label needed)
 *      newTab  : (optional) true → show confirmation dialog before opening url: action
 *
 * ④ Custom actions: add a method to supreme_engine and reference as "custom:myMethodName"
 * ============================================================
 */

const supreme_engine = {
    settings: {
        unlockcode: "1234",
        panicurl:   "about:blank",   // ← Cloak now goes to about:blank
        cloakicon:  "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",
        cloaktitle: "Google Docs",
        dotcolor:   "rgba(255, 255, 255, 0.10)",
        dotspacing: 36,
        itemsPerLoad: 30,

        // ── HEADER BUTTONS ─────────────────────────────────────────────
        headerButtons: [
            {
                id:     "request-game-btn",
                icon:   "🖷",
                label:  "Request",
                action: "url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog",
                newTab: true   // ← shows in-page confirmation before opening
            },
            {
                id:     "save-singlefile-btn",
                icon:   "↓",
                label:  "Save",
                action: "custom:executeSaveDownload"
                // newTab not needed for custom actions
            },
            // ── Add more header buttons below ──
            // { id: "my-btn", icon: "⊕", label: "My Tool", action: "custom:myTool" },
            // { id: "gh-btn", icon: "◈",  label: "GitHub",  action: "url:https://github.com", newTab: true, download: true  },
        ],

        // ── SIDE MENU ITEMS ────────────────────────────────────────────
        menuItems: [
            { icon: "⌂",  label: "Home",              action: "reload" },
            { icon: "🖷",  label: "Request a Game",    action: "url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab: true, download: true  },
            { icon: "↓",  label: "Save Offline File", action: "custom:executeSaveDownload" },
            { action: "separator" },
            { icon: "⊘",  label: "Cloak Tab",         action: "cloak" },
            { icon: "⏱",  label: "My YouTube",         action: "url:https://inv.thepixora.com/channel/UCcusQs9FwQdeB2g_v7_R45g", newTab: true, download: false },            
            // ── Add more menu items below ──
            // { icon: "⚙", label: "Settings",          action: "custom:openSettings" },
            // { icon: "★", label: "Favorites Only",    action: "custom:toggleFavMenu" },
            // { icon: "⊕", label: "Open GitHub",       action: "url:https://github.com", newTab: true, download: true  },
        ],

        // ── SAVE FILE ──────────────────────────────────────────────────
        saveFileUrl:  "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/singlefile.html",
        saveFileName: "NovaGaming.html"
    },

    // ==========================================
    // 1. CONTENT REGISTRY
    // ==========================================
    registry: [
        // newTab    : true  → shows confirmation dialog, then opens in new tab
        //             false → loads inside the theater iframe (default)
        // download  : true  → right-click "Download File" is enabled (default)
        //             false → download option is hidden in context menu
        { title: "Cookie Clicker",             url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html",                      desc: "Idle baking simulator.",                              newTab: false, download: true  },
        { title: "Brotato",                    url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Brotato.html",                             desc: "Kill weird looking creatures.",                       newTab: false, download: true  },
        { title: "Minecraft",                  url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/EaglercraftX_1.8_u50_Offline_Signed.html", desc: "Classic sandbox world.",                              newTab: false, download: true  },
        { title: "Baldi's Basics Plus",        url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Baldi's-Basics-Plus.html",                desc: "Escape from Baldi.",                                  newTab: true, download: true  },
        { title: "Bank Robbery 3",             url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Bank-Robbery-3.html",                      desc: "Rob banks.",                                          newTab: true, download: true  },
        { title: "Buckshot Roulette",          url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Buckshot%20Roulette.html",                 desc: "Take your chance of getting killed.",                 newTab: false, download: true  },
        { title: "BuildNow",                   url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/BuildNow.html",                            desc: "Ripoff of 1v1.LoL.",                                  newTab: true, download: true  },
        { title: "Five Nights at Epstein's",   url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Five-Nights-at-Epstein's.html",            desc: "Survive 5 nights.",                                   newTab: true, download: true  },
        { title: "GTA Vice City",              url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/GTA__Vice_City.html",                      desc: "It's GTA bro.",                                       newTab: false, download: true  },
        { title: "Git-Hub Search",             url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Git-Hub_Search.html",                      desc: "Search Git-Hub.",                                     newTab: false, download: true  },
        { title: "Pizza Tower",                url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Pizza-Tower.html",                         desc: "IDK never played it before.",                         newTab: false, download: true  },
        { title: "Subway Surfers",             url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Subway_Surfers.html",                      desc: "Escape a cop.",                                       newTab: false, download: true  },
        { title: "Temple Run 2",               url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Temple-Run-2.html",                        desc: "Escaping a temple?",                                  newTab: true, download: true  },
        { title: "Snow Rider (Hooda Math)",    url: "https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0",                          desc: "Ride in Snow!",                                       newTab: false, download: false  },
        { title: "Puppet Hockey (MathPG)",     url: "https://www.mathplayground.com/pg_puppet_hockey.html",                                desc: "Play Puppet Hockey against other countries!",          newTab: true, download: false  },
        { title: "NikeHub",                    url: "https://nikehub.pages.dev/a129x",                                                     desc: "Another games hub.",                                  newTab: false, download: false  },
        { title: "Vapor V4",                   url: "https://100.vaporized.help",                                                          desc: "A hub of general entertainment.",                     newTab: false, download: false  },
        { title: "Google Doodles",             url: "https://doodles.google/search/?form_tags=interactive%20game",                         desc: "Google's own collection of games.",                   newTab: false, download: false  },
        { title: "Friday Night Funkin",        url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin.html",                 desc: "A basic rhythm game.",                                newTab: false, download: true  },
        { title: "FNF VS Hex", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__Vs._Hex.html",       desc: "FNF mod — Hex.",                                      newTab: false, download: true  },
        { title: "FNF VS Whitty",              url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__V.S._Whitty.html",   desc: "FNF mod — Whitty.",                                   newTab: false, download: true  },
        { title: "Doki Doki Literature Club",  url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/DokiDoki-Literatureclub.html",        desc: "A literature club.",                                  newTab: false, download: true  }, 
        { title: "Basically YouTube",  url: "https://inv.thepixora.com/search",        desc: "A social media platform.",                                  newTab: true, download: false  },
        { title: "1v1.lol",                    url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/1v1.LoL.html",                             desc: "Build and shoot combat.",                             newTab: false, download: true  }
    ],

    cachedCards: [],
    renderedCount: 0,
    onlyShowFavorites: false,
    searchQuery: "",
    favorites: [],
    _theaterItem: null,

    // ==========================================
    // 2. CSS
    // ==========================================
    injectstyles() {
        const style = document.createElement("style");
        style.innerText = `
            :root {
                --bg:            #05050a;
                --accent:        #ff0055;
                --accent-dim:    rgba(255,0,85,0.18);
                --accent-glow:   rgba(255,0,85,0.35);

                --g0: rgba(255,255,255,0.012);
                --g1: rgba(255,255,255,0.028);
                --g2: rgba(255,255,255,0.048);
                --g3: rgba(255,255,255,0.072);
                --g4: rgba(255,255,255,0.10);
                --g5: rgba(255,255,255,0.14);

                --b1: rgba(255,255,255,0.07);
                --b2: rgba(255,255,255,0.13);
                --b3: rgba(255,255,255,0.22);

                --blur-sm:    blur(12px) saturate(140%);
                --blur-md:    blur(28px) saturate(160%);
                --blur-lg:    blur(48px) saturate(200%);
                --blur-panel: blur(60px) saturate(220%);

                --spec-top:  linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0) 100%);
                --spec-diag: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 55%);

                --fs-xs:     clamp(0.68rem, 0.9vw,  0.78rem);
                --fs-sm:     clamp(0.78rem, 1.1vw,  0.90rem);
                --fs-base:   clamp(0.85rem, 1.2vw,  0.95rem);
                --fs-lg:     clamp(1.0rem,  1.5vw,  1.4rem);
                --fs-xl:     clamp(1.1rem,  2.5vw,  1.6rem);
                --fs-lock:   clamp(1.5rem,  3vw,    2.4rem);
                --fs-card-h: clamp(1.0rem,  1.5vw,  1.45rem);
                --fs-card-p: clamp(0.78rem, 1vw,    0.92rem);

                --hpad-v: clamp(12px, 1.8vh, 22px);
                --hpad-h: clamp(18px, 4vw,   5.5%);
                --gpad:   clamp(16px, 3vw,   40px);
                --ggap:   clamp(14px, 2vw,   30px);
                --cpad:   clamp(20px, 2.5vw, 34px);
                --crad:   clamp(14px, 1.4vw, 22px);
                --bpv:    clamp(9px,  1vh,   13px);
                --bph:    clamp(13px, 1.4vw, 20px);

                --transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
                --spring:     all 0.48s cubic-bezier(0.22, 1, 0.28, 1);
            }

            @media (min-width: 2560px) {
                :root {
                    --fs-xl: 2rem; --fs-lg: 1.7rem;
                    --fs-card-h: 1.8rem; --fs-card-p: 1.1rem;
                    --ggap: 40px; --cpad: 44px; --crad: 28px;
                }
            }

            *, *::before, *::after { box-sizing: border-box; }

            body, html {
                margin: 0; padding: 0; width: 100%; height: 100%;
                background: var(--bg); color: #fff;
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
                overflow: hidden;
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            }

            #canvas-dot { position: fixed; inset: 0; z-index: 1; pointer-events: none; }

            /* ─── LOCK ───────────────────────────────────────────────── */
            #lock-screen {
                position: fixed; inset: 0; z-index: 9999;
                background: rgba(3,3,6,0.82);
                backdrop-filter: var(--blur-lg); -webkit-backdrop-filter: var(--blur-lg);
                display: flex; align-items: center; justify-content: center;
                transition: var(--transition);
            }
            .lock-card {
                text-align: center;
                padding: clamp(32px,5vw,56px) clamp(32px,6vw,64px);
                background: var(--g1);
                border: 1px solid var(--b2);
                border-radius: 28px;
                backdrop-filter: var(--blur-md); -webkit-backdrop-filter: var(--blur-md);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 80px rgba(0,0,0,0.65), 0 0 100px rgba(255,0,85,0.05);
                position: relative; overflow: hidden;
            }
            .lock-card::before { content:''; position:absolute; inset:0; background:var(--spec-top); border-radius:inherit; pointer-events:none; }
            .lock-card::after  { content:''; position:absolute; inset:0; background:var(--spec-diag); border-radius:inherit; pointer-events:none; }
            .lock-wordmark {
                font-size: var(--fs-xl); font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
                background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.35));
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                margin-bottom: 6px; position: relative; z-index: 1;
            }
            .lock-label {
                display: block; font-size: var(--fs-xs);
                color: rgba(255,255,255,0.28); letter-spacing: 4px; text-transform: uppercase;
                margin-bottom: 24px; position: relative; z-index: 1;
            }
            .lock-input {
                background: var(--g2); border: 1px solid var(--b1);
                color: #fff; font-family: monospace; font-size: var(--fs-lock);
                text-align: center; padding: clamp(10px,2vw,16px) clamp(18px,3vw,30px);
                border-radius: 16px; width: clamp(140px,32vw,210px);
                outline: none; transition: var(--spring); letter-spacing: 8px;
                backdrop-filter: var(--blur-sm); -webkit-backdrop-filter: var(--blur-sm);
                position: relative; z-index: 1;
            }
            .lock-input:focus {
                border-color: var(--accent); background: var(--accent-dim);
                box-shadow: 0 0 0 3px rgba(255,0,85,0.15), 0 0 32px var(--accent-glow);
                transform: scale(1.04);
            }

            /* ─── APP SHELL ──────────────────────────────────────────── */
            #app-interface {
                position: relative; z-index: 10;
                width: 100vw; height: 100vh;
                display: flex; flex-direction: column;
                opacity: 0; transform: translateY(14px);
                transition: var(--spring); pointer-events: none;
                perspective: 1400px;
            }
            #app-interface.unlocked { opacity: 1; transform: translateY(0); pointer-events: auto; }

            /* ─── HEADER ─────────────────────────────────────────────── */
            header {
                display: flex; align-items: center; justify-content: space-between;
                padding: var(--hpad-v) var(--hpad-h);
                background: var(--g1);
                backdrop-filter: var(--blur-md); -webkit-backdrop-filter: var(--blur-md);
                border-bottom: 1px solid var(--b1);
                flex-shrink: 0; gap: 12px; flex-wrap: nowrap;
                position: relative; z-index: 200;
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), 0 4px 32px rgba(0,0,0,0.45);
            }
            header::after { content:''; position:absolute; inset:0; background:var(--spec-diag); pointer-events:none; }

            .header-left { display:flex; align-items:center; gap:clamp(10px,1.2vw,18px); flex-shrink:0; }

            .brand {
                font-size: var(--fs-xl); font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
                background: linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.38));
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                cursor: pointer; white-space: nowrap; user-select: none; position: relative; z-index: 1;
            }

            /* ─── HAMBURGER ──────────────────────────────────────────── */
            .menu-btn {
                background: var(--g2); border: 1px solid var(--b1);
                color: rgba(255,255,255,0.65);
                width: clamp(38px,3.4vw,48px); height: clamp(38px,3.4vw,48px);
                border-radius: 13px; cursor: pointer;
                display: flex; flex-direction: column; align-items: center; justify-content: center;
                gap: 5px; padding: 0; flex-shrink: 0; transition: var(--transition);
                backdrop-filter: var(--blur-sm); -webkit-backdrop-filter: var(--blur-sm);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.10);
                position: relative; z-index: 1; overflow: hidden;
            }
            .menu-btn::before { content:''; position:absolute; inset:0; background:var(--spec-top); pointer-events:none; }
            .menu-btn:hover { background:var(--g3); border-color:var(--b2); color:#fff; box-shadow:inset 0 1px 0 rgba(255,255,255,0.16), 0 0 14px rgba(255,255,255,0.05); }
            .menu-btn.open { background:var(--g3); border-color:var(--b2); color:#fff; }
            .menu-btn span {
                display:block; width:clamp(14px,1.2vw,17px); height:1.5px;
                background:currentColor; border-radius:2px;
                transition:transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.2s, width 0.32s;
            }
            .menu-btn.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
            .menu-btn.open span:nth-child(2) { opacity:0; width:0; }
            .menu-btn.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

            /* ─── SEARCH ─────────────────────────────────────────────── */
            .search-wrapper { display:flex; gap:clamp(8px,1.1vw,14px); align-items:center; flex-wrap:nowrap; min-width:0; position:relative; z-index:1; }
            .search-bar {
                background: var(--g2); border: 1px solid var(--b1);
                padding: var(--bpv) clamp(14px,2vw,24px);
                border-radius: 30px; color: #fff; width: clamp(140px,20vw,280px);
                transition: var(--transition); font-size: var(--fs-base); min-width: 0;
                backdrop-filter: var(--blur-sm); -webkit-backdrop-filter: var(--blur-sm);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
            }
            .search-bar::placeholder { color:rgba(255,255,255,0.28); }
            .search-bar:focus {
                width: clamp(160px,26vw,360px); background:var(--g3); outline:none;
                border-color:var(--b2);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), 0 0 0 3px rgba(255,255,255,0.05);
            }

            /* ─── HEADER BUTTONS ─────────────────────────────────────── */
            .hdr-btn {
                background: var(--g2); border: 1px solid var(--b1);
                color: rgba(255,255,255,0.65);
                padding: var(--bpv) var(--bph); border-radius: 20px; cursor: pointer;
                font-size: var(--fs-base); font-weight: 600; transition: var(--transition);
                white-space: nowrap; flex-shrink: 0; display: flex; align-items: center; gap: 7px;
                backdrop-filter: var(--blur-sm); -webkit-backdrop-filter: var(--blur-sm);
                box-shadow: inset 0 1px 0 rgba(255,255,255,0.09);
                position: relative; overflow: hidden;
            }
            .hdr-btn::before { content:''; position:absolute; inset:0; background:var(--spec-top); pointer-events:none; }
            .hdr-btn:hover { background:var(--g3); border-color:var(--b2); color:#fff; box-shadow:inset 0 1px 0 rgba(255,255,255,0.14), 0 6px 22px rgba(0,0,0,0.3); }
            .hdr-btn:active { transform:scale(0.96); }
            .hdr-btn.loading { color:rgba(255,255,255,0.35); cursor:wait; }
            .hdr-icon { font-size:clamp(0.95rem,1.3vw,1.05rem); line-height:1; flex-shrink:0; }

            .fav-toggle-btn {
                background:var(--g2); border:1px solid var(--b1); color:rgba(255,255,255,0.4);
                width:clamp(38px,3.4vw,46px); height:clamp(38px,3.4vw,46px);
                border-radius:50%; cursor:pointer; font-size:clamp(0.95rem,1.3vw,1.15rem);
                display:flex; align-items:center; justify-content:center;
                transition:var(--transition); padding:0; flex-shrink:0;
                backdrop-filter:var(--blur-sm); -webkit-backdrop-filter:var(--blur-sm);
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.08); position:relative; z-index:1;
            }
            .fav-toggle-btn:hover { color:#fff; border-color:var(--b2); background:var(--g3); }
            .fav-toggle-btn.active { border-color:#ffca28; color:#ffca28; background:rgba(255,202,40,0.08); box-shadow:0 0 18px rgba(255,202,40,0.22), inset 0 1px 0 rgba(255,202,40,0.18); }

            /* ─── SIDE PANEL ─────────────────────────────────────────── */
            #menu-panel {
                position:fixed; top:0; left:0; height:100vh;
                width:clamp(250px,28vw,320px);
                z-index:9000;
                background:rgba(6,6,12,0.75);
                backdrop-filter:var(--blur-panel); -webkit-backdrop-filter:var(--blur-panel);
                border-right:1px solid var(--b2);
                display:flex; flex-direction:column;
                transform:translateX(-108%);
                transition:transform 0.42s cubic-bezier(0.22,1,0.28,1);
                overflow:hidden;
                box-shadow:inset -1px 0 0 rgba(255,255,255,0.04), 12px 0 60px rgba(0,0,0,0.75);
            }
            #menu-panel.open { transform:translateX(0); }
            #menu-panel::before {
                content:''; position:absolute; top:0; right:0; width:1px; height:100%;
                background:linear-gradient(180deg,rgba(255,255,255,0.20) 0%,rgba(255,255,255,0.06) 35%,rgba(255,255,255,0) 100%);
                pointer-events:none; z-index:10;
            }
            #menu-panel::after { content:''; position:absolute; inset:0; background:var(--spec-diag); pointer-events:none; }

            .panel-header {
                padding:clamp(24px,3.5vh,38px) clamp(22px,2.5vw,30px) clamp(18px,2vh,26px);
                border-bottom:1px solid var(--b1); background:var(--g1); flex-shrink:0; position:relative;
            }
            .panel-header::after { content:''; position:absolute; inset:0; background:var(--spec-top); pointer-events:none; }
            .panel-eyebrow { font-size:var(--fs-xs); font-weight:700; letter-spacing:3.5px; text-transform:uppercase; color:rgba(255,255,255,0.25); margin-bottom:5px; position:relative; z-index:1; }
            .panel-brand {
                font-size:var(--fs-lg); font-weight:800; letter-spacing:1.5px; text-transform:uppercase;
                background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,0.4));
                -webkit-background-clip:text; -webkit-text-fill-color:transparent;
                position:relative; z-index:1;
            }

            .panel-body { flex:1; overflow-y:auto; padding:10px 10px; -webkit-overflow-scrolling:touch; }

            .menu-item {
                display:flex; align-items:center; gap:13px;
                padding:clamp(11px,1.5vh,15px) clamp(14px,1.5vw,18px);
                border-radius:13px; cursor:pointer; transition:var(--transition);
                color:rgba(255,255,255,0.58); font-size:var(--fs-base); font-weight:500;
                border:1px solid transparent; position:relative; overflow:hidden;
                user-select:none; -webkit-user-select:none;
            }
            .menu-item::before { content:''; position:absolute; inset:0; background:var(--spec-top); border-radius:inherit; pointer-events:none; opacity:0; transition:opacity 0.22s; }
            .menu-item:hover { background:var(--g3); border-color:var(--b1); color:#fff; box-shadow:inset 0 1px 0 rgba(255,255,255,0.10); }
            .menu-item:hover::before { opacity:1; }
            .menu-item:active { transform:scale(0.97); }
            .menu-item-icon-wrap {
                width:clamp(30px,2.4vw,38px); height:clamp(30px,2.4vw,38px);
                display:flex; align-items:center; justify-content:center;
                background:var(--g2); border:1px solid var(--b1);
                border-radius:10px; flex-shrink:0; font-size:clamp(0.9rem,1.2vw,1.05rem);
                transition:var(--transition);
            }
            .menu-item:hover .menu-item-icon-wrap { background:var(--g4); border-color:var(--b2); box-shadow:0 0 10px rgba(255,255,255,0.06); }
            .menu-item-label { flex:1; }
            .menu-divider { height:1px; margin:8px 12px; background:linear-gradient(90deg,transparent,var(--b1) 20%,var(--b1) 80%,transparent); }
            .panel-footer { padding:clamp(14px,1.8vh,20px) clamp(18px,2vw,24px); border-top:1px solid var(--b1); font-size:var(--fs-xs); color:rgba(255,255,255,0.15); text-align:center; flex-shrink:0; background:var(--g0); }

            /* ─── BACKDROP ───────────────────────────────────────────── */
            #menu-backdrop {
                position:fixed; inset:0; z-index:8999;
                background:transparent; pointer-events:none;
                transition:background 0.42s ease, backdrop-filter 0.42s ease;
            }
            #menu-backdrop.active { background:rgba(0,0,0,0.50); backdrop-filter:blur(3px); -webkit-backdrop-filter:blur(3px); pointer-events:auto; }

            /* ─── NEW TAB CONFIRM DIALOG ─────────────────────────────── */
            #newtab-overlay {
                position:fixed; inset:0; z-index:10500;
                background:rgba(3,3,6,0.72);
                backdrop-filter:var(--blur-lg); -webkit-backdrop-filter:var(--blur-lg);
                display:flex; align-items:center; justify-content:center;
                opacity:0; pointer-events:none;
                transition:opacity 0.22s ease;
            }
            #newtab-overlay.active { opacity:1; pointer-events:auto; }
            .newtab-card {
                background:var(--g1); border:1px solid var(--b2); border-radius:24px;
                padding:clamp(28px,4vw,44px) clamp(28px,5vw,52px);
                max-width:clamp(300px,40vw,460px); width:90vw;
                backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md);
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 80px rgba(0,0,0,0.65);
                position:relative; overflow:hidden; text-align:center;
                transform:scale(0.94) translateY(8px);
                transition:transform 0.28s cubic-bezier(0.22,1,0.28,1);
            }
            #newtab-overlay.active .newtab-card { transform:scale(1) translateY(0); }
            .newtab-card::before { content:''; position:absolute; inset:0; background:var(--spec-top); border-radius:inherit; pointer-events:none; }
            .newtab-card::after  { content:''; position:absolute; inset:0; background:var(--spec-diag); border-radius:inherit; pointer-events:none; }
            .newtab-icon {
                font-size:2rem; margin-bottom:14px; position:relative; z-index:1;
                width:56px; height:56px; border-radius:16px;
                background:var(--g2); border:1px solid var(--b2);
                display:flex; align-items:center; justify-content:center; margin:0 auto 16px;
            }
            .newtab-title {
                font-size:var(--fs-xs); font-weight:700; letter-spacing:3px; text-transform:uppercase;
                color:rgba(255,255,255,0.28); margin-bottom:8px; position:relative; z-index:1;
            }
            .newtab-name {
                font-size:var(--fs-lg); font-weight:800; color:#fff;
                margin-bottom:10px; position:relative; z-index:1;
            }
            .newtab-body {
                font-size:var(--fs-sm); color:rgba(255,255,255,0.45); line-height:1.55;
                margin-bottom:28px; position:relative; z-index:1;
            }
            .newtab-actions { display:flex; gap:10px; justify-content:center; position:relative; z-index:1; }
            .newtab-yes {
                background:var(--accent); border:none; color:#fff;
                padding:clamp(9px,1.2vh,13px) clamp(22px,3vw,32px);
                border-radius:20px; cursor:pointer; font-weight:700; font-size:var(--fs-base);
                transition:var(--transition);
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);
            }
            .newtab-yes:hover { background:#ff2d6e; box-shadow:0 0 22px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.14); }
            .newtab-no {
                background:var(--g2); border:1px solid var(--b1); color:rgba(255,255,255,0.7);
                padding:clamp(9px,1.2vh,13px) clamp(22px,3vw,32px);
                border-radius:20px; cursor:pointer; font-weight:600; font-size:var(--fs-base);
                transition:var(--transition);
                backdrop-filter:var(--blur-sm); -webkit-backdrop-filter:var(--blur-sm);
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.09);
            }
            .newtab-no:hover { background:var(--g3); border-color:var(--b2); color:#fff; }

            /* ─── CARD GRID ──────────────────────────────────────────── */
            .grid-container {
                flex:1; min-height:0;
                padding:var(--gpad);
                padding-bottom:calc(var(--gpad) * 2.5);
                overflow-y:auto; overflow-x:hidden;
                display:grid;
                grid-template-columns:repeat(auto-fill,minmax(clamp(220px,22vw,370px),1fr));
                gap:var(--ggap); align-content:start;
                transform-style:preserve-3d; -webkit-overflow-scrolling:touch;
            }
            @media (min-width:2560px) {
                .grid-container { grid-template-columns:repeat(auto-fill,minmax(420px,1fr)); }
            }

            /* ─── CARDS ──────────────────────────────────────────────── */
            .card {
                background:var(--g1); border:1px solid var(--b1);
                backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md);
                border-radius:var(--crad); padding:var(--cpad);
                cursor:pointer; position:relative; overflow:hidden;
                transition:transform 0.14s ease-out, border-color 0.28s, background 0.28s, box-shadow 0.28s;
                transform-style:preserve-3d; will-change:transform; display:block;
                box-shadow:0 8px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08);
                user-select:none; -webkit-user-select:none;
            }
            .card.hidden { display:none !important; }
            .card::after  { content:''; position:absolute; inset:0; background:var(--spec-top); border-radius:inherit; pointer-events:none; z-index:1; opacity:0.7; transition:opacity 0.28s; }
            .card::before { content:''; position:absolute; inset:0; background:radial-gradient(circle 200px at var(--mx,50%) var(--my,50%),rgba(255,255,255,0.07),transparent 100%); z-index:2; pointer-events:none; opacity:0; transition:opacity 0.22s; }
            .card:hover::before { opacity:1; }
            .card:hover { background:var(--g2); border-color:var(--b2); box-shadow:0 22px 52px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.13), 0 0 0 1px rgba(255,255,255,0.05); }
            .card:hover::after { opacity:1; }

            /* new-tab badge on cards */
            .card .newtab-badge {
                position:absolute; top:14px; right:14px;
                font-size:10px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
                color:rgba(255,255,255,0.30); background:var(--g2); border:1px solid var(--b1);
                padding:3px 8px; border-radius:20px; z-index:3;
                transition:var(--transition);
            }
            .card:hover .newtab-badge { color:rgba(255,255,255,0.55); border-color:var(--b2); }

            .card h3 { margin:0 0 9px; font-size:var(--fs-card-h); font-weight:700; transition:var(--transition); transform:translateZ(28px); position:relative; z-index:3; }
            .card p  { margin:0; font-size:var(--fs-card-p); color:rgba(255,255,255,0.40); line-height:1.55; transform:translateZ(14px); transition:var(--transition); position:relative; z-index:3; }
            .card .fav-star { position:absolute; bottom:clamp(16px,2vw,26px); right:clamp(40px,4vw,52px); font-size:clamp(0.95rem,1vw,1.1rem); color:rgba(255,255,255,0.10); transition:var(--transition); transform:translateZ(18px); z-index:3; }
            .card.is-favorite .fav-star { color:#ffca28; filter:drop-shadow(0 0 8px rgba(255,202,40,0.55)); }
            .card:hover h3 { color:var(--accent); }
            .card:hover p  { color:rgba(255,255,255,0.68); }

            @media (hover:none) {
                .card:active { background:var(--g3); border-color:var(--b2); transform:scale(0.98) !important; }
                .card:hover h3 { color:inherit; }
            }

            /* ─── CONTEXT MENU ───────────────────────────────────────── */
            #custom-context-menu {
                position:fixed; z-index:10000; width:clamp(164px,18vw,204px);
                background:rgba(8,8,14,0.82); backdrop-filter:var(--blur-lg); -webkit-backdrop-filter:var(--blur-lg);
                border:1px solid var(--b2); border-radius:16px; padding:6px 0;
                box-shadow:0 18px 52px rgba(0,0,0,0.78), inset 0 1px 0 rgba(255,255,255,0.13);
                opacity:0; transform:scale(0.92) translateY(-4px); transform-origin:top left;
                pointer-events:none; transition:opacity 0.14s ease, transform 0.18s cubic-bezier(0.16,1,0.3,1);
                overflow:hidden;
            }
            #custom-context-menu::before { content:''; position:absolute; inset:0; background:var(--spec-top); border-radius:inherit; pointer-events:none; }
            #custom-context-menu.active { opacity:1; transform:scale(1) translateY(0); pointer-events:auto; }
            .context-item { padding:10px 16px; font-size:var(--fs-sm); color:rgba(255,255,255,0.62); cursor:pointer; transition:var(--transition); display:flex; align-items:center; gap:9px; position:relative; z-index:1; }
            .context-item:hover { background:var(--g3); color:#fff; }
            .context-item.accent-item:hover { color:var(--accent); }

            /* ─── THEATER ────────────────────────────────────────────── */
            #theater-overlay {
                position:fixed; inset:0; z-index:5000;
                background:rgba(2,2,5,0.95); backdrop-filter:var(--blur-lg); -webkit-backdrop-filter:var(--blur-lg);
                display:flex; flex-direction:column; opacity:0; pointer-events:none; transition:var(--transition);
            }
            #theater-overlay.active { opacity:1; pointer-events:auto; }
            .theater-header {
                display:flex; justify-content:space-between; align-items:center;
                padding:clamp(10px,1.5vh,18px) clamp(16px,3vw,32px);
                border-bottom:1px solid var(--b1);
                background:var(--g1); backdrop-filter:var(--blur-md); -webkit-backdrop-filter:var(--blur-md);
                flex-shrink:0; gap:10px;
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.4);
            }
            .theater-controls { display:flex; gap:clamp(6px,1vw,12px); flex-wrap:wrap; align-items:center; }
            .action-btn {
                background:var(--g2); border:1px solid var(--b1); color:rgba(255,255,255,0.75);
                padding:clamp(6px,1vh,10px) clamp(12px,1.5vw,18px);
                border-radius:20px; cursor:pointer; font-size:var(--fs-sm); transition:var(--transition); white-space:nowrap;
                backdrop-filter:var(--blur-sm); -webkit-backdrop-filter:var(--blur-sm);
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.09);
            }
            .action-btn:hover { background:var(--g4); border-color:var(--b2); color:#fff; box-shadow:inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 14px rgba(0,0,0,0.3); }
            .close-btn {
                background:var(--accent); border:none; color:#fff;
                padding:clamp(6px,1vh,10px) clamp(14px,2vw,22px);
                border-radius:20px; cursor:pointer; font-weight:600; font-size:var(--fs-sm);
                transition:var(--transition); white-space:nowrap;
                box-shadow:inset 0 1px 0 rgba(255,255,255,0.14);
            }
            .close-btn:hover { background:#ff2d6e; box-shadow:0 0 22px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.14); }
            .iframe-container { flex:1; width:100%; min-height:0; }
            #game-frame { width:100%; height:100%; border:none; background:#000; display:block; }

            /* ─── SCROLLBAR ──────────────────────────────────────────── */
            ::-webkit-scrollbar { width:clamp(4px,0.4vw,7px); height:clamp(4px,0.4vw,7px); }
            ::-webkit-scrollbar-track { background:transparent; }
            ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.09); border-radius:10px; }
            ::-webkit-scrollbar-thumb:hover { background:var(--accent); }

            /* ─── RESPONSIVE ─────────────────────────────────────────── */
            @media (max-width:1024px) {
                .hdr-btn .btn-label { display:none; }
                .hdr-btn { padding:var(--bpv) 13px; }
                .search-bar { width:clamp(120px,18vw,220px); }
                .search-bar:focus { width:clamp(150px,22vw,280px); }
            }
            @media (max-width:768px) {
                header { flex-direction:column; align-items:stretch; gap:9px; padding:12px var(--hpad-h); }
                .header-left { justify-content:flex-start; }
                .search-wrapper { width:100%; justify-content:space-between; }
                .search-bar { flex:1; width:auto; min-width:0; }
                .search-bar:focus { width:auto; }
                .grid-container { grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); }
                #menu-panel { width:clamp(250px,75vw,320px); }
            }
            @media (max-width:480px) {
                header { padding:10px 16px; gap:8px; }
                .brand { font-size:1.05rem; }
                .search-wrapper { gap:7px; }
                .search-bar { flex:1; width:auto; min-width:0; padding:9px 13px; font-size:0.84rem; }
                .search-bar:focus { width:auto; }
                .hdr-btn { padding:9px 11px; border-radius:50%; width:40px; height:40px; justify-content:center; gap:0; }
                .fav-toggle-btn { width:40px; height:40px; font-size:1rem; }
                .grid-container { grid-template-columns:1fr; padding:14px 16px; padding-bottom:max(80px, calc(14px + env(safe-area-inset-bottom, 0px))); gap:14px; }
                .card { padding:20px; border-radius:16px; transform:none !important; }
                .card h3 { font-size:1.05rem; }
                .card p  { font-size:0.82rem; }
                .theater-header { padding:10px 14px; flex-wrap:wrap; gap:8px; }
                .theater-controls { gap:7px; flex-wrap:wrap; }
                .action-btn { padding:7px 12px; font-size:0.78rem; }
                .close-btn  { padding:7px 14px; font-size:0.78rem; }
                #theater-title { font-size:0.92rem; }
                .context-item { padding:13px 18px; font-size:0.88rem; }
                #custom-context-menu { width:calc(100vw - 32px); left:16px !important; }
                #menu-panel { width:84vw; }
                .newtab-actions { flex-direction:column; }
                .newtab-yes, .newtab-no { width:100%; }
            }

            @supports (padding: max(0px)) {
                header {
                    padding-left:  max(var(--hpad-h), env(safe-area-inset-left));
                    padding-right: max(var(--hpad-h), env(safe-area-inset-right));
                    padding-top:   max(var(--hpad-v), env(safe-area-inset-top));
                }
                .grid-container {
                    padding-left:  max(var(--gpad), env(safe-area-inset-left));
                    padding-right: max(var(--gpad), env(safe-area-inset-right));
                    padding-bottom: max(calc(var(--gpad)+10px), env(safe-area-inset-bottom));
                }
            }
        `;
        document.head.appendChild(style);

        if (!document.querySelector('meta[name="viewport"]')) {
            const vp = document.createElement("meta");
            vp.name = "viewport";
            vp.content = "width=device-width, initial-scale=1, viewport-fit=cover";
            document.head.appendChild(vp);
        }
    },

    // ==========================================
    // 3. KINETIC DOT BACKGROUND
    // ==========================================
    initMatrix() {
        const canvas = document.createElement("canvas");
        canvas.id = "canvas-dot";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        let mouse = { x: -1000, y: -1000 };
        const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
        window.addEventListener("resize", resize); resize();
        window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = this.settings.dotcolor;
            const sp = this.settings.dotspacing;
            for (let x = sp/2; x < canvas.width; x += sp) {
                for (let y = sp/2; y < canvas.height; y += sp) {
                    const dx = mouse.x-x, dy = mouse.y-y;
                    const dist = Math.sqrt(dx*dx+dy*dy);
                    let rx = x, ry = y;
                    if (dist < 120) { const f=(120-dist)/120; rx-=(dx/dist)*f*12; ry-=(dy/dist)*f*12; }
                    ctx.beginPath(); ctx.arc(rx,ry,dist<120?1.8:1,0,Math.PI*2); ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        };
        draw();
    },

    // ==========================================
    // 4. DOM BUILD
    // ==========================================
    buildDOM() {
        try { this.favorites = JSON.parse(localStorage.getItem("nova_favorites")) || []; }
        catch(e) { this.favorites = []; }

        // Lock screen
        const lockScreen = document.createElement("div");
        lockScreen.id = "lock-screen";
        lockScreen.innerHTML = `
            <div class="lock-card">
                <div class="lock-wordmark">Nova Gaming</div>
                <span class="lock-label">Enter PIN</span>
                <input type="password" class="lock-input" placeholder="••••" maxlength="4" autocomplete="off">
            </div>`;
        document.body.appendChild(lockScreen);

        // Header buttons from config
        const headerBtnsHTML = this.settings.headerButtons.map(btn => `
            <button class="hdr-btn" id="${btn.id}" title="${btn.label}">
                <span class="hdr-icon">${btn.icon}</span>
                <span class="btn-label">${btn.label}</span>
            </button>`).join("");

        // App interface
        const app = document.createElement("div");
        app.id = "app-interface";
        app.innerHTML = `
            <header>
                <div class="header-left">
                    <button class="menu-btn" id="menu-toggle-btn" title="Menu" aria-label="Open menu">
                        <span></span><span></span><span></span>
                    </button>
                    <div class="brand" onclick="location.reload()">Nova Gaming</div>
                </div>
                <div class="search-wrapper">
                    ${headerBtnsHTML}
                    <input type="text" class="search-bar" id="search-input" placeholder="Search games...">
                    <button class="fav-toggle-btn" id="fav-toggle" title="Filter Favorites">★</button>
                </div>
            </header>
            <div class="grid-container" id="card-grid"></div>`;
        document.body.appendChild(app);

        // Menu backdrop
        const menuBackdrop = document.createElement("div");
        menuBackdrop.id = "menu-backdrop";
        document.body.appendChild(menuBackdrop);

        // Side panel from config
        const menuItemsHTML = this.settings.menuItems.map(item => {
            if (item.action === "separator") return `<div class="menu-divider"></div>`;
            return `<div class="menu-item" data-action="${item.action}" ${item.newTab ? 'data-newtab="true"' : ''}>
                <span class="menu-item-icon-wrap">${item.icon}</span>
                <span class="menu-item-label">${item.label}</span>
            </div>`;
        }).join("");

        const menuPanel = document.createElement("div");
        menuPanel.id = "menu-panel";
        menuPanel.innerHTML = `
            <div class="panel-header">
                <div class="panel-eyebrow">Navigation</div>
                <div class="panel-brand">Nova Gaming</div>
            </div>
            <div class="panel-body" id="panel-body">
                ${menuItemsHTML}
            </div>
            <div class="panel-footer">Nova Gaming Engine</div>`;
        document.body.appendChild(menuPanel);

        // New-tab confirm overlay
        const ntOverlay = document.createElement("div");
        ntOverlay.id = "newtab-overlay";
        ntOverlay.innerHTML = `
            <div class="newtab-card">
                <div class="newtab-icon" id="nt-icon">⧉</div>
                <div class="newtab-title">Opening in New Tab</div>
                <div class="newtab-name" id="nt-name">—</div>
                <div class="newtab-body">This will open in a new browser tab. Continue?</div>
                <div class="newtab-actions">
                    <button class="newtab-yes" id="nt-yes">Yes, Open</button>
                    <button class="newtab-no"  id="nt-no">Cancel</button>
                </div>
            </div>`;
        document.body.appendChild(ntOverlay);

        // Theater
        const theater = document.createElement("div");
        theater.id = "theater-overlay";
        theater.innerHTML = `
            <div class="theater-header">
                <div class="brand" id="theater-title">Game Title</div>
                <div class="theater-controls">
                    <button class="action-btn" id="game-fullscreen">Fullscreen</button>
                    <button class="action-btn" id="game-download-btn" style="display:none">↓ Download</button>
                    <button class="action-btn" id="game-cloak-tab">Tab Cloak</button>
                    <button class="close-btn" id="close-theater">✕ Close</button>
                </div>
            </div>
            <div class="iframe-container" id="iframe-wrapper">
                <iframe id="game-frame" src="" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-pointer-lock allow-storage-api allow-modals allow-top-navigation-by-user-activation" allowfullscreen></iframe>
            </div>`;
        document.body.appendChild(theater);

        const ctxMenu = document.createElement("div");
        ctxMenu.id = "custom-context-menu";
        document.body.appendChild(ctxMenu);

        this.loadNextBatch();
    },

    // ==========================================
    // 5. NEW-TAB CONFIRM DIALOG
    // ==========================================
    // Shows an in-page glass confirm dialog.
    // onConfirm() is called if the user clicks Yes.
    showNewTabConfirm(name, icon, onConfirm) {
        const overlay = document.getElementById("newtab-overlay");
        document.getElementById("nt-name").innerText = name;
        document.getElementById("nt-icon").innerText = icon || "⧉";
        overlay.classList.add("active");

        const yes = document.getElementById("nt-yes");
        const no  = document.getElementById("nt-no");

        // Clone to remove old listeners
        const newYes = yes.cloneNode(true); yes.replaceWith(newYes);
        const newNo  = no.cloneNode(true);  no.replaceWith(newNo);

        const dismiss = () => overlay.classList.remove("active");
        document.getElementById("nt-yes").onclick = () => { dismiss(); onConfirm(); };
        document.getElementById("nt-no").onclick  = () => dismiss();
        // Click outside card also dismisses
        overlay.onclick = e => { if (e.target === overlay) dismiss(); };
    },

    // ==========================================
    // 6. MENU PANEL CONTROL
    // ==========================================
    toggleMenu() { document.getElementById("menu-panel").classList.contains("open") ? this.closeMenu() : this.openMenu(); },
    openMenu()  { document.getElementById("menu-panel").classList.add("open");    document.getElementById("menu-backdrop").classList.add("active");    document.getElementById("menu-toggle-btn").classList.add("open"); },
    closeMenu() { document.getElementById("menu-panel").classList.remove("open"); document.getElementById("menu-backdrop").classList.remove("active"); document.getElementById("menu-toggle-btn").classList.remove("open"); },

    // Central action dispatcher
    handleAction(action, newTab, label, icon) {
        if (!action) return;
        const doAction = () => {
            if      (action === "reload")              { this.closeMenu(); location.reload(); }
            else if (action === "cloak")               { this.closeMenu(); this.triggerCloak(); }
            else if (action.startsWith("url:"))        { this.closeMenu(); window.open(action.slice(4), "_blank"); }
            else if (action.startsWith("custom:"))     { const fn=action.slice(7); this.closeMenu(); if (typeof this[fn]==="function") this[fn](); }
        };

        if (newTab && action.startsWith("url:")) {
            this.showNewTabConfirm(label || action.slice(4), icon || "⧉", doAction);
        } else {
            doAction();
        }
    },

    // ==========================================
    // 7. SAVE DOWNLOAD
    // ==========================================
    executeSaveDownload() {
        const btn = document.getElementById("save-singlefile-btn");
        const lbl = btn && btn.querySelector(".btn-label");
        if (btn) { btn.classList.add("loading"); if (lbl) lbl.innerText = " Saving…"; }

        fetch(this.settings.saveFileUrl)
            .then(r => { if (!r.ok) throw 0; return r.blob(); })
            .then(blob => {
                const u = URL.createObjectURL(blob);
                const a = Object.assign(document.createElement("a"), { href:u, download:this.settings.saveFileName, style:"display:none" });
                document.body.appendChild(a); a.click(); document.body.removeChild(a);
                URL.revokeObjectURL(u);
            })
            .catch(() => window.open(this.settings.saveFileUrl, "_blank"))
            .finally(() => { if (btn) { btn.classList.remove("loading"); if (lbl) lbl.innerText = " Save"; } });
    },

    // ==========================================
    // 8. CARD RENDERING
    // ==========================================
    loadNextBatch() {
        const grid = document.getElementById("card-grid");
        if (!grid) return;
        const start = this.renderedCount;
        const end   = Math.min(start + this.settings.itemsPerLoad, this.registry.length);
        if (start >= this.registry.length) return;

        for (let i = start; i < end; i++) {
            const item  = this.registry[i];
            const isFav = this.favorites.includes(item.title);
            const card  = document.createElement("div");
            card.className = `card${isFav ? " is-favorite" : ""}`;

            // Show a subtle "NEW TAB" badge on cards that open in a new tab
            const badge = item.newTab ? `<span class="newtab-badge">New Tab</span>` : "";
            card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p><span class="fav-star">★</span>${badge}`;

            card.addEventListener("mousemove", e => {
                const r = card.getBoundingClientRect();
                const x = e.clientX-r.left, y = e.clientY-r.top;
                card.style.setProperty("--mx", `${x}px`);
                card.style.setProperty("--my", `${y}px`);
                const rx = ((r.height/2-y)/(r.height/2))*11;
                const ry = ((x-r.width/2) /(r.width/2)) *11;
                card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02) translateY(-4px)`;
            });
            card.addEventListener("mouseleave", () => { card.style.transform = ""; });
            card.addEventListener("click",       () => this.launchGame(item));
            card.addEventListener("contextmenu", e => { e.preventDefault(); e.stopPropagation(); this.showContextMenu(e.clientX, e.clientY, item, card); });

            grid.appendChild(card);
            this.cachedCards.push({ element:card, title:item.title, searchString:`${item.title.toLowerCase()} ${item.desc.toLowerCase()}` });
        }
        this.renderedCount = end;
        this.applyFilters();
    },

    // ==========================================
    // 9. LAUNCH LOGIC
    // ==========================================
    launchGame(item) {
        // newTab: true → show confirm dialog, then open in new tab
        if (item.newTab) {
            this.showNewTabConfirm(item.title, "⧉", () => {
                // Fetch → blob → new tab  (avoids CORS / offline issues)
                this._openGameInNewTab(item.url, item.title);
            });
            return;
        }

        // newTab: false → load in theater iframe
        const theater = document.getElementById("theater-overlay");
        const frame   = document.getElementById("game-frame");
        document.getElementById("theater-title").innerText = item.title;
        theater.classList.add("active");
        // Store current item so theater buttons know which game is playing
        this._theaterItem = item;
        // Show/hide download button based on item.download flag
        const dlBtn = document.getElementById("game-download-btn");
        if (dlBtn) dlBtn.style.display = (item.download !== false) ? "" : "none";

        const isCDN = item.url.includes("cdn.jsdelivr.net") || item.url.includes("githubusercontent") || item.url.endsWith(".html") || item.url.endsWith(".txt");
        if (isCDN) {
            frame.src = "about:blank";
            fetch(item.url)
                .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
                .then(html => {
                    frame.src = URL.createObjectURL(new Blob([html], {type:"text/html;charset=utf-8"}));
                })
                .catch(err => {
                    console.warn("Blob load failed, falling back to direct src:", err);
                    frame.src = item.url;
                });
        } else {
            frame.src = item.url;
        }
    },

    // Opens a game URL in a proper new tab (fetch → blob for CDN games, direct src for others)
    _openGameInNewTab(url, title) {
        const isCDN = url.includes("cdn.jsdelivr.net") || url.includes("githubusercontent") || url.endsWith(".html");

        if (isCDN) {
            // Fetch the HTML then write into the new tab so it has a real document
            const w = window.open("about:blank", "_blank");
            if (!w) { alert("Popup blocked — please allow popups and try again."); return; }
            w.document.write(`<html><body style="margin:0;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><p>Loading ${title}…</p></body></html>`);
            w.document.close();

            fetch(url)
                .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
                .then(html => {
                    // Replace the tab content
                    w.document.open(); w.document.write(html); w.document.close();
                    try { w.document.title = title; } catch(e) {}
                })
                .catch(() => {
                    // If fetch fails from new tab, just point it directly
                    try { w.location.href = url; } catch(e) {}
                });
        } else {
            // Non-CDN (external sites) — just open directly
            window.open(url, "_blank");
        }
    },

    // ==========================================
    // 10. CONTEXT MENU & FAVORITES
    // ==========================================
    showContextMenu(x, y, item, cardEl) {
        const menu  = document.getElementById("custom-context-menu");
        const isFav = this.favorites.includes(item.title);
        const launchLabel = item.newTab ? "⧉ Open in New Tab" : "⚡ Launch";
        const dlRow = (item.download !== false) ? `<div class="context-item" id="ctx-dl">↓ Download File</div>` : "";
        menu.innerHTML = `
            <div class="context-item" id="ctx-launch">${launchLabel}</div>
            <div class="context-item" id="ctx-fav">${isFav ? "✕ Remove Favorite" : "★ Add Favorite"}</div>
            <div class="context-item accent-item" id="ctx-cloak">⊘ Cloak Launch</div>
            ${dlRow}`;

        const mw = 204, mh = 168;
        menu.style.left = `${Math.min(x, innerWidth-mw-10)}px`;
        menu.style.top  = `${Math.min(y, innerHeight-mh-10)}px`;
        menu.classList.add("active");

        document.getElementById("ctx-launch").onclick = () => { this.hideContextMenu(); this.launchGame(item); };
        document.getElementById("ctx-cloak").onclick  = () => { this.hideContextMenu(); this.executeCloakLaunch(item.url); };
        document.getElementById("ctx-fav").onclick    = () => this.toggleFavorite(item.title, cardEl);
        const ctxDl = document.getElementById("ctx-dl");
        if (ctxDl) ctxDl.onclick = () => {
            this.hideContextMenu();
            fetch(item.url)
                .then(r => { if (!r.ok) throw 0; return r.blob(); })
                .then(blob => {
                    const u = URL.createObjectURL(blob);
                    const ext = item.url.includes(".html") ? ".html" : ".zip";
                    const a = Object.assign(document.createElement("a"), {href:u, download:item.title.replace(/\s+/g,"_")+ext, style:"display:none"});
                    document.body.appendChild(a); a.click(); document.body.removeChild(a);
                    URL.revokeObjectURL(u);
                })
                .catch(() => window.open(item.url,"_blank"));
        };
    },

    hideContextMenu() { document.getElementById("custom-context-menu")?.classList.remove("active"); },

    toggleFavorite(title, cardEl) {
        const idx = this.favorites.indexOf(title);
        if (idx > -1) { this.favorites.splice(idx,1); cardEl.classList.remove("is-favorite"); }
        else          { this.favorites.push(title);   cardEl.classList.add("is-favorite"); }
        try { localStorage.setItem("nova_favorites", JSON.stringify(this.favorites)); } catch(e) {}
        this.applyFilters(); this.hideContextMenu();
    },

    // ==========================================
    // 11. SEARCH & FILTER
    // ==========================================
    toggleFavoritesFilter(btn) {
        this.onlyShowFavorites = !this.onlyShowFavorites;
        btn.classList.toggle("active", this.onlyShowFavorites);
        this.applyFilters();
    },
    applyFilters() {
        for (const card of this.cachedCards) {
            const isFav     = this.favorites.includes(card.title);
            const matchFav  = !this.onlyShowFavorites || isFav;
            const matchSrch = !this.searchQuery || card.searchString.includes(this.searchQuery);
            card.element.classList.toggle("hidden", !(matchFav && matchSrch));
        }
    },

    // ==========================================
    // 12. EVENT BINDING
    // ==========================================
    bindEvents() {
        const $  = id  => document.getElementById(id);
        const $$ = sel => document.querySelector(sel);

        const lockInput    = $$(".lock-input");
        const lockScreen   = $("lock-screen");
        const appIface     = $("app-interface");
        const searchBar    = $("search-input");
        const favBtn       = $("fav-toggle");
        const menuToggle   = $("menu-toggle-btn");
        const menuBackdrop = $("menu-backdrop");
        const menuPanel    = $("menu-panel");
        const grid         = $("card-grid");
        const theater      = $("theater-overlay");
        const frame        = $("game-frame");

        lockInput?.addEventListener("input", e => {
            if (e.target.value === this.settings.unlockcode) {
                lockScreen.style.opacity = "0";
                setTimeout(() => lockScreen.remove(), 380);
                appIface.classList.add("unlocked");
                lockInput.blur();
            }
        });

        searchBar?.addEventListener("input", e => {
            this.searchQuery = e.target.value.toLowerCase().trim();
            this.applyFilters();
        });

        favBtn?.addEventListener("click", () => this.toggleFavoritesFilter(favBtn));

        menuToggle?.addEventListener("click", e => { e.stopPropagation(); this.toggleMenu(); });
        menuBackdrop?.addEventListener("click", () => this.closeMenu());
        menuPanel?.addEventListener("click", e => e.stopPropagation());

        // Menu panel items
        menuPanel?.querySelectorAll(".menu-item[data-action]").forEach(el => {
            el.addEventListener("click", () => {
                const cfg = this.settings.menuItems.find(m => m.action === el.dataset.action && m.label === el.querySelector(".menu-item-label")?.innerText);
                this.handleAction(el.dataset.action, el.dataset.newtab === "true", cfg?.label, cfg?.icon);
            });
        });

        // Header buttons
        this.settings.headerButtons.forEach(btn => {
            const el = document.getElementById(btn.id);
            el?.addEventListener("click", () => this.handleAction(btn.action, btn.newTab, btn.label, btn.icon));
        });

        grid?.addEventListener("scroll", () => {
            if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 150) this.loadNextBatch();
        });

        $("game-fullscreen")?.addEventListener("click", () => { $("iframe-wrapper")?.requestFullscreen?.(); });
        $("game-cloak-tab")?.addEventListener("click",  () => this.executeCloakLaunch(frame.src));
        $("close-theater")?.addEventListener("click",   () => { theater.classList.remove("active"); frame.src = ""; this._theaterItem = null; });
        $("game-download-btn")?.addEventListener("click", () => {
            const item = this._theaterItem;
            if (!item) return;
            fetch(item.url)
                .then(r => { if (!r.ok) throw 0; return r.blob(); })
                .then(blob => {
                    const u = URL.createObjectURL(blob);
                    const ext = item.url.includes(".html") ? ".html" : ".zip";
                    const a = Object.assign(document.createElement("a"), {href:u, download:item.title.replace(/\s+/g,"_")+ext, style:"display:none"});
                    document.body.appendChild(a); a.click(); document.body.removeChild(a);
                    URL.revokeObjectURL(u);
                })
                .catch(() => window.open(item.url, "_blank"));
        });

        window.addEventListener("click",       () => this.hideContextMenu());
        window.addEventListener("contextmenu", e  => { if (!e.target.closest(".card")) { e.preventDefault(); this.hideContextMenu(); } });
        window.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                if (document.getElementById("newtab-overlay").classList.contains("active"))
                    document.getElementById("newtab-overlay").classList.remove("active");
                else if ($("menu-panel").classList.contains("open"))
                    this.closeMenu();
                else
                    this.triggerCloak();
            }
        });
    },

    // ==========================================
    // 13. CLOAK / STEALTH
    // ==========================================
    executeCloakLaunch(url) {
        // Opens the game cloaked in a new tab styled as Google Classroom
        if (!url || url === location.href) return;
        const w = window.open("about:blank", "_blank");
        if (!w) { alert("Popup blocked — please allow popups."); return; }
        w.document.title = "Google Classroom";
        const lnk = w.document.createElement("link");
        Object.assign(lnk, { rel:"shortcut icon", href:"https://ssl.gstatic.com/classroom/favicon.png" });
        w.document.head.appendChild(lnk);
        w.document.body.style.cssText = "margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;background:#000";
        const iframe = w.document.createElement("iframe");
        iframe.style.cssText = "width:100%;height:100%;border:none";
        iframe.setAttribute("allowfullscreen","true");
        if (url.startsWith("blob:")) {
            fetch(document.getElementById("game-frame").src)
                .then(r => r.text())
                .then(html => { iframe.src = w.URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"})); })
                .catch(() => { iframe.src = url; });
        } else { iframe.src = url; }
        w.document.body.appendChild(iframe);
        this.hideContextMenu();
    },

    triggerCloak() {
        // How this works:
        // 1. We grab the ENTIRE source of loader.js (this script) as a text blob.
        // 2. We navigate THIS tab to about:blank.
        // 3. Once it's blank we inject a <script> that re-runs loader.js from the blob URL.
        // 4. The engine boots fresh — full styles, dot matrix, everything — inside about:blank.
        // 5. Tab icon + title are set to the cloak values.
        const icon  = this.settings.cloakicon;
        const title = this.settings.cloaktitle;

        // Find the <script> tag that loaded this file so we can re-fetch its source
        // Works whether loaded as <script src="loader.js"> or any path
        const scripts = Array.from(document.scripts);
        const loaderScript = scripts.find(s => s.src && s.src.includes("loader"));
        const scriptSrc = loaderScript ? loaderScript.src : null;

        // Helper: inject the engine into a blank document
        const injectIntoBlank = (scriptText) => {
            const blob   = new Blob([scriptText], { type: "text/javascript" });
            const blobUrl = URL.createObjectURL(blob);

            // Build a minimal host page that sets the cloak title/icon then boots the engine
            const hostHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${title}</title>
<link rel="shortcut icon" type="image/x-icon" href="${icon}">
</head>
<body>
<script>
// Restore the loader.js blob into this blank page
var s = document.createElement("script");
s.src = "${blobUrl}";
document.head.appendChild(s);
<\/script>
</body>
</html>`;

            // Navigate this tab to about:blank, then immediately write the host page
            // document.open() changes the URL to about:blank
            document.open();
            document.write(hostHTML);
            document.close();
        };

        if (scriptSrc) {
            // Fetch the real loader.js source and re-inject it
            fetch(scriptSrc)
                .then(r => r.text())
                .then(txt => injectIntoBlank(txt))
                .catch(() => {
                    // If fetch fails (e.g. file:// protocol), try reading from current script tag
                    injectIntoBlank(loaderScript.textContent || "");
                });
        } else {
            // Inline fallback: grab text from an inline script tag if src isn't available
            const inlineScript = scripts.find(s => !s.src && s.textContent.includes("supreme_engine"));
            if (inlineScript) {
                injectIntoBlank(inlineScript.textContent);
            } else {
                // Last resort: just go to about:blank cleanly
                location.replace("about:blank");
            }
        }
    },

    // ==========================================
    // 14. BOOT
    // ==========================================
    boot() {
        this.injectstyles();
        this.buildDOM();
        this.initMatrix();
        this.bindEvents();
    }
};

supreme_engine.boot();
