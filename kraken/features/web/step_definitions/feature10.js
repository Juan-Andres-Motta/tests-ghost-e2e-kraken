const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const expect = require("chai").expect;

When("I enter my email 10 {kraken-string}", async function (value) {
  let element = await this.driver.$("#identification");
  return await element.setValue(value);
});

When("I enter my password 10 {kraken-string}", async function (value) {
  let element = await this.driver.$("#password");
  return await element.setValue(value);
});

Then("I click on Login button 10", async function () {
  let loginButton = await this.driver.$('button[data-test-button="sign-in"]');
  await loginButton.click();
});

Then("I click on Dashboard button 10", async function () {
  let tagsButton = await this.driver.$('a[data-test-nav="dashboard"]');
  await tagsButton.click();
});

Then("I click on customize your design button 10", async function () {
  let customizeButton = await this.driver.$(
    'a[href="#/settings/design/edit/?ref=setup"]'
  );
  await customizeButton.click();
});

Then("I clear and enter an accent color input 10", async function () {
  let tagColorInput = await this.driver.$('input[aria-label="Color value"]');
  await tagColorInput.clearValue();
  await tagColorInput.setValue(faker.internet.color().slice(1, 7));
});

Then("I click on Save button 10", async function () {
  let saveButton = await this.driver.$('button[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-[34px] px-4"]');
  await saveButton.click();
});