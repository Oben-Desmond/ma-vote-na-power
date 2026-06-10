# Ma Vote Na Power — Developer Guide

**MDDT Cameroon · Not Too Young To Vote**

---

## About the project

Ma Vote Na Power is the public website for MDDT Cameroon's youth voting advocacy campaign. The site supports the **Not Too Young To Vote** initiative and the **Ma Vote 2025 na pawa** message — encouraging young people to register, vote peacefully, and participate in civic life.

The live site is at **https://www.mddtcameroon.org**.

The codebase is a modern web application (React, Vite, Tailwind CSS) that serves informational pages, blog content, event listings, a photo gallery, and forms for contact, registration, volunteering, and partnerships.

---

## Getting the code

The project is hosted on GitHub:

**https://github.com/Oben-Desmond/ma-vote-na-power**

Clone it to your machine:

```
git clone https://github.com/Oben-Desmond/ma-vote-na-power.git
cd ma-vote-na-power
```

You need Git and Node.js installed. Use the current LTS version of Node.js.

---

## Running the project locally

Install dependencies once:

```
npm install
```

Start the development server:

```
npm run dev
```

Open **http://localhost:5173** in your browser. The app reloads automatically when you save changes.

To build a production version locally:

```
npm run build
npm run preview
```

Most of the site works without extra setup. Some features that talk to Firebase (forms, engagement) may need environment variables — copy `.env.example` to `.env.local` and fill in the values if you need those features locally. Do not commit `.env.local`.

---

## Making updates

Work on a branch if the change is substantial. For small fixes, committing directly to `main` is fine.

Typical workflow:

1. Pull the latest `main`.
2. Make your changes and check them locally with `npm run dev`.
3. Commit and push to GitHub.
4. Merge into `main` when ready.

Site copy, images, team profiles, blog posts, and gallery content are updated by editing the relevant data files and assets in the repository. Page layout and styling follow the existing component structure — match what's already there rather than introducing new patterns unless necessary.

---

## Deployment

The site is hosted on **Firebase Hosting**.

You do not deploy manually for normal updates. When changes are **committed or merged to the `main` branch**, GitHub Actions automatically builds the site and publishes it to Firebase. Wait for the workflow to finish after pushing — the live site will update shortly after.

Pull requests may get preview deployments depending on the GitHub Actions setup.

---

## Domain and hosting configuration

The public domain **www.mddtcameroon.org** points to Firebase Hosting. DNS records, SSL, and domain settings are managed in **Hostinger hPanel**, not in this repository.

For any changes to the domain name, DNS, or hosting configuration outside the codebase, contact **Hedwig**.

---

## Summary

| Topic | Detail |
|-------|--------|
| Live site | https://www.mddtcameroon.org |
| Repository | https://github.com/Oben-Desmond/ma-vote-na-power |
| Local dev | `npm install` → `npm run dev` |
| Deploy | Merge or push to `main` — automatic via Firebase / GitHub Actions |
| Domain / DNS | Hostinger hPanel — contact Hedwig |

---

*Ma Vote Na Power · MDDT Cameroon*
