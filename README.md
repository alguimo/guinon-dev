# guinon.dev

Personal CV and portfolio for Álvaro M. Guiñón.

The site is a static Astro project with Spanish, English and French routes:

- `/es/`
- `/en/`
- `/fr/`

## Stack

- Astro
- HTML and CSS
- Java, Spring Boot and Angular in the professional profile
- GitHub Pages for deployment

## Local development

Use Node `24.15.0` or any version supported by the `engines` field in `package.json`.

```sh
nvm use
npm ci
npm run dev
```

The development server runs at `http://localhost:4321`.

## Production build

```sh
npm run build
```

Astro writes the static site to `dist/`. The GitHub Actions workflow builds and publishes that directory on every push to `main`.

## Domain

`public/CNAME` configures `guinon.dev` as the GitHub Pages custom domain. The repository settings must use **GitHub Actions** as the Pages source, and the domain DNS must point to GitHub Pages.
