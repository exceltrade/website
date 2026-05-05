# Xcel Trade LLC — Website (Next.js 14 App Router)

Production-grade enterprise AI consulting website built with **Next.js 14 App Router**.

## Stack
- **Framework:** Next.js 14 (App Router — `/app` directory)
- **Styling:** CSS-in-JS via `styled-jsx` (built into Next.js, zero config)
- **Fonts:** Syne + Instrument Sans (Google Fonts, loaded in `globals.css`)
- **SEO:** Native Next.js `metadata` API + `generateMetadata` per route
- **Sitemap:** `app/sitemap.js` — auto-generates `/sitemap.xml`
- **Robots:** `app/robots.js` — auto-generates `/robots.txt`
- **Deploy:** Vercel (zero config)

---

## 🚀 Deploy in 3 Steps

### Step 1 — Push to GitHub
```bash
cd xcel-app
git init
git add .
git commit -m "Initial commit — Xcel Trade LLC"
git remote add origin https://github.com/YOUR_USERNAME/xcel-trade.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"** → import your repo
3. Vercel auto-detects Next.js App Router → click **"Deploy"**
4. Live in ~2 minutes ✓

### Step 3 — Custom Domain
Vercel Dashboard → Settings → Domains → Add `xceltradellc.com`
SSL is automatic.

---

## 🏃 Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## 📁 Project Structure
```
xcel-app/
├── app/
│   ├── layout.js                # Root layout — Navbar, Footer, metadata, OrgSchema
│   ├── globals.css              # Design system + global styles
│   ├── page.js                  # Homepage
│   ├── not-found.js             # 404 page
│   ├── sitemap.js               # Auto-generates /sitemap.xml
│   ├── robots.js                # Auto-generates /robots.txt
│   ├── about/page.js
│   ├── contact/
│   │   ├── page.js              # Server component (metadata + layout)
│   │   └── ContactForm.js       # 'use client' form component
│   ├── services/
│   │   ├── page.js              # Services overview
│   │   └── [slug]/page.js       # Dynamic service pages (7 pages)
│   ├── insights/
│   │   ├── page.js              # Blog index
│   │   └── [slug]/page.js       # Dynamic blog posts (5 posts)
│   ├── case-studies/page.js
│   └── ai-adoption-framework/page.js
├── components/
│   ├── Navbar.js                # 'use client' — sticky nav + mobile menu + Services dropdown
│   └── Footer.js                # Server component
├── lib/
│   └── data.js                  # All content + SITE_URL constant
├── public/
│   └── images/og/               # Add OG images here (1200×630)
├── next.config.js
├── vercel.json
└── package.json
```

---

## ✏️ Updating Content
All content lives in **`lib/data.js`**:
- `SERVICES` — titles, descriptions, features, colors
- `BLOG_POSTS` — post metadata (add content in `insights/[slug]/page.js`)
- `CASE_STUDIES` — challenge, solution, results
- `FRAMEWORK_PHASES` — the 5-phase content
- `STATS`, `INDUSTRIES`, `FAQS` — supporting content
- `SITE_URL` — **update this to your actual domain before deploy**

---

## 🖼️ OG Images to Add
Create 1200×630px images and place in `public/images/og/`:
```
default.jpg
homepage.jpg
about.jpg
services.jpg
ai-framework.jpg
case-studies.jpg
insights.jpg
```

---

## 📬 Contact Form (Wire it up)
In `app/contact/ContactForm.js`, replace the `setTimeout` mock with:

**Formspree (easiest — free tier available):**
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error('Failed');
setSubmitted(true);
```

**Next.js API Route (full control):**
Create `app/api/contact/route.js` and `POST` from the form.

---

## ✅ Post-Deploy Checklist
- [ ] Update `SITE_URL` in `lib/data.js`
- [ ] Add OG images to `public/images/og/`
- [ ] Wire up contact form
- [ ] Submit sitemap in Google Search Console: `https://www.xceltradellc.com/sitemap.xml`
- [ ] Add Google Analytics script to `app/layout.js`
- [ ] Update LinkedIn/social URLs in `components/Footer.js`
- [ ] Replace placeholder contact email
