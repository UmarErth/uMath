/**
 * VAPOR V4 - SUPREME KINETIC BLUR ENGINE
 * Features: Code-Locked Boot, About-Blank Cloak, Escape Redirect
 * Optimization: 60FPS GPU Transforms & Ultra-Blur Stacking
 */

const SUPREME_ENGINE = {
    // ==========================================
    // 1. CONFIGURATION & DATABASE
    // ==========================================
    SETTINGS: {
        unlockCode: "1234", // THE CODE TO OPEN THE SITE
        panicUrl: "https://google.com",
        cloakIcon: "https://gstatic.com",
        blurStrength: "30px"
    },

    // Add 40-50 blocks here to hit your 600 line goal
    REGISTRY: [
        {
            title: "Cookie Clicker",
            url: "https://jsdelivr.net",
            desc: "The legendary baker simulator. Optimized for high-blur frosted environments."
        },
        {
            title: "Slope 3D",
            url: "https://kdata1.com",
            desc: "High-speed physics-based ball runner. Test your reflexes on the frosted track."
        }
    ],

    // ==========================================
    // 2. THE CSS ENGINE (EXPANDED FOR BULK)
    // ==========================================
    injectStyles() {
        const style = document.createElement("style");
        style.innerText = `
            @import url('https://googleapis.com');

            :root {
                --bg: #000;
                --glass: rgba(255, 255, 255, 0.03);
                --glass-border: rgba(255, 255, 255, 0.1);
                --blur: ${this.SETTINGS.blurStrength};
                --fluid-ease: cubic-bezier(0.16, 1, 0.3, 1);
            }

            body, html { 
                margin: 0; padding: 0; width: 100%; height: 100%;
                background: var(--bg); color: #fff; font-family: 'Inter', sans-serif;
                overflow: hidden;
            }

            /* --- CODE LOCK OVERLAY --- */
            #lock-screen {
                position: fixed; inset: 0; z-index: 10000;
                background: #000; display: flex; flex-direction: column;
                align-items: center; justify-content: center;
                transition: opacity 0.8s var(--fluid-ease), visibility 0.8s;
            }

            .lock-input {
                background: transparent; border: none; border-bottom: 2px solid #333;
                color: #fff; font-size: 2rem; text-align: center; outline: none;
                width: 200px; font-weight: 900; letter-spacing: 10px;
                transition: border-color 0.3s;
            }

            .lock-input:focus { border-color: #fff; }

            /* --- MAIN INTERFACE (HIDDEN BY DEFAULT) --- */
            #main-ui {
                opacity: 0; visibility: hidden; 
                height: 100vh; overflow-y: auto; padding: 60px 20px;
                transition: opacity 1s var(--fluid-ease);
            }

            .kinetic-bg {
                position: fixed; inset: 0; z-index: -1;
                background: radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000 100%);
            }

            .orb {
                position: absolute; border-radius: 50%;
                filter: blur(100px); opacity: 0.2;
                will-change: transform; animation: float 20s infinite alternate;
            }

            @keyframes float {
                from { transform: translate(0,0); }
                to { transform: translate(100px, 100px); }
            }

            /* --- FROSTED GLASS CARDS --- */
            .zones-grid {
                display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                gap: 40px; width: 100%; max-width: 1400px; margin: 0 auto;
            }

            .glass-card {
                background: var(--glass); backdrop-filter: var(--blur);
                -webkit-backdrop-filter: var(--blur);
                border: 1px solid var(--glass-border); border-radius: 30px;
                padding: 30px; transition: 0.5s var(--fluid-ease);
                opacity: 0; transform: translateY(30px);
            }

            .glass-card.reveal { opacity: 1; transform: translateY(0); }
            .glass-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.06); }

            .frame-box {
                width: 100%; height: 220px; background: #000;
                border-radius: 20px; overflow: hidden; margin: 20px 0;
            }

            /* --- UI BUTTONS --- */
            .btn-main {
                background: #fff; color: #000; border: none; padding: 15px;
                border-radius: 15px; width: 100%; font-weight: 800; cursor: pointer;
                text-transform: uppercase; transition: 0.3s;
            }

            .btn-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }

            .btn-sub {
                background: rgba(255,255,255,0.05); color: #fff; border: 1px solid var(--glass-border);
                padding: 10px; border-radius: 12px; cursor: pointer; font-size: 0.8rem;
            }
        `;
        document.head.appendChild(style);
    },

    // ==========================================
    // 3. THE CODE UNLOCK SYSTEM
    // ==========================================
    attachUnlock() {
        const lock = document.createElement("div");
        lock.id = "lock-screen";
        lock.innerHTML = `
            <p style="color:#555; font-size:0.8rem; letter-spacing:2px; margin-bottom:20px;">SYSTEM ENCRYPTED</p>
            <input type="password" class="lock-input" maxlength="4" id="pass-input" autofocus>
        `;
        document.body.appendChild(lock);

        const input = document.getElementById("pass-input");
        input.addEventListener("input", (e) => {
            if (e.target.value === this.SETTINGS.unlockCode) {
                lock.style.opacity = "0";
                setTimeout(() => {
                    lock.remove();
                    this.openUI();
                }, 800);
            }
        });
    },

    // ==========================================
    // 4. MAIN UI RENDERER
    // ==========================================
    openUI() {
        const ui = document.getElementById("main-ui");
        ui.style.opacity = "1";
        ui.style.visibility = "visible";

        document.querySelectorAll(".glass-card").forEach((card, i) => {
            setTimeout(() => card.classList.add("reveal"), i * 100);
        });
    },

    init() {
        this.injectStyles();
        
        // Setup UI Structure
        document.body.innerHTML = `
            <div class="kinetic-bg"><div class="orb" style="width:600px;height:600px;background:#fff;top:-10%;left:-10%;"></div></div>
            <div id="main-ui">
                <div class="zones-grid" id="grid"></div>
            </div>
        `;

        const grid = document.getElementById("grid");
        this.REGISTRY.forEach(item => {
            const card = document.createElement("div");
            card.className = "glass-card";
            card.innerHTML = `
                <h2 style="margin:0;">${item.title}</h2>
                <div class="frame-box"><iframe src="${item.url}" style="width:100%;height:100%;border:none;"></iframe></div>
                <div class="btn-row">
                    <button class="btn-main" onclick="window.open('${item.url}')">Play</button>
                </div>
                <div class="btn-row">
                    <button class="btn-sub" onclick="SUPREME_ENGINE.cloak('${item.url}', '${item.title}')">Cloak</button>
                    <button class="btn-sub" onclick="this.closest('.glass-card').querySelector('iframe').requestFullscreen()">Fullscreen</button>
                </div>
            `;
            grid.appendChild(card);
        });

        this.attachUnlock();
        
        // Escape Key Security
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") window.location.href = this.SETTINGS.panicUrl;
        });
    },

    // ==========================================
    // 5. CLOAK ENGINE (ABOUT:BLANK)
    // ==========================================
    cloak(url, title) {
        const win = window.open('about:blank', '_blank');
        const doc = win.document;
        doc.title = title;
        
        // Stealth Favicon
        const icon = doc.createElement('link');
        icon.rel = 'icon'; icon.href = this.SETTINGS.cloakIcon;
        doc.head.appendChild(icon);

        const ifr = doc.createElement('iframe');
        ifr.src = url;
        ifr.style.cssText = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0;";
        doc.body.appendChild(ifr);
    }
};

SUPREME_ENGINE.init();
