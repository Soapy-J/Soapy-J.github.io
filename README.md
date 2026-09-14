# Tania's Travels

A small static travel journal built with Astro, edited through Pages CMS, and intended to be hosted free on Cloudflare Pages.

## Local setup

```bash
git clone https://github.com/Soapy-J/taniaweb.git
cd taniaweb
npm install
npm run dev
```

Then open the local URL Astro prints (normally `http://localhost:4321`).

## What is where

- `src/content/posts/` — one Markdown file per journal entry.
- `public/images/` — uploaded photographs.
- `src/data/site.json` — site title, intro and About text.
- `.pages.yml` — Pages CMS editing configuration.
- `src/pages/map.astro` — automatic map using coordinates from posts.

## Pages CMS

1. Push this project to the GitHub repository.
2. Go to `https://app.pagescms.org`.
3. Sign in with GitHub.
4. Install/authorize the Pages CMS GitHub App for this repository.
5. Open `Soapy-J/taniaweb`.
6. The CMS should read `.pages.yml` and show **Journal posts** and **Site settings**.

Tania will need a GitHub account with write access to the repository if she is going to publish herself.

## Cloudflare Pages

In Cloudflare:

1. Go to **Workers & Pages** → **Create application** → **Pages**.
2. Choose **Import an existing Git repository**.
3. Select `Soapy-J/taniaweb`.
4. Production branch: `main`.
5. Build command: `npm run build`.
6. Build output directory: `dist`.
7. Deploy.

No Astro Cloudflare adapter is required because this project is fully static.

## Add a custom domain

Once the generated `*.pages.dev` site works, add a custom domain from the Pages project's **Custom domains** section.

## Publishing workflow

Tania opens Pages CMS → **Journal posts** → **New** → writes the post, uploads photographs and presses Save. Pages CMS commits the content to GitHub; Cloudflare automatically rebuilds and publishes the site.

## Map

For a pin to appear on `/map/`, enter both `latitude` and `longitude` on the post. If they are left blank, the post still works normally but is not shown on the map.

## First things to edit

- Edit `src/data/site.json` in Pages CMS under **Site settings**.
- Replace/delete the example `Hello from Tania` post.
- Change the colours/fonts in `src/styles/global.css` if desired.
