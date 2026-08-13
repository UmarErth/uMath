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
const LOCK_PIN = "1234";

// ─── CLOAK METADATA ─────────────────────────────────────────────
const CLOAK_TITLE = "Home - Google Classroom";
const CLOAK_ICON  = "https://ssl.gstatic.com/classroom/favicon.png";

// ─── BACKGROUND CONFIG ──────────────────────────────────────────
const PARTICLE_COLOR = "rgba(0, 255, 157, 0.22)";
const PARTICLE_COUNT = 45;

// ─── OFFLINE SAVE ───────────────────────────────────────────────
const SAVE_URL      = "https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/singlefile.html";
const SAVE_FILENAME = "NovaGaming.html";

// ─── GOOGLE GEMINI AI CONFIG ────────────────────────────────────
const GEMINI_API_KEY = "AQ.Ab8RN6JhWU46D44KxMFcmoRQAghUEuF3kSry4XuhmVlXnO2PLA";

// ─── PIPED & INVIDIOUS INSTANCE POOL ────────────────────────────
const PIPED_EMBED_INSTANCES = [
    "https://piped.video",
    "https://piped.mha.fi",
    "https://piped.garudalinux.org",
    "https://inv.thepixora.com",
    "https://invidious.nerdvpn.de",
    "https://vid.puppet2016.xyz"
];
let currentYtInstance = PIPED_EMBED_INSTANCES[0];

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
    _aiModels:[], _selectedModel:"gemini-1.5-flash",
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
        if (!url) return;

        if (url.includes("cdn.jsdelivr.net/gh/")) {
            let rawGhUrl = url;
            const match = url.match(/cdn\.jsdelivr\.net\/gh\/([^\/@]+)\/([^@\/]+)(?:@([^\/]+))?\/(.+)/);
            let baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
            
            if (match) {
                const [, user, repo, branch = "main", path] = match;
                rawGhUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${path}`;
                baseUrl = rawGhUrl.substring(0, rawGhUrl.lastIndexOf('/') + 1);
            }

            try {
                if (this._htmlCache.has(url)) {
                    iframe.srcdoc = this._htmlCache.get(url);
                    return;
                }

                const res = await fetch(url);
                if (res.ok) {
                    let html = await res.text();
                    const baseTag = `<base href="${baseUrl}">`;

                    if (/<head[^>]*>/i.test(html)) {
                        html = html.replace(/<head[^>]*>/i, `$&${baseTag}`);
                    } else {
                        html = `<!DOCTYPE html><html><head>${baseTag}</head><body>${html}</body></html>`;
                    }

                    this._htmlCache.set(url, html);
                    iframe.srcdoc = html;
                    return;
                }
            } catch (e) {
                console.warn("Direct HTML fetch failed, executing fallback:", e);
            }

            iframe.removeAttribute("srcdoc");
            iframe.src = url.replace("cdn.jsdelivr.net/gh/", "raw.githack.com/");
            return;
        }

        iframe.removeAttribute("srcdoc");
        iframe.src = url;
    },

    // ── CSS & HYPERGLASS SYSTEM STYLING ────────────────────────────
    css() {
        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";
        document.head.appendChild(fontLink);

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
            animation: pulseGlow 12s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow { 0% { opacity: 0.6; transform: scale(1); } 100% { opacity: 1; transform: scale(1.05); } }

        #particle-canvas { position: fixed; inset: 0; z-index: 1; pointer-events: none; }

        /* LOCK SCREEN OVERLAY */
        #lock {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(3, 4, 10, 0.94); backdrop-filter: var(--bmd); -webkit-backdrop-filter: var(--bmd);
            display: flex; align-items: center; justify-content: center; transition: opacity 0.4s var(--ea);
        }
        .lk {
            text-align: center; padding: clamp(32px, 5vw, 60px) clamp(32px, 6vw, 70px);
            background: var(--surface); border: 1px solid var(--border); border-radius: 32px;
            backdrop-filter: var(--bmd); box-shadow: var(--glass-glow), 0 0 80px rgba(112, 0, 255, 0.25);
            animation: popIn 0.45s var(--sp) both; max-width: 90vw;
        }
        @keyframes popIn { from { opacity: 0; transform: scale(0.92) translateY(20px); } to { opacity: 1; transform: none; } }
        .lk-wm {
            font-size: var(--flk); font-weight: 800; letter-spacing: 4px; text-transform: uppercase;
            background: linear-gradient(135deg, #fff 20%, var(--mint) 80%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;
        }
        .lk-lb { display: block; font-size: var(--fxs); color: rgba(255,255,255,0.4); letter-spacing: 4px; text-transform: uppercase; margin-bottom: 24px; }
        .lk-in {
            background: rgba(0, 0, 0, 0.6); border: 1px solid var(--border); color: var(--mint);
            font-family: 'JetBrains Mono', monospace; font-size: var(--flk); text-align: center;
            padding: 12px 24px; border-radius: 20px; width: clamp(140px, 30vw, 210px); outline: none;
            transition: all 0.3s var(--ea); letter-spacing: 10px;
        }
        .lk-in:focus { border-color: var(--mint); box-shadow: 0 0 35px var(--mint-glow); background: rgba(0,255,157,0.05); }

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

        /* SHARED UTILITIES */
        .fp-msg { text-align: center; padding: 40px 16px; color: rgba(255, 255, 255, 0.4); font-size: var(--fb); }
        .fp-spin {
            width: 32px; height: 32px; border: 3px solid var(--border); border-top-color: var(--mint);
            border-radius: 50%; animation: spin 0.65s linear infinite; margin: 32px auto;
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
        `;
        document.head.appendChild(s);
        if(!document.querySelector('meta[name="viewport"]')){
            const vp=document.createElement("meta");
            vp.name="viewport";
            vp.content="width=device-width,initial-scale=1,viewport-fit=cover";
            document.head.appendChild(vp);
        }
    },

    // ── INTERACTIVE PARTICLE CANVAS BACKGROUND ─────────────────────
    dots() {
        const c = document.createElement("canvas");
        c.id = "particle-canvas";
        document.body.appendChild(c);
        const ctx = c.getContext("2d");
        let particles = [];
        let mx = -1e4, my = -1e4;

        const resize = () => { c.width = innerWidth; c.height = innerHeight; init(); };
        window.addEventListener("resize", resize, { passive: true });

        window.addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; }, { passive: true });

        const init = () => {
            particles = [];
            const count = this.isLowSpec ? Math.floor(PARTICLE_COUNT / 2) : PARTICLE_COUNT;
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * c.width,
                    y: Math.random() * c.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.8 + 0.8
                });
            }
        };

        let animId = null;
        let isTabActive = true;

        document.addEventListener("visibilitychange", () => {
            isTabActive = !document.hidden;
            if (isTabActive && !animId) requestAnimationFrame(draw);
        });

        const draw = () => {
            if (!isTabActive) { animId = null; return; }
            ctx.clearRect(0, 0, c.width, c.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx; p.y += p.vy;

                if (p.x < 0) p.x = c.width;
                if (p.x > c.width) p.x = 0;
                if (p.y < 0) p.y = c.height;
                if (p.y > c.height) p.y = 0;

                const dx = mx - p.x, dy = my - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const angle = Math.atan2(dy, dx);
                    const force = (150 - dist) / 150;
                    p.x -= Math.cos(angle) * force * 2;
                    p.y -= Math.sin(angle) * force * 2;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = PARTICLE_COLOR;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 255, 157, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };

        resize();
        requestAnimationFrame(draw);
    },

    // ── DOM CONSTRUCTION ────────────────────────────────────────
    buildDOM(){
        try{ this.favorites=JSON.parse(localStorage.getItem("ng_f")||"[]"); }catch(e){}

        // Lock Overlay
        const lock=document.createElement("div"); lock.id="lock";
        lock.innerHTML=`<div class="lk"><div class="lk-wm">${this.esc(SITE_NAME)}</div><span class="lk-lb">Enter Security PIN</span><input type="password" class="lk-in" placeholder="••••" maxlength="4" autocomplete="off"></div>`;
        document.body.appendChild(lock);

        // Main App Wrapper
        const app=document.createElement("div"); app.id="app";
        const hbHTML=HEADER_BUTTONS.map(b=>`<button class="hbtn" id="${b.id}" title="${this.esc(b.label)}"><span>${b.icon}</span><span class="bl"> ${this.esc(b.label)}</span></button>`).join("");
        app.innerHTML=`
            <div id="tbr"><button class="tb-new" id="tb-new" title="New tab">+</button></div>
            <header>
                <div class="hl">
                    <button class="mbtn" id="mbtn" aria-label="Menu"><span></span><span></span><span></span></button>
                    <div class="brand" id="brand">${this.esc(SITE_NAME)}</div>
                </div>
                <div class="sw">${hbHTML}<input type="text" class="sbar" id="sbar" placeholder="     Search Games"><button class="fvbtn" id="fvbtn" title="Favorites">★</button></div>
            </header>
            <div id="grid"></div>`;
        document.body.appendChild(app);

        // Backdrop & Side Menu
        const bd=document.createElement("div"); bd.id="bd"; document.body.appendChild(bd);
        const panel=document.createElement("div"); panel.id="panel";
        panel.innerHTML=`<div class="ph"><div class="pe">OS System Panel</div><div class="pb">${this.esc(SITE_NAME)}</div></div>
            <div class="pbody">${MENU_ITEMS.map(m=>m.action==="separator"?`<div class="mdiv"></div>`:`<div class="mi" data-action="${m.action}" ${m.newTab?'data-nt="1"':''}><span class="miw">${m.icon}</span><span class="mil">${this.esc(m.label)}</span></div>`).join("")}</div>
            <div class="pft">${this.esc(SITE_TAGLINE)}</div>`;
        document.body.appendChild(panel);

        // Bottom Dock Nav Bar
        const bnav=document.createElement("div"); bnav.id="bnav";
        bnav.innerHTML=BOTTOM_NAV.filter(t=>!t.hidden).map(t=>`<button class="ntab${t.action==="home"?" on":""}" id="${t.id}" data-action="${t.action}"><span class="ni">${t.icon}</span><span>${this.esc(t.label)}</span></button>`).join("");
        document.body.appendChild(bnav);

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

        this.renderCards();
        this.tabNew("Home","home");
    },

    // ── CARDS & FILTERING ───────────────────────────────────────
    renderCards(){
        const grid=document.getElementById("grid"); if(!grid) return;
        grid.innerHTML = "";
        this.cards=[];

        const frag = document.createDocumentFragment();

        GAMES.forEach((item)=>{
            const descText = item.desc || "";
            const card=document.createElement("div");
            card.className=`card${this.favorites.includes(item.title)?" fav":""}`;
            card.innerHTML=`
                <div>
                    <h3>${this.esc(item.title)}</h3>
                    <p>${this.esc(descText)}</p>
                </div>
                <span class="fvs">★</span>
                ${item.newTab?'<span class="ntb">New Tab</span>':''}`;
            
            card.addEventListener("click", ()=>this.launch(item));
            card.addEventListener("contextmenu", e=>{
                e.preventDefault(); e.stopPropagation();
                this.showCtx(e.clientX, e.clientY, item, card);
            });

            frag.appendChild(card);
            this.cards.push({el:card, title:item.title, str:`${(item.title||"").toLowerCase()} ${descText.toLowerCase()}`});
        });

        grid.appendChild(frag);

        if(!this.isLowSpec) {
            grid.addEventListener("pointermove", e => {
                const card = e.target.closest(".card");
                if(card) {
                    const r = card.getBoundingClientRect();
                    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    card.style.setProperty("--my", `${e.clientY - r.top}px`);
                }
            }, {passive: true});
        }

        this.filter();
    },

    filter(){
        for(let i=0; i<this.cards.length; i++){
            const c = this.cards[i];
            const ok=(!this.onlyFavs||this.favorites.includes(c.title))&&(!this.searchQuery||c.str.includes(this.searchQuery));
            c.el.classList.toggle("hidden",!ok);
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
        this._tabs.forEach(t=>{
            const el=document.createElement("button");
            el.className=`tbt${t.active?" on":""}`; el.dataset.id=t.id;
            el.innerHTML=`<span class="tb-ttl">${this.esc(t.title)}</span><span class="tb-x" data-close="${t.id}">✕</span>`;
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
        document.getElementById("anime-panel")?.classList.toggle("on", action==="anime");
        document.getElementById("yt-panel")?.classList.toggle("on", action==="youtube");
        document.getElementById("ai-panel")?.classList.toggle("on", action==="ai");
        
        const theater = document.getElementById("theater");
        const isGame = action === "game" && tabObj;
        
        theater.classList.toggle("on", isGame);
        document.body.classList.toggle("in-game", isGame);

        if (isGame) {
            document.getElementById("t-ttl").innerText = tabObj.title;
            this._theaterItem = tabObj.gameItem;
            const dl = document.getElementById("t-dl");
            if (dl) dl.style.display = tabObj.gameItem && tabObj.gameItem.download !== false ? "" : "none";

            document.querySelectorAll(".gframe-instance").forEach(f => {
                f.classList.toggle("active", f.id === `gframe-${tabObj.id}`);
            });
        } else {
            this._theaterItem = null;
        }

        if(action==="anime"&&!this._animeLoaded) this.animeHome();
        if(action==="youtube"&&!this._ytLoaded) this.ytHome();
        if(action==="ai"&&!this._aiLoaded) this.aiInit();
        
        if(action==="favorites"){ 
            this.onlyFavs=true; 
            document.getElementById("fvbtn")?.classList.add("on"); 
            this.filter(); 
        } else {
            if(this.onlyFavs){
                this.onlyFavs=false;
                document.getElementById("fvbtn")?.classList.remove("on");
                this.filter();
            }
        }
    },

    // ── GAME LAUNCHING & RELIABLE IFRAME ENGINE ─────────────────
    async launch(item){
        if(item.newTab){ this.confirm(item.title,"⚡",()=>this.openRealTab(item.url,item.title)); return; }

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
        frame.setAttribute("allow", "fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads; allow-storage-access-by-user-activation");
        frame.setAttribute("allowfullscreen", "true");

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
                    const baseDir = url.substring(0, url.lastIndexOf('/') + 1);
                    html = `<base href="${baseDir}">${html}`;
                    w.document.open();
                    w.document.write(html);
                    w.document.close();
                    return;
                }
            } catch(e) {}
        }
        
        w.document.write(`<!DOCTYPE html><html><head><title>${this.esc(title)}</title><style>html,body,iframe{width:100%;height:100%;margin:0;padding:0;border:none;background:#000;}</style></head><body><iframe src="${this.esc(url)}" allow="fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads"></iframe></body></html>`);
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
    dlItem(item){
        fetch(item.url).then(r=>{ if(!r.ok) throw 0; return r.blob(); })
        .then(blob => {
            const u = URL.createObjectURL(blob), ext = item.url.includes(".html") ? ".html" : ".zip";
            const a = Object.assign(document.createElement("a"), {href:u, download:item.title.replace(/\s+/g,"_")+ext, style:"display:none"});
            document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u);
        }).catch(() => window.open(item.url,"_blank"));
    },
    toggleFav(title,cardEl){
        const idx=this.favorites.indexOf(title);
        if(idx>-1){ this.favorites.splice(idx,1); cardEl.classList.remove("fav"); }
        else{ this.favorites.push(title); cardEl.classList.add("fav"); }
        try{ localStorage.setItem("ng_f",JSON.stringify(this.favorites)); }catch(e){}
        this.filter(); this.hideCtx();
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
        if(!action) return;
        const run=()=>{
            if(action==="reload")         { this.closePanel(); location.reload(); }
            else if(action==="cloak")     { this.closePanel(); this.cloakSite(); }
            else if(action==="home")      { this.tabUpdateActive("Home","home"); }
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
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
            if (!res.ok) throw new Error("Failed to query models endpoint");
            const data = await res.json();
            
            if (data.models && Array.isArray(data.models)) {
                this._aiModels = data.models.filter(m => {
                    const supportsGen = m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent");
                    if (!supportsGen) return false;

                    const id = (m.name || "").toLowerCase();
                    const disp = (m.displayName || "").toLowerCase();

                    const isPro = id.includes("pro") || disp.includes("pro");
                    const isNano = id.includes("nano") || disp.includes("nano");
                    const isBanna = id.includes("banna") || disp.includes("banna") || id.includes("banana") || disp.includes("banana");
                    const is25 = id.includes("2.5") || disp.includes("2.5");

                    return !(isPro || isNano || isBanna || is25);
                }).map(m => {
                    const cleanId = m.name.replace(/^models\//, "");
                    return { id: cleanId, name: m.displayName || cleanId };
                });
            }
        } catch(e) {
            console.warn("Could not fetch Gemini models dynamically, using fallback list:", e);
        }

        if (!this._aiModels || this._aiModels.length === 0) {
            this._aiModels = [
                { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash" },
                { id: "gemini-1.5-flash-8b", name: "Gemini 1.5 Flash 8B" }
            ];
        }

        if (!this._selectedModel || !this._aiModels.some(m => m.id === this._selectedModel)) {
            this._selectedModel = this._aiModels[0].id;
        }

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

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this._selectedModel}:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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

    // ── MULTI-PROVIDER YOUTUBE ENGINE ─────────────────────────────
    async _ytFetch(endpoint) {
        for (const base of PIPED_EMBED_INSTANCES) {
            try {
                const res = await fetch(`${base}/api/v1${endpoint}`);
                if (res.ok) {
                    currentYtInstance = base;
                    return await res.json();
                }
            } catch(e) {}
        }
        throw new Error("All YouTube providers failed.");
    },

    async ytHome(){
        this._ytLoaded=true;
        const body=document.getElementById("yp-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        try {
            const videos = await this._ytFetch(`/trending`);
            this._renderYtGrid(videos, body, "Trending Stream Feed");
        } catch(e) {
            this.ytSearch("gaming trailers");
        }
    },

    async ytSearch(q){
        if(!q.trim()){ this.ytHome(); return; }
        const body=document.getElementById("yp-body"); body.innerHTML=`<div class="fp-spin"></div>`;
        try {
            const videos = await this._ytFetch(`/search?q=${encodeURIComponent(q)}&type=video`);
            this._renderYtGrid(videos, body, `Search for "${q}"`);
        } catch(e) {
            body.innerHTML=`<div class="fp-msg">YouTube search unavailable. Please try again shortly.</div>`;
        }
    },

    _renderYtGrid(videos, body, sectionTitle){
        if(!videos || !videos.length){ body.innerHTML=`<div class="fp-msg">No videos found.</div>`; return; }
        let h=`<div class="fp-sec"><div class="fp-sttl">${this.esc(sectionTitle)}</div><div class="fp-grid">`;
        videos.forEach(v=>{
            if(!v.videoId) return;
            const thumb = v.videoThumbnails ? (v.videoThumbnails.find(t=>t.quality==="medium")||v.videoThumbnails[0])?.url : `https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`;
            const views = v.viewCount ? Number(v.viewCount).toLocaleString() + " views" : "";
            const meta = [v.author, views].filter(Boolean).join(" · ");
            h+=`<div class="acd ytc" data-vid="${v.videoId}" data-title="${this.esc(v.title||"")}">
                <img src="${this.esc(thumb)}" alt="${this.esc(v.title)}" loading="lazy">
                <div class="acd-i"><div class="acd-t">${this.esc(v.title)}</div><div class="acd-m">${this.esc(meta)}</div></div></div>`;
        });
        h+=`</div></div>`; body.innerHTML=h;
        body.querySelectorAll(".acd[data-vid]").forEach(el=>
            el.addEventListener("click",()=>this.ytPlay(el.dataset.vid, el.dataset.title))
        );
    },

    ytPlay(videoId, title){
        const embedUrl = `${currentYtInstance}/embed/${videoId}?autoplay=1`;
        const item = { title: title || "YouTube Video", url: embedUrl, newTab: false, download: false };
        this.launch(item);
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
        iframe.allow = "fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads; allow-storage-access-by-user-activation";
        
        win.document.body.appendChild(iframe);
        await this.attachHtmlToIframe(iframe, gameItem.url);
        this.hideCtx();
    },

    cloakSite(){
        const win = window.open("about:blank", "_blank");
        if (!win) { alert("Popup blocked! Allow popups to cloak."); return; }
        win.document.title = CLOAK_TITLE;
        
        const link = win.document.createElement("link");
        link.rel = "icon"; link.type = "image/png"; link.href = CLOAK_ICON;
        win.document.head.appendChild(link);

        win.document.body.style.cssText = "margin:0;height:100vh;overflow:hidden;background:#03040a;";
        const iframe = win.document.createElement("iframe");
        iframe.style.cssText = "border:none;width:100%;height:100%;display:block;";
        iframe.allow = "fullscreen; autoplay; allow-forms; allow-pointer-lock; allow-same-origin; allow-scripts; allow-modals; allow-downloads";
        iframe.src = window.location.href;
        
        win.document.body.appendChild(iframe);
        this.closePanel();
    },

    // ── MAIN EVENT BINDINGS ─────────────────────────────────────
    bindEvents(){
        const $=id=>document.getElementById(id), $$=s=>document.querySelector(s);

        // Lock handler
        $$(".lk-in")?.addEventListener("input",e=>{
            if(e.target.value===LOCK_PIN){
                const l=$("lock"); l.style.opacity="0"; l.style.pointerEvents="none";
                setTimeout(()=>l.remove(),400);
                $("app").classList.add("on");
            }
        });

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
        $("tb-new")?.addEventListener("click",()=>this.tabNew("Home","home"));

        // Bottom Navigation Tabs
        document.querySelectorAll(".ntab").forEach(t=>t.addEventListener("click",()=>{
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n===t));
            this.dispatch(t.dataset.action);
        }));

        // Theater Game Controls
        $("t-fs")?.addEventListener("click",()=>{
            const activeFrame = document.querySelector(".gframe-instance.active");
            const target = activeFrame || document.getElementById("gframe-workspace");
            if (target) {
                if (target.requestFullscreen) target.requestFullscreen();
                else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
            }
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
            this._setView("home");
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
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
                this._setView("home");
                document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
            }
        });

        let ast;
        $("ap-srch")?.addEventListener("input",e=>{ clearTimeout(ast); ast=setTimeout(()=>this.animeSearch(e.target.value),350); });

        // YouTube Panel Events
        $("yp-back")?.addEventListener("click",()=>{
            this._setView("home");
            document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
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
                    this._setView("home"); 
                    document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
                }
                else if($("anime-panel").classList.contains("on")){ 
                    if(this._animeState === "details"){
                        const q = $("ap-srch")?.value.trim();
                        if(q) this.animeSearch(q);
                        else this.animeHome();
                    } else {
                        this._setView("home"); 
                        document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home"));
                    }
                }
                else if($("yt-panel").classList.contains("on")){ this._setView("home"); document.querySelectorAll(".ntab").forEach(n=>n.classList.toggle("on",n.dataset.action==="home")); }
            }
        },{passive:true});
    },

    // ── SYSTEM BOOT ─────────────────────────────────────────────
    boot(){
        this.detectHardware();
        this.setFavicon();
        this.css();
        this.buildDOM();
        this.dots();
        this.bindEvents();
    }
};

nova.boot();
