// Gera <pasta>/portfolio.pdf a partir de <pasta>/portfolio.html (uma página 16:9 por slide).
// Uso: node build.js [pasta]   (padrão: raiz do repositório)
const path = require("path");
const { chromium } = require("playwright");

const dir = path.resolve(__dirname, process.argv[2] || ".");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  await page.goto("file://" + path.join(dir, "portfolio.html"), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(dir, "portfolio.pdf"),
    width: "960px",
    height: "540px",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log(path.join(dir, "portfolio.pdf") + " gerado.");
})();
