// Nova Gaming 6 — single-file desktop engine. No build step required.
(function novaLoader(){
if(window.__novaLoaderStarted)return;
window.__novaLoaderStarted=true;
// Only the outer launcher opens a tab; the embedded copy starts Nova normally.
function isCloakedOrEmbedded(){
    return window.top!==window || new URLSearchParams(location.search).get('nova_cloak_child')==='1';
}
let cloakWindow=null;
function openNovaCloak(){
    if(isCloakedOrEmbedded())return null;
    try{
        if(cloakWindow && !cloakWindow.closed){cloakWindow.focus();return cloakWindow;}
    }catch{cloakWindow=null;}
    let popup=null;
    try{
        popup=window.open('about:blank','_blank');
        if(!popup)return null;
        const url=new URL(location.href);
        url.searchParams.set('nova_cloak_child','1');
        const doc=popup.document;
        doc.title='Home - Classroom';
        const icon=doc.createElement('link');
        icon.rel='icon';icon.href='https://ssl.gstatic.com/classroom/favicon.png';
        doc.head.appendChild(icon);
        doc.body.style.cssText='margin:0;height:100vh;overflow:hidden;background:#080b12';
        const frame=doc.createElement('iframe');
        frame.title='Nova Gaming';
        frame.style.cssText='display:block;border:0;width:100%;height:100%';
        frame.allow='fullscreen; autoplay; gamepad; clipboard-read; clipboard-write';
        frame.allowFullscreen=true;
        frame.src=url.href;
        doc.body.appendChild(frame);
        cloakWindow=popup;
        return popup;
    }catch(error){
        try{popup?.close();}catch{}
        console.warn('Nova could not open its cloaked tab.',error);
        return null;
    }
}
function autoCloakEnabled(){
    try{
        const saved=JSON.parse(localStorage.getItem('nova_appearance_v2')||'{}');
        return saved.autoCloak!==false;
    }catch{return true;}
}
function launchNova(){
    if(isCloakedOrEmbedded()){startNova();return;}
    if(!autoCloakEnabled()){startNova();return;}
    const opened=openNovaCloak();
    const launcher=document.createElement('div');
    launcher.id='nova-cloak-launcher';
    launcher.style.cssText='position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;background:#080b12;color:#f7f8ff;font-family:system-ui,sans-serif;padding:24px;box-sizing:border-box';
    const card=document.createElement('main');
    card.style.cssText='max-width:420px;width:100%;text-align:center';
    const title=document.createElement('h1');title.textContent='Nova Gaming';
    title.style.cssText='font-size:36px;letter-spacing:-1px;margin:0 0 16px';
    const status=document.createElement('p');status.setAttribute('role','status');
    status.style.cssText='color:#b5bbcc;line-height:1.65;margin:0 0 24px';
    const open=document.createElement('button');open.type='button';
    open.style.cssText='font:600 15px system-ui;border:0;border-radius:12px;padding:14px 22px;background:#7c5cff;color:white;cursor:pointer';
    const update=success=>{
        status.textContent=success?'Nova opened in an about:blank tab. You can return to it below.':'Your browser blocked the automatic tab. Click below to open Nova in an about:blank tab.';
        open.textContent=success?'Return to Nova':'Open Nova';
    };
    open.addEventListener('click',()=>update(!!openNovaCloak()));
    const stay=document.createElement('button');stay.type='button';stay.textContent='Continue in this tab';
    stay.style.cssText='display:block;margin:18px auto 0;font:13px system-ui;border:0;padding:10px;background:transparent;color:#b5bbcc;cursor:pointer;text-decoration:underline';
    stay.addEventListener('click',()=>{launcher.remove();startNova();},{once:true});
    update(!!opened);
    card.append(title,status,open,stay);launcher.appendChild(card);document.body.appendChild(launcher);
}

function startNova(){
/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║        NOVA GAMING — HYPERGLASS OS ENGINE v5.0 (OLED EDITION)    ║
 * ║  Change values here. No coding knowledge needed.                 ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 *  ACTION TYPES (for menu items / buttons):
 *    "reload"           → refresh page
 *    "cloak"            → cloak tab into about:blank
 *    "url:https://..."  → open a link
 *    "custom:fnName"    → call a built-in function
 *    "anime"            → open anime panel
 *    "youtube"          → open YouTube panel
 *    "ai"               → open AI assistant panel
 *    "separator"        → divider line (menu only)
 */

// ─── SITE CONFIG ────────────────────────────────────────────────
const SITE_NAME    = "Nova Gaming";
const SITE_TAGLINE = "Next-Gen HyperGlass Gaming OS";

// ─── LOCK ───────────────────────────────────────────────────────

// ─── CLOAK METADATA ─────────────────────────────────────────────
const CLOAK_TITLE = "Home - Classroom";
const CLOAK_ICON  = "https://ssl.gstatic.com/classroom/favicon.png";

// ─── BACKGROUND CONFIG ──────────────────────────────────────────
const PARTICLE_COLOR = "rgba(0, 255, 157, 0.22)";
const PARTICLE_COUNT = 45;

// ─── OFFLINE SAVE ───────────────────────────────────────────────
const SAVE_URL      = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/singlefile.html";
const SAVE_FILENAME = "NovaGaming.html";

// ─── GOOGLE GEMINI AI CONFIG ────────────────────────────────────
const GEMINI_API_KEY = typeof window.NOVA_API_KEYS?.gemini === "string" ? window.NOVA_API_KEYS.gemini : "AQ.Ab8RN6Ib4cwqUsTDoR_tnt5KVVKF7GUiRwP4OCq6bEuvskhtJg";
const DEFAULT_UI_MODE = "classic";

// ─── PIPED VIDEO API POOL ───────────────────────────────────────
const PIPED_API_INSTANCES = [
    "https://pipedapi.kavin.rocks",
    "https://pipedapi.leptons.xyz",
    "https://pipedapi.nosebs.ru",
    "https://pipedapi.adminforge.de",
    "https://api.piped.yt",
    "https://piped-api.privacy.com.de",
    "https://pipedapi.ducks.party",
    "https://piped-api.codespace.cz",
    "https://api.piped.private.coffee",
    "https://pipedapi.darkness.services",
    "https://pipedapi.orangenet.cc",
    "https://pipedapi.drgns.space",
    "https://pipedapi.owo.si",
    "https://pipedapi.reallyaweso.me"
];
let currentPipedApi = PIPED_API_INSTANCES[0];
const currentYtInstance = "https://piped.video";

// ─── CONSUMET ANIME STREAMING INSTANCES ─────────────────────────
const CONSUMET_INSTANCES = [
    "https://api.consumet.org/anime/gogoanime",
    "https://consumet-api-clone.vercel.app/anime/gogoanime",
    "https://api-consumet-org.vercel.app/anime/gogoanime"
];
let currentConsumet = CONSUMET_INSTANCES[0];

// ─── FEATURES ───────────────────────────────────────────────────
const AI_ENABLED    = true;   // Gemini AI Assistant
const ANIME_ENABLED = true;   // Jikan + Consumet Anime Tab
const YT_ENABLED    = true;   // Multi-provider YouTube Tab

// ─── BOTTOM DOCK NAV ────────────────────────────────────────────
const BOTTOM_NAV = [
    { id:"nav-home",    icon:"⚡", label:"Games",    action:"home"                        },
    { id:"nav-ai",      icon:"✦", label:"Nova AI",  action:"ai",      hidden:!AI_ENABLED    },
    { id:"nav-search",  icon:"⌕", label:"Search",   action:"search"                      },
    { id:"nav-anime",   icon:"▶", label:"Anime",    action:"anime",   hidden:!ANIME_ENABLED },
    { id:"nav-yt",      icon:"▷", label:"YouTube",  action:"youtube", hidden:!YT_ENABLED    },
    { id:"nav-favs",    icon:"★", label:"Favs",     action:"favorites"                   },
    { id:"nav-menu",    icon:"☰", label:"Menu",     action:"menu"                        },
    { id:"nav-browser", icon:"🌐", label:"Browser",  action:"url:https://single-nova-worker.umarerthteam.workers.dev", newTab:false },
];

// ─── SIDE DOCK MENU ─────────────────────────────────────────────
const MENU_ITEMS = [
    { icon:"⌂", label:"Home Studio",    action:"reload" },
    { icon:"✦", label:"Nova AI Engine", action:"ai" },
    { icon:"🖷", label:"Request Game",   action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab:true },
    { icon:"↓", label:"Save Offline",   action:"custom:executeSaveDownload" },
    { action:"separator" },
    { icon:"⊘", label:"Cloak Tab",      action:"cloak" },
    { icon:"⏱", label:"My YouTube",     action:`url:${currentYtInstance}/channel/UCcusQs9FwQdeB2g_v7_R45g`, newTab:true },
    { icon:"⌘", label:"OS Style", action:"custom:setOsStyle" },
    ];

// ─── HEADER BUTTONS ─────────────────────────────────────────────
const HEADER_BUTTONS = [
    { id:"request-btn", icon:"🖷", label:"Request", action:"url:https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog", newTab:true },
    { id:"cloak-btn",   icon:"⊘", label:"Cloak",   action:"cloak" },
    { id:"save-btn",    icon:"↓", label:"Save",    action:"custom:executeSaveDownload" },
];

// ─── GAMES DATA ─────────────────────────────────────────────────
const GAMES = [
    { title:"Cookie Clicker",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Cookie_Clicker.html",                      desc:"Bake billions of cookies and expand your bakery empire.", newTab:false, download:true },
    { title:"Brotato Web Edition",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbrotato.html",                         desc:"Top-down roguelite shooter fighting alien swarms.", newTab:false, download:true },
    { title:"Minecraft Eaglercraft",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/EaglercraftX_1.8_u50_Offline_Signed.html", desc:"Classic blocky sandbox survival and creative building.", newTab:false, download:true },
    { title:"Baldi's Basics Plus",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Baldi's-Basics-Plus.html",                desc:"Surreal 90s edutainment stealth horror game.", newTab:false,  download:true },
    { title:"Bank Robbery 3",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Bank-Robbery-3.html",                      desc:"Tactical heist action shooter. Breach vaults and secure cash.", newTab:false,  download:true },
    { title:"Buckshot Roulette",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Buckshot%20Roulette.html",                 desc:"Tense tabletop Russian roulette with a 12-gauge shotgun.", newTab:false, download:true },
    { title:"Five Nights at Epstein's",  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Five-Nights-at-Epstein's.html",            desc:"Survive five eerie nights on camera surveillance.", newTab:false,  download:true },
    { title:"GTA Vice City",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/GTA__Vice_City.html",                      desc:"Neon 1980s open-world retro crime adventure.", newTab:false, download:true },
    { title:"Git-Hub Search",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Git-Hub_Search.html",                      desc:"Quickly search and inspect repositories across GitHub.", newTab:false, download:true },
    { title:"Pizza Tower",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Pizza-Tower.html",                         desc:"Wild 2D platformer smashing through pizza dimensions.", newTab:false, download:true },
    { title:"Subway Surfers",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Subway_Surfers.html",                      desc:"Endless runner dodging oncoming trains and barriers.", newTab:false, download:true },
    { title:"Temple Run 2",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Temple-Run-2.html",                        desc:"Navigate cliffs and zip lines escaping demonic monkeys.", newTab:false,  download:true },
    { title:"Vapor V4",                  url:"https://100.vaporized.help",                                                          desc:"Web portal for games, media, and tools.", newTab:false,  download:false },
    { title:"Google Doodles",            url:"https://doodles.google/search/?form_tags=interactive%20game",                         desc:"Collection of interactive games created by Google.", newTab:false,  download:false },
    { title:"Friday Night Funkin'",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Friday_Night_Funkin.html",                 desc:"Retro rhythm game rapping in lyrical showdowns.", newTab:false, download:true },
    { title:"FNF VS Hex",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Friday_Night_Funkin'__Vs._Hex.html",       desc:"Face off against Hex the robot in rhythm duels.", newTab:false, download:true },
    { title:"FNF VS Whitty",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Friday_Night_Funkin'__V.S._Whitty.html",   desc:"Rhythm battles against an explosive bomb-headed rival.", newTab:false, download:true },
    { title:"Doki Doki Literature Club", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/DokiDoki-Literatureclub.html",        desc:"Psychological horror novel disguised as a poetry club.", newTab:false, download:true },
    { title:"1v1.LOL",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/1v1.LoL.html",                             desc:"Fast building and shooting online multiplayer arena.", newTab:false, download:true },
    { title:"Alt Single Engine",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/altsingle.html",                          desc:"Standalone single-file offline game engine container.", newTab:false, download:true },
    { title:"Bank Robbery",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Bank%20Robbery.html",                      desc:"Plan bank heists and escape security forces.", newTab:false, download:true },
    { title:"Cheese Rolling",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cheeserolling.html",                      desc:"Tumble down steep hills chasing rolls of cheese.", newTab:false, download:true },
    { title:"Castlevania III",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl-3.html",                                desc:"8-bit NES gothic platformer slaying Count Dracula.", newTab:false, download:true },
    { title:"Contra B",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl-b.html",                             desc:"Retro arcade run-and-gun alien shooter.", newTab:false, download:true },
    { title:"Castlevania (NES)",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl1.html",                             desc:"The original NES gothic platforming saga.", newTab:false, download:true },
    { title:"100-in-1 NES Multicart",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl100in1nes.html",                        desc:"Retro arcade cartridge with 100 8-bit games.", newTab:false, download:true },
    { title:"100 Rooms of Enemies",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl100RoomsOfEnemies.html",                 desc:"Battle room-by-room through 100 tactical levels.", newTab:false, download:true },
    { title:"10 Bullets",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl10bullets.html",                        desc:"Trigger massive chain reactions with limited ammo.", newTab:false, download:true },
    { title:"10 Minutes Till Dawn",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl10minutestildawn.html",                 desc:"Survive eldritch waves in a fast roguelite shooter.", newTab:false, download:true },
    { title:"10 More Bullets",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl10morebullets.html",                    desc:"Explosive arcade shooter sequel with weapon upgrades.", newTab:false, download:true },
    { title:"10-Yard Fight",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl10yardfight.html",                      desc:"Classic arcade American football game.", newTab:false, download:true },
    { title:"13 Bones",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl13bones.html",                          desc:"Eerie dungeon platformer harvesting skeletal secrets.", newTab:false, download:true },
    { title:"1942 (NES)",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl1942nes.html",                          desc:"Classic WWII vertical aerial shoot-'em-up.", newTab:false, download:true },
    { title:"1 on 1 Soccer",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl1on1soccer.html",                       desc:"Fast arcade soccer duels with funny power-ups.", newTab:false, download:true },
    { title:"1v1.LOL Arena",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl1v1lol.html",                          desc:"Practice box fights and editing in a competitive arena.", newTab:false, download:true },
    { title:"1 on 1 Tennis",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl1v1tennis.html",                       desc:"Retro 2D tennis rallies and single-player matches.", newTab:false, download:true },
    { title:"2048",                      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl2048.html",                             desc:"Addictive tile-matching number puzzle game.", newTab:false, download:true },
    { title:"20 Small Mazes",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl20smallmazes.html",                    desc:"Mind-bending micro-mazes with unique mechanics.", newTab:false, download:true },
    { title:"2 3 4 Player Mini Games",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl234playergame.html",                    desc:"Local multiplayer mini-games to challenge friends.", newTab:false, download:true },
    { title:"DOOM II 2D",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl2doom.html",                            desc:"Classic demon-blasting DOOM as a 2D platformer.", newTab:false, download:true },
    { title:"3 Dash",                    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3dash.html",                            desc:"High-speed 3D rhythm Geometry Dash style platformer.", newTab:false, download:true },
    { title:"3 Dash Level Editor",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3dasheditor.html",                     desc:"Build and test custom 3D rhythm obstacle courses.", newTab:false, download:true },
    { title:"3D Pinball Space Cadet",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3dpinballspacecadet.html",            desc:"Nostalgic Windows classic retro pinball arcade.", newTab:false, download:true },
    { title:"3 Pandas",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3pandas.html",                          desc:"Help three panda brothers solve environmental puzzles.", newTab:false, download:true },
    { title:"3 Pandas in Brazil",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3pandasbrazil.html",                    desc:"Guide the pandas through physics puzzles in Brazil.", newTab:false, download:true },
    { title:"3 Pandas in Fantasy",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3pandasfantasy.html",                   desc:"Magical puzzle adventure in fairy tale realms.", newTab:false, download:true },
    { title:"3 Pandas in Japan",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3pandasjapan.html",                     desc:"Solve clever puzzles across Japanese landmarks.", newTab:false, download:true },
    { title:"3 Pandas at Night",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3pandasnight.html",                     desc:"Sneak through mysterious nighttime obstacles.", newTab:false, download:true },
    { title:"3 Slices 2",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl3slices2.html",                        desc:"Slice physics objects strategically to hit target goals.", newTab:false, download:true },
    { title:"40x Escape",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl40xescape.html",                        desc:"Solve 40 unique door escape puzzles in one room.", newTab:false, download:true },
    { title:"500 Caliber Contractz",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl500calibercontractz.html",             desc:"Sniper assassin action with high-caliber rifles.", newTab:false, download:true },
    { title:"60 Seconds Burger Run",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl60secondsburgerrun.html",             desc:"Dash to the burger joint before the 60s timer expires.", newTab:false, download:true },
    { title:"60 Seconds Santa Run",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl60secondssantarun.html",              desc:"Deliver presents across holiday courses in under a minute.", newTab:false, download:true },
    { title:"64-in-1 NES Multicart",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl64in1nes.html",                        desc:"Retro compilation packed with 64 classic NES games.", newTab:false, download:true },
    { title:"8 Ball Classic",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl8ballclassic.html",                    desc:"Traditional pool simulator with realistic cue physics.", newTab:false, download:true },
    { title:"8 Ball Pool",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl8ballpool.html",                       desc:"Play single matches or tournaments in smooth pool action.", newTab:false, download:true },
    { title:"9007199254740992",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl9007199254740992.html",                desc:"Extreme high-number variant of 2048 with huge grids.", newTab:false, download:true },
    { title:"99 Nights in the Forest",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cl99nightsitf.html",                     desc:"Survive 99 spooky nights against forest creatures.", newTab:false, download:true },
    { title:"A Walk in The Forest",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clA Walk in The Forest (v1.0).html",     desc:"Peaceful atmospheric trek through mysterious woodlands.", newTab:false, download:true },
    { title:"Abandoned 3",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clabandoned3.html",                      desc:"Point-and-click room escape exploring ruined structures.", newTab:false, download:true },
    { title:"Absolute Madness",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clabsolutemadness.html",                  desc:"Fast arena stickman combat inspired by Madness Combat.", newTab:false, download:true },
    { title:"Ace Attorney: Edgeworth",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claceattorneymilesedgeworth.html",        desc:"Investigate crime scenes and uncover court truth.", newTab:false, download:true },
    { title:"Ace Gangster Taxi",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clacegangstertaxi.html",                 desc:"Drive mobsters, dodge police, and complete illegal cab runs.", newTab:false, download:true },
    { title:"Achievement Unlocked",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clachievmentunlocked.html",              desc:"Meta platformer aiming to unlock 100 achievements.", newTab:false, download:true },
    { title:"Achievement Unlocked 2",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clachievmentunlocked2.html",             desc:"Unlock hundreds of quirky achievements in a mega room.", newTab:false, download:true },
    { title:"Achievement Unlocked 3",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clachievmentunlocked3.html",             desc:"The ultimate achievement hunter puzzle platformer.", newTab:false, download:true },
    { title:"Achilles 2",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clachillies2.html",                      desc:"Gladiator fighting game with ancient spears and swords.", newTab:false, download:true },
    { title:"Mach Bike Challenge",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clAcko_s Mach Bike Challenge (v1.0).html", desc:"High-speed bike racing navigating tight obstacles.", newTab:false, download:true },
    { title:"A Date with Death",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cladatewithdeath.html",                  desc:"Supernatural romance visual novel chatting with Death.", newTab:false, download:true },
    { title:"Advance Wars",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cladvancewars.html",                     desc:"Turn-based GBA strategy commanding armies and tanks.", newTab:false, download:true },
    { title:"Advance Wars 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cladvancewars2.html",                    desc:"Command new military officers in acclaimed tactical sequel.", newTab:false, download:true },
    { title:"Advance Wars: Dual Strike", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cladvancewarsdualstrike.html",            desc:"Dual-screen tactical warfare strategy adventure.", newTab:false, download:true },
    { title:"Adventure Capitalist",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clAdventureCapatalist.html",             desc:"Idle business game building a multi-billion dollar empire.", newTab:false, download:true },
    { title:"Aflac Duck Game",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claflac.html",                           desc:"Navigate the Aflac duck through flight courses.", newTab:false, download:true },
    { title:"After the Week",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claftertheweek.html",                    desc:"Narrative story exploring a surreal weekend break.", newTab:false, download:true },
    { title:"Age of War 2",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clageofwar2.html",                       desc:"Evolve units across human history from Stone Age to future.", newTab:false, download:true },
    { title:"Ages of Conflict",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clagesofconflict.html",                  desc:"Customizable world map war simulator.", newTab:false, download:true },
    { title:"Age of Empires",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clagesofempire.html",                    desc:"Classic RTS building civilizations and conquering foes.", newTab:false, download:true },
    { title:"Airline Tycoon Idle",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clairlinetycoonidle.html",              desc:"Manage fleets, routes, and expand an aviation empire.", newTab:false, download:true },
    { title:"A Koopa's Revenge",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clakoopasrevenge.html",                  desc:"Play as a Koopa platforming through Mario's world.", newTab:false, download:true },
    { title:"A Koopa's Revenge 2",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clakoopasrevenge2.html",                 desc:"Expanded Koopa platformer with unique power-ups.", newTab:false, download:true },
    { title:"Akumanoor Gaiden",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clakumanorgaiden.html",                  desc:"Ninja action platformer with acrobatics and sword play.", newTab:false, download:true },
    { title:"Aladdin (SNES)",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claladdinsnes.html",                     desc:"Classic 16-bit Disney platformer across Agrabah.", newTab:false, download:true },
    { title:"Alex Kidd Miracle World",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalexkiddinmiracleworld.html",        desc:"Nostalgic Master System platformer with boss duels.", newTab:false, download:true },
    { title:"Alien Hominid",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalienhominid.html",                    desc:"Fast arcade side-scrolling shooter fighting agents.", newTab:false, download:true },
    { title:"Alien Hominid (GBA)",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalienhominidgba.html",                 desc:"Portable alien shooter packed with intense battles.", newTab:false, download:true },
    { title:"Alien Sky Invasion",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalienskyinvasion.html",              desc:"3D space fighter dogfighting alien invasion forces.", newTab:false, download:true },
    { title:"Alien Transporter",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalientransporter.html",               desc:"Pilot a physics saucer transporting planetary cargo.", newTab:false, download:true },
    { title:"Alien vs Predator",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clalienvspredator.html",                desc:"Classic arcade beat-'em-up fighting xenomorphs.", newTab:false, download:true },
    { title:"All Bosses in 1",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clallbossesin1.html",                   desc:"Boss rush survival challenge against iconic bosses.", newTab:false, download:true },
    { title:"Altered Beast",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clAltered Beast.html",                   desc:"Morph into ferocious beasts to rescue Athena.", newTab:false, download:true },
    { title:"Ambulance Rush",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clambulencearush.html",                  desc:"Drive ambulances through city traffic to save lives.", newTab:false, download:true },
    { title:"Amigo Pancho",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clamigopancho.html",                     desc:"Float Pancho to safety using physics balloons.", newTab:false, download:true },
    { title:"Amigo Pancho 7",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clamigopancho7.html",                    desc:"Solve tricky physics balloon puzzles around the world.", newTab:false, download:true },
    { title:"Amorphous+",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clamorphous.html",                      desc:"Swing huge blades clearing swarms of slime monsters.", newTab:false, download:true },
    { title:"Anemone's Fall",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clanemonesfall.html",                    desc:"Atmospheric subterranean platformer exploring crystal caves.", newTab:false, download:true },
    { title:"Angry Birds Space",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clangry-birdsspace.html",                desc:"Zero-gravity physics slingshot around planet gravities.", newTab:false, download:true },
    { title:"Angry Birds 2",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clangrybirds2.html",                    desc:"Slingshot birds at pig fortresses in multi-stage levels.", newTab:false, download:true },
    { title:"Angry Birds Frenzy",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clangrybirdsslingshotfrenzy.html",      desc:"Fast slingshot arcade destroying pig defenses.", newTab:false, download:true },
    { title:"Animal Crossing",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clanimalcrossing.html",                 desc:"Relaxing village life fishing, bug catching, and decorating.", newTab:false, download:true },
    { title:"Animal Forest (N64)",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clanimalforestn64.html",               desc:"Original Japanese N64 village life simulation.", newTab:false, download:true },
    { title:"Ann's Super Mario Bros",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clannsmb.html",                          desc:"Custom Mario platformer with creative new level designs.", newTab:false, download:true },
    { title:"Another World",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clanotherworld.html",                    desc:"Cinematic sci-fi platformer on a hostile alien world.", newTab:false, download:true },
    { title:"Antarctic Tycoon",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clantarttycoon.html",                   desc:"Build and manage an arctic research outpost.", newTab:false, download:true },
    { title:"Antimatter Dimensions",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clantimatterdimensions.html",            desc:"Deep exponential incremental idle puzzle game.", newTab:false, download:true },
    { title:"Antipathy",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clantipathy.html",                      desc:"Dark story adventure with atmospheric choices.", newTab:false, download:true },
    { title:"Apes vs Helium",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clapesvshelium.html",                    desc:"Float with helium balloons fighting funny ape enemies.", newTab:false, download:true },
    { title:"Apotris",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clapotris.html",                         desc:"Sleek customizable block-stacking puzzle game.", newTab:false, download:true },
    { title:"Arcade Volleyball",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarcadevolley.html",                    desc:"Retro 2D head-to-head volleyball arcade.", newTab:false, download:true },
    { title:"Arceus Legend",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarceuslegend.html",                   desc:"Pokemon RPG fan adventure with strategic battles.", newTab:false, download:true },
    { title:"Archesspelago",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarchesspelago.html",                  desc:"Physics island building puzzle game connecting archipelagos.", newTab:false, download:true },
    { title:"Arena",                     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarena.html",                           desc:"Gladiatorial survival combat upgrading armor and weapons.", newTab:false, download:true },
    { title:"Armor Mayhem 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarmormayhem2.html",                   desc:"Futuristic tactical arena shooter with customizable gear.", newTab:false, download:true },
    { title:"Arthur's Nightmare",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clarthursnightmare.html",               desc:"Survival horror staying alert against creepy Arthur characters.", newTab:false, download:true },
    { title:"As Duty Demands",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clasdutydemands.html",                  desc:"Tactical squad shooter executing high-stakes missions.", newTab:false, download:true },
    { title:"Assessment Examination",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/classessmentexamination.html",         desc:"Surreal psychological logic quiz under creepy pressure.", newTab:false, download:true },
    { title:"Classroom Maxxing",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/classroommaxxing.html",                 desc:"School life simulator maximizing student stats and clout.", newTab:false, download:true },
    { title:"Asteroids",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clasteroids.html",                      desc:"Classic space arcade shooter blasting space rocks.", newTab:false, download:true },
    { title:"Asteroids Arcade",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clasteroidsarcade.html",                desc:"Authentic arcade cabinet vector space shooter.", newTab:false, download:true },
    { title:"Astro's Dreamland",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clAstrosDreamland.html",                desc:"Charming dream-world platformer collecting stardust.", newTab:false, download:true },
    { title:"Astyanax",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clastynax.html",                         desc:"Epic fantasy arcade warrior game slaying monsters.", newTab:false, download:true },
    { title:"Atari Adventure",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clatariadventure.html",                  desc:"Nostalgic 1980 Atari quest searching for enchanted chalices.", newTab:false, download:true },
    { title:"Avalanche",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clavalanche.html",                      desc:"Downhill runner dodging falling rocks and avalanches.", newTab:false, download:true },
    { title:"Avia Masters",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claviamasters.html",                     desc:"Pilot fighter planes through dogfights and air strikes.", newTab:false, download:true },
    { title:"Avia Masters Buggy",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claviamastersbuggy.html",                desc:"Drive armed off-road buggies through assault tracks.", newTab:false, download:true },
    { title:"Awesome Pirates",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clAwesomePirates.html",                 desc:"Defend pirate island fortress from navy fleets with cannons.", newTab:false, download:true },
    { title:"Awesome Planes",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clawesomeplanes.html",                  desc:"Upgradeable plane dogfighting shooting down enemy armadas.", newTab:false, download:true },
    { title:"Awesome Tanks",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clawesometanks.html",                   desc:"Top-down tank battles customizing weapons and lasers.", newTab:false, download:true },
    { title:"Awesome Tanks 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clawesometanks2.html",                  desc:"Expanded tank battle sequel with more weapons and upgrades.", newTab:false, download:true },
    { title:"Ax Battler",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claxbattler.html",                      desc:"Golden Axe spin-off fantasy RPG quest.", newTab:false, download:true },
    { title:"Axis Football League",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/claxisfootballleague.html",             desc:"Tactical American football game calling plays and rushing touchdowns.", newTab:false, download:true },
    { title:"B3313 Liminal Mario",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clB3313.html",                           desc:"Surreal Mario 64 romhack exploring infinite liminal mazes.", newTab:false, download:true },
    { title:"B3313 Unabandoned",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clb3313unabandonedA2.html",             desc:"Expanded build of the creepy liminal Mario 64 mod.", newTab:false, download:true },
    { title:"B3313 v1.02",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clb3313v102.html",                      desc:"Classic build of the famous B3313 Mario experience.", newTab:false, download:true },
    { title:"Baby Kaizo",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbabykaizo.html",                       desc:"Beginner-friendly kaizo Mario platformer teaching precise jumps.", newTab:false, download:true },
    { title:"Backrooms 2D",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbackrooms2D.html",                     desc:"Explore infinite yellow corridors dodging spooky entities.", newTab:false, download:true },
    { title:"Backyard Baseball",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbackyardbaseball.html",                desc:"Nostalgic arcade baseball with Pablo Sanchez.", newTab:false, download:true },
    { title:"Backyard Baseball '09",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbackyardbaseball09.html",              desc:"Updated arcade baseball featuring custom teams and derbies.", newTab:false, download:true },
    { title:"Backyard Baseball '10",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbackyardbaseball10.html",              desc:"Arcade baseball with special power-up pitches.", newTab:false, download:true },
    { title:"Backyard Football",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbackyardfootball.html",              desc:"Arcade youth football running trick plays and scoring goals.", newTab:false, download:true },
    { title:"Bad Bodyguards",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadbodyguards.html",                  desc:"Protect VIP targets from wacky assassin assaults.", newTab:false, download:true },
    { title:"Bad Ice-Cream",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadicecream.html",                     desc:"Collect fruit while creating ice walls in 2-player arcade fun.", newTab:false, download:true },
    { title:"Bad Ice-Cream 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadicecream2.html",                    desc:"Freeze fruits, dodge monsters, and navigate icy mazes.", newTab:false, download:true },
    { title:"Bad Ice-Cream 3",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadicecream3.html",                    desc:"Final chapter of the ice-cream arcade maze series.", newTab:false, download:true },
    { title:"Bad Parenting",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadparenting.html",                    desc:"Short psychological horror puzzle exposing household secrets.", newTab:false, download:true },
    { title:"Bad Piggies",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadpiggies.html",                      desc:"Build crazy contraptions to transport pigs safely.", newTab:false, download:true },
    { title:"Bad Piggies Latest",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadpiggieslatest.html",                desc:"Updated edition of pig contraption physics engineering.", newTab:false, download:true },
    { title:"Bad Time Simulator",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbadtimesimulator.html",                desc:"Challenging Undertale Sans boss fight simulator.", newTab:false, download:true },
    { title:"Balatro (GBA)",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbalatrogba.html",                      desc:"Portable demake of the famous poker roguelike deck builder.", newTab:false, download:true },
    { title:"Baldi Caseoh Edition",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbaldicaseoh.html",                     desc:"Meme horror crossover navigating school while fleeing Caseoh.", newTab:false, download:true },
    { title:"Baldi Epstein",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbaldiepstein.html",                    desc:"Meme survival horror avoiding Baldi in dark corridors.", newTab:false, download:true },
    { title:"Baldi's Basics Classic",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbaldisbasics.html",                    desc:"Original educational horror game with impossible math.", newTab:false, download:true },
    { title:"Baldi's Fun New School",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbaldisfunnewschoolultimate.html",    desc:"Custom modded Baldi packed with mini-games.", newTab:false, download:true },
    { title:"Ballistic",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clballistic.html",                       desc:"Clear color tiles before they reach the bottom.", newTab:false, download:true },
    { title:"Balloon Fight",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clballoonfight.html",                    desc:"Classic NES arcade popping enemy balloons while floating.", newTab:false, download:true },
    { title:"Ballz",                     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clballz.html",                           desc:"Brick breaker shooting bouncing balls at numbered blocks.", newTab:false, download:true },
    { title:"Banbuds Mod",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbanbuds.html",                         desc:"Rhythm music mod with custom tracks and characters.", newTab:false, download:true },
    { title:"Bandit Gunslingers",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbanditgunslingers.html",              desc:"Wild West arcade shooter taking down outlaw gangs.", newTab:false, download:true },
    { title:"Banjo-Kazooie",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbanjokazooie.html",                    desc:"N64 3D platformer classic collecting Jiggies and Notes.", newTab:false, download:true },
    { title:"Banjo-Tooie",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbanjotooie.html",                      desc:"Expanded N64 platforming sequel across massive worlds.", newTab:false, download:true },
    { title:"Barry Has A Secret",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbarryhasasecret.html",                 desc:"Stealth horror uncovering Barry's dark house mysteries.", newTab:false, download:true },
    { title:"Bart Blast",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbartblast.html",                       desc:"Simpsons action firing slingshots and dodging hazards.", newTab:false, download:true },
    { title:"Baseball (NES)",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbaseballnes.html",                     desc:"8-bit sports game pitching, hitting, and fielding.", newTab:false, download:true },
    { title:"Basketball FRVR",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbasketballfrvr.html",                  desc:"Simple and addictive arcade basketball shooting hoop game.", newTab:false, download:true },
    { title:"Basketball Legends",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbasketballlegends.html",               desc:"2D basketball featuring legendary players and special dunks.", newTab:false, download:true },
    { title:"Basketball Superstars",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbasketballsuperstars.html",            desc:"Train your basketball player in career mode.", newTab:false, download:true },
    { title:"Basket Battle",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbasketbattle.html",                    desc:"Physics 1v1 basketball shooting and blocking shots.", newTab:false, download:true },
    { title:"Battle Karts",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbattlekarts.html",                     desc:"3D kart racing combat picking up power-ups.", newTab:false, download:true },
    { title:"Battlezone",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbattlezone.html",                      desc:"Vector arcade classic first-person 3D tank combat.", newTab:false, download:true },
    { title:"Bazooka Boy",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbazookaboy.html",                      desc:"Demolish bases and soldiers using rocket launchers.", newTab:false, download:true },
    { title:"Basketball Legend",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbballlegend.html",                     desc:"Arcade basketball shooting clean hoops for high scores.", newTab:false, download:true },
    { title:"Beach Boxing Sim",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbeachboxingsim.html",                  desc:"Physics beach boxing throwing wild knockouts.", newTab:false, download:true },
    { title:"Beamrider",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbeamrider.html",                      desc:"Retro sci-fi space grid shooter zapping alien craft.", newTab:false, download:true },
    { title:"Bearbarians",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbearbarians.html",                     desc:"Customizable 2D arena fighter with warrior bears.", newTab:false, download:true },
    { title:"Bearsus",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbearsus.html",                         desc:"One-button wrestling game with heavy bears.", newTab:false, download:true },
    { title:"Bejeweled Twist (DS)",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbejeweledtwistds.html",               desc:"Gem puzzle rotating 2x2 grids for chain reactions.", newTab:false, download:true },
    { title:"Bejeweled Twist Web",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbejeweledtwistflash.html",            desc:"Classic web gem-spinning match puzzle game.", newTab:false, download:true },
    { title:"Ben 10: Alien Force",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clben10alienforce.html",                 desc:"Transform into alien forms to combat extraterrestrials.", newTab:false, download:true },
    { title:"Ben 10: Protector of Earth",url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clben10protector.html",                  desc:"Action brawler using Omnitrix alien transformations.", newTab:false, download:true },
    { title:"Ben 10 Racing",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clben10racing.html",                     desc:"Kart racing featuring Ben 10 characters and powers.", newTab:false, download:true },
    { title:"BEN Drowned Horror",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbendrowned.html",                      desc:"Famous creepy Zelda Majora's Mask horror mystery.", newTab:false, download:true },
    { title:"BFDIA 5b",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbfdia5b.html",                         desc:"Puzzle platformer based on Battle for Dream Island.", newTab:false, download:true },
    { title:"BFDI Branches",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBFDIBranches.html",                    desc:"Fan puzzle platformer exploring the object show universe.", newTab:false, download:true },
    { title:"Big Flappy Tower",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbigflappytowertinysquare.html",       desc:"Scale a massive tower to save your pineapple.", newTab:false, download:true },
    { title:"Big Time Butter Baron",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBig_Time_Butter_Baron.html",           desc:"Physics platformer navigating slippery butter obstacles.", newTab:false, download:true },
    { title:"Binding of Isaac: Sheep",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbindingofisaccsheeptime.html",        desc:"Custom Isaac demake mod battling through rooms.", newTab:false, download:true },
    { title:"Bitburner",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbitburner.html",                       desc:"Cyberpunk incremental RPG writing real JS to hack servers.", newTab:false, download:true },
    { title:"Blackjack Classic",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblackjack.html",                       desc:"Casino blackjack simulator testing card strategy.", newTab:false, download:true },
    { title:"Blackjack Deluxe",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblackjackhhhh.html",                   desc:"Card game betting, splitting, and doubling down.", newTab:false, download:true },
    { title:"Black Knight",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblackknight.html",                     desc:"Knight brawler slashing dark medieval fantasy forces.", newTab:false, download:true },
    { title:"Blackout",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblackout.html",                        desc:"Suspenseful sci-fi horror exploring a dark space facility.", newTab:false, download:true },
    { title:"Blaze Drifter",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblazedrifter.html",                    desc:"High-speed 3D car drifting around mountain curves.", newTab:false, download:true },
    { title:"Blightborne",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblightborne.html",                     desc:"Action RPG exploring dungeons and fighting corrupt beasts.", newTab:false, download:true },
    { title:"Blob's Story 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblobsstory2.html",                     desc:"Physics puzzle adventure cutting ropes and bouncing blobs.", newTab:false, download:true },
    { title:"Block Blast v2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblockblastv2.html",                    desc:"Grid block puzzle matching color blocks to clear lines.", newTab:false, download:true },
    { title:"Blocky Demolition Derby",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblockydemolitionderby.html",          desc:"Crash blocky cars into rivals in an explosive arena.", newTab:false, download:true },
    { title:"Blood (DOS)",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblood.html",                           desc:"Retro FPS blasting cultists with voodoo dolls and guns.", newTab:false, download:true },
    { title:"Bloons",                    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloons.html",                          desc:"Classic puzzle shooter popping balloons with dart monkeys.", newTab:false, download:true },
    { title:"Bloons 2",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloons2.html",                         desc:"Dozens of new balloon puzzle levels with special bloons.", newTab:false, download:true },
    { title:"Bloons Player Pack 1",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonspp1.html",                       desc:"Community level pack testing dart monkey precision.", newTab:false, download:true },
    { title:"Bloons Player Pack 2",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonspp2.html",                       desc:"Challenging player-created balloon puzzle pack.", newTab:false, download:true },
    { title:"Bloons Player Pack 3",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonspp3.html",                       desc:"Tricky balloon puzzles requiring strategic dart bounces.", newTab:false, download:true },
    { title:"Bloons Player Pack 4",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonspp4.html",                       desc:"Expanded player pack filled with bloon puzzles.", newTab:false, download:true },
    { title:"Bloons Player Pack 5",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonspp5.html",                       desc:"Ultimate balloon popping puzzle pack for bloons experts.", newTab:false, download:true },
    { title:"Bloons TD 1",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonsTD1.html",                      desc:"Original tower defense placing monkeys to stop bloons.", newTab:false, download:true },
    { title:"Bloons TD 2",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonsTD2.html",                      desc:"Tower defense sequel with new towers and maps.", newTab:false, download:true },
    { title:"Bloons TD 3",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonsTD3.html",                      desc:"Classic bloon defense introducing super monkeys and hazards.", newTab:false, download:true },
    { title:"Bloons TD 4",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonsTD4.html",                      desc:"Expanded tower defense with multiple modes and upgrades.", newTab:false, download:true },
    { title:"Bloons TD 5",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloonsTD5.html",                      desc:"Massive tower defense with special agents and upgrades.", newTab:false, download:true },
    { title:"Bloxorz",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbloxorz.html",                         desc:"Roll a 3D block into square holes in tile puzzles.", newTab:false, download:true },
    { title:"Blumgi Rocket",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clblumgirocket.html",                    desc:"Rocket-powered car driving launching across hills.", newTab:false, download:true },
    { title:"BMX 2",                     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBMX2.html",                            desc:"Perform extreme stunts and backflips on stunt bikes.", newTab:false, download:true },
    { title:"Boba Simulator",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbobasimulator.html",                   desc:"Manage your boba tea shop brewing custom drinks.", newTab:false, download:true },
    { title:"Bomberman",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbomberman.html",                        desc:"Classic NES maze game trapping enemies with bombs.", newTab:false, download:true },
    { title:"Bomberman II",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbomberman2.html",                       desc:"Bomber puzzle sequel with multi-stage arenas.", newTab:false, download:true },
    { title:"Bomberman Hero",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbombermanhero.html",                   desc:"3D N64 platformer saving Princess Millian.", newTab:false, download:true },
    { title:"Bomberman World",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbombermanworld.html",                  desc:"Arcade bomber game battling rivals with strategic blasts.", newTab:false, download:true },
    { title:"Bonanza Bros",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBonanza-Bros.html",                     desc:"Co-op stealth game stealing valuables and dodging guards.", newTab:false, download:true },
    { title:"Bonkers (SNES)",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbonkerssnes.html",                    desc:"Disney platformer investigating clues and catching toon rogues.", newTab:false, download:true },
    { title:"Boom Slingers",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clboomslingers.html",                    desc:"Turn-based physics artillery launching projectiles.", newTab:false, download:true },
    { title:"Breath of the Wild (DS)",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbotwds.html",                         desc:"Demake edition of Zelda BOTW for Nintendo DS style.", newTab:false, download:true },
    { title:"Bouncy Basketball",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbouncybasketball.html",               desc:"One-button arcade basketball slamming dunks.", newTab:false, download:true },
    { title:"Bounty of One",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBountyOfOne.html",                     desc:"Casual roguelite bullet heaven defeating outlaw swarms.", newTab:false, download:true },
    { title:"Bowmaster",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbowmaster.html",                       desc:"Archery castle defense using elemental arrows.", newTab:false, download:true },
    { title:"Boxhead 2 Play Rooms",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clboxhead2playrooms.html",               desc:"Top-down zombie shooter with shotguns and lasers.", newTab:false, download:true },
    { title:"Boxhead The Nightmare",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clboxheadnightmare.html",                desc:"Battle endless waves of box zombies with turrets.", newTab:false, download:true },
    { title:"Boxing Live 2",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clboxinglive-2.html",                    desc:"Train a custom boxer fighting for championship belts.", newTab:false, download:true },
    { title:"Boxing Live 2 Expanded",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clboxinglive2.html",                     desc:"Boxing career simulator customizing fighter stats.", newTab:false, download:true },
    { title:"Brainrot Clicker",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbrainrot.html",                        desc:"Idle clicker tapping for internet brainrot energy.", newTab:false, download:true },
    { title:"Brawl Simulator 3D",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbrawlsimulator3d.html",               desc:"3D arena simulator fighting brawlers with special moves.", newTab:false, download:true },
    { title:"Brawl Stars Web",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBrawlstars.html",                      desc:"Action arena brawler picking heroes and battle modes.", newTab:false, download:true },
    { title:"Bread Skate",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbreadskate.html",                      desc:"Skateboarding loaf of bread doing kickflips and grinds.", newTab:false, download:true },
    { title:"Bridge Race",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbridgerace.html",                      desc:"Collect bricks and build bridges fast to beat rivals.", newTab:false, download:true },
    { title:"Brotato - NOT WORKING",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/Brotato.html",                             desc:"Top-down arena shooter wielding up to 6 weapons at once.", newTab:false, download:true },
    { title:"Bloons TD Original",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBTD1.html",                            desc:"The original classic bloon tower defense.", newTab:false, download:true },
    { title:"Bloons TD 5 Deluxe",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbtd5.html",                            desc:"Tower defense with all monkey upgrades unlocked.", newTab:false, download:true },
    { title:"Bubble Tanks",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbubbletanks.html",                     desc:"Grow your bubble tank by destroying enemy bubbles.", newTab:false, download:true },
    { title:"Bubble Tanks Arenas",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbubbletanksarenas.html",              desc:"Bubble tank battle arena fighting mega boss bubbles.", newTab:false, download:true },
    { title:"Bubble Tanks TD",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbubbletankstd.html",                  desc:"Tower defense building custom bubble towers along paths.", newTab:false, download:true },
    { title:"Bubsy",                     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbubsy.html",                           desc:"90s platformer guiding Bubsy the bobcat through stages.", newTab:false, download:true },
    { title:"Buck Bumble",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbuckbumble.html",                      desc:"N64 shooter flying a cyborg bee fighting insect armies.", newTab:false, download:true },
    { title:"BuildNow GG Arena",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbuildnowgg.html",                      desc:"1v1 building shooter practicing editing and combat.", newTab:false, download:true },
    { title:"Bullet Force",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbulletforce.html",                     desc:"FPS online multiplayer tactical shooter.", newTab:false, download:true },
    { title:"Bunzo Bunny Horror",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbunzobunny.html",                      desc:"Toy factory horror avoiding creepy Bunzo Bunny.", newTab:false, download:true },
    { title:"BurgerTime",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clburgertime.html",                      desc:"Arcade classic assembling burgers while dodging sausages.", newTab:false, download:true },
    { title:"Burrito Bison: Launcha",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clburritobisonlaunchalibre.html",       desc:"Launch Burrito Bison into gummy bear swarms.", newTab:false, download:true },
    { title:"Bushido Blade",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clbushidoblade.html",                    desc:"Realistic 1-hit kill sword combat fighting samurai duels.", newTab:false, download:true },
    { title:"Buster Jam",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clBusterJam.html",                       desc:"Physics arcade jamming balls through scoring targets.", newTab:false, download:true },
    { title:"Cactus McCoy",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcactusmccoy.html",                     desc:"Cursed cactus cowboy punching through outlaw gangs.", newTab:false, download:true },
    { title:"Cactus McCoy 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcactusmccoy2.html",                    desc:"Journey finding ancient treasure relics and fighting bandits.", newTab:false, download:true },
    { title:"Call of Battle",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcallofbattle.html",                    desc:"FPS tactical war shooter battling soldier squads.", newTab:false, download:true },
    { title:"Camilla",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcamilla.html",                        desc:"Atmospheric story game exploring dark gothic secrets.", newTab:false, download:true },
    { title:"Candy Box",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcandybox1.html",                       desc:"Text-based ASCII RPG harvesting candies and slaying dragons.", newTab:false, download:true },
    { title:"Cannon Fodder",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcannonfodder.html",                    desc:"Tactical squad action game guiding soldiers through war.", newTab:false, download:true },
    { title:"Captain Lang",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcaptainlang.html",                     desc:"Arcade platformer fighting pirate crews on high seas.", newTab:false, download:true },
    { title:"CaptchaWare",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcaptchaware.html",                    desc:"Solve increasingly frantic bot-verification puzzles.", newTab:false, download:true },
    { title:"Car Eats Car 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcareatscar2deluxe.html",              desc:"Drive monster cars and blast rival vehicles with bombs.", newTab:false, download:true },
    { title:"Carnival Games (DS)",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcarnivalgamesds.html",                desc:"Classic carnival mini-games winning prizes and scores.", newTab:false, download:true },
    { title:"Car Ramp vs Police",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcarrampvspolicechase.html",          desc:"Launch off ramps while evading police cruisers.", newTab:false, download:true },
    { title:"Castaway RPG",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastaway.html",                        desc:"Stranded island RPG fighting monsters and crafting gear.", newTab:false, download:true },
    { title:"Castlevania: Bloodlines",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastlebloodline.html",                desc:"Genesis vampire-slaying action platformer.", newTab:false, download:true },
    { title:"Castlevania: Moon",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastlecircleofmoon.html",             desc:"GBA Metroidvania using DSS cards to slay demons.", newTab:false, download:true },
    { title:"Castlevania II",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastlevania2.html",                   desc:"Explore Transylvania gathering relics to lift a curse.", newTab:false, download:true },
    { title:"Castlevania: Aria of Sorrow",url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastlevaniaariaofsorrow.html",         desc:"Master the power of souls in this famous GBA masterpiece.", newTab:false, download:true },
    { title:"Castlevania: Dawn of Sorrow",url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcastlevaniadawnofsorrow.html",         desc:"DS Metroidvania sequel battling cultists with soul magic.", newTab:false, download:true },
    { title:"Cave Crawler",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcavecrawler.html",                     desc:"Atmospheric subterranean platformer exploring crystal caves.", newTab:false, download:true },
    { title:"Celeste Classic",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clceleste.html",                        desc:"Original PICO-8 platformer climbing with precise dashes.", newTab:false, download:true },
    { title:"Celeste 2: Lani's Trek",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clceleste2.html",                       desc:"PICO-8 sequel featuring a grappling hook mechanic.", newTab:false, download:true },
    { title:"Celeste Mario DX",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcelestemariodx.html",                 desc:"Mario crossover incorporating Celeste dash mechanics.", newTab:false, download:true },
    { title:"Celia's ROM Hack",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clCeliasStupidROMHack.html",            desc:"Custom Super Mario World mod with creative puzzles.", newTab:false, download:true },
    { title:"Cellar Door",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcellardoor.html",                      desc:"Psychological horror mystery in a dark house.", newTab:false, download:true },
    { title:"Cell to Singularity",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clCellToSingularity.html",              desc:"Evolutionary idle clicker guiding life from cells to space.", newTab:false, download:true },
    { title:"Centipede Arcade",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcentipedearcade.html",                desc:"Classic arcade shooter blasting centipedes and spiders.", newTab:false, download:true },
    { title:"Chain of Memories",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchainofmemories.html",                desc:"GBA card-based Kingdom Hearts RPG in Castle Oblivion.", newTab:false, download:true },
    { title:"Chaos Faction 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchaosfaction2.html",                  desc:"Platform brawler with custom weapons and campaign modes.", newTab:false, download:true },
    { title:"Cheese is the Reason",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcheeseisthereason.html",              desc:"Physics platformer guiding mice through maze traps for cheese.", newTab:false, download:true },
    { title:"Cheshire in Chatroom",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcheshireinachatroom.html",            desc:"Text mystery chatting with strange online entities.", newTab:false, download:true },
    { title:"Chess Classic",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchess.html",                          desc:"Play chess against customizable AI engines.", newTab:false, download:true },
    { title:"Chicken CS",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clChickenCS.html",                      desc:"First-person shooter fighting rogue farm chickens.", newTab:false, download:true },
    { title:"Chip's Challenge",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchipschallenge.html",                 desc:"Classic puzzle adventure collecting computer chips.", newTab:false, download:true },
    { title:"Choro Q Wonderful",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchoroqwonderful.html",                desc:"Toy car RPG racing and customizing vehicles.", newTab:false, download:true },
    { title:"Chrono Trigger",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchronotrigger.html",                  desc:"Timeless 16-bit JRPG traveling through time.", newTab:false, download:true },
    { title:"Chuzzle",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clchuzzle.html",                        desc:"Match fuzzy Chuzzles by sliding rows and columns.", newTab:false, download:true },
    { title:"Civiballs",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clciviballs.html",                      desc:"Cut ropes to drop colored balls into matching vases.", newTab:false, download:true },
    { title:"Clash N Slash",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclashnslash.html",                    desc:"Defend planets in 360-degree orbital combat.", newTab:false, download:true },
    { title:"Claymore",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclaymore.html",                       desc:"Dark fantasy sword brawler slicing demon Yoma.", newTab:false, download:true },
    { title:"Clay Uncraft",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclayuncraft.html",                    desc:"Break clay structures block by block in destruction puzzles.", newTab:false, download:true },
    { title:"Clear Vision",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclearvision.html",                     desc:"Sniper story game reading contract hit notes.", newTab:false, download:true },
    { title:"Clear Vision 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclearvision2.html",                    desc:"Execute assassination contracts following Tyler's story.", newTab:false, download:true },
    { title:"Clear Vision 3",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclearvision3.html",                    desc:"Calculate wind speed and distance for clean sniper kills.", newTab:false, download:true },
    { title:"Clear Vision 4",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclearvision4.html",                    desc:"Sniper story continuation with realistic rifle ballistics.", newTab:false, download:true },
    { title:"Clear Vision 5",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclearvision5.html",                    desc:"Final sniper story taking down corrupt syndicate targets.", newTab:false, download:true },
    { title:"Climb for Brainrots",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclimbforbrainrots.html",              desc:"Parkour climbing reaching high towers collecting memes.", newTab:false, download:true },
    { title:"Madness Ambulation",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclmadnessambulation.html",            desc:"Drive armed vehicles shooting desert ambushers.", newTab:false, download:true },
    { title:"Clover Platformer",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclover.html",                         desc:"Puzzle platformer utilizing emotional power-ups.", newTab:false, download:true },
    { title:"Clubby the Seal",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclubbytheseal.html",                   desc:"Seal action brawler fighting back against polar hunters.", newTab:false, download:true },
    { title:"Clu Clu Land",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clclucluland.html",                      desc:"Swing around pegs to reveal hidden gold pictures.", newTab:false, download:true },
    { title:"Coal LCD Demo",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoalllcdemo.html",                     desc:"Retro handheld LCD simulator with nostalgic gameplay.", newTab:false, download:true },
    { title:"COD Black Ops (DS)",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcodblackopp.html",                     desc:"Portable 3D military FPS completing covert missions.", newTab:false, download:true },
    { title:"Codename Gordon",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcodenamegordon.html",                 desc:"2D side-scrolling Half-Life platforming shooter.", newTab:false, download:true },
    { title:"CoderCraft",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcodercraft.html",                      desc:"Sandbox building combining block crafting with JS code.", newTab:false, download:true },
    { title:"Cold Front",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoldfront.html",                       desc:"Atmospheric narrative horror in snowy wilderness.", newTab:false, download:true },
    { title:"Cold Pines",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoldpines.html",                       desc:"Survive in freezing pine forests dodging stalkers.", newTab:false, download:true },
    { title:"Color Burst 3D",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcolorburst3d.html",                    desc:"High-speed 3D tunnel runner matching color spheres.", newTab:false, download:true },
    { title:"Color Match",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcolormatch.html",                      desc:"Fast color sorting puzzle matching falling blocks.", newTab:false, download:true },
    { title:"Command & Conquer",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcommandandconquer.html",               desc:"Classic RTS commanding GDI or Brotherhood of Nod armies.", newTab:false, download:true },
    { title:"Commander Keen 4",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcommanderkeen4.html",                  desc:"Nostalgic MS-DOS platformer hopping on pogo sticks.", newTab:false, download:true },
    { title:"Commander Keen 5",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcommanderkeen5.html",                  desc:"Destroy the secret Armageddon machine on space stations.", newTab:false, download:true },
    { title:"Commander Keen 6",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcommanderkeen6.html",                  desc:"Save Keen's babysitter in this MS-DOS adventure.", newTab:false, download:true },
    { title:"Confronting Yourself",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clconfrontingyourself.html",             desc:"Sonic rhythm battle facing off against dark mirrors.", newTab:false, download:true },
    { title:"Conker's Bad Fur Day",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clconkersbadfurday.html",               desc:"N64 mature comedy 3D platformer following Conker.", newTab:false, download:true },
    { title:"Contra (NES)",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcontra.html",                         desc:"Legendary 8-bit run-and-gun fighting alien forces.", newTab:false, download:true },
    { title:"Super Contra 3",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcontra3.html",                        desc:"SNES shoot-'em-up battling alien invasions.", newTab:false, download:true },
    { title:"Cookie Clicker Classic",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcookieclicker.html",                   desc:"Original web idle clicker baking cookies.", newTab:false, download:true },
    { title:"Cookie Clicker Modded",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcookieclickermodmenu.html",            desc:"Cookie clicker with unlocked cheat menus.", newTab:false, download:true },
    { title:"Cooking Mama (DS)",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcookingmama.html",                     desc:"Chop, fry, and bake recipes with stylus mini-games.", newTab:false, download:true },
    { title:"Cooking Mama 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcookingmama2.html",                    desc:"Prepare international dishes and earn stars from Mama.", newTab:false, download:true },
    { title:"Cory in the House (DS)",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoryinthehouse.html",                  desc:"Famous DS adventure stealth game based on the show.", newTab:false, download:true },
    { title:"Count Masters",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcountmastersstickmangames.html",      desc:"Guide stickman crowds through math multiplier gates.", newTab:false, download:true },
    { title:"Cover Orange",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorange.html",                     desc:"Protect cute oranges from toxic rain cloud storms.", newTab:false, download:true },
    { title:"Cover Orange 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorange2.html",                    desc:"New physics levels placing barrels to save oranges.", newTab:false, download:true },
    { title:"Cover Orange: Gangsters",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorangejourneygangsters.html",     desc:"Mafia-themed cover orange physics puzzles.", newTab:false, download:true },
    { title:"Cover Orange: Knights",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorangejourneyknights.html",       desc:"Medieval edition protecting knight oranges with shields.", newTab:false, download:true },
    { title:"Cover Orange: Pirates",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorangejourneypirates.html",       desc:"Protect oranges from cannon rain on pirate islands.", newTab:false, download:true },
    { title:"Cover Orange: Space",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorangejourneyspace.html",         desc:"Zero-gravity orange puzzle protection in space.", newTab:false, download:true },
    { title:"Cover Orange Players Pack", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcoverorangeplayerspack.html",        desc:"Community created physics puzzle pack.", newTab:false, download:true },
    { title:"Crank It",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrankit.html",                         desc:"Precision timing wheel puzzle cranking mechanisms.", newTab:false, download:true },
    { title:"Crash Bandicoot 2",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrash2.html",                          desc:"Collect 25 Crystals and defeat Dr. Neo Cortex.", newTab:false, download:true },
    { title:"Crash Bandicoot 3: Warped", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrash3.html",                          desc:"Time-traveling platforming riding jetskis and tigers.", newTab:false, download:true },
    { title:"Crash Bandicoot 1",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrashbandicoot.html",                  desc:"Spin, jump, and break crates to save Tawna.", newTab:false, download:true },
    { title:"Crash Bash",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrashbash.html",                       desc:"PS1 party battle game with Crash characters.", newTab:false, download:true },
    { title:"Crash Team Racing",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrashteamracing.html",                 desc:"High-speed kart racer drifting around tracks.", newTab:false, download:true },
    { title:"Crazy Cattle 3D",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazycattle3d.html",                  desc:"Farm physics game herding wild cattle through hazards.", newTab:false, download:true },
    { title:"Crazy Climber",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazyclimber.html",                   desc:"Scale skyscrapers while dodging falling obstacles.", newTab:false, download:true },
    { title:"Crazy Frog Racer",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazyfrogracer.html",                  desc:"Race hovercrafts as Crazy Frog across wild tracks.", newTab:false, download:true },
    { title:"Crazy Motorcycle",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazymotorcycle.html",                 desc:"Perform motorcycle stunts across obstacle courses.", newTab:false, download:true },
    { title:"Crazy Penguin Catapult",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazypenguincatapult.html",           desc:"Launch penguins to bounce through polar bear fortresses.", newTab:false, download:true },
    { title:"Crazy Plane Landing",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazyplanelanding.html",              desc:"Pilot and crash-land planes onto bizarre strips.", newTab:false, download:true },
    { title:"Crazy Taxi (GBA)",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrazytaxigba.html",                    desc:"Pick up passengers and pull off crazy stunt tips.", newTab:false, download:true },
    { title:"Creature Card Idle",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcreaturecardidle.html",               desc:"Idle card game summoning creatures to defeat waves.", newTab:false, download:true },
    { title:"Creeper World 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcreeperworld2.html",                   desc:"Tactical defense fighting rising liquid creeper streams.", newTab:false, download:true },
    { title:"Creepy Internet Stories",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcreepyinternetstories.html",         desc:"Interactive horror story reading dark urban legends.", newTab:false, download:true },
    { title:"Creepy Night Funkin'",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcreepynightfunkin.html",               desc:"Horror FNF mod battling spooky internet urban legends.", newTab:false, download:true },
    { title:"Crimson Madness",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrimsonmadness.html",                  desc:"Fast arena brawler slashing red monster waves.", newTab:false, download:true },
    { title:"Crossy Road",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrossyroad.html",                      desc:"Endless arcade hopper dodging highways and trains.", newTab:false, download:true },
    { title:"Crunchball 3000",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcrunchball3000.html",                  desc:"Futuristic violent sports passing, tackling, and scoring.", newTab:false, download:true },
    { title:"Crystal Castles",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clCrystalCastles.html",                  desc:"Guide Bentley Bear through gem-filled isometric castles.", newTab:false, download:true },
    { title:"Counter-Strike 1.6 Web",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcs6.html",                             desc:"Classic tactical FPS Terrorists vs Counter-Terrorists.", newTab:false, download:true },
    { title:"Counter-Strike (DS)",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcsds.html",                            desc:"Portable 3D CS combat designed for dual screens.", newTab:false, download:true },
    { title:"CTGP Nitro",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clctgpnitro.html",                       desc:"Custom Mario Kart DS mod with new tracks and models.", newTab:false, download:true },
    { title:"Curveball 3D",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcurveball.html",                       desc:"First-person 3D pong curving shots past AI opponents.", newTab:false, download:true },
    { title:"Customer Support Simulator",url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcustomersupport.html",                 desc:"Hilarious simulator managing absurd customer complaints.", newTab:false, download:true },
    { title:"Cut the Rope",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcuttherope.html",                      desc:"Feed sweet candy to Om Nom by cutting ropes.", newTab:false, download:true },
    { title:"Cut the Rope: Holiday",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcuttheropeholiday.html",               desc:"Festive holiday physics puzzle levels with Om Nom.", newTab:false, download:true },
    { title:"Cut the Rope: Time Travel", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcuttheropetimetravel.html",            desc:"Travel through historical eras feeding candy to Om Noms.", newTab:false, download:true },
    { title:"Cyber Sensation",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clcybersensation.html",                  desc:"Rhythm battle against cybernetic AI opponents in FNF.", newTab:false, download:true },
    { title:"Dad Game",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldadgame.html",                         desc:"Help dad navigate wacky household chores.", newTab:false, download:true },
    { title:"Dadish",                    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldadish.html",                          desc:"Charming platformer playing a radish father saving his kids.", newTab:false, download:true },
    { title:"Dad 'n Me",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldadnme.html",                          desc:"Classic Newgrounds beat-'em-up through playground bullies.", newTab:false, download:true },
    { title:"Daggerfall (DOS)",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldaggerfall.html",                      desc:"Epic open-world fantasy RPG exploring dungeons.", newTab:false, download:true },
    { title:"Dandy's World Clicker",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldandysworldclicker.html",            desc:"Idle clicker tapping to unlock toon characters.", newTab:false, download:true },
    { title:"Dash Arena",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldasharena.html",                       desc:"Fast 2D arena combat dashing through waves of bots.", newTab:false, download:true },
    { title:"Dash.io",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldashio.html",                          desc:"Navigate fast obstacle mazes collecting points.", newTab:false, download:true },
    { title:"Dashmetry",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clDashmetry.html",                       desc:"High-speed Geometry Dash rhythm platformer.", newTab:false, download:true },
    { title:"Date with Iraq",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldatewithiraq.html",                     desc:"Humorous visual novel following comedic choices.", newTab:false, download:true },
    { title:"DBZ Sniper",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldbsniper.html",                        desc:"Tactical DBZ sniper shooter protecting Earth.", newTab:false, download:true },
    { title:"DBZ Devolution",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldbzdevolution.html",                   desc:"2D Dragon Ball fighter with massive rosters.", newTab:false, download:true },
    { title:"DBZ Supersonic Warriors",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldbzsuperwarriorssonic.html",          desc:"Flight-based GBA DBZ fighting unleashing kamehamehas.", newTab:false, download:true },
    { title:"DBZ Warriors 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldbzwarriors2.html",                    desc:"Anime fighter using ki blasts and super combat.", newTab:false, download:true },
    { title:"DDLC 64",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clddlc64.html",                          desc:"N64 demake of Doki Doki Literature Club visual novel.", newTab:false, download:true },
    { title:"Dead Air",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadair.html",                         desc:"Radio broadcast horror mystery analyzing frequencies.", newTab:false, download:true },
    { title:"Dead Frontier: Outbreak",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadfrontieroutbreak.html",            desc:"Text-based tactical zombie apocalypse survival adventure.", newTab:false, download:true },
    { title:"Dead Frontier: Outbreak 2", url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadfrontieroutbreak2.html",           desc:"Choose-your-path zombie survival RPG in ruined cities.", newTab:false, download:true },
    { title:"Deadly Descent",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadlydescent.html",                   desc:"Downhill mountain biking dodging trees and cliffs.", newTab:false, download:true },
    { title:"Dead Seat",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadseat.html",                        desc:"Survival horror trapped inside a haunted theater seat.", newTab:false, download:true },
    { title:"Dead Zed",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadzed.html",                         desc:"Barricade your haven and shoot incoming zombie waves.", newTab:false, download:true },
    { title:"Dead Zed 2",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeadzed2.html",                        desc:"Manage survivors, find supplies, and shoot zombies.", newTab:false, download:true },
    { title:"Death Chase",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeathchase.html",                      desc:"Drive armed stunt cars through deadly obstacle courses.", newTab:false, download:true },
    { title:"Death Run",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeathrun.html",                        desc:"First-person parkour runner dodging lethal traps.", newTab:false, download:true },
    { title:"Decision",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldecision.html",                        desc:"Top-down zombie tactical shooter clearing city zones.", newTab:false, download:true },
    { title:"Decision 2",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldecision2.html",                       desc:"Upgrade rifles and turrets to reclaim urban zones.", newTab:false, download:true },
    { title:"Decision 3",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldecision3.html",                       desc:"Lead survivor squads and rebuild outposts in infected cities.", newTab:false, download:true },
    { title:"Decision Medieval",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldecisionmedieval.html",                desc:"Defend medieval kingdoms from undead armies.", newTab:false, download:true },
    { title:"Deeper Sleep",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeepersleep.html",                     desc:"Point-and-click horror puzzle in nightmare realms.", newTab:false, download:true },
    { title:"Deep Sleep",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeepsleep.html",                       desc:"Escape a lucid nightmare before shadowy creatures awaken.", newTab:false, download:true },
    { title:"Defender Arcade",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldefenderarcade.html",                 desc:"Classic space shooter protecting astronauts from aliens.", newTab:false, download:true },
    { title:"Deltarune",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeltarune.html",                       desc:"Toby Fox's acclaimed RPG in the Dark World.", newTab:false, download:true },
    { title:"Deltatraveler",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldeltatraveler.html",                   desc:"Fan Undertale/Deltarune RPG across alternate dimensions.", newTab:false, download:true },
    { title:"Demolition Derby",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldemolitionderbycrashracing.html",     desc:"Smash rival stock cars into scrap metal in arenas.", newTab:false, download:true },
    { title:"Demon Blade",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldemonblade.html",                      desc:"Katana action game slicing demon Yokai spirits.", newTab:false, download:true },
    { title:"Demon Bluff",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldemonbluff.html",                      desc:"Social deduction puzzle game hunting hidden demons.", newTab:false, download:true },
    { title:"Diablo (DOS)",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldiablo.html",                          desc:"Classic dark fantasy action RPG descending to slay Diablo.", newTab:false, download:true },
    { title:"Diddy Kong Racing",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldiddykong-racing.html",                desc:"N64 racing piloting cars, hovercrafts, and planes.", newTab:false, download:true },
    { title:"Die in the Dungeon",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldieinthedungeon.html",                desc:"Turn-based deckbuilding roguelite using dice.", newTab:false, download:true },
    { title:"Dig Deep",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldigdeep.html",                         desc:"Dig underground mining gold and upgrading your drill.", newTab:false, download:true },
    { title:"Dig Dug",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldigdug.html",                          desc:"Inflate subterranean monsters until they pop.", newTab:false, download:true },
    { title:"Dig Dug II",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldigdug2.html",                         desc:"Drill fault lines to sink monster-filled islands.", newTab:false, download:true },
    { title:"Dig Out of Prison",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clDigOutofPrison.html",                  desc:"Plan and dig escape tunnels underneath prison walls.", newTab:false, download:true },
    { title:"Dimensional Incident",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldimensionalincident.html",             desc:"Solve gravity-shifting dimensional puzzles.", newTab:false, download:true },
    { title:"Dino Dudes",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldinodudes.html",                       desc:"Guide prehistoric cavemen through puzzle levels.", newTab:false, download:true },
    { title:"Dino Run",                  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldinorun.html",                         desc:"Sprint as a velociraptor escaping a fiery meteor pyroclastic wave.", newTab:false, download:true },
    { title:"Dino Run: Planet D",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldinorunenterplanetd.html",             desc:"Expanded Dino Run featuring new hats and worlds.", newTab:false, download:true },
    { title:"Dino Run: Marathon",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldinorunmarathonofdoom.html",           desc:"Extreme survival runner escaping extinction waves.", newTab:false, download:true },
    { title:"Donkey Kong Country Tour",  url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldkccompetitioncart.html",             desc:"Timed high-score contest in Donkey Kong Country.", newTab:false, download:true },
    { title:"Donkey Kong NES Collection",url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clDKNESCollection.html",                   desc:"Compilation of Donkey Kong, DK Jr, and DK 3.", newTab:false, download:true },
    { title:"Doblox",                    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoblox.html",                          desc:"Sandbox physics building vehicles and structures.", newTab:false, download:true },
    { title:"Dodeca Dragons",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldodecadragons.html",                   desc:"Deep incremental RPG raising mythical dragons.", newTab:false, download:true },
    { title:"Dorfromantik",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldomeromantik.html",                    desc:"Peaceful hex-tile strategy building idyllic landscapes.", newTab:false, download:true },
    { title:"Donkey Kong Arcade",        url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykong.html",                      desc:"Original 1981 arcade game leaping over barrels.", newTab:false, download:true },
    { title:"Donkey Kong 64",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykong64.html",                    desc:"Massive N64 3D platformer with 5 playable Kongs.", newTab:false, download:true },
    { title:"Donkey Kong '94",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykong94.html",                    desc:"Game Boy puzzle platformer with 100 levels.", newTab:false, download:true },
    { title:"Donkey Kong Country",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykongcountry.html",               desc:"SNES platforming masterpiece with pre-rendered graphics.", newTab:false, download:true },
    { title:"Donkey Kong Country 2",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykongcountry2.html",              desc:"Help Diddy and Dixie rescue Donkey Kong from K. Rool.", newTab:false, download:true },
    { title:"Donkey Kong Country 3",     url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykongcountry3.html",              desc:"Explore the Northern Kremisphere with Dixie and Kiddy.", newTab:false, download:true },
    { title:"Donkey Kong (NES)",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldonkeykongnes.html",                   desc:"8-bit home console port of the barrel-climbing game.", newTab:false, download:true },
    { title:"Don't Escape 2",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldontescape2.html",                     desc:"Point-and-click survival fortifying shelter from zombies.", newTab:false, download:true },
    { title:"Don't You Lecture Me",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldontyoulectureme.html.html",           desc:"Funny soundboard meme creating audio remixes.", newTab:false, download:true },
    { title:"Doodle Jump",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoodlejump.html",                      desc:"Bounce up infinite graph paper platforms.", newTab:false, download:true },
    { title:"DOOM (1993)",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoom.html",                            desc:"Groundbreaking FPS blasting demon hordes on Mars.", newTab:false, download:true },
    { title:"DOOM II",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoom2.html",                           desc:"Hell on Earth FPS with the Super Shotgun.", newTab:false, download:true },
    { title:"DOOM 64",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoom64.html",                          desc:"Atmospheric N64 FPS featuring dark lighting and the Unmaker.", newTab:false, download:true },
    { title:"Doomori",                   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoomori.html",                         desc:"OMORI horror crossover mod set in DOOM maps.", newTab:false, download:true },
    { title:"Doors Castle",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoorscastle.html",                     desc:"Roblox Doors inspired 2D horror puzzle in castle rooms.", newTab:false, download:true },
    { title:"Double Dribble",            url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldoubledribble.html",                   desc:"NES basketball game featuring cinematic slam dunks.", newTab:false, download:true },
    { title:"Douchebag Workout 2",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldouchebagworkout2.html",               desc:"Hilarious life simulator training at the gym.", newTab:false, download:true },
    { title:"Dragon Ball Advanced",      url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldragonballadvance.html",              desc:"GBA action platformer following Goku's origin.", newTab:false, download:true },
    { title:"DBZ: Legacy of Goku",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clDragonBallZTheLegacyofGoku.html",     desc:"GBA action RPG following Saiyan and Namek sagas.", newTab:false, download:true },
    { title:"Dragon Quest V (DS)",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldragonquest5ds.html",                  desc:"JRPG story spanning three generations of a hero's life.", newTab:false, download:true },
    { title:"Dragon Warrior Monsters",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldragonwarriormonsters.html",          desc:"Breed and train monsters to battle in tournaments.", newTab:false, download:true },
    { title:"Drawn to Life",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldrawntolife.html",                     desc:"Draw your custom hero and weapons to save the village.", newTab:false, download:true },
    { title:"Drawn to Life 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldrawntolife2.html",                    desc:"Expanded drawing adventure restoring color to the world.", newTab:false, download:true },
    { title:"Drift Hunters",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldrifthuntersmerge.html",               desc:"3D drift racing simulator tuning sports cars.", newTab:false, download:true },
    { title:"Drift Simulator",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldriftsimulator.html",                  desc:"Practice burning rubber and high-speed drift angles.", newTab:false, download:true },
    { title:"Driven Wild",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldrivenwild.html",                      desc:"Off-road arcade racing through wild mud trails.", newTab:false, download:true },
    { title:"Dr. Mario",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldrmario.html",                         desc:"Puzzle game matching pill colors to eliminate viruses.", newTab:false, download:true },
    { title:"Duck Hunt",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clduckhunt.html",                        desc:"Classic NES shooting game aiming at flying ducks.", newTab:false, download:true },
    { title:"Duck Life",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducklife.html",                        desc:"Train your duck in running, flying, and swimming.", newTab:false, download:true },
    { title:"Duck Life 3: Evolution",    url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducklife3.html",                       desc:"Genetically engineer duck breeds for league races.", newTab:false, download:true },
    { title:"Duck Life 4",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducklife4.html",                       desc:"Explore open world zones and challenge rival ducks.", newTab:false, download:true },
    { title:"Duck Life Battle",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducklifebattle.html",                  desc:"Turn-based battle RPG training duck stats.", newTab:false, download:true },
    { title:"Duck Life Space",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducklifespace.html",                   desc:"Space duck training exploring alien racing planets.", newTab:false, download:true },
    { title:"DuckTales",                 url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducktales.html",                       desc:"Classic NES platformer pogo-sticking as Scrooge McDuck.", newTab:false, download:true },
    { title:"DuckTales 2",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clducktales2.html",                      desc:"NES sequel searching for pieces of the lost treasure map.", newTab:false, download:true },
    { title:"Duke Nukem 2",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldukenukem2.html",                      desc:"Classic 2D MS-DOS shooter blasting alien invaders.", newTab:false, download:true },
    { title:"Dumb Ways to Die",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldumbwaystodie.html",                   desc:"Fast-paced funny mini-game survival challenges.", newTab:false, download:true },
    { title:"Dune Buggy",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldunebuggy.html",                       desc:"Drive dune buggies over sand dunes and rocky hills.", newTab:false, download:true },
    { title:"Dungeons & Gamblers",       url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldungeonsanddegenerategambler.html",    desc:"Roguelite deckbuilder playing twisted Blackjack.", newTab:false, download:true },
    { title:"Dynamite Headdy",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cldynamiteheaddy.html",                  desc:"Genesis platformer swapping power heads to fight bosses.", newTab:false, download:true },
    { title:"Eaglercraft 1.8.8",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clEaglercraftX-188u29.html",             desc:"Full browser port of Minecraft 1.8.8 running offline.", newTab:false, download:true },
    { title:"Eaglercraft 1.5.2",         url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cleaglercraft152.html",                   desc:"Classic browser port of Minecraft 1.5.2 running smoothly.", newTab:false, download:true },
    { title:"Earn to Die",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearntodie.html",                       desc:"Drive and upgrade armed vehicles smashing zombies.", newTab:false, download:true },
    { title:"Earn to Die 2",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearntodie2.html",                      desc:"Upgrade sports cars and trucks to escape zombie cities.", newTab:false, download:true },
    { title:"EarthBound",                url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthbound.html",                      desc:"Iconic SNES JRPG following Ness on a suburban quest.", newTab:false, download:true },
    { title:"Mother 3 (EarthBound 2)",   url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthbound3.html",                     desc:"Acclaimed GBA RPG story following Lucas in Nowhere Islands.", newTab:false, download:true },
    { title:"Earth Taken",               url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthtaken.html",                      desc:"Post-apocalyptic shooter surviving alien invasions.", newTab:false, download:true },
    { title:"Earth Taken 2",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthtaken2.html",                     desc:"Scavenge gas masks and ammo in an alien-ruined wasteland.", newTab:false, download:true },
    { title:"Earth Taken 3",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthtaken3.html",                     desc:"Final chapter of the alien apocalypse survival series.", newTab:false, download:true },
    { title:"Earthworm Jim",             url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthwormjim.html",                    desc:"Groovy 16-bit action platformer firing plasma blasters.", newTab:false, download:true },
    { title:"Earthworm Jim 2",           url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/clearthwormjim2.html",                   desc:"Wacky sequel launching cows and flying rocket suits.", newTab:false, download:true },
    { title:"Ecco the Dolphin",          url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cleccothedolphin.html",                  desc:"Sega Genesis ocean adventure exploring underwater depths.", newTab:false, download:true },
    { title:"Effing Worms",              url:"https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/cleffingworms.html",                     desc:"Control a giant monster worm eating everything above ground.", newTab:false, download:true }
];

// ─── LIVE GAME CATALOG SYNC ────────────────────────────────────
// The curated GAMES array is the fallback catalog. When Nova is online we
// reconcile it with the actual HTML files in UmarErth/uMath so the game count
// and launcher reflect repository additions/removals automatically.
const NOVA_GAME_REPO = Object.freeze({ owner:"UmarErth", repo:"uMath", branch:"main" });
const NOVA_GAME_CDN_PREFIX = `https://cdn.jsdelivr.net/gh/${NOVA_GAME_REPO.owner}/${NOVA_GAME_REPO.repo}@${NOVA_GAME_REPO.branch}/`;
let NOVA_GAME_SYNC_PROMISE = null;

function novaRepoPathFromGameUrl(url){
    try{
        const raw=String(url||"");
        const marker=`cdn.jsdelivr.net/gh/${NOVA_GAME_REPO.owner}/${NOVA_GAME_REPO.repo}@${NOVA_GAME_REPO.branch}/`;
        const at=raw.indexOf(marker);
        if(at<0) return null;
        let path=raw.slice(at+marker.length).split(/[?#]/,1)[0];
        try{ path=decodeURIComponent(path); }catch{}
        return path.replace(/^\/+/,"");
    }catch{return null;}
}

function novaNormalizeRepoPath(path){
    try{return decodeURIComponent(String(path||"")).replace(/^\/+/,"").replace(/\\/g,"/").toLowerCase();}
    catch{return String(path||"").replace(/^\/+/,"").replace(/\\/g,"/").toLowerCase();}
}

function novaGameTitleFromPath(path){
    let name=String(path||"").split("/").pop()||"New Game";
    try{name=decodeURIComponent(name);}catch{}
    name=name.replace(/\.html?$/i,"");
    // Most legacy game files use a cl prefix. Remove it only when it looks
    // like the catalog naming convention rather than part of a real word.
    if(/^cl(?=[A-Z0-9 _.-]|[a-z0-9])/i.test(name)) name=name.slice(2);
    name=name
        .replace(/[_-]+/g," ")
        .replace(/([a-z0-9])([A-Z])/g,"$1 $2")
        .replace(/\s+/g," ")
        .trim();
    if(!name) return "New Game";
    return name.split(" ").map(word=>{
        if(/^(nes|gba|nds|ds|ps1|ps2|fnf|gta|doom|io)$/i.test(word)) return word.toUpperCase();
        if(/^\d/.test(word)) return word;
        return word.charAt(0).toUpperCase()+word.slice(1);
    }).join(" ");
}

function novaCdnUrlForRepoPath(path){
    return NOVA_GAME_CDN_PREFIX + String(path||"").split("/").map(part=>encodeURIComponent(part)).join("/");
}

async function novaCatalogFetch(url,options={}){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),12000);
    try{const response=await fetch(url,{...options,signal:controller.signal});
        if(!response.ok)throw new Error(`Catalog request failed (${response.status})`);
        return await response.json();
    }finally{clearTimeout(timer);}
}
async function novaFetchRepoHtmlPaths(){
    const github=`https://api.github.com/repos/${NOVA_GAME_REPO.owner}/${NOVA_GAME_REPO.repo}/git/trees/${encodeURIComponent(NOVA_GAME_REPO.branch)}?recursive=1`;
    try{
        const data=await novaCatalogFetch(github,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});
        if(data.truncated)throw new Error("Incomplete GitHub catalog");
        if(!Array.isArray(data.tree)) throw new Error("Invalid GitHub tree response");
        return data.tree
            .filter(entry=>entry?.type==="blob" && /\.html?$/i.test(entry.path||""))
            .map(entry=>String(entry.path).replace(/^\/+/,""));
    }catch(githubError){
        // jsDelivr metadata is a CORS-friendly fallback for networks that block
        // api.github.com or when the anonymous GitHub API rate limit is hit.
        const jsd=`https://data.jsdelivr.com/v1/package/gh/${NOVA_GAME_REPO.owner}/${NOVA_GAME_REPO.repo}@${encodeURIComponent(NOVA_GAME_REPO.branch)}/flat`;
        const data=await novaCatalogFetch(jsd,{cache:"no-store"});
        if(!Array.isArray(data.files)) throw githubError;
        return data.files
            .map(file=>String(file?.name||"").replace(/^\/+/,""))
            .filter(path=>/\.html?$/i.test(path));
    }
}

async function novaSyncGameCatalog(force=false){
    if(NOVA_GAME_SYNC_PROMISE) return NOVA_GAME_SYNC_PROMISE;
    NOVA_GAME_SYNC_PROMISE=(async()=>{
        try{
            const paths=await novaFetchRepoHtmlPaths();
            const uniquePaths=[];
            const repoPathSet=new Set();
            for(const path of paths){
                if(/^(?:index|singlefile|altsingle)\.html?$/i.test(path))continue;
                const key=novaNormalizeRepoPath(path);
                if(!key || repoPathSet.has(key)) continue;
                repoPathSet.add(key);
                uniquePaths.push(path);
            }

            // Preserve curated names/descriptions/order for files that still
            // exist, keep external games, drop stale/duplicate repo entries,
            // then append newly discovered repository HTML games.
            const curatedByPath=new Map();
            for(const game of GAMES){
                const path=novaRepoPathFromGameUrl(game?.url);
                if(path){
                    const key=novaNormalizeRepoPath(path);
                    if(!curatedByPath.has(key)) curatedByPath.set(key,game);
                }
            }

            const next=[];
            const addedRepoPaths=new Set();
            for(const game of GAMES){
                const path=novaRepoPathFromGameUrl(game?.url);
                if(!path){
                    next.push(game); // external/remote game
                    continue;
                }
                const key=novaNormalizeRepoPath(path);
                if(repoPathSet.has(key) && !addedRepoPaths.has(key)){
                    next.push(game);
                    addedRepoPaths.add(key);
                }
            }

            for(const path of uniquePaths){
                const key=novaNormalizeRepoPath(path);
                if(addedRepoPaths.has(key)) continue;
                const curated=curatedByPath.get(key);
                if(curated){
                    next.push(curated);
                }else{
                    next.push({
                        title:novaGameTitleFromPath(path),
                        url:novaCdnUrlForRepoPath(path),
                        desc:"Auto-detected from the live Nova Gaming repository.",
                        newTab:false,
                        download:true,
                        autoDetected:true,
                        repoPath:path
                    });
                }
                addedRepoPaths.add(key);
            }

            GAMES.splice(0,GAMES.length,...next);
            window.NOVA_GAME_COUNT=GAMES.length;
            window.NOVA_GAME_CATALOG_SOURCE="live";
            window.dispatchEvent(new CustomEvent("nova:games-updated",{detail:{count:GAMES.length,source:"live"}}));
            return GAMES.length;
        }catch(err){
            console.warn("Nova live game catalog sync failed; using built-in catalog",err);
            window.NOVA_GAME_COUNT=GAMES.length;
            window.NOVA_GAME_CATALOG_SOURCE="fallback";
            window.dispatchEvent(new CustomEvent("nova:games-updated",{detail:{count:GAMES.length,source:"fallback"}}));
            return GAMES.length;
        }
    })();
    try{return await NOVA_GAME_SYNC_PROMISE;}finally{NOVA_GAME_SYNC_PROMISE=null;}
}

// Public refresh hook for debugging/manual refreshes, while normal users get
// an automatic background scan each page load.
window.novaRefreshGameCatalog=()=>novaSyncGameCatalog(true);
if("requestIdleCallback" in window) requestIdleCallback(()=>novaSyncGameCatalog(),{timeout:900});
else setTimeout(()=>novaSyncGameCatalog(),40);


// ════════════════════════════════════════════════════════════════
// ULTRA HIGH-PERFORMANCE ENGINE v5.0 (HYPERGLASS OLED SYSTEM)
// ════════════════════════════════════════════════════════════════
const nova = {
    cards:[], favorites:[], searchQuery:"", onlyFavs:false,
    _theaterItem:null, _tabs:[], _tabCnt:0,
    _animeLoaded:false, _ytLoaded:false, _aiLoaded:false,
    _animeState:"overview",
    _htmlCache: new Map(),
    _aiChats:[], _currentChatId:null, _aiGenerating:false,
    _aiModels:[], _selectedModel:"gemini-3.6-flash",
    _aiAttachments:[],
    isLowSpec: false,

    esc(str) {
        return (str || "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    },

    detectHardware() {
        this.isLowSpec = (navigator.hardwareConcurrency <= 4) || /CrOS/.test(navigator.userAgent);
    },

    setFavicon() {
        document.title = CLOAK_TITLE;
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "shortcut icon";
            document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = CLOAK_ICON;
    },

    // ── ADVANCED JSDELIVR HTML RENDERER ───────────────────────────
    async attachHtmlToIframe(iframe, url) {
        if (!iframe || !url) return;

        const isEagler = /eaglercraft/i.test(url);

        iframe.removeAttribute("srcdoc");
        // Do not sandbox Eaglercraft. It needs workers, WebGL, storage,
        // pointer lock and the normal Permissions Policy chain.
        if (isEagler) iframe.removeAttribute("sandbox");
        else iframe.setAttribute(
            "sandbox",
            "allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-downloads"
        );
        iframe.setAttribute(
            "allow",
            "webgl *; gamepad *; fullscreen *; autoplay *; clipboard-read *; clipboard-write *; pointer-lock *; storage-access *"
        );
        iframe.setAttribute("scrolling", "no");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "0";
        iframe.style.display = "block";

        const showReady = () => {
            iframe.classList.add("game-ready");
            iframe.parentElement?.querySelector(".os-game-loading")?.classList.add("done");
        };

        try {
            // jsDelivr/GitHub-hosted .html files can be served with a MIME type
            // that makes browsers display the source as plain text. Fetch the
            // bytes ourselves and recreate the page explicitly as text/html.
            const res = await fetch(url, {
                mode: "cors",
                credentials: "omit",
                cache: "default"
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const contentType = (res.headers.get("content-type") || "").toLowerCase();
            let raw = await res.text();
            const trimmed = raw.trimStart();
            const looksHtml =
                /^(<!doctype\s+html|<html(?:\s|>)|<head(?:\s|>)|<body(?:\s|>))/i.test(trimmed) ||
                /<canvas[\s>]/i.test(raw) ||
                /<script[\s>]/i.test(raw);

            let html;
            if (looksHtml || /html|xhtml|text\/plain/i.test(contentType)) {
                const a = document.createElement("a");
                a.href = url;
                const baseHref = a.href.substring(0, a.href.lastIndexOf("/") + 1);

                // Some Eagler builds probe navigator.getGamepads during boot.
                // A denied Permissions Policy call used to crash the runtime,
                // so return an empty pad list if the browser rejects the probe.
                const gamepadShim = isEagler ? `<script>
(function(){
  try {
    var nativeGetGamepads = navigator.getGamepads && navigator.getGamepads.bind(navigator);
    if (nativeGetGamepads) {
      Object.defineProperty(navigator, "getGamepads", {
        configurable: true,
        value: function(){
          try { return nativeGetGamepads() || []; }
          catch (_) { return []; }
        }
      });
    }
  } catch (_) {}
})();
<\/script>` : "";

                if (!/<base\s/i.test(raw)) {
                    if (/<head(?:\s|>)/i.test(raw)) {
                        raw = raw.replace(
                            /<head([^>]*)>/i,
                            `<head$1><base href="${baseHref.replace(/"/g,"&quot;")}">${gamepadShim}`
                        );
                    } else {
                        raw = `<!doctype html><html><head><meta charset="utf-8"><base href="${baseHref.replace(/"/g,"&quot;")}">${gamepadShim}</head><body>${raw}</body></html>`;
                    }
                } else if (gamepadShim) {
                    if (/<head(?:\s|>)/i.test(raw)) raw = raw.replace(/<head([^>]*)>/i, `<head$1>${gamepadShim}`);
                    else raw = gamepadShim + raw;
                }
                html = raw;
            } else {
                // JS-only entries still get a proper HTML wrapper.
                const baseHref = url.substring(0, url.lastIndexOf("/") + 1);
                html = `<!doctype html><html><head><meta charset="utf-8"><base href="${baseHref.replace(/"/g,"&quot;")}"></head><body><script>${raw.replace(/<\/script/gi,"<\\/script")}</script></body></html>`;
            }

            const blobUrl = URL.createObjectURL(
                new Blob([html], { type: "text/html;charset=utf-8" })
            );

            const cleanup = () => {
                showReady();
                // Keep it alive long enough for late worker/resource startup.
                setTimeout(() => URL.revokeObjectURL(blobUrl), 120000);
            };
            iframe.addEventListener("load", cleanup, { once: true });
            iframe.src = blobUrl;
        } catch (err) {
            console.error("Nova game renderer failed:", err);
            // Never fall back to the raw CDN URL for HTML games because a
            // text/plain response would just show the source code again.
            const safe = String(err && err.message ? err.message : err).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
            const failName = isEagler ? "Minecraft" : "Game";
            iframe.srcdoc = `<!doctype html><html><body style="margin:0;background:#050505;color:#fff;font:15px system-ui;display:grid;place-items:center;height:100vh"><div style="max-width:620px;padding:28px;text-align:center"><h2 style="margin:0 0 10px">${failName} failed to load</h2><p style="opacity:.72">Nova could not fetch this game file.</p><code style="opacity:.6">${safe}</code></div></body></html>`;
            iframe.addEventListener("load", showReady, { once: true });
        }
    },

    // ── CSS & HYPERGLASS SYSTEM STYLING ────────────────────────────
    css() {
        const fontStyles = document.createElement("style");
        fontStyles.textContent = `
        @font-face {
            font-family: 'Plus Jakarta Sans';
            font-style: normal;
            font-weight: 200 800;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/plusjakartasans/PlusJakartaSans%5Bwght%5D.ttf') format('truetype');
        }
        @font-face {
            font-family: 'JetBrains Mono';
            font-style: normal;
            font-weight: 100 800;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf') format('truetype');
        }`;
        document.head.appendChild(fontStyles);

        const blurLevel = this.isLowSpec ? "14px" : "36px";
        const blurHigh  = this.isLowSpec ? "22px" : "60px";
        
        const s = document.createElement("style");
        s.textContent = `
        :root {
            --bg: #03040a;
            --surface: rgba(12, 14, 28, 0.72);
            --surface-hover: rgba(22, 26, 48, 0.85);
            --border: rgba(255, 255, 255, 0.08);
            --border-glow: rgba(0, 255, 157, 0.4);
            
            --mint: #00ff9d;
            --mint-glow: rgba(0, 255, 157, 0.35);
            --violet: #7000ff;
            --violet-glow: rgba(112, 0, 255, 0.4);
            --rose: #ff0055;
            --rose-glow: rgba(255, 0, 85, 0.35);
            --cyan: #00e1ff;
            
            --glass-glow: 0 16px 40px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.12);
            --bsm: blur(${blurLevel}) saturate(200%);
            --bmd: blur(${blurHigh}) saturate(240%);
            
            --ea: cubic-bezier(0.16, 1, 0.3, 1);
            --sp: cubic-bezier(0.175, 0.885, 0.32, 1.2);

            --fxs: clamp(0.68rem, 0.85vw, 0.78rem);
            --fsm: clamp(0.78rem, 1vw, 0.9rem);
            --fb: clamp(0.85rem, 1.1vw, 0.98rem);
            --flg: clamp(1rem, 1.4vw, 1.45rem);
            --fxl: clamp(1.2rem, 2.2vw, 1.75rem);
            --flk: clamp(1.5rem, 2.6vw, 2.4rem);
            
            --tbh: 42px;
            --dock-h: 68px;
            --safe-bottom: env(safe-area-inset-bottom, 0px);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
            width: 100%; height: 100%; height: 100dvh;
            background: var(--bg); color: #fff;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            overflow: hidden; -webkit-tap-highlight-color: transparent; touch-action: manipulation;
        }

        body::before {
            content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
            background: 
                radial-gradient(circle at 15% 15%, rgba(112, 0, 255, 0.15), transparent 45%),
                radial-gradient(circle at 85% 85%, rgba(0, 255, 157, 0.12), transparent 45%),
                radial-gradient(circle at 50% 50%, rgba(0, 225, 255, 0.08), transparent 60%);
            animation: pulseGlow 0.9s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow { 0% { opacity: 0.6; transform: scale(1); } 100% { opacity: 1; transform: scale(1.05); } }

        #particle-canvas { position: fixed; inset: 0; z-index: 1; pointer-events: none; }

        /* APP MAIN STRUCTURE */
        #app {
            position: relative; z-index: 10; width: 100vw; height: 100vh; height: 100dvh;
            display: flex; flex-direction: column; opacity: 0; transform: scale(0.98);
            transition: opacity 0.4s var(--ea), transform 0.4s var(--ea); pointer-events: none;
        }
        #app.on { opacity: 1; transform: none; pointer-events: auto; }

        /* HYPERGLASS TAB BAR */
        #tbr {
            height: var(--tbh); flex-shrink: 0; display: flex; align-items: center; gap: 8px; padding: 0 16px;
            background: rgba(5, 7, 18, 0.85); backdrop-filter: var(--bsm); -webkit-backdrop-filter: var(--bsm);
            border-bottom: 1px solid var(--border); overflow-x: auto; overflow-y: hidden; scrollbar-width: none;
            z-index: 6000;
        }
        #tbr::-webkit-scrollbar { display: none; }
        .tbt {
            display: flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 12px;
            min-width: 110px; max-width: 200px; flex-shrink: 0; cursor: pointer; background: transparent;
            border: 1px solid transparent; color: rgba(255, 255, 255, 0.5); font-size: 12px; font-weight: 600;
            font-family: inherit; white-space: nowrap; transition: all 0.22s var(--ea);
        }
        .tbt:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }
        .tbt.on {
            background: var(--surface-hover); color: #fff; border-color: var(--border);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.5);
        }
        .tb-ttl { flex: 1; overflow: hidden; text-overflow: ellipsis; text-align: left; }
        .tb-x {
            width: 18px; height: 18px; border-radius: 50%; border: none; background: transparent;
            color: rgba(255, 255, 255, 0.3); cursor: pointer; display: flex; align-items: center; justify-content: center;
            font-size: 10px; transition: all 0.15s;
        }
        .tb-x:hover { background: var(--rose); color: #fff; }
        .tb-new {
            display: flex; align-items: center; justify-content: center; width: 32px; height: 28px; flex-shrink: 0;
            border: 1px solid var(--border); background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.6);
            cursor: pointer; font-size: 16px; border-radius: 10px; transition: all 0.2s var(--ea);
        }
        .tb-new:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.2); }

        /* FLOATING HEADER DOCK */
        header {
            display: flex; align-items: center; justify-content: space-between; padding: 12px 24px;
            background: var(--surface); backdrop-filter: var(--bmd); -webkit-backdrop-filter: var(--bmd);
            border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 16px; z-index: 200; box-shadow: var(--glass-glow);
        }
        .hl { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .brand {
            font-size: var(--fxl); font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
            background: linear-gradient(135deg, #fff 30%, var(--mint) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer; user-select: none;
        }
        .mbtn {
            background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); color: rgba(255,255,255,0.8);
            width: 42px; height: 42px; border-radius: 14px; cursor: pointer; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 5px; transition: all 0.25s var(--ea);
        }
        .mbtn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); color: #fff; box-shadow: 0 0 20px rgba(0,255,157,0.2); }
        .mbtn span { display: block; width: 18px; height: 2px; background: currentColor; border-radius: 2px; transition: all 0.25s; }
        .mbtn.on span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .mbtn.on span:nth-child(2) { opacity: 0; }
        .mbtn.on span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .sw { display: flex; gap: 12px; align-items: center; flex: 1; max-width: 600px; justify-content: flex-end; }
        .sbar {
            background: rgba(0, 0, 0, 0.5); border: 1px solid var(--border); padding: 10px 20px;
            border-radius: 20px; color: #fff; font-family: inherit; font-size: var(--fb); outline: none;
            width: 100%; transition: all 0.3s var(--ea);
        }
        .sbar::placeholder { color: rgba(255, 255, 255, 0.35); }
        .sbar:focus { background: rgba(0, 0, 0, 0.8); border-color: var(--mint); box-shadow: 0 0 25px var(--mint-glow); }

        .hbtn {
            background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); color: rgba(255, 255, 255, 0.85);
            font-family: inherit; padding: 10px 18px; border-radius: 16px; cursor: pointer; font-size: var(--fb);
            font-weight: 600; transition: all 0.25s var(--ea); white-space: nowrap; display: flex; align-items: center; gap: 8px;
        }
        .hbtn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #fff; transform: translateY(-2px); }
        .fvbtn {
            background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border); color: rgba(255, 255, 255, 0.4);
            width: 42px; height: 42px; border-radius: 14px; cursor: pointer; font-size: 1.1rem; display: flex;
            align-items: center; justify-content: center; transition: all 0.25s var(--ea); flex-shrink: 0;
        }
        .fvbtn:hover { color: #fff; border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.1); }
        .fvbtn.on { border-color: #ffca28; color: #ffca28; background: rgba(255, 202, 40, 0.15); box-shadow: 0 0 25px rgba(255, 202, 40, 0.3); }

        /* GRID SYSTEM */
        #grid {
            flex: 1; min-height: 0; padding: clamp(20px, 3vw, 36px);
            padding-bottom: calc(var(--dock-h) + 40px + var(--safe-bottom));
            overflow-y: auto; overflow-x: hidden;
            display: grid; grid-template-columns: repeat(auto-fill, minmax(clamp(200px, 20vw, 300px), 1fr));
            gap: 20px; align-content: start; -webkit-overflow-scrolling: touch;
        }

        /* HYPERGLASS GAME CARDS */
        .card {
            background: var(--surface); border: 1px solid var(--border); border-radius: 24px;
            padding: 24px; cursor: pointer; position: relative; overflow: hidden; backdrop-filter: var(--bsm);
            transition: all 0.35s var(--ea); will-change: transform; user-select: none; box-shadow: var(--glass-glow);
            display: flex; flex-direction: column; justify-content: space-between; height: 140px;
        }
        .card.hidden { display: none !important; }
        .card::before {
            content: ''; position: absolute; inset: 0;
            background: radial-gradient(circle 180px at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.12), transparent 70%);
            opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .card:hover::before { opacity: 1; }
        .card:hover {
            background: var(--surface-hover); border-color: var(--mint);
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px var(--mint-glow);
        }
        .ntb {
            position: absolute; top: 16px; right: 16px; font-size: 9px; font-weight: 800; letter-spacing: 1px;
            text-transform: uppercase; color: var(--mint); background: rgba(0, 255, 157, 0.12);
            border: 1px solid rgba(0, 255, 157, 0.3); padding: 4px 8px; border-radius: 8px;
        }
        .card h3 {
            margin: 0 0 6px; font-size: var(--fch); font-weight: 700; transition: color 0.25s;
            overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-right: 60px;
        }
        .card p { margin: 0; font-size: var(--fcp); color: rgba(255, 255, 255, 0.5); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .fvs { position: absolute; bottom: 18px; right: 20px; font-size: 1rem; color: rgba(255, 255, 255, 0.2); transition: all 0.25s; }
        .card.fav .fvs { color: #ffca28; text-shadow: 0 0 12px rgba(255, 202, 40, 0.8); }
        .card:hover h3 { color: var(--mint); }

        /* FLOATING DOCK NAV */
        #bnav {
            position: fixed; bottom: calc(16px + var(--safe-bottom)); left: 50%; transform: translateX(-50%);
            z-index: 500; height: var(--dock-h); padding: 0 12px;
            background: rgba(8, 10, 22, 0.88); backdrop-filter: var(--bmd); -webkit-backdrop-filter: var(--bmd);
            border: 1px solid var(--border); border-radius: 28px; display: flex; align-items: center; gap: 6px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(112, 0, 255, 0.15); transition: transform 0.4s var(--ea);
        }
        body.in-game #bnav { transform: translate(-50%, 150%); pointer-events: none; }

        .ntab {
            display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
            cursor: pointer; border: none; background: transparent; color: rgba(255, 255, 255, 0.45);
            font-family: inherit; font-size: 10px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
            padding: 0 16px; height: 48px; border-radius: 18px; transition: all 0.25s var(--ea); position: relative;
        }
        .ntab:hover { color: #fff; background: rgba(255, 255, 255, 0.05); }
        .ntab.on { color: var(--mint); background: rgba(0, 255, 157, 0.08); }
        .ni { font-size: 1.25rem; line-height: 1; transition: transform 0.25s var(--sp); }
        .ntab.on .ni { transform: scale(1.15); text-shadow: 0 0 12px var(--mint-glow); }

        /* FLOATING DOCK SIDE PANEL */
        #panel {
            position: fixed; top: 16px; left: 16px; bottom: 16px; width: clamp(260px, 25vw, 320px); z-index: 9000;
            background: rgba(8, 10, 24, 0.95); backdrop-filter: var(--bmd); -webkit-backdrop-filter: var(--bmd);
            border: 1px solid var(--border); border-radius: 32px; display: flex; flex-direction: column;
            transform: translateX(-120%); transition: transform 0.4s var(--sp); overflow: hidden;
            box-shadow: 20px 0 60px rgba(0, 0, 0, 0.9);
        }
        #panel.on { transform: translateX(0); }
        .ph { padding: 30px 24px 20px; border-bottom: 1px solid var(--border); background: rgba(255, 255, 255, 0.02); flex-shrink: 0; }
        .pe { font-size: var(--fxs); font-weight: 800; letter-spacing: 3px; text-transform: uppercase; color: var(--mint); margin-bottom: 6px; }
        .pb { font-size: var(--flg); font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: #fff; }
        .pbody { flex: 1; overflow-y: auto; padding: 16px; -webkit-overflow-scrolling: touch; }
        .mi {
            display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: 18px; cursor: pointer;
            transition: all 0.2s var(--ea); color: rgba(255, 255, 255, 0.7); font-size: var(--fb); font-weight: 600;
        }
        .mi:hover { background: rgba(255, 255, 255, 0.08); color: #fff; transform: translateX(6px); }
        .miw {
            width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
            background: rgba(0, 0, 0, 0.5); border: 1px solid var(--border); border-radius: 12px; flex-shrink: 0;
        }
        .mil { flex: 1; }
        .mdiv { height: 1px; margin: 10px 16px; background: var(--border); }
        .pft { padding: 20px 24px; border-top: 1px solid var(--border); font-size: var(--fxs); color: rgba(255, 255, 255, 0.35); text-align: center; }

        /* BACKDROP OVERLAY */
        #bd { position: fixed; inset: 0; z-index: 8999; background: transparent; pointer-events: none; transition: background 0.4s; }
        #bd.on { background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px); pointer-events: auto; }

        /* CONFIRM MODAL */
        #ntov {
            position: fixed; inset: 0; z-index: 10500; background: rgba(3, 4, 10, 0.85); backdrop-filter: var(--bsm);
            display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.25s;
        }
        #ntov.on { opacity: 1; pointer-events: auto; }
        .ntc {
            background: var(--surface); border: 1px solid var(--border); border-radius: 32px;
            padding: 36px; max-width: 420px; width: 90vw; backdrop-filter: var(--bmd);
            box-shadow: var(--glass-glow), 0 0 60px rgba(0,255,157,0.2); text-align: center;
            transform: scale(0.92); transition: transform 0.3s var(--sp);
        }
        #ntov.on .ntc { transform: scale(1); }
        .nt-ico {
            width: 56px; height: 56px; border-radius: 20px; background: rgba(0, 255, 157, 0.1); border: 1px solid rgba(0, 255, 157, 0.3);
            display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 1.6rem; color: var(--mint);
        }
        .nt-tl { font-size: var(--fxs); font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
        .nt-nm { font-size: var(--flg); font-weight: 800; color: #fff; margin-bottom: 8px; }
        .nt-bd { font-size: var(--fsm); color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 24px; }
        .nt-ac { display: flex; gap: 12px; justify-content: center; }
        .nt-yes {
            background: var(--mint); border: none; color: #000; padding: 12px 28px; border-radius: 16px;
            cursor: pointer; font-weight: 800; font-size: var(--fb); font-family: inherit; transition: all 0.2s var(--ea);
        }
        .nt-yes:hover { background: #fff; box-shadow: 0 0 25px var(--mint); transform: scale(1.04); }
        .nt-no {
            background: rgba(255, 255, 255, 0.06); border: 1px solid var(--border); color: rgba(255,255,255,0.8);
            padding: 12px 28px; border-radius: 16px; cursor: pointer; font-weight: 700; font-size: var(--fb); font-family: inherit; transition: all 0.2s var(--ea);
        }
        .nt-no:hover { background: rgba(255, 255, 255, 0.12); color: #fff; }

        /* THEATER WORKSPACE */
        #theater {
            position: fixed; top: var(--tbh); left: 0; right: 0; bottom: 0; z-index: 5000; background: #000;
            display: flex; flex-direction: column; opacity: 0; pointer-events: none; transition: opacity 0.3s;
        }
        #theater.on { opacity: 1; pointer-events: auto; }
        .th {
            display: flex; justify-content: space-between; align-items: center; padding: 10px 24px;
            border-bottom: 1px solid var(--border); background: var(--surface); backdrop-filter: var(--bsm); flex-shrink: 0; gap: 12px;
        }
        .tc { display: flex; gap: 10px; align-items: center; }
        .ab {
            background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: rgba(255,255,255,0.85);
            font-family: inherit; padding: 8px 16px; border-radius: 14px; cursor: pointer; font-size: var(--fsm);
            font-weight: 600; transition: all 0.2s;
        }
        .ab:hover { background: rgba(255,255,255,0.12); color: #fff; }
        .cb {
            background: var(--rose); border: none; color: #fff; padding: 8px 20px; font-family: inherit;
            border-radius: 14px; cursor: pointer; font-weight: 700; font-size: var(--fsm); transition: all 0.2s;
        }
        .cb:hover { background: #ff2d6e; box-shadow: 0 0 25px var(--rose-glow); }
        .ifw { flex: 1; width: 100%; min-height: 0; position: relative; }
        .gframe-instance { width: 100%; height: 100%; border: none; background: #000; display: none; }
        .gframe-instance.active { display: block; }

        /* CONTEXT MENU */
        #ctx {
            position: fixed; z-index: 10000; width: 210px; background: rgba(10, 12, 28, 0.95);
            backdrop-filter: var(--bsm); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 20px;
            padding: 8px 0; box-shadow: var(--glass-glow), 0 20px 50px rgba(0, 0, 0, 0.9); opacity: 0;
            transform: scale(0.92); transform-origin: top left; pointer-events: none; transition: opacity 0.2s, transform 0.2s var(--ea);
        }
        #ctx.on { opacity: 1; transform: scale(1); pointer-events: auto; }
        .ci { padding: 12px 18px; font-size: var(--fsm); color: rgba(255, 255, 255, 0.8); cursor: pointer; transition: all 0.18s; display: flex; align-items: center; gap: 12px; }
        .ci:hover { background: rgba(0, 255, 157, 0.1); color: var(--mint); }
        .ci.ac:hover { color: var(--rose); background: rgba(255, 0, 85, 0.1); }

        /* FULL PANELS (ANIME, YT, AI) */
        .fpanel {
            position: fixed; inset: 0; z-index: 4000; background: var(--bg); display: flex; flex-direction: column;
            transform: translateY(100%); transition: transform 0.4s var(--sp); overflow: hidden;
        }
        .fpanel.on { transform: translateY(0); }
        .fpbar {
            display: flex; align-items: center; gap: 16px; padding: 16px 28px; background: var(--surface);
            backdrop-filter: var(--bsm); border-bottom: 1px solid var(--border); flex-shrink: 0;
        }
        .fp-back {
            background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: rgba(255, 255, 255, 0.85);
            font-family: inherit; padding: 8px 18px; border-radius: 14px; cursor: pointer; font-size: var(--fsm);
            font-weight: 600; transition: all 0.2s;
        }
        .fp-back:hover { background: rgba(255,255,255,0.12); color: #fff; }
        .fp-ttl {
            font-size: var(--flg); font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
            background: linear-gradient(135deg, #fff 30%, var(--mint) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; flex: 1;
        }
        .fp-srch {
            background: rgba(0, 0, 0, 0.5); border: 1px solid var(--border); color: #fff; font-family: inherit;
            padding: 8px 18px; border-radius: 18px; width: clamp(140px, 20vw, 260px); font-size: var(--fb); outline: none; transition: all 0.25s;
        }
        .fp-srch:focus { background: rgba(0, 0, 0, 0.8); border-color: var(--mint); width: clamp(180px, 25vw, 320px); }
        .fp-body {
            flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: clamp(20px, 3vw, 36px);
            padding-bottom: calc(var(--dock-h) + 40px + var(--safe-bottom));
        }
        .fp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(clamp(150px, 16vw, 220px), 1fr)); gap: 20px; }

        /* ANIME EPISODES SELECTOR */
        .ep-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(85px, 1fr)); gap: 12px; margin-top: 16px; }
        .ep-btn {
            background: var(--surface); border: 1px solid var(--border); color: #fff; padding: 12px; border-radius: 14px;
            font-size: var(--fsm); font-weight: 700; cursor: pointer; text-align: center; transition: all 0.25s var(--ea);
        }
        .ep-btn:hover { background: var(--mint); color: #000; box-shadow: 0 0 20px var(--mint-glow); transform: translateY(-2px); }

        /* ANIME & YT CARDS */
        .acd {
            background: var(--surface); border: 1px solid var(--border); border-radius: 20px; cursor: pointer;
            overflow: hidden; transition: all 0.3s var(--ea); box-shadow: var(--glass-glow);
        }
        .acd:hover { border-color: var(--mint); transform: translateY(-6px); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8); }
        .acd img { width: 100%; aspect-ratio: 2/3; object-fit: cover; display: block; background: rgba(0,0,0,0.5); }
        .acd.ytc img { aspect-ratio: 16/9; }
        .acd-i { padding: 14px; }
        .acd-t { font-size: var(--fsm); font-weight: 700; color: #fff; margin-bottom: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .acd-m { font-size: var(--fxs); color: rgba(255,255,255,0.5); }
        .fp-sec { margin-bottom: 28px; }
        .fp-sttl { font-size: var(--fxs); font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: var(--mint); margin-bottom: 14px; }

        /* AI ASSISTANT LAYOUT */
        #ai-model-select {
            background: rgba(0, 0, 0, 0.6); border: 1px solid var(--border); color: var(--mint); font-family: inherit;
            padding: 8px 14px; border-radius: 16px; font-size: 12px; font-weight: 700; outline: none; cursor: pointer; transition: all 0.2s;
        }
        #ai-model-select:focus { border-color: var(--mint); box-shadow: 0 0 18px var(--mint-glow); }
        #ai-model-select option { background: #080a18; color: #fff; }

        #ai-panel .ai-layout { display: flex; height: 100%; width: 100%; position: relative; overflow: hidden; }
        .ai-drawer {
            width: 280px; background: rgba(6, 8, 20, 0.9); border-right: 1px solid var(--border);
            display: flex; flex-direction: column; transition: transform 0.3s var(--sp); flex-shrink: 0;
        }
        .ai-drawer-h { padding: 18px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .ai-new-btn {
            background: rgba(0, 255, 157, 0.12); border: 1px solid rgba(0, 255, 157, 0.3); color: var(--mint);
            padding: 10px 16px; border-radius: 16px; font-size: var(--fsm); font-weight: 800; cursor: pointer;
            display: flex; align-items: center; gap: 8px; width: 100%; justify-content: center; transition: all 0.25s var(--ea);
        }
        .ai-new-btn:hover { background: var(--mint); color: #000; box-shadow: 0 0 25px var(--mint-glow); }
        .ai-hist-list { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
        .ai-hist-item {
            padding: 12px 14px; border-radius: 14px; background: rgba(255, 255, 255, 0.02); border: 1px solid transparent;
            color: rgba(255, 255, 255, 0.7); font-size: var(--fsm); cursor: pointer; display: flex; align-items: center;
            justify-content: space-between; transition: all 0.2s;
        }
        .ai-hist-item:hover { background: rgba(255, 255, 255, 0.06); color: #fff; }
        .ai-hist-item.on { background: rgba(0, 255, 157, 0.1); border-color: rgba(0, 255, 157, 0.3); color: #fff; font-weight: 700; }
        .ai-hist-del { color: rgba(255, 255, 255, 0.3); font-size: 12px; padding: 4px 8px; border-radius: 8px; transition: all 0.15s; }
        .ai-hist-del:hover { color: var(--rose); background: rgba(255, 0, 85, 0.2); }

        .ai-main { flex: 1; display: flex; flex-direction: column; height: 100%; min-width: 0; position: relative; }
        .ai-chat-body { flex: 1; overflow-y: auto; padding: clamp(20px, 3vw, 36px); display: flex; flex-direction: column; gap: 20px; -webkit-overflow-scrolling: touch; }
        .ai-msg { display: flex; gap: 14px; max-width: 900px; width: 100%; margin: 0 auto; animation: popIn 0.3s var(--sp); }
        .ai-msg-avatar {
            width: 38px; height: 38px; border-radius: 14px; background: var(--surface); border: 1px solid var(--border);
            display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0;
        }
        .ai-msg.user .ai-msg-avatar { background: rgba(112, 0, 255, 0.15); border-color: rgba(112, 0, 255, 0.4); color: var(--violet); }
        .ai-msg.model .ai-msg-avatar { background: rgba(0, 255, 157, 0.12); border-color: rgba(0, 255, 157, 0.4); color: var(--mint); }
        .ai-msg-content {
            flex: 1; min-width: 0; background: var(--surface); border: 1px solid var(--border);
            border-radius: 22px; padding: 16px 20px; font-size: var(--fb); line-height: 1.6; color: rgba(255, 255, 255, 0.9);
        }
        .ai-msg.user .ai-msg-content { background: rgba(112, 0, 255, 0.08); border-color: rgba(112, 0, 255, 0.25); }

        /* AI ATTACHMENT STRIP */
        .ai-input-wrapper { max-width: 920px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 10px; }
        .ai-attach-preview { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 10px; }
        .ai-attach-badge {
            background: rgba(0, 255, 157, 0.1); border: 1px solid rgba(0, 255, 157, 0.3); color: #fff;
            padding: 8px 14px; border-radius: 14px; font-size: 12px; display: flex; align-items: center; gap: 10px; animation: popIn 0.25s;
        }
        .ai-attach-remove { cursor: pointer; color: rgba(255, 255, 255, 0.5); font-weight: 800; transition: color 0.15s; }
        .ai-attach-remove:hover { color: var(--rose); }

        /* MARKDOWN & CODE BLOCKS */
        .ai-msg-content p { margin-bottom: 12px; }
        .ai-msg-content p:last-child { margin-bottom: 0; }
        .ai-msg-content h1, .ai-msg-content h2, .ai-msg-content h3 { margin: 16px 0 10px; font-weight: 800; color: #fff; }
        .ai-msg-content code { font-family: 'JetBrains Mono', monospace; font-size: 0.88em; background: rgba(0, 0, 0, 0.5); padding: 3px 8px; border-radius: 8px; color: var(--mint); }
        .ai-code-wrapper { margin: 14px 0; background: rgba(3, 4, 12, 0.95); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
        .ai-code-header {
            display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: rgba(255, 255, 255, 0.04);
            font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255, 255, 255, 0.5); border-bottom: 1px solid var(--border);
        }
        .ai-code-copy { background: rgba(255, 255, 255, 0.08); border: none; color: #fff; padding: 4px 12px; border-radius: 8px; font-size: 11px; cursor: pointer; transition: all 0.2s; }
        .ai-code-copy:hover { background: var(--mint); color: #000; }
        .ai-code-wrapper pre { padding: 16px; overflow-x: auto; font-family: 'JetBrains Mono', monospace; font-size: 13px; line-height: 1.55; color: #e0e0e0; }

        .ai-think-progress {
            background: rgba(112, 0, 255, 0.12); border: 1px dashed rgba(112, 0, 255, 0.4); border-radius: 16px; padding: 14px 18px;
            margin-bottom: 14px; font-size: var(--fsm); color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 12px;
        }
        .ai-think-block { background: rgba(0, 0, 0, 0.4); border: 1px solid var(--border); border-radius: 14px; padding: 12px 16px; margin-bottom: 14px; }
        .ai-think-block summary { cursor: pointer; font-size: var(--fxs); font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: var(--violet); outline: none; }
        .ai-think-block summary:hover { color: #fff; }
        .ai-think-content { margin-top: 10px; font-size: var(--fsm); color: rgba(255,255,255,0.55); line-height: 1.5; }

        /* AI INPUT BOX */
        .ai-input-area {
            padding: 16px clamp(20px, 3vw, 36px); background: var(--surface); backdrop-filter: var(--bsm); border-top: 1px solid var(--border);
            display: flex; gap: 12px; align-items: flex-end; width: 100%; border-radius: 28px 28px 0 0;
        }
        .ai-attach-btn {
            background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); color: rgba(255, 255, 255, 0.8);
            width: 52px; height: 52px; border-radius: 18px; cursor: pointer; font-size: 20px; display: flex;
            align-items: center; justify-content: center; transition: all 0.25s var(--ea); flex-shrink: 0;
        }
        .ai-attach-btn:hover { background: rgba(255,255,255,0.12); color: #fff; border-color: rgba(255,255,255,0.3); }
        .ai-textarea {
            flex: 1; background: rgba(0, 0, 0, 0.6); border: 1px solid var(--border); color: #fff; font-family: inherit;
            padding: 14px 20px; border-radius: 20px; font-size: var(--fb); outline: none; resize: none; max-height: 160px; min-height: 52px; transition: all 0.25s var(--ea);
        }
        .ai-textarea:focus { border-color: var(--mint); box-shadow: 0 0 25px var(--mint-glow); }
        .ai-send-btn {
            background: var(--mint); border: none; color: #000; width: 52px; height: 52px; border-radius: 18px; cursor: pointer;
            font-size: 20px; font-weight: 800; display: flex; align-items: center; justify-content: center; transition: all 0.25s var(--ea); flex-shrink: 0;
        }
        .ai-send-btn:hover { background: #fff; box-shadow: 0 0 28px var(--mint); transform: scale(1.05); }
        .ai-send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

        /* NATIVE NOVA APPS */
        .nova-native-panel { padding-top: var(--topbar-offset, 0px); }
        .nova-native-app { width:100%;height:100%;min-height:0;background:#07090f;color:#f7f8fb;font-family:inherit;display:flex;overflow:hidden; }
        .nova-native-top { height:68px;display:flex;align-items:center;gap:9px;padding:0 16px;background:rgba(15,18,28,.94);border-bottom:1px solid rgba(255,255,255,.09);flex:0 0 auto; }
        .nova-app-mark,.nova-browser-logo,.nova-chat-setup-logo { display:grid;place-items:center;background:linear-gradient(135deg,var(--mint),#7095ff);color:#07100d;font-weight:900;box-shadow:0 10px 30px rgba(77,255,187,.22); }
        .nova-app-mark { width:38px;height:38px;border-radius:12px;margin-right:4px; }
        .nova-round-btn { width:36px;height:36px;border:0;border-radius:11px;background:rgba(255,255,255,.07);color:#fff;font-size:23px;cursor:pointer; }
        .nova-round-btn:hover,.nova-go-btn:hover { background:rgba(255,255,255,.13); }
        .nova-round-btn:disabled { opacity:.28;cursor:default; }
        .nova-address-form { display:flex;align-items:center;gap:8px;flex:1;max-width:920px;margin:auto;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.1);padding:5px 6px 5px 13px;border-radius:14px; }
        .nova-lock { color:var(--mint);font-size:15px; }
        .nova-browser-address { flex:1;background:transparent;border:0;outline:0;color:#fff;font:inherit;min-width:0; }
        .nova-go-btn,.nova-home-search button,.nova-chat-compose button,.nova-chat-setup button { border:0;border-radius:10px;background:var(--mint);color:#06110d;font:700 13px inherit;padding:9px 15px;cursor:pointer; }
        .nova-browser-native { flex-direction:column; }
        .nova-browser-stage { position:relative;flex:1;min-height:0;background:radial-gradient(circle at 50% 0,rgba(74,255,184,.1),transparent 42%),#080a10; }
        .nova-browser-home { position:absolute;inset:0;z-index:2;display:grid;place-items:center;padding:30px; }
        .nova-browser-home[hidden] { display:none; }
        .nova-browser-hero { width:min(620px,100%);text-align:center; }
        .nova-browser-logo { width:78px;height:78px;border-radius:25px;margin:0 auto 21px;font-size:36px; }
        .nova-browser-hero h2 { margin:0;font-size:clamp(32px,5vw,58px);letter-spacing:-.05em; }
        .nova-browser-hero p { color:rgba(255,255,255,.5);margin:10px 0 25px; }
        .nova-home-search { display:flex;padding:7px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.12);border-radius:17px;box-shadow:0 25px 80px rgba(0,0,0,.35); }
        .nova-home-search input { flex:1;min-width:0;border:0;background:transparent;color:#fff;padding:5px 12px;outline:0;font:inherit; }
        .nova-browser-shortcuts { display:flex;justify-content:center;gap:13px;margin-top:24px;flex-wrap:wrap; }
        .nova-browser-shortcuts button { width:82px;height:78px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#fff;border-radius:18px;font:800 21px inherit;cursor:pointer;transition:.2s; }
        .nova-browser-shortcuts button:hover { transform:translateY(-4px);border-color:rgba(74,255,184,.35);background:rgba(74,255,184,.08); }
        .nova-browser-shortcuts span { display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,.6);margin-top:6px; }
        .nova-browser-frame { position:absolute;inset:0;width:100%;height:100%;border:0;opacity:0;pointer-events:none;background:#fff; }
        .nova-browser-frame.on { opacity:1;pointer-events:auto; }
        .nova-browser-loading { position:absolute;left:0;right:0;top:0;height:3px;display:none;overflow:hidden;z-index:5; }
        .nova-browser-loading.on { display:block; }
        .nova-browser-loading i { display:block;height:100%;width:35%;background:var(--mint);box-shadow:0 0 13px var(--mint);animation:novaLoad 1s ease-in-out infinite; }
        @keyframes novaLoad { from{transform:translateX(-110%)}to{transform:translateX(310%)} }
        .nova-chat-native { background:#090b12; }
        .nova-chat-side { width:250px;display:flex;flex-direction:column;padding:14px;background:rgba(18,21,31,.96);border-right:1px solid rgba(255,255,255,.08); }
        .nova-chat-brand { display:flex;align-items:center;gap:11px;padding:7px 6px 18px; }
        .nova-chat-brand>span { width:37px;height:37px;border-radius:12px;display:grid;place-items:center;background:var(--mint);color:#06110d;font-weight:900; }
        .nova-chat-brand strong,.nova-chat-brand small { display:block; }
        .nova-chat-brand small { font-size:11px;color:#66efb9;margin-top:2px; }
        .nova-chat-label { margin:19px 8px 7px;text-transform:uppercase;letter-spacing:.13em;font-size:10px;color:rgba(255,255,255,.38);font-weight:800; }
        .nova-chat-label em { font-style:normal;float:right; }
        .nova-chat-room { display:flex;align-items:center;gap:10px;width:100%;border:0;background:transparent;color:rgba(255,255,255,.68);padding:9px;border-radius:11px;text-align:left;font:600 13px inherit;cursor:pointer; }
        .nova-chat-room:hover,.nova-chat-room.active { background:rgba(255,255,255,.075);color:#fff; }
        .nova-chat-room b { width:29px;height:29px;border-radius:9px;background:rgba(255,255,255,.08);display:grid;place-items:center;color:var(--mint); }
        .nova-chat-room i { width:7px;height:7px;border-radius:50%;background:#4dffb8;margin-left:auto; }
        .nova-chat-users { flex:1;overflow:auto;min-height:40px; }
        .nova-chat-empty-users { font-size:11px;color:rgba(255,255,255,.33);padding:0 9px;line-height:1.5; }
        .nova-chat-profile { display:flex;gap:10px;align-items:center;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);color:#fff;border-radius:14px;padding:9px;text-align:left;cursor:pointer; }
        .nova-chat-profile>span { width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#795cff,var(--mint));display:grid;place-items:center;font-weight:900; }
        .nova-chat-profile strong,.nova-chat-profile small { display:block;max-width:150px;overflow:hidden;text-overflow:ellipsis; }
        .nova-chat-profile small { color:rgba(255,255,255,.36);font-size:10px;margin-top:2px; }
        .nova-chat-main { position:relative;min-width:0;flex:1;display:flex;flex-direction:column; }
        .nova-chat-main>header { height:65px;display:flex;align-items:center;padding:0 22px;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(12,14,22,.88); }
        .nova-chat-main>header strong,.nova-chat-main>header small { display:block; }
        .nova-chat-main>header small { color:rgba(255,255,255,.4);font-size:11px;margin-top:3px; }
        .nova-live-dot { margin-left:auto;width:9px;height:9px;border-radius:50%;background:var(--mint);box-shadow:0 0 13px var(--mint); }
        .nova-chat-messages { flex:1;overflow:auto;padding:22px clamp(15px,4vw,48px); }
        .nova-chat-message { display:flex;gap:11px;margin:15px 0;max-width:760px; }
        .nova-chat-message.own { margin-left:auto;flex-direction:row-reverse;text-align:right; }
        .nova-message-avatar { width:34px;height:34px;flex:0 0 auto;border-radius:11px;background:rgba(255,255,255,.08);display:grid;place-items:center;color:var(--mint);font-weight:900; }
        .nova-chat-message span { display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(255,255,255,.38); }
        .nova-chat-message.own span { justify-content:flex-end; }
        .nova-chat-message strong { color:rgba(255,255,255,.8);font-size:12px; }
        .nova-chat-message p { display:inline-block;text-align:left;margin:5px 0 0;padding:10px 13px;border-radius:5px 15px 15px;background:rgba(255,255,255,.075);line-height:1.45;word-break:break-word; }
        .nova-chat-message.own p { background:linear-gradient(135deg,var(--mint),#54cfa0);color:#07110d;border-radius:15px 5px 15px 15px; }
        .nova-chat-compose { display:flex;gap:9px;padding:14px 20px 20px; }
        .nova-chat-compose input { flex:1;min-width:0;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.055);color:#fff;border-radius:14px;padding:13px 15px;outline:0;font:inherit; }
        .nova-chat-welcome { text-align:center;color:rgba(255,255,255,.42);margin:15vh auto 0; }
        .nova-chat-welcome span { font-size:35px;color:var(--mint); }
        .nova-chat-welcome h2 { color:#fff;margin:10px 0 5px; }
        .nova-chat-welcome p { margin:0;font-size:13px; }
        .nova-chat-setup { position:absolute;inset:0;z-index:8;background:rgba(5,6,10,.78);backdrop-filter:blur(16px);display:none;place-items:center;padding:20px; }
        .nova-chat-setup.on { display:grid; }
        .nova-chat-setup form { width:min(390px,100%);padding:31px;background:#151824;border:1px solid rgba(255,255,255,.1);border-radius:24px;text-align:center;box-shadow:0 28px 90px rgba(0,0,0,.5); }
        .nova-chat-setup-logo { width:62px;height:62px;border-radius:20px;margin:0 auto 18px;font-size:26px; }
        .nova-chat-setup h2 { margin:0;font-size:25px; }
        .nova-chat-setup p { color:rgba(255,255,255,.45);font-size:13px; }
        .nova-chat-setup input { box-sizing:border-box;width:100%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;border-radius:12px;padding:13px;outline:0;margin:8px 0 10px;font:inherit; }
        .nova-chat-setup button { width:100%;padding:12px; }
        .fpanel.nova-enter-right { animation:novaPanelInRight .36s cubic-bezier(.22,.8,.25,1) both; }
        .fpanel.nova-enter-left { animation:novaPanelInLeft .36s cubic-bezier(.22,.8,.25,1) both; }
        .fpanel.nova-exit-left { animation:novaPanelOutLeft .36s cubic-bezier(.55,0,.8,.35) both; }
        .fpanel.nova-exit-right { animation:novaPanelOutRight .36s cubic-bezier(.55,0,.8,.35) both; }
        @keyframes novaPanelInRight { from{transform:translateX(100%);opacity:.5}to{transform:translateX(0);opacity:1} }
        @keyframes novaPanelInLeft { from{transform:translateX(-26%);opacity:.5}to{transform:translateX(0);opacity:1} }
        @keyframes novaPanelOutLeft { from{transform:translateX(0);opacity:1}to{transform:translateX(-26%);opacity:.25} }
        @keyframes novaPanelOutRight { from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:.25} }
        @media (max-width:650px) {
            .nova-native-top { padding:0 8px;gap:5px;height:58px; }
            .nova-app-mark { display:none; }
            .nova-round-btn { width:32px;height:32px; }
            .nova-lock,.nova-go-btn { display:none; }
            .nova-chat-side { width:74px;padding:8px; }
            .nova-chat-brand div,.nova-chat-room span,.nova-chat-label,.nova-chat-profile div,.nova-chat-empty-users { display:none; }
            .nova-chat-brand { justify-content:center; }
            .nova-chat-room { justify-content:center;padding:8px; }
            .nova-chat-room i { position:absolute;margin:-27px 0 0 27px; }
            .nova-chat-profile { justify-content:center;margin-top:auto; }
            .nova-chat-compose { padding:9px; }
        }
        @media (prefers-reduced-motion:reduce) {
            .fpanel.nova-enter-right,.fpanel.nova-enter-left,.fpanel.nova-exit-left,.fpanel.nova-exit-right { animation-duration:.01ms; }
        }

        /* SHARED UTILITIES */
        .fp-msg { text-align: center; padding: 40px 16px; color: rgba(255, 255, 255, 0.4); font-size: var(--fb); }
        .fp-spin {
            width: 32px; height: 32px; border: 3px solid var(--border); border-top-color: var(--mint);
            border-radius: 50%; animation: spin 0.9s linear infinite; margin: 32px auto;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 6px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--mint); }

        @media (max-width: 850px) {
            header { flex-direction: column; align-items: stretch; gap: 12px; padding: 14px 18px; }
            .sw { max-width: 100%; justify-content: space-between; }
            #grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); padding: 16px; }
            .ai-drawer { position: absolute; left: 0; top: 0; bottom: 0; z-index: 100; transform: translateX(-100%); }
            .ai-drawer.on { transform: translateX(0); box-shadow: 10px 0 40px rgba(0,0,0,0.9); }
        }
        /* NOVA CLEAN SHELL */
        .nova-topbar{height:64px!important;padding:0 clamp(12px,2.2vw,28px)!important;gap:22px!important;background:rgba(8,10,16,.88)!important;border-bottom:1px solid rgba(255,255,255,.07)!important;backdrop-filter:blur(22px) saturate(150%)!important}
        .nova-wordmark{min-width:auto!important;gap:8px!important}
        .nova-wordmark>span:last-child{display:none!important}
        .nova-wordmark strong{font-size:22px!important;letter-spacing:-1px!important}
        .nova-bolt{font-size:25px!important}
        .nova-primary-links{display:flex!important;align-items:center!important;justify-content:center!important;gap:4px!important;flex:1!important;overflow:auto!important;scrollbar-width:none}
        .nova-primary-links::-webkit-scrollbar{display:none}
        .nova-primary-links button{display:flex!important;align-items:center!important;gap:7px!important;min-width:auto!important;padding:9px 12px!important;border-radius:11px!important;font-size:12px!important;color:rgba(255,255,255,.55)!important;background:transparent!important;border:0!important;white-space:nowrap}
        .nova-primary-links button i{font-style:normal;color:rgba(255,255,255,.38);font-size:14px}
        .nova-primary-links button:hover,.nova-primary-links button.active{color:#fff!important;background:rgba(255,255,255,.07)!important}
        .nova-primary-links button.active i{color:var(--mint)!important}
        .nova-top-actions{display:flex;align-items:center;gap:6px}
        .nova-top-actions>button{height:36px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.045);color:rgba(255,255,255,.72);border-radius:11px;padding:0 12px;font:600 12px inherit;cursor:pointer}
        #nova-command-button{display:flex;align-items:center;gap:18px;min-width:170px;justify-content:space-between}
        #nova-command-button span{color:rgba(255,255,255,.38);font-weight:500}
        #nova-command-button kbd,.nova-command-search kbd{font:700 10px inherit;color:rgba(255,255,255,.45);background:rgba(255,255,255,.07);padding:4px 6px;border-radius:6px;border:1px solid rgba(255,255,255,.07)}
        #tbr{height:42px!important;min-height:42px!important;padding:5px clamp(10px,2vw,24px)!important;gap:5px!important;background:#0c0f17!important;border-bottom:1px solid rgba(255,255,255,.06)!important}
        .tbt{height:32px!important;max-width:180px!important;min-width:100px!important;border-radius:9px!important;padding:0 8px!important;background:transparent!important;border:0!important}
        .tbt.on{background:rgba(255,255,255,.075)!important}
        .tb-new{width:32px!important;height:32px!important;border-radius:9px!important}
        .nova-library-toolbar{position:relative!important;top:auto!important;min-height:64px!important;height:auto!important;display:flex!important;flex-direction:row!important;align-items:center!important;gap:10px!important;padding:12px clamp(14px,3vw,36px)!important;background:transparent!important;border:0!important}
        .nova-library-toolbar .mbtn{flex:0 0 auto}
        .nova-game-search{display:flex;align-items:center;gap:8px;flex:1;max-width:560px;margin-right:auto;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);border-radius:13px;padding:0 13px}
        .nova-game-search>span{color:rgba(255,255,255,.35);font-size:18px}
        .nova-game-search .sbar{width:100%!important;max-width:none!important;height:40px!important;padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important}
        .nova-library-toolbar .fvbtn{position:static!important;width:auto!important;height:40px!important;display:flex!important;align-items:center!important;gap:7px!important;padding:0 13px!important;border-radius:12px!important}
        .nova-library-toolbar .fvbtn b{font-size:11px}
        .nova-quick-more{height:40px;padding:0 14px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:rgba(255,255,255,.045);color:#fff;cursor:pointer;letter-spacing:2px}
        .nova-library-intro{margin:4px clamp(14px,3vw,36px) 18px!important;padding:clamp(20px,3vw,34px)!important;min-height:0!important;border-radius:22px!important;background:linear-gradient(120deg,rgba(124,92,255,.14),rgba(65,255,184,.055))!important;border:1px solid rgba(255,255,255,.07)!important}
        .nova-library-intro h1{font-size:clamp(28px,4vw,48px)!important;line-height:1!important;margin:8px 0!important}
        .nova-library-intro p{max-width:560px!important;margin-bottom:0!important}
        .nova-section-title{padding:0 clamp(14px,3vw,36px) 10px!important}
        #grid{padding:0 clamp(14px,3vw,36px) 40px!important;gap:14px!important}
        .card{border-radius:16px!important;border:1px solid rgba(255,255,255,.065)!important;background:rgba(255,255,255,.035)!important;box-shadow:none!important}
        .card:hover{transform:translateY(-3px)!important;border-color:rgba(124,92,255,.32)!important;background:rgba(255,255,255,.055)!important}
        .fpbar{min-height:58px!important;padding:10px 18px!important;background:rgba(10,12,19,.9)!important}
        .fp-ttl{font-size:15px!important}
        .nova-native-top{height:58px!important}
        #nova-command{position:fixed;inset:0;z-index:20000;display:none;align-items:flex-start;justify-content:center;padding:11vh 18px 18px;background:rgba(3,4,8,.58);backdrop-filter:blur(10px)}
        #nova-command.on{display:flex}
        .nova-command-card{width:min(620px,100%);max-height:min(650px,78vh);display:flex;flex-direction:column;overflow:hidden;background:#11141d;border:1px solid rgba(255,255,255,.11);border-radius:20px;box-shadow:0 30px 100px rgba(0,0,0,.58);animation:novaCommandIn .18s ease-out}
        @keyframes novaCommandIn{from{opacity:0;transform:translateY(-10px) scale(.98)}to{opacity:1;transform:none}}
        .nova-command-search{height:60px;display:flex;align-items:center;gap:12px;padding:0 17px;border-bottom:1px solid rgba(255,255,255,.075)}
        .nova-command-search>span{font-size:22px;color:var(--mint)}
        .nova-command-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:#fff;font:500 16px inherit}
        .nova-command-section{padding:11px;overflow:auto}
        .nova-command-section>span{display:block;padding:4px 8px 8px;text-transform:uppercase;letter-spacing:.12em;font-size:9px;font-weight:800;color:rgba(255,255,255,.3)}
        .nova-command-item{width:100%;display:flex;align-items:center;gap:12px;padding:9px;border:0;border-radius:12px;background:transparent;color:#fff;text-align:left;cursor:pointer}
        .nova-command-item.selected,.nova-command-item:hover{background:rgba(124,92,255,.14)}
        .nova-command-item>i{width:36px;height:36px;display:grid;place-items:center;border-radius:10px;background:rgba(255,255,255,.065);color:var(--mint);font-style:normal;font-weight:800}
        .nova-command-item>span{min-width:0;flex:1}.nova-command-item strong,.nova-command-item small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .nova-command-item strong{font-size:13px}.nova-command-item small{font-size:10px;color:rgba(255,255,255,.38);margin-top:3px}
        .nova-command-item em{font-style:normal;color:rgba(255,255,255,.2)}
        .nova-command-card footer{display:flex;gap:16px;padding:10px 18px;border-top:1px solid rgba(255,255,255,.065);font-size:9px;color:rgba(255,255,255,.3)}
        .nova-command-empty{padding:35px;text-align:center;color:rgba(255,255,255,.35)}
        @media(max-width:760px){
            .nova-topbar{height:58px!important;padding:0 9px!important;gap:8px!important}
            .nova-wordmark strong{font-size:19px!important}
            .nova-primary-links{justify-content:flex-start!important}
            .nova-primary-links button{padding:8px 9px!important}
            .nova-primary-links button span{display:none}
            .nova-primary-links button i{font-size:17px}
            #nova-command-button{min-width:36px;width:36px;padding:0!important;justify-content:center}
            #nova-command-button span{display:none}
            #nova-command-button kbd{border:0;background:transparent;padding:0;font-size:0}
            #nova-command-button kbd:after{content:"⌕";font-size:18px;color:#fff}
            .nova-top-actions>button{padding:0 10px}
            .nova-top-actions>button[data-nova-action="os"]{display:none}
            #tbr{height:38px!important;min-height:38px!important;padding:3px 8px!important}
            .tbt{height:31px!important;min-width:82px!important;max-width:125px!important}
            .nova-library-toolbar{padding:9px 12px!important;gap:7px!important}
            .nova-library-toolbar .fvbtn b{display:none}
            .nova-library-intro{margin:2px 12px 14px!important;padding:21px!important;border-radius:18px!important}
            .nova-library-count{display:none!important}
            .nova-library-intro p{font-size:12px!important}
            .nova-section-title>span{display:none}
            #grid{padding:0 12px 28px!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}
            .card{min-width:0!important}
            .card .game-copy p{display:none!important}
            #nova-command{padding-top:7vh}
        }

        /* SIDEBAR WORKSPACE REDESIGN */
        :root{--nova-sidebar:240px}
        body{background:#050507!important}
        #app{box-sizing:border-box!important;padding-left:var(--nova-sidebar)!important;min-height:100vh!important;background:radial-gradient(65vw 52vw at 34% 5%,rgba(89,20,218,.42),transparent 64%),radial-gradient(45vw 42vw at 72% 15%,rgba(56,19,120,.22),transparent 70%),#050507!important}
        #app:before{content:"";position:fixed;left:var(--nova-sidebar);right:0;top:0;height:1px;background:linear-gradient(90deg,#7c3cff,#3b176a,transparent);z-index:7000}
        .nova-topbar{position:fixed!important;inset:0 auto 0 0!important;width:var(--nova-sidebar)!important;height:100vh!important;box-sizing:border-box!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;padding:14px 10px!important;gap:10px!important;background:rgba(5,5,8,.94)!important;border:0!important;border-right:1px solid rgba(255,255,255,.11)!important;backdrop-filter:blur(26px)!important;z-index:6000!important}
        .nova-wordmark{height:42px!important;justify-content:flex-start!important;padding:0 9px!important}
        .nova-wordmark strong{font-size:20px!important;font-weight:650!important}
        .nova-bolt{font-size:20px!important;color:#a87bff!important}
        .nova-side-search{width:100%;height:38px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.065);border-radius:5px;background:rgba(255,255,255,.04);color:rgba(255,255,255,.42);padding:0 10px;font:500 11px inherit;cursor:pointer}
        .nova-side-search:hover{background:rgba(255,255,255,.07);color:#fff}
        .nova-side-search kbd{font:700 9px inherit;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:3px 5px;color:rgba(255,255,255,.35)}
        .nova-sidebar-pins{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
        .nova-sidebar-pins button{height:66px;border:1px solid rgba(255,255,255,.055);border-radius:6px;background:rgba(255,255,255,.035);color:#b8a0ff;font:500 22px inherit;cursor:pointer;transition:.18s}
        .nova-sidebar-pins button:hover{background:rgba(124,60,255,.16);transform:translateY(-2px)}
        .nova-side-caption{padding:9px 9px 2px;color:rgba(255,255,255,.3);font-size:10px;text-transform:uppercase;letter-spacing:.12em}
        .nova-primary-links{width:100%!important;display:flex!important;flex:1!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-end!important;gap:2px!important;overflow:visible!important}
        .nova-primary-links button{width:100%!important;height:38px!important;justify-content:flex-start!important;border-radius:5px!important;padding:0 10px!important;font-size:11px!important}
        .nova-primary-links button i{width:21px;text-align:center!important;font-size:14px!important}
        .nova-primary-links button.active{background:rgba(124,60,255,.15)!important;color:#fff!important}
        #tbr{position:fixed!important;left:7px!important;top:177px!important;bottom:auto!important;width:226px!important;height:auto!important;max-height:calc(100vh - 515px)!important;min-height:0!important;box-sizing:border-box!important;display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:3px!important;padding:28px 0 0!important;background:transparent!important;border:0!important;overflow:auto!important;z-index:6002!important}
        #tbr:before{content:"Tabs";position:absolute;top:5px;left:10px;text-transform:uppercase;letter-spacing:.12em;font-size:9px;font-weight:800;color:rgba(255,255,255,.27)}
        .tbt{width:100%!important;max-width:none!important;min-width:0!important;height:36px!important;flex:0 0 36px!important;justify-content:flex-start!important;border-radius:5px!important;padding:0 9px!important}
        .tbt.on{background:rgba(124,60,255,.14)!important}
        .tbt .tb-ttl{flex:1!important;text-align:left!important}
        .tb-new{width:100%!important;height:34px!important;flex:0 0 34px!important;order:-1!important;border:0!important;background:transparent!important;border-radius:5px!important;text-align:left!important;padding-left:10px!important;color:rgba(255,255,255,.45)!important}
        .tb-new:after{content:"  New tab";font:500 11px inherit}
        .nova-library-toolbar{min-height:58vh!important;box-sizing:border-box!important;display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;padding:80px 24px 44px!important;background:transparent!important}
        .nova-home-logo strong{display:block;font-size:clamp(48px,6vw,74px);font-weight:400;letter-spacing:-.065em;color:#fff}
        .nova-home-logo span{display:block;width:64%;height:4px;margin:8px auto 0;border-radius:5px;background:#fff;box-shadow:0 0 18px rgba(255,255,255,.2)}
        .nova-library-toolbar>p{margin:18px 0;color:rgba(255,255,255,.34);font-size:12px}
        .nova-game-search{width:min(680px,84%)!important;max-width:680px!important;flex:0 0 auto!important;margin:0!important;height:50px!important;box-sizing:border-box!important;border-radius:7px!important;background:rgba(14,14,18,.85)!important;border:1px solid rgba(255,255,255,.17)!important;padding:0 16px!important;box-shadow:0 18px 60px rgba(0,0,0,.26)}
        .nova-game-search .sbar{height:48px!important;font-size:13px!important}
        .nova-home-actions{display:flex;gap:7px;margin-top:12px}
        .nova-home-actions button{position:static!important;width:auto!important;height:32px!important;display:flex!important;align-items:center!important;gap:6px!important;padding:0 10px!important;border:0!important;border-radius:6px!important;background:rgba(255,255,255,.045)!important;color:rgba(255,255,255,.52)!important;font:500 10px inherit!important;cursor:pointer}
        .nova-home-actions .mbtn span{display:none!important}
        .nova-home-actions .mbtn:before{content:"☰";font-size:12px}
        .nova-library-intro{display:none!important}
        .nova-section-title{max-width:1400px;margin:auto!important;padding:0 clamp(20px,3vw,46px) 12px!important}
        #grid{max-width:1400px;margin:auto!important;padding:0 clamp(20px,3vw,46px) 60px!important;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))!important}
        .card{background:rgba(12,12,16,.72)!important;border-color:rgba(255,255,255,.07)!important;backdrop-filter:blur(8px)}
        .fpanel{left:var(--nova-sidebar)!important;width:auto!important;background:#07070a!important}
        #theater{left:var(--nova-sidebar)!important;width:auto!important}
        .fpanel:before,#theater:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(55vw 38vw at 25% 0,rgba(83,25,190,.18),transparent 70%);z-index:-1}
        .fpbar{height:52px!important;min-height:52px!important;border-bottom-color:rgba(255,255,255,.07)!important;background:rgba(7,7,10,.8)!important}
        .nova-native-app{background:transparent!important}
        @media(max-width:760px){
            :root{--nova-sidebar:0px}
            #app{padding-left:0!important;padding-bottom:62px!important}
            #app:before{left:0}
            .nova-topbar{inset:auto 0 0 0!important;width:100%!important;height:62px!important;display:block!important;padding:5px 7px!important;border-right:0!important;border-top:1px solid rgba(255,255,255,.1)!important}
            .nova-wordmark,.nova-side-search,.nova-sidebar-pins,.nova-side-caption{display:none!important}
            .nova-primary-links{height:100%!important;display:flex!important;flex-direction:row!important;justify-content:space-around!important;align-items:center!important;gap:0!important}
            .nova-primary-links button{width:auto!important;min-width:44px!important;height:48px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;gap:3px!important;padding:0 6px!important;border-radius:7px!important}
            .nova-primary-links button i{width:auto!important;font-size:16px!important}
            .nova-primary-links button span{display:block!important;font-size:8px!important}
            .nova-primary-links button:nth-last-child(-n+2){display:none!important}
            #tbr{left:0!important;right:0!important;top:0!important;width:100%!important;max-height:none!important;height:39px!important;display:flex!important;flex-direction:row!important;padding:3px 5px!important;background:rgba(5,5,8,.92)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;backdrop-filter:blur(15px)!important;overflow-x:auto!important}
            #tbr:before{display:none}
            .tbt{width:auto!important;min-width:92px!important;max-width:132px!important;height:32px!important;flex:0 0 auto!important}
            .tb-new{width:34px!important;height:32px!important;flex:0 0 34px!important;padding:0!important;text-align:center!important;order:99!important}
            .tb-new:after{display:none}
            .nova-library-toolbar{min-height:50vh!important;padding:82px 14px 34px!important}
            .nova-home-logo strong{font-size:48px}
            .nova-library-toolbar>p{margin:14px 0}
            .nova-game-search{width:94%!important;height:46px!important}
            .nova-game-search .sbar{height:44px!important}
            .nova-section-title{padding:0 12px 10px!important}
            #grid{padding:0 10px 82px!important;grid-template-columns:repeat(2,minmax(0,1fr))!important}
            .fpanel{left:0!important;bottom:62px!important;padding-top:39px!important}
            #theater{left:0!important;bottom:62px!important;padding-top:39px!important}
            .nova-chat-side{width:64px!important}
        }

        /* REFERENCE MATCHED APP WORKSPACES */
        body.nova-app-open{--nova-sidebar:52px}
        body.nova-app-open .nova-topbar{width:52px!important;padding:8px 5px!important;align-items:center!important}
        body.nova-app-open .nova-wordmark{width:42px!important;height:38px!important;padding:0!important;justify-content:center!important}
        body.nova-app-open .nova-wordmark strong,body.nova-app-open .nova-side-search,body.nova-app-open .nova-sidebar-pins,body.nova-app-open .nova-side-caption{display:none!important}
        body.nova-app-open .nova-bolt{font-size:18px!important}
        body.nova-app-open .nova-primary-links{width:42px!important;justify-content:flex-end!important;gap:4px!important}
        body.nova-app-open .nova-primary-links button{width:42px!important;height:38px!important;padding:0!important;justify-content:center!important}
        body.nova-app-open .nova-primary-links button i{width:auto!important;font-size:14px!important}
        body.nova-app-open .nova-primary-links button span{display:none!important}
        body.nova-app-open #tbr{display:none!important}
        body.nova-app-open .fpanel,body.nova-app-open #theater{left:52px!important}
        body.nova-app-open #app:before{left:52px!important}
        .fpanel{background:radial-gradient(60vw 44vw at 28% 0,rgba(83,17,196,.48),transparent 62%),#050507!important}
        .fpanel>.fpbar{height:50px!important;min-height:50px!important;padding:6px 12px!important;background:rgba(6,6,10,.9)!important;border-bottom:1px solid rgba(255,255,255,.09)!important}
        .fpbar .fp-back{height:32px!important;padding:0 10px!important;border-radius:5px!important;background:transparent!important;border-color:rgba(255,255,255,.08)!important;font-size:10px!important}
        .fpbar .fp-ttl{font-size:12px!important;font-weight:650!important}
        .fpbar .fp-srch{height:32px!important;max-width:440px!important;border-radius:4px!important;background:#0c0c10!important;border:1px solid rgba(255,255,255,.16)!important}
        #ai-panel .fpbar{padding-left:13px!important}
        #ai-back{display:none!important}
        #ai-model-select{height:32px!important;margin-left:auto!important;padding:0 9px!important;border-radius:5px!important;background:#111116!important;border:1px solid rgba(255,255,255,.16)!important;color:rgba(255,255,255,.72)!important;font-size:10px!important}
        #ai-toggle-hist{height:32px!important;border-radius:5px!important;background:rgba(255,255,255,.045)!important;border:1px solid rgba(255,255,255,.08)!important;font-size:10px!important}
        #ai-panel .ai-layout{background:transparent!important}
        #ai-panel .ai-drawer{width:248px!important;background:rgba(5,5,8,.88)!important;border-right:1px solid rgba(255,255,255,.1)!important}
        .ai-drawer-h{padding:10px!important;border-color:rgba(255,255,255,.07)!important}
        .ai-new-btn{height:34px!important;padding:0 10px!important;justify-content:flex-start!important;border-radius:5px!important;background:transparent!important;border:1px solid rgba(255,255,255,.08)!important;color:rgba(255,255,255,.72)!important;font-size:10px!important}
        .ai-new-btn:hover{background:rgba(124,60,255,.14)!important;color:#fff!important;box-shadow:none!important}
        .ai-hist-list{padding:7px!important;gap:3px!important}
        .ai-hist-item{min-height:34px!important;padding:7px 9px!important;border-radius:5px!important;font-size:10px!important;white-space:nowrap;overflow:hidden}
        .ai-hist-item.on{background:rgba(124,60,255,.15)!important;border-color:rgba(155,112,255,.22)!important}
        .ai-main{background:radial-gradient(60vw 42vw at 26% 0,rgba(86,19,203,.34),transparent 64%),rgba(3,3,5,.76)!important}
        .ai-chat-body{padding:24px clamp(20px,5vw,74px) 125px!important;gap:14px!important}
        .ai-msg{max-width:820px!important}
        .ai-msg-avatar{width:30px!important;height:30px!important;border-radius:7px!important;background:rgba(255,255,255,.04)!important}
        .ai-msg-content{padding:11px 14px!important;border-radius:7px!important;background:rgba(11,11,15,.76)!important;border-color:rgba(255,255,255,.09)!important;font-size:12px!important}
        .ai-msg.user{justify-content:flex-end!important}
        .ai-msg.user .ai-msg-avatar{display:none!important}
        .ai-msg.user .ai-msg-content{flex:0 1 auto!important;max-width:70%!important;background:rgba(91,35,191,.48)!important;border-color:rgba(160,111,255,.24)!important}
        .ai-input-wrapper{position:absolute!important;left:50%!important;bottom:18px!important;transform:translateX(-50%)!important;width:min(760px,calc(100% - 36px))!important;max-width:none!important;z-index:4}
        .ai-input-area{min-height:70px!important;align-items:flex-end!important;padding:9px!important;border-radius:7px!important;background:#111117!important;border:1px solid rgba(255,255,255,.17)!important;box-shadow:0 18px 60px rgba(0,0,0,.4)!important}
        .ai-textarea{min-height:48px!important;padding:8px!important;font-size:12px!important}
        .ai-attach-btn,.ai-send-btn{width:34px!important;height:34px!important;border-radius:5px!important}
        .nova-native-top{height:50px!important;min-height:50px!important;background:rgba(6,6,10,.9)!important;border-color:rgba(255,255,255,.09)!important}
        .nova-address-form{height:34px!important;box-sizing:border-box!important;border-radius:5px!important;background:#0c0c10!important}
        .nova-round-btn,.nova-app-mark{height:32px!important;width:32px!important;border-radius:5px!important}
        .nova-browser-home{background:radial-gradient(58vw 43vw at 28% 0,rgba(84,17,201,.45),transparent 64%),#050507!important}
        .nova-browser-logo{background:transparent!important;color:#fff!important;box-shadow:none!important;font-weight:400!important;font-size:50px!important}
        .nova-browser-hero h2{font-weight:400!important;letter-spacing:-.04em!important}
        .nova-home-search{border-radius:6px!important;background:#0d0d11!important;border-color:rgba(255,255,255,.17)!important}
        .nova-browser-retry{margin:0 auto 14px;padding:8px 13px;border:1px solid rgba(255,255,255,.16);border-radius:6px;background:#15151b;color:#f4f3f8;font-family:inherit;font-size:12px;font-weight:650;cursor:pointer}.nova-browser-retry:hover{background:#202029}.nova-browser-retry[hidden]{display:none!important}

.nova-admin-panel .fp-body{padding:0!important}
.nova-admin-native{position:relative;height:100%;min-height:0;background:#08080b;color:#f5f4f8;font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.nova-admin-native *{box-sizing:border-box}.nova-admin-native button,.nova-admin-native input,.nova-admin-native textarea{font:inherit}
.nova-admin-login{height:100%;display:grid;place-items:center;padding:24px;background:radial-gradient(55vw 42vw at 50% 0,rgba(91,35,190,.36),transparent 68%),#08080b}
.nova-admin-login-card{width:min(410px,100%);padding:31px;border:1px solid #292932;border-radius:15px;background:#101014;box-shadow:0 25px 70px #0008}
.nova-admin-brand{display:flex;align-items:center;gap:11px;margin-bottom:27px}.nova-admin-brand>span{width:38px;height:38px;display:grid;place-items:center;border-radius:9px;background:linear-gradient(145deg,#956fff,#5e35d0);font-weight:900}.nova-admin-brand strong,.nova-admin-brand small{display:block}.nova-admin-brand strong{font-size:17px}.nova-admin-brand small{margin-top:2px;color:#8f8e9b;font-size:10px}
.nova-admin-login h2{margin:0 0 7px;font-size:25px;letter-spacing:-.04em}.nova-admin-login p{margin:0 0 22px;color:#9292a1;font-size:12px;line-height:1.55}.nova-admin-native label{display:block;margin:0 0 13px;color:#c9c8d0;font-size:11px;font-weight:700}.nova-admin-native input,.nova-admin-native textarea{width:100%;margin-top:6px;padding:11px 12px;border:1px solid #2b2b34;border-radius:8px;background:#0b0b0e;color:#f5f4f8;outline:0}.nova-admin-native input:focus,.nova-admin-native textarea:focus{border-color:#8059f1;box-shadow:0 0 0 3px #8059f122}.nova-admin-native textarea{min-height:84px;resize:vertical}
.nova-admin-primary,.nova-admin-secondary,.nova-admin-native header button,.nova-admin-editor-actions>button{border:0;border-radius:8px;color:white;font-weight:750;cursor:pointer}.nova-admin-primary{padding:11px 15px;background:linear-gradient(135deg,#885dff,#6338d7)}.nova-admin-primary:disabled{opacity:.45;cursor:not-allowed}.nova-admin-secondary,.nova-admin-native header button,.nova-admin-editor-actions>button{padding:9px 12px;border:1px solid #2b2b34;background:#17171d}.nova-admin-error{min-height:18px;margin-top:10px;color:#ff8994;font-size:11px;line-height:1.45}
.nova-admin-dashboard{height:100%;min-height:0;display:flex;flex-direction:column}.nova-admin-dashboard[hidden],.nova-admin-login[hidden]{display:none!important}.nova-admin-dashboard>header{height:56px;flex:0 0 56px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid #292932;background:#0d0d11}.nova-admin-dashboard>header strong,.nova-admin-dashboard>header small{display:block}.nova-admin-dashboard>header strong{font-size:13px}.nova-admin-dashboard>header small{margin-top:3px;color:#82818e;font-size:9px}.nova-admin-head-actions{display:flex;align-items:center;gap:10px}.nova-admin-connection{display:flex;align-items:center;gap:7px;color:#9292a1;font-size:10px}.nova-admin-connection i{width:7px;height:7px;border-radius:50%;background:#777}.nova-admin-connection.on i{background:#4de2a0;box-shadow:0 0 10px #4de2a077}.nova-admin-connection.warn i{background:#ffb451}
.nova-admin-dashboard>main{min-height:0;flex:1;overflow:auto;padding:25px;background:radial-gradient(60vw 40vw at 22% 0,rgba(80,24,171,.25),transparent 64%),#08080b}.nova-admin-hero{display:flex;align-items:end;justify-content:space-between;gap:20px;margin:0 auto 20px;max-width:1100px}.nova-admin-hero>div>span{color:#9e82ed;font-size:9px;font-weight:850;letter-spacing:.15em}.nova-admin-hero h2{margin:7px 0 7px;font-size:28px;letter-spacing:-.045em}.nova-admin-hero p{max-width:680px;margin:0;color:#9292a1;font-size:12px;line-height:1.55}.nova-admin-setup{max-width:1100px;margin:0 auto 14px;padding:11px 13px;border:1px solid #ffb45145;border-radius:9px;background:#ffb45110;color:#ffd49a;font-size:11px}
.nova-admin-hero-actions{display:flex;align-items:center;gap:8px;flex:0 0 auto}
.nova-admin-drop{width:min(1100px,100%);min-height:150px;margin:0 auto 16px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px dashed #4a3b70;border-radius:13px;background:#121017;color:#f5f4f8;cursor:pointer}.nova-admin-drop:hover,.nova-admin-drop.drag{border-color:#9a76ff;background:#171222}.nova-admin-drop b{font-size:28px;color:#9d7cff;font-weight:400}.nova-admin-drop strong{margin:7px 0 5px;font-size:14px}.nova-admin-drop span{color:#858491;font-size:10px}
.nova-admin-queue-card,.nova-admin-library{width:min(1100px,100%);margin:0 auto 16px;border:1px solid #292932;border-radius:12px;background:#101014;overflow:hidden}.nova-admin-queue-card[hidden]{display:none}.nova-admin-section-head{min-height:50px;display:flex;align-items:center;justify-content:space-between;gap:15px;padding:10px 14px;border-bottom:1px solid #292932}.nova-admin-section-head>div>strong,.nova-admin-section-head>div>span{display:block}.nova-admin-section-head>div>strong{font-size:12px}.nova-admin-section-head>div>span{margin-top:3px;color:#7f7e8b;font-size:9px}.nova-admin-section-head>button{border:0;background:transparent;color:#9292a1;font-size:10px;cursor:pointer}
.nova-admin-queue{max-height:360px;overflow:auto}.nova-admin-queue-row{display:grid;grid-template-columns:40px minmax(0,1fr) 28px;gap:11px;align-items:center;padding:11px 14px;border-bottom:1px solid #24242b}.nova-admin-file-icon{width:38px;height:38px;display:grid;place-items:center;border-radius:8px;background:#8059f11b;color:#b69eff;font-size:8px;font-weight:850}.nova-admin-queue-row input{height:31px;margin:0 0 5px;padding:7px 9px}.nova-admin-queue-row small{display:block;color:#777683;font-size:8px}.nova-admin-queue-row>button{border:0;background:transparent;color:#888;font-size:18px;cursor:pointer}.nova-admin-upload-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px}.nova-admin-upload-bar>span{color:#9292a1;font-size:10px}
.nova-admin-search{position:relative;width:min(300px,48%)}.nova-admin-search span{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#777}.nova-admin-search input{height:33px;margin:0;padding:7px 9px 7px 29px}.nova-admin-catalog{max-height:430px;overflow:auto}.nova-admin-catalog>p{padding:35px;text-align:center;color:#858491;font-size:11px}.nova-admin-game-row{display:grid;grid-template-columns:34px minmax(0,1fr) 65px 44px 49px;gap:9px;align-items:center;padding:10px 13px;border-bottom:1px solid #24242b}.nova-admin-game-letter{width:31px;height:31px;display:grid;place-items:center;border-radius:8px;background:#8059f116;color:#b79eff;font-weight:800}.nova-admin-game-row>div{min-width:0}.nova-admin-game-row strong,.nova-admin-game-row small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nova-admin-game-row strong{font-size:11px}.nova-admin-game-row small{margin-top:4px;color:#777683;font-size:8px}.nova-admin-game-row em{color:#9d91bd;font-size:8px;font-style:normal}.nova-admin-game-row>button{padding:6px 5px;border:0;background:transparent;color:#aaa9b5;font-size:9px;cursor:pointer}.nova-admin-game-row>button:last-child{color:#ff8994}
.nova-admin-editor{position:absolute;inset:0;z-index:8;display:grid;place-items:center;padding:20px;background:#000b;backdrop-filter:blur(7px)}.nova-admin-editor[hidden]{display:none}.nova-admin-editor>form{width:min(530px,100%);max-height:calc(100% - 20px);overflow:auto;padding:21px;border:1px solid #303039;border-radius:13px;background:#111116;box-shadow:0 25px 75px #000}.nova-admin-editor-head{display:flex;align-items:start;justify-content:space-between;margin-bottom:18px}.nova-admin-editor-head strong,.nova-admin-editor-head small{display:block}.nova-admin-editor-head strong{font-size:17px}.nova-admin-editor-head small{margin-top:4px;color:#858491;font-size:9px}.nova-admin-editor-head button{border:0;background:transparent;color:#999;font-size:22px;cursor:pointer}.nova-admin-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}.nova-admin-checks label{display:flex;align-items:center;gap:7px;margin:0;padding:9px;border:1px solid #292932;border-radius:8px}.nova-admin-checks input{width:14px;margin:0}.nova-admin-editor-actions{display:flex;justify-content:flex-end;gap:8px}
.nova-admin-code-editor{position:absolute;inset:0;z-index:9;padding:14px;background:#07070bf2;backdrop-filter:blur(9px)}.nova-admin-code-editor[hidden]{display:none}.nova-admin-code-editor>form{height:100%;display:flex;flex-direction:column;padding:16px;border:1px solid #303039;border-radius:12px;background:#0d0d12;box-shadow:0 25px 75px #000}.nova-admin-code-editor .nova-admin-editor-head{margin-bottom:10px}.nova-admin-code-label{min-height:0;flex:1;display:flex!important;flex-direction:column}.nova-admin-code-editor textarea{min-height:0;flex:1;resize:none;tab-size:4;font:11px/1.55 ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",monospace!important;white-space:pre;overflow:auto}.nova-admin-code-editor .nova-admin-editor-actions{flex-wrap:wrap}.nova-admin-code-editor .nova-admin-error{margin-right:auto}
@media(max-width:700px){.nova-admin-dashboard>header{padding:0 12px}.nova-admin-connection{display:none}.nova-admin-dashboard>main{padding:16px 11px}.nova-admin-hero{align-items:start;flex-direction:column}.nova-admin-hero-actions{width:100%;flex-wrap:wrap}.nova-admin-hero h2{font-size:24px}.nova-admin-drop{min-height:125px}.nova-admin-game-row{grid-template-columns:31px minmax(0,1fr) 42px 46px}.nova-admin-game-row>em{display:none}.nova-admin-queue-row input[data-admin-field="desc"]{display:none}.nova-admin-editor{align-items:end;padding:0}.nova-admin-editor>form{width:100%;max-height:90%;border-radius:15px 15px 0 0}.nova-admin-checks{grid-template-columns:1fr}.nova-admin-code-editor{padding:0}.nova-admin-code-editor>form{border-radius:0;border-left:0;border-right:0}.nova-admin-code-editor textarea{font-size:10px!important}}

        .nova-browser-shortcuts button{border-radius:6px!important;background:rgba(255,255,255,.035)!important}
        .nova-chat-side{width:248px!important;background:rgba(5,5,8,.9)!important;border-color:rgba(255,255,255,.1)!important}
        .nova-chat-main{background:radial-gradient(58vw 42vw at 28% 0,rgba(84,17,201,.33),transparent 65%),#050507!important}
        .nova-chat-main>header{height:50px!important;background:rgba(6,6,10,.76)!important;border-color:rgba(255,255,255,.08)!important}
        .nova-chat-room,.nova-chat-profile{border-radius:5px!important}
        .nova-chat-message p{border-radius:6px!important}
        .nova-chat-compose{width:min(760px,calc(100% - 30px));box-sizing:border-box;margin:0 auto 10px!important;padding:8px!important;background:#111117!important;border:1px solid rgba(255,255,255,.15)!important;border-radius:7px!important}
        .nova-chat-compose input{border:0!important;background:transparent!important;border-radius:0!important}
        .nova-chat-compose button{border-radius:5px!important}
        #settings-panel>.fpbar{display:none!important}
        #settings-panel>.fp-body{padding:0!important;overflow:hidden!important}
        #settings-panel .nova-mega-settings{height:100%!important;display:block!important;overflow-y:auto!important;background:radial-gradient(68vw 44vw at 35% 0,rgba(83,17,198,.53),transparent 65%),#050507!important}
        #settings-panel .nova-settings-side{display:none!important}
        #settings-panel .nova-settings-main{width:min(760px,calc(100% - 34px))!important;max-width:760px!important;margin:0 auto!important;padding:48px 0 90px!important;overflow:visible!important;background:transparent!important}
        .nova-settings-heading{margin:0 0 22px!important}
        .nova-settings-heading h1{margin:0!important;font-size:30px!important;letter-spacing:-.04em!important}
        .nova-settings-heading p{margin:7px 0 0!important;color:rgba(255,255,255,.46)!important;font-size:11px!important}
        #settings-panel .nova-set-page,#settings-panel .nova-set-page.active{display:block!important;margin:0 0 14px!important;padding:18px 20px!important;background:rgba(9,9,13,.86)!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:7px!important;box-shadow:none!important}
        #settings-panel .nova-set-page>h2{margin:0 0 3px!important;font-size:10px!important;text-transform:uppercase!important;letter-spacing:.08em!important;color:rgba(255,255,255,.45)!important}
        #settings-panel .nova-settings-sub{margin:0 0 15px!important;font-size:10px!important;color:rgba(255,255,255,.35)!important}
        #settings-panel .nova-switch-row,#settings-panel .nova-perf-card,#settings-panel .nova-control-grid>label,#settings-panel .nova-set-page>label{min-height:54px!important;box-sizing:border-box!important;margin:0!important;padding:11px 0!important;border:0!important;border-top:1px solid rgba(255,255,255,.09)!important;border-radius:0!important;background:transparent!important}
        #settings-panel .nova-set-page>:nth-child(3){border-top:0!important}
        #settings-panel .nova-switch-row b,#settings-panel .nova-perf-card b,#settings-panel .nova-set-page>label{font-size:11px!important}
        #settings-panel .nova-switch-row small,#settings-panel .nova-perf-card span{font-size:9px!important;color:rgba(255,255,255,.4)!important}
        #settings-panel select,#settings-panel input[type="text"],#settings-panel input[type="url"]{min-width:160px!important;height:34px!important;border-radius:3px!important;background:#111116!important;border:1px solid rgba(255,255,255,.18)!important}
        #settings-panel .nova-theme-grid,#settings-panel .nova-wall-grid,#settings-panel .nova-font-grid{gap:7px!important}
        #settings-panel .nova-theme-card,#settings-panel .nova-wall-card,#settings-panel .nova-font-card{border-radius:5px!important;background:rgba(255,255,255,.035)!important}
        #settings-panel input[type="checkbox"]{accent-color:#8a52ff!important}
        #settings-panel button{border-radius:4px!important}
        #anime-panel .fp-body,#yt-panel .fp-body{background:radial-gradient(58vw 42vw at 28% 0,rgba(84,17,201,.28),transparent 65%),#050507!important}
        .acd{border-radius:6px!important;background:rgba(10,10,14,.82)!important;border-color:rgba(255,255,255,.08)!important}
        @media(max-width:760px){
            body.nova-app-open{--nova-sidebar:0px}
            body.nova-app-open .nova-topbar{width:100%!important}
            body.nova-app-open .nova-primary-links{width:100%!important;flex-direction:row!important}
            body.nova-app-open .nova-primary-links button{width:auto!important}
            body.nova-app-open .nova-primary-links button span{display:block!important}
            body.nova-app-open .fpanel,body.nova-app-open #theater{left:0!important}
            #ai-panel .ai-drawer{position:absolute!important;z-index:6!important;width:235px!important}
            #settings-panel .nova-settings-main{width:calc(100% - 20px)!important;padding-top:55px!important}
            #settings-panel .nova-set-page{padding:15px!important}
            .ai-input-wrapper{bottom:10px!important;width:calc(100% - 18px)!important}
            .nova-chat-side{width:64px!important}
        }

        `;
        document.head.appendChild(s);
        if(!document.querySelector('meta[name="viewport"]')){
            const vp=document.createElement("meta");
            vp.name="viewport";
            vp.content="width=device-width,initial-scale=1,viewport-fit=cover";
            document.head.appendChild(vp);
        }
    },

    // ── BACKGROUND EFFECTS ───────────────────────────────────────
    // Disabled by default: the old particle network ran continuously and
    // performed an O(n²) distance check every animation frame.
    dots() {
        const old=document.getElementById("particle-canvas");
        if(old) old.remove();
    },

    // ── UI MODE SYSTEM ──────────────────────────────────────────
    uiModeInit(){
        let saved=DEFAULT_UI_MODE;
        try{ saved=localStorage.getItem("nova_ui_mode")||DEFAULT_UI_MODE; }catch(e){}
        this.uiMode=saved==="os"?"os":"classic";
        this.applyUIMode();
    },
    applyUIMode(){
        const os=this.uiMode==="os";
        document.body.classList.toggle("os-mode",os);
        if(os){
            document.getElementById("app")?.classList.remove("on");
            document.getElementById("os-desktop")?.remove();
            this.renderOSDesktop();
        }else{
            document.getElementById("os-desktop")?.remove();
            document.body.classList.remove("os-window-open");
            document.getElementById("app")?.classList.add("on");
        }
    },
    setUIMode(mode){
        this.uiMode=mode==="os"?"os":"classic";
        try{ localStorage.setItem("nova_ui_mode",this.uiMode); }catch(e){}
        document.getElementById("mode-chooser")?.remove();
        this.applyUIMode();
    },

    _osIcons(){
        return [
            {id:"finder",label:"Files",icon:this.osIcon("files"),action:()=>this.osOpenWindow("Files","finder",this.osFinderBody())},
            {id:"games",label:"Games",icon:this.osIcon("games"),action:()=>this.osOpenWindow("Games","games",this.osGamesBody())},
            {id:"ai",label:"Nova AI",icon:this.osIcon("ai"),action:()=>this.osOpenService("ai")},
            {id:"youtube",label:"YouTube",icon:this.osIcon("youtube"),action:()=>this.osOpenService("youtube")},
            {id:"anime",label:"Anime",icon:this.osIcon("anime"),action:()=>this.osOpenService("anime")},
            {id:"settings",label:"Settings",icon:this.osIcon("settings"),action:()=>this.osOpenWindow("System Settings","settings",this.osSettingsBody())},
            {id:"admin",label:"Nova Admin",icon:this.osIcon("settings"),action:()=>this.osOpenAdminWindow()},
            {id:"about",label:"About Nova","icon":"●",action:()=>this.osOpenWindow("About This Mac","about",this.osAboutBody())}
        ];
    },
    renderOSDesktop(){
        const old=document.getElementById("os-desktop"); if(old) old.remove();
        const desk=document.createElement("div"); desk.id="os-desktop";
        desk.innerHTML=`
            <div class="os-wallpaper"><div class="os-wallpaper-orb o1"></div><div class="os-wallpaper-orb o2"></div><div class="os-wallpaper-grid"></div></div>
            <div class="os-menubar">
                <div class="os-menu-left"><button class="os-apple" id="os-apple">✦</button><button class="os-menu-item strong">Nova</button><button class="os-menu-item" id="nova-gaming-ui">Gaming UI</button><button class="os-menu-item" id="nova-save-html">Save</button><button class="os-menu-item" id="nova-cloak-site">Cloak</button><button class="os-menu-item" id="nova-request-games">Request Games</button></div>
                <div class="os-menu-right"><span class="os-status-dot"></span><span id="os-net">Online</span><span id="os-clock">--:--</span><button class="os-control" id="os-control">⌄</button></div>
            </div>
            <div class="os-desktop-icons" id="os-desktop-icons"></div>
            <div class="os-window-layer" id="os-window-layer"></div>
            <div class="os-dock-wrap"><div class="os-dock-pro" id="os-dock-pro"></div></div>
            <div class="os-quick-panel" id="os-quick-panel"><div class="os-qhead">Control Center</div><div class="os-qgrid"><button>Wi‑Fi<br><small>Connected</small></button><button>Focus<br><small>Off</small></button><button>Brightness<br><small>100%</small></button><button>Volume<br><small>80%</small></button></div></div>
            <div class="os-app-menu" id="os-app-menu"><div class="os-app-menu-title">Nova</div><button data-os-action="about">About Nova</button><button data-os-action="settings">System Settings</button></div>
        `;
        document.body.appendChild(desk);
        this.osBindDesktop();
        this.osRenderIcons();
        this.osRenderDock();
        this.osClockStart();
        this.osChatNotificationControls();
        window.dispatchEvent(new Event("nova:os-rendered"));
        // Let the OS shell paint before constructing the Games window.
        // This makes 1234 = feel instant instead of blocking on a large DOM build.
        const openGames=()=>{
            if(document.getElementById("os-desktop"))
                this.osOpenWindow("Games","games",this.osGamesBody(),{center:true,width:980,height:690,skipFocus:false});
        };
        if("requestIdleCallback" in window) requestIdleCallback(openGames,{timeout:350});
        else setTimeout(openGames,80);
    },
    osIcon(name){
        const common = 'viewBox="0 0 64 64" width="42" height="42" aria-hidden="true"';
        const icons = {
            games: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-games" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7c5cff"/><stop offset="1" stop-color="#22c1ff"/></linearGradient></defs><rect x="7" y="15" width="50" height="34" rx="12" fill="url(#g-games)"/><path d="M22 25v14M15 32h14M42 28h.01M49 35h.01" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
            files: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-files" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffd76a"/><stop offset="1" stop-color="#ff9a3d"/></linearGradient></defs><path d="M8 17a7 7 0 0 1 7-7h13l6 6h15a7 7 0 0 1 7 7v24H8Z" fill="url(#g-files)"/><path d="M8 22h48" stroke="rgba(255,255,255,.55)" stroke-width="3"/></svg>`,
            ai: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-ai" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#b36cff"/><stop offset="1" stop-color="#ff5fc8"/></linearGradient></defs><circle cx="32" cy="32" r="24" fill="url(#g-ai)"/><path d="m32 17 3.5 9.5L45 30l-9.5 3.5L32 43l-3.5-9.5L19 30l9.5-3.5Z" fill="#fff"/></svg>`,
            youtube: `<svg ${common} class="os-vector-icon"><rect x="7" y="13" width="50" height="38" rx="12" fill="#ff1744"/><path d="m28 24 14 8-14 8Z" fill="#fff"/></svg>`,
            anime: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-anime" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff75c3"/><stop offset="1" stop-color="#7d6cff"/></linearGradient></defs><rect x="8" y="8" width="48" height="48" rx="16" fill="url(#g-anime)"/><circle cx="24" cy="29" r="4" fill="#fff"/><circle cx="40" cy="29" r="4" fill="#fff"/><path d="M21 39c7 5 15 5 22 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
            browser: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-browser" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#36d1dc"/><stop offset="1" stop-color="#5b86e5"/></linearGradient></defs><rect x="7" y="7" width="50" height="50" rx="16" fill="url(#g-browser)"/><circle cx="32" cy="32" r="15" fill="none" stroke="#fff" stroke-width="3"/><path d="M17 32h30M32 17c5 5 8 10 8 15s-3 10-8 15c-5-5-8-10-8-15s3-10 8-15Z" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`,
            chatroom: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-chat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#00d2a8"/><stop offset="1" stop-color="#2a7fff"/></linearGradient></defs><rect x="7" y="9" width="50" height="40" rx="14" fill="url(#g-chat)"/><path d="M19 49l-2 8 12-8" fill="url(#g-chat)"/><circle cx="22" cy="29" r="3" fill="#fff"/><circle cx="32" cy="29" r="3" fill="#fff"/><circle cx="42" cy="29" r="3" fill="#fff"/></svg>`,
            education: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-edu" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffb347"/><stop offset="1" stop-color="#ff5f6d"/></linearGradient></defs><rect x="7" y="7" width="50" height="50" rx="16" fill="url(#g-edu)"/><path d="M19 18h26v28H19z" fill="rgba(255,255,255,.18)" stroke="#fff" stroke-width="2.5"/><path d="M24 25h16M24 32h7M35 32h5M24 39h5M33 39h7" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
            settings: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-settings" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8d98ab"/><stop offset="1" stop-color="#526074"/></linearGradient></defs><path d="m26 7 4 5a21 21 0 0 1 4 0l4-5 7 4-2 6a21 21 0 0 1 3 3l7-1v9l-6 2a20 20 0 0 1 0 4l6 2v9l-7-1a21 21 0 0 1-3 3l2 6-7 4-4-5a21 21 0 0 1-4 0l-4 5-7-4 2-6a21 21 0 0 1-3-3l-7 1v-9l6-2a20 20 0 0 1 0-4l-6-2v-9l7 1a21 21 0 0 1 3-3l-2-6Z" fill="url(#g-settings)"/><circle cx="32" cy="32" r="9" fill="#fff" opacity=".9"/></svg>`,
            trash: `<svg ${common} class="os-vector-icon"><defs><linearGradient id="g-trash" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9fe2ff"/><stop offset="1" stop-color="#6aa1ff"/></linearGradient></defs><path d="M17 19h30l-2 34H19Z" fill="url(#g-trash)"/><path d="M14 16h36M25 11h14v5H25Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M25 26v17M39 26v17" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/></svg>`,
        };
        return icons[name] || icons.games;
    },
    osRenderIcons(){
        const host=document.getElementById("os-desktop-icons"); if(!host)return;
        const icons=[
            {label:"Games",icon:this.osIcon("games"),action:()=>this.osOpenWindow("Games","games",this.osGamesBody())},
            {label:"Files",icon:this.osIcon("files"),action:()=>this.osOpenWindow("Files","finder",this.osFinderBody())},
            {label:"Trash",icon:this.osIcon("trash"),action:()=>this.osOpenWindow("Trash","trash",`<div class="os-empty-state"><div class="os-big-icon">♜</div><h2>Trash is Empty</h2><p>Nothing to see here</p></div>`)}
        ];
        host.innerHTML=icons.map((x,i)=>`<button class="os-desktop-icon" data-i="${i}"><span class="os-dicon">${x.icon}</span><span>${this.esc(x.label)}</span></button>`).join("");
        host.querySelectorAll(".os-desktop-icon").forEach((b,i)=>b.addEventListener("click",()=>icons[i].action()));
    },
    osRenderDock(){
        const host=document.getElementById("os-dock-pro"); if(!host)return;
        const apps=[
            {id:"finder",label:"Files",icon:this.osIcon("files"),action:()=>this.osOpenWindow("Files","finder",this.osFinderBody())},
            {id:"games",label:"Games",icon:this.osIcon("games"),action:()=>this.osOpenWindow("Games","games",this.osGamesBody())},
            {id:"ai",label:"Nova AI",icon:this.osIcon("ai"),action:()=>this.osOpenService("ai")},
            {id:"youtube",label:"YouTube",icon:this.osIcon("youtube"),action:()=>this.osOpenService("youtube")},
            {id:"anime",label:"Anime",icon:this.osIcon("anime"),action:()=>this.osOpenService("anime")},
            {id:"browser",label:"Nova Browser",icon:this.osIcon("browser"),action:()=>this.osOpenBrowserWindow()},
            {id:"chatroom",label:"Nova Chatroom",icon:this.osIcon("chatroom"),action:()=>this.osOpenChatroomWindow()},
            {id:"education",label:"Nova Education",icon:this.osIcon("education"),action:()=>this.osOpenEducationWindow()},
            {id:"settings",label:"Settings",icon:this.osIcon("settings"),action:()=>this.osOpenWindow("System Settings","settings",this.osSettingsBody())},
        ];
        host.innerHTML=apps.map((a,i)=>`<button class="os-dock-item" data-i="${i}" title="${this.esc(a.label)}"><span class="os-dock-icon">${a.icon}</span><span class="os-dock-dot"></span></button>`).join("");
        host.querySelectorAll(".os-dock-item").forEach((b,i)=>{
            b.addEventListener("click",()=>apps[i].action());
            b.addEventListener("mouseenter",e=>this.osDockTooltip(apps[i].label,e));
            b.addEventListener("mousemove",e=>this.osDockTooltip(apps[i].label,e));
            b.addEventListener("mouseleave",()=>this.osHideDockTooltip());
        });
    },
    osDockTooltip(label, event){
        let tip=document.getElementById("os-dock-tooltip");
        if(!tip){
            tip=document.createElement("div");
            tip.id="os-dock-tooltip";
            tip.className="os-dock-tooltip";
            document.getElementById("os-desktop")?.appendChild(tip);
        }
        tip.textContent=label;
        const host=document.querySelector(".os-dock-wrap");
        const rect=host?.getBoundingClientRect();
        const b=event?.currentTarget?.getBoundingClientRect();
        if(rect && b){
            tip.style.left=(b.left+b.width/2)+"px";
            tip.style.top=(rect.top-10)+"px";
        }
        tip.classList.add("on");
    },
    osHideDockTooltip(){
        document.getElementById("os-dock-tooltip")?.classList.remove("on");
    },

    osClockStart(){
        clearInterval(this._osClockTimer);
        const tick=()=>{const e=document.getElementById("os-clock");if(e)e.textContent=new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"});};
        tick(); this._osClockTimer=setInterval(tick,30000);
    },
    osBindDesktop(){
        const root=document.getElementById("os-desktop");
        root.querySelector("#os-apple")?.addEventListener("click",e=>{e.stopPropagation();document.getElementById("os-app-menu")?.classList.toggle("on")});
        root.querySelector("#os-control")?.addEventListener("click",e=>{e.stopPropagation();document.getElementById("os-quick-panel")?.classList.toggle("on")});
        root.querySelector("#nova-gaming-ui")?.addEventListener("click",()=>this.setUIMode("classic"));
        root.querySelectorAll("[data-os-action]").forEach(b=>b.addEventListener("click",()=>{
            const a=b.dataset.osAction;
            document.getElementById("os-app-menu")?.classList.remove("on");
            if(a==="settings") this.osOpenWindow("System Settings","settings",this.osSettingsBody());
            else if(a==="about") this.osOpenWindow("About This Mac","about",this.osAboutBody());
        }));
        // Every visible desktop control gets a real action
        root.querySelectorAll(".os-menu-item").forEach(btn=>{
            const label=(btn.textContent||"").trim().toLowerCase();
            btn.addEventListener("click",()=>{
                if(label==="nova"){ document.getElementById("os-app-menu")?.classList.toggle("on"); return; }
                if(label==="file"){ this.osOpenWindow("Files","finder",this.osFinderBody()); return; }
                if(label==="edit"){ this.osOpenWindow("Games","games",this.osGamesBody()); return; }
                if(label==="view"){ this.osOpenWindow("About This Mac","about",this.osAboutBody()); return; }
                if(label==="window"){
                    const win=document.querySelector(".os-window.focused");
                    if(win) this.osToggleMax(win);
                    return;
                }
                if(label==="help"){ this.osOpenWindow("About This Mac","about",this.osAboutBody()); return; }
            });
        });

        root.querySelectorAll(".os-qgrid button").forEach(btn=>{
            btn.addEventListener("click",()=>{
                const label=(btn.textContent||"").toLowerCase();
                btn.classList.toggle("on");
                if(label.includes("wi")) {
                    document.getElementById("os-net").textContent = btn.classList.contains("on") ? "Connected" : "Offline";
                } else if(label.includes("focus")) {
                    btn.innerHTML = `Focus<br><small>${btn.classList.contains("on")?"On":"Off"}</small>`;
                } else if(label.includes("brightness")) {
                    btn.innerHTML = `Brightness<br><small>${btn.classList.contains("on")?"70%":"100%"}</small>`;
                } else if(label.includes("volume")) {
                    btn.innerHTML = `Volume<br><small>${btn.classList.contains("on")?"35%":"80%"}</small>`;
                }
            });
        });


        const dock = root.querySelector(".os-dock-wrap");
        const hotzone = document.createElement("div");
        hotzone.className = "os-dock-hotzone";
        root.appendChild(hotzone);

        let dockTimer = 0;
        let dockDodgeState = false;
        const updateDock = ()=>{
            if(!dock) return;
            const windows=[...root.querySelectorAll(".os-window:not(.minimized):not(.maximized)")];
            const hit=windows.some(w=>{
                const r=w.getBoundingClientRect();
                const horizontal=r.right > innerWidth*.08 && r.left < innerWidth*.92;
                const vertical=r.bottom > innerHeight-126 && r.top < innerHeight-12;
                return horizontal && vertical;
            });
            if(hit===dockDodgeState) return;
            dockDodgeState=hit;
            dock.classList.toggle("os-dodged",hit);
            root.classList.toggle("os-dock-hidden",hit);
        };
        root.addEventListener("pointermove",e=>{
            const hot=e.clientY >= innerHeight-24;
            root.classList.toggle("os-bottom-hot",hot);
            if(hot){
                dockDodgeState=false;
                dock.classList.remove("os-dodged");
                root.classList.remove("os-dock-hidden");
            }else{
                updateDock();
            }
        });
        root.addEventListener("pointerleave",()=>root.classList.remove("os-bottom-hot"));
        window.addEventListener("resize",updateDock);
        // No polling loop: dock geometry updates only on pointer movement and resize.

        // Add the macOS/KDE-style name tooltip to every dock item.
        root.querySelectorAll(".os-dock-item").forEach(item=>{
            if(!item.querySelector(".os-dock-tooltip")){
                const label=item.getAttribute("aria-label") || item.dataset.label || item.title || "";
                if(label){
                    const tip=document.createElement("span");
                    tip.className="os-dock-tooltip";
                    tip.textContent=label;
                    item.appendChild(tip);
                }
            }
        });


        root.addEventListener("load", e=>{
            const f=e.target.closest?.(".os-window iframe");
            if(!f) return;
            try{
                f.contentWindow?.document?.querySelectorAll("a[target='_blank']").forEach(a=>{
                    a.target="_self";
                });
            }catch{}
        }, true);

        root.addEventListener("click",e=>{
            const menuAction=e.target.closest(".os-menu-item");
            if(!e.target.closest("#os-apple,#os-app-menu") && !menuAction)
                document.getElementById("os-app-menu")?.classList.remove("on");

            if(!e.target.closest("#os-control,#os-quick-panel"))
                document.getElementById("os-quick-panel")?.classList.remove("on");
        });

        window.addEventListener("resize",()=>{
            document.querySelectorAll("#os-window-layer .os-window:not(.maximized)").forEach(w=>{
                this.osClampWindowToLayer(w);
            });
        });
    },
    osOpenService(type){
        const nav=document.getElementById(`nav-${type}`);
        if(nav){ nav.click(); return; }
        if(type==="ai") this.tabUpdateActive("Nova AI","ai");
        else if(type==="youtube") this.tabUpdateActive("YouTube","youtube");
        else if(type==="anime") this.tabUpdateActive("Anime","anime");
        this.osBridgeServiceWindow(type);
    },
    osBridgeServiceWindow(type){
        const existing=document.querySelector(`.os-window[data-service="${type}"]`);
        if(existing){ this.osFocusWindow(existing); return; }
        const title=type==="ai"?"Nova AI":type==="youtube"?"YouTube":"Anime";
        const body=`<div class="os-service-host" id="os-service-${type}"><div class="os-service-copy">Opening ${this.esc(title)}…</div></div>`;
        const w=this.osOpenWindow(title,type,body,{width:980,height:680});
        w.dataset.service=type;
        const panel=document.getElementById(`${type==="ai"?"ai-panel":type==="youtube"?"yt-panel":"anime-panel"}`);
        if(panel){ panel.classList.add("on"); panel.style.zIndex="9999"; setTimeout(()=>{panel.style.position="absolute";panel.style.inset="44px 0 0 0";panel.style.zIndex="9999";panel.style.borderRadius="0 0 18px 18px";const target=w.querySelector(".os-service-host");if(target) target.appendChild(panel);},20); }
    },
    osOpenWindow(title,key,body,opt={}){
        
        const novaClampWindow = (win) => {
            const layer = document.getElementById("os-window-layer");
            if (!layer || !win) return;
            const maxW = Math.max(280, layer.clientWidth - 24);
            const maxH = Math.max(180, layer.clientHeight - 24);
            win.style.maxWidth = maxW + "px";
            win.style.maxHeight = maxH + "px";
            const x = Math.max(12, Math.min(win.offsetLeft, layer.clientWidth - Math.min(win.offsetWidth, maxW) - 12));
            const y = Math.max(12, Math.min(win.offsetTop, layer.clientHeight - Math.min(win.offsetHeight, maxH) - 12));
            win.style.left = x + "px";
            win.style.top = y + "px";
        };

        const layer=document.getElementById("os-window-layer"); if(!layer)return null;
        const existing=layer.querySelector(`.os-window[data-key="${CSS.escape(key)}"]`);
        if(existing){ existing.classList.remove("minimized"); this.osFocusWindow(existing); return existing; }
        const id=`osw_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
        const w=document.createElement("section"); w.className="os-window os-window-opening"; w.dataset.key=key; w.id=id;
        const width=opt.width||760,height=opt.height||520;
        w.style.width=Math.min(width,innerWidth-40)+"px"; w.style.height=Math.min(height,innerHeight-120)+"px";
        w.innerHTML=`<div class="os-winbar" tabindex="0"><div class="os-win-controls"><button class="red" data-win="close" title="Close">×</button><button class="yellow" data-win="min" title="Minimize">−</button><button class="green" data-win="max" title="Maximize">+</button></div><div class="os-win-title">${this.esc(title)}</div><div class="os-win-actions"><button data-win="fullscreen" title="Fullscreen">⛶</button><button data-win="more" title="Window menu">⋯</button></div></div><div class="os-win-content">${body}</div><div class="os-resize" aria-hidden="true"></div>`;
        layer.appendChild(w);
        const layerRect = layer.getBoundingClientRect();
        const openCount = layer.querySelectorAll(".os-window").length - 1;
        const cascade = Math.min(28, Math.max(0, openCount * 14));
        const safeWidth = Math.min(width, Math.max(120, layer.clientWidth - 32));
        const safeHeight = Math.min(height, Math.max(120, layer.clientHeight - 32));
        w.style.width = safeWidth + "px";
        w.style.height = safeHeight + "px";
        const center = opt.center === true;
        const left = center ? (layerRect.width - safeWidth) / 2 : (layerRect.width - safeWidth) / 2 + cascade;
        const top = center ? (layerRect.height - safeHeight) / 2 : (layerRect.height - safeHeight) / 2 + cascade;
        w.style.left = Math.max(16, Math.min(left, layerRect.width - safeWidth - 16)) + "px";
        w.style.top = Math.max(4, Math.min(top, layerRect.height - safeHeight - 8)) + "px";
        this.osMakeWindowInteractive(w);
        this.osFocusWindow(w);
        requestAnimationFrame(()=>w.classList.remove("os-window-opening"));
        return w;
    },
    osClampWindowToLayer(w){
        const layer=document.getElementById("os-window-layer");
        if(!layer || !w || w.classList.contains("maximized")) return;
        const lr={width:layer.clientWidth,height:layer.clientHeight};
        w.style.width=Math.min(w.offsetWidth,Math.max(120,lr.width-32))+"px";
        w.style.height=Math.min(w.offsetHeight,Math.max(120,lr.height-32))+"px";
        const maxLeft=Math.max(16,lr.width-w.offsetWidth-16);
        const maxTop=Math.max(16,lr.height-w.offsetHeight-16);
        const left=Math.max(16,Math.min(parseFloat(w.style.left)||0,maxLeft));
        const top=Math.max(4,Math.min(parseFloat(w.style.top)||0,maxTop));
        w.style.left=left+"px";
        w.style.top=top+"px";
    },

    osFocusWindow(w){
        if(!w)return; let max=1001; document.querySelectorAll(".os-window").forEach(x=>max=Math.max(max,parseInt(x.style.zIndex||1000,10))); w.style.zIndex=max+1; document.querySelectorAll(".os-window").forEach(x=>x.classList.remove("focused")); w.classList.add("focused"); this.osChatVisibility();
    },
    osMakeWindowInteractive(w){
        const bar=w.querySelector(".os-winbar"); let dragging=false,sx=0,sy=0,sl=0,st=0;
        bar.addEventListener("dblclick",()=>this.osToggleMax(w));
        bar.addEventListener("contextmenu",e=>{ e.preventDefault(); this.osShowWindowMenu(w,e.clientX,e.clientY); });
        bar.addEventListener("pointerdown",e=>{
            if(e.target.closest("button"))return;
            e.preventDefault();
            dragging=true;
            sx=e.clientX; sy=e.clientY;
            sl=w.offsetLeft; st=w.offsetTop;
            w.classList.add("os-dragging");
            document.body.classList.add("nova-window-dragging");
            try{ bar.setPointerCapture(e.pointerId); }catch(_){}
            this.osFocusWindow(w);
        });
        bar.addEventListener("pointermove",e=>{
            if(!dragging)return;
            e.preventDefault();
            const layer=document.getElementById("os-window-layer");
            const r=layer.getBoundingClientRect();
            const nx=sl+e.clientX-sx;
            const ny=st+e.clientY-sy;
            w.style.left=Math.max(16,Math.min(r.width-w.offsetWidth-16,nx))+"px";
            w.style.top=Math.max(16,Math.min(r.height-w.offsetHeight-16,ny))+"px";
        });
        const stopDrag=()=>{
            if(!dragging)return;
            dragging=false;
            w.classList.remove("os-dragging");
            document.body.classList.remove("nova-window-dragging");
        };
        bar.addEventListener("pointerup",stopDrag);
        bar.addEventListener("pointercancel",stopDrag);
        bar.addEventListener("lostpointercapture",stopDrag);
        w.addEventListener("pointerdown",()=>this.osFocusWindow(w));
        w.querySelectorAll("[data-win]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.win;if(a==="close")this.osCloseWindow(w);else if(a==="min")w.classList.toggle("minimized");else if(a==="max")this.osToggleMax(w);else if(a==="fullscreen")this.osToggleFullscreen(w);else if(a==="more")this.osShowWindowMenu(w,b.getBoundingClientRect().left,b.getBoundingClientRect().bottom);}));
        w.addEventListener("contextmenu",e=>{ if(e.target.closest('.os-winbar')) return; e.preventDefault(); this.osShowWindowMenu(w,e.clientX,e.clientY); });
        const resize=w.querySelector(".os-resize"); let resizing=false,rsx=0,rsy=0,rw=0,rh=0;
        resize.addEventListener("pointerdown",e=>{resizing=true;rsx=e.clientX;rsy=e.clientY;rw=w.offsetWidth;rh=w.offsetHeight;resize.setPointerCapture?.(e.pointerId);e.stopPropagation();});
        resize.addEventListener("pointermove",e=>{
            if(!resizing)return;
            const layer=document.getElementById("os-window-layer");if(!layer)return;
            w.style.width=Math.min(Math.max(120,layer.clientWidth-32),Math.max(420,rw+e.clientX-rsx))+"px";
            w.style.height=Math.min(Math.max(120,layer.clientHeight-32),Math.max(300,rh+e.clientY-rsy))+"px";
            this.osClampWindowToLayer(w);
        });
        resize.addEventListener("pointerup",()=>resizing=false); resize.addEventListener("pointercancel",()=>resizing=false);
    },
    osShowWindowMenu(w,x,y){
        document.getElementById('os-window-context')?.remove();
        const menu=document.createElement('div'); menu.id='os-window-context'; menu.className='os-window-context';
        menu.innerHTML=`<button data-action="fullscreen">⛶ Fullscreen</button><button data-action="max">▣ Maximize</button><button data-action="min">— Minimize</button><button data-action="cloak">◌ Cloak Window</button><button data-action="top">⌃ Keep Above</button><button data-action="download">⇩ Download Game</button><div></div><button data-action="close">× Close</button>`;
        document.getElementById('os-desktop')?.appendChild(menu);
        const root=document.getElementById('os-desktop'), rr=root?.getBoundingClientRect();
        menu.style.left=Math.max(8,Math.min((x||30)-(rr?.left||0),innerWidth-menu.offsetWidth-16))+'px';
        menu.style.top=Math.max(40,Math.min((y||60)-(rr?.top||0),innerHeight-menu.offsetHeight-16))+'px';
        menu.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
            const a=b.dataset.action; menu.remove();
            if(a==='fullscreen')this.osToggleFullscreen(w);
            else if(a==='max')this.osToggleMax(w);
            else if(a==='min')w.classList.add('minimized');
            else if(a==='cloak')w.classList.toggle('cloaked');
            else if(a==='top'){w.classList.toggle('always-top'); this.osFocusWindow(w);}
            else if(a==='download')this.osDownloadWindow(w);
            else if(a==='close')this.osCloseWindow(w);
        }));
        setTimeout(()=>document.addEventListener('pointerdown',function close(ev){if(!menu.contains(ev.target)){menu.remove();document.removeEventListener('pointerdown',close)}},{once:true}),0);
    },
    async osToggleFullscreen(w){
        const desk=document.getElementById("os-desktop");
        const on=!w.classList.contains("os-fullscreen");
        if(on){
            w.classList.add("os-fullscreen");
            w.dataset.oldLeft=w.style.left; w.dataset.oldTop=w.style.top;
            w.dataset.oldWidth=w.style.width; w.dataset.oldHeight=w.style.height;
            w.dataset.wasMaximized=w.classList.contains("maximized")?"1":"0";
            w.classList.remove("maximized");
            Object.assign(w.style,{left:"0px",top:"0px",width:"100vw",height:"100vh"});
            desk?.classList.add("os-game-fullscreen");
            document.body.classList.add("nova-os-fullscreen");
            this.osFocusWindow(w);
            try{
                if(document.fullscreenElement!==document.documentElement){
                    await document.documentElement.requestFullscreen({navigationUI:"hide"});
                }
            }catch(e){
                // Browser may deny fullscreen for local files or user settings.
            }
        }else{
            try{ if(document.fullscreenElement) await document.exitFullscreen(); }catch(e){}
            w.classList.remove("os-fullscreen");
            if(w.dataset.oldWidth){
                Object.assign(w.style,{left:w.dataset.oldLeft,top:w.dataset.oldTop,width:w.dataset.oldWidth,height:w.dataset.oldHeight});
            }
            desk?.classList.remove("os-game-fullscreen");
            document.body.classList.remove("nova-os-fullscreen");
            this.osFocusWindow(w);
        }
    },
    async downloadGameFile(url,title){
        if(!url) throw new Error('Missing game URL');
        const cleanTitle = String(title || 'nova-game')
            .replace(/[\/:*?"<>|]+/g,'-')
            .replace(/\s+/g,'_')
            .replace(/^[-_.]+|[-_.]+$/g,'') || 'nova-game';

        let ext = '.html';
        try {
            const path = new URL(url, location.href).pathname;
            const match = path.match(/(\.[a-z0-9]{1,8})$/i);
            if(match) ext = match[1];
        } catch(_) {}
        const filename = cleanTitle.toLowerCase().endsWith(ext.toLowerCase()) ? cleanTitle : cleanTitle + ext;

        // Cross-origin `download` links are often ignored by browsers. jsDelivr
        // can also serve HTML as text/plain, which makes the browser open the
        // source instead of saving it. Fetch the bytes first and download a
        // local blob URL so it is always treated as a file download.
        const response = await fetch(url,{mode:'cors',credentials:'omit',cache:'no-store'});
        if(!response.ok) throw new Error(`Download failed (${response.status})`);
        const remoteBlob = await response.blob();
        const blob = remoteBlob.slice(0,remoteBlob.size,'application/octet-stream');
        const blobUrl = URL.createObjectURL(blob);
        try {
            const a=document.createElement('a');
            a.href=blobUrl;
            a.download=filename;
            a.rel='noopener';
            a.style.display='none';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } finally {
            // Large games need the object URL to stay alive while the browser
            // hands the download off to its download manager.
            setTimeout(()=>URL.revokeObjectURL(blobUrl),60000);
        }
    },
    async osDownloadWindow(w){
        const url=w.dataset.gameUrl;
        if(!url){ alert('This window has no downloadable file'); return; }
        try {
            await this.downloadGameFile(url,w.dataset.gameTitle||'nova-game');
        } catch(err) {
            console.error('Nova game download failed:',err);
            alert('Download failed. The game host blocked the file request.');
        }
    },

    osToggleMax(w){
        if(w.classList.contains("maximized")){ w.classList.remove("maximized"); Object.assign(w.style,{left:w.dataset.oldLeft,top:w.dataset.oldTop,width:w.dataset.oldWidth,height:w.dataset.oldHeight}); }
        else{ w.dataset.oldLeft=w.style.left; w.dataset.oldTop=w.style.top; w.dataset.oldWidth=w.style.width; w.dataset.oldHeight=w.style.height; w.classList.add("maximized"); }
        this.osFocusWindow(w);
    },
    async osOpenGameWindow(item){
        if(!item || !item.url) return null;
        this._recentGames=[item.url,...this._recentGames.filter(url=>url!==item.url)].slice(0,24);
        try{localStorage.setItem("nova_recent_games",JSON.stringify(this._recentGames));}catch{}
        this.osRefreshLibrary();
        const key = "game:" + item.title;
        const existing = document.querySelector(`.os-window[data-key="${CSS.escape(key)}"]`);
        if(existing){
            this.osFocusWindow(existing);
            if(existing.classList.contains("minimized")) existing.classList.remove("minimized");
            return existing;
        }

        const safeTitle = item.title || "Game";
        const hostBody = `
            <div class="os-game-window">
                <div class="os-game-loading">
                    <div class="os-loading-orb"></div>
                    <div class="os-loading-title">Loading ${this.esc(safeTitle)}</div>
                    <div class="os-loading-sub">Preparing game files and runtime…</div>
                    <div class="os-loading-bar"><span></span></div>
                    <div class="os-loading-status">Connecting to game server</div>
                </div>
                <iframe class="os-game-frame" allow="webgl *; gamepad *; fullscreen *; autoplay *; clipboard-read *; clipboard-write *; pointer-lock *; storage-access *"></iframe>
            </div>`;

        const w = this.osOpenWindow(
            safeTitle,
            key,
            hostBody,
            {center:true,width:980,height:700}
        );
        if(!w) return null;

        w.dataset.gameUrl = item.url;
        w.dataset.gameTitle = safeTitle;

        const frame = w.querySelector(".os-game-frame");
        const loading = w.querySelector(".os-game-loading");
        const bar = loading?.querySelector(".os-loading-bar span");
        const status = loading?.querySelector(".os-loading-status");

        const update = (pct,msg)=>{
            if(bar) bar.style.width = Math.max(5,Math.min(100,pct)) + "%";
            if(status) status.textContent = msg;
        };

        // Keep the game in a real iframe origin first so relative resources,
        // workers, wasm, fetch/XHR and local storage behave like a normal page.
        update(12,"Connecting to game server");
        await new Promise(resolve=>{
            let settled=false;
            const finish=()=>{if(settled)return;settled=true;resolve();};
            this.attachHtmlToIframe(frame,item.url).finally(()=>{
                update(100,"Game ready");
                setTimeout(()=>{ if(loading) loading.classList.add("done"); finish(); },180);
            });
            setTimeout(finish, 15000);
        });

        // If the direct load still produced an empty document, try the
        // compatibility path without blocking the desktop window.
        return w;
    },


    osOpenEducationWindow(){
        const key="nova-education";
        const existing=document.querySelector(`.os-window[data-key="${CSS.escape(key)}"]`);
        if(existing){
            this.osFocusWindow(existing);
            existing.classList.remove("minimized");
            return existing;
        }

        const body = `
        <div class="nova-education-app">
            <div class="nova-education-hero">
                <div>
                    <div class="nova-education-kicker">NOVA EDUCATION</div>
                    <h1>Learn · Calculate · Explore</h1>
                    <p>A lightweight education workspace built into Nova</p>
                </div>
                <div class="nova-education-badge">∑</div>
            </div>
            <div class="nova-education-grid">
                <section class="nova-education-card">
                    <div class="nova-education-card-head"><span>Calculator</span><small>supports expressions</small></div>
                    <input class="nova-calc-display" id="nova-calc-display" inputmode="decimal" autocomplete="off" placeholder="0">
                    <div class="nova-calc-grid">
                        ${["7","8","9","÷","4","5","6","×","1","2","3","−","0",".","=","+"].map(x=>`<button type="button" data-calc="${x}">${x}</button>`).join("")}
                    </div>
                    <button class="nova-calc-clear" type="button" data-calc="C">Clear</button>
                    <div class="nova-education-note">Tip  enter <b>1234</b> in the display and press = to open Nova Gaming</div>
                </section>
                <section class="nova-education-card nova-education-lessons">
                    <div class="nova-education-card-head"><span>Quick Learning</span><small>mini reference</small></div>
                    <button data-lesson="math">Math formulas</button>
                    <button data-lesson="web">Web basics</button>
                    <button data-lesson="linux">Linux basics</button>
                    <div class="nova-lesson-output" id="nova-lesson-output">Pick a topic to see a quick reference</div>
                </section>
            </div>
        </div>`;

        const w=this.osOpenWindow("Nova Education",key,body,{center:true,width:900,height:650});
        if(!w)return null;

        const display=w.querySelector("#nova-calc-display");
        let expr="";
        const setDisplay=()=>{if(display)display.value=expr;};

        w.querySelectorAll("[data-calc]").forEach(btn=>{
            btn.addEventListener("click",()=>{
                const v=btn.dataset.calc;
                if(v==="C"){expr="";setDisplay();return}
                if(v==="="){
                    if(expr.trim()==="1234"){
                        this.osOpenWindow("Games","games",this.osGamesBody(),{center:true,width:980,height:690});
                        return;
                    }
                    try{
                        const safe=expr.replaceAll("×","*").replaceAll("÷","/");
                        if(!/^[0-9+*/().%\\s-]+$/.test(safe))throw new Error();
                        expr=String(Function('"use strict";return ('+safe+')')());
                    }catch{expr="Error";}
                    setDisplay();
                    return;
                }
                if(expr==="Error")expr="";
                expr+=v;
                setDisplay();
            });
        });

        display?.addEventListener("keydown",e=>{
            if(e.key==="Enter"){
                w.querySelector('[data-calc="="]')?.click();
                e.preventDefault();
            }
        });

        const lessons={
            math:"Area of a rectangle = length × width · Pythagorean theorem: a² + b² = c² · Slope = rise ÷ run",
            web:"HTML structures a page · CSS styles it · JavaScript adds behavior · URLs identify web resources",
            linux:"pwd shows your location · ls lists files · cd changes folders · mkdir creates a directory"
        };
        w.querySelectorAll("[data-lesson]").forEach(b=>b.addEventListener("click",()=>{
            const out=w.querySelector("#nova-lesson-output");
            if(out)out.textContent=lessons[b.dataset.lesson];
        }));
        return w;
    },

    // A private MessagePort is transferred only to the known Nova Chat origin.
    osChatConnect(w){
        const frame=w.querySelector('iframe');if(!frame)return;
        const attach=()=>{
            this._chatPort?.close();
            const channel=new MessageChannel();this._chatPort=channel.port1;
            this._chatPort.onmessage=event=>{
                const data=event.data;
                if(!data || typeof data!=='object')return;
                if(data.type==='ready'){this.osChatVisibility();return;}
                if(data.type==='focus' && !w.classList.contains('minimized')){this.osFocusWindow(w);return;}
                if(data.type==='unread' && Number.isSafeInteger(data.count) && data.count>=0){
                    this._chatUnread=Math.min(data.count,9999);this.osChatBadge();
                    if(!data.count){document.getElementById('nova-chat-toast')?.remove();this._chatSystemAlert?.close();}
                }
                if(data.type==='dm' && typeof data.peer==='string' && /^[a-f0-9]{64}$/.test(data.peer) && typeof data.user==='string' && typeof data.text==='string'){
                    this._chatLatest=data.peer;this.osChatNotify(data);
                }
            };
            channel.port1.start();
            frame.contentWindow.postMessage({type:'nova-chat-connect'},'https://global-chat.umarerthteam.workers.dev',[channel.port2]);
        };
        frame.addEventListener('load',attach);
        // The load event handles both the initial page and reconnecting after navigation.
        this.osChatVisibility();
    },
    osChatVisibility(){
        const w=document.querySelector('.os-window[data-key="nova-chatroom"]');
        const visible=!!w && !w.classList.contains('minimized') && w.classList.contains('focused') && !document.hidden && document.hasFocus();
        try{this._chatPort?.postMessage({type:'visibility',visible});}catch{}
    },
    osChatBadge(){
        const button=document.getElementById('nova-chat-notifications');
        if(button){button.textContent='DMs'+(this._chatUnread?' · '+this._chatUnread:'');button.setAttribute('aria-label',(this._chatUnread||0)+' unread direct messages');}
    },
    osChatNotify(data){
        document.getElementById('nova-chat-toast')?.remove();
        const toast=document.createElement('div');toast.id='nova-chat-toast';toast.setAttribute('role','status');
        toast.style.cssText='position:fixed;right:18px;top:54px;z-index:2147483001;max-width:360px;width:calc(100% - 36px);display:flex;gap:8px;padding:14px;border:1px solid #7c5cff80;border-radius:16px;background:#151821;color:#f7f8ff;box-shadow:0 12px 36px #0006;font:13px system-ui';
        const open=document.createElement('button');open.type='button';open.style.cssText='flex:1;min-width:0;padding:4px;text-align:left;background:transparent;color:inherit;border:0;cursor:pointer';
        const title=document.createElement('strong');title.textContent=data.user.slice(0,20)+' sent you a DM';
        const text=document.createElement('span');text.textContent=data.text.slice(0,160);text.style.cssText='display:block;margin-top:6px;overflow-wrap:anywhere;line-height:1.5;opacity:.8';
        open.append(title,text);open.addEventListener('click',()=>{this.osChatOpenPeer(data.peer);toast.remove();});
        const close=document.createElement('button');close.type='button';close.textContent='×';close.setAttribute('aria-label','Dismiss notification');close.style.cssText='align-self:start;background:transparent;border:0;color:inherit;cursor:pointer;font-size:20px';close.addEventListener('click',()=>toast.remove());
        toast.append(open,close);document.getElementById('os-desktop')?.appendChild(toast);
        clearTimeout(this._chatToastTimer);this._chatToastTimer=setTimeout(()=>toast.remove(),12000);
        let enabled=false;try{enabled=localStorage.getItem('nova_chat_alerts')==='on';}catch{}
        if(enabled && 'Notification' in window && Notification.permission==='granted'){
            try{this._chatSystemAlert?.close();const alert=new Notification('Nova Chat · '+data.user.slice(0,20),{body:data.text.slice(0,160),tag:'nova-chat-dm'});this._chatSystemAlert=alert;alert.onclick=()=>{window.focus();this.osChatOpenPeer(data.peer);alert.close();};}catch{}
        }
    },
    osChatOpenPeer(peer){
        this.osOpenChatroomWindow();this.osChatVisibility();
        if(peer)try{this._chatPort?.postMessage({type:'open-dm',peer});}catch{}
    },
    osChatNotificationControls(){
        const host=document.querySelector('#os-desktop .os-menu-right');if(!host || document.getElementById('nova-chat-notifications'))return;
        const inbox=document.createElement('button');inbox.id='nova-chat-notifications';inbox.type='button';inbox.className='os-menu-item';
        inbox.title='Direct messages · open Nova Chat once to connect';inbox.addEventListener('click',()=>this.osChatOpenPeer(this._chatLatest));
        const enable=document.createElement('button');enable.type='button';enable.className='os-menu-item';
        const update=()=>{let on=false;try{on=localStorage.getItem('nova_chat_alerts')==='on';}catch{}enable.textContent=on?'Alerts on':'Enable alerts';enable.setAttribute('aria-pressed',String(on));};
        enable.addEventListener('click',async()=>{
            let on=false;try{on=localStorage.getItem('nova_chat_alerts')==='on';}catch{}
            if(on){try{localStorage.setItem('nova_chat_alerts','off');}catch{}this._chatSystemAlert?.close();update();return;}
            if(!window.isSecureContext || window.parent!==window || !('Notification' in window)){enable.textContent='In-app alerts on';enable.title='Browser alerts require opening Nova directly over HTTPS. In-app alerts work here.';return;}
            try{const permission=await Notification.requestPermission();if(permission==='granted'){localStorage.setItem('nova_chat_alerts','on');update();}else{enable.textContent='In-app alerts on';enable.title='Browser permission was not granted; in-app alerts still work.';}}catch{enable.textContent='In-app alerts on';}
        });
        update();host.prepend(inbox,enable);this.osChatBadge();
    },
    osCloseWindow(w){
        if(w.dataset.key==='nova-chatroom'){
            w.classList.add('minimized');this.osChatVisibility();
        }else w.remove();
    },


    _novaAdminState:null,
    novaAdminState(){
        if(!this._novaAdminState)this._novaAdminState={client:null,clientPromise:null,session:null,roots:new Set(),games:[],queue:[],query:"",githubConfigured:null,githubStatus:"idle",loading:false,uploading:false,progress:"",error:"",editor:null,loaderEditor:null};
        return this._novaAdminState;
    },
    novaAdminMarkup(){
        return '<div class="nova-admin-native">'+
          '<section class="nova-admin-login"><form class="nova-admin-login-card" autocomplete="off"><div class="nova-admin-brand"><span>N</span><div><strong>Nova Admin</strong><small>Game publishing studio</small></div></div><h2>Administrator login</h2><p>Use the existing Nova administrator account. Public registration is disabled.</p><label>Email<input data-admin-email type="email" autocomplete="off" required></label><label>Password<input data-admin-password type="password" autocomplete="off" required></label><button class="nova-admin-primary" data-admin-login-button type="submit">Sign in</button><div class="nova-admin-error" data-admin-login-error role="alert"></div></form></section>'+
          '<section class="nova-admin-dashboard" hidden><header><div><strong>Game Publisher</strong><small data-admin-account></small></div><div class="nova-admin-head-actions"><span class="nova-admin-connection" data-admin-connection><i></i>Checking GitHub</span><button data-admin-retry type="button" hidden>Retry</button><button data-admin-signout type="button">Sign out</button></div></header><main>'+
          '<div class="nova-admin-hero"><div><span>NOVA CONTENT</span><h2>Upload games in bulk</h2><p>Select or drop a whole group of HTML games. Nova batches them safely and commits each batch to GitHub with catalog entries included.</p></div><div class="nova-admin-hero-actions"><button class="nova-admin-secondary" data-admin-add-link type="button">Add URL instead</button><button class="nova-admin-secondary" data-admin-edit-loader type="button">Edit loader.js</button></div></div>'+
          '<div class="nova-admin-setup" data-admin-setup hidden>GitHub uploads need the <b>GITHUB_TOKEN</b> Edge Function secret with Contents read/write access to UmarErth/uMath.</div>'+
          '<input data-admin-files type="file" accept=".html,.htm,text/html" multiple hidden><button class="nova-admin-drop" data-admin-drop type="button"><b>＋</b><strong>Drop HTML games here</strong><span>or click to choose as many files as you want</span></button>'+
          '<section class="nova-admin-queue-card" data-admin-queue-card hidden><div class="nova-admin-section-head"><div><strong>Upload queue</strong><span data-admin-queue-count></span></div><button data-admin-clear type="button">Clear</button></div><div class="nova-admin-queue" data-admin-queue></div><div class="nova-admin-upload-bar"><span data-admin-progress>Ready to publish</span><button class="nova-admin-primary" data-admin-upload type="button">Publish games</button></div></section>'+
          '<section class="nova-admin-library"><div class="nova-admin-section-head"><div><strong>Current catalog</strong><span data-admin-game-count>0 games</span></div><div class="nova-admin-search"><span>⌕</span><input data-admin-search type="search" placeholder="Search catalog"></div></div><div class="nova-admin-catalog" data-admin-catalog><p>Sign in to load the catalog.</p></div></section>'+
          '</main><div class="nova-admin-editor" data-admin-editor hidden><form><div class="nova-admin-editor-head"><div><strong data-admin-editor-title>Add game URL</strong><small>Commit one catalog entry</small></div><button data-admin-editor-close type="button">×</button></div><label>Title<input data-admin-edit-title maxlength="120" required></label><label>Game URL or repository filename<input data-admin-edit-url required></label><label>Description<textarea data-admin-edit-desc maxlength="300" required></textarea></label><div class="nova-admin-checks"><label><input data-admin-edit-download type="checkbox" checked>Available offline</label><label><input data-admin-edit-newtab type="checkbox">Open in new tab</label></div><div class="nova-admin-error" data-admin-editor-error role="alert"></div><div class="nova-admin-editor-actions"><button data-admin-editor-cancel type="button">Cancel</button><button class="nova-admin-primary" data-admin-editor-save type="submit">Add game</button></div></form></div><div class="nova-admin-code-editor" data-admin-code-editor hidden><form><div class="nova-admin-editor-head"><div><strong>Edit loader.js</strong><small>Changes are committed directly to GitHub</small></div><button data-admin-loader-close type="button">×</button></div><label>Commit message<input data-admin-loader-message maxlength="120" value="Edit loader.js via Nova Admin" required></label><label class="nova-admin-code-label">Source<textarea data-admin-loader-source spellcheck="false" wrap="off"></textarea></label><div class="nova-admin-error" data-admin-loader-error role="alert"></div><div class="nova-admin-editor-actions"><button data-admin-loader-reload type="button">Reload from GitHub</button><button data-admin-loader-cancel type="button">Cancel</button><button class="nova-admin-primary" data-admin-loader-save type="submit">Commit changes</button></div></form></div></section>'+
          '</div>';
    },
    async novaAdminClient(){
        const state=this.novaAdminState();
        if(state.client)return state.client;
        if(!state.clientPromise){
            state.clientPromise=import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.116.0/+esm").then(async module=>{
                const client=module.createClient("https://ztbedievifwxunjllbjh.supabase.co","sb_publishable_OmTNAlHkNxLHVPTGsoY6iQ_mcHmAiA-");
                state.client=client;
                client.auth.onAuthStateChange((_event,session)=>{
                    state.session=session;state.error="";
                    this.novaAdminRender();
                    if(session)setTimeout(()=>this.novaAdminLoad(),0);
                });
                const result=await client.auth.getSession();
                state.session=result.data.session;
                this.novaAdminRender();
                if(state.session)this.novaAdminLoad();
                return client;
            }).catch(error=>{state.clientPromise=null;state.error=error.message||"Could not start Supabase";this.novaAdminRender();throw error});
        }
        return state.clientPromise;
    },
    async novaAdminCall(body){
        const client=await this.novaAdminClient();
        const timeoutMs=["list","getLoader","updateLoader"].includes(body?.action)?45000:15000;
        let timer;
        const timeout=new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error("Admin request timed out")),timeoutMs)});
        const result=await Promise.race([client.functions.invoke("nova-game-admin",{body}),timeout]).finally(()=>clearTimeout(timer));
        if(result.error){
            let message=result.error.message||"Admin request failed";
            try{const payload=await result.error.context?.json();if(payload?.error)message=payload.error;}catch{}
            throw new Error(message);
        }
        if(result.data?.error)throw new Error(result.data.error);
        return result.data;
    },
    bindNovaAdmin(root){
        if(!root||root._novaAdminBound)return;
        root._novaAdminBound=true;
        const state=this.novaAdminState();state.roots.add(root);
        root.querySelector(".nova-admin-login-card").addEventListener("submit",async event=>{
            event.preventDefault();state.error="";this.novaAdminRender();
            const button=root.querySelector("[data-admin-login-button]");button.disabled=true;button.textContent="Signing in…";
            try{
                const client=await this.novaAdminClient();
                const result=await client.auth.signInWithPassword({email:root.querySelector("[data-admin-email]").value.trim(),password:root.querySelector("[data-admin-password]").value});
                if(result.error)throw result.error;
            }catch(error){state.error=error.message||"Could not sign in";this.novaAdminRender();}
            button.disabled=false;button.textContent="Sign in";
        });
        root.querySelector("[data-admin-signout]").addEventListener("click",async()=>{const client=await this.novaAdminClient();await client.auth.signOut()});
        root.querySelector("[data-admin-retry]").addEventListener("click",()=>this.novaAdminLoad(true));
        const fileInput=root.querySelector("[data-admin-files]");
        const drop=root.querySelector("[data-admin-drop]");
        drop.addEventListener("click",()=>fileInput.click());
        drop.addEventListener("dragover",event=>{event.preventDefault();drop.classList.add("drag")});
        drop.addEventListener("dragleave",()=>drop.classList.remove("drag"));
        drop.addEventListener("drop",event=>{event.preventDefault();drop.classList.remove("drag");this.novaAdminQueueFiles(event.dataTransfer?.files)});
        fileInput.addEventListener("change",()=>{this.novaAdminQueueFiles(fileInput.files);fileInput.value=""});
        root.querySelector("[data-admin-search]").addEventListener("input",event=>{state.query=event.target.value;this.novaAdminRender()});
        root.querySelector("[data-admin-clear]").addEventListener("click",()=>{if(!state.uploading){state.queue=[];this.novaAdminRender()}});
        root.querySelector("[data-admin-upload]").addEventListener("click",()=>this.novaAdminUpload());
        root.querySelector("[data-admin-add-link]").addEventListener("click",()=>this.novaAdminOpenEditor(null));
        root.querySelector("[data-admin-edit-loader]").addEventListener("click",()=>this.novaAdminOpenLoader());
        root.addEventListener("input",event=>{
            const input=event.target.closest("[data-admin-queue-id][data-admin-field]");if(!input)return;
            const item=state.queue.find(entry=>entry.id===input.dataset.adminQueueId);if(item)item[input.dataset.adminField]=input.value;
        });
        root.addEventListener("click",event=>{
            const remove=event.target.closest("[data-admin-remove-file]");
            if(remove&&!state.uploading){state.queue=state.queue.filter(item=>item.id!==remove.dataset.adminRemoveFile);this.novaAdminRender();return}
            const edit=event.target.closest("[data-admin-edit]");
            if(edit){this.novaAdminOpenEditor(decodeURIComponent(edit.dataset.adminEdit));return}
            const del=event.target.closest("[data-admin-delete]");
            if(del){this.novaAdminDelete(decodeURIComponent(del.dataset.adminDelete));return}
            if(event.target.closest("[data-admin-editor-close],[data-admin-editor-cancel]")){state.editor=null;state.error="";this.novaAdminRender()}
            if(event.target.closest("[data-admin-loader-close],[data-admin-loader-cancel]")){state.loaderEditor=null;state.error="";this.novaAdminRender();return}
            if(event.target.closest("[data-admin-loader-reload]")){this.novaAdminOpenLoader(true);return}
        });
        root.querySelector("[data-admin-editor] form").addEventListener("submit",event=>{event.preventDefault();this.novaAdminSaveEditor(root)});
        root.querySelector("[data-admin-code-editor] form").addEventListener("submit",event=>{event.preventDefault();this.novaAdminSaveLoader(root)});
        this.novaAdminClient();
        this.novaAdminRender();
    },
    novaAdminQueueFiles(fileList){
        const state=this.novaAdminState();
        const files=[...(fileList||[])].filter(file=>/\.html?$/i.test(file.name));
        const existing=new Set(state.queue.map(item=>item.file.name+":"+item.file.size));
        files.forEach(file=>{
            const key=file.name+":"+file.size;if(existing.has(key))return;existing.add(key);
            const title=file.name.replace(/\.html?$/i,"").replace(/[-_]+/g," ").replace(/\b\w/g,char=>char.toUpperCase()).trim();
            state.queue.push({id:crypto.randomUUID(),file,title,desc:"Play "+title+" in Nova Gaming.",newTab:false,download:true});
        });
        if(!files.length)state.error="Choose HTML game files";
        else state.error="";
        this.novaAdminRender();
    },
    novaAdminRender(){
        const state=this.novaAdminState();
        state.roots.forEach(root=>{
            if(!root.isConnected){state.roots.delete(root);return}
            const signed=Boolean(state.session);
            root.querySelector(".nova-admin-login").hidden=signed;
            root.querySelector(".nova-admin-dashboard").hidden=!signed;
            root.querySelector("[data-admin-login-error]").textContent=!signed?state.error:"";
            if(!signed)return;
            root.querySelector("[data-admin-account]").textContent=state.session.user.email||"Administrator";
            const connection=root.querySelector("[data-admin-connection]");
            connection.classList.toggle("on",state.githubConfigured===true);
            connection.classList.toggle("warn",state.githubConfigured===false||state.githubStatus==="error");
            connection.lastChild.textContent=state.githubConfigured===true?"GitHub connected":state.githubConfigured===false?"GitHub setup needed":state.githubStatus==="error"?"GitHub check failed":"Checking GitHub";
            connection.title=state.githubStatus==="error"?(state.error||"Could not reach the admin service"):"";
            root.querySelector("[data-admin-retry]").hidden=state.githubStatus!=="error";
            const setup=root.querySelector("[data-admin-setup]");
            setup.hidden=state.githubConfigured!==false&&state.githubStatus!=="error";
            if(state.githubStatus==="error")setup.textContent="Could not check GitHub · "+(state.error||"Unknown admin service error");
            else setup.innerHTML='GitHub uploads need the <b>GITHUB_TOKEN</b> Edge Function secret with Contents read/write access to UmarErth/uMath.';
            const queue=root.querySelector("[data-admin-queue]");
            root.querySelector("[data-admin-queue-card]").hidden=!state.queue.length;
            root.querySelector("[data-admin-queue-count]").textContent=state.queue.length+" file"+(state.queue.length===1?"":"s");
            queue.innerHTML=state.queue.map(item=>'<div class="nova-admin-queue-row"><span class="nova-admin-file-icon">HTML</span><div><input data-admin-queue-id="'+item.id+'" data-admin-field="title" value="'+this.esc(item.title)+'" aria-label="Game title"><input data-admin-queue-id="'+item.id+'" data-admin-field="desc" value="'+this.esc(item.desc)+'" aria-label="Game description"><small>'+this.esc(item.file.name)+' · '+this.novaAdminSize(item.file.size)+'</small></div><button data-admin-remove-file="'+item.id+'" type="button" aria-label="Remove">×</button></div>').join("");
            root.querySelector("[data-admin-progress]").textContent=state.progress||"Ready to publish";
            const upload=root.querySelector("[data-admin-upload]");
            upload.disabled=!state.queue.length||state.uploading||state.githubConfigured!==true;
            upload.textContent=state.uploading?"Publishing…":"Publish "+state.queue.length+" game"+(state.queue.length===1?"":"s");
            root.querySelector("[data-admin-game-count]").textContent=state.games.length+" games";
            const term=state.query.trim().toLowerCase();
            const games=state.games.filter(game=>!term||(game.title+" "+game.desc+" "+game.url).toLowerCase().includes(term));
            root.querySelector("[data-admin-catalog]").innerHTML=state.loading?'<p>Loading the GitHub catalog…</p>':games.length?games.map(game=>'<div class="nova-admin-game-row"><span class="nova-admin-game-letter">'+this.esc((game.title||"?").charAt(0).toUpperCase())+'</span><div><strong>'+this.esc(game.title)+'</strong><small>'+this.esc(game.url)+'</small></div><em>'+(game.newTab?"New tab":"Immersive")+'</em><button data-admin-edit="'+encodeURIComponent(game.url)+'" type="button">Edit</button><button data-admin-delete="'+encodeURIComponent(game.url)+'" type="button">Delete</button></div>').join(""):'<p>No matching games</p>';
            const editor=root.querySelector("[data-admin-editor]");
            editor.hidden=!state.editor;
            if(state.editor){
                const game=state.editor.game;
                root.querySelector("[data-admin-editor-title]").textContent=state.editor.originalUrl?"Edit game":"Add game URL";
                root.querySelector("[data-admin-editor-save]").textContent=state.editor.saving?"Saving…":state.editor.originalUrl?"Save changes":"Add game";
                root.querySelector("[data-admin-editor-save]").disabled=Boolean(state.editor.saving);
                root.querySelector("[data-admin-edit-title]").value=game.title||"";
                root.querySelector("[data-admin-edit-url]").value=game.url||"";
                root.querySelector("[data-admin-edit-desc]").value=game.desc||"";
                root.querySelector("[data-admin-edit-download]").checked=game.download!==false;
                root.querySelector("[data-admin-edit-newtab]").checked=game.newTab===true;
                root.querySelector("[data-admin-editor-error]").textContent=state.error||"";
            }
            const loaderEditor=root.querySelector("[data-admin-code-editor]");
            loaderEditor.hidden=!state.loaderEditor;
            if(state.loaderEditor){
                const source=root.querySelector("[data-admin-loader-source]");
                const message=root.querySelector("[data-admin-loader-message]");
                if(document.activeElement!==source)source.value=state.loaderEditor.source||"";
                if(document.activeElement!==message)message.value=state.loaderEditor.message||"Edit loader.js via Nova Admin";
                source.disabled=state.loaderEditor.loading||state.loaderEditor.saving;
                message.disabled=state.loaderEditor.loading||state.loaderEditor.saving;
                root.querySelector("[data-admin-loader-save]").disabled=state.loaderEditor.loading||state.loaderEditor.saving||!state.loaderEditor.sha;
                root.querySelector("[data-admin-loader-save]").textContent=state.loaderEditor.loading?"Loading…":state.loaderEditor.saving?"Committing…":"Commit changes";
                root.querySelector("[data-admin-loader-error]").textContent=state.loaderEditor.error||"";
            }
        });
    },
    novaAdminSize(bytes){
        if(bytes<1024)return bytes+" B";
        if(bytes<1048576)return(bytes/1024).toFixed(1)+" KB";
        return(bytes/1048576).toFixed(1)+" MB";
    },
    async novaAdminLoad(force=false){
        const state=this.novaAdminState();if(!state.session||(state.loading&&!force))return;
        state.loading=true;state.githubConfigured=null;state.githubStatus="checking";state.error="";this.novaAdminRender();
        try{
            const data=await this.novaAdminCall({action:"list"});
            state.games=Array.isArray(data.games)?data.games:[];
            state.githubConfigured=Boolean(data.githubConfigured);
            state.githubStatus=state.githubConfigured?"connected":"setup";
            state.games.forEach(game=>{if(!GAMES.some(existing=>existing.url===game.url))GAMES.push({...game})});
        }catch(error){state.githubConfigured=null;state.githubStatus="error";state.error=error.message||"Could not load games";}
        state.loading=false;this.novaAdminRender();
    },
    async novaAdminFileBase64(file){
        const bytes=new Uint8Array(await file.arrayBuffer());let binary="";
        for(let index=0;index<bytes.length;index+=32768)binary+=String.fromCharCode(...bytes.subarray(index,index+32768));
        return btoa(binary);
    },
    async novaAdminUpload(){
        const state=this.novaAdminState();if(state.uploading||!state.queue.length)return;
        if(state.githubConfigured!==true){state.error="Add GITHUB_TOKEN in Supabase Edge Function secrets first";this.novaAdminRender();return}
        state.uploading=true;state.error="";let completed=0;this.novaAdminRender();
        try{
            while(state.queue.length){
                const batch=[];let bytes=0;
                for(const item of state.queue){
                    if(item.file.size>7*1024*1024)throw new Error(item.file.name+" is over the 7 MB per-file limit");
                    if(batch.length>=8||(batch.length&&bytes+item.file.size>7*1024*1024))break;
                    if(!item.title.trim()||!item.desc.trim())throw new Error("Every queued game needs a title and description");
                    batch.push(item);bytes+=item.file.size;
                }
                state.progress="Preparing batch "+(completed+1)+"…";this.novaAdminRender();
                const files=[];
                for(let index=0;index<batch.length;index++){
                    state.progress="Reading "+(completed+index+1)+" of "+(completed+state.queue.length)+" · "+batch[index].file.name;this.novaAdminRender();
                    files.push({name:batch[index].file.name,title:batch[index].title.trim(),desc:batch[index].desc.trim(),newTab:false,download:true,content:await this.novaAdminFileBase64(batch[index].file)});
                }
                state.progress="Committing "+files.length+" game"+(files.length===1?"":"s")+" to GitHub…";this.novaAdminRender();
                await this.novaAdminCall({action:"bulkUpload",files});
                state.queue.splice(0,batch.length);completed+=batch.length;
            }
            state.progress="Published "+completed+" game"+(completed===1?"":"s")+" successfully";
            window.dispatchEvent(new CustomEvent("nova:games-updated"));
            await this.novaAdminLoad();
        }catch(error){state.error=error.message||"Upload failed";state.progress="Upload paused · "+state.error}
        state.uploading=false;this.novaAdminRender();
    },
    async novaAdminOpenLoader(force=false){
        const state=this.novaAdminState();
        if(state.loaderEditor?.loading&&!force)return;
        state.loaderEditor={source:"",sha:"",message:"Edit loader.js via Nova Admin",loading:true,saving:false,error:""};
        this.novaAdminRender();
        try{
            const data=await this.novaAdminCall({action:"getLoader"});
            state.loaderEditor.source=String(data.source||"");
            state.loaderEditor.sha=String(data.sha||"");
        }catch(error){state.loaderEditor.error=error.message||"Could not load loader.js"}
        state.loaderEditor.loading=false;this.novaAdminRender();
    },
    async novaAdminSaveLoader(root){
        const state=this.novaAdminState();if(!state.loaderEditor||state.loaderEditor.loading||state.loaderEditor.saving)return;
        const source=root.querySelector("[data-admin-loader-source]").value;
        const message=root.querySelector("[data-admin-loader-message]").value.trim()||"Edit loader.js via Nova Admin";
        state.loaderEditor.source=source;state.loaderEditor.message=message;state.loaderEditor.error="";
        if(source.length<10000){state.loaderEditor.error="loader.js looks incomplete";this.novaAdminRender();return}
        if(!confirm("Commit these loader.js changes directly to GitHub?"))return;
        state.loaderEditor.saving=true;this.novaAdminRender();
        try{
            const data=await this.novaAdminCall({action:"updateLoader",source,sha:state.loaderEditor.sha,message});
            state.loaderEditor=null;state.progress="loader.js committed"+(data.commitSha?" · "+String(data.commitSha).slice(0,7):"");
            await this.novaAdminLoad(true);
        }catch(error){state.loaderEditor.saving=false;state.loaderEditor.error=error.message||"Could not commit loader.js";this.novaAdminRender()}
    },
    novaAdminOpenEditor(url){
        const state=this.novaAdminState();
        const existing=url?state.games.find(game=>game.url===url):null;
        state.editor={originalUrl:existing?.url||"",saving:false,game:existing?{...existing}:{title:"",url:"",desc:"",newTab:false,download:true}};
        state.error="";this.novaAdminRender();
    },
    async novaAdminSaveEditor(root){
        const state=this.novaAdminState();if(!state.editor||state.editor.saving)return;
        const originalUrl=state.editor.originalUrl;
        let url=root.querySelector("[data-admin-edit-url]").value.trim();
        if(!/^https?:\/\//i.test(url))url="https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/"+encodeURI(url.replace(/^\/+/, ""));
        const game={title:root.querySelector("[data-admin-edit-title]").value.trim(),url,desc:root.querySelector("[data-admin-edit-desc]").value.trim(),download:root.querySelector("[data-admin-edit-download]").checked,newTab:root.querySelector("[data-admin-edit-newtab]").checked};
        state.editor.game=game;state.editor.saving=true;state.error="";this.novaAdminRender();
        try{
            await this.novaAdminCall({action:originalUrl?"update":"add",originalUrl,game});
            const runtimeIndex=GAMES.findIndex(item=>item.url===originalUrl||item.url===game.url);
            if(runtimeIndex>=0)GAMES[runtimeIndex]={...game};else GAMES.push({...game});
            state.editor=null;await this.novaAdminLoad();window.dispatchEvent(new CustomEvent("nova:games-updated"));
        }catch(error){state.error=error.message||"Could not save game";state.editor.saving=false;this.novaAdminRender()}
    },
    async novaAdminDelete(url){
        const state=this.novaAdminState();const game=state.games.find(item=>item.url===url);if(!game)return;
        if(!confirm('Remove "'+game.title+'" from Nova Gaming?'))return;
        try{await this.novaAdminCall({action:"delete",originalUrl:url});const index=GAMES.findIndex(item=>item.url===url);if(index>=0)GAMES.splice(index,1);await this.novaAdminLoad();window.dispatchEvent(new CustomEvent("nova:games-updated"))}
        catch(error){state.error=error.message||"Could not remove game";this.novaAdminRender()}
    },
    osOpenAdminWindow(){
        const key="nova-admin";const existing=document.querySelector('.os-window[data-key="'+CSS.escape(key)+'"]');
        if(existing){this.osFocusWindow(existing);existing.classList.remove("minimized");return existing}
        const w=this.osOpenWindow("Nova Admin",key,this.novaAdminMarkup(),{center:true,width:1120,height:760});
        if(w)this.bindNovaAdmin(w.querySelector(".nova-admin-native"));
        return w;
    },

    novaBrowserMarkup(){
        return '<div class="nova-native-app nova-browser-native"><div class="nova-native-top"><div class="nova-app-mark">N</div><button class="nova-round-btn" data-browser="back" aria-label="Back">‹</button><button class="nova-round-btn" data-browser="forward" aria-label="Forward">›</button><button class="nova-round-btn" data-browser="reload" aria-label="Reload">↻</button><form class="nova-address-form"><span class="nova-lock">◇</span><input class="nova-browser-address" value="" placeholder="Search or enter a URL" autocomplete="off" aria-label="Address"><button class="nova-go-btn" type="submit">Go</button></form></div><div class="nova-browser-stage"><section class="nova-browser-home"><div class="nova-browser-hero"><span class="nova-browser-logo">N</span><h2>Where to?</h2><p data-browser-status>Starting secure proxy…</p><button class="nova-browser-retry" data-browser="retry" type="button" hidden>Retry proxy</button><form class="nova-home-search"><input placeholder="Search the web" autocomplete="off"><button type="submit">Search</button></form><div class="nova-browser-shortcuts"><button data-url="https://www.google.com">G<span>Google</span></button><button data-url="https://piped.video">▶<span>Piped</span></button><button data-url="https://en.wikipedia.org">W<span>Wikipedia</span></button><button data-url="https://discord.com">D<span>Discord</span></button></div></div></section><iframe class="nova-browser-frame" title="Nova Browser page" allow="clipboard-read; clipboard-write; downloads; fullscreen; storage-access-by-user-activation"></iframe><div class="nova-browser-loading"><i></i></div></div></div>';
    },
    novaBrowserEncode(url){
        const bytes=new TextEncoder().encode(url);
        let binary="";
        bytes.forEach(byte=>binary+=String.fromCharCode(byte));
        return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    },
    bindNativeBrowser(root){
        if(!root||root._novaBrowserBound)return;
        root._novaBrowserBound=true;
        const base="https://single-nova-worker.umarerthteam.workers.dev";
        const frame=root.querySelector(".nova-browser-frame");
        const address=root.querySelector(".nova-browser-address");
        const home=root.querySelector(".nova-browser-home");
        const loading=root.querySelector(".nova-browser-loading");
        const status=root.querySelector("[data-browser-status]");
        const retry=root.querySelector('[data-browser="retry"]');
        const state={history:[],index:-1,ready:false,pending:null,bootTimer:null};
        root._novaBrowserState=state;
        const normalize=value=>{
            value=String(value||"").trim();
            if(!value)return "";
            if(!/^https?:\/\//i.test(value)){
                if(value.includes(".")&&!/\s/.test(value))value="https://"+value;
                else value="https://www.google.com/search?q="+encodeURIComponent(value);
            }
            return value;
        };
        const sync=()=>{
            root.querySelector('[data-browser="back"]').disabled=state.index<=0;
            root.querySelector('[data-browser="forward"]').disabled=state.index>=state.history.length-1;
        };
        const setStatus=(message,canRetry=false)=>{
            if(status)status.textContent=message;
            if(retry)retry.hidden=!canRetry;
        };
        const show=url=>{
            if(!url){home.hidden=false;frame.classList.remove("on");address.value="";loading.classList.remove("on");return;}
            home.hidden=true;frame.classList.add("on");address.value=url;loading.classList.add("on");
            frame.src=base+"/browse/"+this.novaBrowserEncode(url);
        };
        const navigate=(value,push=true)=>{
            const url=normalize(value); if(!url)return;
            if(push){state.history=state.history.slice(0,state.index+1);state.history.push(url);state.index=state.history.length-1;}
            sync();
            if(!state.ready){state.pending=url;loading.classList.add("on");setStatus("Starting secure proxy…");return;}
            show(url);
        };
        const boot=()=>{
            state.ready=false;
            clearTimeout(state.bootTimer);
            setStatus("Starting secure proxy…");
            loading.classList.add("on");
            frame.src=base+"/?nova_boot=3&t="+Date.now();
            state.bootTimer=setTimeout(()=>{
                if(!state.ready){loading.classList.remove("on");setStatus("Proxy startup is taking longer than expected.",true);}
            },12000);
        };
        const onMessage=event=>{
            if(event.origin!==base||event.source!==frame.contentWindow||!event.data)return;
            if(event.data.type==="nova-browser-ready"){
                clearTimeout(state.bootTimer);
                state.ready=true;
                loading.classList.remove("on");
                setStatus("Proxy ready");
                const pending=state.pending;state.pending=null;
                if(pending)show(pending);
            }else if(event.data.type==="nova-browser-error"){
                clearTimeout(state.bootTimer);
                state.ready=false;
                loading.classList.remove("on");
                setStatus(event.data.message||"Proxy failed to start.",true);
            }
        };
        window.addEventListener("message",onMessage);
        root._novaBrowserNavigate=navigate;
        root._novaBrowserReset=()=>{
            state.history=[];state.index=-1;state.pending=null;
            sync();show("");
        };
        frame.addEventListener("load",()=>{if(state.ready)loading.classList.remove("on")});
        root.querySelector(".nova-address-form").addEventListener("submit",e=>{e.preventDefault();navigate(address.value)});
        root.querySelector(".nova-home-search").addEventListener("submit",e=>{e.preventDefault();navigate(e.currentTarget.querySelector("input").value)});
        root.querySelectorAll("[data-url]").forEach(button=>button.addEventListener("click",()=>navigate(button.dataset.url)));
        root.querySelector('[data-browser="back"]').addEventListener("click",()=>{if(state.index>0){state.index--;sync();show(state.history[state.index])}});
        root.querySelector('[data-browser="forward"]').addEventListener("click",()=>{if(state.index<state.history.length-1){state.index++;sync();show(state.history[state.index])}});
        root.querySelector('[data-browser="reload"]').addEventListener("click",()=>{if(state.ready&&state.index>=0)show(state.history[state.index]);else boot()});
        retry.addEventListener("click",boot);
        sync();boot();
    },
    novaChatMarkup(){
        return '<div class="nova-native-app nova-chat-native"><aside class="nova-chat-side"><div class="nova-chat-brand"><span>N</span><div><strong>Nova Chat</strong><small data-chat-status>Connecting…</small></div></div><button class="nova-chat-room active" data-chat-peer="global"><b>#</b><span>Global chat</span></button><div class="nova-chat-label">Online <em data-chat-count>0</em></div><div class="nova-chat-users"></div><button class="nova-chat-profile" type="button"><span data-chat-avatar>?</span><div><strong data-chat-name>Choose a name</strong><small>Change profile</small></div></button></aside><main class="nova-chat-main"><header><div><strong data-chat-title>Global chat</strong><small data-chat-subtitle>Everyone online</small></div><span class="nova-live-dot"></span></header><div class="nova-chat-messages"></div><form class="nova-chat-compose"><input maxlength="2000" placeholder="Message global chat" autocomplete="off"><button type="submit">Send</button></form><div class="nova-chat-setup"><form><span class="nova-chat-setup-logo">N</span><h2>Join Nova Chat</h2><p>Pick a display name to start chatting.</p><input maxlength="20" placeholder="Your name" autocomplete="nickname" required><button type="submit">Join chat</button></form></div></main></div>';
    },
    _novaChatState:null,
    bindNativeChat(root){
        if(!root||root._novaChatBound)return;
        root._novaChatBound=true;
        if(!this._novaChatState)this._novaChatState={ws:null,name:localStorage.getItem("nova_chat_name")||"",peerId:"",users:[],selected:"global",messages:{global:[]},roots:new Set(),retry:null,status:"idle"};
        const state=this._novaChatState;
        state.roots.add(root);
        const setup=root.querySelector(".nova-chat-setup");
        const setupInput=setup.querySelector("input");
        const choose=()=>{setup.classList.add("on");setupInput.value=state.name;setTimeout(()=>setupInput.focus(),40)};
        root.querySelector(".nova-chat-profile").addEventListener("click",choose);
        setup.addEventListener("click",e=>{if(e.target===setup&&state.name)setup.classList.remove("on")});
        setup.querySelector("form").addEventListener("submit",e=>{
            e.preventDefault(); const value=setupInput.value.trim().slice(0,20); if(!value)return;
            state.name=value;localStorage.setItem("nova_chat_name",value);setup.classList.remove("on");
            if(state.ws&&state.ws.readyState===1)state.ws.send(JSON.stringify({type:"profile",user:value}));
            else this.novaChatConnect();
            this.novaChatRender();
        });
        root.querySelector(".nova-chat-compose").addEventListener("submit",e=>{
            e.preventDefault();const input=e.currentTarget.querySelector("input");const text=input.value.trim();if(!text)return;
            if(!state.name){choose();return}
            if(!state.ws||state.ws.readyState!==1){this.novaChatConnect();return}
            const payload=state.selected==="global"?{type:"chat",text:text}:{type:"dm",to:state.selected,text:text};
            state.ws.send(JSON.stringify(payload));input.value="";
        });
        root.querySelector('[data-chat-peer="global"]').addEventListener("click",()=>{state.selected="global";this.novaChatRender()});
        if(!state.name)choose();else this.novaChatConnect();
        this.novaChatRender();
    },
    novaChatConnect(){
        const state=this._novaChatState;if(!state||!state.name)return;
        if(state.ws&&(state.ws.readyState===0||state.ws.readyState===1))return;
        clearTimeout(state.retry);
        state.status="connecting";
        const ws=new WebSocket("wss://global-chat.umarerthteam.workers.dev/ws");state.ws=ws;
        this.novaChatRender();
        ws.addEventListener("open",()=>{state.status="live";ws.send(JSON.stringify({type:"init",user:state.name}));this.novaChatRender()});
        ws.addEventListener("message",event=>{
            let data;try{data=JSON.parse(event.data)}catch{return}
            if(data.type==="session")state.peerId=data.peerId||"";
            if(data.type==="presence")state.users=(data.users||[]).filter(user=>user.id!==state.peerId);
            if(data.type==="chat"){
                (state.messages.global||(state.messages.global=[])).push(data);
                if(!data.own&&state.selected!=="global")this.osChatNotify(data.user||"Nova Chat",data.text||"");
            }
            if(data.type==="dm"){
                const key=data.own?data.to:data.from;(state.messages[key]||(state.messages[key]=[])).push(data);
                if(!data.own&&state.selected!==key)this.osChatNotify(data.user||"Nova Chat",data.text||"");
            }
            if(data.type==="error"||data.type==="timeout")this.toast(data.text||"Chat is cooling down");
            Object.keys(state.messages).forEach(key=>{if(state.messages[key].length>150)state.messages[key]=state.messages[key].slice(-150)});
            this.novaChatRender();
        });
        ws.addEventListener("close",()=>{
            if(state.ws===ws){
                state.ws=null;state.status="retrying";
                state.retry=setTimeout(()=>this.novaChatConnect(),2500);
                this.novaChatRender();
            }
        });
        ws.addEventListener("error",()=>{state.status="error";this.novaChatRender()});
    },
    novaChatRender(){
        const state=this._novaChatState;if(!state)return;
        const escape=value=>this.esc(String(value==null?"":value));
        state.roots.forEach(root=>{
            if(!root.isConnected){state.roots.delete(root);return}
            const connected=state.ws&&state.ws.readyState===1;
            const connectionLabel=!state.name?"Choose a name":connected?"Live":state.status==="error"?"Connection error":state.status==="retrying"?"Reconnecting…":"Connecting…";
            root.querySelector("[data-chat-status]").textContent=connectionLabel;
            root.querySelector("[data-chat-count]").textContent=state.users.length;
            root.querySelector("[data-chat-name]").textContent=state.name||"Choose a name";
            root.querySelector("[data-chat-avatar]").textContent=(state.name||"?").charAt(0).toUpperCase();
            const users=root.querySelector(".nova-chat-users");
            users.innerHTML=state.users.length?state.users.map(user=>'<button class="nova-chat-room '+(state.selected===user.id?"active":"")+'" data-peer="'+escape(user.id)+'"><b>'+escape(user.user.charAt(0).toUpperCase())+'</b><span>'+escape(user.user)+'</span><i></i></button>').join(""):'<p class="nova-chat-empty-users">Nobody else is online yet.</p>';
            users.querySelectorAll("[data-peer]").forEach(button=>button.addEventListener("click",()=>{state.selected=button.dataset.peer;this.novaChatRender()}));
            root.querySelector('[data-chat-peer="global"]').classList.toggle("active",state.selected==="global");
            const peer=state.users.find(user=>user.id===state.selected);
            root.querySelector("[data-chat-title]").textContent=state.selected==="global"?"Global chat":(peer?.user||"Direct message");
            root.querySelector("[data-chat-subtitle]").textContent=state.selected==="global"?"Everyone online":(peer?"Online now":"Currently offline");
            root.querySelector(".nova-chat-compose input").placeholder=state.selected==="global"?"Message global chat":"Message "+(peer?.user||"this person");
            const messages=state.messages[state.selected]||[];
            const box=root.querySelector(".nova-chat-messages");
            box.innerHTML=messages.length?messages.map(message=>'<div class="nova-chat-message '+(message.own?"own":"")+'"><div class="nova-message-avatar">'+escape((message.user||state.name||"?").charAt(0).toUpperCase())+'</div><div><span><strong>'+escape(message.own?"You":message.user)+'</strong><time>'+new Date(message.timestamp||Date.now()).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})+'</time></span><p>'+escape(message.text)+'</p></div></div>').join(""):'<div class="nova-chat-welcome"><span>✦</span><h2>'+(state.selected==="global"?"Welcome to Nova Chat":"Start a conversation")+'</h2><p>'+(state.selected==="global"?"Messages from everyone online show up here.":"Direct messages stay between you and this person.")+'</p></div>';
            box.scrollTop=box.scrollHeight;
        });
    },
    osOpenChatroomWindow(){
        const key="nova-chatroom";
        const existing=document.querySelector('.os-window[data-key="'+CSS.escape(key)+'"]');
        if(existing){this.osFocusWindow(existing);existing.classList.remove("minimized");return existing}
        const body=this.novaChatMarkup();
        const w=this.osOpenWindow("Nova Chat",key,body,{center:true,width:1000,height:700});
        if(w)this.bindNativeChat(w.querySelector(".nova-chat-native"));
        return w;
    },
    osOpenBrowserWindow(){
        const key="nova-browser";
        const existing=document.querySelector('.os-window[data-key="'+CSS.escape(key)+'"]');
        if(existing){this.osFocusWindow(existing);existing.classList.remove("minimized");return existing}
        const w=this.osOpenWindow("Nova Browser",key,this.novaBrowserMarkup(),{center:true,width:1100,height:720});
        if(w)this.bindNativeBrowser(w.querySelector(".nova-browser-native"));
        return w;
    },

    osFinderBody(){
        const folders=["Applications","Games","Nova AI","YouTube","Anime","Favorites","Downloads"];
        return `<div class="os-finder"><aside class="os-sidebar"><div class="os-side-title">Favorites</div>${folders.map((f,i)=>`<button class="os-side-btn${i===1?" active":""}"><span>${i===1?"◈":"▣"}</span>${this.esc(f)}</button>`).join("")}<div class="os-side-title">Locations</div><button class="os-side-btn"><span>⌂</span>Nova Disk</button><button class="os-side-btn"><span>☁</span>Cloud</button></aside><main class="os-file-main"><div class="os-file-toolbar"><span>Games</span><span class="os-file-count"><span data-nova-game-count>${GAMES.length}</span> items</span></div><div class="os-file-grid">${GAMES.map((g,i)=>`<button class="os-file-item" data-game="${i}"><span class="os-file-icon">${this.esc((g.title||"?").charAt(0).toUpperCase())}</span><span>${this.esc(g.title)}</span></button>`).join("")}</div></main></div>`;
    },
    // Game library state uses URLs for recents so catalog refreshes cannot shift it.
    _library: {query:"", view:"all", sort:"featured", limit:48},
    _recentGames: [],
    osLibraryMatches(){
        const state=this._library;
        const terms=state.query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
        const recent=new Map(this._recentGames.map((url,i)=>[url,i]));
        const results=GAMES.map((game,index)=>({game,index})).filter(({game})=>{
            if(state.view==="favorites" && !this.favorites.includes(game.title)) return false;
            if(state.view==="recent" && !recent.has(game.url)) return false;
            const text=((game.title||"")+" "+(game.desc||"")).toLocaleLowerCase();
            return terms.every(term=>text.includes(term));
        });
        if(state.view==="recent") results.sort((a,b)=>recent.get(a.game.url)-recent.get(b.game.url));
        else if(state.sort==="az") results.sort((a,b)=>a.game.title.localeCompare(b.game.title,undefined,{numeric:true}));
        else if(state.sort==="za") results.sort((a,b)=>b.game.title.localeCompare(a.game.title,undefined,{numeric:true}));
        return results;
    },
    osLibraryCards(matches){
        return matches.map(({game:g,index:i})=>{
            const favorite=this.favorites.includes(g.title);
            const hue=Array.from(g.title).reduce((n,c)=>(n*31+c.charCodeAt(0))%360,0);
            const initials=g.title.split(/\s+/).slice(0,2).map(word=>word[0]).join("");
            return `<article class="nova-library-card" style="--game-hue:${hue}">
                <button class="nova-library-launch" data-library-game="${i}" aria-label="Play ${this.esc(g.title)}">
                    <span class="nova-game-art" aria-hidden="true"><span>${this.esc(initials)}</span><i>↗</i></span>
                    <span class="nova-game-copy"><strong>${this.esc(g.title)}</strong><small>${this.esc(g.desc||"Ready for your next session.")}</small></span>
                </button>
                <div class="nova-game-footer"><span>${g.autoDetected?"DISCOVERED":"PLAY IN BROWSER"}</span><button data-library-fav="${i}" aria-pressed="${favorite}" aria-label="${favorite?"Remove":"Add"} ${this.esc(g.title)} ${favorite?"from":"to"} favorites">${favorite?"★":"☆"}</button></div>
            </article>`;
        }).join("");
    },
    osGamesBody(){
        const s=this._library, matches=this.osLibraryMatches();
        return `<div class="os-games-app nova-library">
            <header class="nova-library-header"><div><span class="nova-library-kicker">NOVA / PLAY</span><h2>Your next escape.</h2><p>A whole world of games. One place to play.</p></div><span class="nova-library-total"><b data-nova-game-count>${GAMES.length}</b> games</span></header>
            <div class="nova-library-tools"><label class="nova-library-search"><span aria-hidden="true">⌕</span><input id="nova-library-search" type="search" placeholder="Find your next game…" aria-label="Search games" value="${this.esc(s.query)}"><kbd>/</kbd></label><select id="nova-library-sort" aria-label="Sort games"><option value="featured" ${s.sort==="featured"?"selected":""}>Featured</option><option value="az" ${s.sort==="az"?"selected":""}>Name: A–Z</option><option value="za" ${s.sort==="za"?"selected":""}>Name: Z–A</option></select></div>
            <nav class="nova-library-tabs" aria-label="Game collections">${[["all","All games"],["favorites","Favorites"],["recent","Recently played"]].map(([key,label])=>`<button data-library-view="${key}" aria-pressed="${s.view===key}">${label}</button>`).join("")}<span class="nova-library-result" role="status">${matches.length} games</span></nav>
            <div class="nova-library-scroll"><div class="nova-library-grid">${this.osLibraryCards(matches.slice(0,s.limit))}</div><div class="nova-library-empty" ${matches.length?"hidden":""}><span aria-hidden="true">✦</span><h3>${s.view==="favorites"?"Keep your favorites close.":s.view==="recent"?"Your next session starts here.":"No games found."}</h3><p>${s.view==="favorites"?"Tap a star on any game to save it here.":s.view==="recent"?"Games you launch appear here for a quick return.":"Try a different title or a shorter search."}</p><button data-library-reset>Browse all games</button></div><button class="nova-library-more" data-library-more ${matches.length<=s.limit?"hidden":""}>Show more games</button></div>
            <footer class="nova-library-status"><span class="nova-library-connection">${navigator.onLine?"Online":"Offline · games may need a connection"}</span><span>Made for a little downtime.</span></footer>
        </div>`;
    },
    osRefreshLibrary(){
        const matches=this.osLibraryMatches(), s=this._library;
        document.querySelectorAll(".nova-library").forEach(app=>{
            app.querySelector(".nova-library-grid").innerHTML=this.osLibraryCards(matches.slice(0,s.limit));
            app.querySelector(".nova-library-result").textContent=`${Math.min(matches.length,s.limit)} of ${matches.length} games`;
            app.querySelector("[data-library-more]").hidden=matches.length<=s.limit;
            const empty=app.querySelector(".nova-library-empty");
            empty.hidden=matches.length>0;
            empty.querySelector("h3").textContent=s.query?"No games found.":s.view==="favorites"?"Keep your favorites close.":s.view==="recent"?"Your next session starts here.":"No games found.";
            empty.querySelector("p").textContent=s.query?"Try a different title or a shorter search.":s.view==="favorites"?"Tap a star on any game to save it here.":s.view==="recent"?"Games you launch appear here for a quick return.":"Try a different search.";
            app.querySelectorAll("[data-library-view]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.libraryView===s.view)));
        });
    },
    osBindLibrary(){
        document.addEventListener("click",e=>{
            const app=e.target.closest(".nova-library"); if(!app) return;
            const play=e.target.closest("[data-library-game]");
            if(play){const game=GAMES[Number(play.dataset.libraryGame)];if(game)this.osOpenGameWindow(game);return;}
            const favorite=e.target.closest("[data-library-fav]");
            if(favorite){
                const game=GAMES[Number(favorite.dataset.libraryFav)]; if(!game)return;
                const i=this.favorites.indexOf(game.title);
                if(i<0)this.favorites.push(game.title);else this.favorites.splice(i,1);
                try{localStorage.setItem("ng_f",JSON.stringify(this.favorites));}catch{}
                this.osRefreshLibrary();
                app.querySelector(`[data-library-fav="${favorite.dataset.libraryFav}"]`)?.focus();
                return;
            }
            const tab=e.target.closest("[data-library-view]");
            if(tab){this._library.view=tab.dataset.libraryView;this._library.limit=48;}
            else if(e.target.closest("[data-library-more]")){this._library.limit+=48;}
            else if(e.target.closest("[data-library-reset]")){Object.assign(this._library,{query:"",view:"all",limit:48});app.querySelector("input").value="";}
            else return;
            this.osRefreshLibrary();
            if(tab)app.querySelector(".nova-library-scroll").scrollTop=0;
        });
        document.addEventListener("input",e=>{
            if(e.target.id!=="nova-library-search")return;
            this._library.query=e.target.value;this._library.limit=48;
            this.osRefreshLibrary();
            e.target.closest(".nova-library").querySelector(".nova-library-scroll").scrollTop=0;
        });
        document.addEventListener("change",e=>{
            if(e.target.id!=="nova-library-sort")return;
            this._library.sort=e.target.value;this._library.limit=48;this.osRefreshLibrary();
        });
        document.addEventListener("keydown",e=>{
            if(e.key!=="/" || e.ctrlKey || e.metaKey || e.altKey || e.target.closest("input,textarea,select,[contenteditable]"))return;
            const search=document.querySelector('.os-window.focused:not(.minimized) #nova-library-search');
            if(search){e.preventDefault();search.focus();}
        });
        const connection=()=>document.querySelectorAll(".nova-library-connection").forEach(el=>el.textContent=navigator.onLine?"Online":"Offline · games may need a connection");
        window.addEventListener("online",connection);window.addEventListener("offline",connection);
        window.addEventListener("nova:games-updated",()=>this.osRefreshLibrary());
    },

    osSettingsBody(){
        return `<div class="os-settings"><aside><div class="os-settings-brand">System Settings</div><button class="active">Appearance</button><button>Desktop & Dock</button><button>Game Center</button><button>Privacy</button><button>About</button></aside><main><h2>Appearance</h2><div class="os-setting-card"><div><strong>Interface</strong><p>Choose between the OS desktop and Classic Nova</p></div><div class="os-setting-actions"><button id="os-use-os">OS Style</button><button id="os-use-classic">Classic</button></div></div><div class="os-setting-card"><div><strong>Desktop animations</strong><p>Use enhanced window transitions and dock motion</p></div><button class="os-toggle on">On</button></div><div class="os-setting-card"><div><strong>Installed games</strong><p><span data-nova-game-count>${GAMES.length}</span> game applications available</p></div><span class="os-stat" data-nova-game-count>${GAMES.length}</span></div></main></div>`;
    },
    osAboutBody(){
        return `<div class="os-about"><div class="os-about-logo">✦</div><h1>Nova Gaming</h1><p>${this.esc(SITE_TAGLINE)}</p><div class="os-about-grid"><div><small>Games</small><strong data-nova-game-count>${GAMES.length}</strong></div><div><small>Engine</small><strong>HyperGlass</strong></div><div><small>Interface</small><strong>OS Style</strong></div></div><p class="os-muted">A browser based desktop environment for games tools media and Nova apps</p></div>`;
    },

    renderNovaDashboard(){
        const root=document.getElementById("nova-dashboard");if(!root)return;
        const recent=this._recentGames.map(url=>GAMES.find(game=>game.url===url)).filter(Boolean).slice(0,6);
        const favoriteCount=this.favorites.length;
        const continueGame=recent[0]||GAMES[0];
        const recentHost=root.querySelector("[data-dashboard-recents]");
        root.querySelector("[data-dashboard-games]").textContent=String(GAMES.length);
        root.querySelector("[data-dashboard-favorites]").textContent=String(favoriteCount);
        root.querySelector("[data-dashboard-continue-title]").textContent=continueGame?continueGame.title:"Browse the library";
        root.querySelector("[data-dashboard-continue]").disabled=!continueGame;
        root.querySelector("[data-dashboard-continue]").onclick=()=>continueGame&&this.launch(continueGame);
        recentHost.innerHTML=recent.length?recent.map(game=>`<button class="nova-recent-chip" data-recent-url="${this.esc(encodeURIComponent(game.url))}"><span>${this.esc((game.title||"?").charAt(0).toUpperCase())}</span><strong>${this.esc(game.title)}</strong><small>Play again</small></button>`).join(""):`<div class="nova-dashboard-empty">Games you play will show up here</div>`;
        recentHost.querySelectorAll("[data-recent-url]").forEach(button=>button.addEventListener("click",()=>{const game=GAMES.find(item=>item.url===decodeURIComponent(button.dataset.recentUrl));if(game)this.launch(game)}));
    },

    // ── DOM CONSTRUCTION ────────────────────────────────────────
    buildDOM(){
        try{
            const saved=JSON.parse(localStorage.getItem("ng_f")||"[]");
            this.favorites=Array.isArray(saved)?saved.filter(v=>typeof v==="string"):[];
            const recent=JSON.parse(localStorage.getItem("nova_recent_games")||"[]");
            this._recentGames=Array.isArray(recent)?recent.filter(v=>typeof v==="string").slice(0,24):[];
        }catch(e){}

        // Main App Wrapper
        const app=document.createElement("div"); app.id="app";
        const hbHTML=HEADER_BUTTONS.map(b=>`<button class="hbtn" id="${b.id}" title="${this.esc(b.label)}"><span>${b.icon}</span><span class="bl"> ${this.esc(b.label)}</span></button>`).join("");
        app.innerHTML=`
            <nav class="nova-topbar" aria-label="Primary navigation">
                <button class="nova-wordmark" id="nova-home" type="button" aria-label="Nova Gaming home"><span class="nova-bolt">ϟ</span><strong>nova</strong></button>
                <button id="nova-command-button" class="nova-side-search" type="button" title="Quick switch"><span>⌕ Search anything</span><kbd>⌘ K</kbd></button>
                <div class="nova-sidebar-pins"><button data-nova-action="browser" title="Browser">◎</button><button data-nova-action="chat" title="Chat">#</button><button id="nova-sidebar-add" title="Open command center">＋</button></div>
                <div class="nova-side-caption">Workspace</div>
                <div class="nova-primary-links"><button data-nova-action="home" class="active"><i>⌂</i><span>Games</span></button><button data-nova-action="browser"><i>◎</i><span>Browser</span></button><button data-nova-action="ai"><i>✦</i><span>Nova AI</span></button><button data-nova-action="youtube"><i>▷</i><span>Video</span></button><button data-nova-action="anime"><i>◆</i><span>Anime</span></button><button data-nova-action="chat"><i>#</i><span>Chat</span></button><button data-nova-action="settings"><i>⚙</i><span>Settings</span></button><button data-nova-action="admin"><i>◇</i><span>Admin</span></button><button data-nova-action="os"><i>▦</i><span>Desktop</span></button></div>
            </nav>
            <div id="tbr"><button class="tb-new" id="tb-new" title="New tab">+</button></div>
            <header class="nova-library-toolbar">
                <div class="nova-home-logo"><strong>nova</strong><span></span></div>
                <p>Pick a game or search the library</p>
                <label class="nova-game-search"><span>⌕</span><input type="text" class="sbar" id="sbar" placeholder="Search games"></label>
                <div class="nova-home-actions"><button class="mbtn" id="mbtn" aria-label="Menu"><span></span><span></span><span></span><b>Menu</b></button><button class="fvbtn" id="fvbtn" title="Favorites"><span>★</span><b>Favorites</b></button><button class="nova-quick-more" id="nova-command-more" title="More actions">More</button></div>
            </header>
            <section class="nova-dashboard" id="nova-dashboard">
                <div class="nova-dashboard-hero">
                    <div><span class="nova-dashboard-eyebrow">NOVA WORKSPACE</span><h1>Everything you want<br>one click away</h1><p>Browse the web jump back into a game or open any Nova app without digging through menus</p></div>
                    <div class="nova-dashboard-actions"><button class="nova-dashboard-primary" data-dashboard-action="browser"><span>◎</span><b>Open Browser</b><small>Search and browse</small></button><button data-dashboard-continue><span>▶</span><b>Continue playing</b><small data-dashboard-continue-title>Browse the library</small></button></div>
                </div>
                <div class="nova-dashboard-strip">
                    <button data-dashboard-action="ai"><span>✦</span><b>Nova AI</b><small>Ask anything</small></button>
                    <button data-dashboard-action="youtube"><span>▷</span><b>Video</b><small>Search and watch</small></button>
                    <button data-dashboard-action="chat"><span>#</span><b>Nova Chat</b><small>Talk with everyone</small></button>
                    <button data-dashboard-action="favorites"><span>★</span><b>Favorites</b><small><i data-dashboard-favorites>0</i> saved</small></button>
                    <button data-dashboard-random><span>↝</span><b>Surprise me</b><small>Random game</small></button>
                    <button data-dashboard-focus><span>◐</span><b>Focus mode</b><small>Hide distractions</small></button>
                </div>
                <div class="nova-dashboard-recents-head"><div><strong>Jump back in</strong><span>Your recent games</span></div><button data-dashboard-action="recent">View all</button></div>
                <div class="nova-dashboard-recents" data-dashboard-recents></div>
                <div class="nova-dashboard-stats"><span><b data-dashboard-games>${GAMES.length}</b> games ready</span><span><b>9</b> native apps</span><span><b>⌘ K</b> quick switch</span></div>
            </section>
            <section class="nova-library-intro"><div><span class="nova-kicker">PLAY WITHOUT THE CLUTTER</span><h1>Your games, ready when you are.</h1><p>Search the full Nova library, jump into a favorite, or open a recently played game.</p></div><div class="nova-library-count"><strong data-nova-game-count>${GAMES.length}</strong><span>games available</span></div></section>
            <div class="nova-section-title"><div><span class="nova-section-dot"></span><strong>All games</strong></div><span>Pick one and start playing</span></div>
            <div id="grid"></div>`;
        document.body.appendChild(app);

        const command=document.createElement("div");
        command.id="nova-command";
        command.setAttribute("aria-hidden","true");
        command.innerHTML=`<div class="nova-command-card" role="dialog" aria-modal="true" aria-label="Nova command center"><div class="nova-command-search"><span>⌕</span><input id="nova-command-input" placeholder="Search apps games and actions" autocomplete="off"><kbd>esc</kbd></div><div class="nova-command-section"><span id="nova-command-label">Quick access</span><div id="nova-command-results"></div></div><footer><span>↑↓ move</span><span>enter open</span><span>⌘ K anywhere</span></footer></div>`;
        document.body.appendChild(command);

        // Backdrop & Side Menu
        const bd=document.createElement("div"); bd.id="bd"; document.body.appendChild(bd);
        const panel=document.createElement("div"); panel.id="panel";
        panel.innerHTML=`<div class="ph"><div class="pe">OS System Panel</div><div class="pb">${this.esc(SITE_NAME)}</div></div>
            <div class="pbody">${MENU_ITEMS.map(m=>m.action==="separator"?`<div class="mdiv"></div>`:`<div class="mi" data-action="${m.action}" ${m.newTab?'data-nt="1"':''}><span class="miw">${m.icon}</span><span class="mil">${this.esc(m.label)}</span></div>`).join("")}</div>
            <div class="pft">${this.esc(SITE_TAGLINE)}</div>`;
        document.body.appendChild(panel);

        // Confirm Modal
        const ntov=document.createElement("div"); ntov.id="ntov";
        ntov.innerHTML=`<div class="ntc"><div class="nt-ico" id="nt-ico">⚡</div><div class="nt-tl">External Launch Protocol</div><div class="nt-nm" id="nt-nm">—</div><div class="nt-bd">This module will open in a separate browser viewport. Continue?</div><div class="nt-ac"><button class="nt-yes" id="nt-yes">Launch</button><button class="nt-no" id="nt-no">Cancel</button></div></div>`;
        document.body.appendChild(ntov);

        // Theater Workspace Header
        const th=document.createElement("div"); th.id="theater";
        th.innerHTML=`<div class="th"><div class="brand" id="t-ttl">Game Workspace</div><div class="tc"><button class="ab" id="t-fs">Fullscreen</button><button class="ab" id="t-dl" style="display:none">↓ Download</button><button class="ab" id="t-cloak">Cloak Session</button><button class="cb" id="t-close">✕ Terminate</button></div></div><div class="ifw" id="gframe-workspace"></div>`;
        document.body.appendChild(th);

        // Context Menu
        const ctx=document.createElement("div"); ctx.id="ctx"; document.body.appendChild(ctx);

        // Anime Panel
        const ap=document.createElement("div"); ap.id="anime-panel"; ap.className="fpanel";
        ap.innerHTML=`<div class="fpbar"><button class="fp-back" id="ap-back">← Back</button><div class="fp-ttl" id="ap-ttl">Anime Stream</div><input type="text" class="fp-srch" id="ap-srch" placeholder="Search anime…"></div><div class="fp-body" id="ap-body"><div class="fp-msg">Connecting to Anime Index…</div></div>`;
        document.body.appendChild(ap);

        // YouTube Panel
        const yp=document.createElement("div"); yp.id="yt-panel"; yp.className="fpanel";
        yp.innerHTML=`<div class="fpbar"><button class="fp-back" id="yp-back">← Back</button><div class="fp-ttl" id="yp-ttl">YouTube Stream</div><input type="text" class="fp-srch" id="yp-srch" placeholder="Search YouTube…"></div><div class="fp-body" id="yp-body"><div class="fp-msg">Connecting to Stream Hub…</div></div>`;
        document.body.appendChild(yp);

        // AI Assistant Panel
        const aip=document.createElement("div"); aip.id="ai-panel"; aip.className="fpanel";
        aip.innerHTML=`
            <div class="fpbar">
                <button class="fp-back" id="ai-back">← Back</button>
                <div class="fp-ttl">Nova AI</div>
                <select id="ai-model-select" title="Select Model"></select>
                <button class="ab" id="ai-toggle-hist">📜 Chat History</button>
            </div>
            <div class="ai-layout">
                <div class="ai-drawer" id="ai-drawer">
                    <div class="ai-drawer-h">
                        <button class="ai-new-btn" id="ai-new-chat"><span>+</span> New Chat</button>
                    </div>
                    <div class="ai-hist-list" id="ai-hist-list"></div>
                </div>
                <div class="ai-main">
                    <div class="ai-chat-body" id="ai-chat-body"></div>
                    <div class="ai-input-wrapper">
                        <div class="ai-attach-preview" id="ai-attach-preview"></div>
                        <div class="ai-input-area">
                            <input type="file" id="ai-file-input" style="display:none" multiple>
                            <button class="ai-attach-btn" id="ai-attach-btn" title="Attach Files">📎</button>
                            <textarea class="ai-textarea" id="ai-input" placeholder="Ask Nova AI anything or attach code/files..." rows="1"></textarea>
                            <button class="ai-send-btn" id="ai-send-btn">➔</button>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(aip);

        // Browser, chat, and settings stay inside the Nova workspace and participate in tabs.
        const bp=document.createElement("div"); bp.id="browser-panel"; bp.className="fpanel nova-native-panel";
        bp.innerHTML=this.novaBrowserMarkup();
        document.body.appendChild(bp);
        this.bindNativeBrowser(bp.querySelector(".nova-browser-native"));
        const cp=document.createElement("div"); cp.id="chat-panel"; cp.className="fpanel nova-native-panel";
        cp.innerHTML=this.novaChatMarkup();
        document.body.appendChild(cp);
        this.bindNativeChat(cp.querySelector(".nova-chat-native"));
        const sp=document.createElement("div"); sp.id="settings-panel"; sp.className="fpanel nova-settings-panel";
        sp.innerHTML=`<div class="fpbar"><div class="fp-ttl">Nova Settings</div></div><div class="fp-body">${this.osSettingsBody()}</div>`;
        document.body.appendChild(sp);
        const adp=document.createElement("div"); adp.id="admin-panel"; adp.className="fpanel nova-native-panel nova-admin-panel";
        adp.innerHTML=this.novaAdminMarkup();
        document.body.appendChild(adp);

        // Nova opens directly into the game dashboard.
        if(!this._educationFirstBoot){
            this.renderCards();
            this.tabNew("Games","home");
        }
        this.uiModeInit();

        const refreshOpenGameViews=()=>{
            document.querySelectorAll("[data-nova-game-count]").forEach(el=>{el.textContent=String(GAMES.length);});

            // The live repository scan finishes after the Classic grid is first
            // painted. Rebuild it so newly discovered games appear as cards too,
            // rather than updating only the count and OS-style library.
            if(document.getElementById("grid")) this.renderCards();
            this.osRefreshLibrary();

            document.querySelectorAll(".os-finder .os-file-grid").forEach(grid=>{
                grid.innerHTML=GAMES.map((g,i)=>`<button class="os-file-item" data-game="${i}"><span class="os-file-icon">${this.esc((g.title||"?").charAt(0).toUpperCase())}</span><span>${this.esc(g.title)}</span></button>`).join("");
            });
        };
        window.addEventListener("nova:games-updated",refreshOpenGameViews);
        if(window.NOVA_GAME_COUNT!=null) refreshOpenGameViews();

        document.addEventListener("click",e=>{
            const game=e.target.closest(".os-game-pro,.os-file-item");
            if(game && this.uiMode==="os"){ const idx=+game.dataset.game; if(Number.isInteger(idx)&&GAMES[idx]) this.osOpenGameWindow(GAMES[idx]); }
            const b=e.target.closest("#os-games-search"); if(b) e.stopPropagation();
            if(e.target.id==="os-use-os") this.setUIMode("os");
            if(e.target.id==="os-use-classic") this.setUIMode("classic");
        },true);
        app.querySelector("#nova-home")?.addEventListener("click",()=>this.openWorkspaceTab("Games","home"));
        app.querySelectorAll("[data-nova-action]").forEach(button=>button.addEventListener("click",()=>{
            const action=button.dataset.novaAction;
            if(action==="os") this.setUIMode("os");
            else {
                const titles={home:"Games",ai:"Nova AI",youtube:"Video",anime:"Anime",browser:"Browser",chat:"Chat",settings:"Settings",admin:"Admin"};
                this.openWorkspaceTab(titles[action]||"Nova",action);
            }
        }));
        this.bindCommandPalette();
        this.renderNovaDashboard();
        app.querySelectorAll("[data-dashboard-action]").forEach(button=>button.addEventListener("click",()=>{const action=button.dataset.dashboardAction;if(action==="favorites"||action==="recent"){this.openWorkspaceTab("Games","home");this.onlyFavs=action==="favorites";this.filter();document.getElementById("sbar")?.focus();return}const titles={browser:"Browser",ai:"Nova AI",youtube:"Video",chat:"Chat"};this.openWorkspaceTab(titles[action]||"Nova",action)}));
        app.querySelector("[data-dashboard-random]")?.addEventListener("click",()=>{const game=GAMES[Math.floor(Math.random()*GAMES.length)];if(game)this.launch(game)});
        app.querySelector("[data-dashboard-focus]")?.addEventListener("click",event=>{document.body.classList.toggle("nova-focus-mode");event.currentTarget.classList.toggle("on",document.body.classList.contains("nova-focus-mode"))});

    },

    commandItems(query=""){
        const apps=[
            {icon:"◎",title:"Browser",sub:"Nova proxy browser",action:"browser"},
            {icon:"⌂",title:"Games",sub:"Game library",action:"home"},
            {icon:"✦",title:"Nova AI",sub:"AI assistant",action:"ai"},
            {icon:"▷",title:"Video",sub:"Piped powered video",action:"youtube"},
            {icon:"◆",title:"Anime",sub:"Discover and watch anime",action:"anime"},
            {icon:"#",title:"Chat",sub:"Global chat and direct messages",action:"chat"},
            {icon:"⚙",title:"Settings",sub:"Customize Nova",action:"settings"},
            {icon:"◇",title:"Admin",sub:"Upload and manage games",action:"admin"},
            {icon:"▦",title:"Desktop mode",sub:"Open the Nova desktop",action:"os"}
        ];
        const actions=[
            {icon:"＋",title:"New games tab",sub:"Open another library tab",command:"new"},
            {icon:"★",title:"Favorites",sub:"Show favorite games",action:"favorites"},
            {icon:"⊘",title:"Cloak Nova",sub:"Open an about blank session",command:"cloak"},
            {icon:"⛶",title:"Fullscreen",sub:"Toggle fullscreen mode",command:"fullscreen"}
        ];
        const games=GAMES.map((game,index)=>({icon:"▶",title:game.title,sub:"Game",game:index}));
        const all=[...apps,...actions,...games];
        const term=String(query||"").trim().toLowerCase();
        if(term)return all.filter(item=>(item.title+" "+item.sub).toLowerCase().includes(term)).slice(0,14);
        let recent=[];
        try{recent=JSON.parse(localStorage.getItem("nova_recent_commands")||"[]")}catch{}
        const ordered=recent.map(title=>all.find(item=>item.title===title)).filter(Boolean);
        return [...ordered,...apps,...actions].filter((item,index,array)=>array.findIndex(other=>other.title===item.title)===index).slice(0,12);
    },
    renderCommandPalette(query=""){
        const host=document.getElementById("nova-command-results");if(!host)return;
        const items=this.commandItems(query);
        host.innerHTML=items.length?items.map((item,index)=>`<button class="nova-command-item${index===0?" selected":""}" data-command-index="${index}"><i>${this.esc(item.icon)}</i><span><strong>${this.esc(item.title)}</strong><small>${this.esc(item.sub)}</small></span><em>↵</em></button>`).join(""):`<div class="nova-command-empty">Nothing found</div>`;
        host._items=items;
        host.querySelectorAll(".nova-command-item").forEach((button,index)=>{
            button.addEventListener("mouseenter",()=>{host.querySelectorAll(".nova-command-item").forEach(item=>item.classList.remove("selected"));button.classList.add("selected")});
            button.addEventListener("click",()=>this.runCommandItem(items[index]));
        });
        document.getElementById("nova-command-label").textContent=query?"Results":"Quick access";
    },
    runCommandItem(item){
        if(!item)return;
        try{
            const recent=JSON.parse(localStorage.getItem("nova_recent_commands")||"[]");
            localStorage.setItem("nova_recent_commands",JSON.stringify([item.title,...recent.filter(title=>title!==item.title)].slice(0,6)));
        }catch{}
        this.closeCommandPalette();
        if(Number.isInteger(item.game)){this.launch(GAMES[item.game]);return}
        if(item.action==="os"){this.setUIMode("os");return}
        if(item.action){if(this.uiMode==="os")this.setUIMode("classic");const titles={home:"Games",ai:"Nova AI",youtube:"Video",anime:"Anime",browser:"Browser",chat:"Chat",settings:"Settings",admin:"Admin",favorites:"Favorites"};this.openWorkspaceTab(titles[item.action]||"Nova",item.action);return}
        if(item.command==="new"){this.tabNew("Games","home");return}
        if(item.command==="cloak"){openNovaCloak();return}
        if(item.command==="fullscreen"){if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.();return}
    },
    openCommandPalette(seed=""){
        const modal=document.getElementById("nova-command");if(!modal)return;
        modal.classList.add("on");modal.setAttribute("aria-hidden","false");
        const input=document.getElementById("nova-command-input");input.value=seed;
        this.renderCommandPalette(seed);
        setTimeout(()=>input.focus(),20);
    },
    closeCommandPalette(){
        const modal=document.getElementById("nova-command");if(!modal)return;
        modal.classList.remove("on");modal.setAttribute("aria-hidden","true");
    },
    bindCommandPalette(){
        if(this._commandBound)return;this._commandBound=true;
        const modal=document.getElementById("nova-command"),input=document.getElementById("nova-command-input"),host=document.getElementById("nova-command-results");
        document.getElementById("nova-command-button")?.addEventListener("click",()=>this.openCommandPalette());
        document.getElementById("nova-command-more")?.addEventListener("click",()=>this.openCommandPalette());
        document.getElementById("nova-sidebar-add")?.addEventListener("click",()=>this.openCommandPalette());
        modal?.addEventListener("mousedown",event=>{if(event.target===modal)this.closeCommandPalette()});
        input?.addEventListener("input",()=>this.renderCommandPalette(input.value));
        input?.addEventListener("keydown",event=>{
            const items=[...host.querySelectorAll(".nova-command-item")];let index=items.findIndex(item=>item.classList.contains("selected"));
            if(event.key==="ArrowDown"||event.key==="ArrowUp"){event.preventDefault();index=(index+(event.key==="ArrowDown"?1:-1)+items.length)%items.length;items.forEach(item=>item.classList.remove("selected"));items[index]?.classList.add("selected");items[index]?.scrollIntoView({block:"nearest"})}
            if(event.key==="Enter"){event.preventDefault();items[index<0?0:index]?.click()}
        });
        document.addEventListener("keydown",event=>{
            if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();modal?.classList.contains("on")?this.closeCommandPalette():this.openCommandPalette();return}
            if(event.key==="Escape"&&modal?.classList.contains("on")){this.closeCommandPalette();return}
            if(event.altKey&&/^[1-9]$/.test(event.key)){
                const actions=["home","ai","youtube","anime","browser","chat","settings","admin","os"];const action=actions[Number(event.key)-1];
                event.preventDefault();this.runCommandItem(this.commandItems("").find(item=>item.action===action));
            }
            if(event.key==="/"&&!event.metaKey&&!event.ctrlKey&&!event.altKey&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||"")){event.preventDefault();this.openCommandPalette()}
        });
    },

    // ── CARDS & FILTERING ───────────────────────────────────────
    renderCards(){
        const grid=document.getElementById("grid"); if(!grid) return;
        grid.innerHTML = "";
        this.cards=[];

        const frag=document.createDocumentFragment();
        // Show the complete catalog. The previous 60-card batch had no active
        // scroll/load-more trigger, which made every later game unreachable.
        const initial=GAMES.length;
        const add=(item)=>{
            const descText=item.desc||"";
            const card=document.createElement("div");
            card.className=`card${this.favorites.includes(item.title)?" fav":""}`;
            card.innerHTML=`<div class="game-art" aria-hidden="true"><span>${this.esc((item.title||"?").charAt(0).toUpperCase())}</span></div><div class="game-copy"><h3>${this.esc(item.title)}</h3><p>${this.esc(descText)}</p><span class="game-play">▶ Play now</span></div><span class="fvs">★</span>`;
            card.addEventListener("click",()=>this.launch(item));
            card.addEventListener("contextmenu",e=>{e.preventDefault();e.stopPropagation();this.showCtx(e.clientX,e.clientY,item,card);});
            frag.appendChild(card);
            this.cards.push({el:card,title:item.title,str:`${(item.title||"").toLowerCase()} ${descText.toLowerCase()}`});
        };
        for(let i=0;i<initial;i++) add(GAMES[i]);
        grid.appendChild(frag);
        this._classicRenderedCount=initial;
        this.filter();
    },

    renderMoreClassicGames(){
        const grid=document.getElementById("grid");
        if(!grid||this._classicRenderedCount>=GAMES.length)return;
        const frag=document.createDocumentFragment();
        const end=Math.min(GAMES.length,this._classicRenderedCount+80);
        for(let i=this._classicRenderedCount;i<end;i++){
            const item=GAMES[i],descText=item.desc||"";
            const card=document.createElement("div");
            card.className=`card${this.favorites.includes(item.title)?" fav":""}`;
            card.innerHTML=`<div class="game-art" aria-hidden="true"><span>${this.esc((item.title||"?").charAt(0).toUpperCase())}</span></div><div class="game-copy"><h3>${this.esc(item.title)}</h3><p>${this.esc(descText)}</p><span class="game-play">▶ Play now</span></div><span class="fvs">★</span>`;
            card.addEventListener("click",()=>this.launch(item));
            card.addEventListener("contextmenu",e=>{e.preventDefault();e.stopPropagation();this.showCtx(e.clientX,e.clientY,item,card);});
            frag.appendChild(card); this.cards.push({el:card,title:item.title,str:`${(item.title||"").toLowerCase()} ${descText.toLowerCase()}`});
        }
        grid.appendChild(frag); this._classicRenderedCount=end; this.filter();
    },

    filter(){
        for(let i=0; i<this.cards.length; i++){
            const c = this.cards[i];
            const ok=(!this.onlyFavs||this.favorites.includes(c.title))&&(!this.searchQuery||c.str.includes(this.searchQuery));
            c.el.classList.toggle("hidden",!ok);
            // Some appearance themes set card display with !important. Mirror
            // the filter in an inline important declaration so search and the
            // favorites filter always win the cascade.
            if(ok)c.el.style.removeProperty("display");
            else c.el.style.setProperty("display","none","important");
        }
    },

    // ── MULTI-TAB CONTROLLER ────────────────────────────────────
    tabNew(title,action,url,gameItem){
        const id=++this._tabCnt;
        this._tabs.push({id, title:title||"Home", action:action||"home", url:url||"", gameItem:gameItem||null});
        this.tabRender();
        this.tabActivate(id);
        return id;
    },
    openWorkspaceTab(title,action){
        const existing=this.preference("reuseAppTabs",true)?this._tabs.find(t=>t.action===action):null;
        if(existing){this.tabActivate(existing.id);return existing.id;}
        return this.tabNew(title,action);
    },
    preference(key,fallback){
        try{
            const settings=JSON.parse(localStorage.getItem("nova_appearance_v2")||"{}");
            return settings[key]===undefined?fallback:settings[key];
        }catch{return fallback;}
    },
    tabUpdateActive(title,action,url="",gameItem=null){
        const activeTab = this._tabs.find(t=>t.active);
        if(activeTab){
            activeTab.title = title || "Home";
            activeTab.action = action || "home";
            activeTab.url = url || "";
            activeTab.gameItem = gameItem || null;
            this.tabRender();
            this._setView(activeTab.action, activeTab.url, activeTab);
            const na = activeTab.action === "favorites" ? "favorites" : activeTab.action;
            document.querySelectorAll(".ntab").forEach(n => n.classList.toggle("on", n.dataset.action === na));
        } else {
            this.tabNew(title, action, url, gameItem);
        }
    },
    tabRender(){
        const bar=document.getElementById("tbr"); if(!bar) return;
        bar.querySelectorAll(".tbt").forEach(t=>t.remove());
        const nb=document.getElementById("tb-new");
        const icons={home:"⌂",game:"▶",ai:"✦",youtube:"▷",anime:"◆",browser:"◎",chat:"#",settings:"⚙",admin:"◇",favorites:"★"};
        this._tabs.forEach(t=>{
            const el=document.createElement("button");
            el.className=`tbt${t.active?" on":""}`; el.dataset.id=t.id;
            el.innerHTML=`<span class="tb-icon" aria-hidden="true">${icons[t.action]||"•"}</span><span class="tb-ttl">${this.esc(t.title)}</span><span class="tb-x" data-close="${t.id}" aria-label="Close tab">×</span>`;
            el.addEventListener("click",ev=>{
                if(ev.target.dataset.close){ ev.stopPropagation(); this.tabClose(+ev.target.dataset.close); }
                else this.tabActivate(t.id);
            });
            bar.insertBefore(el,nb);
        });
    },
    tabActivate(id){
        this._tabs.forEach(t=>t.active=t.id===id);
        this.tabRender();
        const tab=this._tabs.find(t=>t.id===id); if(!tab) return;
        this._setView(tab.action, tab.url, tab);
        const na=tab.action==="favorites"?"favorites":tab.action;
        document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action===na));
    },
    tabClose(id){
        const idx=this._tabs.findIndex(t=>t.id===id); if(idx===-1) return;
        const targetTab = this._tabs[idx];
        const wasActive=targetTab.active;

        if(targetTab.action === "game") {
            const frame = document.getElementById(`gframe-${targetTab.id}`);
            if(frame) frame.remove();
        }

        this._tabs.splice(idx,1);
        if(this._tabs.length===0) this.tabNew("Home","home");
        else if(wasActive) this.tabActivate(this._tabs[Math.max(0,idx-1)].id);
        else this.tabRender();
    },

    // ── VIEW SWITCHING ──────────────────────────────────────────
    _setView(action, url, tabObj){
        const panelIds={anime:"anime-panel",youtube:"yt-panel",ai:"ai-panel",browser:"browser-panel",chat:"chat-panel",settings:"settings-panel",admin:"admin-panel"};
        const panels=Object.keys(panelIds);
        const next=document.getElementById(panelIds[action]);
        const previous=panels.map(name=>document.getElementById(panelIds[name])).find(panel=>panel?.classList.contains("on")&&panel!==next);
        const order=["home","browser","ai","youtube","anime","chat","settings","admin"];
        const oldAction=this._activeNovaView||"home";
        const direction=order.indexOf(action)>=order.indexOf(oldAction)?"right":"left";
        if(previous){
            previous.classList.remove("nova-enter-left","nova-enter-right");
            previous.classList.add(direction==="right"?"nova-exit-left":"nova-exit-right");
            setTimeout(()=>previous.classList.remove("on","nova-exit-left","nova-exit-right"),360);
        }
        panels.forEach(name=>{
            const panel=document.getElementById(panelIds[name]);
            if(panel&&panel!==next&&!panel.classList.contains("nova-exit-left")&&!panel.classList.contains("nova-exit-right"))panel.classList.remove("on");
        });
        if(next){
            next.classList.remove("nova-exit-left","nova-exit-right","nova-enter-left","nova-enter-right");
            next.classList.add("on",direction==="right"?"nova-enter-right":"nova-enter-left");
            setTimeout(()=>next.classList.remove("nova-enter-left","nova-enter-right"),360);
        }
        this._activeNovaView=action;
        document.querySelectorAll("[data-nova-action]").forEach(button=>button.classList.toggle("active",button.dataset.novaAction===action));
        if(action==="settings"){
            const settingsBody=document.querySelector("#settings-panel .fp-body");
            if(settingsBody&&!settingsBody.querySelector(".nova-mega-settings"))settingsBody.innerHTML=this.osSettingsBody();
        }
        if(action==="admin"&&next)this.bindNovaAdmin(next.querySelector(".nova-admin-native"));
        const theater=document.getElementById("theater");
        const isGame=action==="game"&&tabObj;
        document.body.classList.toggle("nova-app-open",Boolean(next||isGame||action==="home"));
        const immersive=(isGame&&this.preference("immersiveGames",true))||(action==="browser"&&this.preference("immersiveBrowser",false));
        document.body.classList.toggle("nova-immersive",immersive);
        theater.classList.toggle("on",isGame);
        document.body.classList.toggle("in-game",isGame);
        if(isGame){
            document.getElementById("t-ttl").innerText=tabObj.title;
            this._theaterItem=tabObj.gameItem;
            const dl=document.getElementById("t-dl");
            if(dl)dl.style.display=tabObj.gameItem&&tabObj.gameItem.download!==false?"":"none";
            document.querySelectorAll(".gframe-instance").forEach(frame=>frame.classList.toggle("active",frame.id==="gframe-"+tabObj.id));
        }else this._theaterItem=null;
        if(action==="anime"&&!this._animeLoaded)this.animeHome();
        if(action==="youtube"&&!this._ytLoaded)this.ytHome();
        if(action==="ai"&&!this._aiLoaded)this.aiInit();
        if(action==="favorites"){this.onlyFavs=true;document.getElementById("fvbtn")?.classList.add("on");this.filter()}
        else if(this.onlyFavs){this.onlyFavs=false;document.getElementById("fvbtn")?.classList.remove("on");this.filter()}
    },

    // ── GAME LAUNCHING & RELIABLE IFRAME ENGINE ─────────────────
    async launch(item){
        if(item?.url){
            this._recentGames=[item.url,...this._recentGames.filter(url=>url!==item.url)].slice(0,24);
            try{localStorage.setItem("nova_recent_games",JSON.stringify(this._recentGames));}catch{}
            this.renderNovaDashboard();
        }
        if(item?.url && /^https:\/\/(?:www\.)?youtube\.com\/embed\//i.test(item.url)){
            const match=item.url.match(/\/embed\/([^?&#/]+)/i);
            if(match?.[1]){
                this.tabUpdateActive("YouTube","youtube");
                this.ytPlay(decodeURIComponent(match[1]),item.title||"YouTube Video");
                return;
            }
        }
        const existing = this._tabs.find(t => t.action === "game" && t.title === item.title);
        if (existing) {
            this.tabActivate(existing.id);
            return;
        }

        const tabId = this.tabNew(item.title, "game", item.url, item);
        const workspace = document.getElementById("gframe-workspace");
        
        const frame = document.createElement("iframe");
        frame.id = `gframe-${tabId}`;
        frame.className = "gframe-instance active";
        frame.setAttribute("allow", "autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads; allow-storage-access-by-user-activation");
        frame.removeAttribute("allowfullscreen");

        workspace.appendChild(frame);
        await this.attachHtmlToIframe(frame, item.url);
    },

    async openRealTab(url, title){
        const w = window.open("about:blank", "_blank");
        if(!w){ alert("Popup blocked."); return; }
        
        if (url.includes("jsdelivr.net")) {
            try {
                const res = await fetch(url);
                if (res.ok) {
                    let html = await res.text();
                    if (!/<(?:!doctype\s+html|html[\s>])/i.test(html)) {
                        throw new Error("Game resource did not return HTML");
                    }
                    const baseDir = url.substring(0, url.lastIndexOf('/') + 1);
                    html = `<base href="${baseDir}">${html}`;
                    w.document.open();
                    w.document.write(html);
                    w.document.close();
                    return;
                }
            } catch(e) {}
        }
        
        w.document.write(`<!DOCTYPE html><html><head><title>${this.esc(title)}</title><style>html,body,iframe{width:100%;height:100%;margin:0;padding:0;border:none;background:#000;}</style></head><body><iframe src="${this.esc(url)}" allow="gamepad; fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads"></iframe></body></html>`);
        w.document.close();
    },

    // ── CONFIRMATION MODAL ──────────────────────────────────────
    confirm(name,icon,cb){
        const ov=document.getElementById("ntov");
        document.getElementById("nt-nm").innerText=name;
        document.getElementById("nt-ico").innerText=icon||"⚡";
        ov.classList.add("on");
        const y=document.getElementById("nt-yes"), n=document.getElementById("nt-no");
        const ny=y.cloneNode(true), nn=n.cloneNode(true);
        y.replaceWith(ny); n.replaceWith(nn);
        const dismiss=()=>ov.classList.remove("on");
        document.getElementById("nt-yes").onclick=()=>{ dismiss(); cb(); };
        document.getElementById("nt-no").onclick=dismiss;
        ov.onclick=e=>{ if(e.target===ov) dismiss(); };
    },

    // ── CONTEXT MENU ────────────────────────────────────────────
    showCtx(x,y,item,cardEl){
        const menu=document.getElementById("ctx"), isFav=this.favorites.includes(item.title);
        const dlRow=item.download!==false?`<div class="ci" id="ci-dl">↓ Download File</div>`:"";
        menu.innerHTML=`<div class="ci" id="ci-launch">${item.newTab?"⚡ External Tab":"⚡ Launch Engine"}</div><div class="ci" id="ci-fav">${isFav?"✕ Remove Fav":"★ Favorite"}</div><div class="ci ac" id="ci-cloak">⊘ Cloak Session</div>${dlRow}`;
        menu.style.left=`${Math.min(x,innerWidth-210)}px`;
        menu.style.top=`${Math.min(y,innerHeight-170)}px`;
        menu.classList.add("on");
        document.getElementById("ci-launch").onclick=()=>{ this.hideCtx(); this.launch(item); };
        document.getElementById("ci-cloak").onclick=()=>{ this.hideCtx(); this.cloakGame(item); };
        document.getElementById("ci-fav").onclick=()=>this.toggleFav(item.title,cardEl);
        const dl=document.getElementById("ci-dl");
        if(dl) dl.onclick=()=>{ this.hideCtx(); this.dlItem(item); };
    },
    hideCtx(){ document.getElementById("ctx")?.classList.remove("on"); },
    async dlItem(item){
        try {
            await this.downloadGameFile(item.url,item.title);
        } catch(err) {
            console.error('Nova game download failed:',err);
            alert('Download failed. The game host blocked the file request.');
        }
    },
    toggleFav(title,cardEl){
        const idx=this.favorites.indexOf(title);
        if(idx>-1){ this.favorites.splice(idx,1); cardEl.classList.remove("fav"); }
        else{ this.favorites.push(title); cardEl.classList.add("fav"); }
        try{ localStorage.setItem("ng_f",JSON.stringify(this.favorites)); }catch(e){}
        this.filter(); this.hideCtx(); this.osRefreshLibrary();
    },

    // ── SAVE OFFLINE ────────────────────────────────────────────
    executeSaveDownload(){
        const btn=document.getElementById("save-btn"), lbl=btn?.querySelector(".bl");
        if(btn){ btn.classList.add("ld"); if(lbl) lbl.innerText=" Saving…"; }
        fetch(SAVE_URL).then(r=>{ if(!r.ok) throw 0; return r.blob(); })
        .then(blob => {
            const u = URL.createObjectURL(blob);
            const a = Object.assign(document.createElement("a"), {href:u, download:SAVE_FILENAME, style:"display:none"});
            document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u);
        }).catch(() => window.open(SAVE_URL,"_blank"))
        .finally(() => { if(btn){ btn.classList.remove("ld"); if(lbl) lbl.innerText=" Save"; } });
    },

    // ── PANEL NAVIGATION ────────────────────────────────────────
    openPanel(){ document.getElementById("panel").classList.add("on"); document.getElementById("bd").classList.add("on"); document.getElementById("mbtn").classList.add("on"); },
    closePanel(){ document.getElementById("panel").classList.remove("on"); document.getElementById("bd").classList.remove("on"); document.getElementById("mbtn").classList.remove("on"); },

    dispatch(action,newTab,label,icon){
        if(action==="custom:setOsStyle"){this.setUIMode("os");return;}
        if(!action) return;
        const run=()=>{
            if(action==="reload")         { this.closePanel(); location.reload(); }
            else if(action==="cloak")     { this.closePanel(); this.cloakSite(); }
            else if(action==="home")      { this.tabUpdateActive("Games","home"); }
            else if(action==="search")    { document.getElementById("sbar")?.focus(); }
            else if(action==="anime")     { this.tabUpdateActive("Anime","anime"); }
            else if(action==="youtube")   { this.tabUpdateActive("YouTube","youtube"); }
            else if(action==="ai")        { this.tabUpdateActive("Nova AI","ai"); }
            else if(action==="favorites") { this.tabUpdateActive("Favorites","favorites"); }
            else if(action==="menu")      { this.openPanel(); }
            else if(action.startsWith("url:"))   { this.closePanel(); window.open(action.slice(4),"_blank"); }
            else if(action.startsWith("custom:")){ const fn=action.slice(7); this.closePanel(); if(typeof this[fn]==="function") this[fn](); }
        };
        if(newTab&&action.startsWith("url:")) this.confirm(label||action.slice(4),icon||"⚡",run);
        else run();
    },

    // ── NOVA AI ENGINE (ATTACHMENTS + MODEL EXCLUSIONS) ───────────
    async aiInit() {
        this._aiLoaded = true;
        await this.aiFetchModels();
        this.aiLoadChats();
        if (this._aiChats.length === 0) {
            this.aiNewChat();
        } else {
            this.aiSelectChat(this._aiChats[0].id);
        }
    },

    async aiFetchModels() {
        const allModels = [];
        try {
            let pageToken = "";
            do {
                const url = new URL("https://generativelanguage.googleapis.com/v1beta/models");
                url.searchParams.set("pageSize", "1000");
                if (pageToken) url.searchParams.set("pageToken", pageToken);
                const res = await fetch(url.toString(), {
                    headers: { "x-goog-api-key": GEMINI_API_KEY }
                });
                if (!res.ok) {
                    const body = await res.text().catch(() => "");
                    throw new Error(`Models request failed (${res.status}) ${body}`);
                }
                const data = await res.json();
                if (Array.isArray(data.models)) allModels.push(...data.models);
                pageToken = data.nextPageToken || "";
            } while (pageToken);

            this._aiModels = allModels.filter(m => {
                const supportsGen = Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes("generateContent");
                if (!supportsGen) return false;
                const id = String(m.name || "").replace(/^models\//, "").toLowerCase();
                const disp = String(m.displayName || "").toLowerCase();
                const isPro = /\bpro\b/i.test(id) || /\bpro\b/i.test(disp);
                const isNano = /\bnano\b/i.test(id) || /\bnano\b/i.test(disp);
                const isBanana = /\bbanana\b/i.test(id) || /\bbanana\b/i.test(disp) || /\bbanna\b/i.test(id) || /\bbanna\b/i.test(disp);
                return !(isPro || isNano || isBanana);
            }).map(m => {
                const cleanId = m.name.replace(/^models\//, "");
                return { id: cleanId, name: m.displayName || cleanId };
            }).sort((a,b) => a.name.localeCompare(b.name));
        } catch(e) {
            console.warn("Could not fetch Gemini models dynamically:", e);
        }

        if (!this._aiModels || this._aiModels.length === 0) {
            this._aiModels = [
                { id: "gemini-3.6-flash", name: "Gemini 3.6 Flash" },
                { id: "gemini-3.5-flash", name: "Gemini 3.5 Flash" },
                { id: "gemini-3.5-flash-lite", name: "Gemini 3.5 Flash Lite" },
                { id: "gemini-3.1-flash-lite", name: "Gemini 3.1 Flash Lite" },
                { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash" },
                { id: "gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite" },
            ];
        }

        if (!this._selectedModel || !this._aiModels.some(m => m.id === this._selectedModel)) this._selectedModel = this._aiModels[0].id;
        this.aiRenderModelSelect();
    },

    aiRenderModelSelect() {
        const select = document.getElementById("ai-model-select");
        if (!select) return;
        select.innerHTML = "";
        this._aiModels.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m.id;
            opt.textContent = m.name;
            if (m.id === this._selectedModel) opt.selected = true;
            select.appendChild(opt);
        });
        select.onchange = (e) => {
            this._selectedModel = e.target.value;
            try{const settings=JSON.parse(localStorage.getItem("nova_appearance_v2")||"{}");settings.aiModel=this._selectedModel;localStorage.setItem("nova_appearance_v2",JSON.stringify(settings));}catch{}
        };
    },

    aiLoadChats() {
        try {
            this._aiChats = JSON.parse(localStorage.getItem("ng_ai_chats") || "[]");
        } catch(e) {
            this._aiChats = [];
        }
        this.aiRenderHistoryList();
    },

    aiSaveChats() {
        try {
            localStorage.setItem("ng_ai_chats", JSON.stringify(this._aiChats));
        } catch(e) {}
        this.aiRenderHistoryList();
    },

    aiNewChat() {
        const id = "chat_" + Date.now();
        const newChat = {
            id,
            title: "New Session",
            messages: [{
                role: "model",
                content: "Greetings! I am **Nova AI Engine**, powered by Google Gemini. How can I assist your gaming, code optimization, or media streaming today?"
            }]
        };
        this._aiChats.unshift(newChat);
        this.aiSaveChats();
        this.aiSelectChat(id);
    },

    aiSelectChat(id) {
        this._currentChatId = id;
        this.aiRenderHistoryList();
        this.aiRenderMessages();
    },

    aiDeleteChat(id, ev) {
        if(ev) ev.stopPropagation();
        this._aiChats = this._aiChats.filter(c => c.id !== id);
        this.aiSaveChats();
        if (this._aiChats.length === 0) {
            this.aiNewChat();
        } else if (this._currentChatId === id) {
            this.aiSelectChat(this._aiChats[0].id);
        }
    },

    aiRenderHistoryList() {
        const container = document.getElementById("ai-hist-list");
        if (!container) return;
        container.innerHTML = "";
        this._aiChats.forEach(c => {
            const el = document.createElement("div");
            el.className = `ai-hist-item${c.id === this._currentChatId ? " on" : ""}`;
            el.innerHTML = `<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this.esc(c.title)}</span>
                <span class="ai-hist-del" title="Delete session">✕</span>`;
            el.querySelector(".ai-hist-del").addEventListener("click", (e) => this.aiDeleteChat(c.id, e));
            el.addEventListener("click", () => this.aiSelectChat(c.id));
            container.appendChild(el);
        });
    },

    aiRenderMessages() {
        const container = document.getElementById("ai-chat-body");
        if (!container) return;
        container.innerHTML = "";
        const activeChat = this._aiChats.find(c => c.id === this._currentChatId);
        if (!activeChat) return;

        activeChat.messages.forEach(m => {
            this.aiAppendMessageDOM(m.role, m.content);
        });
        container.scrollTop = container.scrollHeight;
    },

    aiAppendMessageDOM(role, content) {
        const container = document.getElementById("ai-chat-body");
        if (!container) return;

        const msgEl = document.createElement("div");
        msgEl.className = `ai-msg ${role}`;
        
        const avatar = role === "user" ? "👤" : "✦";
        const parsedContent = this.aiParseMarkdown(content);

        msgEl.innerHTML = `
            <div class="ai-msg-avatar">${avatar}</div>
            <div class="ai-msg-content">${parsedContent}</div>`;

        msgEl.querySelectorAll(".ai-code-copy").forEach(btn => {
            btn.addEventListener("click", () => {
                const code = btn.closest(".ai-code-wrapper").querySelector("code").innerText;
                navigator.clipboard.writeText(code).then(() => {
                    btn.innerText = "Copied!";
                    setTimeout(() => btn.innerText = "Copy", 2000);
                });
            });
        });

        container.appendChild(msgEl);
        container.scrollTop = container.scrollHeight;
        return msgEl;
    },

    aiParseMarkdown(text) {
        if (!text) return "";
        let out = this.esc(text);

        out = out.replace(/&lt;think&gt;([\s\S]*?)&lt;\/think&gt;/gi, (_, thinkText) => {
            return `<details class="ai-think-block"><summary>🧠 Neural Reasoning</summary><div class="ai-think-content">${thinkText}</div></details>`;
        });

        out = out.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
            return `<div class="ai-code-wrapper">
                <div class="ai-code-header">
                    <span>${lang || "code"}</span>
                    <button class="ai-code-copy">Copy</button>
                </div>
                <pre><code>${code}</code></pre>
            </div>`;
        });

        out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
        out = out.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        out = out.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        out = out.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        out = out.replace(/^\s*-\s+(.*$)/gim, '<ul><li>$1</li></ul>');
        out = out.replace(/<\/ul>\s*<ul>/g, '');
        out = out.replace(/\n\n/g, '</p><p>');
        out = out.replace(/\n/g, '<br>');

        return `<p>${out}</p>`;
    },

    // ── AI ATTACHMENT HANDLERS ────────────────────────────────────
    async aiHandleFiles(files) {
        for (const file of files) {
            try {
                const b64 = await this.fileToBase64(file);
                this._aiAttachments.push({
                    name: file.name,
                    size: (file.size / 1024).toFixed(1) + " KB",
                    mimeType: file.type || "application/octet-stream",
                    data: b64
                });
            } catch(e) {
                console.error("Failed to process file:", file.name, e);
            }
        }
        this.aiRenderAttachments();
    },

    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const res = reader.result.toString();
                const base64Data = res.substring(res.indexOf(',') + 1);
                resolve(base64Data);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },

    aiRenderAttachments() {
        const container = document.getElementById("ai-attach-preview");
        if (!container) return;
        container.innerHTML = "";
        this._aiAttachments.forEach((att, idx) => {
            const badge = document.createElement("div");
            badge.className = "ai-attach-badge";
            badge.innerHTML = `📄 <span>${this.esc(att.name)} (${att.size})</span> <span class="ai-attach-remove" data-idx="${idx}">✕</span>`;
            badge.querySelector(".ai-attach-remove").addEventListener("click", () => {
                this._aiAttachments.splice(idx, 1);
                this.aiRenderAttachments();
            });
            container.appendChild(badge);
        });
    },

    async aiSendMessage() {
        const input = document.getElementById("ai-input");
        const btn = document.getElementById("ai-send-btn");
        const text = input.value.trim();
        const hasAttachments = this._aiAttachments.length > 0;

        if ((!text && !hasAttachments) || this._aiGenerating) return;

        const activeChat = this._aiChats.find(c => c.id === this._currentChatId);
        if (!activeChat) return;

        const fullPromptText = text || (hasAttachments ? "[Uploaded Attachments]" : "");

        if (activeChat.messages.length <= 1) {
            activeChat.title = fullPromptText.slice(0, 28) + (fullPromptText.length > 28 ? "…" : "");
            this.aiSaveChats();
        }

        let displayContent = text;
        if (hasAttachments) {
            const fileListText = this._aiAttachments.map(a => `📎 *${a.name}*`).join("\n");
            displayContent = `${fileListText}\n\n${text}`;
        }

        activeChat.messages.push({ role: "user", content: displayContent });
        this.aiAppendMessageDOM("user", displayContent);

        input.value = "";
        input.style.height = "auto";

        const currentFiles = [...this._aiAttachments];
        this._aiAttachments = [];
        this.aiRenderAttachments();

        this._aiGenerating = true;
        btn.disabled = true;

        const container = document.getElementById("ai-chat-body");
        const thinkIndicator = document.createElement("div");
        thinkIndicator.className = "ai-think-progress";
        thinkIndicator.innerHTML = `<div class="fp-spin" style="width:16px;height:16px;margin:0;border-width:2px;"></div> Nova AI (${this._selectedModel}) processing query...`;
        container.appendChild(thinkIndicator);
        container.scrollTop = container.scrollHeight;

        try {
            const contents = activeChat.messages.map((m, idx) => {
                const parts = [{ text: m.content }];
                if (idx === activeChat.messages.length - 1 && currentFiles.length > 0) {
                    currentFiles.forEach(f => {
                        parts.push({
                            inlineData: {
                                mimeType: f.mimeType,
                                data: f.data
                            }
                        });
                    });
                }
                return {
                    role: m.role === "user" ? "user" : "model",
                    parts
                };
            });

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this._selectedModel}:generateContent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": GEMINI_API_KEY
                },
                body: JSON.stringify({ contents })
            });

            thinkIndicator.remove();

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error?.message || "Gemini API stream error.");
            }

            const data = await response.json();
            const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

            activeChat.messages.push({ role: "model", content: replyText });
            this.aiSaveChats();
            this.aiAppendMessageDOM("model", replyText);

        } catch(e) {
            thinkIndicator.remove();
            const errText = `⚠️ **API Exception (${this._selectedModel}):** ${e.message}`;
            activeChat.messages.push({ role: "model", content: errText });
            this.aiSaveChats();
            this.aiAppendMessageDOM("model", errText);
        } finally {
            this._aiGenerating = false;
            btn.disabled = false;
        }
    },

    // ── JIKAN + CONSUMET ANIME STREAMING ENGINE ──────────────────
    async _consumetFetch(endpoint) {
        for (const base of CONSUMET_INSTANCES) {
            try {
                const res = await fetch(`${base}${endpoint}`);
                if (res.ok) {
                    currentConsumet = base;
                    return await res.json();
                }
            } catch(e) {}
        }
        throw new Error("All Consumet API instances failed.");
    },

    animeHome(){
        this._animeLoaded=true;
        this._animeState="overview";
        const ttl = document.getElementById("ap-ttl"); if(ttl) ttl.innerText = "Anime Stream";
        const body=document.getElementById("ap-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        fetch(`https://api.jikan.moe/v4/top/anime?limit=24`).then(r=>r.json()).then(d=>{
            if(!d.data?.length){ body.innerHTML=`<div class="fp-msg">Could not fetch anime list.</div>`; return; }
            this._renderAnimeGrid(d.data, body, "Top Rated Series");
        }).catch(()=>{ body.innerHTML=`<div class="fp-msg">Error connecting to Jikan API.</div>`; });
    },

    animeSearch(q){
        if(!q.trim()){ this.animeHome(); return; }
        this._animeState="overview";
        const ttl = document.getElementById("ap-ttl"); if(ttl) ttl.innerText = "Anime Stream";
        const body=document.getElementById("ap-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=24`).then(r=>r.json()).then(d=>{
            if(!d.data?.length){ body.innerHTML=`<div class="fp-msg">No anime found for "${this.esc(q)}"</div>`; return; }
            this._renderAnimeGrid(d.data, body, `Results for "${q}"`);
        }).catch(()=>{ body.innerHTML=`<div class="fp-msg">Anime search failed.</div>`; });
    },

    _renderAnimeGrid(list, body, sectionTitle){
        let h=`<div class="fp-sec"><div class="fp-sttl">${this.esc(sectionTitle)}</div><div class="fp-grid">`;
        list.forEach(a=>{
            const img = a.images?.jpg?.large_image_url || a.images?.jpg?.image_url || "";
            const score = a.score ? `★ ${a.score}` : (a.type || "Anime");
            h+=`<div class="acd" data-id="${a.mal_id}" data-title="${this.esc(a.title)}"><img src="${this.esc(img)}" alt="${this.esc(a.title)}" loading="lazy"><div class="acd-i"><div class="acd-t">${this.esc(a.title)}</div><div class="acd-m">${this.esc(score)}</div></div></div>`;
        });
        h+=`</div></div>`; body.innerHTML=h;
        body.querySelectorAll(".acd[data-id]").forEach(el=>el.addEventListener("click",()=>this.animeInfo(el.dataset.id, el.dataset.title)));
    },

    async animeInfo(malId, title){
        this._animeState="details";
        document.getElementById("ap-ttl").innerText="Details";
        const body=document.getElementById("ap-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        
        try {
            const jikanRes = await fetch(`https://api.jikan.moe/v4/anime/${malId}/full`).then(r=>r.json());
            const a = jikanRes.data;
            if(!a){ body.innerHTML=`<div class="fp-msg">Anime details unavailable.</div>`; return; }
            document.getElementById("ap-ttl").innerText=a.title||"Anime";
            const img = a.images?.jpg?.large_image_url || "";
            const genres = (a.genres||[]).map(g=>g.name).join(", ");

            body.innerHTML=`
                <div class="fp-sec" style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:24px">
                    <img src="${this.esc(img)}" style="width:clamp(120px,16vw,170px);border-radius:20px;object-fit:cover;flex-shrink:0;box-shadow:0 10px 30px rgba(0,0,0,0.8)">
                    <div style="flex:1;min-width:220px">
                        <div style="font-size:var(--flg);font-weight:800;margin-bottom:6px">${this.esc(a.title)}</div>
                        <div style="font-size:var(--fxs);color:var(--mint);margin-bottom:10px">${this.esc(a.title_japanese||"")}</div>
                        <div style="font-size:var(--fsm);color:rgba(255,255,255,0.6);line-height:1.5;margin-bottom:12px">${this.esc((a.synopsis||"No synopsis available.").slice(0,320))}…</div>
                        <div style="font-size:var(--fxs);color:rgba(255,255,255,0.4)"><strong>Episodes:</strong> ${a.episodes||"?"} | <strong>Score:</strong> ${a.score||"N/A"}</div>
                        <div style="font-size:var(--fxs);color:rgba(255,255,255,0.4);margin-top:6px"><strong>Genres:</strong> ${this.esc(genres)}</div>
                    </div>
                </div>
                <div class="fp-sec">
                    <div class="fp-sttl">Stream Episodes</div>
                    <div id="ep-container"><div class="fp-spin"></div></div>
                </div>`;

            const searchQuery = a.title_english || a.title;
            const cSearch = await this._consumetFetch(`/${encodeURIComponent(searchQuery)}`);
            const epContainer = document.getElementById("ep-container");

            if (cSearch.results && cSearch.results.length > 0) {
                const animeId = cSearch.results[0].id;
                const info = await this._consumetFetch(`/info/${animeId}`);
                
                if (info.episodes && info.episodes.length > 0) {
                    let epHtml = `<div class="ep-grid">`;
                    info.episodes.forEach(ep => {
                        epHtml += `<button class="ep-btn" data-epid="${ep.id}" data-epnum="${ep.number}">Ep ${ep.number}</button>`;
                    });
                    epHtml += `</div>`;
                    epContainer.innerHTML = epHtml;

                    epContainer.querySelectorAll(".ep-btn").forEach(btn => {
                        btn.addEventListener("click", () => this.animePlayStream(btn.dataset.epid, `${a.title} - Episode ${btn.dataset.epnum}`));
                    });
                } else {
                    epContainer.innerHTML = `<div class="fp-msg">No streaming episodes found.</div>`;
                }
            } else {
                epContainer.innerHTML = `<div class="fp-msg">Episodes currently unavailable on stream servers.</div>`;
            }

        } catch(e) {
            body.innerHTML=`<div class="fp-msg">Failed to load streaming episodes.</div>`;
        }
    },

    async animePlayStream(episodeId, title) {
        try {
            const data = await this._consumetFetch(`/watch/${episodeId}`);
            if (data.headers && data.headers.Referer) {
                const streamUrl = data.sources.find(s => s.quality === "default" || s.quality === "1080p" || s.isM3U8)?.url || data.sources[0]?.url;
                if (streamUrl) {
                    const embedUrl = `https://nsbx.ru/iframe.php?url=${encodeURIComponent(streamUrl)}`;
                    this.launch({ title: title, url: embedUrl, newTab: false, download: false });
                    return;
                }
            }
            if (data.download) {
                window.open(data.download, "_blank");
            } else {
                alert("Stream source currently unavailable.");
            }
        } catch(e) {
            alert("Failed to load video stream.");
        }
    },

    // ── PIPED VIDEO ENGINE ────────────────────────────────────────
    async _ytFetch(path, params={}) {
        const failures=[];
        const preferred=Math.max(0,PIPED_API_INSTANCES.indexOf(currentPipedApi));
        const pool=[...PIPED_API_INSTANCES.slice(preferred),...PIPED_API_INSTANCES.slice(0,preferred)];
        const attempt=async base=>{
            const controller=new AbortController();
            const timer=setTimeout(()=>controller.abort(),10000);
            try{
                const url=new URL(path.replace(/^\//,""),base+"/");
                Object.entries(params).forEach(([key,value])=>value!==undefined&&value!==null&&url.searchParams.set(key,String(value)));
                const response=await fetch(url.toString(),{
                    signal:controller.signal,
                    mode:"cors",
                    credentials:"omit",
                    cache:"no-store",
                    referrerPolicy:"no-referrer",
                    headers:{Accept:"application/json"}
                });
                if(!response.ok)throw new Error("HTTP "+response.status);
                const data=await response.json();
                if(!data||typeof data!=="object"||data.error)throw new Error(data?.error||"Invalid API response");
                currentPipedApi=base;
                return data;
            }catch(error){
                failures.push(new URL(base).hostname+": "+(error.name==="AbortError"?"timeout":error.message));
                throw error;
            }finally{clearTimeout(timer);}
        };
        for(let index=0;index<pool.length;index+=4){
            try{return await Promise.any(pool.slice(index,index+4).map(attempt));}
            catch{}
        }
        console.warn("Nova Piped API failures",failures);
        throw new Error("All Piped servers failed");
    },
    _pipedVideo(v){
        const videoId=v?.url?.match(/(?:watch\?v=|shorts\/)([\w-]{6,})/)?.[1]||v?.videoId||v?.id||"";
        const channelId=v?.uploaderUrl?.match(/\/channel\/([^/?]+)/)?.[1]||v?.channelId||"";
        return {videoId,title:v?.title||"Untitled",author:v?.uploaderName||v?.author||"",channelId,viewCount:v?.views||v?.viewCount||"",videoThumbnails:[{quality:"high",url:v?.thumbnail||v?.videoThumbnails?.[0]?.url||""}]};
    },
    async ytHome(){
        document.getElementById("yt-panel")?.classList.remove("playing");
        this._ytLoaded=true;
        const body=document.getElementById("yp-body");
        body.innerHTML=`<div class="fp-spin"></div>`;
        try{
            const data=await this._ytFetch("trending",{region:this.preference("youtubeRegion","US")});
            const videos=(Array.isArray(data)?data:data?.items||[]).map(v=>this._pipedVideo(v)).filter(v=>v.videoId).slice(0,24);
            this._renderYtGrid(videos,body,"Trending on Piped");
        }catch(e){body.innerHTML=`<div class="fp-msg">Piped unavailable ${this.esc(e.message||"")}</div>`;}
    },
    async ytSearch(q){
        document.getElementById("yt-panel")?.classList.remove("playing");
        q=q.trim(); if(!q){this.ytHome();return;}
        const body=document.getElementById("yp-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        try{
            const data=await this._ytFetch("search",{q,filter:"all"});
            const items=data?.items||[];
            const videos=items.filter(v=>v.type==="stream"||v.videoId).map(v=>this._pipedVideo(v)).filter(v=>v.videoId);
            const channels=items.filter(v=>v.type==="channel").map(v=>({channelId:v.url?.match(/\/channel\/([^/?]+)/)?.[1]||v.channelId||"",title:v.name||v.title||"Untitled channel",description:v.description||"",thumbnail:v.thumbnail||""})).filter(v=>v.channelId);
            this._renderYtSearchResults(videos,channels,body,q);
        }catch(e){body.innerHTML=`<div class="fp-msg">Piped search unavailable ${this.esc(e.message||"")}</div>`;}
    },
    _renderYtSearchResults(videos,channels,body,q){
        let h=`<div class="fp-sec"><div class="fp-sttl">Channels</div><div class="fp-grid yt-ch-grid">`;
        channels.forEach(c=>{h+=`<div class="acd ytc-channel" data-channel="${this.esc(c.channelId)}" data-title="${this.esc(c.title)}"><img src="${this.esc(c.thumbnail||"")}" alt=""><div class="acd-i"><div class="acd-t">${this.esc(c.title)}</div><div class="acd-m">Channel · Click to view videos</div></div></div>`});
        if(!channels.length)h+=`<div class="fp-msg">No matching channels.</div>`;
        h+=`</div></div><div class="fp-sec"><div class="fp-sttl">Videos for "${this.esc(q)}"</div><div class="fp-grid">`;
        videos.forEach(v=>{const thumb=v.videoThumbnails?.[0]?.url||`https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`;h+=`<div class="acd ytc" data-vid="${this.esc(v.videoId)}" data-title="${this.esc(v.title||"")}"><img src="${this.esc(thumb)}" alt="${this.esc(v.title||"")}" loading="lazy"><div class="acd-i"><div class="acd-t">${this.esc(v.title||"")}</div><div class="acd-m">${this.esc(v.author||"")}</div></div></div>`});
        if(!videos.length)h+=`<div class="fp-msg">No videos found.</div>`;
        h+=`</div></div>`; body.innerHTML=h;
        body.querySelectorAll(".acd[data-vid]").forEach(el=>el.addEventListener("click",()=>this.ytPlay(el.dataset.vid,el.dataset.title)));
        body.querySelectorAll(".ytc-channel[data-channel]").forEach(el=>el.addEventListener("click",()=>this.ytChannel(el.dataset.channel,el.dataset.title)));
    },
    _renderYtGrid(videos,body,sectionTitle){
        if(!videos?.length){body.innerHTML=`<div class="fp-msg">No videos found.</div>`;return;}
        let h=`<div class="fp-sec"><div class="fp-sttl">${this.esc(sectionTitle)}</div><div class="fp-grid">`;
        videos.forEach(v=>{const thumb=v.videoThumbnails?.[0]?.url||`https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`;const views=v.viewCount?Number(v.viewCount).toLocaleString()+" views":"";const meta=[v.author,views].filter(Boolean).join(" · ");h+=`<div class="acd ytc" data-vid="${this.esc(v.videoId)}" data-title="${this.esc(v.title||"")}"><img src="${this.esc(thumb)}" alt="${this.esc(v.title||"")}" loading="lazy"><div class="acd-i"><div class="acd-t">${this.esc(v.title||"")}</div><div class="acd-m">${this.esc(meta)}</div></div></div>`;});
        h+=`</div></div>`; body.innerHTML=h;
        body.querySelectorAll(".acd[data-vid]").forEach(el=>el.addEventListener("click",()=>this.ytPlay(el.dataset.vid,el.dataset.title)));
    },
    async ytChannel(channelId,title){
        document.getElementById("yt-panel")?.classList.remove("playing");
        const body=document.getElementById("yp-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        try{
            const c=await this._ytFetch(`channel/${encodeURIComponent(channelId)}`);
            const videos=(c.relatedStreams||[]).map(v=>this._pipedVideo(v)).filter(v=>v.videoId).slice(0,24);
            body.innerHTML=`<div class="yt-channel-head"><button class="fp-back" id="yt-channel-back">← Back</button><div><div class="fp-sttl">${this.esc(c.name||title||"Channel")}</div><div class="fp-msg">${Number(c.subscriberCount||0).toLocaleString()} subscribers</div></div></div><div class="fp-sec"><div class="fp-sttl">Videos</div><div class="fp-grid" id="yt-channel-grid"></div></div>`;
            const grid=body.querySelector("#yt-channel-grid");
            videos.forEach(v=>{const thumb=v.videoThumbnails?.[0]?.url;const el=document.createElement("div");el.className="acd ytc";el.dataset.vid=v.videoId;el.dataset.title=v.title||"";el.innerHTML=`<img src="${this.esc(thumb||"")}" alt="" loading="lazy"><div class="acd-i"><div class="acd-t">${this.esc(v.title)}</div><div class="acd-m">${this.esc(v.author)}</div></div>`;el.addEventListener("click",()=>this.ytPlay(el.dataset.vid,el.dataset.title));grid?.appendChild(el);});
            if(!videos.length&&grid)grid.innerHTML=`<div class="fp-msg">No videos found on this channel.</div>`;
            body.querySelector("#yt-channel-back")?.addEventListener("click",()=>{const q=document.getElementById("yp-srch")?.value||"";this.ytSearch(q)});
        }catch(e){body.innerHTML=`<div class="fp-msg">Channel unavailable ${this.esc(e.message||"")}</div>`;}
    },
    async ytPlay(videoId,title){
        if(!videoId)return;
        const body=document.getElementById("yp-body"); if(!body)return;
        document.getElementById("yt-panel")?.classList.add("playing");
        body.innerHTML=`<div class="fp-spin"></div>`;
        try{
            const data=await this._ytFetch(`streams/${encodeURIComponent(videoId)}`);
            const progressive=(data.videoStreams||[]).filter(v=>!v.videoOnly&&v.url).sort((a,b)=>(parseInt(b.quality)||0)-(parseInt(a.quality)||0));
            const stream=progressive.find(v=>/mp4/i.test(v.format||v.mimeType||""))||progressive[0];
            const src=stream?.url||data.hls;
            if(!src)throw new Error("No playable stream returned");
            const safeTitle=this.esc(title||data.title||"Video");
            const showComments=this.preference("youtubeComments",true);
            body.innerHTML=`<div class="nova-yt-player"><div class="nova-yt-playerbar"><button class="fp-back" id="yt-player-back">← Back</button><div>${safeTitle}</div></div><div class="nova-yt-watch-layout${showComments?"":" without-comments"}"><section class="nova-yt-video-column"><div class="nova-yt-frame-wrap"><video id="yt-player-frame" title="${safeTitle}" src="${this.esc(src)}" controls playsinline ${this.preference("youtubeAutoplay",true)?"autoplay":""}></video></div><div class="nova-yt-video-title">${safeTitle}</div></section>${showComments?`<aside class="nova-yt-comments" aria-label="Video comments"><div class="nova-yt-comments-head"><strong>Comments</strong><span>View only</span></div><div id="yt-comments-list"><div class="fp-spin"></div></div></aside>`:""}</div></div>`;
            body.querySelector("#yt-player-back")?.addEventListener("click",()=>{const q=document.getElementById("yp-srch")?.value?.trim()||"";if(q)this.ytSearch(q);else this.ytHome();});
            if(showComments)this.ytLoadComments(videoId);
        }catch(e){
            console.warn("Direct Piped playback failed and is using the Piped web player",e);
            const fallback="https://piped.video/watch?v="+encodeURIComponent(videoId)+(this.preference("youtubeAutoplay",true)?"&autoplay=1":"");
            const safeTitle=this.esc(title||"Video");
            body.innerHTML=`<div class="nova-yt-player"><div class="nova-yt-playerbar"><button class="fp-back" id="yt-player-back">← Back</button><div>${safeTitle}</div></div><div class="nova-yt-frame-wrap"><iframe id="yt-player-frame" title="${safeTitle}" src="${this.esc(fallback)}" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="no-referrer"></iframe></div></div>`;
            body.querySelector("#yt-player-back")?.addEventListener("click",()=>{const q=document.getElementById("yp-srch")?.value?.trim()||"";if(q)this.ytSearch(q);else this.ytHome();});
        }
    },
    async ytLoadComments(videoId){
        const host=document.getElementById("yt-comments-list");if(!host)return;
        try{
            const data=await this._ytFetch(`comments/${encodeURIComponent(videoId)}`);
            const items=data.comments||[];
            if(!items.length){host.innerHTML=`<div class="nova-comment-empty">Comments are unavailable for this video.</div>`;return;}
            host.innerHTML=items.slice(0,24).map(comment=>this.ytCommentMarkup({authorDisplayName:comment.author,textDisplay:comment.commentText,authorProfileImageUrl:comment.thumbnail,likeCount:comment.likeCount,publishedAt:"",publishedText:comment.commentedTime},false)).join("");
        }catch(e){host.innerHTML=`<div class="nova-comment-empty">Comments could not be loaded. ${this.esc(e.message||"")}</div>`;}
    },
    ytCommentMarkup(snippet,reply){
        const name=this.esc(snippet?.authorDisplayName||"User");
        const text=this.esc(snippet?.textDisplay||snippet?.textOriginal||"");
        const avatar=this.esc(snippet?.authorProfileImageUrl||"");
        const likes=Number(snippet?.likeCount||0);
        const date=snippet?.publishedText||"";
        return `<article class="nova-comment"><div class="nova-comment-row${reply?" reply":""}">${avatar?`<img src="${avatar}" alt="">`:`<span class="nova-comment-avatar">${name.charAt(0)}</span>`}<div><div class="nova-comment-meta"><strong>${name}</strong><span>${this.esc(date)}</span></div><p>${text}</p>${likes?`<small>♡ ${likes.toLocaleString()}</small>`:""}</div></div></article>`;
    },

    // ── ABOUT:BLANK CLOAKING ─────────────────────────────────────
    async cloakGame(item){
        const gameItem = item || this._theaterItem;
        if (!gameItem) {
            this.cloakSite();
            return;
        }
        const win = window.open("about:blank", "_blank");
        if (!win) { alert("Popup blocked! Allow popups to cloak."); return; }
        win.document.title = CLOAK_TITLE;
        
        const link = win.document.createElement("link");
        link.rel = "icon"; link.type = "image/png"; link.href = CLOAK_ICON;
        win.document.head.appendChild(link);

        win.document.body.style.cssText = "margin:0;height:100vh;overflow:hidden;background:#000;";
        const iframe = win.document.createElement("iframe");
        iframe.style.cssText = "border:none;width:100%;height:100%;display:block;";
        iframe.allow = "gamepad; fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads; allow-storage-access-by-user-activation";
        
        win.document.body.appendChild(iframe);
        await this.attachHtmlToIframe(iframe, gameItem.url);
        this.hideCtx();
    },

    cloakSite(){
        const win=openNovaCloak();
        if(!win && !isCloakedOrEmbedded())alert("Popup blocked. Allow popups for this page, then try again.");
        this.closePanel();
    },

    // ── MAIN EVENT BINDINGS ─────────────────────────────────────
    bindEvents(){
        const $=id=>document.getElementById(id), $$=s=>document.querySelector(s);

        // Search & Favorites
        $("sbar")?.addEventListener("input",e=>{ this.searchQuery=e.target.value.toLowerCase().trim(); this.filter(); },{passive:true});
        $("fvbtn")?.addEventListener("click",()=>{ this.onlyFavs=!this.onlyFavs; $("fvbtn").classList.toggle("on",this.onlyFavs); this.filter(); });
        
        // Navigation Side Panel
        $("mbtn")?.addEventListener("click",e=>{ e.stopPropagation(); $("panel").classList.contains("on")?this.closePanel():this.openPanel(); });
        $("bd")?.addEventListener("click",()=>this.closePanel());
        $("panel")?.addEventListener("click",e=>e.stopPropagation());
        $("panel")?.querySelectorAll(".mi[data-action]").forEach(el=>el.addEventListener("click",()=>{
            const cfg=MENU_ITEMS.find(m=>m.action===el.dataset.action);
            this.dispatch(el.dataset.action,el.dataset.nt==="1",cfg?.label,cfg?.icon);
        }));
        
        HEADER_BUTTONS.forEach(b=>{ $(b.id)?.addEventListener("click",()=>this.dispatch(b.action,b.newTab,b.label,b.icon)); });

        // Multi-Tab bar
        $("tb-new")?.addEventListener("click",()=>{
            this.tabNew("New Tab","browser");
            document.querySelector("#browser-panel .nova-browser-native")?._novaBrowserReset?.();
        });

        // Bottom Navigation Tabs
        document.querySelectorAll(".ntab").forEach(t=>t.addEventListener("click",()=>{
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n===t));
            this.dispatch(t.dataset.action);
        }));

        // Theater Game Controls
        $("t-fs")?.addEventListener("click",()=>{
            const target = document.getElementById("theater");
            if(!target) return;
            if(target.requestFullscreen) target.requestFullscreen();
            else if(target.webkitRequestFullscreen) target.webkitRequestFullscreen();
        });
        $("t-cloak")?.addEventListener("click",()=>{
            this.cloakGame(this._theaterItem);
        });
        $("t-close")?.addEventListener("click",()=>{
            const activeTab = this._tabs.find(t=>t.active);
            if(activeTab) this.tabClose(activeTab.id);
        });
        $("t-dl")?.addEventListener("click",()=>{ if(this._theaterItem) this.dlItem(this._theaterItem); });

        // Nova AI Events & Attachments
        $("ai-back")?.addEventListener("click",()=>{
            this.tabUpdateActive("Games","home");
        });
        $("ai-new-chat")?.addEventListener("click", ()=>this.aiNewChat());
        $("ai-toggle-hist")?.addEventListener("click", ()=> {
            document.getElementById("ai-drawer")?.classList.toggle("on");
        });
        $("ai-send-btn")?.addEventListener("click", ()=>this.aiSendMessage());
        
        const fileInput = $("ai-file-input");
        $("ai-attach-btn")?.addEventListener("click", () => fileInput?.click());
        fileInput?.addEventListener("change", (e) => {
            if (e.target.files && e.target.files.length > 0) {
                this.aiHandleFiles(Array.from(e.target.files));
                fileInput.value = "";
            }
        });

        const aiInput = $("ai-input");
        if (aiInput) {
            aiInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    this.aiSendMessage();
                }
            });
            aiInput.addEventListener("input", () => {
                aiInput.style.height = "auto";
                aiInput.style.height = Math.min(aiInput.scrollHeight, 160) + "px";
            });
        }

        // Anime Panel Back Navigation Fix
        $("ap-back")?.addEventListener("click",()=>{
            if(this._animeState === "details"){
                const q = $("ap-srch")?.value.trim();
                if(q) {
                    this.animeSearch(q);
                } else {
                    this.animeHome();
                }
            } else {
                this.tabUpdateActive("Games","home");
            }
        });

        let ast;
        $("ap-srch")?.addEventListener("input",e=>{ clearTimeout(ast); ast=setTimeout(()=>this.animeSearch(e.target.value),350); });

        // YouTube Panel Events
        $("yp-back")?.addEventListener("click",()=>{
            this.tabUpdateActive("Games","home");
        });
        let yst;
        $("yp-srch")?.addEventListener("input",e=>{ clearTimeout(yst); yst=setTimeout(()=>this.ytSearch(e.target.value),350); });

        // Global Event Listeners
        window.addEventListener("click",()=>this.hideCtx());
        window.addEventListener("contextmenu",e=>{ if(!e.target.closest(".card")){ e.preventDefault(); this.hideCtx(); } });
        
        window.addEventListener("keydown",e=>{
            if(e.key==="Escape"){
                if($("ntov").classList.contains("on")) $("ntov").classList.remove("on");
                else if($("panel").classList.contains("on")) this.closePanel();
                else if($("ai-panel").classList.contains("on")){
                    this.tabUpdateActive("Games","home");
                }
                else if($("anime-panel").classList.contains("on")){ 
                    if(this._animeState === "details"){
                        const q = $("ap-srch")?.value.trim();
                        if(q) this.animeSearch(q);
                        else this.animeHome();
                    } else {
                        this.tabUpdateActive("Games","home");
                    }
                }
                else if($("yt-panel").classList.contains("on")){ this.tabUpdateActive("Games","home"); }
            }
        },{passive:true});
    },

    osModeCss(){
        if(document.getElementById("os-mode-style"))return;
        const style=document.createElement("style"); style.id="os-mode-style"; style.textContent=`

/* Fast native-feeling window dragging */
.os-winbar{touch-action:none;-webkit-user-select:none;user-select:none;cursor:default}
.os-winbar *{-webkit-user-select:none;user-select:none}
.os-window.os-dragging{transition:none!important;cursor:grabbing!important}
.os-window.os-dragging *{user-select:none!important;-webkit-user-select:none!important}
body.nova-window-dragging{user-select:none!important;-webkit-user-select:none!important;cursor:grabbing!important}
body.os-mode{overflow:hidden;background:#05060b}body.os-mode #grid,body.os-mode #tbr,body.os-mode header,body.os-mode #bnav{display:none!important}body.os-mode #particle-canvas{opacity:.18}
#mode-chooser{position:fixed;inset:0;z-index:30000;display:grid;place-items:center;background:rgba(2,3,8,.78);backdrop-filter:blur(28px);animation:modeFade .3s ease}.mode-card{width:min(900px,94vw);padding:44px;border:1px solid rgba(255,255,255,.13);border-radius:34px;background:linear-gradient(145deg,rgba(28,31,45,.94),rgba(9,11,18,.95));box-shadow:0 45px 120px rgba(0,0,0,.72);text-align:center}.mode-logo{width:64px;height:64px;margin:0 auto 15px;border-radius:20px;display:grid;place-items:center;font-size:30px;color:#00ff9d;background:rgba(0,255,157,.1);border:1px solid rgba(0,255,157,.2)}.mode-kicker{font-size:11px;letter-spacing:4px;color:#00ff9d;font-weight:900;margin-bottom:8px}.mode-card h1{margin:0;font-size:clamp(30px,5vw,54px)}.mode-card p{margin:10px 0 30px;color:rgba(255,255,255,.56)}.mode-options{display:grid;grid-template-columns:1fr 1fr;gap:18px}.mode-option{box-sizing:border-box;border:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.035);backdrop-filter:blur(28px) saturate(140%);color:#fff;border-radius:26px;padding:22px;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:9px;transition:.28s transform,.28s background,.28s border-color;overflow:hidden}.mode-option:hover{transform:translateY(-8px);background:rgba(255,255,255,.07);border-color:rgba(0,255,157,.42)}.mode-option strong{font-size:20px}.mode-option small{color:rgba(255,255,255,.5);line-height:1.45}.mode-preview{height:180px;border-radius:18px;display:block;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);margin-bottom:4px}.os-preview{background:linear-gradient(145deg,#0e1220,#2a1b53 48%,#0b0f1d)}.os-preview i{position:absolute;left:0;right:0;top:0;height:24px;background:rgba(7,8,12,.78)}.os-preview b{position:absolute;bottom:11px;width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.12);backdrop-filter:blur(12px)}.os-preview b:nth-of-type(1){left:calc(50% - 70px)}.os-preview b:nth-of-type(2){left:calc(50% - 20px)}.os-preview b:nth-of-type(3){left:calc(50% + 30px)}.os-preview em{position:absolute;left:8%;top:22%;width:62%;height:42%;border-radius:12px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}.classic-preview{padding:18px;display:grid;grid-template-columns:1fr 1fr;gap:10px;background:linear-gradient(145deg,#0a0d12,#131a1f)}.classic-preview i{border-radius:12px;background:linear-gradient(145deg,rgba(0,255,157,.16),rgba(111,81,255,.17));border:1px solid rgba(255,255,255,.07)}
#os-desktop{position:fixed;inset:0;z-index:1500;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",Inter,system-ui,sans-serif;overflow:hidden;animation:osDesktopIn .55s cubic-bezier(.2,.8,.2,1)}.os-wallpaper{position:absolute;inset:0;background:radial-gradient(circle at 20% 25%,rgba(0,255,157,.2),transparent 26%),radial-gradient(circle at 80% 20%,rgba(110,75,255,.26),transparent 32%),radial-gradient(circle at 55% 85%,rgba(0,183,255,.16),transparent 25%),linear-gradient(145deg,#06070c,#101322 46%,#080a11);overflow:hidden}.os-wallpaper-orb{position:absolute;border-radius:50%;filter:blur(10px);opacity:.38}.os-wallpaper-orb.o1{width:46vw;height:46vw;right:-12vw;bottom:-16vw;background:radial-gradient(circle,rgba(101,74,255,.42),transparent 64%)}.os-wallpaper-orb.o2{width:32vw;height:32vw;left:-10vw;top:8vw;background:radial-gradient(circle,rgba(0,255,157,.3),transparent 64%)}.os-wallpaper-grid{position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.32),transparent 78%)}
.os-menubar{position:absolute;z-index:1600;left:0;right:0;top:0;height:34px;padding:0 10px;display:flex;align-items:center;justify-content:space-between;background:rgba(8,9,14,.56);border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:blur(22px);font-size:12px}.os-menu-left,.os-menu-right{display:flex;align-items:center;gap:2px}.os-menu-item,.os-apple,.os-control{border:0;background:transparent;color:#fff;padding:5px 9px;border-radius:7px;cursor:pointer}.os-menu-item:hover,.os-apple:hover,.os-control:hover{background:rgba(255,255,255,.08)}.os-menu-item.strong{font-weight:800}.os-apple{font-size:14px}.os-status-dot{width:7px;height:7px;border-radius:50%;background:#28c840;box-shadow:0 0 12px rgba(40,200,64,.8);margin-right:2px}.os-menu-right{gap:5px;color:rgba(255,255,255,.82)}
.os-desktop-icons{position:absolute;z-index:2150;left:18px;top:56px;display:flex;flex-direction:column;gap:14px;width:92px}.os-desktop-icon{border:0;background:transparent;color:#fff;display:flex;flex-direction:column;align-items:center;gap:6px;padding:5px;border-radius:12px;font-size:11px;cursor:pointer;text-shadow:0 1px 8px rgba(0,0,0,.7)}.os-desktop-icon:hover{background:rgba(255,255,255,.07)}.os-dicon{width:58px;height:58px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(145deg,rgba(255,255,255,.17),rgba(255,255,255,.06));border:1px solid rgba(255,255,255,.12);box-shadow:0 14px 28px rgba(0,0,0,.28);font-size:24px}
.os-window-layer{position:absolute;inset:34px 0 0;z-index:2000;pointer-events:none}.os-window{position:absolute;pointer-events:auto;min-width:420px;min-height:300px;border:1px solid rgba(255,255,255,.14);border-radius:18px;overflow:hidden;background:rgba(16,18,27,.88);backdrop-filter:blur(28px) saturate(120%);box-shadow:0 28px 90px rgba(0,0,0,.58),0 1px 0 rgba(255,255,255,.08) inset;transition:box-shadow .2s,transform .18s}.os-window.focused{box-shadow:0 36px 110px rgba(0,0,0,.64),0 0 0 1px rgba(255,255,255,.02)}.os-window-opening{opacity:0;transform:translateY(18px) scale(.97)}.os-window.minimized{opacity:0;transform:translateY(80px) scale(.1);pointer-events:none}.os-window.maximized{left:16px!important;top:16px!important;width:calc(100% - 32px)!important;height:calc(100% - 32px)!important}.os-winbar{height:42px;display:grid;grid-template-columns:86px minmax(0,1fr) 86px;align-items:center;padding:0 12px;border-bottom:1px solid rgba(255,255,255,.07);background:linear-gradient(rgba(255,255,255,.07),rgba(255,255,255,.02));user-select:none}.os-win-controls{display:flex;gap:8px;width:86px}.os-win-controls button{width:13px;height:13px;border-radius:50%;padding:0;border:0;color:transparent;cursor:pointer;box-shadow:0 0 0 1px rgba(0,0,0,.18) inset}.os-win-controls button:hover{color:rgba(0,0,0,.6)}.os-win-controls .red{background:#ff5f57}.os-win-controls .yellow{background:#febc2e}.os-win-controls .green{background:#28c840}.os-win-title{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:12px;font-weight:700;color:rgba(255,255,255,.82)}.os-win-spacer{width:86px}.os-win-content{height:calc(100% - 42px);overflow:hidden;position:relative}.os-resize{position:absolute;right:1px;bottom:1px;width:16px;height:16px;cursor:nwse-resize;background:linear-gradient(135deg,transparent 45%,rgba(255,255,255,.2) 46%,rgba(255,255,255,.2) 56%,transparent 57%)}
.os-dock-wrap{position:absolute;z-index:2600;left:50%;bottom:14px;transform:translateX(-50%);padding:7px;border:1px solid rgba(255,255,255,.14);background:rgba(10,12,18,.52);backdrop-filter:blur(30px) saturate(130%);border-radius:24px;box-shadow:0 22px 70px rgba(0,0,0,.5)}.os-dock-pro{display:flex;align-items:flex-end;gap:7px}.os-dock-item{position:relative;width:58px;height:58px;border:0;background:transparent;color:#fff;border-radius:16px;cursor:pointer;transition:transform .18s,filter .18s}.os-dock-item:hover{transform:translateY(-12px) scale(1.11);filter:brightness(1.16)}.os-dock-icon{width:52px;height:52px;border-radius:15px;display:grid;place-items:center;background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.06));border:1px solid rgba(255,255,255,.12);font-size:22px;box-shadow:0 10px 22px rgba(0,0,0,.25)}.os-dock-dot{position:absolute;bottom:-2px;left:50%;width:4px;height:4px;border-radius:50%;background:#00ff9d;transform:translateX(-50%);opacity:.5}
.os-quick-panel,.os-app-menu{position:absolute;z-index:3000;top:40px;right:10px;width:310px;padding:16px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:rgba(15,17,25,.88);backdrop-filter:blur(30px);box-shadow:0 24px 70px rgba(0,0,0,.5);opacity:0;transform:translateY(-8px);pointer-events:none;transition:.18s}.os-quick-panel.on,.os-app-menu.on{opacity:1;transform:none;pointer-events:auto}.os-qhead,.os-app-menu-title{font-weight:800;margin-bottom:12px}.os-qgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.os-qgrid button,.os-quick-panel>button,.os-app-menu button{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#fff;border-radius:12px;padding:12px;text-align:left;cursor:pointer}.os-qgrid button:hover,.os-quick-panel>button:hover,.os-app-menu button:hover{background:rgba(255,255,255,.08)}.os-quick-panel>button{width:100%;margin-top:10px}.os-qgrid small{color:rgba(255,255,255,.48)}.os-app-menu{left:8px;right:auto;width:250px}.os-app-menu button{display:block;width:100%;margin-top:4px}.os-menu-sep{height:1px;background:rgba(255,255,255,.08);margin:10px 0}
.os-finder{height:100%;display:flex}.os-sidebar{width:190px;padding:16px;background:rgba(7,8,12,.48);border-right:1px solid rgba(255,255,255,.06)}.os-side-title{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.4);margin:9px 10px}.os-side-btn{width:100%;border:0;background:transparent;color:rgba(255,255,255,.72);display:flex;gap:10px;padding:9px 10px;border-radius:9px;text-align:left;cursor:pointer}.os-side-btn:hover,.os-side-btn.active{background:rgba(255,255,255,.075);color:#fff}.os-file-main{flex:1;display:flex;flex-direction:column;min-width:0}.os-file-toolbar{height:48px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.06);font-weight:700}.os-file-count{font-size:11px;color:rgba(255,255,255,.38);font-weight:500}.os-file-grid{padding:22px;display:grid;grid-template-columns:repeat(auto-fill,minmax(118px,1fr));gap:14px;overflow:auto}.os-file-item{border:1px solid transparent;background:transparent;color:#fff;border-radius:13px;padding:11px 8px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;font-size:11px}.os-file-item:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.07)}.os-file-icon{width:62px;height:62px;border-radius:15px;display:grid;place-items:center;background:linear-gradient(145deg,rgba(0,255,157,.16),rgba(112,77,255,.18));border:1px solid rgba(255,255,255,.11);font-size:22px}
.os-games-app{height:100%;display:flex;flex-direction:column}.os-games-head{padding:22px 24px 16px;display:flex;justify-content:space-between;align-items:flex-end;gap:20px}.os-eyebrow{font-size:10px;letter-spacing:2px;color:#00ff9d;font-weight:900}.os-games-head h2{margin:4px 0 3px;font-size:28px}.os-games-head p{margin:0;color:rgba(255,255,255,.45);font-size:12px}.os-games-head input{width:300px;max-width:38%;border:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.2);color:#fff;border-radius:12px;padding:11px 14px;outline:0}.os-gamegrid-pro{padding:0 24px 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(122px,1fr));gap:12px;overflow:auto}.os-game-pro{border:1px solid transparent;background:rgba(255,255,255,.025);color:#fff;border-radius:14px;padding:10px 8px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;text-align:center;transition:.2s}.os-game-pro:hover{transform:translateY(-4px);background:rgba(255,255,255,.065);border-color:rgba(255,255,255,.09)}.os-game-icon-pro{width:66px;height:66px;border-radius:18px;display:grid;place-items:center;font-size:25px;font-weight:800;background:linear-gradient(145deg,rgba(0,255,157,.18),rgba(102,72,255,.22));border:1px solid rgba(255,255,255,.1);box-shadow:0 10px 24px rgba(0,0,0,.22)}.os-game-title-pro{font-size:11px;line-height:1.25;min-height:27px}.os-game-pro small{font-size:9px;color:rgba(255,255,255,.35)}
.os-settings{height:100%;display:flex}.os-settings>aside{width:210px;padding:18px;background:rgba(7,8,12,.48);border-right:1px solid rgba(255,255,255,.06)}.os-settings-brand{font-weight:800;font-size:17px;margin:5px 10px 20px}.os-settings>aside button{width:100%;border:0;background:transparent;color:rgba(255,255,255,.65);padding:10px;border-radius:10px;text-align:left;cursor:pointer}.os-settings>aside button.active,.os-settings>aside button:hover{background:rgba(255,255,255,.07);color:#fff}.os-settings>main{flex:1;padding:30px;overflow:auto}.os-setting-card{display:flex;align-items:center;justify-content:space-between;gap:20px;margin:15px 0;padding:18px;border:1px solid rgba(255,255,255,.08);border-radius:15px;background:rgba(255,255,255,.025)}.os-setting-card p{margin:5px 0 0;color:rgba(255,255,255,.45);font-size:12px}.os-setting-actions{display:flex;gap:8px}.os-setting-actions button,.os-toggle{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.05);color:#fff;border-radius:10px;padding:9px 12px;cursor:pointer}.os-toggle.on{background:rgba(0,255,157,.13);color:#00ff9d;border-color:rgba(0,255,157,.25)}.os-stat{font-size:24px;font-weight:800}.os-about{height:100%;display:grid;place-items:center;align-content:center;text-align:center;padding:40px}.os-about-logo{width:90px;height:90px;border-radius:28px;display:grid;place-items:center;font-size:42px;color:#00ff9d;background:rgba(0,255,157,.09);border:1px solid rgba(0,255,157,.2);box-shadow:0 25px 60px rgba(0,0,0,.3)}.os-about h1{margin:20px 0 5px}.os-about p{color:rgba(255,255,255,.46);max-width:480px}.os-about-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}.os-about-grid div{padding:14px 20px;border-radius:14px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;gap:4px}.os-about-grid small{color:rgba(255,255,255,.35)}.os-about-grid strong{font-size:16px}.os-muted{font-size:12px}.os-empty-state{height:100%;display:grid;place-items:center;align-content:center;text-align:center;color:rgba(255,255,255,.55)}.os-big-icon{font-size:56px;margin-bottom:10px}.os-service-host{height:100%}.os-service-host>.fpanel{height:100%!important;position:absolute!important;inset:0!important;border-radius:0!important}.os-service-copy{display:grid;place-items:center;height:100%;color:rgba(255,255,255,.45)}
@keyframes modeFade{from{opacity:0}to{opacity:1}}@keyframes osDesktopIn{from{opacity:0}to{opacity:1}}@media(max-width:900px){.mode-options{grid-template-columns:1fr}.os-sidebar{width:160px}.os-menu-item:nth-child(n+4){display:none}.os-games-head{align-items:stretch;flex-direction:column}.os-games-head input{max-width:none;width:100%}.os-setting-card{align-items:flex-start;flex-direction:column}.os-about-grid{grid-template-columns:1fr}.os-window{min-width:calc(100vw - 24px)!important;left:12px!important}.os-window.maximized{left:6px!important;width:calc(100vw - 12px)!important}.os-dock-item{width:50px}.os-dock-icon{width:46px;height:46px}.os-desktop-icons{left:10px}.os-sidebar{display:none}}

/* KDE-style dodge and hover reveal dock */
#os-desktop .os-dock-wrap{
    transition:transform .32s cubic-bezier(.2,.8,.2,1),opacity .24s ease,filter .24s ease;
}
#os-desktop.os-dock-hidden .os-dock-wrap{
    transform:translate(-50%,calc(100% + 18px));
    opacity:0;
    pointer-events:none;
}
#os-desktop.os-dock-hidden.os-bottom-hot .os-dock-wrap{
    transform:translate(-50%,0);
    opacity:1;
    pointer-events:auto;
}
#os-desktop .os-dock-tooltip{
    position:absolute;
    left:50%;
    bottom:calc(100% + 12px);
    transform:translate(-50%,8px) scale(.96);
    opacity:0;
    pointer-events:none;
    white-space:nowrap;
    padding:7px 11px;
    border-radius:10px;
    background:rgba(12,14,21,.76);
    border:1px solid rgba(255,255,255,.13);
    box-shadow:0 12px 35px rgba(0,0,0,.38);
    backdrop-filter:blur(20px) saturate(140%);
    -webkit-backdrop-filter:blur(20px) saturate(140%);
    color:#fff;
    font-size:11px;
    font-weight:650;
    transition:opacity .16s ease,transform .16s ease;
}
#os-desktop .os-dock-item:hover .os-dock-tooltip{
    opacity:1;
    transform:translate(-50%,0) scale(1);
}
#os-desktop .os-dock-wrap.os-dodged{
    transform:translate(-50%,calc(100% + 18px));
    opacity:0;
    pointer-events:none;
}
#os-desktop .os-dock-wrap.os-dodged.os-bottom-hot{
    transform:translate(-50%,0);
    opacity:1;
    pointer-events:auto;
}
#os-desktop .os-dock-hotzone{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    height:12px;
    z-index:2599;
}


#os-desktop .game-boot{
    position:absolute;inset:0;z-index:20;display:grid;place-items:center;
    background:linear-gradient(145deg,rgba(7,9,15,.98),rgba(13,16,28,.98));
    color:rgba(255,255,255,.82);font-size:12px;letter-spacing:.3px;
}
#os-desktop .game-boot .spinner{
    width:30px;height:30px;border-radius:50%;
    border:3px solid rgba(255,255,255,.12);
    border-top-color:#00ff9d;
    animation:gameSpin .8s linear infinite;
}
@keyframes gameSpin{to{transform:rotate(360deg)}}

/* ── NOVA GLASS 2.0 / ALIGNMENT SYSTEM ───────────────────────── */
#os-desktop,#os-desktop *{box-sizing:border-box}
#os-desktop{
    --os-gap:8px;
    --os-radius:20px;
    --os-glass:rgba(16,20,30,.46);
    --os-glass-strong:rgba(14,17,26,.66);
    --os-stroke:rgba(255,255,255,.12);
    --os-stroke-soft:rgba(255,255,255,.07);
    --os-shadow:0 24px 80px rgba(0,0,0,.42),0 1px 0 rgba(255,255,255,.09) inset;
    isolation:isolate;
    color-scheme:dark;
}
#os-desktop button,#os-desktop input,#os-desktop select{
    font:inherit;
    -webkit-font-smoothing:antialiased;
}
#os-desktop button{
    appearance:none!important;
    -webkit-appearance:none!important;
    border:1px solid var(--os-stroke-soft);
    background:rgba(255,255,255,.045)!important;
    color:rgba(255,255,255,.92)!important;
    box-shadow:none;
}
#os-desktop button:hover{
    background:rgba(255,255,255,.085)!important;
    border-color:rgba(255,255,255,.14);
}
#os-desktop .os-wallpaper{
    background:
      radial-gradient(55vw 45vw at 84% 8%,rgba(115,82,255,.28),transparent 62%),
      radial-gradient(48vw 40vw at 8% 82%,rgba(0,212,255,.18),transparent 64%),
      radial-gradient(38vw 32vw at 54% 54%,rgba(0,255,157,.10),transparent 66%),
      linear-gradient(135deg,#05070d 0%,#0a0f1a 46%,#060812 100%);
}
#os-desktop .os-wallpaper-grid{
    opacity:.55;
    background-size:56px 56px;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,.18),transparent 76%);
}
#os-desktop .os-menubar{
    height:38px;
    padding:0 14px;
    background:rgba(10,13,20,.42);
    border-bottom:1px solid rgba(255,255,255,.10);
    box-shadow:0 10px 40px rgba(0,0,0,.18);
    backdrop-filter:blur(30px) saturate(150%);
    -webkit-backdrop-filter:blur(30px) saturate(150%);
}
#os-desktop .os-menu-left,#os-desktop .os-menu-right{gap:4px}
#os-desktop .os-apple,#os-desktop .os-menu-item,#os-desktop .os-control{
    min-height:28px;
    padding:5px 10px;
    border-radius:9px;
    background:transparent!important;
    border-color:transparent;
}
#os-desktop .os-menu-item.strong{font-weight:800;letter-spacing:.01em}
#os-desktop .os-desktop-icons{z-index:2150;
    left:20px;
    top:58px;
    width:92px;
    gap:10px;
}
#os-desktop .os-desktop-icon{
    gap:7px;
    padding:7px 4px;
    border:1px solid transparent;
    background:transparent!important;
}
#os-desktop .os-desktop-icon:hover{
    background:rgba(255,255,255,.07)!important;
    border-color:rgba(255,255,255,.08);
}
#os-desktop .os-dicon,#os-desktop .os-dock-icon,#os-desktop .os-file-icon,#os-desktop .os-game-icon-pro{
    display:grid;
    place-items:center;
    overflow:hidden;
    box-shadow:0 14px 34px rgba(0,0,0,.30),0 1px 0 rgba(255,255,255,.18) inset;
}
#os-desktop .os-dicon{
    width:60px;height:60px;border-radius:18px;
    background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.055));
    border:1px solid rgba(255,255,255,.15);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
}
#os-desktop .os-vector-icon{display:block;width:42px;height:42px;filter:drop-shadow(0 7px 12px rgba(0,0,0,.22))}
#os-desktop .os-window-layer{
    inset:34px 0 0;
}
#os-desktop .os-window{
    min-width:0;
    min-height:0;
    border-radius:var(--os-radius);
    background:linear-gradient(180deg,rgba(19,23,34,.64),rgba(11,14,22,.78));
    border:1px solid rgba(255,255,255,.15);
    box-shadow:0 34px 110px rgba(0,0,0,.48),0 1px 0 rgba(255,255,255,.11) inset;
    backdrop-filter:blur(34px) saturate(145%);
    -webkit-backdrop-filter:blur(34px) saturate(145%);
}
#os-desktop .os-window.focused{
    border-color:rgba(255,255,255,.20);
    box-shadow:0 40px 120px rgba(0,0,0,.58),0 1px 0 rgba(255,255,255,.14) inset,0 0 0 1px rgba(120,180,255,.04);
}
#os-desktop .os-winbar{
    height:46px;
    padding:0 14px;
    background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025));
    border-bottom:1px solid rgba(255,255,255,.08);
}
#os-desktop .os-win-controls{width:82px;gap:8px}
#os-desktop .os-win-controls button{
    width:13px;height:13px;min-width:13px;padding:0;
    border:0!important;
    box-shadow:0 0 0 1px rgba(0,0,0,.20) inset!important;
}
#os-desktop .os-win-controls .red{background:#ff5f57!important}
#os-desktop .os-win-controls .yellow{background:#febc2e!important}
#os-desktop .os-win-controls .green{background:#28c840!important}
#os-desktop .os-win-title{
    flex:1;
    text-align:center;
    font-size:12px;
    letter-spacing:.01em;
}
#os-desktop .os-win-spacer{width:82px}
#os-desktop .os-dock-wrap{
    bottom:14px;
    padding:8px;
    border-radius:26px;
    background:rgba(13,16,24,.44);
    border:1px solid rgba(255,255,255,.15);
    box-shadow:0 22px 70px rgba(0,0,0,.46),0 1px 0 rgba(255,255,255,.12) inset;
    backdrop-filter:blur(34px) saturate(150%);
    -webkit-backdrop-filter:blur(34px) saturate(150%);
}
#os-desktop .os-dock-pro{gap:8px}
#os-desktop .os-dock-item{
    width:60px;height:60px;
    padding:3px;
    border:0!important;
    background:transparent!important;
}
#os-desktop .os-dock-icon{
    width:54px;height:54px;border-radius:17px;
    background:linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.06));
    border:1px solid rgba(255,255,255,.14);
    transition:transform .18s cubic-bezier(.2,.8,.2,1),filter .18s;
}
#os-desktop .os-dock-item:hover{transform:translateY(-10px) scale(1.07)}
#os-desktop .os-quick-panel,#os-desktop .os-app-menu{
    top:46px;
    border-radius:20px;
    padding:14px;
    background:rgba(13,16,24,.62);
    border:1px solid rgba(255,255,255,.14);
    box-shadow:var(--os-shadow);
    backdrop-filter:blur(34px) saturate(150%);
    -webkit-backdrop-filter:blur(34px) saturate(150%);
}
#os-desktop .os-qgrid{gap:8px}
#os-desktop .os-qgrid button,#os-desktop .os-quick-panel>button,#os-desktop .os-app-menu button{
    border-radius:13px!important;
    padding:11px 12px;
    background:rgba(255,255,255,.045)!important;
}
#os-desktop .os-qgrid button:hover,#os-desktop .os-quick-panel>button:hover,#os-desktop .os-app-menu button:hover{
    background:rgba(255,255,255,.085)!important;
}
#os-desktop .os-file-toolbar,#os-desktop .os-games-head{
    border-color:rgba(255,255,255,.07);
}
#os-desktop .os-file-grid,#os-desktop .os-gamegrid-pro{
    gap:12px;
}
#os-desktop .os-game-pro,#os-desktop .os-file-item{
    background:rgba(255,255,255,.026)!important;
    border-color:rgba(255,255,255,.055);
}
#os-desktop .os-game-pro:hover,#os-desktop .os-file-item:hover{
    background:rgba(255,255,255,.07)!important;
    border-color:rgba(255,255,255,.12);
}
#os-desktop .os-setting-card{
    background:rgba(255,255,255,.028);
    border-color:rgba(255,255,255,.075);
    box-shadow:0 14px 36px rgba(0,0,0,.16);
}
#os-desktop input{
    border:1px solid rgba(255,255,255,.12)!important;
    background:rgba(0,0,0,.20)!important;
    color:#fff!important;
    border-radius:13px!important;
}
#os-desktop .os-sidebar,#os-desktop .os-settings>aside{
    background:rgba(7,10,16,.30);
    border-color:rgba(255,255,255,.07);
    backdrop-filter:blur(26px);
}
@media(max-width:900px){
    #os-desktop .os-window-layer{inset:38px 0 90px}
    #os-desktop .os-window{width:calc(100% - 16px)!important;left:8px!important}
    #os-desktop .os-dock-wrap{max-width:calc(100vw - 12px);overflow:auto}
}


#os-desktop .os-menu-item,#os-desktop .os-apple,#os-desktop .os-control,
#os-desktop .os-desktop-icon,#os-desktop .os-dock-item,
#os-desktop .os-file-item,#os-desktop .os-game-pro,
#os-desktop .os-side-btn,#os-desktop .os-settings>aside button,
#os-desktop .os-qgrid button,#os-desktop .os-quick-panel>button,
#os-desktop .os-app-menu button,#os-desktop .os-setting-actions button,
#os-desktop .os-toggle{
    pointer-events:auto;
    user-select:none;
    -webkit-user-select:none;
}
#os-desktop .os-win-controls button,
#os-desktop .os-resize{pointer-events:auto}
#os-desktop .os-winbar{cursor:grab}
#os-desktop .os-winbar:active{cursor:grabbing}
#os-desktop .os-window-layer{z-index:2100}
#os-desktop .os-menubar{z-index:3500}
#os-desktop .os-desktop-icons{z-index:3400}
#os-desktop .os-dock-wrap{z-index:3600}
#os-desktop .os-quick-panel,#os-desktop .os-app-menu{z-index:3700}


/* ── REAL OS GAME WINDOWS / LOADING / DOCK TOOLTIPS ───────────── */
#os-desktop .os-game-window{
    width:100%;
    height:100%;
    position:relative;
    overflow:hidden;
    background:#05070c;
}
#os-desktop .os-game-frame{
    position:absolute;
    inset:0;
    width:100% !important;
    height:100% !important;
    min-width:0 !important;
    min-height:0 !important;
    max-width:none !important;
    max-height:none !important;
    border:0;
    background:#000;
    opacity:1;
    display:block;
    transform:none !important;
    zoom:1 !important;
    transition:none !important;
}
#os-desktop .os-game-frame[src]{opacity:1;transform:none !important;zoom:1 !important}

/* Keep games at native iframe size: no Nova window/game scaling or zoom. */
#os-desktop .os-game-window,
#os-desktop .os-game-window iframe{
    box-sizing:border-box !important;
    transform:none !important;
    zoom:1 !important;
}
#os-desktop .os-window:has(.os-game-window){
    transform:none;
}
#os-desktop .os-window:has(.os-game-window).os-fullscreen{
    transform:none !important;
}
#os-desktop .os-game-loading{
    position:absolute;
    inset:0;
    z-index:4;
    display:grid;
    place-items:center;
    align-content:center;
    gap:10px;
    text-align:center;
    background:
      radial-gradient(circle at 50% 30%,rgba(100,80,255,.22),transparent 35%),
      linear-gradient(180deg,rgba(9,11,18,.98),rgba(4,6,11,.98));
    transition:opacity .45s ease,visibility .45s;
}
#os-desktop .os-game-loading.done{opacity:0;visibility:hidden;pointer-events:none}
#os-desktop .os-loading-orb{
    width:64px;height:64px;border-radius:22px;
    background:linear-gradient(135deg,#7c5cff,#20d7ff);
    box-shadow:0 0 50px rgba(82,108,255,.5);
    animation:osLoadPulse 0.9s ease-in-out infinite alternate;
}
#os-desktop .os-loading-title{font-size:18px;font-weight:800}
#os-desktop .os-loading-sub{font-size:12px;color:rgba(255,255,255,.48)}
#os-desktop .os-loading-status{font-size:11px;color:rgba(255,255,255,.58)}
#os-desktop .os-loading-bar{
    width:min(320px,60vw);height:5px;border-radius:99px;
    overflow:hidden;background:rgba(255,255,255,.08);
}
#os-desktop .os-loading-bar span{
    display:block;height:100%;width:5%;
    border-radius:inherit;
    background:linear-gradient(90deg,#7c5cff,#26d9ff);
    box-shadow:0 0 18px rgba(60,170,255,.7);
    transition:width .25s ease;
}
#os-desktop .os-dock-tooltip{
    position:absolute;
    z-index:5000;
    transform:translate(-50%,-100%) translateY(-12px) scale(.92);
    transform-origin:50% 100%;
    opacity:0;
    pointer-events:none;
    padding:7px 11px;
    border-radius:9px;
    font-size:11px;
    font-weight:700;
    white-space:nowrap;
    color:#fff;
    background:rgba(10,12,18,.80);
    border:1px solid rgba(255,255,255,.13);
    box-shadow:0 12px 30px rgba(0,0,0,.34);
    backdrop-filter:blur(22px) saturate(140%);
    -webkit-backdrop-filter:blur(22px) saturate(140%);
    transition:opacity .16s ease,transform .16s cubic-bezier(.16,1,.3,1);
}
#os-desktop .os-dock-tooltip.on{
    opacity:1;
    transform:translate(-50%,-100%) translateY(-12px) scale(1);
}
@keyframes osLoadPulse{from{transform:scale(.94) rotate(-2deg);filter:saturate(.9)}to{transform:scale(1.04) rotate(2deg);filter:saturate(1.2)}}
#os-desktop .os-window{animation:osWindowIn .28s cubic-bezier(.16,1,.3,1)}
#os-desktop .os-window:has(.os-game-window){animation:osGameWindowIn .18s ease-out !important}
@keyframes osGameWindowIn{from{opacity:0}to{opacity:1}}
@keyframes osWindowIn{from{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:none}}
#os-desktop .os-dock-item{will-change:transform}
#theater:fullscreen,
#theater:-webkit-full-screen{
    width:100vw;
    height:100vh;
    background:#03040a;
}
#theater:fullscreen .th,
#theater:-webkit-full-screen .th{
    display:flex!important;
    position:absolute;
    top:0;left:0;right:0;
    z-index:999999;
}
#theater:fullscreen .ifw,
#theater:-webkit-full-screen .ifw{
    position:absolute;
    inset:44px 0 0 0;
    height:auto;
}
#theater:fullscreen .gframe-instance.active,
#theater:-webkit-full-screen .gframe-instance.active{
    height:100%;
}


#os-desktop .os-window-layer{z-index:3000!important}
#os-desktop .os-desktop-icons{z-index:2200!important}
#os-desktop .os-menubar{z-index:3400!important}
#os-desktop .os-dock-wrap{z-index:3600!important}
#os-desktop .os-dock-hotzone{z-index:3650!important}
#os-desktop .os-desktop-icon{position:relative;z-index:1}
#os-desktop .os-dock-wrap.os-dodged,#os-desktop.os-dock-hidden .os-dock-wrap{transition:transform .26s cubic-bezier(.2,.8,.2,1),opacity .18s ease!important}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;transition-duration:.001ms!important}}
`;
        document.head.appendChild(style);
    },

    // ── SYSTEM BOOT ─────────────────────────────────────────────
    boot(){
        // Launch directly into the focused gaming library. The OS remains optional.
        this._educationFirstBoot=false;
        this.detectHardware();
        this.setFavicon();
        this.css();
        this.osModeCss();
        this.buildDOM();
        this.dots();
        this.bindEvents();
        this.osBindLibrary();
        document.addEventListener('visibilitychange',()=>this.osChatVisibility());
        window.addEventListener('focus',()=>this.osChatVisibility());
        window.addEventListener('blur',()=>this.osChatVisibility());
        document.addEventListener('click',()=>setTimeout(()=>this.osChatVisibility(),0));
    }
};

window.nova = nova;
nova.boot();


(function(){var s=document.createElement("style");s.id="nova-liquid-glass-overrides";s.textContent='\n:root{--lg-text:#f7f7fb;--lg-muted:rgba(247,247,251,.58);--lg-border:rgba(255,255,255,.13)}\nhtml,body{font-family:Inter,-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif!important;color:var(--lg-text)!important;background:radial-gradient(65vw 55vw at 90% 5%,rgba(155,140,255,.20),transparent 65%),radial-gradient(55vw 50vw at 5% 90%,rgba(105,220,255,.13),transparent 65%),#070911!important}\nh1,h2,h3,.serif,.site-title,.brand-title{font-family:"DM Serif Display",Georgia,serif!important;font-weight:400!important;letter-spacing:-.025em}\nbutton,.panel,.modal,.card,.game-card,.search-box,.nav-item{border:1px solid var(--lg-border)!important;background:linear-gradient(145deg,rgba(255,255,255,.105),rgba(255,255,255,.035))!important;box-shadow:0 24px 70px rgba(0,0,0,.25),0 1px 0 rgba(255,255,255,.12) inset!important;backdrop-filter:blur(28px) saturate(155%);-webkit-backdrop-filter:blur(28px) saturate(155%)}\nbutton{color:var(--lg-text)!important;transition:transform .18s cubic-bezier(.2,.8,.2,1),background .18s,border-color .18s}button:hover{transform:translateY(-1px);border-color:rgba(255,255,255,.22)!important}button:active{transform:scale(.985)}\n#nova-mode-selector{position:fixed;inset:0;z-index:999999;display:grid;place-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif}.nova-selector-backdrop{position:absolute;inset:0;background:radial-gradient(40vw 35vw at 22% 28%,rgba(155,140,255,.25),transparent 70%),radial-gradient(40vw 35vw at 78% 72%,rgba(105,220,255,.18),transparent 70%),rgba(3,5,10,.72);backdrop-filter:blur(30px) saturate(160%);-webkit-backdrop-filter:blur(30px) saturate(160%)}\n.nova-selector-card{position:relative;width:min(760px,calc(100vw - 32px));padding:42px;overflow:hidden;border-radius:34px;background:linear-gradient(145deg,rgba(255,255,255,.145),rgba(255,255,255,.045));border:1px solid rgba(255,255,255,.18);box-shadow:0 55px 150px rgba(0,0,0,.55),0 1px 0 rgba(255,255,255,.18) inset;backdrop-filter:blur(48px) saturate(170%);-webkit-backdrop-filter:blur(48px) saturate(170%);animation:novaSelectorIn .55s cubic-bezier(.2,.8,.2,1)}\n.nova-selector-kicker{position:relative;font-size:10px;font-weight:700;letter-spacing:.22em;color:rgba(255,255,255,.48)}.nova-selector-card h1{position:relative;margin:10px 0 6px;font-family:"DM Serif Display",Georgia,serif!important;font-size:48px;line-height:1}.nova-selector-card p{position:relative;margin:0 0 28px;color:var(--lg-muted);font-size:14px}.nova-selector-options{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:14px}.nova-mode-option{position:relative;min-height:230px!important;padding:14px!important;display:grid!important;grid-template-rows:1fr auto;gap:15px;text-align:left!important;border-radius:23px!important;cursor:pointer;overflow:hidden}.nova-mode-preview{position:relative;min-height:128px;overflow:hidden;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:#090c15}.nova-mode-preview i{position:absolute;display:block;border-radius:7px;background:rgba(255,255,255,.09)}.nova-os-preview .bar{left:8px;right:8px;top:8px;height:13px;background:rgba(255,255,255,.12)}.nova-os-preview .side{left:8px;top:29px;bottom:8px;width:25px}.nova-os-preview .window{left:42px;right:8px;top:29px;height:52px;background:rgba(155,140,255,.17)}.nova-os-preview .dock{left:65px;right:65px;bottom:8px;height:16px;background:rgba(105,220,255,.15)}.nova-classic-preview .hero{left:8px;right:8px;top:8px;height:48px;background:rgba(155,140,255,.18)}.nova-classic-preview .card{top:64px;bottom:8px;width:29%}.nova-classic-preview .one{left:8px}.nova-classic-preview .two{left:35.5%}.nova-classic-preview .three{right:8px}.nova-option-copy{display:flex;flex-direction:column;gap:3px}.nova-option-copy small{font-size:9px;letter-spacing:.16em;color:rgba(255,255,255,.45)}.nova-option-copy strong{font-size:18px;font-weight:600}.nova-option-copy em{font-style:normal;font-size:11px;color:rgba(255,255,255,.43)}.nova-arrow{position:absolute;right:20px;bottom:20px;font-size:18px;color:rgba(255,255,255,.6)}.nova-selector-footer{position:relative;margin-top:18px;text-align:center;font-size:11px;color:rgba(255,255,255,.36)}.nova-selector-leaving .nova-selector-card{animation:novaSelectorOut .36s ease forwards}@keyframes novaSelectorIn{from{opacity:0;transform:translateY(18px) scale(.965);filter:blur(9px)}to{opacity:1;transform:none;filter:none}}@keyframes novaSelectorOut{to{opacity:0;transform:translateY(-10px) scale(.98);filter:blur(8px)}}@media(max-width:680px){.nova-selector-card{padding:28px 20px}.nova-selector-card h1{font-size:37px}.nova-selector-options{grid-template-columns:1fr}.nova-mode-option{min-height:175px!important}}';document.head.appendChild(s);})();

(function(){const style=document.createElement("style");style.id="nova-kde-functional-final";style.textContent=`\n.os-window-context{position:absolute;z-index:99999;min-width:190px;padding:7px;border:1px solid rgba(255,255,255,.16);border-radius:15px;background:rgba(14,16,25,.82);backdrop-filter:blur(30px) saturate(160%);box-shadow:0 24px 70px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.12) inset;animation:novaMenuIn .16s ease-out}\n.os-window-context button{display:block;width:100%;border:0;background:transparent;color:#fff;text-align:left;padding:9px 12px;border-radius:9px;font-size:12px;cursor:pointer}.os-window-context button:hover{background:rgba(255,255,255,.09)}.os-window-context div{height:1px;background:rgba(255,255,255,.08);margin:5px 3px}\n.os-win-actions{display:flex;justify-content:flex-end;gap:5px;width:86px}.os-win-actions button{width:25px;height:25px;border:0;border-radius:7px;background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);cursor:pointer}.os-win-actions button:hover{background:rgba(255,255,255,.13);color:#fff}\n.os-window.cloaked{opacity:.12!important;filter:blur(2px)!important;transform:scale(.98)!important}.os-window.always-top{box-shadow:0 0 0 1px rgba(155,140,255,.45),0 35px 110px rgba(0,0,0,.65)!important}\n.os-window.os-fullscreen{position:fixed!important;left:0!important;top:34px!important;width:100vw!important;height:calc(100vh - 34px)!important;max-width:none!important;max-height:none!important;border-radius:0!important;z-index:90000!important}\n#os-desktop.os-game-fullscreen .os-menubar,#os-desktop.os-game-fullscreen .os-desktop-icons,#os-desktop.os-game-fullscreen .os-dock-wrap,#os-desktop.os-game-fullscreen .os-quick-panel,#os-desktop.os-game-fullscreen .os-app-menu{display:none!important}\n#os-desktop.os-game-fullscreen .os-window-layer{inset:0!important;z-index:89999!important}\n#os-desktop.os-game-fullscreen .os-window.os-fullscreen .os-winbar{height:38px!important}\n#os-desktop.os-game-fullscreen .os-window.os-fullscreen .os-win-content{height:calc(100% - 38px)!important}\n.os-browser-app{height:100%;display:flex;flex-direction:column;background:rgba(4,6,12,.35)}.os-browser-toolbar{height:48px;display:flex;gap:7px;align-items:center;padding:7px 9px;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.045)}.os-browser-nav,.os-browser-go{height:32px;min-width:32px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.06);color:#fff;border-radius:9px;cursor:pointer}.os-browser-address{flex:1;min-width:0;height:32px;border:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.22);color:#fff;border-radius:9px;padding:0 11px;outline:0}.os-browser-view{flex:1;min-height:0}.os-browser-frame{width:100%;height:100%;display:block;border:0;background:#fff}\n@keyframes novaMenuIn{from{opacity:0;transform:translateY(-5px) scale(.97)}to{opacity:1;transform:none}}\n@media(max-width:520px){.os-winbar{grid-template-columns:72px minmax(0,1fr) 72px}.os-win-controls{width:72px;gap:5px}.os-win-actions{width:72px}.os-win-actions button{width:22px;height:22px}.os-win-title{font-size:11px}.os-browser-toolbar{gap:4px}.os-browser-nav{min-width:28px}}`;document.head.appendChild(style)})();


(function(){
const s=document.createElement("style");
s.id="nova-education-runtime";
s.textContent=`.nova-education-app{height:100%;overflow:auto;padding:26px;background:linear-gradient(135deg,rgba(103,72,255,.16),rgba(20,180,255,.08));color:#fff;font-family:ui-sans-serif,system-ui,sans-serif}.nova-education-hero{display:flex;justify-content:space-between;align-items:center;padding:22px;border:1px solid rgba(255,255,255,.1);border-radius:24px;background:rgba(255,255,255,.055);backdrop-filter:blur(24px)}.nova-education-kicker{font-size:11px;letter-spacing:.18em;opacity:.65}.nova-education-hero h1{margin:7px 0;font-size:28px}.nova-education-hero p{margin:0;opacity:.65}.nova-education-badge{width:64px;height:64px;border-radius:20px;display:grid;place-items:center;font-size:32px;background:linear-gradient(135deg,#7c5cff,#22c1ff)}.nova-education-grid{display:grid;grid-template-columns:minmax(280px,1fr) minmax(240px,1fr);gap:18px;margin-top:18px}.nova-education-card{padding:18px;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:rgba(255,255,255,.045)}.nova-education-card-head{display:flex;justify-content:space-between;gap:10px;margin-bottom:13px;font-weight:700}.nova-education-card-head small{opacity:.5;font-weight:400}.nova-calc-display{width:100%;box-sizing:border-box;height:52px;border:1px solid rgba(255,255,255,.12);border-radius:13px;background:rgba(0,0,0,.22);color:#fff;padding:0 14px;font-size:22px;outline:0;margin-bottom:10px}.nova-calc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.nova-calc-grid button,.nova-calc-clear,.nova-education-lessons button{min-height:44px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:rgba(255,255,255,.07);color:#fff;cursor:pointer}.nova-calc-grid button:hover,.nova-calc-clear:hover,.nova-education-lessons button:hover{background:rgba(255,255,255,.14)}.nova-calc-clear{width:100%;margin-top:8px}.nova-education-note{margin-top:12px;font-size:12px;opacity:.55}.nova-education-lessons button{display:block;width:100%;margin:8px 0;text-align:left;padding:0 13px}.nova-lesson-output{margin-top:14px;padding:14px;border-radius:13px;background:rgba(0,0,0,.18);line-height:1.5;opacity:.8}@media(max-width:700px){.nova-education-grid{grid-template-columns:1fr}.nova-education-app{padding:14px}.nova-education-hero h1{font-size:21px}}`;
document.head.appendChild(s);
})();

(function(){
const s=document.createElement("style");
s.textContent=`
.nova-browser-app .nova-browser-address,
.nova-browser-app .browser-address,
.nova-browser-app .address-bar,
.nova-browser-app .browser-toolbar,
.nova-browser-app .browser-url,
.nova-browser-app input[type="url"],
.nova-browser-app input[placeholder*="address" i],
.nova-browser-app input[placeholder*="url" i]{display:none!important}
.nova-browser-app,.nova-app-frame-wrap{width:100%;height:100%;overflow:hidden}
.nova-app-frame{width:100%!important;height:100%!important;border:0!important;display:block!important}
`;
document.head.appendChild(s);
})();

(function(){
const st=document.createElement('style');st.id='nova-final-cleanup';st.textContent=`
button,.nova-core-dock-app,[role="button"]{outline:none!important}
button:focus,.nova-core-dock-app:focus,[role="button"]:focus{outline:none!important}
.os-desktop>.os-menu,.os-desktop>.desktop-menu,.os-desktop>.context-menu,
.os-desktop>.toolbar,.os-desktop>.utility-bar,.os-desktop>[data-orphan-ui="true"]{display:none!important}
body.nova-os-fullscreen .os-dock,body.nova-os-fullscreen .os-dock-wrap,
body.nova-os-fullscreen .os-desktop-icons,body.nova-os-fullscreen .desktop-shortcuts,
body.nova-os-fullscreen .os-desktop-shortcuts{display:none!important;visibility:hidden!important;pointer-events:none!important}
body.nova-os-fullscreen .os-window.nova-fullscreen-window{z-index:2147483647!important}
.nova-low-power .os-window,.nova-low-power .os-dock{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.nova-low-power *{animation-duration:.08s!important;transition-duration:.06s!important}
`;
document.head.appendChild(st);
})();
(function(){
const weak=(navigator.hardwareConcurrency||4)<=6;
if(weak){document.documentElement.classList.add('nova-low-power');document.documentElement.style.setProperty('--nova-blur','4px')}
})();



(function(){
"use strict";
const NOVA_EDUCATION_START=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
*{box-sizing:border-box}html,body{margin:0;min-height:100%;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#20232c;background:linear-gradient(135deg,#f8f7ff 0%,#eef5ff 55%,#f5f7fb 100%)}
body{min-height:100vh}.nav{height:70px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(18px,5vw,58px);background:rgba(255,255,255,.74);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid rgba(50,55,80,.08);position:sticky;top:0;z-index:4}
.logo{font:700 25px Georgia,serif}.navlinks{display:flex;gap:25px;color:#777a86;font-size:13px}.hero{max-width:1180px;margin:auto;padding:64px clamp(20px,5vw,58px) 32px}.eyebrow{font-size:11px;font-weight:800;letter-spacing:.18em;color:#6e63d7;text-transform:uppercase}.hero h1{font:400 clamp(40px,5.5vw,68px)/1.02 Georgia,serif;letter-spacing:-.04em;margin:12px 0}.hero p{max-width:700px;color:#686b77;font-size:17px;line-height:1.65;margin:0}.layout{max-width:1180px;margin:auto;padding:18px clamp(20px,5vw,58px) 70px;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(280px,.72fr);gap:22px}.card{background:rgba(255,255,255,.68);border:1px solid rgba(50,55,80,.08);border-radius:28px;box-shadow:0 24px 65px rgba(48,52,80,.11);padding:25px;backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px)}.card h2{font:400 27px Georgia,serif;margin:0 0 5px}.muted{font-size:13px;color:#898b95}.display{margin:18px 0 14px;min-height:82px;padding:20px 22px;border-radius:20px;background:#20232d;color:white;display:flex;align-items:center;justify-content:flex-end;font:30px ui-monospace,SFMono-Regular,Menlo,monospace;overflow:hidden}.keys{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.keys button{height:58px;border:0;border-radius:17px;background:rgba(246,247,251,.92);color:#292b34;font-size:18px;font-weight:650;cursor:pointer;box-shadow:0 6px 18px rgba(40,44,60,.07);transition:transform .12s,filter .12s}.keys button:hover{filter:brightness(.975);transform:translateY(-1px)}.keys button:active{transform:scale(.95)}.keys .op{background:#e9e6ff;color:#5148c8}.keys .eq{background:#7067e9;color:white}.hint{font-size:12px;color:#8c8e98;margin-top:13px}.topics{display:grid;gap:12px}.topic{padding:18px;border-radius:19px;background:rgba(248,248,251,.82)}.topic b{display:block;margin-bottom:5px}.topic span{font-size:13px;color:#777a84;line-height:1.55}.footer{max-width:1180px;margin:auto;padding:0 clamp(20px,5vw,58px) 40px;color:#9698a1;font-size:12px}@media(max-width:820px){.navlinks{display:none}.layout{grid-template-columns:1fr}.hero{padding-top:42px}}
</style></head><body>
<header class="nav"><div class="logo">Nova Education</div><div class="navlinks"><span>Calculator</span><span>Algebra</span><span>Fractions</span><span>Geometry</span><span>Resources</span></div></header>
<section class="hero"><div class="eyebrow">Learn smarter</div><h1>Math tools that explain the math</h1><p>Practice calculations, explore formulas and build understanding with a clean educational workspace designed for quick learning.</p></section>
<section class="layout"><section class="card"><h2>Calculator</h2><div class="muted">Calculate an expression or explore the learning topics beside it</div><div id="display" class="display">0</div>
<div class="keys"><button>7</button><button>8</button><button>9</button><button class="op">÷</button><button>4</button><button>5</button><button>6</button><button class="op">×</button><button>1</button><button>2</button><button>3</button><button class="op">−</button><button>0</button><button>.</button><button>C</button><button class="eq">=</button></div>
</section>
<section class="card topics"><h2>Learn</h2><div class="topic"><b>Algebra</b><span>Simplify expressions, work with variables and understand equations.</span></div><div class="topic"><b>Fractions</b><span>Add, subtract, multiply and divide fractions with confidence.</span></div><div class="topic"><b>Percentages</b><span>Convert percentages and solve everyday percentage problems.</span></div><div class="topic"><b>Geometry</b><span>Review areas, perimeters, angles and useful formulas.</span></div></section></section>
<div class="footer">Nova Education · a lightweight learning workspace</div>
<script>
let expr="",d=document.getElementById("display");
function press(x){
 if(x==="C"){expr="";d.textContent="0";return}
 if(x==="Backspace"){expr=expr.slice(0,-1);d.textContent=expr||"0";return}
 if(x==="="){
   if(expr==="1234"){parent.postMessage({type:"nova-launch-os"},"*");return}
   try{let safe=expr.replaceAll("×","*").replaceAll("÷","/").replaceAll("−","-");if(!/^[0-9+*/().%\\s-]+$/.test(safe))throw 0;const value=Function("return ("+safe+")")();if(!Number.isFinite(value))throw 0;expr=String(value);d.textContent=expr}catch(_){d.textContent="Error"}return
 }
 if(d.textContent==="Error")expr="";
 expr+=x;d.textContent=expr
}
document.querySelectorAll(".keys button").forEach(b=>b.onclick=()=>press(b.textContent));
document.addEventListener("keydown",e=>{if(e.ctrlKey||e.metaKey||e.altKey)return;const key=e.key;if(/^[0-9.+*/()-]$/.test(key)||["Enter","Escape","Backspace","="].includes(key)){e.preventDefault();press(key==="Enter"?"=":key==="Escape"?"C":key)}});
</script></body></html>`;

function showEducationStart(){
 document.querySelectorAll("#mode-chooser,.mode-chooser,#nova-pin,.nova-pin,#security-pin,.security-pin,.pin-screen,.interface-selector,#lock").forEach(el=>el.remove());
 if(document.getElementById("nova-education-start"))return;
 const overlay=document.createElement("div");
 overlay.id="nova-education-start";
 overlay.style.cssText="position:fixed;inset:0;z-index:2147483000;background:#f6f7fb;overflow:auto";
 const iframe=document.createElement("iframe");
 iframe.title="Nova Education";
 iframe.style.cssText="display:block;width:100%;height:100%;border:0";
 iframe.srcdoc=NOVA_EDUCATION_START;
 overlay.appendChild(iframe);
 document.body.appendChild(overlay);

 const launch=()=>{
   overlay.remove();
   const os=nova||window.nova;
   try{localStorage.setItem("nova_ui_mode","os")}catch(_){}
   // Do not auto-cloak here: opening a second full Nova instance doubled startup CPU/RAM.
   if(os&&typeof os.setUIMode==="function")os.setUIMode("os");
   else if(os&&typeof os.applyUIMode==="function"){os.uiMode="os";os.applyUIMode()}
 };
 window.addEventListener("message",function(e){
   if(e.source===iframe.contentWindow&&e.data&&e.data.type==="nova-launch-os")launch();
 });
}
// The calculator cover page is retired; Nova now opens directly to games.
})();


(function(){
  if (window.__novaGameResizeFix) return;
  window.__novaGameResizeFix = true;

  const notify = frame => {
    try {
      frame.contentWindow?.postMessage({
        type: "nova-resize",
        width: frame.clientWidth,
        height: frame.clientHeight,
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 1.5)
      }, "*");
    } catch (_) {}
    window.dispatchEvent(new Event("resize"));
  };

  const watch = frame => {
    if (!frame || frame.__novaResizeWatched) return;
    frame.__novaResizeWatched = true;
    const ro = new ResizeObserver(() => requestAnimationFrame(() => notify(frame)));
    ro.observe(frame);
    frame.addEventListener("load", () => requestAnimationFrame(() => notify(frame)), {once:false});
  };

  // Do not observe the entire document. Nova creates many nodes during boot and a
  // document-wide observer caused repeated iframe scans and layout work.
  const scan = () => document.querySelectorAll("#os-desktop iframe").forEach(watch);
  scan();
  window.addEventListener("nova:iframe-added", e=>watch(e.detail), {passive:true});
})();


(function(){
  if (window.__novaWindowLayoutResize) return;
  window.__novaWindowLayoutResize = true;
  const update = () => {
    const layer = document.getElementById("os-window-layer");
    if (!layer) return;
    document.querySelectorAll(".os-window").forEach(w => {
      const maxW = Math.max(280, layer.clientWidth - 24);
      const maxH = Math.max(180, layer.clientHeight - 24);
      w.style.maxWidth = maxW + "px";
      w.style.maxHeight = maxH + "px";
      w.style.left = Math.max(12, Math.min(w.offsetLeft, layer.clientWidth - Math.min(w.offsetWidth, maxW) - 12)) + "px";
      w.style.top = Math.max(12, Math.min(w.offsetTop, layer.clientHeight - Math.min(w.offsetHeight, maxH) - 12)) + "px";
      w.querySelectorAll("iframe,canvas").forEach(el => {
        el.style.width = "100%";
        el.style.height = "100%";
      });
    });
  };
  addEventListener("resize", () => requestAnimationFrame(update), {passive:true});
  addEventListener("orientationchange", () => setTimeout(update, 50), {passive:true});
  // Layout only needs to react to actual viewport changes, not every DOM mutation.
  requestAnimationFrame(update);
})();


(function(){
"use strict";
if(window.__novaFinalControls)return;
window.__novaFinalControls=true;

function saveEntireSite(){
  try{
    const clone=document.documentElement.cloneNode(true);
    clone.querySelectorAll("script").forEach(s=>{
      // Keep scripts because this is the full Nova HTML snapshot
    });
    const html="<!doctype html>\n"+clone.outerHTML;
    const blob=new Blob([html],{type:"text/html;charset=utf-8"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="novagaming.html";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1500);
  }catch(e){console.error("Nova save failed",e)}
}

function openCloakPopup(){
  return openNovaCloak();
}

function bind(){
  const save=document.getElementById("nova-save-html");
  const cloak=document.getElementById("nova-cloak-site");
  const request=document.getElementById("nova-request-games");
  if(save&&!save.__novaBound){save.__novaBound=true;save.addEventListener("click",saveEntireSite)}
  if(cloak&&!cloak.__novaBound){cloak.__novaBound=true;cloak.addEventListener("click",openCloakPopup)}
  if(request&&!request.__novaBound){request.__novaBound=true;request.addEventListener("click",()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=sharing&ouid=109218267907837189296","_blank","noopener,noreferrer"))}
}
// Controls are created by the OS renderer; bind once now and again from the
// renderer when needed instead of watching the entire DOM forever.
bind();
window.addEventListener("nova:os-rendered", bind, {passive:true});

window.novaOpenAutoCloak=openCloakPopup;
window.novaSaveEntireSite=saveEntireSite;

document.addEventListener("fullscreenchange",()=>{
  const fs=!!document.fullscreenElement;
  document.body.classList.toggle("nova-os-fullscreen",fs);
  const desk=document.getElementById("os-desktop");
  if(!fs){
    desk?.classList.remove("os-game-fullscreen");
    document.querySelectorAll("#os-window-layer .os-window.os-fullscreen").forEach(w=>{
      w.classList.remove("os-fullscreen");
      if(w.dataset.oldWidth)Object.assign(w.style,{left:w.dataset.oldLeft,top:w.dataset.oldTop,width:w.dataset.oldWidth,height:w.dataset.oldHeight});
    });
  }
});
})();

try{document.title='Home - Classroom'}catch(_){}

(function(){
  document.documentElement.classList.toggle("nova-perf-mode", nova.isLowSpec);
  const s=document.createElement("style");
  s.id="nova-ultra-performance";
  s.textContent=`
    #particle-canvas{display:none!important}
    html.nova-perf-mode *,html.nova-perf-mode *::before,html.nova-perf-mode *::after{animation-duration:.001ms!important;transition-duration:.001ms!important}
    html.nova-perf-mode .os-window,html.nova-perf-mode .os-menubar,html.nova-perf-mode .os-dock-wrap,html.nova-perf-mode .os-quick-panel,html.nova-perf-mode .os-app-menu{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:0 8px 24px rgba(0,0,0,.28)!important}
    html.nova-perf-mode .os-gamegrid-pro,html.nova-perf-mode .os-file-grid{contain:layout paint style;content-visibility:auto}
    html.nova-perf-mode .os-game-pro{contain:layout paint;will-change:auto!important}
    html.nova-perf-mode .os-dock-item:hover{transform:none!important;filter:none!important}
    html.nova-perf-mode button,html.nova-perf-mode .panel,html.nova-perf-mode .card,html.nova-perf-mode .fpanel,html.nova-perf-mode #bd,html.nova-perf-mode #panel,html.nova-perf-mode #ntov,html.nova-perf-mode #theater{
      backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
      box-shadow:none!important;
    }
    html.nova-perf-mode .os-wallpaper-orb{display:none!important}
    html.nova-perf-mode .os-wallpaper-grid{opacity:.12!important}
    html.nova-perf-mode .os-window-layer{contain:layout style!important}
    html.nova-perf-mode #grid{content-visibility:auto;contain:layout paint style!important}
    html.nova-perf-mode img{content-visibility:auto;}
  `;
  document.head.appendChild(s);
})();


(function(){
  if(window.__novaSystemStatus) return;
  window.__novaSystemStatus=true;

  const esc = s => String(s).replace(/[&<>"']/g,c=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));

  function addBar(){
    const bar=document.querySelector("#os-desktop .os-menubar");
    if(!bar) return false;
    let box=bar.querySelector(".nova-system-status");
    if(!box){
      box=document.createElement("div");
      box.className="nova-system-status";
      box.innerHTML=`
        <span class="nova-stat nova-time">--:--</span>
        <span class="nova-stat nova-battery">Battery --</span>
        <span class="nova-stat nova-extra nova-network"><span class="nova-dot"></span> Online</span>
        <span class="nova-stat nova-extra nova-hardware">CPU --</span>`;
      bar.appendChild(box);
    }
    return true;
  }

  function updateTime(){
    const el=document.querySelector(".nova-system-status .nova-time");
    if(!el)return;
    const now=new Date();
    el.textContent=now.toLocaleTimeString([],{
      hour:"numeric",minute:"2-digit"
    });
  }

  async function updateBattery(){
    const el=document.querySelector(".nova-system-status .nova-battery");
    if(!el)return;
    if(!navigator.getBattery){
      el.textContent="Battery n/a";
      return;
    }
    try{
      const b=await navigator.getBattery();
      const render=()=>{
        const pct=Math.round(b.level*100);
        el.textContent=(b.charging ? "Charging " : "Battery ")+pct+"%";
      };
      ["levelchange","chargingchange"].forEach(e=>b.addEventListener(e,render));
      render();
    }catch(_){el.textContent="Battery n/a";}
  }

  function updateStats(){
    const cpu=document.querySelector(".nova-system-status .nova-hardware");
    if(cpu){
      const n=navigator.hardwareConcurrency;
      cpu.textContent=n ? "CPU "+n+" cores" : "CPU n/a";
    }
    const net=document.querySelector(".nova-system-status .nova-network");
    if(net){
      const online=navigator.onLine;
      net.innerHTML=`<span class="nova-dot" style="background:${online?"#22c55e":"#ef4444"}"></span> ${online?"Online":"Offline"}`;
    }
  }

  function init(){
    if(!addBar()) return;
    updateTime(); updateStats(); updateBattery();
  }

  init();
  setInterval(updateTime,5000);
  addEventListener("online",updateStats,{passive:true});
  addEventListener("offline",updateStats,{passive:true});
  // System stats are updated when the desktop is rendered, not on every DOM change.
  window.addEventListener("nova:os-rendered",init,{passive:true});
})();



/* NOVA MEGA APPEARANCE SYSTEM — wallpapers, themes, cursor, scale, dock, fonts, motion and more. */
(function(){
  const STORAGE='nova_appearance_v2';
  const defaults={theme:'midnight',accent:'#7c5cff',wallpaper:'nova',wallpaperUrl:'',cursor:'default',font:'system',scale:100,fontSize:100,radius:18,density:'comfortable',cardSize:200,tabWidth:190,dockSize:64,dockPosition:'bottom',animations:true,desktopGrid:true,showLabels:true,highContrast:false,showGameDescriptions:true,immersiveGames:true,immersiveBrowser:false,reuseAppTabs:true,youtubeComments:true,youtubeAutoplay:true,youtubeRegion:'US',aiModel:'gemini-3.6-flash',startup:'browser',chatAlerts:false,autoCloak:true};
  const themes={
    midnight:{name:'Midnight',bg:'#080b12',surface:'#151821',bar:'#0b0d14',text:'#f7f8ff'},
    ocean:{name:'Ocean',bg:'#061018',surface:'#0e1c27',bar:'#07131b',text:'#f1fbff'},
    violet:{name:'Violet',bg:'#0e0818',surface:'#191226',bar:'#100a1b',text:'#fbf7ff'},
    forest:{name:'Forest',bg:'#07120e',surface:'#102019',bar:'#09150f',text:'#f2fff8'},
    rose:{name:'Rose',bg:'#170a10',surface:'#24131a',bar:'#180b11',text:'#fff5f8'},
    arctic:{name:'Arctic',bg:'#eaf1f8',surface:'#ffffff',bar:'#f5f8fc',text:'#101722'},
    sunset:{name:'Sunset',bg:'#1a0c06',surface:'#27150d',bar:'#1b0d07',text:'#fff8f1'}
  };
  const wallpapers={
    nova:'radial-gradient(70vw 55vw at 20% 20%,rgba(124,92,255,.30),transparent 60%),radial-gradient(65vw 55vw at 85% 80%,rgba(34,193,255,.22),transparent 60%),#080b12',
    aurora:'radial-gradient(55vw 55vw at 15% 65%,rgba(0,255,170,.24),transparent 60%),radial-gradient(55vw 55vw at 80% 20%,rgba(40,130,255,.28),transparent 60%),#061018',
    purple:'radial-gradient(60vw 60vw at 50% 0%,rgba(170,70,255,.32),transparent 62%),radial-gradient(50vw 50vw at 100% 100%,rgba(70,100,255,.22),transparent 60%),#0c0715',
    sunset:'radial-gradient(60vw 55vw at 10% 10%,rgba(255,105,50,.30),transparent 62%),radial-gradient(55vw 55vw at 90% 80%,rgba(255,40,140,.20),transparent 62%),#170a06',
    plain:'linear-gradient(#080b12,#080b12)'
  };
  function load(){
    let raw={};try{raw=JSON.parse(localStorage.getItem(STORAGE)||'{}')||{}}catch{}
    const a={...defaults};
    if(typeof raw!=='object'||Array.isArray(raw))return a;
    for(const [key,allowed] of Object.entries({theme:Object.keys(themes),wallpaper:[...Object.keys(wallpapers),'custom'],font:['system','serif','mono','rounded','condensed'],dockPosition:['bottom','left','right'],density:['compact','comfortable','spacious'],youtubeRegion:['US','GB','CA','AU','IN','JP','DE','BR'],aiModel:['gemini-3.6-flash','gemini-3.5-flash','gemini-3.5-flash-lite','gemini-3.1-flash-lite'],startup:['games','ai','youtube','browser','chat','settings']})){
      if(allowed.includes(raw[key]))a[key]=raw[key];
    }
    for(const key of ['animations','desktopGrid','showLabels','highContrast','showGameDescriptions','immersiveGames','immersiveBrowser','reuseAppTabs','youtubeComments','youtubeAutoplay','chatAlerts'])if(typeof raw[key]==='boolean')a[key]=raw[key];
    for(const [key,min,max] of [['scale',85,120],['fontSize',85,125],['radius',4,32],['cardSize',150,280],['tabWidth',120,260],['dockSize',48,92]])if(Number.isFinite(raw[key]))a[key]=Math.max(min,Math.min(max,raw[key]));
    if(/^#[0-9a-f]{6}$/i.test(raw.accent))a.accent=raw.accent;
    if(typeof raw.wallpaperUrl==='string'&&/^(https?:|data:image\/)/i.test(raw.wallpaperUrl))a.wallpaperUrl=raw.wallpaperUrl;
    if(['default','pointer','crosshair','cell','grab','zoom-in'].includes(raw.cursor)||typeof raw.cursor==='string'&&/^url\("https?:[^"\r\n]+"\) 16 16, auto$/.test(raw.cursor))a.cursor=raw.cursor;
    if(typeof raw.chatAlerts!=='boolean')try{a.chatAlerts=localStorage.getItem('nova_chat_alerts')==='on'}catch{}
    return a;
  }
  function save(a){try{localStorage.setItem(STORAGE,JSON.stringify(a))}catch{}}
  function apply(){
    const a=load(), t=themes[a.theme]||themes.midnight, root=document.documentElement;
    root.style.setProperty('--nova-accent',a.accent);
    root.style.setProperty('--nova-ui-scale',(Math.max(85,Math.min(120,+a.scale||100))/100).toFixed(2));
    root.style.setProperty('--nova-font-scale',(Math.max(85,Math.min(125,+a.fontSize||100))/100).toFixed(2));
    root.style.setProperty('--nova-card-size',Math.max(150,Math.min(280,+a.cardSize||200))+'px');
    root.style.setProperty('--nova-tab-width',Math.max(120,Math.min(260,+a.tabWidth||190))+'px');
    root.style.setProperty('--nova-radius',Math.max(4,Math.min(32,+a.radius||18))+'px');
    root.style.setProperty('--nova-surface',t.surface);
    root.style.setProperty('--nova-bar',t.bar);
    root.style.setProperty('--nova-text',t.text);
    root.style.setProperty('--nova-theme-bg',t.bg);
    root.style.setProperty('--nova-theme-border',a.accent);
    document.body.dataset.novaTheme=a.theme; document.body.dataset.novaFont=a.font; document.body.dataset.novaCursor=a.cursor; document.body.dataset.novaDensity=a.density;
    document.body.classList.toggle('nova-no-animations',!a.animations);
    root.classList.toggle('nova-perf-mode',nova.isLowSpec || !a.animations);
    document.body.classList.toggle('nova-high-contrast',!!a.highContrast);
    document.body.classList.toggle('nova-hide-desktop-grid',!a.desktopGrid);
    document.body.classList.toggle('nova-hide-dock-labels',!a.showLabels);
    document.body.classList.toggle('nova-hide-game-descriptions',!a.showGameDescriptions);
    nova._selectedModel=a.aiModel||'gemini-3.6-flash';
    try{localStorage.setItem('nova_chat_alerts',a.chatAlerts?'on':'off')}catch{}
    const cursor=(a.cursor||'default').startsWith('url(')?a.cursor:a.cursor||'default';
    root.style.setProperty('--nova-cursor',cursor);
    root.style.cursor=cursor;
    document.body.style.cursor=cursor;
    const desk=document.getElementById('os-desktop');
    if(desk){
      desk.style.setProperty('--nova-dock-size',(Math.max(48,Math.min(92,+a.dockSize||64)))+'px');
      desk.dataset.dockPosition=a.dockPosition||'bottom';
      desk.style.setProperty('--nova-radius',Math.max(4,Math.min(32,+a.radius||18))+'px');
      const wp=a.wallpaper==='custom'&&a.wallpaperUrl ? `url(${JSON.stringify(a.wallpaperUrl)}) center/cover no-repeat` : (wallpapers[a.wallpaper]||wallpapers.nova);
      desk.querySelector('.os-wallpaper')?.style.setProperty('background',wp,'important');
      desk.querySelector('.os-wallpaper')?.style.setProperty('background-size','cover','important');
      desk.querySelectorAll('button,a,input,select,textarea').forEach(el=>el.style.cursor=cursor);
    }
  }
  function esc(v){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  nova.osSettingsBody=function(){
    const a=load();
    return `<div class="nova-mega-settings">
      <aside class="nova-settings-side"><div class="nova-settings-brand">Nova Settings</div>
        <button class="nova-set-tab active" data-set-tab="appearance">🎨 Appearance</button>
        <button class="nova-set-tab" data-set-tab="wallpaper">🖼️ Wallpaper</button>
        <button class="nova-set-tab" data-set-tab="interface">🧩 Layout</button>
        <button class="nova-set-tab" data-set-tab="gaming">🎮 Gaming</button>
        <button class="nova-set-tab" data-set-tab="tabs">▱ Tabs</button>
        <button class="nova-set-tab" data-set-tab="ai">✦ Nova AI</button>
        <button class="nova-set-tab" data-set-tab="media">▶ YouTube</button>
        <button class="nova-set-tab" data-set-tab="dock">🚀 Dock</button>
        <button class="nova-set-tab" data-set-tab="cursor">🖱️ Cursor</button>
        <button class="nova-set-tab" data-set-tab="typography">🔤 Typography</button>
        <button class="nova-set-tab" data-set-tab="performance">⚡ Performance</button>
        <button class="nova-set-tab" data-set-tab="privacy">🔒 Privacy & Data</button>
      </aside>
      <main class="nova-settings-main"><div class="nova-settings-heading"><h1>Settings</h1><p>Everything stays on this device no account required</p></div>
        <section class="nova-set-page active" data-set-page="appearance"><h2>Appearance</h2><p class="nova-settings-sub">Make Nova look exactly how you want.</p>
          <div class="nova-theme-grid">${Object.entries(themes).map(([k,t])=>`<button class="nova-theme-card${a.theme===k?' selected':''}" data-theme="${k}"><span style="background:${t.bg}"><i style="background:${a.accent}"></i></span><strong>${t.name}</strong><small>${k==='arctic'?'Light mode':'Dark mode'}</small></button>`).join('')}</div>
          <div class="nova-control-grid"><label>Accent color <input id="nova-accent" type="color" value="${esc(a.accent)}"></label><label>Corner radius <output>${a.radius}px</output><input id="nova-radius" type="range" min="4" max="32" value="${a.radius}"></label><label>UI scale <output>${a.scale}%</output><input id="nova-scale" type="range" min="85" max="120" value="${a.scale}"></label><label>Text size <output>${a.fontSize}%</output><input id="nova-font-size" type="range" min="85" max="125" value="${a.fontSize}"></label></div>
        </section>
        <section class="nova-set-page" data-set-page="wallpaper"><h2>Wallpaper</h2><p class="nova-settings-sub">Pick a built-in background or use your own image.</p>
          <div class="nova-wall-grid">${Object.keys(wallpapers).map(k=>`<button class="nova-wall-card${a.wallpaper===k?' selected':''}" data-wallpaper="${k}"><span style="background:${wallpapers[k]}"></span><strong>${k[0].toUpperCase()+k.slice(1)}</strong></button>`).join('')}<button class="nova-wall-card${a.wallpaper==='custom'?' selected':''}" data-wallpaper="custom"><span class="nova-custom-wall"></span><strong>Custom</strong></button></div>
          <div class="nova-upload-row"><input id="nova-wall-file" type="file" accept="image/*"><input id="nova-wall-url" type="url" placeholder="Paste image URL…" value="${esc(a.wallpaperUrl)}"><button id="nova-wall-apply">Apply</button></div>
        </section>
        <section class="nova-set-page" data-set-page="interface"><h2>Layout</h2><p class="nova-settings-sub">Control spacing, scale, and desktop details.</p>
          <div class="nova-perf-card"><b>Interface style</b><span>Switch between the focused gaming workspace and the full Nova desktop.</span><div class="os-setting-actions"><button id="os-use-classic">Gaming</button><button id="os-use-os">OS Style</button></div></div>
          <label>Interface density <select id="nova-density"><option value="compact" ${a.density==='compact'?'selected':''}>Compact</option><option value="comfortable" ${a.density==='comfortable'?'selected':''}>Comfortable</option><option value="spacious" ${a.density==='spacious'?'selected':''}>Spacious</option></select></label>
          <label class="nova-switch-row"><span><b>Desktop grid</b><small>Show the decorative desktop grid</small></span><input type="checkbox" data-pref="desktopGrid" ${a.desktopGrid?'checked':''}></label>
          <label class="nova-switch-row"><span><b>App labels</b><small>Show labels beneath desktop and dock icons</small></span><input type="checkbox" data-pref="showLabels" ${a.showLabels?'checked':''}></label>
          <label class="nova-switch-row"><span><b>Animations</b><small>Use Nova's window and dock motion</small></span><input type="checkbox" data-pref="animations" ${a.animations?'checked':''}></label>
          <label class="nova-switch-row"><span><b>High contrast</b><small>Increase text and border contrast</small></span><input type="checkbox" data-pref="highContrast" ${a.highContrast?'checked':''}></label>
        </section>
        <section class="nova-set-page" data-set-page="gaming"><h2>Gaming</h2><p class="nova-settings-sub">Tune the game library and play workspace.</p>
          <label>Game card size <output>${a.cardSize}px</output><input id="nova-card-size" type="range" min="150" max="280" step="10" value="${a.cardSize}"></label>
          <label class="nova-switch-row"><span><b>Game descriptions</b><small>Show descriptions beneath each game title</small></span><input type="checkbox" data-pref="showGameDescriptions" ${a.showGameDescriptions?'checked':''}></label>
          <label class="nova-switch-row"><span><b>Immersive game view</b><small>Hide the large Nova banner while playing</small></span><input type="checkbox" data-pref="immersiveGames" ${a.immersiveGames?'checked':''}></label>
          <label class="nova-switch-row"><span><b>Immersive browser view</b><small>Hide the large Nova banner while browsing</small></span><input type="checkbox" data-pref="immersiveBrowser" ${a.immersiveBrowser?'checked':''}></label>
        </section>
        <section class="nova-set-page" data-set-page="tabs"><h2>Tabs</h2><p class="nova-settings-sub">Choose how the Nova workspace handles apps.</p>
          <label>Tab width <output>${a.tabWidth}px</output><input id="nova-tab-width" type="range" min="120" max="260" step="10" value="${a.tabWidth}"></label>
          <label class="nova-switch-row"><span><b>Reuse app tabs</b><small>Return to an existing AI, Browser, Chat, or Settings tab instead of opening another</small></span><input type="checkbox" data-pref="reuseAppTabs" ${a.reuseAppTabs?'checked':''}></label>
          <label>Open Nova with <select id="nova-startup"><option value="games" ${a.startup==='games'?'selected':''}>Games</option><option value="ai" ${a.startup==='ai'?'selected':''}>Nova AI</option><option value="youtube" ${a.startup==='youtube'?'selected':''}>YouTube</option><option value="browser" ${a.startup==='browser'?'selected':''}>Browser</option><option value="chat" ${a.startup==='chat'?'selected':''}>Chat</option><option value="settings" ${a.startup==='settings'?'selected':''}>Settings</option></select></label>
        </section>
        <section class="nova-set-page" data-set-page="ai"><h2>Nova AI</h2><p class="nova-settings-sub">Pick the model Nova uses for new conversations.</p>
          <label>Default model <select id="nova-ai-model"><option value="gemini-3.6-flash" ${a.aiModel==='gemini-3.6-flash'?'selected':''}>Gemini 3.6 Flash</option><option value="gemini-3.5-flash" ${a.aiModel==='gemini-3.5-flash'?'selected':''}>Gemini 3.5 Flash</option><option value="gemini-3.5-flash-lite" ${a.aiModel==='gemini-3.5-flash-lite'?'selected':''}>Gemini 3.5 Flash Lite</option><option value="gemini-3.1-flash-lite" ${a.aiModel==='gemini-3.1-flash-lite'?'selected':''}>Gemini 3.1 Flash Lite</option></select></label>
          <div class="nova-perf-card"><b>Saved conversations</b><span>Nova AI keeps chat history on this browser.</span><button id="nova-clear-ai">Clear chats</button></div>
        </section>
        <section class="nova-set-page" data-set-page="media"><h2>YouTube</h2><p class="nova-settings-sub">Control video playback and the read-only comment view.</p>
          <label class="nova-switch-row"><span><b>Autoplay videos</b><small>Start playback when a video opens</small></span><input type="checkbox" data-pref="youtubeAutoplay" ${a.youtubeAutoplay?'checked':''}></label>
          <label class="nova-switch-row"><span><b>Show comments</b><small>Load read-only comments and expandable replies</small></span><input type="checkbox" data-pref="youtubeComments" ${a.youtubeComments?'checked':''}></label>
          <label>Trending region <select id="nova-youtube-region">${[['US','United States'],['GB','United Kingdom'],['CA','Canada'],['AU','Australia'],['IN','India'],['JP','Japan'],['DE','Germany'],['BR','Brazil']].map(([v,n])=>`<option value="${v}" ${a.youtubeRegion===v?'selected':''}>${n}</option>`).join('')}</select></label>
        </section>
        <section class="nova-set-page" data-set-page="dock"><h2>Dock</h2><p class="nova-settings-sub">Tune the Nova dock.</p>
          <label>Dock size <output id="nova-dock-out">${a.dockSize}px</output><input id="nova-dock" type="range" min="48" max="92" value="${a.dockSize}"></label>
          <label>Dock position <select id="nova-dock-position"><option value="bottom" ${a.dockPosition==='bottom'?'selected':''}>Bottom</option><option value="left" ${a.dockPosition==='left'?'selected':''}>Left</option><option value="right" ${a.dockPosition==='right'?'selected':''}>Right</option></select></label>
          <div class="nova-mini-note">Dock settings are saved automatically.</div>
        </section>
        <section class="nova-set-page" data-set-page="cursor"><h2>Cursor</h2><p class="nova-settings-sub">Choose your pointer style.</p>
          <div class="nova-cursor-grid">${[['default','Arrow'],['pointer','Hand'],['crosshair','Crosshair'],['cell','Cell'],['grab','Grab'],['zoom-in','Zoom']].map(([k,n])=>`<button class="nova-cursor-card${a.cursor===k?' selected':''}" data-cursor="${k}"><span style="cursor:${k}">↖</span><strong>${n}</strong></button>`).join('')}</div>
          <label>Custom cursor URL <input id="nova-cursor-url" type="url" placeholder="https://…/cursor.cur or .png"><button id="nova-cursor-url-apply">Use custom cursor</button></label>
        </section>
        <section class="nova-set-page" data-set-page="typography"><h2>Typography</h2><p class="nova-settings-sub">Change the Nova system font.</p>
          <div class="nova-font-grid">${[['system','System'],['serif','Serif'],['mono','Monospace'],['rounded','Rounded'],['condensed','Condensed']].map(([k,n])=>`<button class="nova-font-card${a.font===k?' selected':''}" data-font="${k}"><span class="font-${k}">Aa</span><strong>${n}</strong></button>`).join('')}</div>
        </section>
        <section class="nova-set-page" data-set-page="performance"><h2>Performance</h2><p class="nova-settings-sub">Keep the desktop smooth on older hardware.</p>
          <div class="nova-perf-card"><b>Performance mode</b><span>Disables non-essential animation and visual effects.</span><button id="nova-performance">${a.animations?'Enable':'Enabled'}</button></div>
          <div class="nova-perf-card"><b>Reset appearance</b><span>Restore every Nova appearance setting to default.</span><button id="nova-appearance-reset">Reset</button></div>
        </section>
        <section class="nova-set-page" data-set-page="privacy"><h2>Privacy & Data</h2><p class="nova-settings-sub">Manage locally saved Nova data.</p>
          <label class="nova-switch-row"><span><b>Automatic about blank cloak</b><small>Open Nova in an about blank tab by default on your next visit</small></span><input type="checkbox" data-pref="autoCloak" ${a.autoCloak?'checked':''}></label>
          <label class="nova-switch-row"><span><b>Chat notifications</b><small>Allow Nova Chat alerts on this browser</small></span><input type="checkbox" data-pref="chatAlerts" ${a.chatAlerts?'checked':''}></label>
          <div class="nova-perf-card"><b>Favorites</b><span>Remove all saved game favorites.</span><button id="nova-clear-favorites">Clear favorites</button></div>
          <div class="nova-perf-card"><b>Export settings</b><span>Download a backup of your Nova customization.</span><button id="nova-export-settings">Export</button></div>
          <label>Import settings <input id="nova-import-settings" type="file" accept="application/json"></label>
          <div class="nova-perf-card nova-danger-card"><b>Reset everything</b><span>Clear appearance, chats, favorites, and recent games.</span><button id="nova-reset-all">Reset all</button></div>
        </section>
      </main></div>`;
  };
  function update(key,val){const a=load();a[key]=val;save(a);apply();}
  function refreshSettings(source){
    const host=source?.closest('.nova-settings-panel')?.querySelector('.fp-body')||source?.closest('.os-win-content');
    if(host)host.innerHTML=nova.osSettingsBody();
  }
  document.addEventListener('click',e=>{
    if(!e.target.closest('.nova-mega-settings'))return;
    const tab=e.target.closest('[data-set-tab]'); if(tab){const root=tab.closest('.nova-mega-settings');root?.querySelectorAll('.nova-set-tab').forEach(x=>x.classList.toggle('active',x===tab));root?.querySelectorAll('.nova-set-page').forEach(x=>x.classList.toggle('active',x.dataset.setPage===tab.dataset.setTab));return;}
    const theme=e.target.closest('[data-theme]');if(theme){update('theme',theme.dataset.theme);theme.closest('.nova-mega-settings')?.querySelectorAll('[data-theme]').forEach(x=>x.classList.toggle('selected',x===theme));return;}
    const wall=e.target.closest('[data-wallpaper]');if(wall){update('wallpaper',wall.dataset.wallpaper);wall.closest('.nova-mega-settings')?.querySelectorAll('[data-wallpaper]').forEach(x=>x.classList.toggle('selected',x===wall));return;}
    const cur=e.target.closest('[data-cursor]');if(cur){update('cursor',cur.dataset.cursor);cur.closest('.nova-mega-settings')?.querySelectorAll('[data-cursor]').forEach(x=>x.classList.toggle('selected',x===cur));return;}
    const font=e.target.closest('[data-font]');if(font){update('font',font.dataset.font);font.closest('.nova-mega-settings')?.querySelectorAll('[data-font]').forEach(x=>x.classList.toggle('selected',x===font));return;}
    if(e.target.id==='nova-wall-apply'){const u=e.target.closest('.nova-mega-settings')?.querySelector('#nova-wall-url')?.value.trim();if(u)update('wallpaperUrl',u),update('wallpaper','custom');return;}
    if(e.target.id==='nova-cursor-url-apply'){const u=e.target.closest('.nova-mega-settings')?.querySelector('#nova-cursor-url')?.value.trim();if(u){const a=load();a.cursor='url("'+u.replace(/"/g,'')+'") 16 16, auto';save(a);apply();}return;}
    if(e.target.id==='nova-performance'){const enabled=!load().animations;update('animations',enabled);e.target.textContent=enabled?'Enable':'Enabled';return;}
    if(e.target.id==='nova-clear-ai'){try{localStorage.removeItem('ng_ai_chats')}catch{}nova._aiChats=[];if(nova._aiLoaded)nova.aiNewChat?.();e.target.textContent='Cleared';return;}
    if(e.target.id==='nova-clear-favorites'){try{localStorage.setItem('ng_f','[]')}catch{}nova.favorites=[];nova.renderCards?.();e.target.textContent='Cleared';return;}
    if(e.target.id==='nova-export-settings'){const blob=new Blob([JSON.stringify(load(),null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='nova-settings.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),500);return;}
    if(e.target.id==='nova-appearance-reset'){const a=load();Object.assign(a,{theme:defaults.theme,accent:defaults.accent,wallpaper:defaults.wallpaper,wallpaperUrl:defaults.wallpaperUrl,cursor:defaults.cursor,font:defaults.font,scale:defaults.scale,fontSize:defaults.fontSize,radius:defaults.radius,density:defaults.density});save(a);apply();refreshSettings(e.target);return;}
    if(e.target.id==='nova-reset-all'){if(!confirm('Reset all Nova settings and locally saved data?'))return;for(const key of [STORAGE,'ng_ai_chats','ng_f','nova_recent_games','nova_chat_alerts'])try{localStorage.removeItem(key)}catch{}nova.favorites=[];nova._aiChats=[];save({...defaults});apply();nova.renderCards?.();refreshSettings(e.target);return;}
  },true);
  document.addEventListener('change',e=>{
    if(!e.target.closest('.nova-mega-settings'))return;
    const t=e.target;
    if(t.matches('[data-pref]')) update(t.dataset.pref,t.checked);
    if(t.id==='nova-accent') update('accent',t.value);
    if(t.id==='nova-radius') update('radius',+t.value);
    if(t.id==='nova-scale') update('scale',+t.value);
    if(t.id==='nova-font-size') update('fontSize',+t.value);
    if(t.id==='nova-card-size') update('cardSize',+t.value);
    if(t.id==='nova-tab-width') update('tabWidth',+t.value);
    if(t.id==='nova-density') update('density',t.value);
    if(t.id==='nova-startup') update('startup',t.value);
    if(t.id==='nova-ai-model'){update('aiModel',t.value);nova._selectedModel=t.value;nova.aiRenderModelSelect?.();}
    if(t.id==='nova-youtube-region'){update('youtubeRegion',t.value);nova._ytLoaded=false;}
    if(t.id==='nova-dock') update('dockSize',+t.value);
    if(t.id==='nova-dock-position') update('dockPosition',t.value);
    if(t.id==='nova-import-settings'&&t.files?.[0]){const r=new FileReader();r.onload=()=>{try{const data=JSON.parse(String(r.result||'{}'));localStorage.setItem(STORAGE,JSON.stringify(data));const clean=load();save(clean);apply();refreshSettings(t);}catch{alert('That settings file is not valid.')}};r.readAsText(t.files[0]);}
    if(t.id==='nova-wall-file'&&t.files?.[0]){const r=new FileReader();r.onload=()=>{const a=load();a.wallpaper='custom';a.wallpaperUrl=r.result;save(a);apply();};r.readAsDataURL(t.files[0]);}
  },true);
  document.addEventListener('input',e=>{
    const t=e.target;
    if(t.id==='nova-radius') {const o=t.parentElement.querySelector('output');if(o)o.textContent=t.value+'px';}
    if(t.id==='nova-scale') {const o=t.parentElement.querySelector('output');if(o)o.textContent=t.value+'%';}
    if(t.id==='nova-font-size') {const o=t.parentElement.querySelector('output');if(o)o.textContent=t.value+'%';}
    if(t.id==='nova-card-size'||t.id==='nova-tab-width') {const o=t.parentElement.querySelector('output');if(o)o.textContent=t.value+'px';}
    if(t.id==='nova-dock') {const o=t.parentElement.querySelector('output');if(o)o.textContent=t.value+'px';}
  },true);
  const style=document.createElement('style');style.id='nova-mega-appearance-style';style.textContent=`
    :root{--nova-accent:#7c5cff;--nova-ui-scale:1;--nova-font-scale:1;--nova-card-size:200px;--nova-tab-width:190px;--nova-radius:18px;--nova-surface:#151821;--nova-bar:#0b0d14;--nova-text:#f7f8ff;--nova-theme-bg:#080b12;--nova-cursor:default}
    /* Make appearance controls affect the actual OS, not just settings previews. */
    #os-desktop{background:var(--nova-theme-bg)!important;color:var(--nova-text)!important;zoom:var(--nova-ui-scale)}
    #os-desktop .os-window{background:var(--nova-surface)!important;color:var(--nova-text)!important;border-radius:var(--nova-radius)!important}
    #os-desktop .os-winbar,#os-desktop .os-menubar{background:var(--nova-bar)!important}
    #os-desktop .os-dock-wrap{border-radius:calc(var(--nova-radius) + 6px)!important}
    #os-desktop .os-dock-item{width:var(--nova-dock-size)!important;height:var(--nova-dock-size)!important}
    #os-desktop .os-dock-icon{width:calc(var(--nova-dock-size) - 6px)!important;height:calc(var(--nova-dock-size) - 6px)!important;border-radius:calc(var(--nova-radius) - 2px)!important}
    #os-desktop .os-dicon,#os-desktop .os-game-pro,#os-desktop .os-file-item{border-radius:var(--nova-radius)!important}
    #os-desktop button:hover{border-color:color-mix(in srgb,var(--nova-accent) 55%,transparent)!important}
    #os-desktop .os-status-dot{background:var(--nova-accent)!important;box-shadow:0 0 12px color-mix(in srgb,var(--nova-accent) 70%,transparent)!important}
    #os-desktop .os-window-opening{transform:translateY(18px) scale(calc(.97 * var(--nova-ui-scale)))!important}
    .nova-high-contrast #os-desktop{color:var(--nova-text)!important}
    html{font-size:calc(16px * var(--nova-font-scale))}body{--nova-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}
    body[data-nova-font="serif"]{--nova-font-family:Georgia,"Times New Roman",serif}body[data-nova-font="mono"]{--nova-font-family:ui-monospace,SFMono-Regular,Consolas,monospace}body[data-nova-font="rounded"]{--nova-font-family:ui-rounded,"SF Pro Rounded",system-ui,sans-serif}body[data-nova-font="condensed"]{--nova-font-family:"Arial Narrow","Roboto Condensed",sans-serif}
    #os-desktop{font-family:var(--nova-font-family)!important}#os-desktop .os-wallpaper{background-size:cover!important;background-position:center!important}#os-desktop .os-wallpaper-grid{opacity:.22}.nova-hide-desktop-grid #os-desktop .os-wallpaper-grid{display:none!important}
    .nova-no-animations *{animation-duration:0s!important;transition-duration:0s!important}.nova-high-contrast #os-desktop{filter:contrast(1.08)}
    #os-desktop .os-dock-wrap{font-size:calc(var(--nova-dock-size) * .18)}
    #os-desktop[data-dock-position="left"] .os-dock-wrap{left:14px;right:auto;top:50%;bottom:auto;transform:translateY(-50%)}#os-desktop[data-dock-position="left"] .os-dock-pro{flex-direction:column}#os-desktop[data-dock-position="right"] .os-dock-wrap{right:14px;left:auto;top:50%;bottom:auto;transform:translateY(-50%)}#os-desktop[data-dock-position="right"] .os-dock-pro{flex-direction:column}
    .nova-hide-dock-labels .os-dock-tooltip{display:none!important}
    .nova-mega-settings{height:100%;display:grid;grid-template-columns:220px minmax(0,1fr);background:#11141c;color:#fff;font-family:var(--nova-font-family)}.nova-settings-side{padding:16px;border-right:1px solid rgba(255,255,255,.08);background:#0d1017;overflow-y:auto}.nova-settings-brand{font-size:17px;font-weight:800;padding:10px 10px 18px}.nova-set-tab{display:block;width:100%;padding:10px 12px;margin:3px 0;border:0!important;border-radius:10px;background:transparent!important;color:rgba(255,255,255,.62)!important;text-align:left;cursor:pointer;box-shadow:none!important}.nova-set-tab.active,.nova-set-tab:hover{background:#202532!important;color:#fff!important}.nova-settings-main{padding:28px;overflow:auto}.nova-set-page{display:none;max-width:920px}.nova-set-page.active{display:block}.nova-set-page h2{font-size:27px;margin:0 0 5px}.nova-settings-sub{opacity:.55;margin:0 0 22px}.nova-theme-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:10px}.nova-theme-card,.nova-wall-card,.nova-cursor-card,.nova-font-card{border:1px solid rgba(255,255,255,.09)!important;background:#181c26!important;color:#fff!important;border-radius:14px!important;padding:8px!important;text-align:left;cursor:pointer;box-shadow:none!important}.nova-theme-card.selected,.nova-wall-card.selected,.nova-cursor-card.selected,.nova-font-card.selected{outline:2px solid var(--nova-accent)!important}.nova-theme-card>span{height:65px;display:block;border-radius:9px;position:relative}.nova-theme-card i{position:absolute;width:22px;height:22px;border-radius:50%;left:10px;bottom:10px}.nova-theme-card strong,.nova-theme-card small,.nova-wall-card strong,.nova-cursor-card strong,.nova-font-card strong{display:block;margin-top:7px}.nova-theme-card small{opacity:.5}.nova-control-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:18px}.nova-control-grid label,.nova-set-page>label{display:flex;flex-direction:column;gap:8px;margin:12px 0;font-size:12px;color:rgba(255,255,255,.7)}.nova-control-grid output,.nova-set-page output{font-size:11px;opacity:.6}.nova-control-grid input[type=range],.nova-set-page input[type=range]{width:100%;accent-color:var(--nova-accent)}.nova-wall-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}.nova-wall-card span{display:block;height:82px;border-radius:10px}.nova-custom-wall{background:repeating-linear-gradient(45deg,#222 0 10px,#333 10px 20px)!important}.nova-upload-row{display:grid;grid-template-columns:1fr 1.5fr auto;gap:8px;margin-top:18px}.nova-upload-row input,.nova-set-page input[type=url],.nova-set-page input[type=file],.nova-set-page select{box-sizing:border-box;background:#090b10;border:1px solid rgba(255,255,255,.1);color:#fff;border-radius:9px;padding:10px}.nova-upload-row button,.nova-set-page button{background:#202532;color:#fff;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:9px 13px;cursor:pointer}.nova-switch-row{display:flex!important;flex-direction:row!important;justify-content:space-between;align-items:center;padding:15px;border-radius:12px;background:#181c26;margin:9px 0}.nova-switch-row span{display:flex;flex-direction:column;gap:4px}.nova-switch-row small{opacity:.5}.nova-switch-row input{width:18px;height:18px;accent-color:var(--nova-accent)}.nova-cursor-grid,.nova-font-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}.nova-cursor-card{text-align:center!important}.nova-cursor-card span{display:block;font-size:34px;height:45px}.nova-font-card{text-align:center!important}.nova-font-card span{display:block;font-size:32px}.font-serif{font-family:Georgia}.font-mono{font-family:monospace}.font-rounded{font-family:ui-rounded}.font-condensed{font-family:"Arial Narrow"}.nova-mini-note{margin-top:15px;opacity:.45;font-size:11px}.nova-perf-card{display:flex;align-items:center;gap:14px;padding:16px;margin:10px 0;background:#181c26;border-radius:13px}.nova-perf-card b{min-width:140px}.nova-perf-card span{flex:1;opacity:.55;font-size:12px}.nova-perf-card button{background:#202532;color:#fff;border:1px solid rgba(255,255,255,.1);border-radius:9px;padding:9px 13px}.nova-danger-card{border:1px solid #ef444455}.nova-danger-card button{color:#ffb4b4!important;border-color:#ef444466!important}
    @media(max-width:700px){.nova-mega-settings{grid-template-columns:1fr}.nova-settings-side{display:flex;overflow:auto;border-right:0;border-bottom:1px solid rgba(255,255,255,.08)}.nova-settings-brand{display:none}.nova-set-tab{white-space:nowrap;width:auto}.nova-control-grid{grid-template-columns:1fr}.nova-upload-row{grid-template-columns:1fr}}
  `;document.head.appendChild(style);
  window.addEventListener('nova:os-rendered',apply);
  apply();
})();

/* NOVA OPAQUE UI PATCH — keep the glass styling colorful, but stop the entire OS from looking see-through. */
(function(){
  const style=document.createElement('style');
  style.id='nova-opaque-ui-final';
  style.textContent=`
    /* Main desktop surfaces */
    #os-desktop .os-menubar{background:#0b0d14!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
    #os-desktop .os-window{background:#151821!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
    #os-desktop .os-winbar{background:#10131b!important}
    #os-desktop .os-dock-wrap{background:#11141c!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
    #os-desktop .os-dicon,
    #os-desktop .os-dock-icon{background:#202532!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
    #os-desktop .os-quick-panel,
    #os-desktop .os-app-menu,
    #os-desktop .os-window-context{background:#151821!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}

    /* Common OS app cards / panels */
    #os-desktop .os-games-app,
    #os-desktop .os-finder-app,
    #os-desktop .os-browser-app,
    #os-desktop .os-education-app,
    #os-desktop .os-app-panel,
    #os-desktop .os-panel{background:#11141c!important}
    #os-desktop .os-game-card,
    #os-desktop .os-finder-item,
    #os-desktop .os-app-card,
    #os-desktop .os-qgrid button,
    #os-desktop .os-quick-panel>button,
    #os-desktop .os-app-menu button{background:#202532!important}

    /* Browser/game surfaces stay fully opaque */
    #os-desktop .os-browser-toolbar{background:#10131b!important}
    #os-desktop .os-browser-address{background:#090b10!important}
    #os-desktop .os-browser-frame{background:#000!important}

    /* Don't make the actual game transparent */
    #os-desktop iframe{background:#000!important}

    /* Keep separators visible without glass */
    #os-desktop .os-winbar,
    #os-desktop .os-browser-toolbar{border-color:rgba(255,255,255,.10)!important}
  `;
  document.head.appendChild(style);
})();

(function(){const s=document.createElement("style");s.textContent=`
#os-desktop:fullscreen{width:100vw!important;height:100vh!important}
#os-desktop.os-game-fullscreen{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;z-index:2147483647!important}
html:fullscreen body{width:100vw!important;height:100vh!important;overflow:hidden!important}
.yt-ch-grid{grid-template-columns:repeat(auto-fill,minmax(260px,1fr))!important}
.ytc-channel{cursor:pointer}
.ytc-channel img{object-fit:cover;aspect-ratio:1/1;max-height:120px;width:120px!important;border-radius:50%!important;margin:12px auto 0;display:block}
.yt-channel-head{display:flex;gap:14px;align-items:center;margin-bottom:10px}
`;document.head.appendChild(s)})();


/* ── NOVA DOCK FINAL FIX ─────────────────────────────────────────
   Prevent flexbox from squashing dock buttons into vertical pills,
   keep every icon perfectly square, and use the vector app artwork. */
(function(){
  const style=document.createElement("style");
  style.id="nova-dock-final-fix";
  style.textContent=`
    #os-desktop .os-dock-wrap{
      width:max-content!important;
      max-width:calc(100vw - 24px)!important;
      overflow-x:auto!important;
      overflow-y:visible!important;
      scrollbar-width:none;
    }
    #os-desktop .os-dock-wrap::-webkit-scrollbar{display:none}
    #os-desktop .os-dock-pro{
      display:flex!important;
      flex-wrap:nowrap!important;
      align-items:center!important;
      justify-content:center!important;
      width:max-content!important;
      min-width:max-content!important;
    }
    #os-desktop .os-dock-item{
      flex:0 0 var(--nova-dock-size,64px)!important;
      width:var(--nova-dock-size,64px)!important;
      min-width:var(--nova-dock-size,64px)!important;
      max-width:var(--nova-dock-size,64px)!important;
      height:var(--nova-dock-size,64px)!important;
      min-height:var(--nova-dock-size,64px)!important;
      max-height:var(--nova-dock-size,64px)!important;
      aspect-ratio:1/1!important;
      padding:4px!important;
      display:grid!important;
      place-items:center!important;
      overflow:visible!important;
    }
    #os-desktop .os-dock-icon{
      flex:0 0 auto!important;
      width:calc(var(--nova-dock-size,64px) - 8px)!important;
      min-width:calc(var(--nova-dock-size,64px) - 8px)!important;
      max-width:calc(var(--nova-dock-size,64px) - 8px)!important;
      height:calc(var(--nova-dock-size,64px) - 8px)!important;
      min-height:calc(var(--nova-dock-size,64px) - 8px)!important;
      max-height:calc(var(--nova-dock-size,64px) - 8px)!important;
      aspect-ratio:1/1!important;
      display:grid!important;
      place-items:center!important;
      padding:0!important;
      line-height:1!important;
      border-radius:calc(var(--nova-radius,18px) - 2px)!important;
      overflow:hidden!important;
    }
    #os-desktop .os-dock-icon .os-vector-icon{
      display:block!important;
      width:82%!important;
      height:82%!important;
      max-width:none!important;
      max-height:none!important;
      flex:none!important;
    }
    #os-desktop[data-dock-position="left"] .os-dock-wrap,
    #os-desktop[data-dock-position="right"] .os-dock-wrap{
      width:auto!important;
      max-width:none!important;
      max-height:calc(100vh - 70px)!important;
      overflow-x:visible!important;
      overflow-y:auto!important;
    }
    #os-desktop[data-dock-position="left"] .os-dock-pro,
    #os-desktop[data-dock-position="right"] .os-dock-pro{
      width:auto!important;
      min-width:0!important;
      height:max-content!important;
      min-height:max-content!important;
    }
  `;
  document.head.appendChild(style);
})();

// Nova 6 shared theme and library styles.
(function(){
const style=document.createElement("style");
style.id="nova-v6-design";
style.textContent=`/* Nova 6: opaque, theme-aware surfaces and a responsive game library. */
#os-desktop{--nova-muted:color-mix(in srgb,var(--nova-text) 58%,transparent);--nova-line:color-mix(in srgb,var(--nova-text) 12%,transparent);--nova-raised:color-mix(in srgb,var(--nova-surface) 93%,var(--nova-text));color-scheme:dark}
body[data-nova-theme="arctic"] #os-desktop{color-scheme:light}
#os-desktop h1,#os-desktop h2,#os-desktop h3{font-family:var(--nova-font-family)!important;font-weight:750!important;letter-spacing:-.04em}
#os-desktop button,#os-desktop input,#os-desktop select{font-family:inherit;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
#os-desktop :is(button,input,select,a):focus-visible{outline:2px solid var(--nova-accent)!important;outline-offset:3px}
#os-desktop .os-window{min-width:min(420px,calc(100% - 32px))!important;min-height:min(300px,calc(100% - 32px))!important;max-width:calc(100% - 32px);max-height:calc(100% - 32px);border:1px solid var(--nova-line)!important;box-shadow:0 24px 80px #0005!important}
#os-desktop .os-window:is(.maximized,.os-fullscreen){max-width:100%;max-height:100%}
#os-desktop .os-window.focused{border-color:color-mix(in srgb,var(--nova-accent) 45%,var(--nova-line))!important}
#os-desktop :is(.os-menubar,.os-winbar,.os-dock-wrap,.os-browser-toolbar){background:var(--nova-bar)!important;color:var(--nova-text)!important}
#os-desktop :is(.os-window,.os-quick-panel,.os-app-menu,.os-window-context,.os-games-app,.os-finder-app,.os-browser-app,.os-education-app,.os-app-panel,.os-panel){background:var(--nova-surface)!important;color:var(--nova-text)!important}
#os-desktop :is(.os-dicon,.os-dock-icon,.os-file-item,.os-qgrid button,.os-app-menu button){background:var(--nova-raised)!important;color:var(--nova-text)!important}
#os-desktop :is(input,select,textarea){background:var(--nova-bar)!important;color:var(--nova-text)!important;border-color:var(--nova-line)!important}
#os-desktop input::placeholder{color:var(--nova-muted)}
#os-desktop :is(.os-win-title,.os-menu-item,.os-menu-right,.os-menu-left,.os-control){color:var(--nova-text)!important}
#os-desktop .nova-library{height:100%;min-height:0;overflow:hidden;display:flex;flex-direction:column;background:var(--nova-surface)!important;color:var(--nova-text)}
.nova-library *{box-sizing:border-box}
.nova-library-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:28px 28px 22px;background:radial-gradient(ellipse at 100% 0%,color-mix(in srgb,var(--nova-accent) 15%,transparent),transparent 65%);flex-shrink:0}
.nova-library-kicker{font-size:10px;letter-spacing:.22em;font-weight:800;color:var(--nova-accent)}
#os-desktop .nova-library-header h2{font-size:clamp(25px,3vw,38px);line-height:1.12;margin:9px 0}
.nova-library-header p{font-size:12px;margin:0;color:var(--nova-muted)}
.nova-library-total{display:grid;text-align:right;gap:3px;font-size:11px;color:var(--nova-muted);white-space:nowrap}.nova-library-total b{font-size:26px;letter-spacing:-.05em;color:var(--nova-text)}
.nova-library-tools{display:flex;gap:10px;padding:0 28px 18px;flex-shrink:0}
.nova-library-search{display:flex;align-items:center;gap:9px;flex:1;min-width:0;border:1px solid var(--nova-line);border-radius:12px;padding:0 12px;background:var(--nova-bar)}
.nova-library-search>span{font-size:24px;color:var(--nova-muted)}
#os-desktop .nova-library-search input{width:100%;min-width:0;padding:12px 0!important;border:0!important;background:transparent!important;border-radius:0!important;font-size:13px;outline-offset:1px}
.nova-library-search kbd{border:1px solid var(--nova-line);border-radius:4px;padding:1px 5px;color:var(--nova-muted);font-size:11px}
#os-desktop #nova-library-sort{max-width:145px;border:1px solid var(--nova-line);border-radius:12px;padding:0 10px;font-size:12px}
.nova-library-tabs{display:flex;align-items:center;gap:5px;padding:0 28px 14px;border-bottom:1px solid var(--nova-line);flex-shrink:0}
#os-desktop .nova-library-tabs button{padding:8px 11px;font-size:12px;border:1px solid transparent!important;border-radius:8px;background:transparent!important;color:var(--nova-muted)!important;cursor:pointer}
#os-desktop .nova-library-tabs button[aria-pressed="true"]{background:color-mix(in srgb,var(--nova-accent) 14%,transparent)!important;color:var(--nova-text)!important;border-color:color-mix(in srgb,var(--nova-accent) 32%,transparent)!important}
.nova-library-result{margin-left:auto;font-size:10px;color:var(--nova-muted);white-space:nowrap}
.nova-library-scroll{overflow:auto;min-height:0;flex:1;padding:20px 28px;scrollbar-width:thin;scrollbar-color:var(--nova-line) transparent}
.nova-library-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(165px,1fr));gap:16px}
.nova-library-card{min-width:0;background:var(--nova-raised);border:1px solid var(--nova-line);border-radius:14px;overflow:hidden;transition:border-color .16s,translate .16s}
.nova-library-card:hover{border-color:color-mix(in srgb,var(--nova-accent) 65%,transparent);translate:0 -3px}
.nova-no-animations .nova-library-card:hover{translate:none}
#os-desktop .nova-library-launch{display:block;width:100%;border:0!important;border-radius:0!important;background:transparent!important;color:var(--nova-text)!important;padding:0;text-align:left;cursor:pointer;transform:none!important}
.nova-game-art{height:108px;position:relative;display:grid;place-items:center;overflow:hidden;background:radial-gradient(ellipse at 10% 10%,hsl(var(--game-hue) 68% 65% / .6),transparent 70%),linear-gradient(130deg,hsl(var(--game-hue) 50% 29%),hsl(calc(var(--game-hue) + 45) 48% 13%));color:white}
.nova-game-art::before,.nova-game-art::after{content:"";position:absolute;width:100px;height:100px;rotate:-30deg;border:1px solid #ffffff20;border-radius:25px;right:-10px;top:-30px}.nova-game-art::after{right:auto;top:auto;left:-35px;bottom:-75px;width:180px;height:180px;border-radius:50%}
.nova-game-art>span{font-size:33px;letter-spacing:-.08em;font-weight:850;text-shadow:0 3px 15px #0004}.nova-game-art i{position:absolute;bottom:9px;right:12px;font-style:normal;font-size:15px;opacity:.7}
.nova-game-copy{display:grid;gap:7px;padding:13px 13px 8px}.nova-game-copy strong{font-size:12px;line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nova-game-copy small{font-size:10px;line-height:1.5;color:var(--nova-muted);height:30px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.nova-game-footer{padding:0 9px 9px 13px;display:flex;align-items:center;justify-content:space-between;gap:4px}.nova-game-footer>span{font-size:8px;letter-spacing:.09em;color:var(--nova-muted)}
#os-desktop .nova-game-footer button{width:32px;height:32px;padding:0;background:transparent!important;border:0!important;color:var(--nova-muted)!important;border-radius:8px;cursor:pointer;font-size:21px}
#os-desktop .nova-game-footer button[aria-pressed="true"]{color:var(--nova-accent)!important}
.nova-library-empty{text-align:center;padding:40px 15px;color:var(--nova-muted)}.nova-library-empty>span{font-size:32px;color:var(--nova-accent)}.nova-library-empty h3{font-size:22px;color:var(--nova-text)}.nova-library-empty p{font-size:12px}
#os-desktop :is(.nova-library-more,[data-library-reset]){display:block;margin:20px auto 4px;border:1px solid var(--nova-line)!important;background:var(--nova-raised)!important;border-radius:10px;padding:10px 18px;color:var(--nova-text)!important;cursor:pointer;font-size:12px}
#os-desktop .nova-library [hidden]{display:none!important}
.nova-library-status{display:flex;justify-content:space-between;gap:10px;padding:10px 28px;border-top:1px solid var(--nova-line);font-size:9px;color:var(--nova-muted);flex-shrink:0}
#os-desktop :is(.nova-mega-settings,.nova-settings-main){background:var(--nova-surface)!important;color:var(--nova-text)!important}
#os-desktop .nova-settings-side{background:var(--nova-bar)!important;border-color:var(--nova-line)}
#os-desktop :is(.nova-theme-card,.nova-wall-card,.nova-cursor-card,.nova-font-card,.nova-switch-row,.nova-perf-card){background:var(--nova-raised)!important;color:var(--nova-text)!important;border-color:var(--nova-line)!important}
#os-desktop :is(.nova-set-tab,.nova-control-grid label,.nova-set-page>label){color:var(--nova-text)!important}
#os-desktop .nova-set-tab.active{background:var(--nova-raised)!important}
#os-desktop .nova-set-page button{color:var(--nova-text)!important}
#os-desktop[data-dock-position="left"] .os-dock-wrap,#os-desktop[data-dock-position="right"] .os-dock-wrap{opacity:1!important;pointer-events:auto!important;transform:translateY(-50%)!important}
@media(max-width:600px){.nova-library-header{padding:18px 16px 14px}.nova-library-tools{padding:0 16px 12px}.nova-library-tabs{padding:0 16px 12px;flex-wrap:wrap}.nova-library-scroll{padding:14px 16px}.nova-library-grid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}.nova-library-result{display:none}.nova-library-status{padding:10px 16px}.nova-library-status>span:last-child{display:none}.nova-library-total{display:none}.nova-library-tabs button{font-size:11px!important;padding:7px 8px!important}.nova-library-search kbd{display:none}.nova-game-art{height:90px}.nova-perf-card{flex-wrap:wrap}.nova-perf-card b{min-width:0}}
@media(prefers-reduced-motion:reduce){#os-desktop *,#os-desktop *::before,#os-desktop *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.nova-library-card:hover{translate:none}}
`;
document.head.appendChild(style);
})();

// Direct gaming workspace inspired by Nova's compact navy product language.
(function(){
const style=document.createElement("style");
style.id="nova-gaming-workspace-design";
style.textContent=`
body:not(.os-mode){--bg:#101827;--surface:#142033;--surface-hover:#192841;--border:#273854;--mint:#9fc3ff;--mint-glow:rgba(126,171,239,.2);background:#101827!important}
body:not(.os-mode)::before{opacity:.7!important;transform:none!important;animation:none!important;background-image:radial-gradient(circle,#26334a 2.5px,transparent 2.5px)!important;background-size:24px 24px!important}
body:not(.os-mode) #app{background:transparent;overflow:hidden}
.nova-topbar{height:68px;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:0 28px;background:#0b1320;border-bottom:1px solid #1b2a40;flex-shrink:0;z-index:7000}
.nova-wordmark{display:flex!important;align-items:center;gap:5px!important;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#f4f8ff!important;font-size:22px;letter-spacing:-.04em;text-transform:lowercase;transform:none!important}
.nova-wordmark strong{font-weight:800}.nova-wordmark>span:last-child{font-weight:450;color:#9db9e6}.nova-bolt{display:grid;place-items:center;width:27px;height:27px;color:#0d1725;background:#eef5ff;border-radius:8px;font-size:18px;font-weight:900;clip-path:polygon(40% 0,100% 0,67% 39%,91% 39%,28% 100%,39% 57%,8% 57%)}
.nova-primary-links{display:flex;align-items:stretch;height:100%;gap:4px}.nova-primary-links button{position:relative;padding:0 14px!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#91a7c8!important;font-size:13px;font-weight:700;transform:none!important}.nova-primary-links button:hover,.nova-primary-links button.active{color:#d7e6ff!important}.nova-primary-links button.active::after{content:"";position:absolute;left:12px;right:12px;bottom:0;height:2px;background:#8fb9ff;border-radius:3px 3px 0 0}
body:not(.os-mode) #tbr{display:none!important}
body:not(.os-mode) header{padding:18px max(28px,calc((100vw - 1220px)/2));background:rgba(13,22,36,.92)!important;border-bottom:1px solid #213149!important;box-shadow:none!important;backdrop-filter:blur(16px)!important}
body:not(.os-mode) header .brand{display:none}.hl{gap:10px}.mbtn{border-radius:10px!important;background:#17243a!important;box-shadow:none!important}.sw{max-width:760px;margin-left:auto}.sbar{height:44px;border-radius:11px!important;background:#101a2a!important;border-color:#2d4262!important;padding:0 16px!important}.sbar:focus{border-color:#88b4f5!important;box-shadow:0 0 0 3px rgba(136,180,245,.12)!important}.hbtn,.fvbtn{height:42px;border-radius:10px!important;background:#17243a!important;box-shadow:none!important;border-color:#293b57!important}
.nova-library-intro{width:min(1220px,calc(100% - 56px));margin:0 auto;padding:34px 0 24px;display:flex;align-items:end;justify-content:space-between;gap:28px;flex-shrink:0}.nova-kicker{display:block;margin-bottom:8px;color:#8fb9ff;font-size:10px;font-weight:800;letter-spacing:.19em}.nova-library-intro h1{margin:0!important;font:700 clamp(28px,3.6vw,44px)/1.08 var(--nova-font-family)!important;letter-spacing:-.045em!important;color:#eef5ff}.nova-library-intro p{margin:10px 0 0;color:#8fa3c1;font-size:13px}.nova-library-count{display:flex;align-items:baseline;gap:8px;padding:13px 16px;border:1px solid #273a56;border-radius:13px;background:#142035;color:#8298ba;white-space:nowrap}.nova-library-count strong{font-size:24px;color:#d8e8ff}.nova-library-count span{font-size:11px}
.nova-section-title{width:min(1220px,calc(100% - 56px));margin:0 auto 12px;display:flex;align-items:center;justify-content:space-between;color:#8499b8;font-size:11px;flex-shrink:0}.nova-section-title>div{display:flex;align-items:center;gap:9px}.nova-section-title strong{font-size:18px;color:#bed4f5}.nova-section-dot{width:8px;height:8px;border-radius:2px;background:#8eb9f9}
body:not(.os-mode) #grid{width:min(1276px,100%);margin:0 auto;padding:0 28px 28px!important;grid-template-columns:repeat(auto-fill,minmax(var(--nova-card-size,200px),1fr))!important;gap:16px!important}
body:not(.os-mode) .card{height:235px!important;padding:0!important;border-radius:16px!important;background:#121e30!important;border-color:#263a56!important;box-shadow:0 10px 30px rgba(2,8,18,.16)!important;display:block!important;overflow:hidden}
body:not(.os-mode) #grid .card.hidden{display:none!important}
body:not(.os-mode) .card::before{display:none}.game-art{height:104px;position:relative;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 20% 10%,rgba(142,185,249,.55),transparent 52%),linear-gradient(135deg,#253a5a,#17243a 70%)}.game-art::before,.game-art::after{content:"";position:absolute;border:1px solid rgba(255,255,255,.13);width:110px;height:110px;border-radius:26px;transform:rotate(27deg);right:-26px;top:-50px}.game-art::after{width:150px;height:150px;border-radius:50%;left:-75px;top:42px}.game-art span{font-size:38px;font-weight:850;color:#f0f6ff;text-shadow:0 8px 30px rgba(0,0,0,.3)}
body:not(.os-mode) .card:nth-child(4n+2) .game-art{background:radial-gradient(circle at 20% 10%,rgba(136,221,207,.45),transparent 52%),linear-gradient(135deg,#1f4b52,#172b3b 70%)}body:not(.os-mode) .card:nth-child(4n+3) .game-art{background:radial-gradient(circle at 20% 10%,rgba(184,153,255,.48),transparent 52%),linear-gradient(135deg,#443864,#22253f 70%)}body:not(.os-mode) .card:nth-child(4n+4) .game-art{background:radial-gradient(circle at 20% 10%,rgba(255,180,115,.42),transparent 52%),linear-gradient(135deg,#58402e,#26293a 70%)}
.game-copy{padding:14px 15px}.game-copy h3{padding:0!important;margin:0 0 6px!important;font:700 13px/1.35 var(--nova-font-family)!important;color:#cfe0fa!important}.game-copy p{height:34px;font-size:10px!important;color:#8296b3!important}.game-play{display:inline-flex;margin-top:11px;padding:7px 10px;border-radius:8px;background:#223149;color:#bdd4f5;font-size:10px;font-weight:750}.card:hover{transform:translateY(-4px)!important;border-color:#5278aa!important;box-shadow:0 18px 40px rgba(2,8,18,.3)!important}.card:hover .game-copy h3{color:#fff!important}.fvs{right:12px!important;bottom:12px!important}.ntb{top:10px!important;right:10px!important;color:#e8f2ff!important;background:#101a2acc!important;border-color:#49678f!important}
body:not(.os-mode),body:not(.os-mode) :is(button,input,select,textarea){font-family:var(--nova-font-family)!important}
body:not(.os-mode) :is(h1,h2,h3,.fp-ttl,.tt){font-family:var(--nova-font-family)!important;letter-spacing:-.025em}
body:not(.os-mode){background:var(--nova-theme-bg)!important;color:var(--nova-text)!important}body:not(.os-mode) #app{background:var(--nova-theme-bg)!important}.nova-topbar,body:not(.os-mode) #tbr{background:var(--nova-bar)!important}.nova-topbar{border-bottom-color:color-mix(in srgb,var(--nova-text) 12%,transparent)!important}body:not(.os-mode) header,body:not(.os-mode) .th,body:not(.os-mode) .fpbar{background:var(--nova-surface)!important}.nova-primary-links button.active::after,.nova-section-dot{background:var(--nova-accent)!important}body:not(.os-mode) .tbt.on{border-color:color-mix(in srgb,var(--nova-accent) 45%,transparent)!important}body:not(.os-mode) .tb-icon{color:var(--nova-accent)!important}body:not(.os-mode) .card{background:color-mix(in srgb,var(--nova-surface) 94%,var(--nova-text))!important;border-radius:var(--nova-radius)!important}
.nova-topbar{height:54px;padding:0 22px;gap:16px}
.nova-wordmark{font-size:20px}.nova-bolt{width:24px;height:24px}
.nova-primary-links{min-width:0;overflow-x:auto;scrollbar-width:none}.nova-primary-links::-webkit-scrollbar{display:none}.nova-primary-links button{padding:0 10px!important;font-size:12px;white-space:nowrap}
body:not(.os-mode) #tbr{height:42px!important;display:flex!important;align-items:flex-end!important;gap:3px!important;padding:6px 12px 0!important;background:#0b1320!important;border-bottom:1px solid #263852!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:none;z-index:6900!important}
body:not(.os-mode) #tbr::-webkit-scrollbar{display:none}
body:not(.os-mode) .tbt{height:35px!important;min-width:120px!important;max-width:260px!important;flex:0 1 var(--nova-tab-width,190px)!important;display:flex!important;align-items:center!important;gap:8px!important;padding:0 9px 0 12px!important;border:1px solid transparent!important;border-bottom:0!important;border-radius:10px 10px 0 0!important;background:#101c2d!important;color:#8fa5c6!important;box-shadow:none!important;transform:none!important;text-align:left!important}
body:not(.os-mode) .tbt:hover{background:#182740!important;color:#dbe8fb!important}
body:not(.os-mode) .tbt.on{background:#1b2b44!important;color:#f4f8ff!important;border-color:#314767!important}
body:not(.os-mode) .tb-icon{width:18px;height:18px;display:grid;place-items:center;flex:0 0 auto;border-radius:5px;background:#263b59;color:#aecdff;font-size:10px;font-weight:800}
body:not(.os-mode) .tb-ttl{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;font-size:11px;font-weight:700}
body:not(.os-mode) .tb-x{width:20px;height:20px;display:grid;place-items:center;border-radius:6px;color:#8295b2;font-size:15px;line-height:1}
body:not(.os-mode) .tb-x:hover{background:#ffffff16;color:#fff}
body:not(.os-mode) #tb-new{position:static!important;flex:0 0 29px!important;width:29px!important;height:29px!important;margin:0 0 3px 2px!important;border:0!important;border-radius:8px!important;background:#17253a!important;color:#a9bfdf!important;box-shadow:none!important;transform:none!important}
body:not(.os-mode) #bnav{display:none!important}
body:not(.os-mode) #theater{top:96px!important}
body:not(.os-mode) .fpanel{top:96px!important;bottom:0!important;height:auto!important;border-radius:0!important}
body:not(.os-mode).in-game.nova-immersive .nova-topbar{display:none!important}
body:not(.os-mode).in-game.nova-immersive #theater{top:42px!important}
body:not(.os-mode) .th,body:not(.os-mode) .fpbar{min-height:50px!important;padding:8px 22px!important;background:#121f32!important;border-bottom:1px solid #2a3d5b!important;box-shadow:none!important}
body:not(.os-mode) .tt,body:not(.os-mode) .fp-ttl{font-size:14px!important;font-weight:800!important;text-transform:none!important;color:#edf4ff!important}
body:not(.os-mode) :is(.ab,.cb,.fp-back){padding:7px 11px!important;border-radius:9px!important;font-size:11px!important;background:#1b2b43!important;border:1px solid #334a6b!important;color:#e4efff!important;box-shadow:none!important}
body:not(.os-mode) .fp-body{padding:18px 22px!important}
.nova-embed-panel .fp-body,.nova-settings-panel .fp-body{padding:0!important;overflow:hidden!important}
.nova-embed-panel>iframe,.nova-embed-frame{display:block;width:100%;height:100%;min-height:0;flex:1;border:0;background:#0e1726}
#yt-panel.playing>.fpbar{display:none!important}
#yt-panel.playing .fp-body{padding:0!important;overflow:hidden!important}
.nova-yt-player{height:100%;min-height:0;display:flex;flex-direction:column;background:#0c1421;color:#eaf2ff}
.nova-yt-playerbar{height:48px;display:flex;align-items:center;gap:14px;padding:7px 18px;border-bottom:1px solid #273a57;background:#111e30;font-size:12px;font-weight:750;flex:0 0 auto}.nova-yt-playerbar>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nova-yt-watch-layout{min-height:0;flex:1;display:grid;grid-template-columns:minmax(0,1fr) 350px;gap:0}
.nova-yt-watch-layout.without-comments{grid-template-columns:minmax(0,1fr)}
.nova-yt-video-column{min-width:0;min-height:0;padding:18px;overflow:auto;background:#080d15}.nova-yt-frame-wrap{width:100%;aspect-ratio:16/9;background:#000;border-radius:12px;overflow:hidden;box-shadow:0 16px 50px #0007}.nova-yt-frame-wrap iframe{display:block;width:100%;height:100%;border:0}.nova-yt-video-title{padding:14px 2px 4px;font-size:15px;font-weight:800;line-height:1.4}
.nova-yt-comments{min-width:0;min-height:0;border-left:1px solid #263953;background:#111c2d;overflow:auto}.nova-yt-comments-head{position:sticky;top:0;z-index:2;display:flex;justify-content:space-between;align-items:center;padding:15px 16px;border-bottom:1px solid #263953;background:#111c2df2}.nova-yt-comments-head strong{font-size:13px}.nova-yt-comments-head span{padding:4px 7px;border-radius:7px;background:#20314a;color:#9db8dc;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}
#yt-comments-list{padding:5px 16px 18px}.nova-comment{padding:13px 0;border-bottom:1px solid #22334d}.nova-comment-row{display:grid;grid-template-columns:32px minmax(0,1fr);gap:10px}.nova-comment-row.reply{grid-template-columns:26px minmax(0,1fr);margin-top:12px}.nova-comment-row img,.nova-comment-avatar{width:32px;height:32px;border-radius:50%;object-fit:cover}.nova-comment-row.reply img,.nova-comment-row.reply .nova-comment-avatar{width:26px;height:26px}.nova-comment-avatar{display:grid;place-items:center;background:#29456b;color:#dceaff;font-size:11px;font-weight:800}.nova-comment-meta{display:flex;align-items:center;gap:7px}.nova-comment-meta strong{font-size:10px}.nova-comment-meta span,.nova-comment-row small{font-size:9px;color:#7f96b7}.nova-comment-row p{margin:5px 0;color:#c8d7ec;font-size:11px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere}.nova-replies-toggle{margin:8px 0 0 42px!important;padding:5px 8px!important;border:0!important;border-radius:7px!important;background:#1d304b!important;color:#9fc5fb!important;font-size:9px!important;font-weight:750!important;box-shadow:none!important}.nova-comment-replies{margin-left:42px}.nova-comment-empty{padding:28px 6px;color:#8298b7;font-size:11px;line-height:1.6}
body.nova-hide-game-descriptions:not(.os-mode) .game-copy p{display:none}body.nova-hide-game-descriptions:not(.os-mode) .card{height:198px!important}
body[data-nova-density="compact"]:not(.os-mode) .nova-library-intro{padding:20px 0 14px}body[data-nova-density="compact"]:not(.os-mode) #grid{gap:10px!important}body[data-nova-density="compact"]:not(.os-mode) .card{height:215px!important}body[data-nova-density="compact"]:not(.os-mode) .game-art{height:88px}body[data-nova-density="compact"]:not(.os-mode) header{padding-top:10px!important;padding-bottom:10px!important}
body[data-nova-density="spacious"]:not(.os-mode) .nova-library-intro{padding:48px 0 32px}body[data-nova-density="spacious"]:not(.os-mode) #grid{gap:24px!important}body[data-nova-density="spacious"]:not(.os-mode) .card{height:250px!important}body[data-nova-density="spacious"]:not(.os-mode) .game-art{height:118px}
@media(max-width:900px){.nova-yt-watch-layout{display:block;overflow:auto}.nova-yt-video-column{overflow:visible;padding:12px}.nova-yt-comments{border-left:0;border-top:1px solid #263953;overflow:visible}.nova-yt-player{overflow:hidden}.nova-yt-watch-layout{min-height:0}.nova-primary-links button{padding:0 8px!important}}
@media(max-width:820px){.nova-topbar{padding:0 12px}.nova-wordmark>span:last-child{display:none}.nova-primary-links button{font-size:11px}.nova-library-intro{width:calc(100% - 32px);padding-top:24px}.nova-library-count{display:none}.nova-section-title{width:calc(100% - 32px)}body:not(.os-mode) header{padding:12px 16px!important}.sw .hbtn{display:none}body:not(.os-mode) #grid{padding-left:16px!important;padding-right:16px!important;padding-bottom:22px!important;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))!important}.game-art{height:90px}body:not(.os-mode) .card{height:218px!important}body:not(.os-mode) .tbt{min-width:105px!important;flex-basis:145px!important}body:not(.os-mode) .th,body:not(.os-mode) .fpbar{padding-left:12px!important;padding-right:12px!important}}
@media(prefers-reduced-motion:reduce){body:not(.os-mode) .card{transition:none!important}}
`;
document.head.appendChild(style);
})();

/* Final shell authority intentionally loads after legacy theme CSS. */
(function(){
const style=document.createElement("style");
style.id="nova-final-shell-fixes";
style.textContent=`
html,body,#app,.fpanel,#theater,#panel,#nova-command{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif!important}
body:not(.os-mode),body:not(.os-mode) #app{background:#050507!important;color:#f4f3f8!important}
body:not(.os-mode) .nova-topbar,body:not(.os-mode) #tbr{background:#07070a!important;border-color:rgba(255,255,255,.1)!important}
body:not(.os-mode) .nova-topbar{top:0!important}
body:not(.os-mode) .fpanel,body:not(.os-mode) #theater{top:0!important;bottom:0!important;height:auto!important;margin:0!important;padding-top:0!important;border-radius:0!important;background:radial-gradient(60vw 44vw at 24% 0,rgba(76,16,184,.38),transparent 62%),#050507!important}
body:not(.os-mode).nova-immersive .fpanel,body:not(.os-mode).nova-immersive #theater{top:0!important}
body:not(.os-mode).in-game .nova-topbar,body:not(.os-mode).in-game #tbr{display:none!important}
body:not(.os-mode).in-game #theater{left:0!important;top:0!important;bottom:0!important;z-index:9000!important}
body:not(.os-mode).in-game #theater .th{min-height:46px!important;height:46px!important;padding:5px 10px!important;background:rgba(7,7,10,.9)!important}
body:not(.os-mode).in-game #theater .ifw{height:calc(100% - 46px)!important}
body:not(.os-mode) .th,body:not(.os-mode) .fpbar{background:rgba(7,7,10,.9)!important;border-color:rgba(255,255,255,.09)!important;color:#f4f3f8!important}
body:not(.os-mode) .nova-library-toolbar{min-height:0!important;height:68px!important;display:flex!important;flex-direction:row!important;justify-content:center!important;align-items:center!important;padding:10px 22px!important;background:transparent!important}
body:not(.os-mode) .nova-home-logo,body:not(.os-mode) .nova-library-toolbar>p{display:none!important}
body:not(.os-mode) .nova-game-search{width:min(720px,75%)!important;height:42px!important;margin:0!important;background:#0d0d11!important}
body:not(.os-mode) .nova-home-actions{margin:0 0 0 8px!important}
body:not(.os-mode) .nova-library-intro{display:none!important}
body:not(.os-mode) .nova-section-title{padding-top:12px!important}
body:not(.os-mode) #grid{padding-top:0!important}
.nova-dashboard{width:min(1440px,calc(100% - 44px));margin:14px auto 22px;display:grid;gap:16px}
.nova-dashboard-hero{position:relative;overflow:hidden;min-height:260px;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding:36px;border:1px solid rgba(255,255,255,.09);border-radius:24px;background:radial-gradient(700px 300px at 78% 0,rgba(134,75,255,.34),transparent 65%),radial-gradient(500px 280px at 0 100%,rgba(47,221,187,.14),transparent 68%),#0b0b11;box-shadow:0 28px 90px rgba(0,0,0,.3)}
.nova-dashboard-hero:after{content:"";position:absolute;width:330px;height:330px;right:9%;top:-54%;border:1px solid rgba(255,255,255,.09);border-radius:50%;box-shadow:0 0 0 45px rgba(255,255,255,.018),0 0 0 90px rgba(255,255,255,.012);pointer-events:none}
.nova-dashboard-eyebrow{display:block;margin-bottom:13px;color:#a88bff;font-size:10px;font-weight:850;letter-spacing:.18em}
.nova-dashboard h1{margin:0;color:#fff;font-size:clamp(35px,4.8vw,68px);line-height:.94;letter-spacing:-.055em}
.nova-dashboard-hero p{max-width:580px;margin:18px 0 0;color:rgba(255,255,255,.5);font-size:14px;line-height:1.65}
.nova-dashboard-actions{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:10px;min-width:min(430px,42%)}
.nova-dashboard-actions button,.nova-dashboard-strip button{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#fff;text-align:left;cursor:pointer;transition:transform .18s ease,border-color .18s ease,background .18s ease}
.nova-dashboard-actions button{min-height:98px;padding:18px;border-radius:17px}.nova-dashboard-actions button:hover,.nova-dashboard-strip button:hover,.nova-recent-chip:hover{transform:translateY(-3px);border-color:rgba(163,126,255,.45);background:rgba(137,83,255,.1)}
.nova-dashboard-actions button span{float:left;margin-right:12px;font-size:22px;color:#a986ff}.nova-dashboard-actions b,.nova-dashboard-actions small,.nova-dashboard-strip b,.nova-dashboard-strip small{display:block}.nova-dashboard-actions b{font-size:13px}.nova-dashboard-actions small{margin-top:6px;color:rgba(255,255,255,.4);font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nova-dashboard-actions .nova-dashboard-primary{background:linear-gradient(135deg,#7952ff,#9b6cff);border-color:transparent;box-shadow:0 14px 35px rgba(111,63,255,.28)}.nova-dashboard-actions .nova-dashboard-primary span,.nova-dashboard-actions .nova-dashboard-primary small{color:#fff}
.nova-dashboard-strip{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}.nova-dashboard-strip button{min-width:0;padding:15px;border-radius:15px}.nova-dashboard-strip button>span{width:32px;height:32px;display:grid;place-items:center;margin-bottom:13px;border-radius:10px;background:rgba(151,111,255,.12);color:#a98aff;font-size:17px}.nova-dashboard-strip b{font-size:12px}.nova-dashboard-strip small{margin-top:4px;color:rgba(255,255,255,.36);font-size:9px}.nova-dashboard-strip small i{font-style:normal}.nova-dashboard-strip button.on{border-color:#9170ff;background:rgba(137,83,255,.14)}
.nova-dashboard-recents-head{display:flex;align-items:end;justify-content:space-between;margin-top:5px}.nova-dashboard-recents-head strong,.nova-dashboard-recents-head span{display:block}.nova-dashboard-recents-head strong{font-size:17px}.nova-dashboard-recents-head span{margin-top:4px;color:rgba(255,255,255,.35);font-size:10px}.nova-dashboard-recents-head button{border:0;background:transparent;color:#a98aff;font:700 10px inherit;cursor:pointer}
.nova-dashboard-recents{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}.nova-recent-chip{min-width:0;display:grid;grid-template-columns:42px minmax(0,1fr);grid-template-rows:1fr 1fr;column-gap:11px;padding:10px;border:1px solid rgba(255,255,255,.075);border-radius:14px;background:#0b0b10;color:#fff;text-align:left;cursor:pointer;transition:.18s}.nova-recent-chip>span{grid-row:1/3;width:42px;height:42px;display:grid;place-items:center;border-radius:11px;background:linear-gradient(135deg,#603ddd,#272038);font-weight:850}.nova-recent-chip strong,.nova-recent-chip small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nova-recent-chip strong{align-self:end;font-size:10px}.nova-recent-chip small{color:rgba(255,255,255,.33);font-size:8px}.nova-dashboard-empty{grid-column:1/-1;padding:22px;border:1px dashed rgba(255,255,255,.09);border-radius:14px;color:rgba(255,255,255,.32);text-align:center;font-size:11px}
.nova-dashboard-stats{display:flex;gap:22px;padding:0 4px;color:rgba(255,255,255,.3);font-size:9px}.nova-dashboard-stats b{color:rgba(255,255,255,.68);font-size:10px}.nova-focus-mode .nova-dashboard-strip,.nova-focus-mode .nova-dashboard-recents-head,.nova-focus-mode .nova-dashboard-recents,.nova-focus-mode .nova-dashboard-stats,.nova-focus-mode .nova-section-title{display:none!important}.nova-focus-mode .nova-dashboard-hero{min-height:340px}.nova-focus-mode #grid{grid-template-columns:repeat(auto-fill,minmax(210px,1fr))!important}
body:not(.os-mode) .card{font-family:ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;background:#0c0c10!important;border-color:rgba(255,255,255,.08)!important;border-radius:8px!important}
body:not(.os-mode) .card h3{font-family:inherit!important;font-weight:650!important;letter-spacing:-.01em!important}
body.nova-app-open:not(.os-mode) #tbr{display:flex!important;position:fixed!important;left:5px!important;top:112px!important;width:42px!important;max-height:calc(100vh - 440px)!important;height:auto!important;padding:0!important;gap:4px!important;flex-direction:column!important;background:transparent!important;border:0!important;z-index:7001!important}
body.nova-app-open:not(.os-mode) #tbr:before{display:none!important}
body.nova-app-open:not(.os-mode) #tbr .tbt,body.nova-app-open:not(.os-mode) #tb-new{width:42px!important;min-width:42px!important;max-width:42px!important;height:38px!important;min-height:38px!important;flex:0 0 38px!important;margin:0!important;padding:0!important;display:grid!important;place-items:center!important;border-radius:5px!important;background:transparent!important}
body.nova-app-open:not(.os-mode) #tbr .tbt.on{background:rgba(124,60,255,.18)!important}
body.nova-app-open:not(.os-mode) #tbr .tb-ttl,body.nova-app-open:not(.os-mode) #tbr .tb-x{display:none!important}
body.nova-app-open:not(.os-mode) #tbr .tb-icon{width:auto!important;height:auto!important;background:transparent!important}
body.nova-app-open:not(.os-mode) #tb-new{order:-1!important;font-size:18px!important;color:#ddd!important}
body.nova-app-open:not(.os-mode) #tb-new:after{display:none!important}
body:not(.os-mode) .fp-body{padding:16px!important}
body:not(.os-mode) .nova-native-panel .fp-body,body:not(.os-mode) .nova-settings-panel .fp-body{padding:0!important}
body:not(.os-mode) #ai-panel .ai-main,body:not(.os-mode) .nova-chat-main,body:not(.os-mode) .nova-browser-home,body:not(.os-mode) #settings-panel .nova-mega-settings{background:radial-gradient(60vw 44vw at 22% 0,rgba(76,16,184,.34),transparent 63%),#050507!important}
body:not(.os-mode) #ai-panel .ai-drawer,body:not(.os-mode) .nova-chat-side{background:#07070a!important}
@media(min-width:761px){
 body.nova-app-open:not(.os-mode){--nova-sidebar:0px}
 body.nova-app-open:not(.os-mode) #app{padding-left:0!important;padding-top:100px!important}
 body.nova-app-open:not(.os-mode) #app:before{left:0!important;top:57px!important}
 body.nova-app-open:not(.os-mode) .nova-topbar{inset:0 0 auto 0!important;width:100%!important;height:58px!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;padding:0 14px!important;gap:12px!important;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.1)!important}
 body.nova-app-open:not(.os-mode) .nova-wordmark{display:flex!important;width:auto!important;height:40px!important;padding:0 6px!important;justify-content:flex-start!important;flex:0 0 auto!important}
 body.nova-app-open:not(.os-mode) .nova-wordmark strong{display:block!important;font-size:20px!important}
 body.nova-app-open:not(.os-mode) .nova-side-search{display:flex!important;width:168px!important;height:36px!important;flex:0 0 168px!important}
 body.nova-app-open:not(.os-mode) .nova-sidebar-pins,body.nova-app-open:not(.os-mode) .nova-side-caption{display:none!important}
 body.nova-app-open:not(.os-mode) .nova-primary-links{width:auto!important;height:100%!important;min-width:0!important;display:flex!important;flex:1 1 auto!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;gap:3px!important;overflow-x:auto!important;overflow-y:hidden!important}
 body.nova-app-open:not(.os-mode) .nova-primary-links button{width:auto!important;min-width:max-content!important;height:38px!important;display:flex!important;flex-direction:row!important;justify-content:center!important;gap:7px!important;padding:0 10px!important;border-radius:7px!important}
 body.nova-app-open:not(.os-mode) .nova-primary-links button i{width:auto!important;font-size:14px!important}
 body.nova-app-open:not(.os-mode) .nova-primary-links button span{display:block!important;font-size:11px!important}
 body.nova-app-open:not(.os-mode) #tbr{left:0!important;right:0!important;top:58px!important;width:100%!important;height:42px!important;max-height:42px!important;display:flex!important;flex-direction:row!important;align-items:flex-end!important;padding:5px 10px 0!important;gap:3px!important;background:#09090d!important;border-bottom:1px solid rgba(255,255,255,.09)!important;overflow-x:auto!important}
 body.nova-app-open:not(.os-mode) #tbr .tbt{width:auto!important;min-width:118px!important;max-width:230px!important;height:36px!important;min-height:36px!important;display:flex!important;flex:0 1 180px!important;align-items:center!important;justify-content:flex-start!important;padding:0 9px 0 11px!important;border-radius:8px 8px 0 0!important;background:#111117!important}
 body.nova-app-open:not(.os-mode) #tbr .tb-ttl,body.nova-app-open:not(.os-mode) #tbr .tb-x{display:block!important}
 body.nova-app-open:not(.os-mode) #tbr .tb-ttl{flex:1!important;min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;text-align:left!important}
 body.nova-app-open:not(.os-mode) #tb-new{order:99!important;width:32px!important;min-width:32px!important;max-width:32px!important;height:32px!important;min-height:32px!important;display:grid!important;place-items:center!important;margin:0 0 2px 2px!important;border-radius:7px!important;background:#17171f!important}
 body.nova-app-open:not(.os-mode) .fpanel{left:0!important;top:100px!important;bottom:0!important}
 body.nova-app-open:not(.os-mode) #theater{left:0!important;top:100px!important;bottom:0!important}
 body.nova-app-open:not(.os-mode).in-game .nova-topbar,body.nova-app-open:not(.os-mode).in-game #tbr{display:none!important}
 body.nova-app-open:not(.os-mode).in-game #theater{left:0!important;top:0!important;bottom:0!important}
}
@media(max-width:760px){
 body:not(.os-mode) .fpanel,body:not(.os-mode) #theater{top:39px!important;bottom:62px!important;padding-top:0!important}
 body:not(.os-mode).in-game #theater{top:0!important;bottom:0!important}
 body.nova-app-open:not(.os-mode) #tbr{left:0!important;right:0!important;top:0!important;width:100%!important;height:39px!important;max-height:39px!important;display:flex!important;flex-direction:row!important;padding:3px 5px!important;background:#07070af2!important}
 body.nova-app-open:not(.os-mode) #tbr .tbt{width:auto!important;min-width:84px!important;max-width:120px!important;display:flex!important}
 body.nova-app-open:not(.os-mode) #tbr .tb-ttl{display:block!important}
 body.nova-app-open:not(.os-mode) .nova-primary-links{justify-content:flex-start!important;overflow-x:auto!important;scroll-snap-type:x proximity}
 body.nova-app-open:not(.os-mode) .nova-primary-links button{display:flex!important;flex:0 0 58px!important;scroll-snap-align:start}
 body.nova-app-open:not(.os-mode) .nova-primary-links button:nth-last-child(-n+2){display:flex!important}
 body:not(.os-mode) .nova-library-toolbar{height:62px!important;padding:9px!important}
 body:not(.os-mode) .nova-game-search{width:100%!important}
 body:not(.os-mode) .nova-home-actions{display:none!important}
 .nova-dashboard{width:calc(100% - 20px);margin:8px auto 16px;gap:12px}.nova-dashboard-hero{min-height:0;display:block;padding:24px 20px;border-radius:19px}.nova-dashboard h1{font-size:38px}.nova-dashboard-hero p{font-size:12px}.nova-dashboard-actions{min-width:0;margin-top:22px;grid-template-columns:1fr}.nova-dashboard-actions button{min-height:72px}.nova-dashboard-strip{grid-template-columns:repeat(3,minmax(0,1fr))}.nova-dashboard-strip button{padding:12px}.nova-dashboard-recents{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:4px}.nova-recent-chip{flex:0 0 180px;scroll-snap-align:start}.nova-dashboard-stats{overflow-x:auto;white-space:nowrap}.nova-dashboard-hero:after{display:none}
}
@media(min-width:761px) and (max-width:1050px){.nova-dashboard-hero{align-items:stretch;flex-direction:column}.nova-dashboard-actions{min-width:0;width:100%}.nova-dashboard-strip,.nova-dashboard-recents{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;
document.head.appendChild(style);
})();

}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",launchNova,{once:true});
else launchNova();
})();
