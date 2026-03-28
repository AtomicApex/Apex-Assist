# Apex Assist — website

Next.js + Tailwind site for Apex Assist (Brighton, VIC). Deploy on [Vercel](https://vercel.com).

## Preview on your computer (localhost)

You need [Node.js LTS](https://nodejs.org) (includes `npm`). In this folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

## Environment variables (optional)

Copy `.env.example` to `.env.local` and set your SMS number, or edit `lib/site.ts`. Never commit `.env.local` (it is gitignored).

## Push to GitHub

1. Install [Git for Windows](https://git-scm.com/download/win) if `git` is not recognized in PowerShell. Restart the terminal after installing.
2. Create a **new empty repository** on GitHub (no README/license if you will push an existing project), e.g. `apex-assist`.
3. In this folder run (replace `YOUR_USER` and `YOUR_REPO`):

```bash
git init
git add .
git commit -m "Initial commit: Apex Assist site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Use **GitHub Desktop** instead if you prefer a graphical flow.

## Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import your `apex-assist` repository.
3. Framework: **Next.js** (auto-detected). Root directory: project root. Build command: `next build`, output: default.
4. Add environment variables from `.env.example` if you use them, then **Deploy**.

After deploy, Vercel gives you a live URL (e.g. `https://apex-assist-xxx.vercel.app`). Custom domains can be added in the project **Settings → Domains**.
