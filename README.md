# Kaushik Mandal — Profile site (4 designs)

Four self-contained, hostable variants of the same profile site. All built from your real LinkedIn data: 9 certifications, EPAM Systems role, and your full career arc.

## Layout

```
glass minimal/
├── index.html               ← landing page (preview all four designs)
├── README.md                ← this file
├── design-1-cyberpunk/      ← Neon dark mode, particles, gradient text
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── design-2-glass/          ← Light, editorial, frosted glass, serif type
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── design-3-terminal/       ← CLI aesthetic, matrix rain, monospace
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── design-4-3d/             ← Tilt cards, mouse spotlight, custom cursor
    ├── index.html
    ├── styles.css
    └── script.js
```

## Previewing locally

Open `index.html` (the landing page) in your browser to see all four designs side-by-side, then click into any of them.

Or run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Picking a winner

Once you've decided on one design, you have two options:

**A. Use the chosen design only.** Copy the three files inside `design-N-.../` to a new repo root and host that.

**B. Keep the landing page as the entry point.** Host the whole `glass minimal/` folder. Visitors land on the picker page and click into the design you want.

## Pushing to git

```bash
cd "glass minimal"
git init
git add .
git commit -m "Initial profile site (4 designs)"
git branch -M main
git remote add origin git@github.com:<your-username>/<your-repo>.git
git push -u origin main
```

## Hosting (all free)

| Host | How |
|---|---|
| GitHub Pages | Push to a repo → Settings → Pages → deploy from `main` branch |
| Vercel | `vercel deploy` from this folder, or import the repo at vercel.com |
| Netlify | Drag the folder into app.netlify.com/drop |
| Cloudflare Pages | Connect the repo at pages.cloudflare.com |

## Editing your content

All four designs include the same content. To update something everywhere, you'll need to edit each design's `index.html`. Common things to change:

- Email address: search for `kaushik.mandal@example.com` and replace
- GitHub URL: replace `https://github.com` with your real GitHub URL
- Job descriptions: each design has an experience/work section — edit the prose inside

The certifications are already exact (issuer, date, credential ID) based on your LinkedIn.

## Credits

Fonts via Google Fonts: Space Grotesk, Inter, Fraunces, JetBrains Mono, Archivo. Everything else hand-coded — no frameworks, no build step.
