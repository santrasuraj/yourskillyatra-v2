# 🚀 Deploy YourSkillYatra on Hostinger — Complete Guide

> **Requirements:** Hostinger **Business** or **Cloud** plan (₹149–₹299/mo)
> These are the only plans that support Node.js / Next.js apps.

---

## ⚠️ Before You Start — Fix Your Code

### Fix 1: `next.config.ts` — Clean it up for production

Your current config has dev-only settings that will break the Hostinger build. Replace the entire file with this:

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No turbopack (dev only), no allowedDevOrigins (dev only)
};

export default nextConfig;
```

> [!WARNING]
> The `turbopack.root` and `allowedDevOrigins` options are **development-only** and must be removed before deploying. Keeping them will cause the production build to fail.

### Fix 2: Verify `package.json` start script

Make sure your `package.json` has this exact `start` script (it already should):

```json
"scripts": {
  "dev": "next dev -p 3001",
  "build": "next build",
  "start": "next start"
}
```

Hostinger will use a **modified start command** — you don't need to change this file.

### Fix 3: Verify `.gitignore`

Make sure these are in your `.gitignore`:
```
.next/
node_modules/
.env.local
```

---

## PHASE 1 — Push Code to GitHub

### Step 1.1 — Create GitHub Repository

1. Go to [github.com](https://github.com) → Click **"+"** → **New Repository**
2. Name: `yourskillyatra-v2`
3. Set to **Private**
4. Do NOT initialize with README (your project already has one)
5. Click **Create Repository**

### Step 1.2 — Push Your Code

Open terminal in your project folder and run these commands **one by one**:

```bash
git init
git add .
git commit -m "Production build — YourSkillYatra"
git remote add origin https://github.com/YOUR_USERNAME/yourskillyatra-v2.git
git branch -M main
git push -u origin main
```

> [!TIP]
> Replace `YOUR_USERNAME` with your actual GitHub username. If you already did `git init` before, skip that line and start from `git add .`

---

## PHASE 2 — Set Up Hostinger

### Step 2.1 — Log In to hPanel

1. Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Log in with your Hostinger account

### Step 2.2 — Add a New Website (Node.js Type)

1. In hPanel sidebar → Click **"Websites"**
2. Click **"Add Website"** (top right)
3. When asked "What type of website?", select → **"Node.js App"**
4. If you see a domain selection screen, choose your domain (`yourskillyatra.com`)

> [!IMPORTANT]
> If your domain is already attached to an existing WordPress/HTML website, you'll need to **delete** that website first (take a backup!). Hostinger's Node.js apps require a fresh website slot.

### Step 2.3 — Connect GitHub Repository

1. In the Node.js App setup, select **"Import from GitHub"**
2. Click **"Authorize Hostinger"** → Allow access on GitHub
3. Select your repository: `yourskillyatra-v2`
4. Select branch: `main`

### Step 2.4 — Configure Build Settings

Fill in these **exact** settings:

| Setting | Value |
|---|---|
| **Node.js Version** | `20` (LTS) |
| **Install Command** | `npm ci` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm run start -- -p $PORT` |
| **Output Directory** | *(leave blank or `.next`)* |

> [!IMPORTANT]
> The start command **MUST** be `npm run start -- -p $PORT` — not just `npm start`. The `$PORT` part tells Next.js to use the port Hostinger assigns, which is critical for it to work.

### Step 2.5 — Add Environment Variables

Before deploying, go to the **Environment Variables** section in the same setup screen and add:

| Key | Value |
|---|---|
| `ADMIN_PASSWORD` | `your-actual-password` |
| `NODE_ENV` | `production` |

> [!CAUTION]
> Never put your `.env.local` file in GitHub. Always add secrets manually here in hPanel.

### Step 2.6 — Deploy!

1. Click **"Deploy"**
2. Hostinger will now:
   - Pull your code from GitHub
   - Run `npm ci` (install dependencies)
   - Run `npm run build` (build Next.js)
   - Start your app with `npm run start -- -p $PORT`
3. Wait **3–5 minutes** for the build to complete
4. You'll see a **green status** when it's live ✅

---

## PHASE 3 — Connect Your Domain

### If domain is registered with Hostinger:
- It's automatically connected. Nothing to do. ✅

### If domain is registered elsewhere (GoDaddy, Namecheap, BigRock, etc.):

In Hostinger hPanel → **Domains** → Find your domain → Get the **Nameservers**. They'll look like:
```
ns1.dns-parking.com
ns2.dns-parking.com
```

Then go to your domain registrar → DNS/Nameserver settings → Replace with Hostinger's nameservers.

> [!NOTE]
> Nameserver changes take **24–48 hours** to propagate globally. Your site will be unreachable during this time from some locations.

### SSL Certificate (HTTPS)
Hostinger auto-issues a **free SSL** via Let's Encrypt once the domain points to them.
Go to hPanel → SSL → Click **"Install"** if it's not auto-installed.

---

## PHASE 4 — Auto-Deploy on Code Changes

After initial setup, every time you update your site:

```bash
git add .
git commit -m "Updated homepage hero section"
git push
```

Go to hPanel → Your Website → **Git** tab → Click **"Pull"** or set up a webhook for fully automatic deploys.

---

## 🔍 Troubleshooting Common Issues

### ❌ Build Failed
- Check if `npm run build` works locally first: run it in your terminal
- Make sure `next.config.ts` has no dev-only options

### ❌ App Starts But Shows Blank Page
- Check that the start command has `-- -p $PORT` at the end
- Check environment variables are set correctly

### ❌ 500 Error After Deploy
- Go to hPanel → Logs → Check the error message
- Usually means a missing environment variable

### ❌ Domain Not Working
- Make sure nameservers are pointed to Hostinger
- Wait 24–48 hours for DNS propagation
- Check SSL is installed

---

## 📊 Summary — What Hostinger Plan You Need

| Plan | Node.js Support | Price (approx) |
|---|---|---|
| Premium Shared | ❌ No | ₹99/mo |
| **Business Shared** | ✅ **Yes** | ₹149–₹199/mo |
| Cloud Starter | ✅ Yes | ₹299/mo |

👉 **Business Shared is the minimum plan** you need for Next.js on Hostinger.

---

## ✅ Final Checklist

- [ ] `next.config.ts` cleaned (no `turbopack`, no `allowedDevOrigins`)
- [ ] Code pushed to GitHub (`main` branch)
- [ ] Hostinger plan is Business or Cloud
- [ ] Node.js App created in hPanel
- [ ] GitHub repo connected
- [ ] Build settings filled in correctly (especially `-- -p $PORT`)
- [ ] Environment variables added
- [ ] Deployed successfully (green status)
- [ ] Domain connected
- [ ] SSL installed
