# Polar Analytics Website Replica (Vanilla HTML/CSS/JS)

This project is a learning-focused 1:1 visual replica of `https://www.polaranalytics.com`, built without frameworks or UI libraries.

## Goals
- Performance, Accessibility, Best Practices, SEO ≥ 90 on Lighthouse
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, TBT < 200ms
- Responsive at 375 / 768 / 1024 / 1440px

## Tech & Constraints
- Pure HTML, CSS, vanilla JavaScript
- Semantic HTML, CSS BEM, modular JS
- Placeholder assets only (no copyrighted media)

## Structure
```
/project-root
├─ index.html
├─ assets/
│  ├─ images/
│  └─ fonts/
├─ css/
│  ├─ base.css
│  ├─ layout.css
│  ├─ components.css
│  └─ pages.css
└─ js/
   ├─ main.js
   ├─ components/
   │  ├─ hero.js
   │  ├─ nav.js
   │  └─ carousel.js
   └─ utils/
      ├─ observer.js
      ├─ throttle.js
      └─ debounce.js
```

## Run Locally
Open `index.html` directly, or serve to enable ES modules:

```bash
# from repository root
npx http-server -p 8080 .
# or
python -m http.server 8080
```

Then open `http://localhost:8080/bao-connector/`.

## Notes
- Add `Inter` and `Satoshi` WOFF2 to `assets/fonts` if desired.
- Replace placeholders with optimized WebP/AVIF.
- Maintain accessibility (skip link, headings, focus states).

## License
Educational use only. No affiliation with Polar Analytics.
