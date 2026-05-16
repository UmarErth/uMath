/**
 * VAPOR V5 - SUPREME KINETIC FROSTED ENGINE [ULTRA-BLUR EDITION]
 * Features: Interactive Dot-Matrix, Live Search, Code-Lock, Stealth Cloak
 */

const SUPREME_ENGINE = {
    SETTINGS: {
        unlockCode: "1234",
        panicUrl: "https://google.com",
        cloakIcon: "https://gstatic.com",
        dotColor: "rgba(255, 255, 255, 0.15)",
        dotSpacing: 35
    },

    // ==========================================
    // 1. CONTENT REGISTRY (PASTE GAMES HERE)
    // ==========================================
    REGISTRY: [
        { title: "Cookie Clicker", url: "https://jsdelivr.net", desc: "Idle baking simulator." },
        { title: "Slope 3D", url: "https://kdata1.com", desc: "Physics speed runner." },
        { title: "Minecraft", url: "https://minecraft.net", desc: "Classic sandbox world." },
        { title: "1v1.LOL", url: "https://1v1.lol", desc: "Build and shoot combat." },
        // --- REPEAT THESE BLOCKS TO REACH 600+ LINES ---
    ],

    // ==========================================
    // 2. SUPREME CSS ARCHITECTURE
    // ==========================================
    injectStyles() {
        const style = document.createElement("style");
        style.innerText = `
            @import url('https://googleapis.com');

            :root {
                --bg: #030303;
                --glass: rgba(255, 255, 255, 0.03);
                --glass-hover: rgba(255, 255, 255, 0.07);
                --border: rgba(255, 255, 255, 0.1);
                --blur: blur(25px);
                --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                --spring: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            body, html { 
                margin: 0; padding: 0; width: 100%; height: 100%;
                background: var(--bg); color: #fff; font-family: 'Inter', sans-serif;
                overflow: hidden;
            }

            /* --- INTERACTIVE DOT BACKGROUND --- */
            #canvas-dots {
                position: fixed; inset: 0; z-index: -1;
                background: radial-gradient(circle at center, #0a0a0a 0%, #030303 100%);
            }

            /* --- CODE LOCK --- */
            #lock-screen {
                position: fixed; inset: 0; z-index: 10000;
                background: #000; display: flex; flex-direction: column;
                align-items: center; justify-content: center;
                transition: opacity 0.8s var(--transition);
            }
            .lock-input {
                background: transparent; border: none; border-bottom: 2px solid #222;
                color: #fff; font-size: 2rem; text-align: center; outline: none;
                width: 220px; font-weight: 900; letter-spacing: 8px;
            }

            /* --- MAIN INTERFACE --- */
            #main-ui {
                opacity: 0; visibility: hidden; 
                height: 100vh; overflow-y: overlay; padding: 40px 20px;
                display: flex; flex-direction: column; align-items: center;
                transition: opacity 1s var(--transition);
            }

            .search-container {
                width: 100%; max-width: 450px; margin-bottom: 50px;
                position: sticky; top: 0; z-index: 100;
            }

            .search-bar {
                width: 100%; background: rgba(0,0,0,0.6);
                backdrop-filter: var(--blur); -webkit-backdrop-filter: var(--blur);
                border: 1px solid var(--border); border-radius: 20px;
                padding: 18px 25px; color: white; font-size: 1rem;
                transition: var(--transition); text-align: center;
            }
            .search-bar:focus { outline: none; border-color: #fff; transform: scale(1.02); }

            /* --- COMPACT ZONES GRID --- */
            .zones-grid {
                display: grid; 
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 25px; width: 100%; max-width: 1300px;
            }

            .glass-card {
                background: var(--glass); backdrop-filter: var(--blur);
                -webkit-backdrop-filter: var(--blur);
                border: 1px solid var(--border); border-radius: 24px;
                padding: 20px; transition: var(--transition);
                opacity: 0; transform: translateY(30px);
            }
            .glass-card.reveal { opacity: 1; transform: translateY(0); }
            .glass-card:hover { 
                transform: translateY(-8px); 
                background: var(--glass-hover); 
                border-color: rgba(255,255,255,0.2); 
            }

            .frame-box {
                width: 100%; height: 160px; background: #000;
                border-radius: 15px; overflow: hidden; margin: 15px 0;
            }

            /* --- BUTTON ANIMATIONS --- */
            .btn-main {
                background: #fff; color: #000; border: none; padding: 12px;
                border-radius: 12px; width: 100%; font-weight: 800; cursor: pointer;
                text-transform: uppercase; transition: var(--spring);
            }
            .btn-main:hover { transform: scale(1.05); filter: brightness(0.9); }
            .btn-main:active { transform: scale(0.95); }

            .btn-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }

            .btn-sub {
                background: rgba(255,255,255,0.05); color: #fff; border: 1px solid var(--border);
                padding: 10px; border-radius: 10px; cursor: pointer; font-size: 0.75rem;
                transition: var(--spring); font-weight: 600;
            }
            .btn-sub:hover { background: rgba(255,255,255,0.15); transform: translateY(-3px); }
            .btn-sub:active { transform: translateY(0); }

            .hidden-card { display: none !important; }
        `;
        document.head.appendChild(style);
    },

    // ==========================================
    // 3. DOT-MATRIX BACKGROUND ENGINE
    // ==========================================
    renderDots() {
        const canvas = document.createElement("canvas");
        canvas.id = "canvas-dots";
        document.body.prepend(canvas);
        const ctx = canvas.getContext("2d");
        let mouse = { x: 0, y: 0 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = this.SETTINGS.dotColor;

            for (let x = 0; x < canvas.width; x += this.SETTINGS.dotSpacing) {
                for (let y = 0; y < canvas.height; y += this.SETTINGS.dotSpacing) {
                    let dist = Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2);
                    let offset = Math.max(0, (150 - dist) / 10);
                    ctx.beginPath();
                    ctx.arc(x + (x - mouse.x) * (offset / 100), y + (y - mouse.y) * (offset / 100), 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        };
        draw();
    },

    // ==========================================
    // 4. CORE FUNCTIONALITY
    // ==========================================
    init() {
        this.injectStyles();
        this.renderDots();
        
        document.body.innerHTML += `
            <div id="main-ui">
                <div class="search-container"><input type="text" id="search" class="search-bar" placeholder="SEARCH DATABASE..."></div>
                <div class="zones-grid" id="grid"></div>
            </div>
        `;

        const grid = document.getElementById("grid");
        this.REGISTRY.forEach(item => {
            const card = document.createElement("div");
            card.className = "glass-card";
            card.setAttribute("data-title", item.title.toLowerCase());
            card.innerHTML = `
                <h3 style="margin:0; font-size:1.2rem;">${item.title}</h3>
                <div class="frame-box"><iframe src="${item.url}" loading="lazy" style="width:100%;height:100%;border:none;"></iframe></div>
                <button class="btn-main" onclick="window.open('${item.url}')">PLAY NOW</button>
                <div class="btn-row">
                    <button class="btn-sub" onclick="SUPREME_ENGINE.cloak('${item.url}', '${item.title}')">Cloak</button>
                    <button class="btn-sub" onclick="this.closest('.glass-card').querySelector('iframe').requestFullscreen()">Full</button>
                </div>
            `;
            grid.appendChild(card);
        });

        this.attachEvents();
    },

    attachEvents() {
        // Code Lock Setup
        const lock = document.createElement("div");
        lock.id = "lock-screen";
        lock.innerHTML = `<input type="password" class="lock-input" maxlength="4" id="pass" placeholder="...." autofocus>`;
        document.body.appendChild(lock);

        document.getElementById("pass").addEventListener("input", (e) => {
            if (e.target.value === this.SETTINGS.unlockCode) {
                lock.style.opacity = "0";
                setTimeout(() => { lock.remove(); this.revealUI(); }, 800);
            }
        });

        // Search Filter
        document.getElementById("search").addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll(".glass-card").forEach(c => {
                c.classList.toggle("hidden-card", !c.getAttribute("data-title").includes(term));
            });
        });

        window.addEventListener("keydown", (e) => { if (e.key === "Escape") window.location.href = this.SETTINGS.panicUrl; });
    },

    revealUI() {
        const ui = document.getElementById("main-ui");
        ui.style.opacity = "1"; ui.style.visibility = "visible";
        document.querySelectorAll(".glass-card").forEach((c, i) => setTimeout(() => c.classList.add("reveal"), i * 60));
    },

    cloak(url, title) {
        const win = window.open('about:blank', '_blank');
        const doc = win.document;
        doc.title = title;
        const icon = doc.createElement('link'); icon.rel = 'icon'; icon.href = this.SETTINGS.cloakIcon;
        doc.head.appendChild(icon);
        const ifr = doc.createElement('iframe');
        ifr.src = url; ifr.style.cssText = "position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none;";
        doc.body.appendChild(ifr);
    }
};

SUPREME_ENGINE.init();
