# Ma Vote Na Power

Youth voting advocacy site for MDDT Cameroon — **Not Too Young To Vote** / **Ma Vote 2025 na pawa**.

Live: [mddtcameroon.org](https://www.mddtcameroon.org) · Repo: [github.com/Oben-Desmond/ma-vote-na-power](https://github.com/Oben-Desmond/ma-vote-na-power)

React 19, Vite, Tailwind, React Router, Firebase Hosting.

## Run locally

```bash
git clone https://github.com/Oben-Desmond/ma-vote-na-power.git
cd ma-vote-na-power
npm install
npm run dev
```

Firebase client features need `.env.local` from `.env.example`. Static content does not.

## Content

Copy and assets live in `src/data/` (`constants.js`, `team.js`, `gallery.js`, `articleBodies.js`) and `public/`. SEO in `src/lib/seo.js`. Routes in `src/App.jsx`.

## Deploy

Hosted on Firebase. Push or merge to **`main`** → GitHub Actions builds and deploys (`dist/`). No manual `firebase deploy` for normal updates.

Domain/DNS is configured in **Hostinger hPanel** — contact **Hedwig** for hosting or domain changes.
