# Ma Vote Na Power

**Not Too Young To Vote** — a youth voting advocacy website for [MDDT Cameroon](https://www.mddtcameroon.org). The site promotes civic participation, voter registration, and peaceful elections under the campaign tagline **Ma Vote 2025 na pawa** (“your vote is power”).

Live site: [https://www.mddtcameroon.org](https://www.mddtcameroon.org)

Source: [https://github.com/Oben-Desmond/ma-vote-na-power](https://github.com/Oben-Desmond/ma-vote-na-power)

## Tech stack

- **React 19** + **Vite**
- **Tailwind CSS** for styling
- **React Router** for client-side routing
- **Firebase** (Hosting, and optional client SDK for forms/engagement features)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (LTS recommended)
- [Git](https://git-scm.com/)
- npm (included with Node.js)

### Clone the repository

```bash
git clone https://github.com/Oben-Desmond/ma-vote-na-power.git
cd ma-vote-na-power
```

### Install dependencies

```bash
npm install
```

### Environment variables (optional for local dev)

Most pages work without Firebase credentials. If you need Firebase-backed features locally (contact forms, blog engagement, etc.), copy the example env file and fill in values from the Firebase Console → Project settings → Your apps:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your `VITE_FIREBASE_*` values. This file is gitignored and should never be committed.

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite hot-reloads as you edit files.

### Build and preview production output

```bash
npm run build
npm run preview
```

`npm run build` writes static files to `dist/`, which is what Firebase Hosting serves.

### Lint

```bash
npm run lint
```

## Project structure

```
src/
  components/   # Reusable UI (NavBar, Footer, PageSEO, forms, etc.)
  pages/        # One file per route (HomePage, AboutPage, …)
  data/         # Site copy, images, articles, team, gallery, FAQs
  lib/          # Helpers (SEO, search, contact, newsletter)
  hooks/        # React hooks
  config/       # Firebase client config
public/         # Static assets (images, logos, robots.txt, sitemap.xml)
```

**Common places to edit content:**

| What you want to change | Where to look |
|-------------------------|---------------|
| Site name, contact info, social links | `src/data/constants.js` |
| Page titles & SEO metadata | `src/lib/seo.js` |
| Team members | `src/data/team.js` |
| Blog articles | `src/data/constants.js` (list) + `src/data/articleBodies.js` (body) |
| Gallery photos | `src/data/gallery.js`, `src/data/legacyImages.js` |
| Campaign / page images | `public/campaign/`, then update paths in `src/data/constants.js` |
| Routes | `src/App.jsx` |

## Making updates

1. Create a branch from `main` (recommended for larger changes):

   ```bash
   git checkout -b your-feature-name
   ```

2. Make your changes and verify locally with `npm run dev`.

3. Commit with a clear message describing **why** the change was made:

   ```bash
   git add .
   git commit -m "Short summary of the change"
   ```

4. Push and open a pull request, or merge directly to `main` for small fixes:

   ```bash
   git push origin your-feature-name
   ```

5. Once changes land on **`main`**, they are deployed automatically (see below). No manual deploy step is required for normal content or code updates.

## Deployment

The site is hosted on **Firebase Hosting**. Deployment is handled by GitHub Actions:

- **Production:** every push or merge to the `main` branch triggers `.github/workflows/firebase-hosting-merge.yml`, which runs `npm run build` and deploys the `dist/` folder to Firebase.
- **Pull requests:** preview channels may be created via `.github/workflows/firebase-hosting-pull-request.yml`.

You do **not** need to run `firebase deploy` locally unless you are debugging the hosting setup itself.

Firebase project: `ultratechgenius` (see `.firebaserc` and `firebase.json`).

### Domain and hosting configuration

The public domain **www.mddtcameroon.org** is connected to Firebase Hosting. DNS and domain settings are managed outside this repo, in **Hostinger hPanel**.

For questions about domain names, SSL, DNS records, or other hosting configuration, contact **Hedwig**.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/faqs` | Frequently Asked Questions |
| `/contact` | Contact |
| `/blog` | Blog & News |
| `/events` | Upcoming Events |
| `/gallery` | Gallery (photos & videos) |
| `/register` | Register to Vote |
| `/get-involved/volunteer` | Volunteer with Us |
| `/get-involved/partner` | Partner With Us |
| `/voting/voters-card` | How to obtain a voter's card |
| `/voting/electoral-process` | Electoral process in Cameroon |

## Logo variants

The `<Logo />` component supports several variants:

| Variant | Use |
|---------|-----|
| `horizontal-light` | White top bar (default header) |
| `horizontal-dark` | Blue nav or dark horizontal strips |
| `stacked-light` | Light sections, cards |
| `stacked-dark` | Footer, dark backgrounds |
| `icon-light` | Favicon, compact light UI |
| `icon-dark` | Compact on brand blue |

```jsx
<Logo variant="horizontal-light" />
```

## Questions?

- **Code & content updates:** open an issue or pull request on [GitHub](https://github.com/Oben-Desmond/ma-vote-na-power).
- **Domain / DNS / Hostinger:** contact **Hedwig**.
