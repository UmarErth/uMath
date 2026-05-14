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
        padding: 20px;
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

// 2. FIXED DATA ARRAY WITH ACCURATE EMBED FLAGS
const games = [
    { name: "NikeHub", icon: "🚀", url: "https://nikehub.pages.dev/a129x", secure: true },
    { name: "Snow Rider", icon: "🎯", url: "https://www.mathplayground.com/pg_puppet_hockey.html", secure: true },
    { name: "Puppet Hockey", icon: "🎯", url: "https://mathplayground.com", secure: true },
    { name: "Google Doodles", icon: "🎯", url: "https://doodles.google/search/?form_tags=interactive%20game", secure: true },
    { name: "Vapor v4", icon: "🌌", url: "https://100.vaporized.help", secure: false }, // Vapor requires sandbox to be completely disabled
    { name: "Cookie Clicker NOT FIXED YET", icon: "🧬", type: "cc", secure: true }
];

// 3. CORE FUNCTIONS (Fixed DOM replacement patterns)
window.renderGames = (list = games) => {
    // If layout has been altered, restore the base structures automatically
    let grid = document.getElementById('game-grid');
    if (!grid) {
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.innerHTML = `<div id="game-grid" class="game-grid"></div>`;
            grid = document.getElementById('game-grid');
        }
    }
    if (!grid) return;
    
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) searchContainer.style.display = 'block';
    
    grid.innerHTML = list.map((g, i) => `
        <div class="game-card" onclick="launchGame(${i})" style="animation-delay: ${i * 0.04}s">
            <span style="font-size:40px; margin-bottom: 10px;">${g.icon}</span>
            <span style="font-size:10px; font-weight:800; color:#aaa; text-transform:uppercase; tracking-widest: 0.15em;">${g.name}</span>
        </div>`).join('');
};

window.goBackHome = () => {
    window.renderGames();
};

window.launchGame = (i) => {
    const g = games[i];
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) searchContainer.style.display = 'none';
    
    let src = g.type === "cc" ? getCC() : `src="${g.url}"`;
    
    // FIX: Conditionally apply iframe isolation sandbox tags based on security properties
    let sandboxAttr = g.secure ? `sandbox="allow-scripts allow-forms allow-same-origin allow-downloads"` : '';
    
    document.getElementById('content-area').innerHTML = `
        <div class="frame-container">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <button onclick="window.goBackHome()" class="ui-btn">⬅ Back</button>
                <span style="font-weight:900; letter-spacing:4px; color:#555; font-size:11px; text-transform:uppercase;">Playing: ${g.name}</span>
            </div>
            <iframe ${src} ${sandboxAttr} allowfullscreen></iframe>
        </div>`;
};

// RESTORED COMPACT COOKIE CLICKER HTML GENERATOR
function getCC() {
    const html = `<base href="https://jsdelivr.net"><head><script>var VERSION=2.058,LOCAL=1;</script><link href="style.css" rel="stylesheet"><script src="base64.js"></script><script src="main2.js"></script></head><body style="margin:0;background:#000;"><div id="game"></div></body>`;
    return `srcdoc="${html.replace(/"/g, '&quot;')}"`;
}

window.filterGames = () => {
    const term = document.getElementById('search').value.toLowerCase();
    renderGames(games.filter(g => g.name.toLowerCase().includes(term)));
};

// 4. INITIALIZER
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.renderGames());
} else {
    window.renderGames();
}
