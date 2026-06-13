# nomad-translator-pages

Static SEO and support site for Nomad Translator.

## Structure

- `/` language chooser with auto-redirect
- `/en/` English landing page
- `/vi/` Vietnamese landing page
- `/en/articles/` English SEO hub
- `/vi/articles/` Vietnamese SEO hub
- `/about.html` app overview
- `/support.html` support page
- `/privacy-policy.html` privacy page

## Rebuild pages

Run:

```bash
node scripts/build-seo-pages.mjs
```

The generator rewrites the landing pages, article pages, aliases, sitemap, robots, and supporting metadata files.

## Publishing

This repo is configured for the custom domain:

`https://nomad-translator.com`

If you move the site later, update `siteUrl` in [scripts/build-seo-pages.mjs](/Users/kelvin/Downloads/nomad-translator-pages/scripts/build-seo-pages.mjs).
