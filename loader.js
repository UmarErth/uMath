/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         NOVA GAMING — SELF-SERVE CONFIG                  ║
 * ║  Change values here. No coding knowledge needed.         ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  ACTION TYPES (for menu items / buttons):
 *    "reload"           → refresh page
 *    "cloak"            → panic cloak tab
 *    "url:https://..."  → open a link
 *    "custom:fnName"    → call a built-in function
 *    "anime"            → open anime panel
 *    "youtube"          → open YouTube panel
 *    "browser"          → open built-in browser
 *    "separator"        → divider line (menu only)
 */

// ─── SITE ───────────────────────────────────────────────────────
const SITE_NAME    = "Nova Gaming";
const SITE_TAGLINE = "Nova Gaming Engine";

// ─── LOCK ───────────────────────────────────────────────────────
const LOCK_PIN = "1234";

// ─── DEV PANEL (game manager) ───────────────────────────────────
// Access at: yoursite.html?dev  or  click the hidden corner trigger
const DEV_USER = "Dev";
const DEV_PASS = "Dev*Nova123";

// ─── CLOAK (Escape key) ─────────────────────────────────────────
const CLOAK_TITLE = "Google Docs";
const CLOAK_ICON  = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
const CLOAK_CDN   = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/loader.js";

// ─── DOT BACKGROUND ─────────────────────────────────────────────
const DOT_COLOR   = "rgba(255,255,255,0.09)";
const DOT_SPACING = 36;

// ─── OFFLINE SAVE ───────────────────────────────────────────────
const SAVE_URL      = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/singlefile.html";
const SAVE_FILENAME = "NovaGaming.html";

// ─── WORKER URL ─────────────────────────────────────────────────
// Paste your Cloudflare Worker URL here.
// Used for: proxy, anime API, YouTube API.
const WORKER_URL = "https://tight-nova.umarerthteam.workers.dev";

// ─── FEATURES ───────────────────────────────────────────────────
const PRXY_ENABLED  = true;   // built-in browser tab
const ANIME_ENABLED = true;   // anime tab
const YT_ENABLED    = true;   // YouTube tab (also needs YT_API_KEY in worker)

// Auto-built URLs (don't change these)
const PRXY_BASE      = WORKER_URL + "/prxy";
const ANIME_API_BASE = WORKER_URL + "/api";
const YT_API_BASE    = WORKER_URL + "/yt";

// Encode a URL for the proxy ?q= param (base64url)
// Uses TextEncoder so ALL URLs including unicode/emoji work perfectly
function prxyEncode(url) {
    try {
        // Encode bytes → base64 → base64url (url-safe, no padding)
        const bytes = new TextEncoder().encode(url);
        let bin = "";
        bytes.forEach(b => bin += String.fromCharCode(b));
        const b64 = btoa(bin)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
        return PRXY_BASE + "?q=" + b64;
    } catch(e) {
        // absolute last resort
        return PRXY_BASE + "?q=" + encodeURIComponent(url);
    }
}

// ─── BOTTOM NAV ─────────────────────────────────────────────────
const BOTTOM_NAV = [
    { id:"nav-home",    icon:"⊞", label:"Games",    action:"home"                        },
    { id:"nav-search",  icon:"⌕", label:"Search",   action:"search"                      },
    { id:"nav-anime",   icon:"▶", label:"Anime",    action:"anime",   hidden:!ANIME_ENABLED },
    { id:"nav-yt",      icon:"▷", label:"YouTube",  action:"youtube", hidden:!YT_ENABLED    },
    { id:"nav-browser", icon:"⌨", label:"Browser",  action:"browser", hidden:!PRXY_ENABLED  },
    { id:"nav-favs",    icon:"★", label:"Favs",     action:"favorites"                   },
    { id:"nav-menu",    icon:"≡", label:"Menu",     action:"menu"                        },
];

// ─── SIDE MENU ──────────────────────────────────────────────────
const MENU_ITEMS = [
    { icon:"⌂", label:"Home",           action:"reload" },
    { icon:"🖷", label:"Request a Game", action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab:true },
    { icon:"↓", label:"Save Offline",   action:"custom:executeSaveDownload" },
    { action:"separator" },
    { icon:"⊘", label:"Cloak Tab",      action:"cloak" },
    { icon:"⏱", label:"My YouTube",     action:"url:https://inv.thepixora.com/channel/UCcusQs9FwQdeB2g_v7_R45g", newTab:true },
    // Add your own items:
    // { icon:"⚙", label:"My Link", action:"url:https://example.com", newTab:true },
];

// ─── HEADER BUTTONS ─────────────────────────────────────────────
const HEADER_BUTTONS = [
    { id:"request-btn", icon:"🖷", label:"Request", action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab:true },
    { id:"save-btn",    icon:"↓", label:"Save",    action:"custom:executeSaveDownload" },
    // { id:"my-btn", icon:"⊕", label:"My Tool", action:"url:https://example.com", newTab:true },
];

