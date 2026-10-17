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

## Free hosting on GitHub Pages

The included GitHub Actions workflow builds the Eleventy site into `dist/` and deploys it to GitHub Pages. The free `github.io` address does not require buying a domain. GitHub Pages on GitHub Free requires the repository to be public, so do not put private source material or credentials in this repository.

1. Keep `Group Conversations/` private. It is excluded in `.gitignore`; do not remove that rule or upload the WhatsApp exports. Review the files being pushed before making the repository public.
2. Create a **public** GitHub repository and push the site source. Keep any private chat exports and personal information out of the repository.
3. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. Push to the repository's default branch. The workflow in `.github/workflows/pages.yml` installs dependencies, builds the site, and deploys it. Pull requests build the site but do not publish it.
5. After the workflow succeeds, find the published URL under **Settings → Pages**. A project repository uses `https://OWNER.github.io/REPOSITORY/`; a repository named `OWNER.github.io` uses `https://OWNER.github.io/`.

The workflow sets Eleventy's path prefix automatically, so internal links and assets work under the repository URL. No custom domain or paid hosting feature is needed. GitHub Pages limits and terms can change; check GitHub's current documentation before publishing.

Official setup and usage information:
- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

### Optional: deploy as a Cloudflare Worker

For a Worker deployment instead, use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. The checked-in `wrangler.jsonc` points Wrangler at Eleventy's `dist/` output. Cloudflare Workers has a free plan with limits; check current terms before deploying.

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
