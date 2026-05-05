# Xcel Trade LLC — Website

Enterprise AI consulting website built with **Next.js 14** + **Framer Motion** + **next-seo**.

## Stack
- **Framework:** Next.js 14 (Pages Router)
- **SEO:** next-seo
- **Animations:** Framer Motion
- **Styling:** CSS-in-JS (styled-jsx, built into Next.js)
- **Fonts:** Syne + DM Sans (Google Fonts)
- **Deploy:** Vercel

---

## 🚀 Deploy in 5 Minutes

### Step 1 — Push to GitHub

```bash
# From this folder
git init
git add .
git commit -m "Initial commit — Xcel Trade LLC website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/xcel-trade-website.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"**
3. Import your `xcel-trade-website` repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site is live in ~2 minutes at `your-project.vercel.app`

### Step 3 — Add Your Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `xceltradellc.com` and `www.xceltradellc.com`
3. Update your DNS records as instructed by Vercel
4. SSL is automatic

---

## 🏃 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
xcel-trade/
├── pages/
│   ├── _app.js              # App wrapper + DefaultSeo
│   ├── _document.js         # HTML document
│   ├── index.js             # Homepage
│   ├── about.js             # About page
│   ├── contact.js           # Contact page
│   ├── ai-adoption-framework.js
│   ├── sitemap.xml.js       # Dynamic sitemap
│   ├── robots.txt.js        # Robots.txt
│   ├── 404.js               # Custom 404
│   ├── services/
│   │   ├── index.js         # Services overview
│   │   └── [slug].js        # Dynamic service pages
│   ├── insights/
│   │   ├── index.js         # Blog index
│   │   └── [slug].js        # Blog post pages
│   └── case-studies/
│       └── index.js         # Case studies
├── components/
│   ├── Layout.js            # Page wrapper
│   ├── Navbar.js            # Navigation
│   └── Footer.js            # Footer
├── styles/
│   └── globals.css          # Design system + global styles
├── lib/
│   ├── data.js              # All site content (services, posts, etc.)
│   └── seo.js               # SEO data + schema markup
├── public/
│   └── images/              # Add OG images, logo here
├── next.config.js
├── vercel.json
└── package.json
```

---

## ✏️ Customizing Content

All content is in `lib/data.js`:
- `SERVICES` — Edit service names, descriptions, features
- `BLOG_POSTS` — Add/edit blog post metadata
- `CASE_STUDIES` — Edit case study content
- `FRAMEWORK_PHASES` — Edit the 5-phase framework
- `STATS` — Edit company statistics
- `FAQS` — Edit FAQ content

All SEO (meta titles, descriptions, OG images) is in `lib/seo.js`.

---

## 🖼️ Images to Add

Add these to `public/images/`:

```
public/
└── images/
    ├── og/
    │   ├── default.jpg        (1200×630)
    │   ├── homepage.jpg       (1200×630)
    │   ├── about.jpg          (1200×630)
    │   ├── services.jpg       (1200×630)
    │   ├── ai-framework.jpg   (1200×630)
    │   ├── case-studies.jpg   (1200×630)
    │   └── insights.jpg       (1200×630)
    └── xcel-trade-logo.png    (for schema markup)
```

---

## 📬 Contact Form

The contact form in `pages/contact.js` simulates submission by default.

To make it functional, replace the `handleSubmit` function with one of:

**Option A — Formspree (easiest, free)**
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — Next.js API Route + Resend/SendGrid**
Create `pages/api/contact.js` and call it from the form.

---

## 🔍 Post-Deploy Checklist

- [ ] Add real OG images to `public/images/og/`
- [ ] Update `SITE_URL` in `lib/seo.js` to your actual domain
- [ ] Update contact email throughout
- [ ] Set up Google Analytics (add GA4 script to `_document.js`)
- [ ] Submit sitemap in Google Search Console
- [ ] Configure contact form with real email handler
- [ ] Update LinkedIn URL in Footer.js and lib/seo.js

---

Built by Xcel Trade LLC · [xceltradellc.com](https://www.xceltradellc.com)
