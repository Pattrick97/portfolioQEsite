# Quality Engineer Portfolio

A static, recruiter-focused landing page based on the `Pattrick97/portfolioQE` project.

## Files

- `index.html` — page content
- `styles.css` — responsive visual design
- `script.js` — tiny progressive-enhancement script

No build step, framework or npm dependencies are required.

## Before publishing

Edit `index.html` and replace:

- the LinkedIn URL
- your CV URL (add a CV button if desired)
- the display name if you want your real name instead of `Pattrick97`

The GitHub links already point to:

https://github.com/Pattrick97/portfolioQE

## Local preview

Because this is static HTML, you can open `index.html` directly in a browser.

For a more realistic local server:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## Deploy

Recommended: Cloudflare Pages.

1. Create a new GitHub repository for this site, e.g. `qe-portfolio-site`.
2. Upload these three files.
3. In Cloudflare Dashboard open **Workers & Pages**.
4. Create a Pages project and connect the GitHub repository.
5. For a static site, no build command is required.
6. Set the output directory to `/` if the dashboard asks for it.
7. Deploy.
8. Add your custom domain under **Custom domains**.

You can also deploy the same folder with GitHub Pages or another static host.
