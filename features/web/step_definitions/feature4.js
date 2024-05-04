const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const expect = require('chai').expect;

NAME = faker.lorem.word();

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

Then("I click on new Tag button 4", async function () {
  let newTagButton = await this.driver.$('a[href="#/tags/new/"]');
  await newTagButton.click();
});

Then("I enter a tag name input 4", async function () {
  let tagNameInput = await this.driver.$('input[data-test-input="tag-name"]');
  await tagNameInput.setValue(NAME);
});

Then ("I enter a tag color input 4", async function () {
  let tagColorInput = await this.driver.$('input[data-test-input="accentColor"]');
  await tagColorInput.setValue(faker.internet.color().slice(1,7));
});

Then ("I enter a slug input 4", async function () {
  let slugInput = await this.driver.$('input[data-test-input="tag-slug"]');
  await slugInput.setValue(faker.lorem.word());
});

Then ('I enter a description input 4', async function () {
  let descriptionInput = await this.driver.$('textarea[data-test-input="tag-description"]');
  await descriptionInput.setValue(faker.lorem.sentence());
});

Then ('I click on Save button 4', async function () {
  let saveButton = await this.driver.$('button[data-test-button="save"]');
  await saveButton.click();
});

Then ('I click on back to tags 4', async function () {
  let backToTagsButton = await this.driver.$('a[href="#/tags/"]');
  await backToTagsButton.click();
});

Then ('I find the tag created 4', async function () {
  let h3Found = false;
  let tagCreated = await this.driver.$$('h3');
  for (let element of tagCreated) {
    if (await element.getText() == NAME) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).to.be.true;
});