/**
 * Nova Gaming - Ultimate Kinetic Frosted Engine [Premium Card Edition]
 * Features: Fixed Priority Form Launcher, CDN Text-to-HTML Parser Module, 
 *           Interactive 3D Parallax Glass Cards, Custom Context Menu, Favorites Layer
 */

const supreme_engine = {
    settings: {
        unlockcode: "1234",
        panicurl: "https://google.com",
        cloakicon: "https://gstatic.com",
        dotcolor: "rgba(255, 255, 255, 0.12)",
        dotspacing: 35,
        itemsPerLoad: 30,
        // Target Form Link Isolated Fixed
        requestFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScUplsBOvmVzOcef_Xh9p9XD4sYRlqvYJBzZBG2WSK6JS-MEA/viewform?usp=dialog"
    },

    // ==========================================
    // 1. CONTENT REGISTRY
    // ==========================================
    registry: [
        { title: "Cookie Clicker", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Cookie_Clicker.html", desc: "Idle baking simulator." },
        { title: "Brotato", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Brotato.html", desc: "Kill weird looking creatures" },
        { title: "Minecraft", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/EaglercraftX_1.8_u50_Offline_Signed.html", desc: "Classic sandbox world." },
        { title: "Baldi's Basics Plus", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Baldi's-Basics-Plus.html", desc: "Escape from Baldi." }, 
        { title: "Bank Robbery 3", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Bank-Robbery-3.html", desc: "Rob banks." },
        { title: "Buckshot Roulette", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Buckshot%20Roulette.html", desc: "Take your chance of getting killed." },        
        { title: "BuildNow", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/BuildNow.html", desc: "Ripoff of 1v1.LoL." },
        { title: "Five Nights at Epstein's", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Five-Nights-at-Epstein's.html", desc: "Survive 5 Nights with Epstein without getting caught." },
        { title: "GTA Vice City", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/GTA__Vice_City.html", desc: "It's GTA bro." },
        { title: "Git-Hub Search", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Git-Hub_Search.html", desc: "Search Git-Hub" },
        { title: "Pizza Tower", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Pizza-Tower.html", desc: "IDK never played it before." },
        { title: "Subway Surfers", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Subway_Surfers.html", desc: "An addicting game about escaping a cop." },
        { title: "Temple Run 2", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Temple-Run-2.html", desc: "Escaping a temple?" },
        { title: "Snow Rider (Hooda Math)", url: "https://www.hoodamath.com/games/snowrider3d.html#gsc.tab=0", desc: "Ride in Snow!" },
        { title: "Puppet Hockey (MathPG)", url: "https://www.mathplayground.com/pg_puppet_hockey.html", desc: "Play Puppet Hockey against other countries!" },
        { title: "NikeHub", url: "https://nikehub.pages.dev/a129x", desc: "Another games hub." },
        { title: "Vapor V4", url: "https://100.vaporized.help", desc: "A hub of general entertainment." },
        { title: "Google Doodles", url: "https://doodles.google/search/?form_tags=interactive%20game", desc: "Google's own collection of games." },
        { title: "Friday Night Funkin", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin.html", desc: "A basic rhythm game about clicking notes." },
        { title: "Friday Night Funkin VS Hex", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__Vs._Hex.html", desc: "A mod of FNF that's called Hex." },
        { title: "Friday Night Funkin VS Whitty", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/Friday_Night_Funkin'__V.S._Whitty.html", desc: "A mod of FNF that's called Whitty." },
        { title: "1v1.lol", url: "https://cdn.jsdelivr.net/gh/UmarErth/uMath/1v1.LoL.html", desc: "Build and shoot combat." }
    ],


    cachedCards: [],
    renderedCount: 0,
    onlyShowFavorites: false,
    searchQuery: "",
    favorites: [],

    // ==========================================
    // 2. SUPREME CSS ARCHITECTURE
    // ==========================================
    injectstyles() {
        const style = document.createElement("style");
        style.innerText = `
            :root {
                --bg: #030303;
                --accent: #ff0055;
                --accent-glow: rgba(255, 0, 85, 0.4);
                --glass: rgba(255, 255, 255, 0.02);
                --glass-hover: rgba(255, 255, 255, 0.05);
                --border: rgba(255, 255, 255, 0.07);
                --blur: blur(25px);
                --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                --spring: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
            }

            body, html {
                margin: 0; padding: 0; width: 100%; height: 100%;
                background: var(--bg); color: #fff;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                overflow: hidden;
            }

            #canvas-dot { position: fixed; inset: 0; z-index: 1; pointer-events: none; }

            /* --- Lock Screen Overlay --- */
            #lock-screen {
                position: fixed; inset: 0; z-index: 9999;
                background: rgba(3, 3, 3, 0.88); backdrop-filter: var(--blur);
                display: flex; align-items: center; justify-content: center;
                transition: var(--transition);
            }
            .lock-container { text-align: center; }
            .lock-input {
                background: rgba(255,255,255,0.04); border: 1px solid var(--border);
                color: #fff; font-family: monospace;
                font-size: 2rem; text-align: center; padding: 12px 24px;
                border-radius: 14px; width: 160px; outline: none;
                transition: var(--spring); letter-spacing: 4px;
            }
            .lock-input:focus { border-color: var(--accent); box-shadow: 0 0 30px var(--accent-glow); transform: scale(1.05); }

            /* --- Main Shell Interface --- */
            #app-interface {
                position: relative; z-index: 10;
                width: 100vw; height: 100vh;
                display: flex; flex-direction: column;
                opacity: 0; transform: translateY(15px);
                transition: var(--spring); pointer-events: none;
                perspective: 1200px;
            }
            #app-interface.unlocked { opacity: 1; transform: translateY(0); pointer-events: auto; }

            header {
                display: flex; justify-content: space-between; align-items: center;
                padding: 20px 5%; backdrop-filter: var(--blur);
                border-bottom: 1px solid var(--border); background: var(--glass);
            }
            .brand {
                font-size: 1.4rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
                background: linear-gradient(45deg, #fff, rgba(255,255,255,0.4));
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                cursor: pointer;
            }
            
            .search-wrapper { display: flex; gap: 15px; align-items: center; }
            .search-bar {
                background: rgba(255,255,255,0.04); border: 1px solid var(--border);
                padding: 12px 24px; border-radius: 30px; color: #fff; width: 260px;
                transition: var(--transition); font-size: 0.9rem;
            }
            .search-bar:focus { width: 340px; background: rgba(255,255,255,0.08); outline: none; border-color: rgba(255,255,255,0.25); }

            .request-btn {
                background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); color: #ccc;
                padding: 10px 20px; border-radius: 20px; cursor: pointer; font-size: 0.85rem;
                font-weight: 600; transition: var(--transition);
            }
            .request-btn:hover { background: var(--glass-hover); color: #fff; border-color: rgba(255,255,255,0.2); }

            .fav-toggle-btn {
                background: var(--glass); border: 1px solid var(--border); color: #777;
                width: 45px; height: 45px; border-radius: 50%; cursor: pointer;
                font-size: 1.2rem; display: flex; align-items: center; justify-content: center;
                transition: var(--transition); padding: 0;
            }
            .fav-toggle-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }
            .fav-toggle-btn.active {
                border-color: #ffca28; color: #ffca28; background: rgba(255, 202, 40, 0.05);
                box-shadow: 0 0 15px rgba(255, 202, 40, 0.2);
            }

            /* --- Card Grid Layout --- */
            .grid-container {
                flex: 1; padding: 35px 5% 40px; overflow-y: auto;
                display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 30px; align-content: start;
                transform-style: preserve-3d;
            }

            /* --- CARDS DESIGN MATRIX --- */
            .card {
                background: var(--glass); border: 1px solid var(--border);
                backdrop-filter: var(--blur); border-radius: 20px; padding: 30px;
                cursor: pointer; position: relative; overflow: hidden;
                transition: transform 0.15s ease-out, border-color 0.3s, background-color 0.3s, box-shadow 0.3s;
                transform-style: preserve-3d; will-change: transform; display: block;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .card.hidden { display: none !important; }
            
            .card::before {
                content: ''; position: absolute; inset: 0;
                background: radial-gradient(circle 180px at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.06), transparent 100%);
                z-index: 2; pointer-events: none; opacity: 0; transition: opacity 0.3s;
            }
            .card:hover::before { opacity: 1; }
            .card:hover { background: var(--glass-hover); border-color: rgba(255,255,255,0.18); box-shadow: 0 25px 50px rgba(0,0,0,0.6); }

            .card h3 { margin: 0 0 10px 0; font-size: 1.35rem; font-weight: 700; transition: var(--transition); transform: translateZ(30px); }
            .card p { margin: 0; font-size: 0.9rem; color: #8a8a8a; line-height: 1.5; transform: translateZ(15px); transition: var(--transition); }
            .card .fav-star { position: absolute; bottom: 25px; right: 25px; font-size: 1.1rem; color: rgba(255, 255, 255, 0.1); transition: var(--transition); transform: translateZ(20px); }
            .card.is-favorite .fav-star { color: #ffca28; filter: drop-shadow(0 0 8px rgba(255, 202, 40, 0.5)); }
            .card:hover h3 { color: var(--accent); }
            .card:hover p { color: #bbb; }

            /* --- Custom Context Menu --- */
            #custom-context-menu {
                position: fixed; z-index: 10000; width: 180px;
                background: rgba(15, 15, 15, 0.85); backdrop-filter: blur(20px);
                border: 1px solid var(--border); border-radius: 12px;
                padding: 6px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.7);
                opacity: 0; transform: scale(0.95); transform-origin: top left;
                pointer-events: none; transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #custom-context-menu.active { opacity: 1; transform: scale(1); pointer-events: auto; }
            .context-item { padding: 10px 16px; font-size: 0.85rem; color: #ccc; cursor: pointer; transition: var(--transition); display: flex; align-items: center; gap: 8px; }
            .context-item:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }
            .context-item.accent-item:hover { color: var(--accent); }

            /* --- Theater View Overlay --- */
            #theater-overlay {
                position: fixed; inset: 0; z-index: 5000;
                background: rgba(3, 3, 3, 0.96); backdrop-filter: var(--blur);
                display: flex; flex-direction: column; opacity: 0; pointer-events: none; transition: var(--transition);
            }
            #theater-overlay.active { opacity: 1; pointer-events: auto; }
            .theater-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; border-bottom: 1px solid var(--border); }
            .theater-controls { display: flex; gap: 10px; }
            .action-btn { background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: #fff; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: 0.85rem; transition: var(--transition); }
            .action-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3); }
            .close-btn { background: var(--accent); border: none; color: white; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: var(--transition); }
            .close-btn:hover { background: #ff3377; box-shadow: 0 0 15px var(--accent-glow); }
            .iframe-container { flex: 1; width: 100%; height: 100%; }
            #game-frame { width: 100%; height: 100%; border: none; background: #000; }

            ::-webkit-scrollbar { width: 6px; height: 6px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
            ::-webkit-scrollbar-thumb:hover { background: var(--accent); }
        `;
        document.head.appendChild(style);
    },

    // ==========================================
    // 3. KINETIC MATRIX BACKGROUND
    // ==========================================
    initMatrix() {
        const canvas = document.createElement("canvas");
        canvas.id = "canvas-dot";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        let mouse = { x: -1000, y: -1000 };

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener("resize", resize);
        resize();
        window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = this.settings.dotcolor;
            const spacing = this.settings.dotspacing;

            for (let x = spacing / 2; x < canvas.width; x += spacing) {
                for (let y = spacing / 2; y < canvas.height; y += spacing) {
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    let rx = x, ry = y;

                    if (dist < 120) {
                        const force = (120 - dist) / 120;
                        rx -= (dx / dist) * force * 12;
                        ry -= (dy / dist) * force * 12;
                    }
                    ctx.beginPath(); ctx.arc(rx, ry, dist < 120 ? 1.8 : 1, 0, Math.PI * 2); ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        };
        draw();
    },

    // ==========================================
    // 4. ARCHITECTURE DOM BUILD
    // ==========================================
    buildDOM() {
        try {
            this.favorites = JSON.parse(localStorage.getItem("nova_favorites")) || [];
        } catch(e) {
            this.favorites = [];
        }

        const lockScreen = document.createElement("div");
        lockScreen.id = "lock-screen";
        lockScreen.innerHTML = `<div class="lock-container"><input type="password" class="lock-input" placeholder="••••" maxlength="4"></div>`;
        document.body.appendChild(lockScreen);

        const appInterface = document.createElement("div");
        appInterface.id = "app-interface";
        appInterface.innerHTML = `
            <header>
                <div class="brand" onclick="location.reload()">Nova Gaming</div>
                <div class="search-wrapper">
                    <button class="request-btn" id="request-game-btn">Request Unblocked Things</button>
                    <input type="text" class="search-bar" placeholder="Search games...">
                    <button class="fav-toggle-btn" id="fav-toggle" title="Filter Favorites">★</button>
                </div>
            </header>
            <div class="grid-container" id="card-grid"></div>
        `;
        document.body.appendChild(appInterface);

        const theater = document.createElement("div");
        theater.id = "theater-overlay";
        theater.innerHTML = `
            <div class="theater-header">
                <div class="brand" id="theater-title">Game Title</div>
                <div class="theater-controls">
                    <button class="action-btn" id="game-fullscreen">Fullscreen</button>
                    <button class="action-btn" id="game-cloak-tab">Tab Cloak</button>
                    <button class="close-btn" id="close-theater">Close Game</button>
                </div>
            </div>
            <div class="iframe-container" id="iframe-wrapper">
                <iframe id="game-frame" src="" sandbox="allow-scripts allow-same-origin allow-downloads allow-forms allow-pointer-lock allow-storage-api allow-modals" allowfullscreen></iframe>
            </div>
        `;
        document.body.appendChild(theater);

        const ctxMenu = document.createElement("div");
        ctxMenu.id = "custom-context-menu";
        document.body.appendChild(ctxMenu);

        this.loadNextBatch();
    },

    loadNextBatch() {
        const grid = document.getElementById("card-grid");
        if(!grid) return;
        
        const start = this.renderedCount;
        const end = Math.min(start + this.settings.itemsPerLoad, this.registry.length);

        if (start >= this.registry.length) return;

        for (let i = start; i < end; i++) {
            const item = this.registry[i];
            const isFav = this.favorites.includes(item.title);
            
            const card = document.createElement("div");
            card.className = `card ${isFav ? 'is-favorite' : ''}`;
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <span class="fav-star">★</span>
            `;
            
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;
                
                card.style.setProperty("--mx", `${x}px`);
                card.style.setProperty("--my", `${y}px`);

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((centerY - y) / centerY) * 12; 
                const rotateY = ((x - centerX) / centerX) * 12;

                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-4px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`;
            });

            card.addEventListener("click", () => this.launchGame(item.title, item.url));
            
            card.addEventListener("contextmenu", (e) => {
                e.preventDefault(); e.stopPropagation();
                this.showContextMenu(e.clientX, e.clientY, item, card);
            });

            grid.appendChild(card);

            this.cachedCards.push({
                element: card,
                title: item.title,
                searchString: `${item.title.toLowerCase()} ${item.desc.toLowerCase()}`
            });
        }

        this.renderedCount = end;
        this.applyFilters(); 
    },

    launchGame(title, url) {
        const theater = document.getElementById("theater-overlay");
        const frame = document.getElementById("game-frame");
        
        document.getElementById("theater-title").innerText = title;
        theater.classList.add("active");

        if (url.includes("cdn.jsdelivr.net") || url.includes("githubusercontent") || url.endsWith(".txt") || url.endsWith(".html")) {
            frame.src = "about:blank";
            
            fetch(url)
                .then(response => response.text())
                .then(rawHTML => {
                    const blob = new Blob([rawHTML], { type: "text/html;charset=utf-8" });
                    frame.src = URL.createObjectURL(blob);
                })
                .catch(err => {
                    console.warn("Local security protocol catch path executed.", err);
                    frame.src = url; 
                });
        } else {
            frame.src = url;
        }
    },

    // ==========================================
    // 5. CONTEXT MENU & FAVORITES ENGINE
    // ==========================================
    showContextMenu(x, y, item, cardElement) {
        const menu = document.getElementById("custom-context-menu");
        const isFav = this.favorites.includes(item.title);

        menu.innerHTML = `
            <div class="context-item" id="ctx-launch">⚡ Launch Game</div>
            <div class="context-item" id="ctx-fav">${isFav ? "❌ Remove Favorite" : "⭐ Add Favorite"}</div>
            <div class="context-item accent-item" id="ctx-cloak">🕵️‍♂️ Cloak Launch</div>
            <div class="context-item" id="ctx-download">📥 Download File</div>
        `;

        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;
        menu.classList.add("active");

        document.getElementById("ctx-launch").onclick = () => this.launchGame(item.title, item.url);
        document.getElementById("ctx-cloak").onclick = () => this.executeCloakLaunch(item.url);
        document.getElementById("ctx-fav").onclick = () => this.toggleFavorite(item.title, cardElement);
        
        // 📥 HIGH-PERFORMANCE FORCED DOWNLOAD ENGINE (Fixes jsDelivr Raw Text Bug)
        document.getElementById("ctx-download").onclick = () => {
            const brand = document.querySelector(".brand");
            const originalText = brand ? brand.innerText : "Nova Gaming";
            if (brand) brand.innerText = "📥 Downloading...";

            // 1. Fetch the file bytes directly from jsDelivr in the background
            fetch(item.url)
                .then(response => {
                    if (!response.ok) throw new Error("Network download response failed");
                    return response.blob(); // Convert raw web stream into a solid data blob
                })
                .then(fileBlob => {
                    // 2. Wrap the background data into a secure virtual local file path
                    const localUrl = URL.createObjectURL(fileBlob);
                    const downloadLink = document.createElement("a");
                    
                    downloadLink.href = localUrl;
                    
                    // 3. Detect if it's an HTML file or a binary, and preserve the proper file extension
                    const isHtml = item.url.includes(".html") || item.url.includes("jsdelivr");
                    const extension = isHtml ? ".html" : ".zip";
                    
                    downloadLink.setAttribute("download", `${item.title.replace(/\s+/g, '_')}${extension}`);
                    downloadLink.style.display = "none";
                    
                    // 4. Force browser window to execute immediate system save prompt
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    
                    // 5. Instantly clean up temporary browser memory allocations
                    document.body.removeChild(downloadLink);
                    URL.revokeObjectURL(localUrl);
                    if (brand) brand.innerText = originalText;
                })
                .catch(err => {
                    console.error("Advanced downloader blocked by security settings. Using fallback window pop.", err);
                    if (brand) brand.innerText = originalText;
                    
                    // Fallback option if local machine protocols block the background task
                    window.open(item.url, "_blank");
                });

            this.hideContextMenu();
        };
    },

    /* --- KEEP THESE AS THEY ARE --- */
    hideContextMenu() {
        const menu = document.getElementById("custom-context-menu");
        if(menu) menu.classList.remove("active");
    },

    toggleFavorite(title, cardElement) {
        const index = this.favorites.indexOf(title);
        if (index > -1) {
            this.favorites.splice(index, 1);
            cardElement.classList.remove("is-favorite");
        } else {
            this.favorites.push(title);
            cardElement.classList.add("is-favorite");
        }
        try {
            localStorage.setItem("nova_favorites", JSON.stringify(this.favorites));
        } catch(e) {}
        this.applyFilters();
        this.hideContextMenu();
    },


    // ==========================================
    // 6. SEARCH & FILTER CONTROLLER CORE
    // ==========================================
    toggleFavoritesFilter(buttonEl) {
        this.onlyShowFavorites = !this.onlyShowFavorites;
        buttonEl.classList.toggle("active", this.onlyShowFavorites);
        this.applyFilters();
    },

    applyFilters() {
        for (let i = 0; i < this.cachedCards.length; i++) {
            const card = this.cachedCards[i];
            const isFav = this.favorites.includes(card.title);
            
            const matchFav = (!this.onlyShowFavorites || isFav);
            const matchSearch = (this.searchQuery === "" || card.searchString.includes(this.searchQuery));

            if (matchFav && matchSearch) {
                card.element.classList.remove("hidden");
            } else {
                card.element.classList.add("hidden");
            }
        }
    },

    // ==========================================
    // 7. STEALTH & EVENT CONTROLS
    // ==========================================
    bindEvents() {
        const lockInput = document.querySelector(".lock-input");
        const lockScreen = document.getElementById("lock-screen");
        const appInterface = document.getElementById("app-interface");
        const searchBar = document.querySelector(".search-bar");
        const favToggleBtn = document.getElementById("fav-toggle");
        const requestGameBtn = document.getElementById("request-game-btn");
        const gridContainer = document.getElementById("card-grid");
        const theater = document.getElementById("theater-overlay");
        const frame = document.getElementById("game-frame");
        
        const closeBtn = document.getElementById("close-theater");
        const fullscreenBtn = document.getElementById("game-fullscreen");
        const cloakTabBtn = document.getElementById("game-cloak-tab");

        if(lockInput) {
            lockInput.addEventListener("input", (e) => {
                if (e.target.value === this.settings.unlockcode) {
                    lockScreen.style.opacity = "0";
                    setTimeout(() => lockScreen.remove(), 400);
                    appInterface.classList.add("unlocked");
                    lockInput.blur();
                }
            });
        }

        if(searchBar) {
            searchBar.addEventListener("input", (e) => {
                this.searchQuery = e.target.value.toLowerCase().trim();
                this.applyFilters();
            });
        }

        if(favToggleBtn) {
            favToggleBtn.addEventListener("click", () => {
                this.toggleFavoritesFilter(favToggleBtn);
            });
        }

        // Fixed Form Open Logic (Bypasses Cloaking Evaluators Completely)
        if(requestGameBtn) {
            requestGameBtn.addEventListener("click", () => {
                window.open(this.settings.requestFormUrl, "_blank");
            });
        }

        if(gridContainer) {
            gridContainer.addEventListener("scroll", () => {
                if (gridContainer.scrollTop + gridContainer.clientHeight >= gridContainer.scrollHeight - 150) {
                    this.loadNextBatch();
                }
            });
        }

        if(fullscreenBtn) {
            fullscreenBtn.addEventListener("click", () => {
                const wrapper = document.getElementById("iframe-wrapper");
                if (wrapper && wrapper.requestFullscreen) wrapper.requestFullscreen();
            });
        }

        if(cloakTabBtn) cloakTabBtn.addEventListener("click", () => this.executeCloakLaunch(frame.src));
        if(closeBtn) closeBtn.addEventListener("click", () => { theater.classList.remove("active"); frame.src = ""; });
        
        window.addEventListener("click", () => this.hideContextMenu());
        window.addEventListener("contextmenu", (e) => {
            if(!e.target.closest('.card')) {
                e.preventDefault();
                this.hideContextMenu();
            }
        });

        window.addEventListener("keydown", (e) => { if (e.key === "Escape") this.triggerCloak(); });
    },

    executeCloakLaunch(url) {
        if(!url || url === window.location.href) return;
        
        const newWindow = window.open("about:blank", "_blank");
        if (!newWindow) return alert("Popup blocked!");

        const doc = newWindow.document;
        doc.title = "Google Classroom";
        const newLink = doc.createElement("link");
        newLink.rel = "shortcut icon"; newLink.href = "https://gstatic.com";
        doc.head.appendChild(newLink);
        doc.body.style.cssText = "margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;background:#000;";

        const blankIframe = doc.createElement("iframe");
        blankIframe.style.cssText = "width:100%;height:100%;border:none;";
        blankIframe.setAttribute("allowfullscreen", "true");

        if (url.includes("blob:")) {
            const primaryFrame = document.getElementById("game-frame");
            try {
                fetch(primaryFrame.src)
                    .then(res => res.text())
                    .then(blobText => {
                        const freshBlob = new Blob([blobText], { type: "text/html;charset=utf-8" });
                        blankIframe.src = newWindow.URL.createObjectURL(freshBlob);
                    })
                    .catch(() => { blankIframe.src = url; });
            } catch(e) {
                blankIframe.src = url;
            }
        } else {
            blankIframe.src = url;
        }
        
        doc.body.appendChild(blankIframe);
        this.hideContextMenu();
    },

    triggerCloak() {
        document.title = "Google Docs";
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = this.settings.cloakicon;
        document.getElementsByTagName('head').appendChild(link);
        window.location.replace(supreme_engine.settings.panicurl);
    },

    boot() {
        this.injectstyles();
        this.buildDOM();
        this.initMatrix();
        this.bindEvents();
    }
};

supreme_engine.boot();
