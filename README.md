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
- `roadside-assistance-kota.webp`
- `jump-start.webp`
- `truck-jump-start.webp`
- `battery-replacement.webp`
- `flat-tyre-help.webp`
- `emergency-fuel-delivery.webp`
- `footer-banner.webp`

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
   - `roadside-assistance-kota.webp`
   - `jump-start.webp`
   - `truck-jump-start.webp`
   - `battery-replacement.webp`
   - `flat-tyre-help.webp`
   - `emergency-fuel-delivery.webp`
   - `footer-banner.webp`
3. Keep the same dimensions where possible: hero `1200x750`, service cards `1200x675`, footer banner `1440x480`.
4. Commit and push changes to `main`.
5. Cloudflare Pages will auto-deploy the updated site.


## How to add images
1. Open the GitHub repo.
2. Go to `assets/img/`.
3. Upload images with these exact filenames:
   - `roadside-assistance-kota.webp`
   - `jump-start.webp`
   - `truck-jump-start.webp`
   - `battery-replacement.webp`
   - `flat-tyre-help.webp`
   - `emergency-fuel-delivery.webp`
   - `footer-banner.webp`
4. Recommended image size:
   - Service images: 1200x675
   - Hero image: 1200x750
   - Footer banner: 1440x480
5. Recommended format: `.webp`
6. Keep each file below 500 KB if possible.
7. Commit the upload.
8. Cloudflare Pages will redeploy automatically.