// ─── GAMES ──────────────────────────────────────────────────────
// newTab:true  → confirm dialog then open in real browser tab
// download:false → hide download option in right-click menu
const GAMES = [
    { title:"Cookie Clicker",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html",                      desc:"Idle baking simulator.",              newTab:false, download:true  },
    { title:"Brotato",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Brotato.html",                             desc:"Kill weird looking creatures.",       newTab:false, download:true  },
    { title:"Minecraft",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/EaglercraftX_1.8_u50_Offline_Signed.html", desc:"Classic sandbox world.",              newTab:false, download:true  },
    { title:"Baldi's Basics Plus",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Baldi's-Basics-Plus.html",                desc:"Escape from Baldi.",                  newTab:true,  download:true  },
    { title:"Bank Robbery 3",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Bank-Robbery-3.html",                      desc:"Rob banks.",                          newTab:true,  download:true  },
    { title:"Buckshot Roulette",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Buckshot%20Roulette.html",                 desc:"Take your chance.",                   newTab:false, download:true  },
    { title:"BuildNow",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/BuildNow.html",                            desc:"Ripoff of 1v1.LoL.",                  newTab:true,  download:true  },
    { title:"Five Nights at Epstein's",  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Five-Nights-at-Epstein's.html",            desc:"Survive 5 nights.",                   newTab:true,  download:true  },
    { title:"GTA Vice City",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/GTA__Vice_City.html",                      desc:"It's GTA bro.",                       newTab:false, download:true  },
    { title:"Git-Hub Search",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Git-Hub_Search.html",                      desc:"Search GitHub.",                      newTab:false, download:true  },
    { title:"Pizza Tower",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Pizza-Tower.html",                         desc:"IDK never played it.",                newTab:false, download:true  },
    { title:"Subway Surfers",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Subway_Surfers.html",                      desc:"Escape a cop.",                       newTab:false, download:true  },
    { title:"Temple Run 2",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Temple-Run-2.html",                        desc:"Escaping a temple?",                  newTab:true,  download:true  },
    { title:"Snow Rider",                url:"https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0",                          desc:"Ride in snow!",                       newTab:false, download:false },
    { title:"Puppet Hockey",             url:"https://www.mathplayground.com/pg_puppet_hockey.html",                                desc:"Play puppet hockey!",                 newTab:true,  download:false },
    { title:"NikeHub",                   url:"https://nikehub.pages.dev/a129x",                                                     desc:"Another games hub.",                  newTab:false, download:false },
    { title:"Vapor V4",                  url:"https://100.vaporized.help",                                                          desc:"Hub of entertainment.",               newTab:false, download:false },
    { title:"Google Doodles",            url:"https://doodles.google/search/?form_tags=interactive%20game",                         desc:"Google's collection.",                newTab:false, download:false },
    { title:"Friday Night Funkin",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin.html",                 desc:"Basic rhythm game.",                  newTab:false, download:true  },
    { title:"FNF VS Hex",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__Vs._Hex.html",       desc:"FNF mod — Hex.",                      newTab:false, download:true  },
    { title:"FNF VS Whitty",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__V.S._Whitty.html",   desc:"FNF mod — Whitty.",                   newTab:false, download:true  },
    { title:"Doki Doki Literature Club", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/DokiDoki-Literatureclub.html",        desc:"A literature club.",                  newTab:false, download:true  },
    { title:"1v1.lol",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/1v1.LoL.html",                             desc:"Build and shoot combat.",             newTab:false, download:true  },
    // { title:"My Game", url:"https://...", desc:"Description.", newTab:false, download:true },
];

// ════════════════════════════════════════════════════════════════
// ENGINE — do not edit below unless you know what you're doing
// ════════════════════════════════════════════════════════════════
const nova = {
    cards:[], favorites:[], searchQuery:"", onlyFavs:false,
    _devAuthed:false, _customGames:[],
    _theaterItem:null, _tabs:[], _tabCnt:0,
    _animeLoaded:false, _ytLoaded:false,
    _br:{ hist:[], idx:-1 },
    _curAnime:null, _eps:[],

    // ── CSS ──────────────────────────────────────────────────────
    css() {
        const s = document.createElement("style");
        s.textContent = `
        :root{
            --bg:#05050a; --accent:#ff0055; --ag:rgba(255,0,85,.4); --ad:rgba(255,0,85,.18);
            --g0:rgba(255,255,255,.010); --g1:rgba(255,255,255,.026); --g2:rgba(255,255,255,.048);
            --g3:rgba(255,255,255,.072); --g4:rgba(255,255,255,.10);  --g5:rgba(255,255,255,.14);
            --b1:rgba(255,255,255,.07);  --b2:rgba(255,255,255,.14);  --b3:rgba(255,255,255,.24);
            --bsm:blur(8px) saturate(130%);
            --bmd:blur(20px) saturate(150%);
            --blg:blur(40px) saturate(180%);
            --bxl:blur(56px) saturate(200%);
            --st:linear-gradient(180deg,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%);
            --sd:linear-gradient(135deg,rgba(255,255,255,.08) 0%,rgba(255,255,255,0) 55%);
            --ea:cubic-bezier(.16,1,.3,1); --sp:cubic-bezier(.22,1,.28,1);
            --fxs:clamp(.67rem,.85vw,.76rem); --fsm:clamp(.77rem,1.05vw,.88rem);
            --fb:clamp(.84rem,1.15vw,.94rem); --flg:clamp(.98rem,1.45vw,1.38rem);
            --fxl:clamp(1.05rem,2.4vw,1.55rem); --flk:clamp(1.4rem,2.8vw,2.2rem);
            --fch:clamp(.97rem,1.4vw,1.4rem); --fcp:clamp(.76rem,.96vw,.9rem);
            --hv:clamp(10px,1.5vh,18px); --hh:clamp(12px,3.2vw,4.5%);
            --gp:clamp(13px,2.3vw,34px); --gg:clamp(11px,1.7vw,24px);
            --cp:clamp(17px,2.1vw,28px); --cr:clamp(11px,1.1vw,18px);
            --bv:clamp(7px,.85vh,11px); --bh:clamp(10px,1.2vw,16px);
            --nh:clamp(54px,6.5vh,68px); --tbh:36px;
        }
        @media(min-width:2560px){:root{--fxl:1.9rem;--flg:1.65rem;--fch:1.75rem;--gg:36px;--cp:40px;--cr:24px;}}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html,body{width:100%;height:100%;background:var(--bg);color:#fff;
            font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
            overflow:hidden;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}
        #cdot{position:fixed;inset:0;z-index:1;pointer-events:none;will-change:transform;}

        /* LOCK */
        #lock{position:fixed;inset:0;z-index:9999;background:rgba(3,3,6,.88);
            backdrop-filter:var(--bxl);-webkit-backdrop-filter:var(--bxl);
            display:flex;align-items:center;justify-content:center;transition:opacity .4s var(--sp);}
        .lk{text-align:center;padding:clamp(28px,4.5vw,52px) clamp(28px,5.5vw,60px);
            background:var(--g1);border:1px solid var(--b2);border-radius:28px;
            backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14),inset 0 -1px 0 rgba(0,0,0,.2),0 40px 80px rgba(0,0,0,.7),0 0 80px rgba(255,0,85,.07);
            position:relative;overflow:hidden;animation:popIn .5s var(--sp) both;}
        @keyframes popIn{from{opacity:0;transform:scale(.88) translateY(20px);}to{opacity:1;transform:none;}}
        .lk::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;}
        .lk::after{content:'';position:absolute;inset:0;background:var(--sd);border-radius:inherit;pointer-events:none;}
        .lk-wm{font-size:var(--fxl);font-weight:800;letter-spacing:2px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.3));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;position:relative;z-index:1;}
        .lk-lb{display:block;font-size:var(--fxs);color:rgba(255,255,255,.26);letter-spacing:4px;text-transform:uppercase;margin-bottom:22px;position:relative;z-index:1;}
        .lk-in{background:rgba(255,255,255,.05);border:1px solid var(--b1);color:#fff;font-family:monospace;font-size:var(--flk);
            text-align:center;padding:clamp(9px,1.8vw,15px) clamp(16px,2.8vw,28px);
            border-radius:14px;width:clamp(130px,30vw,190px);outline:none;transition:all .4s var(--sp);letter-spacing:8px;position:relative;z-index:1;}
        .lk-in:focus{border-color:var(--accent);background:var(--ad);box-shadow:0 0 0 3px rgba(255,0,85,.18),0 0 32px var(--ag);transform:scale(1.04);}

        /* APP */
        #app{position:relative;z-index:10;width:100vw;height:100vh;display:flex;flex-direction:column;
            opacity:0;transform:translateY(14px) scale(.99);
            transition:opacity .55s var(--sp),transform .55s var(--sp);pointer-events:none;perspective:1200px;}
        #app.on{opacity:1;transform:none;pointer-events:auto;}

        /* TABBAR */
        #tbr{height:var(--tbh);flex-shrink:0;display:flex;align-items:stretch;gap:2px;padding:0 6px;
            background:rgba(3,3,8,.96);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-bottom:1px solid var(--b1);overflow-x:auto;overflow-y:hidden;scrollbar-width:none;
            position:relative;z-index:300;box-shadow:0 2px 12px rgba(0,0,0,.4);}
        #tbr::-webkit-scrollbar{display:none;}
        #tbr::after{content:'';position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .tbt{display:flex;align-items:center;gap:6px;padding:0 10px 0 12px;border-radius:8px 8px 0 0;
            min-width:110px;max-width:170px;flex-shrink:0;cursor:pointer;background:transparent;
            border:none;color:rgba(255,255,255,.38);font-size:11px;font-weight:500;
            white-space:nowrap;overflow:hidden;transition:background .18s,color .18s;position:relative;height:100%;}
        .tbt::before{content:'';position:absolute;inset:0;border-radius:inherit;background:var(--st);pointer-events:none;opacity:0;transition:opacity .18s;}
        .tbt:hover{background:var(--g2);color:rgba(255,255,255,.7);}
        .tbt:hover::before{opacity:1;}
        .tbt.on{background:var(--g3);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 0 0 1px rgba(255,255,255,.06);}
        .tbt.on::before{opacity:1;}
        .tb-ttl{flex:1;overflow:hidden;text-overflow:ellipsis;text-align:left;}
        .tb-x{flex-shrink:0;width:16px;height:16px;border-radius:4px;border:none;background:transparent;
            color:rgba(255,255,255,.28);cursor:pointer;display:flex;align-items:center;justify-content:center;
            font-size:11px;transition:all .15s;padding:0;line-height:1;}
        .tb-x:hover{background:rgba(255,255,255,.12);color:#fff;}
        .tb-new{display:flex;align-items:center;justify-content:center;width:28px;flex-shrink:0;
            border:none;background:transparent;color:rgba(255,255,255,.28);cursor:pointer;
            font-size:16px;border-radius:6px;transition:all .18s;padding:0;}
        .tb-new:hover{background:var(--g2);color:#fff;}

        /* HEADER */
        header{display:flex;align-items:center;justify-content:space-between;padding:var(--hv) var(--hh);
            background:var(--g1);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-bottom:1px solid var(--b1);flex-shrink:0;gap:10px;flex-wrap:nowrap;
            position:relative;z-index:200;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.10),inset 0 -1px 0 rgba(0,0,0,.15),0 4px 24px rgba(0,0,0,.45);}
        header::after{content:'';position:absolute;inset:0;background:var(--sd);pointer-events:none;}
        .hl{display:flex;align-items:center;gap:clamp(8px,1vw,14px);flex-shrink:0;}
        .brand{font-size:var(--fxl);font-weight:800;letter-spacing:2px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.35));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;
            cursor:pointer;white-space:nowrap;user-select:none;position:relative;z-index:1;}
        .mbtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.6);
            width:clamp(34px,3.1vw,44px);height:clamp(34px,3.1vw,44px);border-radius:11px;cursor:pointer;
            display:flex;flex-direction:column;align-items:center;justify-content:center;
            gap:4px;padding:0;flex-shrink:0;transition:background .2s,border-color .2s,transform .15s;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.10);
            position:relative;z-index:1;overflow:hidden;}
        .mbtn::before{content:'';position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .mbtn:hover{background:var(--g3);border-color:var(--b2);color:#fff;transform:scale(1.05);}
        .mbtn:active{transform:scale(.95);}
        .mbtn.on{background:var(--g3);border-color:var(--b2);color:#fff;}
        .mbtn span{display:block;width:clamp(13px,1.1vw,16px);height:1.5px;background:currentColor;border-radius:2px;
            transition:transform .3s var(--ea),opacity .2s,width .3s;}
        .mbtn.on span:nth-child(1){transform:translateY(5.5px) rotate(45deg);}
        .mbtn.on span:nth-child(2){opacity:0;width:0;}
        .mbtn.on span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg);}
        .sw{display:flex;gap:clamp(6px,.95vw,12px);align-items:center;flex-wrap:nowrap;min-width:0;position:relative;z-index:1;}
        .sbar{background:var(--g2);border:1px solid var(--b1);padding:var(--bv) clamp(12px,1.7vw,22px);
            border-radius:26px;color:#fff;width:clamp(100px,17vw,250px);
            transition:width .3s var(--ea),background .2s,border-color .2s,box-shadow .2s;
            font-size:var(--fb);min-width:0;backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);}
        .sbar::placeholder{color:rgba(255,255,255,.26);}
        .sbar:focus{width:clamp(140px,23vw,310px);background:var(--g3);outline:none;border-color:var(--b2);}
        .hbtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.62);
            padding:var(--bv) var(--bh);border-radius:17px;cursor:pointer;font-size:var(--fb);font-weight:600;
            transition:background .2s,border-color .2s,color .2s,transform .15s,box-shadow .2s;
            white-space:nowrap;flex-shrink:0;display:flex;align-items:center;gap:6px;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);
            position:relative;overflow:hidden;}
        .hbtn::before{content:'';position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .hbtn:hover{background:var(--g3);border-color:var(--b2);color:#fff;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 4px 16px rgba(0,0,0,.3);transform:translateY(-1px);}
        .hbtn:active{transform:scale(.95) translateY(0);}
        .hbtn.ld{color:rgba(255,255,255,.3);cursor:wait;}
        .fvbtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.38);
            width:clamp(34px,3.1vw,42px);height:clamp(34px,3.1vw,42px);border-radius:50%;cursor:pointer;
            font-size:clamp(.88rem,1.2vw,1.1rem);display:flex;align-items:center;justify-content:center;
            transition:all .22s var(--ea);padding:0;flex-shrink:0;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);z-index:1;position:relative;}
        .fvbtn:hover{color:#fff;border-color:var(--b2);background:var(--g3);transform:scale(1.08);}
        .fvbtn.on{border-color:#ffca28;color:#ffca28;background:rgba(255,202,40,.09);
            box-shadow:0 0 18px rgba(255,202,40,.25),inset 0 1px 0 rgba(255,202,40,.18);}

        /* GRID */
        #grid{flex:1;min-height:0;padding:var(--gp);padding-bottom:calc(var(--nh) + var(--gp)*3);
            overflow-y:auto;overflow-x:hidden;
            display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(195px,20vw,350px),1fr));
            gap:var(--gg);align-content:start;transform-style:preserve-3d;-webkit-overflow-scrolling:touch;}
        @media(min-width:2560px){#grid{grid-template-columns:repeat(auto-fill,minmax(380px,1fr));}}
        @supports(padding:max(0px)){
            #grid{padding-left:max(var(--gp),env(safe-area-inset-left));
                  padding-right:max(var(--gp),env(safe-area-inset-right));
                  padding-bottom:max(calc(var(--nh)+var(--gp)*3),calc(var(--nh)+env(safe-area-inset-bottom)));}}

        /* CARDS */
        .card{background:var(--g1);border:1px solid var(--b1);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-radius:var(--cr);padding:var(--cp);cursor:pointer;position:relative;overflow:hidden;
            transition:border-color .25s,box-shadow .25s,background .25s;
            transform-style:preserve-3d;will-change:transform;display:block;
            box-shadow:0 6px 22px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.09),inset 1px 0 0 rgba(255,255,255,.03);
            user-select:none;-webkit-user-select:none;content-visibility:auto;contain-intrinsic-size:0 110px;
            opacity:0;animation:cIn .4s var(--sp) both;}
        @keyframes cIn{from{opacity:0;transform:translateY(16px) scale(.97);}to{opacity:1;transform:translateY(0) scale(1);}}
        .card.hidden{display:none!important;}
        .card::before{content:'';position:absolute;inset:0;
            background:radial-gradient(circle 180px at var(--mx,50%) var(--my,50%),rgba(255,255,255,.08),transparent 70%);
            z-index:2;pointer-events:none;opacity:0;transition:opacity .22s;}
        .card::after{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;z-index:1;opacity:.75;transition:opacity .25s;}
        .card:hover::before{opacity:1;}
        .card:hover{background:var(--g2);border-color:var(--b2);
            box-shadow:0 20px 48px rgba(0,0,0,.52),inset 0 1px 0 rgba(255,255,255,.15),inset 1px 0 0 rgba(255,255,255,.05),0 0 0 1px rgba(255,255,255,.06);}
        .card:hover::after{opacity:1;}
        .ntb{position:absolute;top:11px;right:11px;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
            color:rgba(255,255,255,.28);background:var(--g2);border:1px solid var(--b1);padding:2px 7px;border-radius:14px;z-index:3;transition:all .22s;}
        .card:hover .ntb{color:rgba(255,255,255,.55);border-color:var(--b2);}
        .card h3{margin:0 0 8px;font-size:var(--fch);font-weight:700;transition:color .22s;transform:translateZ(24px);position:relative;z-index:3;}
        .card p{margin:0;font-size:var(--fcp);color:rgba(255,255,255,.38);line-height:1.52;transform:translateZ(12px);transition:color .22s;position:relative;z-index:3;}
        .fvs{position:absolute;bottom:clamp(14px,1.7vw,22px);right:clamp(34px,3.2vw,44px);
            font-size:clamp(.88rem,.95vw,1rem);color:rgba(255,255,255,.1);transition:all .22s;transform:translateZ(14px);z-index:3;}
        .card.fav .fvs{color:#ffca28;filter:drop-shadow(0 0 7px rgba(255,202,40,.55));}
        .card:hover h3{color:var(--accent);}
        .card:hover p{color:rgba(255,255,255,.62);}
        @media(hover:none){.card:active{background:var(--g3);border-color:var(--b2);}
        .card:hover h3{color:inherit;}}

        /* BOTTOM NAV */
        #bnav{position:fixed;bottom:0;left:0;right:0;z-index:500;height:var(--nh);
            background:rgba(4,4,10,.88);backdrop-filter:var(--bxl);-webkit-backdrop-filter:var(--bxl);
            border-top:1px solid var(--b1);display:flex;align-items:stretch;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.10),inset 0 2px 0 rgba(255,255,255,.03),0 -4px 28px rgba(0,0,0,.55);
            padding-bottom:env(safe-area-inset-bottom,0);}
        #bnav::before{content:'';position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .ntab{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;
            cursor:pointer;border:none;background:transparent;color:rgba(255,255,255,.32);
            font-size:clamp(.58rem,.75vw,.7rem);font-weight:600;letter-spacing:.5px;text-transform:uppercase;
            transition:color .22s,transform .18s;position:relative;user-select:none;}
        .ntab::after{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);
            width:0;height:2px;background:var(--accent);border-radius:0 0 3px 3px;
            transition:width .28s var(--sp),opacity .22s;opacity:0;}
        .ntab.on{color:#fff;}.ntab.on::after{width:28px;opacity:1;}
        .ntab:active{transform:scale(.88);}
        .ni{font-size:clamp(1.08rem,1.35vw,1.25rem);line-height:1;transition:transform .28s var(--sp),filter .22s;}
        .ntab.on .ni{transform:translateY(-2px) scale(1.12);filter:drop-shadow(0 2px 8px rgba(255,0,85,.35));}

        /* SIDE PANEL */
        #panel{position:fixed;top:0;left:0;height:100vh;width:clamp(240px,25vw,305px);z-index:9000;
            background:rgba(4,4,11,.82);backdrop-filter:var(--bxl);-webkit-backdrop-filter:var(--bxl);
            border-right:1px solid var(--b2);display:flex;flex-direction:column;
            transform:translateX(-110%);transition:transform .42s var(--sp);overflow:hidden;
            box-shadow:inset -1px 0 0 rgba(255,255,255,.04),12px 0 56px rgba(0,0,0,.8);}
        #panel.on{transform:translateX(0);}
        #panel::before{content:'';position:absolute;top:0;right:0;width:1px;height:100%;
            background:linear-gradient(180deg,rgba(255,255,255,.22) 0%,rgba(255,255,255,.05) 40%,transparent 100%);
            pointer-events:none;z-index:10;}
        #panel::after{content:'';position:absolute;inset:0;background:var(--sd);pointer-events:none;}
        .ph{padding:clamp(22px,3vh,36px) clamp(18px,2.2vw,27px) clamp(16px,1.8vh,24px);
            border-bottom:1px solid var(--b1);background:linear-gradient(180deg,var(--g2) 0%,var(--g1) 100%);flex-shrink:0;position:relative;}
        .ph::after{content:'';position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .pe{font-size:var(--fxs);font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.24);margin-bottom:4px;position:relative;z-index:1;}
        .pb{font-size:var(--flg);font-weight:800;letter-spacing:1.5px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.38));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;position:relative;z-index:1;}
        .pbody{flex:1;overflow-y:auto;padding:10px;-webkit-overflow-scrolling:touch;}
        .mi{display:flex;align-items:center;gap:11px;padding:clamp(10px,1.3vh,14px) clamp(11px,1.25vw,15px);
            border-radius:11px;cursor:pointer;transition:background .18s,border-color .18s,color .18s,transform .14s;
            color:rgba(255,255,255,.52);font-size:var(--fb);font-weight:500;border:1px solid transparent;
            position:relative;overflow:hidden;user-select:none;}
        .mi::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .18s;}
        .mi:hover{background:var(--g3);border-color:var(--b1);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.11);transform:translateX(3px);}
        .mi:hover::before{opacity:1;}
        .mi:active{transform:scale(.97) translateX(3px);}
        .miw{width:clamp(28px,2.2vw,35px);height:clamp(28px,2.2vw,35px);display:flex;align-items:center;justify-content:center;
            background:var(--g2);border:1px solid var(--b1);border-radius:9px;flex-shrink:0;font-size:clamp(.83rem,1.05vw,.98rem);transition:all .18s;}
        .mi:hover .miw{background:var(--g4);border-color:var(--b2);}
        .mil{flex:1;}
        .mdiv{height:1px;margin:7px 11px;background:linear-gradient(90deg,transparent,var(--b1) 20%,var(--b1) 80%,transparent);}
        .pft{padding:clamp(12px,1.6vh,18px) clamp(15px,1.7vw,21px);border-top:1px solid var(--b1);
            font-size:var(--fxs);color:rgba(255,255,255,.13);text-align:center;flex-shrink:0;background:var(--g0);}

        /* BACKDROP */
        #bd{position:fixed;inset:0;z-index:8999;background:transparent;pointer-events:none;
            transition:background .42s,backdrop-filter .42s,-webkit-backdrop-filter .42s;}
        #bd.on{background:rgba(0,0,0,.56);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);pointer-events:auto;}

        /* CONFIRM DIALOG */
        #ntov{position:fixed;inset:0;z-index:10500;background:rgba(2,2,6,.75);
            backdrop-filter:var(--blg);-webkit-backdrop-filter:var(--blg);
            display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .22s;}
        #ntov.on{opacity:1;pointer-events:auto;}
        .ntc{background:var(--g1);border:1px solid var(--b2);border-radius:22px;
            padding:clamp(24px,3.5vw,42px) clamp(24px,4.5vw,48px);max-width:clamp(280px,37vw,430px);width:90vw;
            backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 36px 72px rgba(0,0,0,.68),0 0 0 1px rgba(255,255,255,.04);
            position:relative;overflow:hidden;text-align:center;
            transform:scale(.92) translateY(12px);transition:transform .28s var(--sp);}
        #ntov.on .ntc{transform:scale(1) translateY(0);}
        .ntc::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;}
        .ntc::after{content:'';position:absolute;inset:0;background:var(--sd);border-radius:inherit;pointer-events:none;}
        .nt-ico{width:50px;height:50px;border-radius:13px;background:var(--g2);border:1px solid var(--b2);
            display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;position:relative;z-index:1;}
        .nt-tl{font-size:var(--fxs);font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.26);margin-bottom:7px;position:relative;z-index:1;}
        .nt-nm{font-size:var(--flg);font-weight:800;color:#fff;margin-bottom:9px;position:relative;z-index:1;}
        .nt-bd{font-size:var(--fsm);color:rgba(255,255,255,.4);line-height:1.55;margin-bottom:24px;position:relative;z-index:1;}
        .nt-ac{display:flex;gap:9px;justify-content:center;position:relative;z-index:1;}
        .nt-yes{background:var(--accent);border:none;color:#fff;padding:clamp(8px,1.1vh,12px) clamp(20px,2.8vw,30px);
            border-radius:17px;cursor:pointer;font-weight:700;font-size:var(--fb);
            transition:background .2s,box-shadow .2s,transform .14s;box-shadow:inset 0 1px 0 rgba(255,255,255,.16);}
        .nt-yes:hover{background:#ff2d6e;box-shadow:0 0 20px var(--ag),inset 0 1px 0 rgba(255,255,255,.16);}
        .nt-yes:active,.nt-no:active{transform:scale(.94);}
        .nt-no{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.68);padding:clamp(8px,1.1vh,12px) clamp(20px,2.8vw,30px);
            border-radius:17px;cursor:pointer;font-weight:600;font-size:var(--fb);transition:all .2s;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);}
        .nt-no:hover{background:var(--g3);border-color:var(--b2);color:#fff;}

        /* THEATER */
        #theater{position:fixed;inset:0;z-index:5000;background:rgba(2,2,5,.97);
            backdrop-filter:var(--blg);-webkit-backdrop-filter:var(--blg);
            display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .3s var(--ea);}
        #theater.on{opacity:1;pointer-events:auto;}
        .th{display:flex;justify-content:space-between;align-items:center;
            padding:clamp(9px,1.4vh,16px) clamp(14px,2.5vw,28px);border-bottom:1px solid var(--b1);
            background:linear-gradient(180deg,var(--g2) 0%,var(--g1) 100%);
            backdrop-filter:var(--bmd);flex-shrink:0;gap:8px;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 3px 18px rgba(0,0,0,.45);}
        .tc{display:flex;gap:clamp(5px,.85vw,9px);flex-wrap:wrap;align-items:center;}
        .ab{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.72);
            padding:clamp(5px,.88vh,9px) clamp(10px,1.25vw,15px);border-radius:17px;cursor:pointer;
            font-size:var(--fsm);transition:all .2s;white-space:nowrap;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);}
        .ab:hover{background:var(--g4);border-color:var(--b2);color:#fff;}
        .ab:active{transform:scale(.94);}
        .cb{background:var(--accent);border:none;color:#fff;padding:clamp(5px,.88vh,9px) clamp(12px,1.75vw,20px);
            border-radius:17px;cursor:pointer;font-weight:600;font-size:var(--fsm);
            transition:all .2s;white-space:nowrap;box-shadow:inset 0 1px 0 rgba(255,255,255,.16);}
        .cb:hover{background:#ff2d6e;box-shadow:0 0 18px var(--ag);}
        .cb:active{transform:scale(.94);}
        .ifw{flex:1;width:100%;min-height:0;}
        #gframe{width:100%;height:100%;border:none;background:#000;display:block;}

        /* CONTEXT MENU */
        #ctx{position:fixed;z-index:10000;width:clamp(152px,16.5vw,192px);
            background:rgba(5,5,12,.88);backdrop-filter:var(--bxl);-webkit-backdrop-filter:var(--bxl);
            border:1px solid var(--b2);border-radius:13px;padding:5px 0;
            box-shadow:0 16px 48px rgba(0,0,0,.82),inset 0 1px 0 rgba(255,255,255,.14);
            opacity:0;transform:scale(.88) translateY(-8px);transform-origin:top left;pointer-events:none;
            transition:opacity .13s,transform .17s var(--ea);overflow:hidden;}
        #ctx::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;}
        #ctx.on{opacity:1;transform:scale(1) translateY(0);pointer-events:auto;}
        .ci{padding:9px 13px;font-size:var(--fsm);color:rgba(255,255,255,.58);cursor:pointer;
            transition:background .15s,color .15s,padding-left .15s;display:flex;align-items:center;gap:8px;position:relative;z-index:1;}
        .ci:hover{background:var(--g3);color:#fff;padding-left:16px;}
        .ci.ac:hover{color:var(--accent);}

        /* SHARED PANEL STYLES (anime / yt / browser) */
        .fpanel{position:fixed;inset:0;z-index:4000;background:var(--bg);
            display:flex;flex-direction:column;transform:translateY(100%);
            transition:transform .45s var(--sp);overflow:hidden;}
        .fpanel.on{transform:translateY(0);}
        .fpbar{display:flex;align-items:center;gap:9px;padding:var(--hv) var(--hh);
            background:var(--g1);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-bottom:1px solid var(--b1);flex-shrink:0;position:relative;z-index:1;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 3px 18px rgba(0,0,0,.4);}
        .fp-back{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.68);
            padding:var(--bv) var(--bh);border-radius:17px;cursor:pointer;font-size:var(--fsm);
            transition:all .2s;backdrop-filter:var(--bsm);white-space:nowrap;display:flex;align-items:center;gap:5px;}
        .fp-back:hover{background:var(--g3);color:#fff;border-color:var(--b2);}
        .fp-ttl{font-size:var(--flg);font-weight:800;letter-spacing:1px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.38));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;flex:1;}
        .fp-srch{background:var(--g2);border:1px solid var(--b1);color:#fff;
            padding:var(--bv) clamp(11px,1.5vw,19px);border-radius:22px;
            width:clamp(110px,17vw,230px);font-size:var(--fb);outline:none;
            transition:all .25s;backdrop-filter:var(--bsm);}
        .fp-srch:focus{background:var(--g3);border-color:var(--b2);width:clamp(140px,21vw,290px);}
        .fp-srch::placeholder{color:rgba(255,255,255,.26);}
        .fp-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;
            padding:var(--gp);padding-bottom:calc(var(--nh)+var(--gp)*2);}
        .fp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(120px,13vw,190px),1fr));gap:var(--gg);}

        /* ANIME / YT CARDS */
        .acd{background:var(--g1);border:1px solid var(--b1);border-radius:var(--cr);cursor:pointer;
            overflow:hidden;transition:transform .2s var(--ea),border-color .2s,box-shadow .2s;
            animation:cIn .38s var(--sp) both;box-shadow:0 4px 14px rgba(0,0,0,.22);}
        .acd:hover{border-color:var(--b2);transform:translateY(-4px) scale(1.03);box-shadow:0 14px 34px rgba(0,0,0,.48);}
        .acd img{width:100%;aspect-ratio:2/3;object-fit:cover;display:block;background:var(--g2);}
        .acd.ytc img{aspect-ratio:16/9;}
        .acd-i{padding:9px 11px;}
        .acd-t{font-size:var(--fsm);font-weight:700;color:#fff;margin-bottom:3px;
            display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
        .acd-m{font-size:var(--fxs);color:rgba(255,255,255,.36);}
        .fp-sec{margin-bottom:26px;}
        .fp-sttl{font-size:var(--fxs);font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.24);margin-bottom:13px;}

        /* ANIME SPECIFIC */
        .ep-list{display:flex;flex-direction:column;gap:7px;}
        .ep-i{background:var(--g1);border:1px solid var(--b1);border-radius:11px;
            padding:11px 15px;cursor:pointer;display:flex;align-items:center;gap:11px;
            transition:all .2s;animation:cIn .34s var(--sp) both;}
        .ep-i:hover{background:var(--g3);border-color:var(--b2);}
        .ep-n{font-size:var(--fsm);font-weight:700;color:rgba(255,255,255,.38);min-width:34px;}
        .ep-t{flex:1;font-size:var(--fsm);font-weight:500;}
        .ep-bs{display:flex;gap:4px;}
        .ep-b{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:2px 6px;border-radius:5px;background:var(--g3);border:1px solid var(--b1);}
        .ep-b.sub{color:#4ade80;}.ep-b.dub{color:#60a5fa;}
        .srv-list{display:flex;flex-wrap:wrap;gap:7px;}
        .srv-i{background:var(--g2);border:1px solid var(--b1);border-radius:9px;padding:7px 13px;cursor:pointer;font-size:var(--fsm);transition:all .2s;}
        .srv-i:hover{background:var(--g4);border-color:var(--b2);color:#fff;}
        .srv-i.pl{border-color:var(--accent);color:var(--accent);background:var(--ad);}

        /* YT PLAYER */
        .yt-play-btn{background:var(--accent);border:none;color:#fff;padding:9px 20px;border-radius:17px;
            cursor:pointer;font-weight:700;font-size:var(--fb);transition:all .2s;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.16);}
        .yt-play-btn:hover{background:#ff2d6e;box-shadow:0 0 18px var(--ag);}

        /* BROWSER */
        .brbar{display:flex;align-items:center;gap:7px;padding:var(--hv) var(--hh);
            background:var(--g1);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-bottom:1px solid var(--b1);flex-shrink:0;position:relative;z-index:1;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 3px 20px rgba(0,0,0,.4);}
        .brnb{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.52);
            width:clamp(30px,2.8vw,38px);height:clamp(30px,2.8vw,38px);border-radius:9px;cursor:pointer;
            display:flex;align-items:center;justify-content:center;flex-shrink:0;
            font-size:clamp(.88rem,1.1vw,1.05rem);transition:background .18s,color .18s,transform .14s;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);}
        .brnb:hover{background:var(--g3);border-color:var(--b2);color:#fff;transform:scale(1.08);}
        .brnb:active{transform:scale(.9);}
        .brnb:disabled{opacity:.22;cursor:default;transform:none;}
        .bruw{flex:1;display:flex;align-items:center;gap:7px;min-width:0;
            background:var(--g2);border:1px solid var(--b1);border-radius:22px;
            padding:0 clamp(9px,1.3vw,15px);height:clamp(34px,3.3vw,42px);
            transition:border-color .2s,background .2s,box-shadow .2s;backdrop-filter:var(--bsm);cursor:text;}
        .bruw:focus-within{border-color:var(--b2);background:var(--g3);box-shadow:0 0 0 3px rgba(255,255,255,.05);}
        .brlk{font-size:.72rem;color:rgba(255,255,255,.22);flex-shrink:0;transition:color .2s;}
        .bruw:focus-within .brlk{color:rgba(255,255,255,.5);}
        .brui{flex:1;background:transparent;border:none;color:#fff;font-size:var(--fsm);outline:none;min-width:0;}
        .brui::placeholder{color:rgba(255,255,255,.24);}
        .brgo{background:var(--accent);border:none;color:#fff;
            width:clamp(26px,2.3vw,32px);height:clamp(26px,2.3vw,32px);border-radius:50%;
            cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;
            font-size:.82rem;transition:all .18s;box-shadow:inset 0 1px 0 rgba(255,255,255,.16);}
        .brgo:hover{background:#ff2d6e;box-shadow:0 0 12px var(--ag);}
        .brgo:active{transform:scale(.88);}
        .brbody{flex:1;min-height:0;position:relative;background:#000;}
        #brframe{width:100%;height:100%;border:none;display:block;background:#000;}
        .brload{position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent);
            transform:scaleX(0);transform-origin:left;z-index:2;transition:transform .2s;}
        .brload.on{animation:brprog 1.4s ease-in-out infinite;}
        @keyframes brprog{0%{transform:scaleX(0);opacity:1;}70%{transform:scaleX(.75);}100%{transform:scaleX(1);opacity:0;}}
        .brnt{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
            gap:18px;background:var(--bg);z-index:1;transition:opacity .3s;}
        .brnt.gone{opacity:0;pointer-events:none;}
        .brnt-ico{font-size:2.8rem;opacity:.13;}
        .brnt-hint{font-size:var(--fsm);color:rgba(255,255,255,.22);text-align:center;max-width:320px;line-height:1.6;}
        .brnt-search-hint{font-size:var(--fxs);color:rgba(255,255,255,.16);text-align:center;margin-top:8px;letter-spacing:.5px;}
        .brcuts{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:520px;}
        .brcut{background:var(--g2);border:1px solid var(--b1);border-radius:14px;
            padding:10px 16px;cursor:pointer;font-size:var(--fsm);
            color:rgba(255,255,255,.55);transition:background .18s,border-color .18s,color .18s,transform .18s,box-shadow .18s;
            text-align:center;min-width:90px;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
            position:relative;overflow:hidden;}
        .brcut::before{content:"";position:absolute;inset:0;background:var(--st);pointer-events:none;}
        .brcut:hover{background:var(--g3);border-color:var(--b2);color:#fff;
            transform:translateY(-3px) scale(1.04);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 8px 20px rgba(0,0,0,.3);}
        .brcut:active{transform:scale(.96);}

        /* SHARED */
        .fp-msg{text-align:center;padding:38px 18px;color:rgba(255,255,255,.28);font-size:var(--fb);}
        .fp-spin{width:30px;height:30px;border:2px solid var(--b1);border-top-color:var(--accent);
            border-radius:50%;animation:spin .7s linear infinite;margin:28px auto;}
        @keyframes spin{to{transform:rotate(360deg);}}
        @keyframes devShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}

        /* SCROLLBAR */

        /* ═══ DEV PANEL ═══════════════════════════════════════════ */
        #dev-overlay{position:fixed;inset:0;z-index:19999;background:rgba(2,2,6,.92);
            backdrop-filter:var(--bxl);-webkit-backdrop-filter:var(--bxl);
            display:flex;align-items:center;justify-content:center;
            opacity:0;pointer-events:none;transition:opacity .3s var(--sp);}
        #dev-overlay.on{opacity:1;pointer-events:auto;}

        /* LOGIN CARD */
        .dev-login{background:var(--g1);border:1px solid var(--b2);border-radius:24px;
            padding:40px 48px;width:min(90vw,360px);text-align:center;
            backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 40px 80px rgba(0,0,0,.72),0 0 60px rgba(255,0,85,.06);
            position:relative;overflow:hidden;animation:popIn .45s var(--sp) both;}
        .dev-login::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;}
        .dev-login::after{content:'';position:absolute;inset:0;background:var(--sd);border-radius:inherit;pointer-events:none;}
        .dev-badge{display:inline-flex;align-items:center;gap:6px;
            background:var(--ad);border:1px solid rgba(255,0,85,.3);color:var(--accent);
            font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
            padding:4px 10px;border-radius:20px;margin-bottom:16px;position:relative;z-index:1;}
        .dev-title{font-size:var(--fxl);font-weight:800;letter-spacing:1px;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.35));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;
            margin-bottom:6px;position:relative;z-index:1;}
        .dev-sub{font-size:var(--fxs);color:rgba(255,255,255,.26);letter-spacing:2px;
            text-transform:uppercase;margin-bottom:28px;position:relative;z-index:1;}
        .dev-field{width:100%;background:var(--g2);border:1px solid var(--b1);
            color:#fff;padding:11px 16px;border-radius:12px;font-size:var(--fb);
            outline:none;transition:border-color .2s,background .2s,box-shadow .2s;
            margin-bottom:12px;position:relative;z-index:1;}
        .dev-field:focus{border-color:var(--b2);background:var(--g3);box-shadow:0 0 0 3px rgba(255,255,255,.05);}
        .dev-field::placeholder{color:rgba(255,255,255,.26);}
        .dev-err{font-size:var(--fxs);color:#ff6b6b;margin-bottom:12px;min-height:18px;position:relative;z-index:1;}
        .dev-btn{width:100%;background:var(--accent);border:none;color:#fff;
            padding:12px;border-radius:12px;font-size:var(--fb);font-weight:700;cursor:pointer;
            transition:background .2s,box-shadow .2s,transform .14s;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.16);position:relative;z-index:1;}
        .dev-btn:hover{background:#ff2d6e;box-shadow:0 0 20px var(--ag);}
        .dev-btn:active{transform:scale(.97);}
        .dev-cancel{margin-top:12px;background:none;border:none;color:rgba(255,255,255,.35);
            font-size:var(--fxs);cursor:pointer;transition:color .2s;position:relative;z-index:1;}
        .dev-cancel:hover{color:#fff;}

        /* MAIN DEV PANEL */
        .dev-panel{position:fixed;inset:0;z-index:19998;background:var(--bg);
            display:flex;flex-direction:column;transform:translateX(100%);
            transition:transform .42s var(--sp);overflow:hidden;}
        .dev-panel.on{transform:translateX(0);}
        .dev-pbar{display:flex;align-items:center;gap:12px;padding:var(--hv) var(--hh);
            background:var(--g1);backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            border-bottom:1px solid var(--b1);flex-shrink:0;position:relative;z-index:1;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 3px 18px rgba(0,0,0,.4);}
        .dev-pbar::after{content:'';position:absolute;inset:0;background:var(--sd);pointer-events:none;}
        .dev-wm{font-size:var(--fxl);font-weight:800;letter-spacing:2px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.38));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .dev-wm span{color:var(--accent);-webkit-text-fill-color:var(--accent);}
        .dev-pbadge{background:var(--ad);border:1px solid rgba(255,0,85,.3);color:var(--accent);
            font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
            padding:3px 9px;border-radius:20px;}
        .dev-pbar-right{display:flex;gap:8px;margin-left:auto;align-items:center;}
        .dev-hbtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.65);
            padding:var(--bv) var(--bh);border-radius:14px;cursor:pointer;font-size:var(--fsm);
            font-weight:600;transition:all .2s;white-space:nowrap;display:flex;align-items:center;gap:6px;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);}
        .dev-hbtn:hover{background:var(--g3);border-color:var(--b2);color:#fff;}
        .dev-hbtn:active{transform:scale(.95);}
        .dev-hbtn.danger{border-color:rgba(255,100,100,.3);color:rgba(255,100,100,.7);}
        .dev-hbtn.danger:hover{background:rgba(255,60,60,.12);border-color:rgba(255,100,100,.5);color:#ff6b6b;}
        .dev-hbtn.primary{background:var(--accent);border-color:transparent;color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.16);}
        .dev-hbtn.primary:hover{background:#ff2d6e;box-shadow:0 0 16px var(--ag);}

        /* GAME TABLE */
        .dev-body{flex:1;min-height:0;overflow-y:auto;padding:var(--gp);-webkit-overflow-scrolling:touch;}
        .dev-stats{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap;}
        .dev-stat{background:var(--g1);border:1px solid var(--b1);border-radius:14px;
            padding:14px 20px;flex:1;min-width:120px;
            backdrop-filter:var(--bsm);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);}
        .dev-stat-n{font-size:var(--fxl);font-weight:800;color:#fff;line-height:1;}
        .dev-stat-l{font-size:var(--fxs);color:rgba(255,255,255,.35);letter-spacing:2px;text-transform:uppercase;margin-top:4px;}
        .dev-table{width:100%;border-collapse:collapse;}
        .dev-table th{text-align:left;font-size:var(--fxs);font-weight:700;letter-spacing:2px;
            text-transform:uppercase;color:rgba(255,255,255,.28);padding:8px 12px;
            border-bottom:1px solid var(--b1);}
        .dev-table td{padding:10px 12px;font-size:var(--fsm);border-bottom:1px solid rgba(255,255,255,.04);
            vertical-align:middle;}
        .dev-table tr:hover td{background:var(--g1);}
        .dev-table tr.custom-row td:first-child::before{content:"★ ";color:#ffca28;font-size:10px;}
        .dev-pill{display:inline-flex;align-items:center;font-size:9px;font-weight:700;letter-spacing:1px;
            text-transform:uppercase;padding:2px 7px;border-radius:20px;border:1px solid;}
        .dev-pill.nt{color:#60a5fa;border-color:rgba(96,165,250,.3);background:rgba(96,165,250,.08);}
        .dev-pill.dl{color:#4ade80;border-color:rgba(74,222,128,.3);background:rgba(74,222,128,.08);}
        .dev-pill.no{color:rgba(255,255,255,.3);border-color:rgba(255,255,255,.1);}
        .dev-act-btn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.6);
            padding:4px 10px;border-radius:8px;cursor:pointer;font-size:11px;transition:all .18s;}
        .dev-act-btn:hover{background:var(--g3);border-color:var(--b2);color:#fff;}
        .dev-act-btn.del:hover{background:rgba(255,60,60,.12);border-color:rgba(255,100,100,.4);color:#ff6b6b;}

        /* ADD / EDIT MODAL */
        #dev-modal{position:fixed;inset:0;z-index:20000;background:rgba(2,2,6,.82);
            backdrop-filter:var(--blg);-webkit-backdrop-filter:var(--blg);
            display:flex;align-items:center;justify-content:center;
            opacity:0;pointer-events:none;transition:opacity .22s;}
        #dev-modal.on{opacity:1;pointer-events:auto;}
        .dev-mcard{background:var(--g1);border:1px solid var(--b2);border-radius:22px;
            padding:32px 36px;width:min(90vw,520px);max-height:90vh;overflow-y:auto;
            backdrop-filter:var(--bmd);-webkit-backdrop-filter:var(--bmd);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 36px 72px rgba(0,0,0,.7);
            position:relative;overflow:hidden;
            transform:scale(.93) translateY(12px);transition:transform .28s var(--sp);}
        .dev-mcard.scroll{overflow-y:auto;}
        #dev-modal.on .dev-mcard{transform:scale(1) translateY(0);}
        .dev-mcard::before{content:'';position:absolute;inset:0;background:var(--st);border-radius:inherit;pointer-events:none;}
        .dev-mcard::after{content:'';position:absolute;inset:0;background:var(--sd);border-radius:inherit;pointer-events:none;}
        .dev-m-ttl{font-size:var(--flg);font-weight:800;margin-bottom:22px;position:relative;z-index:1;}
        .dev-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;}
        .dev-row.full{grid-template-columns:1fr;}
        .dev-lbl{font-size:var(--fxs);font-weight:700;letter-spacing:2px;text-transform:uppercase;
            color:rgba(255,255,255,.32);margin-bottom:6px;}
        .dev-inp{width:100%;background:var(--g2);border:1px solid var(--b1);color:#fff;
            padding:10px 14px;border-radius:11px;font-size:var(--fb);outline:none;
            transition:border-color .2s,background .2s,box-shadow .2s;}
        .dev-inp:focus{border-color:var(--b2);background:var(--g3);box-shadow:0 0 0 3px rgba(255,255,255,.05);}
        .dev-inp::placeholder{color:rgba(255,255,255,.24);}
        .dev-toggle{display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;}
        .dev-toggle input[type=checkbox]{width:18px;height:18px;accent-color:var(--accent);cursor:pointer;}
        .dev-toggle span{font-size:var(--fsm);color:rgba(255,255,255,.65);}
        .dev-m-acts{display:flex;gap:10px;justify-content:flex-end;margin-top:24px;position:relative;z-index:1;}
        .dev-preview{background:var(--g2);border:1px solid var(--b1);border-radius:11px;
            padding:14px;margin-bottom:16px;position:relative;z-index:1;}
        .dev-preview-ttl{font-size:var(--fxs);color:rgba(255,255,255,.3);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;}
        .dev-preview-card{background:var(--g1);border:1px solid var(--b1);border-radius:10px;padding:14px;}
        .dev-preview-card h4{font-size:var(--fb);font-weight:700;color:#fff;margin-bottom:4px;}
        .dev-preview-card p{font-size:var(--fxs);color:rgba(255,255,255,.38);}

        ::-webkit-scrollbar{width:clamp(3px,.32vw,5px);}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:8px;}
        ::-webkit-scrollbar-thumb:hover{background:var(--accent);}

        /* RESPONSIVE */
        @media(max-width:1024px){.hbtn .bl{display:none;}.hbtn{padding:var(--bv) 11px;}
            .sbar{width:clamp(90px,15vw,190px);}.sbar:focus{width:clamp(120px,19vw,250px);}}
        @media(max-width:768px){header{flex-direction:column;align-items:stretch;gap:7px;padding:9px var(--hh);}
            .hl{justify-content:flex-start;}.sw{width:100%;justify-content:space-between;}
            .sbar{flex:1;width:auto;min-width:0;}.sbar:focus{width:auto;}
            #grid{grid-template-columns:repeat(auto-fill,minmax(210px,1fr));}
            #panel{width:clamp(225px,68vw,290px);}}
        @media(max-width:480px){header{padding:8px 13px;gap:6px;}.brand{font-size:.98rem;}
            .sbar{padding:7px 11px;font-size:.82rem;}
            .hbtn{padding:8px 10px;border-radius:50%;width:36px;height:36px;justify-content:center;gap:0;}
            .fvbtn{width:36px;height:36px;font-size:.9rem;}
            #grid{grid-template-columns:1fr;padding:11px 13px;gap:11px;}
            .card{padding:17px;border-radius:13px;}
            .card h3{font-size:.97rem;}.card p{font-size:.78rem;}
            #panel{width:80vw;}
            .nt-ac{flex-direction:column;}.nt-yes,.nt-no{width:100%;}
            #ctx{width:calc(100vw - 26px);left:13px!important;}
            .brbar{padding:8px 12px;gap:5px;}.brnb:nth-child(n+4){display:none;}}
        `;
        document.head.appendChild(s);
        if(!document.querySelector('meta[name="viewport"]')){
            const vp=document.createElement("meta");vp.name="viewport";vp.content="width=device-width,initial-scale=1,viewport-fit=cover";document.head.appendChild(vp);
        }
    },

    // ── DOTS ────────────────────────────────────────────────────
    dots(){
        const c=document.createElement("canvas");c.id="cdot";document.body.appendChild(c);
        const ctx=c.getContext("2d");let mx=-1e4,my=-1e4;
        const resize=()=>{c.width=innerWidth;c.height=innerHeight;};
        window.addEventListener("resize",resize,{passive:true});resize();
        window.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;},{passive:true});
        const low=navigator.hardwareConcurrency<=4;
        const sp=low?DOT_SPACING*1.5:DOT_SPACING;let last=0;
        const draw=ts=>{
            requestAnimationFrame(draw);
            if(low&&ts-last<40)return;last=ts;
            ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle=DOT_COLOR;
            for(let x=sp/2;x<c.width;x+=sp)for(let y=sp/2;y<c.height;y+=sp){
                const dx=mx-x,dy=my-y,d=Math.sqrt(dx*dx+dy*dy);
                let rx=x,ry=y;
                if(d<110){const f=(110-d)/110;rx-=(dx/d)*f*10;ry-=(dy/d)*f*10;}
                ctx.beginPath();ctx.arc(rx,ry,d<110?1.6:(low?.7:.85),0,Math.PI*2);ctx.fill();
            }
        };requestAnimationFrame(draw);
    },

    // ── DOM ─────────────────────────────────────────────────────
    buildDOM(){
        try{this.favorites=JSON.parse(localStorage.getItem("ng_f")||"[]");}catch(e){}

        // Lock
        const lock=document.createElement("div");lock.id="lock";
        lock.innerHTML=`<div class="lk"><div class="lk-wm">${SITE_NAME}</div><span class="lk-lb">Enter PIN</span><input type="password" class="lk-in" placeholder="••••" maxlength="4" autocomplete="off" autocorrect="off"></div>`;
        document.body.appendChild(lock);

        // App
        const app=document.createElement("div");app.id="app";
        const hbHTML=HEADER_BUTTONS.map(b=>`<button class="hbtn" id="${b.id}" title="${b.label}"><span>${b.icon}</span><span class="bl"> ${b.label}</span></button>`).join("");
        app.innerHTML=`
            <div id="tbr"><button class="tb-new" id="tb-new" title="New tab">+</button></div>
            <header>
                <div class="hl">
                    <button class="mbtn" id="mbtn" aria-label="Menu"><span></span><span></span><span></span></button>
                    <div class="brand" id="brand">${SITE_NAME}</div>
                </div>
                <div class="sw">${hbHTML}<input type="text" class="sbar" id="sbar" placeholder="Search games…"><button class="fvbtn" id="fvbtn" title="Favorites">★</button></div>
            </header>
            <div id="grid"></div>`;
        document.body.appendChild(app);

        // Backdrop + panel
        const bd=document.createElement("div");bd.id="bd";document.body.appendChild(bd);
        const panel=document.createElement("div");panel.id="panel";
        panel.innerHTML=`<div class="ph"><div class="pe">Navigation</div><div class="pb">${SITE_NAME}</div></div>
            <div class="pbody">${MENU_ITEMS.map(m=>m.action==="separator"?`<div class="mdiv"></div>`:`<div class="mi" data-action="${m.action}" ${m.newTab?'data-nt="1"':''}><span class="miw">${m.icon}</span><span class="mil">${m.label}</span></div>`).join("")}</div>
            <div class="pft">${SITE_TAGLINE}</div>`;
        document.body.appendChild(panel);

        // Bottom nav
        const bnav=document.createElement("div");bnav.id="bnav";
        bnav.innerHTML=BOTTOM_NAV.filter(t=>!t.hidden).map(t=>`<button class="ntab${t.action==="home"?" on":""}" id="${t.id}" data-action="${t.action}"><span class="ni">${t.icon}</span><span>${t.label}</span></button>`).join("");
        document.body.appendChild(bnav);

        // Confirm dialog
        const ntov=document.createElement("div");ntov.id="ntov";
        ntov.innerHTML=`<div class="ntc"><div class="nt-ico" id="nt-ico">⧉</div><div class="nt-tl">Opening in New Tab</div><div class="nt-nm" id="nt-nm">—</div><div class="nt-bd">This will open in a new browser tab. Continue?</div><div class="nt-ac"><button class="nt-yes" id="nt-yes">Open</button><button class="nt-no" id="nt-no">Cancel</button></div></div>`;
        document.body.appendChild(ntov);

        // Theater
        const th=document.createElement("div");th.id="theater";
        th.innerHTML=`<div class="th"><div class="brand" id="t-ttl">Game</div><div class="tc"><button class="ab" id="t-fs">Fullscreen</button><button class="ab" id="t-dl" style="display:none">↓ Download</button><button class="ab" id="t-cloak">Cloak</button><button class="cb" id="t-close">✕ Close</button></div></div><div class="ifw"><iframe id="gframe" src="" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-pointer-lock allow-storage-api allow-modals allow-top-navigation-by-user-activation" allowfullscreen></iframe></div>`;
        document.body.appendChild(th);

        // Context menu
        const ctx=document.createElement("div");ctx.id="ctx";document.body.appendChild(ctx);

        // Anime panel
        const ap=document.createElement("div");ap.id="anime-panel";ap.className="fpanel";
        ap.innerHTML=`<div class="fpbar"><button class="fp-back" id="ap-back">← Back</button><div class="fp-ttl" id="ap-ttl">Anime</div><input type="text" class="fp-srch" id="ap-srch" placeholder="Search anime…"></div><div class="fp-body" id="ap-body"><div class="fp-msg">Loading…</div></div>`;
        document.body.appendChild(ap);

        // YouTube panel
        const yp=document.createElement("div");yp.id="yt-panel";yp.className="fpanel";
        yp.innerHTML=`<div class="fpbar"><button class="fp-back" id="yp-back">← Back</button><div class="fp-ttl" id="yp-ttl">YouTube</div><input type="text" class="fp-srch" id="yp-srch" placeholder="Search YouTube…"></div><div class="fp-body" id="yp-body"><div class="fp-msg">Loading…</div></div>`;
        document.body.appendChild(yp);

        // Browser panel
        const bp=document.createElement("div");bp.id="browser-panel";bp.className="fpanel";
        bp.innerHTML=`<div class="brbar"><button class="brnb" id="br-back" disabled>←</button><button class="brnb" id="br-fwd" disabled>→</button><button class="brnb" id="br-reload">↺</button><div class="bruw"><span class="brlk" id="brlk">🔒</span><input class="brui" id="brui" type="text" placeholder="Enter URL or search Google…" autocomplete="off" autocorrect="off" spellcheck="false"><button class="brgo" id="brgo">▶</button></div><button class="brnb" id="br-home2" title="Home">⊞</button><button class="brnb" id="br-nt" title="Real tab">⧉</button><button class="brnb" id="br-close">✕</button></div><div class="brbody"><div class="brload" id="brload"></div><div class="brnt" id="brnt"><div class="brnt-ico">⌨</div><div class="brnt-hint">Search with Brave or enter any URL.<br>All sites load through the Nova proxy — iframe blocks stripped.</div>
                <div class="brnt-search-hint">Try: youtube.com · wikipedia.org · github.com</div><div class="brcuts">
                        <div class="brcut" data-url="https://search.brave.com">🦁 Brave</div>
                        <div class="brcut" data-url="https://google.com">🔍 Google</div>
                        <div class="brcut" data-url="https://youtube.com">▶ YouTube</div>
                        <div class="brcut" data-url="https://wikipedia.org">📖 Wikipedia</div>
                        <div class="brcut" data-url="https://github.com">⌥ GitHub</div>
                        <div class="brcut" data-url="https://reddit.com">💬 Reddit</div>
                        <div class="brcut" data-url="https://twitch.tv">🎮 Twitch</div>
                        <div class="brcut" data-url="https://discord.com/app">💬 Discord</div>
                        <div class="brcut" data-url="https://x.com">𝕏 X</div>
                        <div class="brcut" data-url="https://netflix.com">📺 Netflix</div>
                        <div class="brcut" data-url="https://khanacademy.org">📚 Khan</div>
                        <div class="brcut" data-url="https://scratch.mit.edu">🐱 Scratch</div>
                    </div></div><iframe id="brframe" src="" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" allowfullscreen></iframe></div>`;
        document.body.appendChild(bp);

        // Dev overlay (login + panel)
        const devOv = document.createElement("div"); devOv.id="dev-overlay";
        devOv.innerHTML=`
            <div class="dev-login" id="dev-login-card">
                <div class="dev-badge">⚙ Developer</div>
                <div class="dev-title">Dev Panel</div>
                <div class="dev-sub">Nova Gaming</div>
                <div class="dev-err" id="dev-err"></div>
                <input type="text"     class="dev-field" id="dev-user" placeholder="Username" autocomplete="off">
                <input type="password" class="dev-field" id="dev-pw"   placeholder="Password" autocomplete="off">
                <button class="dev-btn" id="dev-login-btn">Sign In</button>
                <button class="dev-cancel" id="dev-cancel-btn">Cancel</button>
            </div>`;
        document.body.appendChild(devOv);

        // Dev main panel (hidden until authed)
        const devPanel = document.createElement("div"); devPanel.id="dev-panel"; devPanel.className="dev-panel";
        devPanel.innerHTML=`
            <div class="dev-pbar">
                <div class="dev-wm">Nova<span>Dev</span></div>
                <span class="dev-pbadge">Developer Panel</span>
                <div class="dev-pbar-right">
                    <button class="dev-hbtn primary" id="dev-add-btn">+ Add Game</button>
                    <button class="dev-hbtn" id="dev-export-btn">↓ Export</button>
                    <button class="dev-hbtn" id="dev-reset-btn" style="border-color:rgba(255,100,100,.3);color:rgba(255,100,100,.7)">↺ Reset Custom</button>
                    <button class="dev-hbtn" id="dev-logout-btn">✕ Sign Out</button>
                </div>
            </div>
            <div class="dev-body" id="dev-body">
                <div class="dev-stats" id="dev-stats"></div>
                <table class="dev-table"><thead><tr>
                    <th>Title</th><th>URL</th><th>Description</th><th>Flags</th><th>Actions</th>
                </tr></thead><tbody id="dev-tbody"></tbody></table>
            </div>`;
        document.body.appendChild(devPanel);

        // Add/Edit modal
        const devModal = document.createElement("div"); devModal.id="dev-modal";
        devModal.innerHTML=`
            <div class="dev-mcard scroll">
                <div class="dev-m-ttl" id="dev-m-ttl">Add Game</div>
                <div class="dev-preview" id="dev-preview">
                    <div class="dev-preview-ttl">Preview</div>
                    <div class="dev-preview-card"><h4 id="prev-title">Game Title</h4><p id="prev-desc">Description goes here…</p></div>
                </div>
                <div class="dev-row full"><div class="dev-lbl">Title</div><input class="dev-inp" id="dm-title" placeholder="e.g. Cookie Clicker"></div>
                <div class="dev-row full"><div class="dev-lbl">URL</div><input class="dev-inp" id="dm-url" placeholder="https://cdn.jsdelivr.net/..."></div>
                <div class="dev-row full"><div class="dev-lbl">Description</div><input class="dev-inp" id="dm-desc" placeholder="Short description…"></div>
                <div class="dev-row">
                    <label class="dev-toggle"><input type="checkbox" id="dm-newtab"><span>Open in New Tab</span></label>
                    <label class="dev-toggle"><input type="checkbox" id="dm-download" checked><span>Allow Download</span></label>
                </div>
                <div class="dev-m-acts">
                    <button class="dev-hbtn" id="dm-cancel">Cancel</button>
                    <button class="dev-hbtn primary" id="dm-save">Save Game</button>
                </div>
            </div>`;
        document.body.appendChild(devModal);

        this.devLoadCustomGames();
        this.renderCards();
        this.tabNew("Home","home");
    },

    // ── CARDS ───────────────────────────────────────────────────
    renderCards(){
        const grid=document.getElementById("grid");if(!grid)return;
        this.cards=[];
        this.devAllGames().forEach((item,i)=>{
            const card=document.createElement("div");
            card.className=`card${this.favorites.includes(item.title)?" fav":""}`;
            card.style.animationDelay=`${Math.min(i*25,350)}ms`;
            card.innerHTML=`<h3>${item.title}</h3><p>${item.desc}</p><span class="fvs">★</span>${item.newTab?'<span class="ntb">New Tab</span>':''}`;
            let raf;
            card.addEventListener("mousemove",e=>{
                cancelAnimationFrame(raf);
                raf=requestAnimationFrame(()=>{
                    const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
                    card.style.setProperty("--mx",`${x}px`);card.style.setProperty("--my",`${y}px`);
                    card.style.transform=`perspective(800px) rotateX(${((r.height/2-y)/(r.height/2))*10}deg) rotateY(${((x-r.width/2)/(r.width/2))*10}deg) scale(1.03) translateY(-4px)`;
                });
            },{passive:true});
            card.addEventListener("mouseleave",()=>{cancelAnimationFrame(raf);card.style.transform="";});
            card.addEventListener("click",()=>this.launch(item));
            card.addEventListener("contextmenu",e=>{e.preventDefault();e.stopPropagation();this.showCtx(e.clientX,e.clientY,item,card);});
            grid.appendChild(card);
            this.cards.push({el:card,title:item.title,str:`${item.title.toLowerCase()} ${item.desc.toLowerCase()}`});
        });
        this.filter();
    },
    filter(){
        for(const c of this.cards){
            const ok=(!this.onlyFavs||this.favorites.includes(c.title))&&(!this.searchQuery||c.str.includes(this.searchQuery));
            c.el.classList.toggle("hidden",!ok);
        }
    },

    // ── TABS ────────────────────────────────────────────────────
    tabNew(title,action,url){
        // New tab always opens Home (games grid) unless a specific action is passed
        const id=++this._tabCnt;
        this._tabs.push({id,title:title||"Home",action:action||"home",url:url||""});
        this.tabRender();this.tabActivate(id);
    },
    tabRender(){
        const bar=document.getElementById("tbr");if(!bar)return;
        bar.querySelectorAll(".tbt").forEach(t=>t.remove());
        const nb=document.getElementById("tb-new");
        this._tabs.forEach(t=>{
            const el=document.createElement("button");
            el.className=`tbt${t.active?" on":""}`;el.dataset.id=t.id;
            el.innerHTML=`<span class="tb-ttl">${t.title}</span><span class="tb-x" data-close="${t.id}">✕</span>`;
            el.addEventListener("click",ev=>{
                if(ev.target.dataset.close){ev.stopPropagation();this.tabClose(+ev.target.dataset.close);}
                else this.tabActivate(t.id);
            });
            bar.insertBefore(el,nb);
        });
    },
    tabActivate(id){
        this._tabs.forEach(t=>t.active=t.id===id);this.tabRender();
        const tab=this._tabs.find(t=>t.id===id);if(!tab)return;
        this._setView(tab.action,tab.url);
        const na=tab.action==="favorites"?"favorites":tab.action;
        document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action===na));
    },
    tabClose(id){
        const idx=this._tabs.findIndex(t=>t.id===id);if(idx===-1)return;
        const wasActive=this._tabs[idx].active;
        this._tabs.splice(idx,1);
        if(this._tabs.length===0)this.tabNew("Home","home");
        else if(wasActive)this.tabActivate(this._tabs[Math.max(0,idx-1)].id);
        else this.tabRender();
    },
    tabUpdateTitle(title){
        const t=this._tabs.find(t=>t.active);if(t){t.title=title;this.tabRender();}
    },

    // ── SET VIEW ────────────────────────────────────────────────
    _setView(action,url){
        document.getElementById("anime-panel")?.classList.toggle("on",action==="anime");
        document.getElementById("yt-panel")?.classList.toggle("on",action==="youtube");
        document.getElementById("browser-panel")?.classList.toggle("on",action==="browser");
        if(action==="anime"&&!this._animeLoaded)this.animeHome();
        if(action==="youtube"&&!this._ytLoaded)this.ytHome();
        if(action==="browser"){setTimeout(()=>document.getElementById("brui")?.focus(),300);if(url)this.brNav(url);}
        if(action==="favorites"){this.onlyFavs=true;document.getElementById("fvbtn")?.classList.add("on");this.filter();}
        if(action==="home"&&this.onlyFavs&&!this._tabs.find(t=>t.active&&t.action==="favorites")){this.onlyFavs=false;document.getElementById("fvbtn")?.classList.remove("on");this.filter();}
    },

    // ── LAUNCH GAME ─────────────────────────────────────────────
    launch(item){
        if(item.newTab){this.confirm(item.title,"⧉",()=>this.openRealTab(item.url,item.title));return;}
        const th=document.getElementById("theater"),frame=document.getElementById("gframe");
        document.getElementById("t-ttl").innerText=item.title;
        th.classList.add("on");this._theaterItem=item;
        const dl=document.getElementById("t-dl");if(dl)dl.style.display=item.download!==false?"":"none";
        const cdn=item.url.includes("cdn.jsdelivr.net")||item.url.includes("githubusercontent")||item.url.endsWith(".html");
        if(cdn){frame.src="about:blank";fetch(item.url).then(r=>{if(!r.ok)throw 0;return r.text();}).then(html=>{frame.src=URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"}));}).catch(()=>{frame.src=item.url;});}
        else frame.src=item.url;
    },
    openRealTab(url,title){
        const cdn=url.includes("cdn.jsdelivr.net")||url.includes("githubusercontent")||url.endsWith(".html");
        if(!cdn){window.open(url,"_blank");return;}
        const w=window.open("about:blank","_blank");
        if(!w){alert("Popup blocked.");return;}
        w.document.write(`<html><body style="margin:0;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><p>Loading ${title}…</p></body></html>`);
        w.document.close();
        fetch(url).then(r=>{if(!r.ok)throw 0;return r.text();}).then(html=>{w.document.open();w.document.write(html);w.document.close();try{w.document.title=title;}catch(e){};}).catch(()=>{try{w.location.href=url;}catch(e){}});
    },

    // ── CONFIRM ─────────────────────────────────────────────────
    confirm(name,icon,cb){
        const ov=document.getElementById("ntov");
        document.getElementById("nt-nm").innerText=name;document.getElementById("nt-ico").innerText=icon||"⧉";
        ov.classList.add("on");
        const y=document.getElementById("nt-yes"),n=document.getElementById("nt-no");
        const ny=y.cloneNode(true);y.replaceWith(ny);const nn=n.cloneNode(true);n.replaceWith(nn);
        const dismiss=()=>ov.classList.remove("on");
        document.getElementById("nt-yes").onclick=()=>{dismiss();cb();};
        document.getElementById("nt-no").onclick=dismiss;
        ov.onclick=e=>{if(e.target===ov)dismiss();};
    },

    // ── CONTEXT MENU ────────────────────────────────────────────
    showCtx(x,y,item,cardEl){
        const menu=document.getElementById("ctx"),isFav=this.favorites.includes(item.title);
        const dlRow=item.download!==false?`<div class="ci" id="ci-dl">↓ Download</div>`:"";
        menu.innerHTML=`<div class="ci" id="ci-launch">${item.newTab?"⧉ Open in New Tab":"⚡ Launch"}</div><div class="ci" id="ci-fav">${isFav?"✕ Remove Fav":"★ Add Fav"}</div><div class="ci ac" id="ci-cloak">⊘ Cloak Launch</div>${dlRow}`;
        menu.style.left=`${Math.min(x,innerWidth-200-10)}px`;menu.style.top=`${Math.min(y,innerHeight-160-10)}px`;
        menu.classList.add("on");
        document.getElementById("ci-launch").onclick=()=>{this.hideCtx();this.launch(item);};
        document.getElementById("ci-cloak").onclick=()=>{this.hideCtx();this.cloakLaunch(item.url);};
        document.getElementById("ci-fav").onclick=()=>this.toggleFav(item.title,cardEl);
        const dl=document.getElementById("ci-dl");
        if(dl)dl.onclick=()=>{this.hideCtx();this.dlItem(item);};
    },
    hideCtx(){document.getElementById("ctx")?.classList.remove("on");},
    dlItem(item){
        fetch(item.url).then(r=>{if(!r.ok)throw 0;return r.blob();}).then(blob=>{
            const u=URL.createObjectURL(blob),ext=item.url.includes(".html")?".html":".zip";
            const a=Object.assign(document.createElement("a"),{href:u,download:item.title.replace(/\s+/g,"_")+ext,style:"display:none"});
            document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);
        }).catch(()=>window.open(item.url,"_blank"));
    },
    toggleFav(title,cardEl){
        const idx=this.favorites.indexOf(title);
        if(idx>-1){this.favorites.splice(idx,1);cardEl.classList.remove("fav");}
        else{this.favorites.push(title);cardEl.classList.add("fav");}
        try{localStorage.setItem("ng_f",JSON.stringify(this.favorites));}catch(e){}
        this.filter();this.hideCtx();
    },

    // ── SAVE ────────────────────────────────────────────────────
    executeSaveDownload(){
        const btn=document.getElementById("save-btn"),lbl=btn?.querySelector(".bl");
        if(btn){btn.classList.add("ld");if(lbl)lbl.innerText=" Saving…";}
        fetch(SAVE_URL).then(r=>{if(!r.ok)throw 0;return r.blob();}).then(blob=>{
            const u=URL.createObjectURL(blob);
            const a=Object.assign(document.createElement("a"),{href:u,download:SAVE_FILENAME,style:"display:none"});
            document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);
        }).catch(()=>window.open(SAVE_URL,"_blank"))
        .finally(()=>{if(btn){btn.classList.remove("ld");if(lbl)lbl.innerText=" Save";}});
    },

    // ── PANEL ───────────────────────────────────────────────────
    openPanel(){document.getElementById("panel").classList.add("on");document.getElementById("bd").classList.add("on");document.getElementById("mbtn").classList.add("on");},
    closePanel(){document.getElementById("panel").classList.remove("on");document.getElementById("bd").classList.remove("on");document.getElementById("mbtn").classList.remove("on");},

    dispatch(action,newTab,label,icon){
        if(!action)return;
        const run=()=>{
            if(action==="reload")         {this.closePanel();location.reload();}
            else if(action==="cloak")     {this.closePanel();this.triggerCloak();}
            else if(action==="home")      {this._setView("home");this.tabUpdateTitle("Home");}
            else if(action==="search")    {document.getElementById("sbar")?.focus();}
            else if(action==="anime")     {this.tabNew("Anime","anime");}
            else if(action==="youtube")   {this.tabNew("YouTube","youtube");}
            else if(action==="browser")   {this.tabNew("Browser","browser");}
            else if(action==="favorites") {this.tabNew("Favorites","favorites");}
            else if(action==="menu")      {this.openPanel();}
            else if(action.startsWith("url:"))   {this.closePanel();window.open(action.slice(4),"_blank");}
            else if(action.startsWith("custom:")){const fn=action.slice(7);this.closePanel();if(typeof this[fn]==="function")this[fn]();}
        };
        if(newTab&&action.startsWith("url:"))this.confirm(label||action.slice(4),icon||"⧉",run);
        else run();
    },

    // ── ANIME ───────────────────────────────────────────────────
    animeHome(){
        this._animeLoaded=true;
        const body=document.getElementById("ap-body");body.innerHTML=`<div class="fp-spin"></div>`;
        fetch(`${ANIME_API_BASE}/home`).then(r=>r.json()).then(d=>{
            if(!d.success){body.innerHTML=`<div class="fp-msg">API error. Set WORKER_URL in config.</div>`;return;}
            let h="";
            if(d.latest_updates?.length){h+=`<div class="fp-sec"><div class="fp-sttl">Latest Updates</div><div class="fp-grid">`;d.latest_updates.slice(0,12).forEach(a=>{const sl=(a.url||"").split("/watch/")[1]||a.slug||"";h+=`<div class="acd" data-slug="${encodeURIComponent(sl)}"><img src="${a.poster||""}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'"><div class="acd-i"><div class="acd-t">${a.title}</div><div class="acd-m">Ep ${a.current_episode||"?"}</div></div></div>`;});h+=`</div></div>`;}
            if(d.top_trending?.NOW?.length){h+=`<div class="fp-sec"><div class="fp-sttl">Trending Now</div><div class="fp-grid">`;d.top_trending.NOW.slice(0,8).forEach(a=>{const sl=(a.url||"").split("/watch/")[1]||a.slug||"";h+=`<div class="acd" data-slug="${encodeURIComponent(sl)}"><img src="${a.poster||""}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'"><div class="acd-i"><div class="acd-t">${a.title}</div><div class="acd-m">${a.type||""}</div></div></div>`;});h+=`</div></div>`;}
            body.innerHTML=h||`<div class="fp-msg">No data.</div>`;
            body.querySelectorAll(".acd[data-slug]").forEach(el=>el.addEventListener("click",()=>{const s=decodeURIComponent(el.dataset.slug);if(s)this.animeInfo(s);}));
        }).catch(()=>{body.innerHTML=`<div class="fp-msg">Could not reach API.</div>`;});
    },
    animeSearch(q){
        if(!q.trim()){this.animeHome();return;}
        const body=document.getElementById("ap-body");body.innerHTML=`<div class="fp-spin"></div>`;
        fetch(`${ANIME_API_BASE}/search?keyword=${encodeURIComponent(q)}`).then(r=>r.json()).then(d=>{
            if(!d.success||!d.results?.length){body.innerHTML=`<div class="fp-msg">No results for "${q}"</div>`;return;}
            let h=`<div class="fp-sec"><div class="fp-sttl">Results</div><div class="fp-grid">`;
            d.results.forEach(a=>{const sl=(a.url||"").split("/watch/")[1]||a.slug||"";h+=`<div class="acd" data-slug="${encodeURIComponent(sl)}"><img src="${a.poster||""}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'"><div class="acd-i"><div class="acd-t">${a.title}</div><div class="acd-m">${a.type||""}</div></div></div>`;});
            h+=`</div></div>`;body.innerHTML=h;
            body.querySelectorAll(".acd[data-slug]").forEach(el=>el.addEventListener("click",()=>{const s=decodeURIComponent(el.dataset.slug);if(s)this.animeInfo(s);}));
        }).catch(()=>{body.innerHTML=`<div class="fp-msg">Search failed.</div>`;});
    },
    async animeInfo(slug){
        document.getElementById("ap-ttl").innerText="Loading…";
        const body=document.getElementById("ap-body");body.innerHTML=`<div class="fp-spin"></div>`;
        try{
            const d=await fetch(`${ANIME_API_BASE}/anime/${slug}`).then(r=>r.json());
            if(!d.success){body.innerHTML=`<div class="fp-msg">Could not load.</div>`;return;}
            document.getElementById("ap-ttl").innerText=d.title||"Anime";
            this._curAnime=d;this._eps=[];
            let epsHTML=`<div class="fp-msg">No episodes.</div>`;
            if(d.ani_id){const er=await fetch(`${ANIME_API_BASE}/episodes/${d.ani_id}`).then(r=>r.json()).catch(()=>null);
                if(er?.success&&er.episodes?.length){this._eps=er.episodes;
                    epsHTML=`<div class="ep-list">`+er.episodes.map(ep=>`<div class="ep-i" data-token="${ep.token||""}"><span class="ep-n">Ep ${ep.number}</span><span class="ep-t">${ep.title||"Episode "+ep.number}</span><span class="ep-bs">${ep.has_sub?'<span class="ep-b sub">SUB</span>':''}${ep.has_dub?'<span class="ep-b dub">DUB</span>':''}</span></div>`).join("")+`</div>`;
                }
            }
            body.innerHTML=`<div class="fp-sec" style="display:flex;gap:15px;flex-wrap:wrap;margin-bottom:20px"><img src="${d.poster||""}" style="width:clamp(75px,11vw,130px);border-radius:10px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'"><div style="flex:1;min-width:0"><div style="font-size:var(--flg);font-weight:800;margin-bottom:5px">${d.title||""}</div><div style="font-size:var(--fxs);color:rgba(255,255,255,.32);margin-bottom:9px">${d.japanese_title||""}</div><div style="font-size:var(--fsm);color:rgba(255,255,255,.42);line-height:1.55">${(d.description||"").slice(0,280)}${(d.description||"").length>280?"…":""}</div></div></div><div class="fp-sec"><div class="fp-sttl">Episodes (${this._eps.length})</div>${epsHTML}</div>`;
            body.querySelectorAll(".ep-i[data-token]").forEach(el=>el.addEventListener("click",()=>{const t=el.dataset.token;if(t)this.animeServers(t,el);}));
        }catch(e){body.innerHTML=`<div class="fp-msg">Failed.</div>`;}
    },
    async animeServers(token,epEl){
        let pick=document.getElementById("srv-pick");if(pick)pick.remove();
        pick=document.createElement("div");pick.id="srv-pick";pick.innerHTML=`<div class="fp-spin"></div>`;epEl.after(pick);
        try{
            const d=await fetch(`${ANIME_API_BASE}/servers/${token}`).then(r=>r.json());
            if(!d.success){pick.innerHTML=`<div class="fp-msg">No servers.</div>`;return;}
            let h=`<div style="padding:12px 0"><div class="fp-sttl">Choose Server</div>`;
            for(const[lang,srvs]of Object.entries(d.servers||{})){h+=`<div style="margin-bottom:10px"><div style="font-size:var(--fxs);color:rgba(255,255,255,.28);margin-bottom:6px;letter-spacing:2px;text-transform:uppercase">${lang}</div><div class="srv-list">`;srvs.forEach(s=>{h+=`<div class="srv-i" data-lid="${s.link_id}">${s.name}</div>`;});h+=`</div></div>`;}
            h+=`</div>`;pick.innerHTML=h;
            pick.querySelectorAll(".srv-i").forEach(el=>el.addEventListener("click",async()=>{
                el.classList.add("pl");el.textContent="Loading…";
                const src=await fetch(`${ANIME_API_BASE}/source/${el.dataset.lid}`).then(r=>r.json()).catch(()=>null);
                if(src?.success&&src.sources?.length)this.animePlay(src);
                else{el.textContent="Failed";el.classList.remove("pl");}
            }));
        }catch(e){pick.innerHTML=`<div class="fp-msg">Error.</div>`;}
    },
    animePlay(src){
        const url=src.sources[0]?.file||src.sources[0]?.url||"";if(!url){alert("No stream.");return;}
        const th=document.getElementById("theater"),frame=document.getElementById("gframe");
        document.getElementById("t-ttl").innerText=this._curAnime?.title||"Anime";
        th.classList.add("on");this._theaterItem=null;
        document.getElementById("t-dl").style.display=src.download?"":"none";
        const page=`<!DOCTYPE html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}body{background:#000;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}video{width:100%;height:100%}</style><script src="https://cdn.jsdelivr.net/npm/hls.js@latest"><\/script></head><body><video id="v" controls autoplay></video><script>var v=document.getElementById("v");if(Hls.isSupported()){var h=new Hls();h.loadSource("${url}");h.attachMedia(v);}else if(v.canPlayType("application/vnd.apple.mpegurl")){v.src="${url}";}<\/script></body></html>`;
        frame.src=URL.createObjectURL(new Blob([page],{type:"text/html;charset=utf-8"}));
    },

    // ── YOUTUBE ─────────────────────────────────────────────────
    // Helper: is this a Short? (vertical thumbnail ratio hint, or #Shorts in title)
    _ytIsShort(v){
        return (v.title||"").toLowerCase().includes("#shorts")||
               (v.title||"").toLowerCase().includes("#short");
    },

    // Render a grid of YT cards
    _ytGrid(videos, body, sectionTitle){
        if(!videos.length){body.innerHTML=`<div class="fp-msg">No results.</div>`;return;}
        let h=`<div class="fp-sec"><div class="fp-sttl">${sectionTitle}</div><div class="fp-grid">`;
        videos.forEach(v=>{
            const views=v.views?Number(v.views).toLocaleString()+" views":"";
            const meta=[v.channel,views].filter(Boolean).join(" · ");
            h+=`<div class="acd ytc" data-vid="${v.id}" data-title="${(v.title||"").replace(/"/g,"&quot;")}">
                <img src="${v.thumbnail}" alt="${v.title}" loading="lazy" onerror="this.style.background='var(--g3)'">
                <div class="acd-i"><div class="acd-t">${v.title}</div><div class="acd-m">${meta}</div></div></div>`;
        });
        h+=`</div></div>`;body.innerHTML=h;
        body.querySelectorAll(".acd[data-vid]").forEach(el=>
            el.addEventListener("click",()=>this.ytPlay(el.dataset.vid,el.dataset.title))
        );
    },

    ytHome(){
        this._ytLoaded=true;
        const body=document.getElementById("yp-body");body.innerHTML=`<div class="fp-spin"></div>`;
        fetch(`${YT_API_BASE}/trending`).then(r=>r.json()).then(d=>{
            if(!d.success){
                body.innerHTML=`<div class="fp-msg">Add your YouTube API key to the Worker config (YT_API_KEY).<br><br>Get a free key at <a href="https://console.cloud.google.com" target="_blank" style="color:var(--accent)">console.cloud.google.com</a> → Enable "YouTube Data API v3".</div>`;
                return;
            }
            // Filter shorts out of trending
            const videos = (d.results||[]).filter(v=>!this._ytIsShort(v));
            this._ytGrid(videos, body, "Trending");
        }).catch(()=>{body.innerHTML=`<div class="fp-msg">Could not load trending.</div>`;});
    },
    ytSearch(q){
        if(!q.trim()){this.ytHome();return;}
        const body=document.getElementById("yp-body");body.innerHTML=`<div class="fp-spin"></div>`;
        // Fetch videos + channels in parallel
        const vFetch = fetch(`${YT_API_BASE}/search?q=${encodeURIComponent(q)}&type=video&max=50`)
            .then(r=>r.json()).catch(()=>({success:false,results:[]}));
        const cFetch = fetch(`${YT_API_BASE}/search?q=${encodeURIComponent(q)}&type=channel&max=10`)
            .then(r=>r.json()).catch(()=>({success:false,results:[]}));

        Promise.all([vFetch,cFetch]).then(([vd,cd])=>{
            let h="";

            // Channels section
            const channels=(cd.results||[]).filter(c=>c.channelId||c.id);
            if(channels.length){
                h+=`<div class="fp-sec"><div class="fp-sttl">Channels</div>`;
                h+=`<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:4px">`;
                channels.forEach(c=>{
                    const id=c.channelId||c.id;
                    const thumb=c.thumbnail||"";
                    const subs=c.subscribers?c.subscribers+" subscribers":"";
                    h+=`<div class="acd" data-channel="${id}" style="display:flex;align-items:center;gap:12px;padding:12px;flex:1;min-width:200px;max-width:300px">
                        <img src="${thumb}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;background:var(--g3);flex-shrink:0" onerror="this.style.background='var(--g3)'">
                        <div><div class="acd-t">${c.title||c.name||""}</div><div class="acd-m">${subs}</div></div>
                    </div>`;
                });
                h+=`</div></div>`;
            }

            // Videos section — filter shorts
            const videos=(vd.results||[]).filter(v=>!this._ytIsShort(v));
            if(videos.length){
                h+=`<div class="fp-sec"><div class="fp-sttl">Videos (${videos.length})</div><div class="fp-grid">`;
                videos.forEach(v=>{
                    h+=`<div class="acd ytc" data-vid="${v.id}" data-title="${(v.title||"").replace(/"/g,"&quot;")}">
                        <img src="${v.thumbnail}" alt="${v.title}" loading="lazy" onerror="this.style.background='var(--g3)'">
                        <div class="acd-i"><div class="acd-t">${v.title}</div><div class="acd-m">${v.channel}</div></div>
                    </div>`;
                });
                h+=`</div></div>`;
            }

            if(!h) h=`<div class="fp-msg">No results for "${q}".</div>`;
            body.innerHTML=h;

            // Wire video clicks
            body.querySelectorAll(".acd[data-vid]").forEach(el=>
                el.addEventListener("click",()=>this.ytPlay(el.dataset.vid,el.dataset.title))
            );
            // Wire channel clicks — search for their videos
            body.querySelectorAll(".acd[data-channel]").forEach(el=>
                el.addEventListener("click",()=>{
                    const id=el.dataset.channel;
                    document.getElementById("yp-srch").value="";
                    this.ytChannelVideos(id, el.querySelector(".acd-t")?.textContent||"Channel");
                })
            );
        }).catch(()=>{body.innerHTML=`<div class="fp-msg">Search failed.</div>`;});
    },

    ytChannelVideos(channelId, channelName){
        const body=document.getElementById("yp-body");body.innerHTML=`<div class="fp-spin"></div>`;
        document.getElementById("yp-ttl").innerText=channelName;
        fetch(`${YT_API_BASE}/channel?id=${encodeURIComponent(channelId)}&max=50`).then(r=>r.json()).then(d=>{
            if(!d.success||!d.results?.length){body.innerHTML=`<div class="fp-msg">No videos found for this channel.</div>`;return;}
            const videos=(d.results||[]).filter(v=>!this._ytIsShort(v));
            this._ytGrid(videos,body,channelName);
        }).catch(()=>{body.innerHTML=`<div class="fp-msg">Could not load channel videos.</div>`;});
    },
    ytPlay(videoId, title){
        const th = document.getElementById("theater");
        const frame = document.getElementById("gframe");
        document.getElementById("t-ttl").innerText = title || "YouTube";
        th.classList.add("on");
        this._theaterItem = null;
        document.getElementById("t-dl").style.display = "none";

        // Error 153 fix: YouTube-nocookie refuses to load inside a sandboxed iframe.
        // We temporarily remove the sandbox attribute, load the embed, then restore it
        // when the theater closes (see t-close handler).
        const GAME_SANDBOX = "allow-scripts allow-same-origin allow-downloads allow-forms allow-pointer-lock allow-storage-api allow-modals allow-top-navigation-by-user-activation";
        frame._savedSandbox = frame.getAttribute("sandbox");
        frame.removeAttribute("sandbox");

        const embedUrl = "https://www.youtube-nocookie.com/embed/" + videoId
            + "?autoplay=1&rel=0&modestbranding=1&color=white";

        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.setAttribute("allowfullscreen","");
        frame.src = embedUrl;
    },

    // ── BROWSER ─────────────────────────────────────────────────
    brNav(rawUrl){
        let url=rawUrl.trim();if(!url)return;
        if(!/^https?:\/\//i.test(url)){
            if(/^localhost|\d+\.\d+\.\d+|\.[a-z]{2,}(\/|$)/i.test(url))url="https://"+url;
            else url="https://search.brave.com/search?q="+encodeURIComponent(url)+"&source=web";
        }
        const frame=document.getElementById("brframe"),loader=document.getElementById("brload");
        const nt=document.getElementById("brnt"),ui=document.getElementById("brui"),lk=document.getElementById("brlk");
        this._br.hist=this._br.hist.slice(0,this._br.idx+1);this._br.hist.push(url);this._br.idx=this._br.hist.length-1;
        this._brNav();
        ui.value=url;if(lk)lk.textContent=url.startsWith("https://")?"🔒":"⚠";
        if(nt)nt.classList.add("gone");
        if(loader)loader.classList.add("on");
        frame.src=prxyEncode(url);
        frame.onload=()=>{if(loader)loader.classList.remove("on");};
        try{this.tabUpdateTitle(new URL(url).hostname.replace(/^www\./,""));}catch(e){}
    },
    _brNav(){
        const b=document.getElementById("br-back"),f=document.getElementById("br-fwd");
        if(b)b.disabled=this._br.idx<=0;if(f)f.disabled=this._br.idx>=this._br.hist.length-1;
    },
    brBindEvents(){
        const $=id=>document.getElementById(id);
        const ui=$("brui"),frame=$("brframe");
        ui?.addEventListener("keydown",e=>{if(e.key==="Enter")this.brNav(ui.value);});
        ui?.addEventListener("focus",()=>ui.select());
        $("brgo")?.addEventListener("click",()=>this.brNav(ui?.value||""));
        $("br-back")?.addEventListener("click",()=>{if(this._br.idx>0){this._br.idx--;this._brNav();const u=this._br.hist[this._br.idx];if(ui)ui.value=u;const l=$("brload");if(l)l.classList.add("on");frame.src=prxyEncode(u);frame.onload=()=>{if(l)l.classList.remove("on");};}});
        $("br-fwd")?.addEventListener("click",()=>{if(this._br.idx<this._br.hist.length-1){this._br.idx++;this._brNav();const u=this._br.hist[this._br.idx];if(ui)ui.value=u;const l=$("brload");if(l)l.classList.add("on");frame.src=prxyEncode(u);frame.onload=()=>{if(l)l.classList.remove("on");};}});
        $("br-reload")?.addEventListener("click",()=>{const u=this._br.hist[this._br.idx];if(!u)return;frame.src="";setTimeout(()=>{const l=$("brload");if(l)l.classList.add("on");frame.src=prxyEncode(u);frame.onload=()=>{if(l)l.classList.remove("on");};},40);});
        $("br-home2")?.addEventListener("click",()=>this.dispatch("home"));
        $("br-close")?.addEventListener("click",()=>this.dispatch("home"));
        $("br-nt")?.addEventListener("click",()=>{const u=this._br.hist[this._br.idx];if(u)window.open(u,"_blank");});
        document.querySelectorAll(".brcut").forEach(el=>el.addEventListener("click",()=>this.brNav(el.dataset.url)));
    },

    // ── CLOAK ───────────────────────────────────────────────────
    triggerCloak(){
        // Instantly make the page visually disappear
        document.documentElement.style.cssText="background:#05050a!important";
        document.body.style.cssText="background:#05050a!important;opacity:0!important";

        const icon=CLOAK_ICON, title=CLOAK_TITLE;

        // KEY INSIGHT: document.open() kills the current browsing context, which means
        // any blob: URLs created before the call are revoked. We can't use blob URLs.
        // Instead we inline the entire script source directly into the HTML string.
        // document.write() can handle large strings just fine.
        const writeInline = src => {
            // Escape </script> inside the source so it doesn't break the tag
            const escaped = src.replace(/<\/script>/gi, '<\/script>');
            const page = [
                '<!DOCTYPE html>',
                '<html>',
                '<head>',
                '<meta charset="utf-8">',
                '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
                '<title>'+title+'</title>',
                '<link rel="shortcut icon" type="image/x-icon" href="'+icon+'">',
                '<style>*{margin:0;padding:0}html,body{background:#05050a;width:100%;height:100%;overflow:hidden}</style>',
                '</head>',
                '<body>',
                '<script>',
                escaped,
                '<\/script>',
                '</body>',
                '</html>',
            ].join('\n');
            document.open('text/html','replace');
            document.write(page);
            document.close();
        };

        // Fallback when CDN is unreachable: use a <script src> pointing at CDN
        const writeSrcTag = () => {
            const page = [
                '<!DOCTYPE html><html><head>',
                '<meta charset="utf-8"><title>'+title+'</title>',
                '<link rel="shortcut icon" href="'+icon+'">',
                '<style>*{margin:0;padding:0}html,body{background:#05050a;width:100%;height:100%;overflow:hidden}</style>',
                '</head><body>',
                '<script src="'+CLOAK_CDN+'"><\/script>',
                '</body></html>',
            ].join('');
            document.open('text/html','replace');
            document.write(page);
            document.close();
        };

        fetch(CLOAK_CDN)
            .then(r=>{ if(!r.ok) throw new Error('cdn '+r.status); return r.text(); })
            .then(src=>writeInline(src))
            .catch(()=>writeSrcTag());
    },

    cloakLaunch(url){
        if(!url||url===location.href)return;
        const w=window.open("about:blank","_blank");if(!w){alert("Popup blocked.");return;}
        w.document.title="Google Classroom";
        const lnk=w.document.createElement("link");Object.assign(lnk,{rel:"shortcut icon",href:"https://ssl.gstatic.com/classroom/favicon.png"});w.document.head.appendChild(lnk);
        w.document.body.style.cssText="margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;background:#000";
        const iframe=w.document.createElement("iframe");iframe.style.cssText="width:100%;height:100%;border:none";iframe.allowFullscreen=true;
        if(url.startsWith("blob:")){fetch(document.getElementById("gframe").src).then(r=>r.text()).then(html=>{iframe.src=w.URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"}));}).catch(()=>{iframe.src=url;});}
        else iframe.src=url;
        w.document.body.appendChild(iframe);this.hideCtx();
    },

    // ── EVENTS ──────────────────────────────────────────────────
    bindEvents(){
        const $=id=>document.getElementById(id),$$=s=>document.querySelector(s);

        // Lock
        $$(".lk-in")?.addEventListener("input",e=>{
            if(e.target.value===LOCK_PIN){
                const l=$("lock");l.style.opacity="0";l.style.pointerEvents="none";
                setTimeout(()=>l.remove(),420);$("app").classList.add("on");
            }
        });

        $("sbar")?.addEventListener("input",e=>{this.searchQuery=e.target.value.toLowerCase().trim();this.filter();},{passive:true});
        $("fvbtn")?.addEventListener("click",()=>{this.onlyFavs=!this.onlyFavs;$("fvbtn").classList.toggle("on",this.onlyFavs);this.filter();});
        $("mbtn")?.addEventListener("click",e=>{e.stopPropagation();$("panel").classList.contains("on")?this.closePanel():this.openPanel();});
        $("bd")?.addEventListener("click",()=>this.closePanel());
        $("panel")?.addEventListener("click",e=>e.stopPropagation());
        $("panel")?.querySelectorAll(".mi[data-action]").forEach(el=>el.addEventListener("click",()=>{const cfg=MENU_ITEMS.find(m=>m.action===el.dataset.action);this.dispatch(el.dataset.action,el.dataset.nt==="1",cfg?.label,cfg?.icon);}));
        HEADER_BUTTONS.forEach(b=>{$(b.id)?.addEventListener("click",()=>this.dispatch(b.action,b.newTab,b.label,b.icon));});

        // Tab bar
        $("tb-new")?.addEventListener("click",()=>this.tabNew("Home","home"));

        // Bottom nav
        document.querySelectorAll(".ntab").forEach(t=>t.addEventListener("click",()=>{
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n===t));
            this.dispatch(t.dataset.action);
        }));

        // Theater
        $("t-fs")?.addEventListener("click",()=>document.getElementById("ifw")?.requestFullscreen?.());
        $("t-cloak")?.addEventListener("click",()=>this.cloakLaunch($("gframe").src));
        $("t-close")?.addEventListener("click",()=>{
            $("theater").classList.remove("on");
            const f=$("gframe");
            f.src="";
            // Restore sandbox for game iframes (was removed for YouTube)
            if(f._savedSandbox!==undefined){
                f.setAttribute("sandbox",f._savedSandbox);
                f.allow="";
                f._savedSandbox=undefined;
            }
            this._theaterItem=null;
        });
        $("t-dl")?.addEventListener("click",()=>{if(this._theaterItem)this.dlItem(this._theaterItem);});

        // Anime
        $("ap-back")?.addEventListener("click",()=>{
            if(this._curAnime){
                this._curAnime=null;
                document.getElementById("ap-srch").value="";
                this.animeHome();
                $("ap-ttl").innerText="Anime";
            } else {
                this._setView("home");
                document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
            }
        });
        let ast;$("ap-srch")?.addEventListener("input",e=>{clearTimeout(ast);ast=setTimeout(()=>this.animeSearch(e.target.value),380);});

        // YouTube
        $("yp-back")?.addEventListener("click",()=>{
            document.getElementById("yp-ttl").innerText="YouTube";
            document.getElementById("yp-srch").value="";
            this._ytLoaded=false; // allow reload
            this._setView("home");
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
        });
        let yst;$("yp-srch")?.addEventListener("input",e=>{clearTimeout(yst);yst=setTimeout(()=>this.ytSearch(e.target.value),380);});

        // Browser
        this.brBindEvents();

        // Global
        window.addEventListener("click",()=>this.hideCtx());
        window.addEventListener("contextmenu",e=>{if(!e.target.closest(".card")){e.preventDefault();this.hideCtx();}});
        window.addEventListener("keydown",e=>{
            if(e.key==="Escape"){
                if($("ntov").classList.contains("on"))      $("ntov").classList.remove("on");
                else if($("panel").classList.contains("on"))this.closePanel();
                else if($("anime-panel").classList.contains("on")){this._setView("home");document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));}
                else if($("yt-panel").classList.contains("on")){this._setView("home");document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));}
                else if($("browser-panel").classList.contains("on")){this._setView("home");document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));}
                else this.triggerCloak();
            }
        },{passive:true});
    },

    // ── DEV PANEL ────────────────────────────────────────────────────

    // Load custom games added via dev panel from localStorage
    devLoadCustomGames(){
        try{ this._customGames = JSON.parse(localStorage.getItem("ng_dev_games")||"[]"); }
        catch(e){ this._customGames = []; }
    },

    // Merge built-in GAMES + custom games
    devAllGames(){
        return [...GAMES, ...this._customGames];
    },

    // Open the dev login overlay
    devOpen(){
        const ov = document.getElementById("dev-overlay");
        if(!ov) return;
        if(this._devAuthed){ this.devShowPanel(); return; }
        ov.classList.add("on");
        setTimeout(()=>document.getElementById("dev-user")?.focus(), 200);
    },

    devClose(){
        document.getElementById("dev-overlay")?.classList.remove("on");
        document.getElementById("dev-panel")?.classList.remove("on");
    },

    devLogin(){
        const u = document.getElementById("dev-user")?.value.trim();
        const p = document.getElementById("dev-pw")?.value;
        const err = document.getElementById("dev-err");
        if(u === DEV_USER && p === DEV_PASS){
            this._devAuthed = true;
            document.getElementById("dev-overlay").classList.remove("on");
            this.devShowPanel();
        } else {
            if(err){ err.textContent="Invalid username or password."; }
            document.getElementById("dev-pw").value="";
            document.getElementById("dev-pw").focus();
            // Shake animation
            const card = document.getElementById("dev-login-card");
            card.style.animation="none"; card.offsetHeight;
            card.style.animation="devShake .4s var(--ea)";
        }
    },

    devShowPanel(){
        const panel = document.getElementById("dev-panel");
        panel.classList.add("on");
        this.devRenderTable();
    },

    devRenderTable(){
        const tbody = document.getElementById("dev-tbody");
        const stats = document.getElementById("dev-stats");
        if(!tbody) return;
        const all = this.devAllGames();
        // Stats
        if(stats){
            const custom = this._customGames.length;
            stats.innerHTML = `
                <div class="dev-stat"><div class="dev-stat-n">${all.length}</div><div class="dev-stat-l">Total Games</div></div>
                <div class="dev-stat"><div class="dev-stat-n">${GAMES.length}</div><div class="dev-stat-l">Built-in</div></div>
                <div class="dev-stat"><div class="dev-stat-n">${custom}</div><div class="dev-stat-l">Custom Added</div></div>
                <div class="dev-stat"><div class="dev-stat-n">${all.filter(g=>g.newTab).length}</div><div class="dev-stat-l">New Tab</div></div>
            `;
        }
        // Table rows
        tbody.innerHTML = all.map((g, i) => {
            const isCustom = i >= GAMES.length;
            const ci = isCustom ? i - GAMES.length : -1;
            const ntPill  = g.newTab    ? `<span class="dev-pill nt">New Tab</span>` : `<span class="dev-pill no">Iframe</span>`;
            const dlPill  = g.download!==false ? `<span class="dev-pill dl">DL</span>` : `<span class="dev-pill no">No DL</span>`;
            const editBtn = isCustom ? `<button class="dev-act-btn" data-ci="${ci}" data-action="edit">Edit</button>` : `<button class="dev-act-btn" style="opacity:.35;cursor:default">Built-in</button>`;
            const delBtn  = isCustom ? `<button class="dev-act-btn del" data-ci="${ci}" data-action="del">Delete</button>` : "";
            const shortUrl = g.url.length > 50 ? g.url.slice(0,47)+"…" : g.url;
            return `<tr class="${isCustom?"custom-row":""}">
                <td style="font-weight:600;color:#fff">${g.title}</td>
                <td style="font-family:monospace;font-size:11px;color:rgba(255,255,255,.45)" title="${g.url}">${shortUrl}</td>
                <td style="color:rgba(255,255,255,.5)">${g.desc}</td>
                <td style="display:flex;gap:5px;flex-wrap:wrap">${ntPill}${dlPill}</td>
                <td style="white-space:nowrap">${editBtn} ${delBtn}</td>
            </tr>`;
        }).join("");

        // Wire up edit/delete buttons
        tbody.querySelectorAll(".dev-act-btn[data-action]").forEach(btn => {
            btn.addEventListener("click", () => {
                const ci = +btn.dataset.ci;
                if(btn.dataset.action === "del"){
                    if(confirm(`Delete "${this._customGames[ci].title}"?`)){
                        this._customGames.splice(ci, 1);
                        this.devSaveCustom();
                        this.devRenderTable();
                        this.renderCards(); // refresh main grid
                    }
                } else if(btn.dataset.action === "edit"){
                    this.devOpenModal(ci);
                }
            });
        });
    },

    devOpenModal(editIndex){
        const modal = document.getElementById("dev-modal");
        const isEdit = editIndex !== undefined && editIndex >= 0;
        document.getElementById("dev-m-ttl").textContent = isEdit ? "Edit Game" : "Add Game";
        const g = isEdit ? this._customGames[editIndex] : { title:"", url:"", desc:"", newTab:false, download:true };
        document.getElementById("dm-title").value    = g.title  || "";
        document.getElementById("dm-url").value      = g.url    || "";
        document.getElementById("dm-desc").value     = g.desc   || "";
        document.getElementById("dm-newtab").checked = !!g.newTab;
        document.getElementById("dm-download").checked = g.download !== false;
        // Update preview
        this.devUpdatePreview();
        modal.dataset.editIndex = isEdit ? editIndex : "";
        modal.classList.add("on");
        document.getElementById("dm-title").focus();
    },

    devCloseModal(){
        document.getElementById("dev-modal")?.classList.remove("on");
    },

    devUpdatePreview(){
        const t = document.getElementById("dm-title")?.value || "Game Title";
        const d = document.getElementById("dm-desc")?.value  || "Description goes here…";
        const pt = document.getElementById("prev-title");
        const pd = document.getElementById("prev-desc");
        if(pt) pt.textContent = t;
        if(pd) pd.textContent = d;
    },

    devSaveModal(){
        const title = document.getElementById("dm-title")?.value.trim();
        const url   = document.getElementById("dm-url")?.value.trim();
        const desc  = document.getElementById("dm-desc")?.value.trim() || "No description.";
        const newTab = document.getElementById("dm-newtab")?.checked || false;
        const download = document.getElementById("dm-download")?.checked !== false;

        if(!title){ alert("Title is required."); return; }
        if(!url)  { alert("URL is required."); return; }
        try{ new URL(url); } catch(e){ alert("Invalid URL — make sure it starts with https://"); return; }

        const game = { title, url, desc, newTab, download };
        const editIndex = document.getElementById("dev-modal")?.dataset.editIndex;

        if(editIndex !== "" && editIndex !== undefined){
            this._customGames[+editIndex] = game;
        } else {
            this._customGames.push(game);
        }

        this.devSaveCustom();
        this.devCloseModal();
        this.devRenderTable();
        this.renderCards(); // refresh main grid immediately
    },

    devSaveCustom(){
        try{ localStorage.setItem("ng_dev_games", JSON.stringify(this._customGames)); }catch(e){}
    },

    devExport(){
        // Download the custom games as a JSON file
        const json = JSON.stringify(this._customGames, null, 2);
        const blob = new Blob([json], {type:"application/json"});
        const a = Object.assign(document.createElement("a"), {href:URL.createObjectURL(blob), download:"nova-custom-games.json", style:"display:none"});
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    },

    devBindEvents(){
        const $ = id => document.getElementById(id);

        // Login
        $("dev-login-btn")?.addEventListener("click", ()=>this.devLogin());
        $("dev-cancel-btn")?.addEventListener("click", ()=>{
            document.getElementById("dev-overlay").classList.remove("on");
            document.getElementById("dev-user").value="";
            document.getElementById("dev-pw").value="";
            document.getElementById("dev-err").textContent="";
        });
        ["dev-user","dev-pw"].forEach(id => $(id)?.addEventListener("keydown", e=>{ if(e.key==="Enter") this.devLogin(); }));

        // Panel controls
        $("dev-add-btn")?.addEventListener("click",    ()=>this.devOpenModal());
        $("dev-export-btn")?.addEventListener("click", ()=>this.devExport());
        $("dev-logout-btn")?.addEventListener("click", ()=>{ this._devAuthed=false; document.getElementById("dev-panel").classList.remove("on"); });
        $("dev-reset-btn")?.addEventListener("click",  ()=>{
            if(confirm("Delete ALL custom games? Built-in games are kept.")){
                this._customGames=[];this.devSaveCustom();this.devRenderTable();this.renderCards();
            }
        });

        // Modal
        $("dm-cancel")?.addEventListener("click", ()=>this.devCloseModal());
        $("dm-save")?.addEventListener("click",   ()=>this.devSaveModal());
        $("dev-modal")?.addEventListener("click", e=>{ if(e.target===$("dev-modal")) this.devCloseModal(); });
        ["dm-title","dm-desc"].forEach(id => $(id)?.addEventListener("input", ()=>this.devUpdatePreview()));

        // Secret trigger: triple-click the brand text in header
        document.getElementById("brand")?.addEventListener("click", ()=>{
            this._devClicks = (this._devClicks||0) + 1;
            clearTimeout(this._devClickTimer);
            this._devClickTimer = setTimeout(()=>{ this._devClicks=0; }, 600);
            if(this._devClicks >= 3) { this._devClicks=0; this.devOpen(); }
        });

        // URL param trigger: ?dev
        if(location.search.includes("dev")) this.devOpen();
    },

    boot(){this.css();this.buildDOM();this.dots();this.bindEvents();this.devBindEvents();}
};

nova.boot();
