const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");

When("I enter my email 4 {kraken-string}", async function (value) {
  let element = await this.driver.$("#identification");
  return await element.setValue(value);
});

When("I enter my password 4 {kraken-string}", async function (value) {
  let element = await this.driver.$("#password");
  return await element.setValue(value);
});

Then("I click on Login button 4", async function () {
  let loginButton = await this.driver.$('button[data-test-button="sign-in"]');
  await loginButton.click();
});

Then("I click on Tags button 4", async function () {
  let tagsButton = await this.driver.$('a[data-test-nav="tags"]');
  await tagsButton.click();
});
