/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║           NOVA GAMING — SELF-SERVE CONFIG                ║
 * ║  Everything you need to customize is RIGHT HERE.         ║
 * ║  No coding knowledge needed — just change the values!    ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 *  HOW TO EDIT:
 *  - Text between quotes " " → change the text inside the quotes
 *  - true / false            → true means ON, false means OFF
 *  - Numbers                 → just change the number
 *  - Lists [ ]               → add items with {}, separated by commas
 *
 *  ACTION TYPES (for buttons and menu items):
 *    "reload"              → refreshes the page
 *    "cloak"               → panic-cloaks this tab
 *    "url:https://..."     → opens a link in a new tab
 *    "custom:fnName"       → calls a built-in function by name
 *    "anime"               → opens the anime panel
 *    "separator"           → draws a divider line (no icon/label)
 */

// ════════════════════════════════════════════════════════════
//  ① SITE IDENTITY
// ════════════════════════════════════════════════════════════
const SITE_NAME    = "Nova Gaming";       // shown in header and lock screen
const SITE_TAGLINE = "Nova Gaming Engine"; // shown in menu panel footer

// ════════════════════════════════════════════════════════════
//  ② LOCK SCREEN
// ════════════════════════════════════════════════════════════
const LOCK_PIN     = "1234";             // 4-digit PIN to unlock the site

// ════════════════════════════════════════════════════════════
//  ③ PANIC CLOAK — press Escape to activate
//    Tab will look like a Google Docs page and URL → about:blank
// ════════════════════════════════════════════════════════════
const CLOAK_TITLE  = "Google Docs";
const CLOAK_ICON   = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
// URL of loader.js on CDN — used to re-boot the engine inside about:blank
const CLOAK_CDN    = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/loader.js";

// ════════════════════════════════════════════════════════════
//  ④ DOT BACKGROUND
// ════════════════════════════════════════════════════════════
const DOT_COLOR   = "rgba(255,255,255,0.09)";
const DOT_SPACING = 36;  // pixels between dots

// ════════════════════════════════════════════════════════════
//  ⑤ OFFLINE SAVE FILE
//    The "Save" button downloads this file for offline use
// ════════════════════════════════════════════════════════════
const SAVE_URL      = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/singlefile.html";
const SAVE_FILENAME = "NovaGaming.html";

// ════════════════════════════════════════════════════════════
//  ⑥ PROXY BUTTON
//    Set PROXY_ENABLED to false to hide the button entirely
// ════════════════════════════════════════════════════════════
const PROXY_ENABLED = false;
const PROXY_LABEL   = "Proxy";
const PROXY_URL     = "https://prxy.umarerthteam.workers.dev/";  // ← change to your proxy URL

// ════════════════════════════════════════════════════════════
//  ⑦ ANIME API
//    Set ANIME_ENABLED to false to hide the anime tab entirely
//    Deploy the Python API and put its URL below
// ════════════════════════════════════════════════════════════
const ANIME_ENABLED  = true;
const ANIME_API_BASE = "https://novagaming.pages.dev/app.py";  // ← change to your deployed API URL
// e.g. "https://my-anime-api.workers.dev/api"  or  "http://localhost:5000/api"

// ════════════════════════════════════════════════════════════
//  ⑧ BOTTOM NAV TABS
//    Reorder, rename, or remove tabs freely.
//    icon: any character/symbol   action: see ACTION TYPES above
// ════════════════════════════════════════════════════════════
const BOTTOM_NAV = [
    { id:"nav-home",    icon:"⊞",  label:"Zones",    action:"home"      },
  //  { id:"nav-browser",    icon:"━",  label:"Proxy",   action:"url:https://prxy.umarerthteam.workers.dev", newTab:true},
 //   { id:"nav-favs",    icon:"★",  label:"Favorites",action:"favorites" },
//    { id:"nav-anime",   icon:"▶",  label:"Anime",    action:"anime",    hidden: !ANIME_ENABLED },
    { id:"nav-menu",    icon:"≡",  label:"Menu",     action:"menu"      },
];

// ════════════════════════════════════════════════════════════
//  ⑨ SIDE MENU ITEMS
// ════════════════════════════════════════════════════════════
const MENU_ITEMS = [
    { icon:"⌂",  label:"Home",               action:"reload"  },
    { icon:"🖷",  label:"Request a Game",     action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab:true },
    { icon:"↓",  label:"Save Offline File",  action:"custom:executeSaveDownload" },
    { action:"separator" },
    { icon:"⊘",  label:"Cloak Tab",          action:"cloak"   },
    { icon:"⏱",  label:"My YouTube",         action:"url:https://inv.thepixora.com/channel/UCcusQs9FwQdeB2g_v7_R45g", newTab:true },
    // ── Add your own items below ──────────────────────────────
    // { icon:"⚙", label:"My Custom Tool",    action:"url:https://example.com", newTab:true },
];

// ════════════════════════════════════════════════════════════
//  ⑩ HEADER BUTTONS (right side of title bar)
// ════════════════════════════════════════════════════════════
const HEADER_BUTTONS = [
    {
        id:"request-game-btn", icon:"🖷", label:"Request",
        action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog",
        newTab:true
    },
    { id:"save-singlefile-btn", icon:"↓", label:"Save", action:"custom:executeSaveDownload" },
    // { id:"my-btn", icon:"⊕", label:"My Tool", action:"url:https://example.com", newTab:true },
];

