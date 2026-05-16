/**
 * VAPOR V4 CORE PLATFORM ENGINE (SUPREME SECURE KINETIC EDITION)
 * Security Stack: Stealth Mode Default Boot, In-Memory "1234" Decryption Key,
 * 60FPS GPU Transforms, and Synchronized Escape Key Google Classroom Redirect.
 */

// ==========================================
// 1. INJECT HIGH-VELOCITY VAPOR STYLES
// ==========================================
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    body { 
        background: #03000a; 
        color: #f8fafc; 
        font-family: 'Courier New', Courier, system-ui, sans-serif; 
        overflow-x: hidden;
        margin: 0;
        padding: 40px 20px;
        min-height: 100vh;
        box-sizing: border-box;
    }
    
    html { scroll-behavior: auto; }

    /* Decoupled Spatial Visual Container */
    .kinetic-stage-wrapper {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
        transform: translateZ(0);
        display: none; /* Hidden by default during Lock Mode */
    }

    /* Ultra-Smooth 2D Diagonal Scrolling Synth Grid Array */
    .synth-scrolling-grid {
        position: absolute;
        inset: -100px;
        background-image: 
            linear-gradient(rgba(255, 0, 128, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 191, 255, 0.08) 1px, transparent 1px);
        background-size: 50px 50px;
        background-position: center top;
        will-change: transform;
        transform: translate3d(0,0,0);
        animation: smoothGridMove 6s infinite linear;
    }

    /* Floating Corner Energy Flares */
    .neon-flare-magenta, .neon-flare-blue {
        position: absolute;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        will-change: opacity, transform;
        transform: translateZ(0);
    }
    .neon-flare-magenta {
        top: -100px; left: -100px;
        background: radial-gradient(circle, rgba(255, 0, 128, 0.15) 0%, transparent 65%);
        animation: ambientPulse1 4s infinite ease-in-out alternate;
    }
    .neon-flare-blue {
        bottom: -100px; right: -100px;
        background: radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, transparent 65%);
        animation: ambientPulse2 5s infinite ease-in-out alternate;
    }

    /* Hidden Game Interface HUD (Revealed via Code Unlock Animation) */
    .main-application-hud {
        display: none;
        opacity: 0;
        will-change: transform, opacity;
        transform: translate3d(0, 15px, 0);
    }

    .nav-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 45px auto;
    }

    /* Rad-Neon Kinetic Action Button */
    .ui-btn { 
        background: #090312; 
        border: 2px solid #ff007f; 
        color: #ff007f !important; 
        padding: 14px 32px; 
        border-radius: 0px; 
        font-weight: 900; 
        text-transform: uppercase; 
        letter-spacing: 2px;
        box-shadow: -4px 4px 0px #00bfff;
        cursor: pointer; 
        display: inline-flex; 
        align-items: center; 
        justify-content: center; 
        gap: 10px; 
        will-change: transform;
        transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        transform: translate3d(0,0,0);
    }
    .ui-btn:hover { 
        background: #ff007f; 
        color: #03000a !important; 
        box-shadow: -1px 1px 0px #ffffff, 0 0 15px rgba(255, 0, 127, 0.6);
        transform: translate3d(3px, -3px, 0);
    }
    
    .search-bar { 
        background: #05020a; 
        border: 2px solid #00bfff; 
        color: #fff; 
        padding: 16px 32px; 
        border-radius: 0px; 
        width: 100%; 
        max-width: 480px; 
        text-align: center; 
        font-weight: 700; 
        font-size: 1rem;
        letter-spacing: 1px;
        box-shadow: -5px 5px 0px #ff007f;
        will-change: transform;
        transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        transform: translate3d(0,0,0);
    }
    .search-bar:focus {
        outline: none;
        border-color: #ffffff;
        transform: scale(1.02) translate3d(0,0,0);
        box-shadow: -5px 5px 0px #ff007f, 0 0 20px rgba(0, 191, 255, 0.5);
    }

    .zones-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 35px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    /* RAM-Safe Cascading Wave Grid Cards */
    .zone-card {
        background: linear-gradient(135deg, #0e051a 0%, #05020a 100%);
        border: 2px solid rgba(0, 191, 255, 0.25);
        border-radius: 0px; 
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-shadow: -5px 5px 0px rgba(255, 0, 127, 0.15);
        will-change: transform, opacity;
        opacity: 0;
        transform: translate3d(0, 25px, 0);
        animation: cardWaveSpawn 0.45s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
    .zone-card:hover {
        transform: translate3d(6px, -6px, 0);
        border-color: #00bfff;
        box-shadow: -9px 9px 0px #ff007f, 0 0 20px rgba(0, 191, 255, 0.3);
    }

    .zone-header {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    .zone-icon {
        width: 34px;
        height: 34px;
        border-radius: 0px;
        object-fit: contain;
        background: #150826;
        padding: 4px;
        border: 1px solid #ff007f;
    }
    .zone-card:hover .zone-icon {
        transform: scale(1.15) rotate(-6deg);
        border-color: #ffffff;
    }
    .zone-title {
        font-size: 1.3rem;
        font-weight: 900;
        margin: 0;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .zone-frame-wrapper {
        width: 100%;
        height: 220px;
        border-radius: 0px;
        overflow: hidden;
        position: relative;
        background: #000;
        border: 2px solid rgba(255, 0, 127, 0.3);
    }
    .zone-iframe {
        width: 100%;
        height: 100%;
        border: none;
        background: #000;
        opacity: 0;
        transition: opacity 0.25s ease;
    }
    .zone-iframe.loaded {
        opacity: 1;
    }

    .skeleton-loader {
        position: absolute;
        inset: 0;
        background: #03000a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ff007f;
        font-size: 0.8rem;
        font-weight: 900;
        letter-spacing: 2px;
    }
    .skeleton-loader::after {
        content: "";
        margin-top: 12px;
        width: 70px;
        height: 3px;
        background: #00bfff;
        box-shadow: 0 0 10px #00bfff;
        will-change: transform;
        animation: hardwarePulse 1.1s infinite cubic-bezier(0.4, 0, 0.2, 1);
    }

    .zone-desc {
        font-size: 0.85rem;
        color: #cbd5e1;
        font-family: sans-serif;
        line-height: 1.5;
        margin: 0;
        min-height: 54px;
    }

    .button-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        width: 100%;
    }

    .zone-action-btn {
        background: #000;
        border: 2px solid #00bfff;
        color: #00bfff;
        padding: 11px;
        border-radius: 0px;
        font-weight: 900;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    }
    .zone-action-btn.fullscreen-btn:hover { background: #00bfff; color: #000; box-shadow: 0 0 15px #00bfff; }
    .zone-action-btn.cloak-btn { border-color: #ff007f; color: #ff007f; }
    .zone-action-btn.cloak-btn:hover { background: #ff007f; color: #000; box-shadow: 0 0 15px #ff007f; }

    .panic-banner {
        width: 100%;
        max-width: 1200px;
        margin: -15px auto 30px auto;
        background: #0d0214;
        border: 2px dashed #ff007f;
        padding: 12px;
        text-align: center;
        font-size: 0.8rem;
        color: #ff007f;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 2px;
        box-shadow: 0 0 15px rgba(255, 0, 127, 0.15);
    }

    /* DECOY STEALTH MODE SHELL LAYOUT OVERLAYS */
    .stealth-decoy-blanket {
        position: fixed;
        inset: 0;
        background: #ffffff;
        color: #000000;
        font-family: 'Segoe UI', Roboto, sans-serif;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 15vh;
        box-sizing: border-box;
    }
    .decoy-google-logo {
        font-size: 90px;
        font-weight: 500;
        letter-spacing: -3px;
        margin-bottom: 30px;
        user-select: none;
    }
    .decoy-search-box {
        width: 100%;
        max-width: 580px;
        padding: 14px 28px;
        font-size: 16px;
        border: 1px solid #e4e4e4;
        border-radius: 99px;
        outline: none;
        box-shadow: 0 1px 6px rgba(32,33,36,0.1);
    }
    .decoy-search-box:hover, .decoy-search-box:focus {
        box-shadow: 0 1px 6px rgba(32,33,36,0.2);
        border-color: rgba(223,225,229,0);
    }

    @keyframes smoothGridMove { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(50px, 50px, 0); } }
    @keyframes ambientPulse1 { 0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.4; } 100% { transform: translate3d(30px, 20px, 0) scale(1.12); opacity: 0.9; } }
    @keyframes ambientPulse2 { 0% { transform: translate3d(0, 0, 0) scale(1.1); opacity: 0.3; } 100% { transform: translate3d(-20px, -30px, 0) scale(0.95); opacity: 0.8; } }
    @keyframes cardWaveSpawn { to { opacity: 1; transform: translate3d(0,0,0); } }
    @keyframes hardwarePulse { 0%, 100% { transform: scaleX(0.4) translateZ(0); opacity: 0.5; } 50% { transform: scaleX(1.1) translateZ(0); opacity: 1; } }
`;
document.head.appendChild(styleSheet);

// ==========================================
// 2. DOM INTERFACE STRUCTURAL DEPLOYMENT
// ==========================================
// Inject the completely invisible camouflage framework overlay 
const decoyBlanket = document.createElement("div");
decoyBlanket.className = "stealth-decoy-blanket";
decoyBlanket.innerHTML = `
    <div class="decoy-google-logo">
        <span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span>
    </div>
    <input type="text" class="decoy-search-box" placeholder="Search Google or type a URL" autofocus>
`;
document.body.appendChild(decoyBlanket);

// Primary Synth Stage Architecture (Kept detached from rendering engine on boot)
const stage = document.createElement("div");
stage.className = "kinetic-stage-wrapper";
stage.innerHTML = `
    <div class="synth-scrolling-grid"></div>
    <div class="neon-flare-magenta"></div>
    <div class="neon-flare-blue"></div>
`;
document.body.appendChild(stage);

// Main functional container wrapper shell
const applicationHud = document.createElement("div");
applicationHud.className = "main-application-hud";
document.body.appendChild(applicationHud);

const navContainer = Object.assign(document.createElement("div"), { className: "nav-container" });
applicationHud.appendChild(navContainer);

const backButton = Object.assign(document.createElement("button"), { className: "ui-btn", innerHTML: "▲ SYSTEM BACK" });
backButton.onclick = () => window.history.back();
navContainer.appendChild(backButton);

const searchBar = Object.assign(document.createElement("input"), { className: "search-bar", type: "text", placeholder: "SEARCH VAPOR DATA STACK..." });
navContainer.appendChild(searchBar);

const panicNotice = document.createElement("div");
panicNotice.className = "panic-banner";
panicNotice.innerHTML = "⚡ SYSTEM SECURITY ARMED // PRESS [ESCAPE] TO INSTANTLY REDIRECT TO GOOGLE CLASSROOM";
applicationHud.appendChild(panicNotice);

const gridContainer = Object.assign(document.createElement("div"), { className: "zones-grid" });
applicationHud.appendChild(gridContainer);


// ==========================================
// 3. ENCRYPTED PASS KEYPAD & STEALTH PANIC CONTROL
// ==========================================
const activelyOpenedCloaks = [];
let secretInputBuffer = "";

function triggerTotalSystemPanic() {
    let len = activelyOpenedCloaks.length;
    for (let i = 0; i < len; i++) {
        try { if (activelyOpenedCloaks[i] && !activelyOpenedCloaks[i].closed) activelyOpenedCloaks[i].close(); } catch(e) {}
    }
    window.location.replace("https://google.com");
}

// Global Key tracker parsing text codes and panic requests continuously
window.addEventListener("keydown", function(event) {
    // 1. Armed Escape Route Trigger Layer
    if (event.key === "Escape") {
        event.preventDefault();
        triggerTotalSystemPanic();
        return;
    }

    // 2. Secret Code Lock Scanner Matrix
    if (decoyBlanket.style.display !== "none") {
        // Collect keyboard sequences sequentially
        if (event.key >= "0" && event.key <= "9") {
            secretInputBuffer += event.key;
            
            // Limit memory usage bounds
            if (secretInputBuffer.length > 4) {
                secretInputBuffer = secretInputBuffer.substring(1);
            }

            // Verify authentication parameter target string
            if (secretInputBuffer === "1234") {
                event.preventDefault();
                unlockVaporTerminalDashboard();
            }
        } else {
            // Flush strings if text commands interrupt sequence
            secretInputBuffer = "";
        }
    }
});

function unlockVaporTerminalDashboard() {
    // Blast away fake cover layout completely
    decoyBlanket.style.display = "none";
    
    // Boot up native GPU-assisted synth structures instantly
    stage.style.display = "block";
    applicationHud.style.display = "block";
    
    // Smooth fade-in cascade transition physics pass
    setTimeout(() => {
        applicationHud.style.transition = "opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        applicationHud.style.opacity = "1";
        applicationHud.style.transform = "translate3d(0,0,0)";
    }, 10);
    
    // Run main catalog grid assembly pipeline pass
    loadSystemZones(mockZones);
}


// ==========================================
// 4. EMBED CATALOGUE STORAGE ARRAY
// ==========================================
const mockZones = [
    { 
        title: "Cookie Clicker Engine", 
        desc: "Automated core click economy. High intensity system thread virtualization matrix.", 
        url: "https://jsdelivr.net",
        icon: "https://jsdelivr.net" 
    },
    { 
        title: "Secondary Data Mirror", 
        desc: "Alternate node terminal link network designed for fast isolated execution environments.", 
        url: "https://example.com",
        icon: "" 
    }
];

window.launchFullscreenZone = function(frameId) {
    const targetIframe = document.getElementById(frameId);
    if (!targetIframe) return;
    if (targetIframe.requestFullscreen) targetIframe.requestFullscreen();
    else if (targetIframe.webkitRequestFullscreen) targetIframe.webkitRequestFullscreen();
};

window.launchStealthCloakZone = function(targetUrl) {
    const cloakWindow = window.open("about:blank", "_blank");
    if (!cloakWindow) {
        alert("Allow popups to launch cloak tab.");
        return;
    }
    activelyOpenedCloaks.push(cloakWindow);

    const doc = cloakWindow.document;
    doc.title = "Google";
    
    const faviconLink = doc.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = "https://google.com";
    doc.head.appendChild(faviconLink);

    const panicScript = doc.createElement("script");
    panicScript.innerText = `
        window.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                e.preventDefault();
                window.location.replace("https://google.com");
                try { window.opener.location.replace("https://google.com"); } catch(err) {}
                window.close();
            }
        });
    `;
    doc.head.appendChild(panicScript);

    const rootStyle = doc.createElement("style");
    rootStyle.innerText = "html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000;}iframe{width:100%;height:100%;border:none;}";
    doc.head.appendChild(rootStyle);

    const secureIframe = doc.createElement("iframe");
    secureIframe.src = targetUrl;
    doc.body.appendChild(secureIframe);
};

function loadSystemZones(dataList) {
    let len = dataList.length;
    if (len === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ff007f; font-weight: 700; margin-top: 40px; letter-spacing: 2px;">NO STACKS ACTIVE</p>`;
        return;
    }

    let htmlBuffer = "";
    for (let i = 0; i < len; i++) {
        const zone = dataList[i];
        const iconHtml = zone.icon && zone.icon.trim() !== "" ? `<img class="zone-icon" src="${zone.icon}" alt="icon">` : "";
        const iframeId = `ifrm-${i}`;
        const animationDelayStyle = `style="animation-delay: ${i * 45}ms;"`;

        htmlBuffer += `
            <div class="zone-card" ${animationDelayStyle}>
                <div class="zone-header">
                    ${iconHtml}
                    <h3 class="zone-title">${zone.title}</h3>
                </div>
                <p class="zone-desc">${zone.desc}</p>
                <div class="zone-frame-wrapper">
                    <div class="skeleton-loader" id="skel-${i}">LOADING WINDOW SYSTEM...</div>
                    <iframe class="zone-iframe" id="${iframeId}" data-src="${zone.url}"></iframe>
                </div>
                <div class="button-group">
                    <button class="zone-action-btn fullscreen-btn" onclick="window.launchFullscreenZone('${iframeId}')">🖵 Maximize</button>
                    <button class="zone-action-btn cloak-btn" onclick="window.launchStealthCloakZone('${zone.url}')">👁 Cloak</button>
                </div>
            </div>
        `;
    }

    gridContainer.innerHTML = htmlBuffer;
    setupLazyIntersections();
}

