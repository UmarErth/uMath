<div align="center">

# Nova Gaming

### A single file gaming hub with native apps games and customization

[![JavaScript](https://img.shields.io/badge/JavaScript-100%25-f7df1e?style=for-the-badge&logo=javascript&logoColor=000)](./loader.js)
[![No Build Step](https://img.shields.io/badge/build-none-4dffb8?style=for-the-badge)](./loader.js)
[![jsDelivr](https://img.shields.io/badge/CDN-jsDelivr-e84d3d?style=for-the-badge&logo=jsdelivr&logoColor=white)](https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/loader.js)

**Access code 1234**

[Launch Nova](https://novagaming.pages.dev) · [Backup links](#official-mirrors) · [Features](#features) · [Use the loader](#use-the-loader)

</div>

---

## About

Nova Gaming is a browser based gaming hub built around one large frontend engine called `loader.js`

The interface apps settings and game library are loaded from this repository while services such as Nova Browser and Nova Chat keep their own separate backends

> Nova Gaming > GN Math and Vapor V4 RIP

## Features

| Feature | What it does |
| --- | --- |
| Game library | Search launch favorite and revisit games |
| Nova Browser | Native Nova controls powered by the existing  backend |
| Nova Chat | Native global chat direct messages presence and notifications |
| Nova AI | Built in AI chat with saved conversations |
| Video | YouTube search and playback through a rotating Piped API pool |
| Anime | Native anime discovery and playback interface |
| Nova Education | Education tools available inside the Nova interface |
| Two interfaces | Switch between the classic gaming UI and desktop style UI |
| Customization | Themes accents fonts wallpapers cursors density and layout settings |
| Cloaking | Open Nova in a disguised tab when supported |
| Local data tools | Export import clear or reset locally saved preferences |
| App transitions | Smooth directional slide animations between Nova apps |

## Official mirrors

If one mirror is unavailable try another

- [novagaming.pages.dev](https://novagaming.pages.dev)
- [mathschool.pages.dev](https://mathschool.pages.dev)
- [umarerth.github.io](https://umarerth.github.io)
- [nova.staticdomains.app](https://nova.staticdomains.app)
- [novagamingsite.netlify.app](https://novagamingsite.netlify.app)
- [Nova Gaming on ChatGPT Sites](https://nova-gaming-umarerth.hpolo914.chatgpt.site)
- [Backup link page](https://novaisthegoat.weebly.com)

## Use the loader

Nova Gaming has no build step

Add the loader to an HTML page

```html
<script src="https://cdn.jsdelivr.net/gh/UmarErth/uMath@main/loader.js"></script>
```

For a version pinned to the latest known commit

```html
<script src="https://cdn.jsdelivr.net/gh/UmarErth/uMath@ead3472aa795287bc31ce2991b5996bbcc0cb87e/loader.js"></script>
```

Using a pinned commit avoids unexpected changes while using `@main` always loads the newest version after CDN caching updates

## Project structure

```text
uMath
├── loader.js   Nova Gaming frontend engine
└── README.md   Project information and setup
```

The Browser and Chat repositories remain separate so their backend deployment code does not have to be bundled into this frontend

## Local development

1 Clone the repository

```bash
git clone https://github.com/UmarErth/uMath.git
cd uMath
```

2 Create a small HTML file that loads `loader.js`

3 Serve the folder with any static file server

```bash
python3 -m http.server 8000
```

4 Open `http://localhost:8000`

## Notes

- Settings favorites recent games and AI conversations are stored in the browser
- Some features depend on external services and may temporarily stop working if those services are unavailable
- Browser content still uses a page frame because proxied websites require an isolated browsing surface
- Fonts are delivered through jsDelivr instead of Google Fonts

## Contributing

Fork the repository make your changes and open a pull request

When editing `loader.js` keep the project build free and test the classic UI desktop UI app switching mobile layout and game launching before submitting

---

<div align="center">

Made by [UmarErth](https://github.com/UmarErth)

</div>
