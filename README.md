# Your website

Three files, no build step, no framework:

- `index.html` — content and structure
- `style.css` — the whole visual design (a "drought index" theme: warm dark
  background, amber = drought / teal = wet, used as a recurring stripe motif)
- `script.js` — draws the index strip, mobile menu, footer year

## 1. Edit your content

Open `index.html` in any text editor. Search for `[Edit me]` and `[Add link]`
— those mark every spot that needs your real details:

- Your email (in the `mailto:` link and the Contact section)
- Google Scholar / LinkedIn / GitHub links
- Real publication titles, journals, years, and links
- Blog posts (the three there now are placeholders — replace or delete them)
- The About section bio paragraph

Everything else (colours, fonts, layout) lives in `style.css` if you want to
adjust it — the top of the file has a `:root` block with all the colours
named, so you can retheme the whole site by changing a handful of hex values.

## 2. Preview it locally

Just double-click `index.html` — it opens in your browser, no server needed.

## 3. Put it online for free

Three good free options, easiest first:

### Option A — GitHub Pages (recommended, free forever, your own subdomain)

1. Create a free GitHub account if you don't have one, and a new repository
   — name it exactly `your-username.github.io` (replace `your-username`
   with your actual GitHub username).
2. Upload `index.html`, `style.css`, and `script.js` to that repository
   (drag-and-drop works on github.com — use "Add file → Upload files").
3. Go to the repo's **Settings → Pages**, and under "Build and deployment"
   set Source to "Deploy from a branch", branch `main`, folder `/root`.
4. Save. Your site is live at `https://your-username.github.io` within a
   few minutes.
5. To update later: edit the files locally and re-upload, or use `git push`
   if you're comfortable with git.

### Option B — Netlify (free, fastest to update, custom domain support)

1. Create a free account at netlify.com.
2. Drag the whole site folder onto the Netlify dashboard ("Deploys" tab has
   a drag-and-drop zone) — it deploys instantly with a `*.netlify.app` URL.
3. You can rename the subdomain for free in Site settings, or connect a
   custom domain later if you buy one.

### Option C — Cloudflare Pages (free, good performance, custom domain support)

1. Create a free Cloudflare account.
2. Go to Workers & Pages → Create → Pages → Upload assets, and upload the
   folder.
3. You get a `*.pages.dev` URL immediately.

## Optional: a custom domain (e.g. josephcharles.com)

All three hosts above support connecting a domain you buy separately
(from a registrar like Namecheap, Google Domains successor Squarespace
Domains, or similar) — typically $10-15/year. Once bought, you point its
DNS at GitHub Pages / Netlify / Cloudflare Pages following their
"custom domain" docs, and the free hosting continues to work as-is.

## Adding real blog posts later

For now, the Blog section is a static grid of placeholder cards. The
simplest upgrade path once you have a few real posts:
- Keep it simple: write each post as its own `post-slug.html` file using
  the same header/footer, and link to it from the blog card.
- Or move to a static site generator (e.g. Hugo, Eleventy) if you want
  posts written in Markdown — a bigger step, only worth it once you're
  posting regularly.
