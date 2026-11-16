# Jiahui Zhang — Academic Homepage

A minimal, typography-first academic homepage inspired by the clarity of
researcher websites such as `vedder.io`.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Edit your information

The homepage content lives in `app/page.tsx`. Replace the placeholder biography,
email, profile links, publications, and notes there. Global visual styles live
in `app/globals.css`.

Replace `public/jiahui-zhang.webp` if you want to use a different portrait.

## Deploy to GitHub Pages

1. Create a GitHub repository named `YOUR_USERNAME.github.io`.
2. Push this project to its `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **GitHub Actions**.

The included workflow builds and publishes the static site automatically on
every push to `main`.