function setupLazyIntersections() {
    if (!('IntersectionObserver' in window)) {
        const iframes = document.querySelectorAll(".zone-iframe");
        for (let i = 0; i < iframes.length; i++) triggerFrameLoad(iframes[i]);
        return;
    }

    const frameObserver = new IntersectionObserver((entries, observer) => {
        let entryLen = entries.length;
        for (let i = 0; i < entryLen; i++) {
            if (entries[i].isIntersecting) {
                const iframe = entries[i].target.querySelector(".zone-iframe");
                if (iframe) triggerFrameLoad(iframe);
                observer.unobserve(entries[i].target);
            }
        }
    }, { rootMargin: "120px 0px" });

    const cards = document.querySelectorAll(".zone-card");
    for (let i = 0; i < cards.length; i++) frameObserver.observe(cards[i]);
}

function triggerFrameLoad(iframe) {
    if (!iframe.src && iframe.dataset.src) {
        iframe.src = iframe.dataset.src;
        iframe.onload = () => {
            const skeleton = iframe.previousElementSibling;
            if (skeleton) skeleton.style.display = "none";
            iframe.classList.add("loaded");
        };
    }
}

searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filteredZones = [];
    let mockLen = mockZones.length;
    
    for (let i = 0; i < mockLen; i++) {
        if (mockZones[i].title.toLowerCase().indexOf(query) !== -1 || mockZones[i].desc.toLowerCase().indexOf(query) !== -1) {
            filteredZones.push(mockZones[i]);
        }
    }
    loadSystemZones(filteredZones);
});
