// 1. INJECT MINIFIED CSS IMMEDIATELY
const styleSheet = document.createElement("style");
styleSheet.innerText = `body{background:#050505;color:#fff;font-family:sans-serif}.ui-btn{background:#111;border:2px solid #222;padding:10px 22px;border-radius:99px;font-weight:800;text-transform:uppercase;transition:0.2s;cursor:pointer}.search-bar{background:#111;border:2px solid #222;padding:14px 28px;border-radius:99px;width:100%;max-width:450px;text-align:center}.game-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:20px;max-width:1000px;margin:0 auto}.game-card{aspect-ratio:1/1;background:#0f0f0f;border:2px solid #1a1a1a;border-radius:24px;transition:0.3s;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.game-card:hover{border-color:#fff;transform:translateY(-5px)}iframe{background:#000;width:100%;height:88vh;border-radius:28px;border:2px solid #222}`;
document.head.appendChild(styleSheet);

// 2. DATA WITH DEFERRED LOADING
const games = [
    { name: "NikeHub", icon: "🚀", url: "https://nikehub.pages.dev/a129x" },
    { name: "Snow Rider", icon: "🎯", url: "https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0" },
    { name: "Puppet Hockey", icon: "🎯", url: "https://www.mathplayground.com/pg_puppet_hockey.html" },
    { name: "Google Doodles", icon: "🎯", url: "https://doodles.google/search/?form_tags=interactive%20game" },
    { name: "Cookie Clicker NOT FIXED YET", icon: "🧬", type: "cc" }
];

// 3. OPTIMIZED FUNCTIONS
window.renderGames = (list = games) => {
    const grid = document.getElementById('game-grid');
    if (!grid) return;
    grid.innerHTML = list.map((g, i) => `
        <div class="game-card" onclick="launchGame(${i})">
            <span style="font-size:40px">${g.icon}</span>
            <span style="font-size:10px;font-weight:800;color:#555;text-transform:uppercase">${g.name}</span>
        </div>`).join('');
};

window.launchGame = (i) => {
    const g = games[i];
    document.getElementById('search-container').style.display = 'none';
    let src = g.type === "cc" ? getCC() : `src="${g.url}"`;
    document.getElementById('content-area').innerHTML = `
        <button onclick="location.reload()" class="ui-btn" style="margin-bottom:15px">⬅ Back</button>
        <iframe ${src} allowfullscreen></iframe>`;
};

// FULL COOKIE CLICKER BUILDER (Only runs on click)
function getCC() {
    const html = `<base href="https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html"><head><script>var VERSION=2.058,LOCAL=1;</script><link href="style.css" rel="stylesheet"><script src="base64.js"></script><script src="main2.js"></script></head><body style="margin:0;background:#000;"><div id="game"></div></body>`;
    return `srcdoc="${html.replace(/"/g, '&quot;')}"`;
}

window.filterGames = () => {
    const term = document.getElementById('search').value.toLowerCase();
    renderGames(games.filter(g => g.name.toLowerCase().includes(term)));
};

// 4. FAST EXECUTION
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderGames);
} else {
    renderGames();
}
