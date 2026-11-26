# Brian Fajardo — Portfolio

Interactive WebGL & motion portfolio featuring a 408k-particle LiDAR depth portrait stage, gooey SVG morph typography, WebGL strip/grid project views, Case Study split views (`/work/<slug>`), and Netlify Forms contact integration.

## Local Preview

```bash
npm install
npm start
```

Open `http://localhost:3000/portfolio`.

## Deploy to GitHub & Netlify

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Brian Fajardo portfolio"
   git branch -M main
   git remote add origin https://github.com/Briancute/brian-fajardo-portfolio.git
   git push -u origin main
   ```
2. Import the repository in **Netlify** (or deploy via `netlify deploy --prod`):
   - **Publish directory**: `public` (preconfigured in `netlify.toml`)
   - **Security headers & SPA rewrites**: preconfigured in `netlify.toml`, `public/_headers`, and `public/_redirects`
   - **Contact form**: preconfigured with Netlify Forms (`name="contact" data-netlify="true"`)
