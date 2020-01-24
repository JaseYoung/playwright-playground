const pw = require("playwright");

(async () => {
  const browser = await pw.webkit.launch({ headless: false }); // or 'chromium', 'firefox'
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://lego.com/");
  await page.screenshot({ path: "test.png" });

  await browser.close();
})();
