const { Given, Then } = require('cucumber');
const { HomePage } = require('../page_objects/homepage');

const homepage = new HomePage();

Given('I go to the homepage', async function() {
  await homepage.navigateTo();
});

Then('I should see the carousel', async function() {
  await homepage.isActive();
});
