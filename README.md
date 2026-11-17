# $CHUNG

English and simplified Chinese website for CHUNG on BNB Chain.

## Local preview

Requires Node.js 18 or later. No dependency installation or build step is needed.

```sh
npm start
```

Open http://127.0.0.1:4173.

## Hosting

Deploy the `dist` directory to any static web host. `dist/index.html` is the entry point. The video, optimized 3D model, viewer, Meshopt decoder, favicon and meme gallery are included locally. Google Fonts is the only external presentation dependency.

## Content

- Official X: https://x.com/chung_bnb
- The contract has not been announced. The website directs visitors to the official X account.
- Language preference is stored in the browser.
- Background video has a softened loop transition and a pause control.
- Original 25.1 MB mascot model was reduced to approximately 2.43 MB.
- A 3:1 social banner is included at `dist/assets/chung-banner.png`.

Run `npm run check` for JavaScript syntax checks.

Independent meme project, not affiliated with the Chunghwa tobacco brand.
