# Gang of Dusters

An owner-first, static website for the unofficial Gang of Dusters community.
The current site is curated from anonymized summaries of the WhatsApp exports;
the exports themselves are private source material and must not be published.

## Run locally

```sh
npm install
npm run dev
```

Build the static site into `dist/`:

```sh
npm run build
```

## Deploy on Netlify

Connect the GitHub repository to Netlify and deploy the default branch. The checked-in `netlify.toml` configures Netlify to run `npm run build` and publish Eleventy's `dist/` output. Keep `Group Conversations/` private; it is excluded in `.gitignore`, so do not remove that rule or upload the WhatsApp exports.

## Managing blog posts later

Keep Eleventy as the static site generator. When the blog is ready, add posts as Markdown files and configure [Pages CMS](https://pagescms.org/docs/) with a `.pages.yml` at the repository root. Pages CMS edits files in GitHub; it does not replace Eleventy or require a separate content database. A change committed through the CMS can trigger the GitHub Pages workflow. Review CMS access and service terms when setting it up.

## Content and publishing notes

- Update `src/_data/site.json` for curated owner notes, mileage examples and community information.
- All WhatsApp invite buttons use the single `communityInvite` value in that data file. Confirm the invite is still current and intended for public sharing before publishing.
- Keep names, phone numbers, private message text and identifying anecdotes out of public content. Obtain explicit permission before publishing identifiable member material.
- Keep owner experience separate from official Renault information. Check Renault India's current Duster page before changing the powertrain list or publishing trim and price details. Do not infer a variant or diagnose a safety issue. Do not turn repeated opinions into votes.
- The 2026 Duster images in `public/images/` are copied from Renault India's official Duster page/CDN and credited on the site. `renault-duster-2026-key-visual-hd.jpg` is the 2560 x 1920 manufacturer image used for the photo-led sections. These are manufacturer-supplied marketing images, not community owner photos. Do not generate replacement vehicle imagery or imply the images depict an owner-submitted vehicle.
- The site is not affiliated with Renault. Peer advice is not professional diagnosis or official service guidance.

Official image source: [Renault India — New Duster](https://www.renault.co.in/cars/renault-duster.html).
