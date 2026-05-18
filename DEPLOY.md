# Deploy - E&ICT Academy Demo

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
```

The build emits a fully static site into `out/`. You can preview it with any
static file server, for example:

```bash
npx serve out
```

## GitHub Pages (automated via CI/CD)

This repository is wired to publish to GitHub Pages on every push to `main`.

### Live URL

For a project page the site is served at
`https://<owner>.github.io/<repo>/` — e.g. `https://Partha607.github.io/iitg-eict-demo/`.

If you point a custom domain at the repo, the site is served at the domain
root and no base path is needed.

### One-time repository setup

1. Push the repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
   (Do not pick "Deploy from a branch" — we publish from the workflow artifact.)

That's it. The next push to `main` runs `.github/workflows/deploy.yml`, builds
the static export, and deploys it.

### How the workflow works

`.github/workflows/deploy.yml`:

1. Checks out the code.
2. Sets up Node 20 with npm cache.
3. Calls `actions/configure-pages@v5`, which determines the correct base path
   automatically:
   - **Project page** (`<owner>.github.io/<repo>`): base path is `/<repo>`.
   - **User/org page** or **custom domain**: base path is empty.
4. Runs `npm ci` then `npm run build` with `NEXT_PUBLIC_BASE_PATH` set to the
   value from step 3. `next.config.ts` consumes that env var to apply
   `basePath` + `assetPrefix`, and `src/app/layout.tsx` uses it to prefix the
   favicon URLs.
5. Uploads `out/` as a Pages artifact.
6. A second job deploys the artifact with `actions/deploy-pages@v4`.

`.github/workflows/ci.yml` runs typecheck + lint + build on pull requests and
on pushes to non-main branches, so problems are caught before they ever reach
`main`.

### Custom domain

To use a custom domain (e.g. `eict.example.com`):

1. Add a `CNAME` file containing the domain name to the `public/` directory.
   It will be copied verbatim into the deployment artifact.
2. Configure DNS for the domain to point at GitHub Pages.
3. In **Settings → Pages**, add the custom domain and enforce HTTPS.

When a custom domain is set the site is served from the domain root, so
`actions/configure-pages` reports an empty base path, and the build picks
that up automatically — no further config changes required.

## Notes on static export

Because GitHub Pages serves static files only, this project is built with
Next.js's `output: "export"`. That has a few implications:

- **No API routes, server actions, middleware, or on-demand revalidation.**
  This codebase doesn't use any of those, so the change is transparent.
- **`next/image` runs without the optimizer.** `images.unoptimized: true` in
  `next.config.ts` makes Next render plain `<img>` tags. Image dimensions and
  `<Image fill>` behavior still work.
- **`trailingSlash: true`** so every route becomes `<route>/index.html`. This
  matches how GitHub Pages serves directories and avoids 404s on deep links.
- **`public/.nojekyll`** is included to prevent GitHub Pages' Jekyll layer from
  stripping the `_next/` directory.

## Demo routes

| Route | Purpose |
|-------|---------|
| `/` | Split entry (Academy vs Portal) |
| `/academy/*` | Public site |
| `/portal/login` | Mock login |
| `/portal/register` | Registration stepper |
| `/portal/lms` | LMS dashboard |
| `/portal/staff` | Staff dashboard |
| `/portal/admin/cms` | CMS table |
| `/portal/admin/enquiries` | Enquiry Kanban |

## Alternative hosts

If you'd rather not use GitHub Pages, the `out/` directory works on any static
host (Netlify, Cloudflare Pages, S3 + CloudFront, plain Nginx, etc.). For
those targets you typically want to leave `NEXT_PUBLIC_BASE_PATH` unset so the
site is served from the domain root.
