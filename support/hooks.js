const pw = require('playwright');
const { BeforeAll, Before, After, AfterAll } = require('cucumber');

// Launch options.
const options = {
  headless: false
};

// Create a global browser for the test session.
BeforeAll(async () => {
  global.browser = await pw.chromium.launch(options);
});
AfterAll(async () => {
  await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});
After(async () => {
  await global.page.close();
  await global.context.close();
});
