# Deploy — EICT Academy Demo

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Vercel (recommended)

1. Push this repo to GitHub.
2. Import project in [vercel.com](https://vercel.com).
3. Framework preset: **Next.js**
4. Deploy — no environment variables required for this frontend-only demo.

## Netlify

- Build command: `npm run build`
- Publish directory: `.next` (use Netlify Next.js runtime plugin) or deploy via `npx @netlify/plugin-nextjs`

## Demo routes

| Route | Purpose |
|-------|---------|
| `/` | Split entry (Academy vs Portal) |
| `/academy/*` | Public site |
| `/portal/login` | Mock login |
| `/portal/register` | TTL registration stepper |
| `/portal/lms` | LMS dashboard |
| `/portal/admin/cms` | CMS table |
| `/portal/admin/enquiries` | Kanban board |
