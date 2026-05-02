# Kota Road Assist (Static Website)

Single-page, mobile-first static website for **Kota Road Assist** (operated by **Blackstone Traders**) focused on emergency roadside help in Kota, Rajasthan.

## Local preview
Open `index.html` directly or run a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to Cloudflare Pages
1. Push this repository to GitHub.
2. In Cloudflare Pages, create project and connect this repo.
3. Framework preset: **None**.
4. Build command: *(leave empty)*
5. Build output directory: `/`
6. Deploy.

## Where to edit business info
- Phone / WhatsApp links: `index.html`
- Email and address: `index.html`
- Structured data contact details: `assets/js/main.js`

## Where to replace images
Replace files inside `assets/img/` while keeping same filenames:
- `hero-roadside-assist.webp`
- `battery-jumpstart.webp`
- `battery-replacement.webp`
- `fuel-delivery.webp`
- `flat-tyre-help.webp`
- `technician.webp`

## Translations
- Translation dictionary: `assets/js/i18n.js`
- Any text with `data-i18n` in `index.html` is translated by key.
- Language preference is stored in `localStorage` (`kra_lang`).

## Accessibility controls
- Buttons in header “Accessibility” panel:
  - Increase text size
  - Decrease text size
  - High contrast mode
  - Reset
- Stored in `localStorage`:
  - `kra_scale`
  - `kra_contrast`


## Replacing Placeholder Images
1. Upload optimized images to `assets/img/`.
2. Use these exact filenames:
   - `hero-roadside-assist.webp`
   - `battery-jumpstart.webp`
   - `battery-replacement.webp`
   - `flat-tyre-help.webp`
   - `fuel-delivery.webp`
   - `technician.webp`
3. In `index.html`, replace each placeholder `<div class="image-slot ...">` with the prepared commented `<img>` tag shown beside it.
4. Commit and push changes to `main`.
5. Cloudflare Pages will auto-deploy the updated site.
