# Opervia

Static site for websites and lead follow-up for U.S. HVAC companies. The demo runs on sample data. The calculator runs locally. The contact form opens a draft in the visitor's mail app.

## Local preview

From the repository root, run `python3 -m http.server 8000` and open http://localhost:8000/. Python's basic server does not apply `_headers`. To check the Content Security Policy, serve the same files locally with the headers in that file or inspect a Cloudflare Pages preview.

## Cloudflare Pages

1. In Workers & Pages, create a Pages project connected to `kaleem04/my_portfolio`.
2. Set the production branch to `opervia-rebrand`. Select the **None** framework preset, leave **Build command** blank, and set **Build output directory** to `/` (repository root). Leave **Root directory** at the repository root.
3. Deploy and test the Pages URL. In the project's **Custom domains** tab, choose **Set up a custom domain** and add `opervia.host`. For this apex domain, use the Cloudflare zone for `opervia.host` in the same account.
4. Once active, open https://opervia.host/ and check the response headers and public URL.

## Content updates

The HTML comments beginning with `TODO` identify missing sample links, the booking link, optional pricing and biography details, and the mailing address. Design tokens live in `styles/tokens.css`. The original demo behavior lives in `scripts/main.js`.
