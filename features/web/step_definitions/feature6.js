const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const expect = require("chai").expect;

numberOfTags = 0;

When("I enter my email 6 {kraken-string}", async function (value) {
  let element = await this.driver.$("#identification");
  return await element.setValue(value);
});

When("I enter my password 6 {kraken-string}", async function (value) {
  let element = await this.driver.$("#password");
  return await element.setValue(value);
});

Then("I click on Login button 6", async function () {
  let loginButton = await this.driver.$('button[data-test-button="sign-in"]');
  await loginButton.click();
});

Then("I click on Tags button 6", async function () {
  let tagsButton = await this.driver.$('a[data-test-nav="tags"]');
  await tagsButton.click();
});

Then("I count the number of tags 6", async function () {
  let tags = await this.driver.$$("h3");
  numberOfTags = tags.length;
});

Then("I click on a random tag 6", async function () {
  let tags = await this.driver.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  await randomTag.click();
});

Then("I click the delete button tag 6", async function () {
  let deleteButton = await this.driver.$(
    'button[data-test-button="delete-tag"]'
  );
  await deleteButton.click();
});

Then("I click the confirm delete button tag 6", async function () {
  let confirmDeleteButton = await this.driver.$(
    'button[data-test-button="confirm"]'
  );
  await confirmDeleteButton.click();
});

Then("I compare the number of tags 6", async function () {
  let tags = await this.driver.$$("h3");
  expect(tags.length).to.equal(numberOfTags - 1);
});
