// Gera portfolio.pdf a partir de portfolio.html (uma página 16:9 por slide).
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  await page.goto("file://" + path.resolve(__dirname, "portfolio.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.resolve(__dirname, "portfolio.pdf"),
    width: "960px",
    height: "540px",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log("portfolio.pdf gerado.");
})();
