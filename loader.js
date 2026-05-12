// 1. YOUR CSS (STYLES)
const css = `
    body { background-color: #050505; color: #fff; font-family: 'Inter', sans-serif; }
    .ui-btn { background: #111; border: 2px solid #222; color: #fff !important; padding: 10px 22px; border-radius: 99px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: 0.2s; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
    .ui-btn:hover { background: #fff; color: #000 !important; border-color: #fff; }
    .search-bar { background: #111; border: 2px solid #222; color: #fff !important; padding: 14px 28px; border-radius: 99px; width: 100%; max-width: 450px; outline: none; font-weight: 700; text-align: center; font-size: 14px; }
    .game-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; width: 100%; max-width: 1000px; margin: 0 auto; }
    .game-card { aspect-ratio: 1 / 1; background: #0f0f0f; border: 2px solid #1a1a1a; border-radius: 24px; transition: 0.3s; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }
    .game-card:hover { border-color: #fff; transform: translateY(-5px); }
    iframe { background: #000; width: 100%; height: 88vh; border-radius: 28px; border: 2px solid #222; }
    ::-webkit-scrollbar { display: none; }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

// 2. YOUR EXACT HTML & GAME DATA
const games = [
    { name: "NikeHub", icon: "🚀", url: "https://pages.dev" },
    { name: "Snow Rider", icon: "🎯", url: "https://hoodamath.com" },
    { 
        name: "Cookie Clicker", 
        icon: "🧬", 
        content: `<base href="https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html">
<html>
<head>
<script>
	var VERSION=2.058; var BETA=0; var SAVESUFFIX='';
	var App=typeof App==='undefined'?0:App; var PRESETMODS=[];
	var LOCAL=true;
</script>
<style type="text/css">@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/latin/900/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}</style>
<title>Cookie Clicker</title>
<meta name="viewport" content="width=900, initial-scale=1">
<script src="base64.js"></script>
<link href="style.css?v=10c" rel="stylesheet" type="text/css">
<script src="main2.js?v=13g"></script>
</head>
<body style="margin:0; background:#000;">
<div id="wrapper">
	<div id="topBar" style="background:#111; color:#fff; display:flex; gap:15px; padding:5px; font-size:12px;">
		<div>Cookie Clicker™ © Orteil, 2026</div>
	</div>
	<div id="game"></div>
</div>
</body>
</html>` // Fixed missing backtick here
    }
];

// 3. THE FUNCTIONS
window.renderGames = function(list) {
    const grid = document.getElementById('game-grid');
    if (!grid) return;
    grid.innerHTML = list.map((game, index) => {
        return `
            <div class="game-card" onclick="launchGame(${index})">
                <span class="text-4xl mb-2">${game.icon}</span>
                <span class="text-[10px] font-black uppercase tracking-widest text-zinc-500">${game.name}</span>
            </div>
        `;
    }).join('');
};

window.launchGame = function(index) {
    const game = games[index];
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) searchContainer.style.display = 'none';
    
    const frameSource = game.content 
        ? `srcdoc="${game.content.replace(/"/g, '&quot;')}"` 
        : `src="${game.url}"`;

    document.getElementById('content-area').innerHTML = `
        <div style="text-align:center">
            <div class="flex justify-between items-center mb-6">
                <button onclick="location.reload()" class="ui-btn">⬅ Back</button>
                <span class="font-black uppercase tracking-widest text-zinc-600">${game.name}</span>
            </div>
            <iframe ${frameSource} allowfullscreen></iframe>
        </div>
    `;
};

window.filterGames = function() {
    const term = document.getElementById('search').value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(term));
    window.renderGames(filtered);
};

// 4. START SITE
window.addEventListener('DOMContentLoaded', () => {
    window.renderGames(games);
});
