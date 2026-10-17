# Portfolio (EN) — "Creative Lab Report"

An 8-page, 16:9 portfolio for a Creative Strategist / Video Editor, with its own
visual identity: warm paper background, black ink, signal-orange accent, condensed
display type. Each ad case reads as an experiment (hypothesis → hook → angle → role → result).

| Page | Content |
|---|---|
| 01 | Cover: headline, name, phone mockups, 4 headline stats |
| 02 | Contents: the four experiments and their key result |
| 03–06 | One case per page: 9:16 creative, hypothesis, hook, angle, role, results panel, CPA vs. control, Ads Manager proof |
| 07 | Method: the 5-step creative loop + what you test |
| 08 | About, testimonial, brand logos, contact |

## Swapping in your content

- **Text**: edit `portfolio.html` directly. Each page is a commented `<section class="slide">`.
- **Images** (go in `assets/img/`, and appear automatically in place of the placeholders):
  - `case-1.jpg` … `case-4.jpg`: a strong frame from each ad (vertical 9:16). The hook frame works best.
  - `proof-1.png` … `proof-4.png`: Ads Manager screenshots for each case
  - `photo.jpg`: your photo
  - `logo-01.png` … `logo-06.png`: client logos (transparent PNG)
- **Video links**: each case has `<a class="watch" href="#">`. Replace `#` with the ad's link (Drive, YouTube, Ad Library).
- **Numbers**: every metric shown is sample data. When your real numbers are in, add `class="final"` to `<body>` to hide the "SAMPLE DATA" tags.

## Build the PDF

```bash
npm install
npm run build:en   # writes en/portfolio.pdf
```