// ════════════════════════════════════════════════════════════
//  ⑪ GAMES REGISTRY
//    title    : name shown on the card
//    url      : where the game lives
//    desc     : short description
//    newTab   : true  → confirm dialog then open in new tab
//               false → open inside the player (default)
//    download : true  → show download option  (default)
//               false → hide download option
// ════════════════════════════════════════════════════════════
const GAMES = [
    { title:"Cookie Clicker",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html",                      desc:"Idle baking simulator.",                     newTab:false, download:true  },
    { title:"Brotato",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Brotato.html",                             desc:"Kill weird looking creatures.",              newTab:false, download:true  },
    { title:"Minecraft",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/EaglercraftX_1.8_u50_Offline_Signed.html", desc:"Classic sandbox world.",                     newTab:false, download:true  },
    { title:"Baldi's Basics Plus",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Baldi's-Basics-Plus.html",                desc:"Escape from Baldi.",                         newTab:true,  download:true  },
    { title:"Bank Robbery 3",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Bank-Robbery-3.html",                      desc:"Rob banks.",                                 newTab:true,  download:true  },
    { title:"Buckshot Roulette",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Buckshot%20Roulette.html",                 desc:"Take your chance of getting killed.",        newTab:false, download:true  },
    { title:"BuildNow",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/BuildNow.html",                            desc:"Ripoff of 1v1.LoL.",                         newTab:true,  download:true  },
    { title:"Five Nights at Epstein's",  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Five-Nights-at-Epstein's.html",            desc:"Survive 5 nights.",                          newTab:true,  download:true  },
    { title:"GTA Vice City",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/GTA__Vice_City.html",                      desc:"It's GTA bro.",                              newTab:false, download:true  },
    { title:"Git-Hub Search",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Git-Hub_Search.html",                      desc:"Search Git-Hub.",                            newTab:false, download:true  },
    { title:"Pizza Tower",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Pizza-Tower.html",                         desc:"IDK never played it before.",                newTab:false, download:true  },
    { title:"Subway Surfers",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Subway_Surfers.html",                      desc:"Escape a cop.",                              newTab:false, download:true  },
    { title:"Temple Run 2",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Temple-Run-2.html",                        desc:"Escaping a temple?",                         newTab:true,  download:true  },
    { title:"Snow Rider (Hooda Math)",   url:"https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0",                          desc:"Ride in Snow!",                              newTab:false, download:false },
    { title:"Puppet Hockey (MathPG)",    url:"https://www.mathplayground.com/pg_puppet_hockey.html",                                desc:"Play Puppet Hockey!",                        newTab:true,  download:false },
    { title:"NikeHub",                   url:"https://nikehub.pages.dev/a129x",                                                     desc:"Another games hub.",                         newTab:false, download:false },
    { title:"Vapor V4",                  url:"https://100.vaporized.help",                                                          desc:"A hub of general entertainment.",            newTab:false, download:false },
    { title:"Google Doodles",            url:"https://doodles.google/search/?form_tags=interactive%20game",                         desc:"Google's own collection of games.",          newTab:false, download:false },
    { title:"Friday Night Funkin",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin.html",                 desc:"A basic rhythm game.",                       newTab:false, download:true  },
    { title:"FNF VS Hex",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__Vs._Hex.html",       desc:"FNF mod — Hex.",                             newTab:false, download:true  },
    { title:"FNF VS Whitty",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__V.S._Whitty.html",   desc:"FNF mod — Whitty.",                          newTab:false, download:true  },
    { title:"Doki Doki Literature Club", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/DokiDoki-Literatureclub.html",        desc:"A literature club.",                         newTab:false, download:true  },
    { title: "Basically YouTube",  url: "https://inv.thepixora.com/search",        desc: "A social media platform.",                                  newTab: true, download: false  },
    { title: "Unbl*cked Prxy Browser",  url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/prxy.html",        desc: "A Prxy.",                                  newTab: false, download: true  },
    { title:"1v1.lol",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath/1v1.LoL.html",                             desc:"Build and shoot combat.",                    newTab:false, download:true  },
    // ── Add more games below ──────────────────────────────────
    // { title:"My Game", url:"https://...", desc:"Description.", newTab:false, download:true },
];

// ════════════════════════════════════════════════════════════════════
//  ENGINE — DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING
// ════════════════════════════════════════════════════════════════════

const nova = {
    cachedCards: [],
    favorites: [],
    searchQuery: "",
    onlyShowFavorites: false,
    _theaterItem: null,
    _animeState: { page: "home", anime: null, episodes: [], servers: null },
    _activeTab: "home",

    // ── CSS ──────────────────────────────────────────────────────────
    css() {
        const s = document.createElement("style");
        s.textContent = `
        :root {
            --bg:#05050a; --accent:#ff0055; --accent-dim:rgba(255,0,85,.18); --accent-glow:rgba(255,0,85,.35);
            --g0:rgba(255,255,255,.012); --g1:rgba(255,255,255,.028); --g2:rgba(255,255,255,.048);
            --g3:rgba(255,255,255,.072); --g4:rgba(255,255,255,.10);  --g5:rgba(255,255,255,.14);
            --b1:rgba(255,255,255,.07);  --b2:rgba(255,255,255,.13);  --b3:rgba(255,255,255,.22);
            --blur-sm:blur(12px) saturate(140%); --blur-md:blur(28px) saturate(160%);
            --blur-lg:blur(48px) saturate(200%); --blur-xl:blur(64px) saturate(220%);
            --spec-top:linear-gradient(180deg,rgba(255,255,255,.11) 0%,rgba(255,255,255,0) 100%);
            --spec-diag:linear-gradient(135deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,0) 55%);
            --ease-out:cubic-bezier(0.16,1,0.3,1); --spring:cubic-bezier(0.22,1,0.28,1);
            --fs-xs:clamp(.68rem,.9vw,.78rem); --fs-sm:clamp(.78rem,1.1vw,.9rem);
            --fs-base:clamp(.85rem,1.2vw,.95rem); --fs-lg:clamp(1rem,1.5vw,1.4rem);
            --fs-xl:clamp(1.1rem,2.5vw,1.6rem); --fs-lock:clamp(1.5rem,3vw,2.4rem);
            --fs-card-h:clamp(1rem,1.5vw,1.45rem); --fs-card-p:clamp(.78rem,1vw,.92rem);
            --hp-v:clamp(10px,1.6vh,18px); --hp-h:clamp(14px,3.5vw,5%);
            --gp:clamp(14px,2.5vw,36px); --gg:clamp(12px,1.8vw,26px);
            --cp:clamp(18px,2.2vw,30px); --cr:clamp(12px,1.2vw,20px);
            --bpv:clamp(8px,.9vh,12px);  --bph:clamp(11px,1.3vw,18px);
            --nav-h:clamp(58px,7vh,72px);
        }
        @media(min-width:2560px){:root{--fs-xl:2rem;--fs-lg:1.7rem;--fs-card-h:1.8rem;--gg:38px;--cp:42px;--cr:26px;}}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html,body{width:100%;height:100%;background:var(--bg);color:#fff;
            font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
            overflow:hidden;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}
        #cdot{position:fixed;inset:0;z-index:1;pointer-events:none;}

        /* ── LOCK ── */
        #lock{position:fixed;inset:0;z-index:9999;background:rgba(3,3,6,.85);
            backdrop-filter:var(--blur-xl);-webkit-backdrop-filter:var(--blur-xl);
            display:flex;align-items:center;justify-content:center;transition:opacity .4s var(--spring);}
        .lock-card{text-align:center;padding:clamp(28px,4vw,52px) clamp(28px,5vw,60px);
            background:var(--g1);border:1px solid var(--b2);border-radius:26px;
            backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 40px 80px rgba(0,0,0,.65),0 0 80px rgba(255,0,85,.06);
            position:relative;overflow:hidden;animation:lockIn .5s var(--spring) both;}
        @keyframes lockIn{from{opacity:0;transform:scale(.9) translateY(16px);}to{opacity:1;transform:none;}}
        .lock-card::before{content:'';position:absolute;inset:0;background:var(--spec-top);border-radius:inherit;pointer-events:none;}
        .lock-card::after {content:'';position:absolute;inset:0;background:var(--spec-diag);border-radius:inherit;pointer-events:none;}
        .lock-wm{font-size:var(--fs-xl);font-weight:800;letter-spacing:2px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.35));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;
            margin-bottom:6px;position:relative;z-index:1;}
        .lock-lbl{display:block;font-size:var(--fs-xs);color:rgba(255,255,255,.28);letter-spacing:4px;
            text-transform:uppercase;margin-bottom:22px;position:relative;z-index:1;}
        .lock-in{background:var(--g2);border:1px solid var(--b1);color:#fff;font-family:monospace;
            font-size:var(--fs-lock);text-align:center;padding:clamp(8px,1.5vw,14px) clamp(16px,2.5vw,26px);
            border-radius:14px;width:clamp(130px,28vw,190px);outline:none;
            transition:all .4s var(--spring);letter-spacing:8px;
            backdrop-filter:var(--blur-sm);position:relative;z-index:1;}
        .lock-in:focus{border-color:var(--accent);background:var(--accent-dim);
            box-shadow:0 0 0 3px rgba(255,0,85,.15),0 0 28px var(--accent-glow);transform:scale(1.04);}

        /* ── APP SHELL ── */
        #app{position:relative;z-index:10;width:100vw;height:100vh;display:flex;flex-direction:column;
            opacity:0;transform:translateY(12px);transition:opacity .5s var(--spring),transform .5s var(--spring);
            pointer-events:none;perspective:1400px;}
        #app.on{opacity:1;transform:none;pointer-events:auto;}

        /* ── HEADER ── */
        header{display:flex;align-items:center;justify-content:space-between;
            padding:var(--hp-v) var(--hp-h);
            background:var(--g1);backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);
            border-bottom:1px solid var(--b1);flex-shrink:0;gap:10px;flex-wrap:nowrap;
            position:relative;z-index:200;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 4px 28px rgba(0,0,0,.45);}
        header::after{content:'';position:absolute;inset:0;background:var(--spec-diag);pointer-events:none;}
        .hl{display:flex;align-items:center;gap:clamp(8px,1.1vw,16px);flex-shrink:0;}
        .brand{font-size:var(--fs-xl);font-weight:800;letter-spacing:2px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.38));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;
            cursor:pointer;white-space:nowrap;user-select:none;position:relative;z-index:1;}
        .menu-btn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.65);
            width:clamp(36px,3.2vw,46px);height:clamp(36px,3.2vw,46px);border-radius:12px;cursor:pointer;
            display:flex;flex-direction:column;align-items:center;justify-content:center;
            gap:4px;padding:0;flex-shrink:0;
            transition:background .25s var(--ease-out),border-color .25s,box-shadow .25s;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.10);
            position:relative;z-index:1;overflow:hidden;}
        .menu-btn::before{content:'';position:absolute;inset:0;background:var(--spec-top);pointer-events:none;}
        .menu-btn:hover{background:var(--g3);border-color:var(--b2);color:#fff;}
        .menu-btn.on{background:var(--g3);border-color:var(--b2);color:#fff;}
        .menu-btn span{display:block;width:clamp(13px,1.1vw,16px);height:1.5px;background:currentColor;border-radius:2px;
            transition:transform .3s var(--ease-out),opacity .2s,width .3s;}
        .menu-btn.on span:nth-child(1){transform:translateY(5.5px) rotate(45deg);}
        .menu-btn.on span:nth-child(2){opacity:0;width:0;}
        .menu-btn.on span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg);}

        /* search wrapper */
        .sw{display:flex;gap:clamp(6px,1vw,12px);align-items:center;flex-wrap:nowrap;min-width:0;position:relative;z-index:1;}
        .sbar{background:var(--g2);border:1px solid var(--b1);
            padding:var(--bpv) clamp(12px,1.8vw,22px);border-radius:28px;color:#fff;
            width:clamp(120px,18vw,260px);transition:width .3s var(--ease-out),background .2s,border-color .2s;
            font-size:var(--fs-base);min-width:0;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);}
        .sbar::placeholder{color:rgba(255,255,255,.28);}
        .sbar:focus{width:clamp(150px,24vw,320px);background:var(--g3);outline:none;border-color:var(--b2);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 0 0 3px rgba(255,255,255,.05);}

        /* header buttons */
        .hbtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.65);
            padding:var(--bpv) var(--bph);border-radius:18px;cursor:pointer;
            font-size:var(--fs-base);font-weight:600;
            transition:background .2s var(--ease-out),border-color .2s,color .2s,transform .15s,box-shadow .2s;
            white-space:nowrap;flex-shrink:0;display:flex;align-items:center;gap:6px;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);
            position:relative;overflow:hidden;will-change:transform;}
        .hbtn::before{content:'';position:absolute;inset:0;background:var(--spec-top);pointer-events:none;}
        .hbtn:hover{background:var(--g3);border-color:var(--b2);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 4px 18px rgba(0,0,0,.3);}
        .hbtn:active{transform:scale(.95);}
        .hbtn.ld{color:rgba(255,255,255,.3);cursor:wait;}
        .hi{font-size:clamp(.9rem,1.2vw,1rem);line-height:1;flex-shrink:0;}
        .fav-btn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.4);
            width:clamp(36px,3.2vw,44px);height:clamp(36px,3.2vw,44px);border-radius:50%;cursor:pointer;
            font-size:clamp(.9rem,1.2vw,1.1rem);display:flex;align-items:center;justify-content:center;
            transition:all .25s var(--ease-out);padding:0;flex-shrink:0;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.08);position:relative;z-index:1;}
        .fav-btn:hover{color:#fff;border-color:var(--b2);background:var(--g3);}
        .fav-btn.on{border-color:#ffca28;color:#ffca28;background:rgba(255,202,40,.08);box-shadow:0 0 16px rgba(255,202,40,.22),inset 0 1px 0 rgba(255,202,40,.18);}

        /* ── GRID ── */
        #grid{flex:1;min-height:0;
            padding:var(--gp);padding-bottom:calc(var(--nav-h) + var(--gp) * 2.5);
            overflow-y:auto;overflow-x:hidden;
            display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(200px,21vw,360px),1fr));
            gap:var(--gg);align-content:start;
            transform-style:preserve-3d;-webkit-overflow-scrolling:touch;
            scroll-behavior:smooth;}
        @media(min-width:2560px){#grid{grid-template-columns:repeat(auto-fill,minmax(400px,1fr));}}
        @supports(padding:max(0px)){
            #grid{padding-left:max(var(--gp),env(safe-area-inset-left));
                  padding-right:max(var(--gp),env(safe-area-inset-right));
                  padding-bottom:max(calc(var(--nav-h) + var(--gp)*2.5),calc(var(--nav-h) + env(safe-area-inset-bottom)));}}

        /* ── CARDS ── */
        .card{background:var(--g1);border:1px solid var(--b1);
            backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);
            border-radius:var(--cr);padding:var(--cp);
            cursor:pointer;position:relative;overflow:hidden;
            transition:transform .12s ease-out,border-color .25s,background .25s,box-shadow .25s,opacity .4s;
            transform-style:preserve-3d;will-change:transform;display:block;
            box-shadow:0 6px 24px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.08);
            user-select:none;-webkit-user-select:none;
            content-visibility:auto;contain-intrinsic-size:0 120px;
            opacity:0;animation:cardIn .45s var(--spring) both;}
        @keyframes cardIn{from{opacity:0;transform:translateY(18px) scale(.97);}to{opacity:1;transform:none;}}
        .card.hidden{display:none!important;}
        .card::after {content:'';position:absolute;inset:0;background:var(--spec-top);border-radius:inherit;pointer-events:none;z-index:1;opacity:.7;transition:opacity .25s;}
        .card::before{content:'';position:absolute;inset:0;
            background:radial-gradient(circle 180px at var(--mx,50%) var(--my,50%),rgba(255,255,255,.07),transparent 100%);
            z-index:2;pointer-events:none;opacity:0;transition:opacity .2s;}
        .card:hover::before{opacity:1;}
        .card:hover{background:var(--g2);border-color:var(--b2);
            box-shadow:0 20px 48px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.13),0 0 0 1px rgba(255,255,255,.05);}
        .card:hover::after{opacity:1;}
        .nt-badge{position:absolute;top:12px;right:12px;font-size:9px;font-weight:700;letter-spacing:1.5px;
            text-transform:uppercase;color:rgba(255,255,255,.3);background:var(--g2);border:1px solid var(--b1);
            padding:2px 7px;border-radius:16px;z-index:3;transition:all .25s;}
        .card:hover .nt-badge{color:rgba(255,255,255,.55);border-color:var(--b2);}
        .card h3{margin:0 0 8px;font-size:var(--fs-card-h);font-weight:700;transition:color .25s;transform:translateZ(26px);position:relative;z-index:3;}
        .card p {margin:0;font-size:var(--fs-card-p);color:rgba(255,255,255,.38);line-height:1.5;transform:translateZ(12px);transition:color .25s;position:relative;z-index:3;}
        .fav-star{position:absolute;bottom:clamp(14px,1.8vw,24px);right:clamp(36px,3.5vw,48px);
            font-size:clamp(.9rem,.95vw,1.05rem);color:rgba(255,255,255,.10);transition:all .25s;transform:translateZ(16px);z-index:3;}
        .card.fav .fav-star{color:#ffca28;filter:drop-shadow(0 0 7px rgba(255,202,40,.55));}
        .card:hover h3{color:var(--accent);}
        .card:hover p{color:rgba(255,255,255,.65);}
        @media(hover:none){
            .card:active{background:var(--g3);border-color:var(--b2);transform:scale(.97)!important;}
            .card:hover h3{color:inherit;}}

        /* ── BOTTOM NAV ── */
        #bnav{position:fixed;bottom:0;left:0;right:0;z-index:500;
            height:var(--nav-h);
            background:rgba(5,5,10,.82);
            backdrop-filter:var(--blur-xl);-webkit-backdrop-filter:var(--blur-xl);
            border-top:1px solid var(--b1);
            display:flex;align-items:stretch;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 -4px 32px rgba(0,0,0,.5);
            padding-bottom:env(safe-area-inset-bottom,0px);}
        #bnav::before{content:'';position:absolute;inset:0;background:var(--spec-top);pointer-events:none;}
        .ntab{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
            gap:3px;cursor:pointer;border:none;background:transparent;color:rgba(255,255,255,.35);
            font-size:clamp(.6rem,.8vw,.72rem);font-weight:600;letter-spacing:.5px;text-transform:uppercase;
            transition:color .2s var(--ease-out),transform .15s;
            position:relative;user-select:none;-webkit-user-select:none;}
        .ntab::after{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);
            width:0;height:2px;background:var(--accent);border-radius:0 0 2px 2px;
            transition:width .28s var(--spring),opacity .2s;opacity:0;}
        .ntab.on{color:#fff;}
        .ntab.on::after{width:32px;opacity:1;}
        .ntab:active{transform:scale(.9);}
        .ntab-icon{font-size:clamp(1.1rem,1.4vw,1.3rem);line-height:1;transition:transform .25s var(--spring);}
        .ntab.on .ntab-icon{transform:translateY(-1px) scale(1.1);}

        /* ── SIDE PANEL ── */
        #panel{position:fixed;top:0;left:0;height:100vh;width:clamp(240px,26vw,310px);z-index:9000;
            background:rgba(5,5,12,.78);
            backdrop-filter:var(--blur-xl);-webkit-backdrop-filter:var(--blur-xl);
            border-right:1px solid var(--b2);display:flex;flex-direction:column;
            transform:translateX(-110%);transition:transform .4s var(--spring);
            overflow:hidden;box-shadow:12px 0 56px rgba(0,0,0,.75);}
        #panel.on{transform:translateX(0);}
        #panel::before{content:'';position:absolute;top:0;right:0;width:1px;height:100%;
            background:linear-gradient(180deg,rgba(255,255,255,.18) 0%,rgba(255,255,255,.05) 40%,transparent 100%);
            pointer-events:none;z-index:10;}
        #panel::after{content:'';position:absolute;inset:0;background:var(--spec-diag);pointer-events:none;}
        .ph{padding:clamp(22px,3.2vh,36px) clamp(20px,2.3vw,28px) clamp(16px,1.8vh,24px);
            border-bottom:1px solid var(--b1);background:var(--g1);flex-shrink:0;position:relative;}
        .ph::after{content:'';position:absolute;inset:0;background:var(--spec-top);pointer-events:none;}
        .pe{font-size:var(--fs-xs);font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:4px;position:relative;z-index:1;}
        .pb{font-size:var(--fs-lg);font-weight:800;letter-spacing:1.5px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.4));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;position:relative;z-index:1;}
        .pbody{flex:1;overflow-y:auto;padding:10px;-webkit-overflow-scrolling:touch;}
        .mitem{display:flex;align-items:center;gap:12px;
            padding:clamp(10px,1.3vh,14px) clamp(12px,1.3vw,16px);
            border-radius:12px;cursor:pointer;
            transition:background .2s,border-color .2s,color .2s,transform .15s;
            color:rgba(255,255,255,.55);font-size:var(--fs-base);font-weight:500;
            border:1px solid transparent;position:relative;overflow:hidden;
            user-select:none;}
        .mitem::before{content:'';position:absolute;inset:0;background:var(--spec-top);border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s;}
        .mitem:hover{background:var(--g3);border-color:var(--b1);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.10);}
        .mitem:hover::before{opacity:1;}
        .mitem:active{transform:scale(.97);}
        .miw{width:clamp(28px,2.2vw,36px);height:clamp(28px,2.2vw,36px);display:flex;align-items:center;justify-content:center;
            background:var(--g2);border:1px solid var(--b1);border-radius:9px;flex-shrink:0;
            font-size:clamp(.85rem,1.1vw,1rem);transition:all .2s;}
        .mitem:hover .miw{background:var(--g4);border-color:var(--b2);box-shadow:0 0 8px rgba(255,255,255,.06);}
        .mil{flex:1;}
        .mdiv{height:1px;margin:7px 12px;background:linear-gradient(90deg,transparent,var(--b1) 20%,var(--b1) 80%,transparent);}
        .pfoot{padding:clamp(12px,1.6vh,18px) clamp(16px,1.8vw,22px);border-top:1px solid var(--b1);
            font-size:var(--fs-xs);color:rgba(255,255,255,.14);text-align:center;flex-shrink:0;background:var(--g0);}

        /* ── BACKDROP ── */
        #bd{position:fixed;inset:0;z-index:8999;background:transparent;pointer-events:none;
            transition:background .4s,backdrop-filter .4s;}
        #bd.on{background:rgba(0,0,0,.52);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);pointer-events:auto;}

        /* ── CONFIRM DIALOG ── */
        #ntov{position:fixed;inset:0;z-index:10500;background:rgba(3,3,6,.72);
            backdrop-filter:var(--blur-lg);-webkit-backdrop-filter:var(--blur-lg);
            display:flex;align-items:center;justify-content:center;
            opacity:0;pointer-events:none;transition:opacity .22s;}
        #ntov.on{opacity:1;pointer-events:auto;}
        .ntcard{background:var(--g1);border:1px solid var(--b2);border-radius:22px;
            padding:clamp(24px,3.5vw,42px) clamp(24px,4.5vw,48px);
            max-width:clamp(280px,38vw,440px);width:90vw;
            backdrop-filter:var(--blur-md);-webkit-backdrop-filter:var(--blur-md);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 36px 72px rgba(0,0,0,.65);
            position:relative;overflow:hidden;text-align:center;
            transform:scale(.93) translateY(10px);transition:transform .28s var(--spring);}
        #ntov.on .ntcard{transform:scale(1) translateY(0);}
        .ntcard::before{content:'';position:absolute;inset:0;background:var(--spec-top);border-radius:inherit;pointer-events:none;}
        .ntcard::after {content:'';position:absolute;inset:0;background:var(--spec-diag);border-radius:inherit;pointer-events:none;}
        .nt-ico{width:52px;height:52px;border-radius:14px;background:var(--g2);border:1px solid var(--b2);
            display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.5rem;position:relative;z-index:1;}
        .nt-ttl{font-size:var(--fs-xs);font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.28);margin-bottom:7px;position:relative;z-index:1;}
        .nt-name{font-size:var(--fs-lg);font-weight:800;color:#fff;margin-bottom:9px;position:relative;z-index:1;}
        .nt-body{font-size:var(--fs-sm);color:rgba(255,255,255,.42);line-height:1.55;margin-bottom:24px;position:relative;z-index:1;}
        .nt-acts{display:flex;gap:9px;justify-content:center;position:relative;z-index:1;}
        .nt-yes{background:var(--accent);border:none;color:#fff;padding:clamp(8px,1.1vh,12px) clamp(20px,2.8vw,30px);
            border-radius:18px;cursor:pointer;font-weight:700;font-size:var(--fs-base);
            transition:background .2s,box-shadow .2s,transform .15s;box-shadow:inset 0 1px 0 rgba(255,255,255,.14);}
        .nt-yes:hover{background:#ff2d6e;box-shadow:0 0 20px var(--accent-glow),inset 0 1px 0 rgba(255,255,255,.14);}
        .nt-yes:active{transform:scale(.95);}
        .nt-no{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.7);
            padding:clamp(8px,1.1vh,12px) clamp(20px,2.8vw,30px);border-radius:18px;cursor:pointer;
            font-weight:600;font-size:var(--fs-base);transition:all .2s;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);}
        .nt-no:hover{background:var(--g3);border-color:var(--b2);color:#fff;}
        .nt-no:active{transform:scale(.95);}

        /* ── THEATER ── */
        #theater{position:fixed;inset:0;z-index:5000;background:rgba(2,2,5,.96);
            backdrop-filter:var(--blur-lg);-webkit-backdrop-filter:var(--blur-lg);
            display:flex;flex-direction:column;opacity:0;pointer-events:none;
            transition:opacity .3s var(--ease-out);}
        #theater.on{opacity:1;pointer-events:auto;}
        .th{display:flex;justify-content:space-between;align-items:center;
            padding:clamp(9px,1.4vh,16px) clamp(14px,2.5vw,28px);border-bottom:1px solid var(--b1);
            background:var(--g1);backdrop-filter:var(--blur-md);flex-shrink:0;gap:9px;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 3px 18px rgba(0,0,0,.4);}
        .tctrl{display:flex;gap:clamp(5px,.9vw,10px);flex-wrap:wrap;align-items:center;}
        .abtn{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.75);
            padding:clamp(5px,.9vh,9px) clamp(10px,1.3vw,16px);border-radius:18px;cursor:pointer;
            font-size:var(--fs-sm);transition:all .2s;white-space:nowrap;
            backdrop-filter:var(--blur-sm);box-shadow:inset 0 1px 0 rgba(255,255,255,.09);}
        .abtn:hover{background:var(--g4);border-color:var(--b2);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 3px 12px rgba(0,0,0,.3);}
        .abtn:active{transform:scale(.95);}
        .cbtn{background:var(--accent);border:none;color:#fff;
            padding:clamp(5px,.9vh,9px) clamp(12px,1.8vw,20px);border-radius:18px;cursor:pointer;
            font-weight:600;font-size:var(--fs-sm);transition:all .2s;white-space:nowrap;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.14);}
        .cbtn:hover{background:#ff2d6e;box-shadow:0 0 18px var(--accent-glow),inset 0 1px 0 rgba(255,255,255,.14);}
        .cbtn:active{transform:scale(.95);}
        .ifw{flex:1;width:100%;min-height:0;}
        #gframe{width:100%;height:100%;border:none;background:#000;display:block;}

        /* ── CONTEXT MENU ── */
        #ctx{position:fixed;z-index:10000;width:clamp(156px,17vw,196px);
            background:rgba(6,6,12,.85);backdrop-filter:var(--blur-xl);-webkit-backdrop-filter:var(--blur-xl);
            border:1px solid var(--b2);border-radius:14px;padding:5px 0;
            box-shadow:0 16px 48px rgba(0,0,0,.78),inset 0 1px 0 rgba(255,255,255,.13);
            opacity:0;transform:scale(.9) translateY(-6px);transform-origin:top left;pointer-events:none;
            transition:opacity .13s,transform .16s var(--ease-out);overflow:hidden;}
        #ctx::before{content:'';position:absolute;inset:0;background:var(--spec-top);border-radius:inherit;pointer-events:none;}
        #ctx.on{opacity:1;transform:scale(1) translateY(0);pointer-events:auto;}
        .ci{padding:9px 14px;font-size:var(--fs-sm);color:rgba(255,255,255,.6);cursor:pointer;
            transition:background .15s,color .15s;display:flex;align-items:center;gap:8px;position:relative;z-index:1;}
        .ci:hover{background:var(--g3);color:#fff;}
        .ci.ac:hover{color:var(--accent);}

        /* ── ANIME PANEL ── */
        #anime-panel{position:fixed;inset:0;z-index:4000;
            background:var(--bg);display:flex;flex-direction:column;
            transform:translateY(100%);transition:transform .45s var(--spring);
            overflow:hidden;}
        #anime-panel.on{transform:translateY(0);}
        .ap-bar{display:flex;align-items:center;gap:10px;
            padding:var(--hp-v) var(--hp-h);
            background:var(--g1);backdrop-filter:var(--blur-md);border-bottom:1px solid var(--b1);
            flex-shrink:0;position:relative;z-index:1;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 3px 20px rgba(0,0,0,.4);}
        .ap-back{background:var(--g2);border:1px solid var(--b1);color:rgba(255,255,255,.7);
            padding:var(--bpv) var(--bph);border-radius:18px;cursor:pointer;font-size:var(--fs-sm);
            transition:all .2s;backdrop-filter:var(--blur-sm);white-space:nowrap;display:flex;align-items:center;gap:6px;}
        .ap-back:hover{background:var(--g3);color:#fff;border-color:var(--b2);}
        .ap-title{font-size:var(--fs-lg);font-weight:800;letter-spacing:1px;text-transform:uppercase;
            background:linear-gradient(135deg,#fff 30%,rgba(255,255,255,.4));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;flex:1;}
        .ap-search{background:var(--g2);border:1px solid var(--b1);color:#fff;
            padding:var(--bpv) clamp(12px,1.6vw,20px);border-radius:24px;width:clamp(120px,18vw,240px);
            font-size:var(--fs-base);outline:none;transition:all .25s;
            backdrop-filter:var(--blur-sm);}
        .ap-search:focus{background:var(--g3);border-color:var(--b2);width:clamp(150px,22vw,300px);}
        .ap-search::placeholder{color:rgba(255,255,255,.28);}
        .ap-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:var(--gp);
            padding-bottom:calc(var(--nav-h) + var(--gp) * 2);}
        .ap-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(clamp(130px,14vw,200px),1fr));gap:var(--gg);}
        .acard{background:var(--g1);border:1px solid var(--b1);border-radius:var(--cr);
            cursor:pointer;overflow:hidden;
            transition:transform .2s var(--ease-out),border-color .2s,box-shadow .2s;
            animation:cardIn .4s var(--spring) both;
            box-shadow:0 4px 16px rgba(0,0,0,.22);}
        .acard:hover{border-color:var(--b2);transform:translateY(-3px) scale(1.02);
            box-shadow:0 14px 36px rgba(0,0,0,.45);}
        .acard img{width:100%;aspect-ratio:2/3;object-fit:cover;display:block;background:var(--g2);}
        .acard-info{padding:10px 12px;}
        .acard-title{font-size:var(--fs-sm);font-weight:700;color:#fff;margin-bottom:4px;
            display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
        .acard-meta{font-size:var(--fs-xs);color:rgba(255,255,255,.38);}
        .ap-section{margin-bottom:28px;}
        .ap-section-title{font-size:var(--fs-xs);font-weight:700;letter-spacing:3px;text-transform:uppercase;
            color:rgba(255,255,255,.25);margin-bottom:14px;}
        .ep-list{display:flex;flex-direction:column;gap:8px;}
        .ep-item{background:var(--g1);border:1px solid var(--b1);border-radius:12px;
            padding:12px 16px;cursor:pointer;display:flex;align-items:center;gap:12px;
            transition:all .2s;animation:cardIn .35s var(--spring) both;}
        .ep-item:hover{background:var(--g3);border-color:var(--b2);}
        .ep-num{font-size:var(--fs-sm);font-weight:700;color:rgba(255,255,255,.4);min-width:36px;}
        .ep-ttl{flex:1;font-size:var(--fs-sm);font-weight:500;}
        .ep-badges{display:flex;gap:5px;}
        .ep-badge{font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
            padding:2px 6px;border-radius:6px;background:var(--g3);border:1px solid var(--b1);}
        .ep-badge.sub{color:#4ade80;}
        .ep-badge.dub{color:#60a5fa;}
        .srv-list{display:flex;flex-wrap:wrap;gap:8px;}
        .srv-item{background:var(--g2);border:1px solid var(--b1);border-radius:10px;
            padding:8px 14px;cursor:pointer;font-size:var(--fs-sm);
            transition:all .2s;}
        .srv-item:hover{background:var(--g4);border-color:var(--b2);color:#fff;}
        .srv-item.playing{border-color:var(--accent);color:var(--accent);background:var(--accent-dim);}
        .ap-msg{text-align:center;padding:40px 20px;color:rgba(255,255,255,.3);font-size:var(--fs-base);}
        .ap-spinner{width:32px;height:32px;border:2px solid var(--b1);border-top-color:var(--accent);
            border-radius:50%;animation:spin .7s linear infinite;margin:30px auto;}
        @keyframes spin{to{transform:rotate(360deg);}}

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
            .hbtn .bl{display:none;} .hbtn{padding:var(--bpv) 12px;}
            .sbar{width:clamp(100px,16vw,200px);} .sbar:focus{width:clamp(130px,20vw,260px);}
        }
        @media(max-width:768px){
            header{flex-direction:column;align-items:stretch;gap:8px;padding:10px var(--hp-h);}
            .hl{justify-content:flex-start;} .sw{width:100%;justify-content:space-between;}
            .sbar{flex:1;width:auto;min-width:0;} .sbar:focus{width:auto;}
            #grid{grid-template-columns:repeat(auto-fill,minmax(220px,1fr));}
            #panel{width:clamp(230px,70vw,300px);}
        }
        @media(max-width:480px){
            header{padding:9px 14px;gap:7px;} .brand{font-size:1rem;}
            .sbar{padding:8px 12px;font-size:.83rem;}
            .hbtn{padding:8px 10px;border-radius:50%;width:38px;height:38px;justify-content:center;gap:0;}
            .fav-btn{width:38px;height:38px;font-size:.95rem;}
            #grid{grid-template-columns:1fr;padding:12px 14px;gap:12px;}
            .card{padding:18px;border-radius:14px;transform:none!important;}
            .card h3{font-size:1rem;} .card p{font-size:.8rem;}
            #panel{width:82vw;}
            .nt-acts{flex-direction:column;} .nt-yes,.nt-no{width:100%;}
            #ctx{width:calc(100vw - 28px);left:14px!important;}
        }
        ::-webkit-scrollbar{width:clamp(3px,.35vw,6px);}
        ::-webkit-scrollbar-track{background:transparent;}
        ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.09);border-radius:8px;}
        ::-webkit-scrollbar-thumb:hover{background:var(--accent);}
        `;
        document.head.appendChild(s);
        if (!document.querySelector('meta[name="viewport"]')) {
            const vp = document.createElement("meta");
            vp.name = "viewport"; vp.content = "width=device-width,initial-scale=1,viewport-fit=cover";
            document.head.appendChild(vp);
        }
    },

    // ── DOT MATRIX ──────────────────────────────────────────────────
    dots() {
        const c = document.createElement("canvas"); c.id = "cdot"; document.body.appendChild(c);
        const ctx = c.getContext("2d"); let mx = -1e4, my = -1e4;
        const resize = () => { c.width = innerWidth; c.height = innerHeight; };
        window.addEventListener("resize", resize, {passive:true}); resize();
        window.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; }, {passive:true});
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillStyle = DOT_COLOR;
            const sp = DOT_SPACING;
            for (let x = sp/2; x < c.width; x += sp) {
                for (let y = sp/2; y < c.height; y += sp) {
                    const dx = mx-x, dy = my-y, d = Math.sqrt(dx*dx+dy*dy);
                    let rx = x, ry = y;
                    if (d < 120) { const f=(120-d)/120; rx-=(dx/d)*f*12; ry-=(dy/d)*f*12; }
                    ctx.beginPath(); ctx.arc(rx,ry,d<120?1.7:0.9,0,Math.PI*2); ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        };
        draw();
    },

    // ── DOM ─────────────────────────────────────────────────────────
    buildDOM() {
        try { this.favorites = JSON.parse(localStorage.getItem("ng_favs")||"[]"); } catch(e){ this.favorites=[]; }

        // Lock
        const lock = document.createElement("div"); lock.id="lock";
        lock.innerHTML=`<div class="lock-card"><div class="lock-wm">${SITE_NAME}</div><span class="lock-lbl">Enter PIN</span><input type="password" class="lock-in" placeholder="••••" maxlength="4" autocomplete="off"></div>`;
        document.body.appendChild(lock);

        // Header buttons HTML
        const hbHTML = HEADER_BUTTONS.map(b=>`<button class="hbtn" id="${b.id}" title="${b.label}"><span class="hi">${b.icon}</span><span class="bl">${b.label}</span></button>`).join("") +
            (PROXY_ENABLED ? `<button class="hbtn" id="proxy-btn" title="${PROXY_LABEL}"><span class="hi">⟳</span><span class="bl">${PROXY_LABEL}</span></button>` : "");

        // App
        const app = document.createElement("div"); app.id="app";
        app.innerHTML=`
            <header>
                <div class="hl">
                    <button class="menu-btn" id="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
                    <div class="brand" onclick="location.reload()">${SITE_NAME}</div>
                </div>
                <div class="sw">
                    ${hbHTML}
                    <input type="text" class="sbar" id="sbar" placeholder="Search games…">
                    <button class="fav-btn" id="fav-btn" title="Favorites">★</button>
                </div>
            </header>
            <div id="grid"></div>`;
        document.body.appendChild(app);

        // Backdrop
        const bd = document.createElement("div"); bd.id="bd"; document.body.appendChild(bd);

        // Side panel
        const mHTML = MENU_ITEMS.map(m=>{
            if(m.action==="separator") return `<div class="mdiv"></div>`;
            return `<div class="mitem" data-action="${m.action}" ${m.newTab?'data-nt="1"':''}>
                <span class="miw">${m.icon}</span><span class="mil">${m.label}</span></div>`;
        }).join("");
        const panel = document.createElement("div"); panel.id="panel";
        panel.innerHTML=`<div class="ph"><div class="pe">Navigation</div><div class="pb">${SITE_NAME}</div></div>
            <div class="pbody">${mHTML}</div><div class="pfoot">${SITE_TAGLINE}</div>`;
        document.body.appendChild(panel);

        // Bottom nav
        const bnav = document.createElement("div"); bnav.id="bnav";
        bnav.innerHTML = BOTTOM_NAV.filter(t=>!t.hidden).map(t=>`
            <button class="ntab${t.action==="home"?" on":""}" id="${t.id}" data-action="${t.action}">
                <span class="ntab-icon">${t.icon}</span><span>${t.label}</span>
            </button>`).join("");
        document.body.appendChild(bnav);

        // Confirm overlay
        const ntov = document.createElement("div"); ntov.id="ntov";
        ntov.innerHTML=`<div class="ntcard">
            <div class="nt-ico" id="nt-ico">⧉</div>
            <div class="nt-ttl">Opening in New Tab</div>
            <div class="nt-name" id="nt-name">—</div>
            <div class="nt-body">This will open in a new browser tab. Continue?</div>
            <div class="nt-acts"><button class="nt-yes" id="nt-yes">Yes, Open</button><button class="nt-no" id="nt-no">Cancel</button></div>
        </div>`;
        document.body.appendChild(ntov);

        // Theater
        const theater = document.createElement("div"); theater.id="theater";
        theater.innerHTML=`<div class="th">
            <div class="brand" id="t-title">Game</div>
            <div class="tctrl">
                <button class="abtn" id="t-fs">Fullscreen</button>
                <button class="abtn" id="t-dl" style="display:none">↓ Download</button>
                <button class="abtn" id="t-cloak">Tab Cloak</button>
                <button class="cbtn" id="t-close">✕ Close</button>
            </div></div>
            <div class="ifw"><iframe id="gframe" src="" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-pointer-lock allow-storage-api allow-modals allow-top-navigation-by-user-activation" allowfullscreen></iframe></div>`;
        document.body.appendChild(theater);

        // Context menu
        const ctx = document.createElement("div"); ctx.id="ctx"; document.body.appendChild(ctx);

        // Anime panel
        const ap = document.createElement("div"); ap.id="anime-panel";
        ap.innerHTML=`<div class="ap-bar">
            <button class="ap-back" id="ap-back">← Back</button>
            <div class="ap-title" id="ap-title">Anime</div>
            <input type="text" class="ap-search" id="ap-search" placeholder="Search anime…">
        </div><div class="ap-body" id="ap-body"><div class="ap-msg">Loading…</div></div>`;
        document.body.appendChild(ap);

        this.renderCards();
    },

    // ── CARDS ────────────────────────────────────────────────────────
    renderCards() {
        const grid = document.getElementById("grid"); if(!grid) return;
        this.cachedCards = [];
        GAMES.forEach((item, i) => {
            const card = document.createElement("div");
            card.className = `card${this.favorites.includes(item.title)?" fav":""}`;
            card.style.animationDelay = `${Math.min(i*30, 400)}ms`;
            const badge = item.newTab ? `<span class="nt-badge">New Tab</span>` : "";
            card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p><span class="fav-star">★</span>${badge}`;
            card.addEventListener("mousemove", e => {
                const r = card.getBoundingClientRect(), x = e.clientX-r.left, y = e.clientY-r.top;
                card.style.setProperty("--mx",`${x}px`); card.style.setProperty("--my",`${y}px`);
                card.style.transform = `rotateX(${((r.height/2-y)/(r.height/2))*10}deg) rotateY(${((x-r.width/2)/(r.width/2))*10}deg) scale(1.02) translateY(-3px)`;
            }, {passive:true});
            card.addEventListener("mouseleave", () => { card.style.transform = ""; });
            card.addEventListener("click", () => this.launch(item));
            card.addEventListener("contextmenu", e => { e.preventDefault(); e.stopPropagation(); this.showCtx(e.clientX, e.clientY, item, card); });
            grid.appendChild(card);
            this.cachedCards.push({ el:card, title:item.title, str:`${item.title.toLowerCase()} ${item.desc.toLowerCase()}` });
        });
        this.filter();
    },

    // ── FILTER ──────────────────────────────────────────────────────
    filter() {
        for (const c of this.cachedCards) {
            const ok = (!this.onlyShowFavorites || this.favorites.includes(c.title)) &&
                       (!this.searchQuery || c.str.includes(this.searchQuery));
            c.el.classList.toggle("hidden", !ok);
        }
    },

    // ── LAUNCH ──────────────────────────────────────────────────────
    launch(item) {
        if (item.newTab) { this.confirm(item.title, "⧉", () => this.openTab(item.url, item.title)); return; }
        const theater = document.getElementById("theater"), frame = document.getElementById("gframe");
        document.getElementById("t-title").innerText = item.title;
        theater.classList.add("on"); this._theaterItem = item;
        const dl = document.getElementById("t-dl"); if(dl) dl.style.display = item.download!==false ? "" : "none";
        const isCDN = item.url.includes("cdn.jsdelivr.net") || item.url.includes("githubusercontent") || item.url.endsWith(".html");
        if (isCDN) {
            frame.src = "about:blank";
            fetch(item.url).then(r=>{if(!r.ok)throw 0;return r.text();})
                .then(html => { frame.src = URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"})); })
                .catch(() => { frame.src = item.url; });
        } else { frame.src = item.url; }
    },

    openTab(url, title) {
        const isCDN = url.includes("cdn.jsdelivr.net") || url.includes("githubusercontent") || url.endsWith(".html");
        if (!isCDN) { window.open(url,"_blank"); return; }
        const w = window.open("about:blank","_blank");
        if (!w) { alert("Popup blocked — allow popups and try again."); return; }
        w.document.write(`<html><body style="margin:0;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><p>Loading ${title}…</p></body></html>`);
        w.document.close();
        fetch(url).then(r=>{if(!r.ok)throw 0;return r.text();})
            .then(html=>{ w.document.open(); w.document.write(html); w.document.close(); try{w.document.title=title;}catch(e){} })
            .catch(()=>{ try{w.location.href=url;}catch(e){} });
    },

    // ── CONFIRM DIALOG ───────────────────────────────────────────────
    confirm(name, icon, cb) {
        const ov = document.getElementById("ntov");
        document.getElementById("nt-name").innerText = name;
        document.getElementById("nt-ico").innerText = icon || "⧉";
        ov.classList.add("on");
        const y = document.getElementById("nt-yes"), n = document.getElementById("nt-no");
        const ny = y.cloneNode(true); y.replaceWith(ny);
        const nn = n.cloneNode(true); n.replaceWith(nn);
        const dismiss = () => ov.classList.remove("on");
        document.getElementById("nt-yes").onclick = () => { dismiss(); cb(); };
        document.getElementById("nt-no").onclick  = dismiss;
        ov.onclick = e => { if(e.target===ov) dismiss(); };
    },

    // ── CONTEXT MENU ─────────────────────────────────────────────────
    showCtx(x, y, item, cardEl) {
        const menu = document.getElementById("ctx"), isFav = this.favorites.includes(item.title);
        const dlRow = item.download!==false ? `<div class="ci" id="ci-dl">↓ Download</div>` : "";
        menu.innerHTML = `
            <div class="ci" id="ci-launch">${item.newTab?"⧉ Open in New Tab":"⚡ Launch"}</div>
            <div class="ci" id="ci-fav">${isFav?"✕ Remove Favorite":"★ Add Favorite"}</div>
            <div class="ci ac" id="ci-cloak">⊘ Cloak Launch</div>
            ${dlRow}`;
        menu.style.left = `${Math.min(x,innerWidth-200-10)}px`;
        menu.style.top  = `${Math.min(y,innerHeight-160-10)}px`;
        menu.classList.add("on");
        document.getElementById("ci-launch").onclick = () => { this.hideCtx(); this.launch(item); };
        document.getElementById("ci-cloak").onclick  = () => { this.hideCtx(); this.cloakLaunch(item.url); };
        document.getElementById("ci-fav").onclick    = () => this.toggleFav(item.title, cardEl);
        const dl = document.getElementById("ci-dl");
        if (dl) dl.onclick = () => { this.hideCtx(); this.downloadItem(item); };
    },
    hideCtx() { document.getElementById("ctx")?.classList.remove("on"); },

    downloadItem(item) {
        fetch(item.url).then(r=>{if(!r.ok)throw 0;return r.blob();})
            .then(blob=>{
                const u = URL.createObjectURL(blob), ext = item.url.includes(".html")?".html":".zip";
                const a = Object.assign(document.createElement("a"),{href:u,download:item.title.replace(/\s+/g,"_")+ext,style:"display:none"});
                document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u);
            }).catch(()=>window.open(item.url,"_blank"));
    },

    toggleFav(title, cardEl) {
        const idx = this.favorites.indexOf(title);
        if (idx>-1) { this.favorites.splice(idx,1); cardEl.classList.remove("fav"); }
        else        { this.favorites.push(title);   cardEl.classList.add("fav"); }
        try { localStorage.setItem("ng_favs", JSON.stringify(this.favorites)); } catch(e){}
        this.filter(); this.hideCtx();
    },

    // ── SAVE DOWNLOAD ────────────────────────────────────────────────
    executeSaveDownload() {
        const btn = document.getElementById("save-singlefile-btn"), lbl = btn?.querySelector(".bl");
        if(btn){ btn.classList.add("ld"); if(lbl) lbl.innerText=" Saving…"; }
        fetch(SAVE_URL).then(r=>{if(!r.ok)throw 0;return r.blob();})
            .then(blob=>{
                const u=URL.createObjectURL(blob);
                const a=Object.assign(document.createElement("a"),{href:u,download:SAVE_FILENAME,style:"display:none"});
                document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u);
            }).catch(()=>window.open(SAVE_URL,"_blank"))
            .finally(()=>{ if(btn){ btn.classList.remove("ld"); if(lbl) lbl.innerText=" Save"; } });
    },

    // ── PANEL / MENU ──────────────────────────────────────────────────
    openPanel()  { document.getElementById("panel").classList.add("on"); document.getElementById("bd").classList.add("on"); document.getElementById("menu-btn").classList.add("on"); },
    closePanel() { document.getElementById("panel").classList.remove("on"); document.getElementById("bd").classList.remove("on"); document.getElementById("menu-btn").classList.remove("on"); },

    // ── BOTTOM NAV ───────────────────────────────────────────────────
    setTab(action) {
        this._activeTab = action;
        document.querySelectorAll(".ntab").forEach(t => t.classList.toggle("on", t.dataset.action === action));
        // Show/hide panels
        const animeOn = action === "anime";
        document.getElementById("anime-panel").classList.toggle("on", animeOn);
        if (animeOn && !this._animeState.loaded) this.animeLoadHome();

        if (action === "favorites") { this.onlyShowFavorites = true; document.getElementById("fav-btn").classList.add("on"); this.filter(); }
        else if (this.onlyShowFavorites && action === "home") { this.onlyShowFavorites = false; document.getElementById("fav-btn").classList.remove("on"); this.filter(); }
        if (action === "search") { document.getElementById("sbar").focus(); }
        if (action === "menu") { this.openPanel(); }
    },

    // ── ACTION DISPATCHER ────────────────────────────────────────────
    dispatch(action, newTab, label, icon) {
        if(!action) return;
        const run = () => {
            if      (action==="reload")          { this.closePanel(); location.reload(); }
            else if (action==="cloak")           { this.closePanel(); this.triggerCloak(); }
            else if (action==="home")            { this.setTab("home"); }
            else if (action==="search")          { this.setTab("search"); }
            else if (action==="anime")           { this.setTab("anime"); }
            else if (action==="favorites")       { this.setTab("favorites"); }
            else if (action==="menu")            { this.openPanel(); }
            else if (action.startsWith("url:"))  { this.closePanel(); window.open(action.slice(4),"_blank"); }
            else if (action.startsWith("custom:")){ const fn=action.slice(7); this.closePanel(); if(typeof this[fn]==="function") this[fn](); }
        };
        if (newTab && action.startsWith("url:")) this.confirm(label||action.slice(4), icon||"⧉", run);
        else run();
    },

    // ── ANIME ─────────────────────────────────────────────────────────
    _animeState: { loaded: false, searchTimeout: null },

    animeLoadHome() {
        this._animeState.loaded = true;
        const body = document.getElementById("ap-body");
        body.innerHTML = `<div class="ap-spinner"></div>`;
        fetch(`${ANIME_API_BASE}/home`)
            .then(r=>r.json())
            .then(d=>{
                if(!d.success){ body.innerHTML=`<div class="ap-msg">Could not load anime. Is the API running?</div>`; return; }
                let html = "";
                if(d.latest_updates?.length) {
                    html += `<div class="ap-section"><div class="ap-section-title">Latest Updates</div><div class="ap-grid" id="ap-latest">`;
                    d.latest_updates.slice(0,12).forEach(a=>{
                        html += `<div class="acard" data-slug="${encodeURIComponent(a.url.split('/watch/')[1]||'')}">
                            <img src="${a.poster||''}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'">
                            <div class="acard-info"><div class="acard-title">${a.title}</div>
                            <div class="acard-meta">Ep ${a.current_episode||'?'} · ${a.sub_episodes?'Sub':''} ${a.dub_episodes?'Dub':''}</div></div></div>`;
                    });
                    html += `</div></div>`;
                }
                if(d.top_trending?.NOW?.length) {
                    html += `<div class="ap-section"><div class="ap-section-title">Trending Now</div><div class="ap-grid">`;
                    d.top_trending.NOW.slice(0,8).forEach(a=>{
                        html += `<div class="acard" data-slug="${encodeURIComponent(a.url.split('/watch/')[1]||'')}">
                            <img src="${a.poster||''}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'">
                            <div class="acard-info"><div class="acard-title">${a.title}</div>
                            <div class="acard-meta">${a.type||''} · Sub:${a.sub_episodes||'?'}</div></div></div>`;
                    });
                    html += `</div></div>`;
                }
                body.innerHTML = html || `<div class="ap-msg">No anime data found.</div>`;
                body.querySelectorAll(".acard[data-slug]").forEach(el=>{
                    el.addEventListener("click", ()=>{ const slug=decodeURIComponent(el.dataset.slug); if(slug) this.animeLoadInfo(slug); });
                });
            })
            .catch(()=>{ body.innerHTML=`<div class="ap-msg">API error. Make sure your API is deployed at:<br><code>${ANIME_API_BASE}</code></div>`; });
    },

    animeSearch(q) {
        if(!q.trim()){ this.animeLoadHome(); return; }
        const body = document.getElementById("ap-body");
        body.innerHTML = `<div class="ap-spinner"></div>`;
        fetch(`${ANIME_API_BASE}/search?keyword=${encodeURIComponent(q)}`)
            .then(r=>r.json())
            .then(d=>{
                if(!d.success||!d.results?.length){ body.innerHTML=`<div class="ap-msg">No results for "${q}"</div>`; return; }
                let html = `<div class="ap-section-title">Results for "${q}"</div><div class="ap-grid">`;
                d.results.forEach(a=>{
                    const slug = a.url.split('/watch/')[1]||a.slug||'';
                    html += `<div class="acard" data-slug="${encodeURIComponent(slug)}">
                        <img src="${a.poster||''}" alt="${a.title}" loading="lazy" onerror="this.style.background='var(--g3)'">
                        <div class="acard-info"><div class="acard-title">${a.title}</div>
                        <div class="acard-meta">${a.type||''} ${a.year?'· '+a.year:''}</div></div></div>`;
                });
                html += `</div>`;
                body.innerHTML = html;
                body.querySelectorAll(".acard[data-slug]").forEach(el=>{
                    el.addEventListener("click",()=>{ const slug=decodeURIComponent(el.dataset.slug); if(slug) this.animeLoadInfo(slug); });
                });
            }).catch(()=>{ body.innerHTML=`<div class="ap-msg">Search failed.</div>`; });
    },

    animeLoadInfo(slug) {
        document.getElementById("ap-title").innerText = "Loading…";
        const body = document.getElementById("ap-body");
        body.innerHTML = `<div class="ap-spinner"></div>`;
        fetch(`${ANIME_API_BASE}/anime/${slug}`)
            .then(r=>r.json())
            .then(async d=>{
                if(!d.success){ body.innerHTML=`<div class="ap-msg">Could not load anime info.</div>`; return; }
                document.getElementById("ap-title").innerText = d.title||"Anime";
                this._animeState.current = d;
                // load episodes
                let epsHTML = `<div class="ap-msg">No episodes found.</div>`;
                if(d.ani_id){
                    const er = await fetch(`${ANIME_API_BASE}/episodes/${d.ani_id}`).then(r=>r.json()).catch(()=>null);
                    if(er?.success && er.episodes?.length){
                        epsHTML = `<div class="ep-list">`+er.episodes.map(ep=>`
                            <div class="ep-item" data-token="${ep.token||''}">
                                <span class="ep-num">Ep ${ep.number}</span>
                                <span class="ep-ttl">${ep.title||'Episode '+ep.number}</span>
                                <span class="ep-badges">
                                    ${ep.has_sub?'<span class="ep-badge sub">SUB</span>':''}
                                    ${ep.has_dub?'<span class="ep-badge dub">DUB</span>':''}
                                </span>
                            </div>`).join("")+`</div>`;
                        this._animeState.episodes = er.episodes;
                    }
                }
                body.innerHTML = `
                    <div class="ap-section">
                        <div style="display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
                            <img src="${d.poster||''}" style="width:clamp(80px,12vw,140px);border-radius:10px;object-fit:cover;" onerror="this.style.display='none'">
                            <div style="flex:1;min-width:0;">
                                <div style="font-size:var(--fs-lg);font-weight:800;margin-bottom:6px;">${d.title||''}</div>
                                <div style="font-size:var(--fs-xs);color:rgba(255,255,255,.35);margin-bottom:10px;">${d.japanese_title||''}</div>
                                <div style="font-size:var(--fs-sm);color:rgba(255,255,255,.45);line-height:1.55;">${(d.description||'').slice(0,300)}${(d.description||'').length>300?'…':''}</div>
                            </div>
                        </div>
                    </div>
                    <div class="ap-section">
                        <div class="ap-section-title">Episodes (${this._animeState.episodes?.length||0})</div>
                        ${epsHTML}
                    </div>`;
                body.querySelectorAll(".ep-item[data-token]").forEach(el=>{
                    el.addEventListener("click",()=>{ const tok=el.dataset.token; if(tok) this.animeLoadServers(tok,el); });
                });
            }).catch(()=>{ body.innerHTML=`<div class="ap-msg">Failed to load anime.</div>`; });
    },

    async animeLoadServers(token, epEl) {
        const body = document.getElementById("ap-body");
        // Show server picker below the episode
        let existing = document.getElementById("srv-picker");
        if(existing) existing.remove();
        const pick = document.createElement("div"); pick.id="srv-picker";
        pick.innerHTML = `<div class="ap-spinner"></div>`;
        epEl.after(pick);
        try {
            const d = await fetch(`${ANIME_API_BASE}/servers/${token}`).then(r=>r.json());
            if(!d.success){ pick.innerHTML=`<div class="ap-msg">No servers found.</div>`; return; }
            let html = `<div style="padding:12px 0;"><div class="ap-section-title">Choose Server</div>`;
            for(const [lang, servers] of Object.entries(d.servers||{})){
                html += `<div style="margin-bottom:10px;"><div style="font-size:var(--fs-xs);color:rgba(255,255,255,.3);margin-bottom:6px;letter-spacing:2px;text-transform:uppercase;">${lang}</div><div class="srv-list">`;
                servers.forEach(s=>{
                    html += `<div class="srv-item" data-lid="${s.link_id}">${s.name}</div>`;
                });
                html += `</div></div>`;
            }
            html += `</div>`;
            pick.innerHTML = html;
            pick.querySelectorAll(".srv-item").forEach(el=>{
                el.addEventListener("click", async ()=>{
                    el.classList.add("playing"); el.textContent = "Loading…";
                    const src = await fetch(`${ANIME_API_BASE}/source/${el.dataset.lid}`).then(r=>r.json()).catch(()=>null);
                    if(src?.success && src.sources?.length){
                        this.playAnimeSource(src);
                    } else { el.textContent = "Failed"; el.classList.remove("playing"); }
                });
            });
        } catch(e){ pick.innerHTML=`<div class="ap-msg">Server fetch failed.</div>`; }
    },

    playAnimeSource(src) {
        // Open in theater with the m3u8 URL
        const url = src.sources[0]?.file || src.sources[0]?.url || "";
        if(!url){ alert("No stream URL found."); return; }
        const theater = document.getElementById("theater"), frame = document.getElementById("gframe");
        document.getElementById("t-title").innerText = this._animeState.current?.title || "Anime";
        theater.classList.add("on"); this._theaterItem = null;
        document.getElementById("t-dl").style.display = src.download ? "" : "none";
        // Build a simple HLS player page
        const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
            *{margin:0;padding:0;box-sizing:border-box}body{background:#000;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;}
            video{width:100%;height:100%;}</style>
            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"><\/script></head>
            <body><video id="v" controls autoplay></video>
            <script>var v=document.getElementById('v');if(Hls.isSupported()){var hls=new Hls();hls.loadSource('${url}');hls.attachMedia(v);}else if(v.canPlayType('application/vnd.apple.mpegurl')){v.src='${url}';}<\/script></body></html>`;
        frame.src = URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"}));
    },

    // ── CLOAK ─────────────────────────────────────────────────────────
    triggerCloak() {
        // Immediately kill the visual — no white flash
        document.documentElement.setAttribute("style","background:#05050a!important");
        document.body.setAttribute("style","background:#05050a!important;opacity:0;");

        const icon = CLOAK_ICON, title = CLOAK_TITLE;
        const build = src => {
            const blob = new Blob([src],{type:"text/javascript"});
            const burl = URL.createObjectURL(blob);
            const parts = [
                '<!DOCTYPE html><html><head>',
                '<meta charset="utf-8">',
                '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
                '<title>'+title+'</title>',
                '<link rel="shortcut icon" type="image/x-icon" href="'+icon+'">',
                '<style>*{margin:0;padding:0}html,body{background:#05050a;width:100%;height:100%;overflow:hidden;}</style>',
                '</head><body>',
                '<script>var s=document.createElement("script");s.src="'+burl+'";document.head.appendChild(s);<\/script>',
                '</body></html>'
            ].join("");
            document.open(); document.write(parts); document.close();
        };
        fetch(CLOAK_CDN).then(r=>{if(!r.ok)throw 0;return r.text();}).then(build)
            .catch(()=>{
                // Fallback: direct CDN script tag
                const parts = [
                    '<!DOCTYPE html><html><head>',
                    '<meta charset="utf-8"><title>'+title+'</title>',
                    '<link rel="shortcut icon" href="'+icon+'">',
                    '<style>*{margin:0;padding:0}html,body{background:#05050a;width:100%;height:100%;overflow:hidden;}</style>',
                    '</head><body>',
                    '<script src="'+CLOAK_CDN+'"><\/script>',
                    '</body></html>'
                ].join("");
                document.open(); document.write(parts); document.close();
            });
    },

    cloakLaunch(url) {
        if(!url||url===location.href) return;
        const w = window.open("about:blank","_blank");
        if(!w){ alert("Popup blocked."); return; }
        w.document.title="Google Classroom";
        const lnk=w.document.createElement("link"); Object.assign(lnk,{rel:"shortcut icon",href:"https://ssl.gstatic.com/classroom/favicon.png"});
        w.document.head.appendChild(lnk);
        w.document.body.style.cssText="margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;background:#000";
        const iframe=w.document.createElement("iframe");
        iframe.style.cssText="width:100%;height:100%;border:none"; iframe.allowFullscreen=true;
        if(url.startsWith("blob:")){
            fetch(document.getElementById("gframe").src).then(r=>r.text())
                .then(html=>{iframe.src=w.URL.createObjectURL(new Blob([html],{type:"text/html;charset=utf-8"}));})
                .catch(()=>{iframe.src=url;});
        } else { iframe.src=url; }
        w.document.body.appendChild(iframe);
        this.hideCtx();
    },

    // ── EVENTS ───────────────────────────────────────────────────────
    bindEvents() {
        const $ = id => document.getElementById(id), $$ = s => document.querySelector(s);

        // Lock
        $$(".lock-in")?.addEventListener("input", e=>{
            if(e.target.value===LOCK_PIN){
                const lock=$("lock"); lock.style.opacity="0"; lock.style.pointerEvents="none";
                setTimeout(()=>lock.remove(),400);
                $("app").classList.add("on");
            }
        });

        // Search
        $("sbar")?.addEventListener("input", e=>{ this.searchQuery=e.target.value.toLowerCase().trim(); this.filter(); }, {passive:true});

        // Fav toggle
        $("fav-btn")?.addEventListener("click", ()=>{
            this.onlyShowFavorites=!this.onlyShowFavorites;
            $("fav-btn").classList.toggle("on",this.onlyShowFavorites);
            this.filter();
        });

        // Menu
        $("menu-btn")?.addEventListener("click", e=>{ e.stopPropagation(); $("panel").classList.contains("on")?this.closePanel():this.openPanel(); });
        $("bd")?.addEventListener("click", ()=>{ this.closePanel(); });
        $("panel")?.addEventListener("click", e=>e.stopPropagation());
        $("panel")?.querySelectorAll(".mitem[data-action]").forEach(el=>{
            el.addEventListener("click",()=>{
                const cfg=MENU_ITEMS.find(m=>m.action===el.dataset.action&&m.label===el.querySelector(".mil")?.innerText);
                this.dispatch(el.dataset.action, el.dataset.nt==="1", cfg?.label, cfg?.icon);
            });
        });

        // Header buttons
        HEADER_BUTTONS.forEach(b=>{
            $(b.id)?.addEventListener("click",()=>this.dispatch(b.action,b.newTab,b.label,b.icon));
        });
        if(PROXY_ENABLED) $("proxy-btn")?.addEventListener("click",()=>window.open(PROXY_URL,"_blank"));

        // Bottom nav
        document.querySelectorAll(".ntab").forEach(t=>{
            t.addEventListener("click",()=>this.dispatch(t.dataset.action));
        });

        // Theater
        $("t-fs")?.addEventListener("click",()=>{ $("ifw")?.requestFullscreen?.() || document.getElementById("gframe").requestFullscreen?.(); });
        $("t-cloak")?.addEventListener("click",()=>this.cloakLaunch($("gframe").src));
        $("t-close")?.addEventListener("click",()=>{ $("theater").classList.remove("on"); $("gframe").src=""; this._theaterItem=null; });
        $("t-dl")?.addEventListener("click",()=>{ if(this._theaterItem) this.downloadItem(this._theaterItem); });

        // Anime
        $("ap-back")?.addEventListener("click",()=>{
            if(this._animeState.current){ this._animeState.current=null; this.animeLoadHome(); document.getElementById("ap-title").innerText="Anime"; }
            else { this.setTab("home"); }
        });
        let animeSearchTimer;
        $("ap-search")?.addEventListener("input", e=>{
            clearTimeout(animeSearchTimer);
            animeSearchTimer = setTimeout(()=>this.animeSearch(e.target.value),400);
        });

        // Global
        window.addEventListener("click", ()=>this.hideCtx());
        window.addEventListener("contextmenu", e=>{ if(!e.target.closest(".card")){ e.preventDefault(); this.hideCtx(); } });
        window.addEventListener("keydown", e=>{
            if(e.key==="Escape"){
                if($("ntov").classList.contains("on")) $("ntov").classList.remove("on");
                else if($("panel").classList.contains("on")) this.closePanel();
                else if($("anime-panel").classList.contains("on")) this.setTab("home");
                else this.triggerCloak();
            }
        });
    },

    // ── BOOT ─────────────────────────────────────────────────────────
    boot() {
        this.css();
        this.buildDOM();
        this.dots();
        this.bindEvents();
    }
};

nova.boot();
LOADER_EOF
