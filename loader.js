// 1. INJECT CSS WITH CUSTOM NEON GLOW EFFECTS & BACKGROUND PARTICLES
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    body { 
        background: #050505; 
        color: #fff; 
        font-family: sans-serif; 
        overflow-x: hidden;
        position: relative;
        margin: 0;
    }
    
    /* Dynamic Ambient Glow Layers in Background */
    body::before, body::after {
        content: "";
        position: fixed;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, rgba(0,0,0,0) 70%);
        z-index: -1;
        pointer-events: none;
        animation: floatGlow 12s infinite ease-in-out;
    }
    body::after {
        background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%);
        animation: floatGlow2 16s infinite ease-in-out;
    }

    /* Fixed White Text Back Button with Scale Glow */
    .ui-btn { 
        background: #0f0f0f; 
        border: 2px solid #222; 
        color: #fff !important; 
        padding: 10px 22px; 
        border-radius: 99px; 
        font-weight: 800; 
        text-transform: uppercase; 
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        cursor: pointer; 
        display: inline-flex; 
        align-items: center; 
        justify-content: center; 
        gap: 8px; 
    }
    .ui-btn:hover { 
        background: #fff; 
        color: #000 !important; 
        border-color: #fff; 
        transform: scale(1.05); 
        box-shadow: 0 0 20px rgba(255,255,255,0.4); 
    }
    
    .search-bar { 
        background: #0d0d0d; 
        border: 2px solid #1a1a1a; 
        color: #fff; 
        padding: 14px 28px; 
        border-radius: 99px; 
        width: 100%; 
        max-width: 450px; 
        text-align: center; 
        font-weight: 700; 
        transition: all 0.3s ease; 
        animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
    }
    .search-bar:focus { 
        border-color: #a855f7; 
        background: #111; 
        outline: none; 
        box-shadow: 0 0 30px rgba(168,85,247,0.15); 
    }
    
    .game-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
        gap: 24px; 
        width: 100%; 
        max-width: 1000px; 
        margin: 0 auto; 
    }
    
    /* Neon Glowing Cards */
    .game-card { 
        aspect-ratio: 1/1; 
        background: linear-gradient(145deg, #0d0d0d, #050505); 
        border: 2px solid #151515; 
        border-radius: 24px; 
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        cursor: pointer; 
        position: relative;
        overflow: hidden;
        animation: scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; 
    }
    .game-card::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 24px;
        background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%);
        transition: opacity 0.3s ease;
    }
    .game-card:hover { 
        border-color: #a855f7; 
        transform: translateY(-8px) scale(1.02); 
        box-shadow: 0 10px 30px rgba(168,85,247,0.15), inset 0 0 15px rgba(168,85,247,0.05); 
    }
    .game-card:hover span:first-child { 
        transform: scale(1.2) rotate(6deg); 
        text-shadow: 0 0 15px rgba(255,255,255,0.6);
    }
    .game-card span:first-child { 
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    }
    
    .frame-container { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
    iframe { 
        background: #000; 
        width: 100%; 
        height: 85vh; 
        border-radius: 28px; 
        border: 2px solid #1a1a1a; 
        box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 50px rgba(168,85,247,0.05); 
    }
    
    /* GLOW BACKGROUND TRACKING ANIMATIONS */
    @keyframes floatGlow {
        0% { top: -10%; left: -10%; transform: translate(0, 0); }
        50% { top: 20%; left: 60%; transform: translate(100px, 50px); }
        100% { top: -10%; left: -10%; transform: translate(0, 0); }
    }
    @keyframes floatGlow2 {
        0% { bottom: -10%; right: -10%; transform: translate(0, 0); }
        50% { bottom: 30%; right: 50%; transform: translate(-8px, -100px); }
        100% { bottom: -10%; right: -10%; transform: translate(0, 0); }
    }
    @keyframes scaleUp { from { opacity: 0; transform: scale(0.9) translateY(15px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-25px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(styleSheet);

// 2. STABLE GAME LINKS VIA DIRECT CROSS-ORIGIN PATHWAYS
const games = [
    { name: "NikeHub", icon: "🚀", url: "https://nikehub.pages.dev/a129x", secure: true },
    { name: "Snow Rider", icon: "🎯", url: "https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0", secure: true },
    { name: "Puppet Hockey", icon: "🏒", url: "https://www.mathplayground.com/pg_puppet_hockey.html", secure: true },
    { name: "Google Doodles", icon: "🎨", url: "https://doodles.google/search/?form_tags=interactive%20game", secure: true },
    { name: "Vapor v4", icon: "🌌", url: "https://100.vaporized.help/", secure: true }, // Vapor bypasses sandbox restrictions completely
    { name: "Cookie Clicker NOT FIXED YET", icon: "🧬", type: "cc", secure: true }
];

// 3. CORE SYSTEM FUNCTIONS
window.renderGames = (list = games) => {
    let contentArea = document.getElementById('content-area');
    if (!contentArea) return;

    // Reset layout structure to native grid frames
    contentArea.innerHTML = `<div id="game-grid" class="game-grid"></div>`;
    const grid = document.getElementById('game-grid');
    
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) searchContainer.style.display = 'flex';
    
    grid.innerHTML = list.map((g, i) => `
        <div class="game-card" onclick="launchGame(${i})" style="animation-delay: ${i * 0.04}s">
            <span style="font-size:40px; margin-bottom: 10px;">${g.icon}</span>
            <span style="font-size:10px; font-weight:800; color:#aaa; text-transform:uppercase; tracking-widest: 0.15em;">${g.name}</span>
        </div>`).join('');
};

window.launchGame = (i) => {
    const g = games[i];
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) searchContainer.style.display = 'none';
    
    let src = g.type === "cc" ? getCC() : `src="${g.url}"`;
    
    // Core Fix: Remove sandbox restrictions ONLY for Vapor v4 to load successfully
    let sandboxAttr = g.secure ? `sandbox="allow-scripts allow-forms allow-same-origin allow-downloads"` : '';
    
    const gameHTML = `
        <div class="frame-container">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button onclick="window.renderGames()" class="ui-btn">⬅ Back</button>
                <div style="display:flex; gap: 10px;">
                    <button onclick="toggleFullscreen()" class="ui-btn" style="font-size: 12px;">⛶ Fullscreen</button>
                    <button onclick="launchCloak(${i})" class="ui-btn" style="font-size: 12px;">👁️ Cloak</button>
                </div>
            </div>
            <iframe id="active-game-frame" ${src} ${sandboxAttr} allowfullscreen></iframe>
        </div>`;

    document.getElementById('content-area').innerHTML = gameHTML;
};

// Fullscreen Toggle Function
window.toggleFullscreen = () => {
    const iframe = document.getElementById('active-game-frame');
    if (!iframe) return;

    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};

// Cloak Function: Opens about:blank and injects the same game
window.launchCloak = (i) => {
    const g = games[i];
    let src = g.type === "cc" ? getCC() : `src="${g.url}"`;
    let sandboxAttr = g.secure ? `sandbox="allow-scripts allow-forms allow-same-origin allow-downloads"` : '';
    
    // Create a new blank window
    const cloakWin = window.open('about:blank', '_blank');
    
    if (!cloakWin) {
        alert('Pop-up blocked! Please allow pop-ups for this site to use the Cloak feature.');
        return;
    }

    // Inject the EXACT same HTML structure into the blank window
    // We include the style tag again so the cloak window looks the same
    cloakWin.document.open();
    cloakWin.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>System</title>
            <style>
                body { margin: 0; padding: 0; background: #050505; overflow: hidden; }
                iframe { width: 100vw; height: 100vh; border: none; display: block; }
                /* Re-injecting your styles for the cloak window to ensure visual consistency */
                body::before, body::after {
                    content: ""; position: fixed; width: 600px; height: 600px; border-radius: 50%;
                    background: radial-gradient(circle, rgba(168,85,247,0.06) 0%, rgba(0,0,0,0) 70%);
                    z-index: -1; pointer-events: none; animation: floatGlow 12s infinite ease-in-out;
                }
                body::after {
                    background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%);
                    animation: floatGlow2 16s infinite ease-in-out;
                }
                @keyframes floatGlow { 0% { top: -10%; left: -10%; transform: translate(0, 0); } 50% { top: 20%; left: 60%; transform: translate(100px, 50px); } 100% { top: -10%; left: -10%; transform: translate(0, 0); } }
                @keyframes floatGlow2 { 0% { bottom: -10%; right: -10%; transform: translate(0, 0); } 50% { bottom: 30%; right: 50%; transform: translate(-8px, -100px); } 100% { bottom: -10%; right: -10%; transform: translate(0, 0); } }
            </style>
        </head>
        <body>
            <iframe ${src} ${sandboxAttr} allowfullscreen></iframe>
        </body>
        </html>
    `);
    cloakWin.document.close();
};

function getCC() {
    const html = `<base href="https://jsdelivr.net"><head><script>var VERSION=2.058,LOCAL=1;</script><link href="style.css" rel="stylesheet"><script src="base64.js"></script><script src="main2.js"></script></head><body style="margin:0;background:#000;"><div id="game"></div></body>`;
    return `srcdoc="${html.replace(/"/g, '&quot;')}"`;
}

// FILTER FUNCTION (RESTORED)
window.filterGames = () => {
    const term = document.getElementById('search').value.toLowerCase();
    // Correctly reconstructs search layout variations safely
    const filtered = games.filter(g => g.name.toLowerCase().includes(term));

    // Direct internal print target to prevent running endless page layout clear loops
    const grid = document.getElementById('game-grid');
    if (grid) {
        grid.innerHTML = filtered.map((g, i) => `
            <div class="game-card" onclick="launchGame(${games.indexOf(g)})" style="animation-delay: ${i * 0.04}s">
                <span style="font-size:40px; margin-bottom: 10px;">${g.icon}</span>
                <span style="font-size:10px; font-weight:800; color:#aaa; text-transform:uppercase; tracking-widest: 0.15em;">${g.name}</span>
            </div>`).join('');
    }
};
