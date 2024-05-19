const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const expect = require("chai").expect;

NAME5 = null;

When("I enter my email 5 {kraken-string}", async function (value) {
    let element = await this.driver.$("#identification");
    return await element.setValue(value);
});

When("I enter my password 5 {kraken-string}", async function (value) {
    let element = await this.driver.$("#password");
    return await element.setValue(value);
});

Then("I click on Login button 5", async function () {
    let loginButton = await this.driver.$('button[data-test-button="sign-in"]');
    await loginButton.click();
});

Then("I click on Tags button 5", async function () {
    let tagsButton = await this.driver.$('a[data-test-nav="tags"]');
    await tagsButton.click();
});

Then("I click on a random tag 5", async function () {
    let tags = await this.driver.$$("h3");
    let randomTag = tags[Math.floor(Math.random() * tags.length)];
    await randomTag.click();
});

Then("I clear and enter a tag name input 5", async function () {
    NAME5 = faker.lorem.word();
    let tagNameInput = await this.driver.$('input[data-test-input="tag-name"]');
    await tagNameInput.clearValue();
    await tagNameInput.setValue(NAME5);
});

Then("I clear and enter a tag color input 5", async function () {
    let tagColorInput = await this.driver.$(
        'input[data-test-input="accentColor"]'
    );
    await tagColorInput.clearValue();
    await tagColorInput.setValue(faker.internet.color().slice(1, 7));
});

Then("I clear and enter a slug input 5", async function () {
    let slugInput = await this.driver.$('input[data-test-input="tag-slug"]');
    await slugInput.clearValue();
    await slugInput.setValue(faker.lorem.word());
});

Then("I clear and enter a description input 5", async function () {
    let descriptionInput = await this.driver.$(
        'textarea[data-test-input="tag-description"]'
    );
    await descriptionInput.clearValue();
    await descriptionInput.setValue(faker.lorem.sentence());
});

Then("I click on Save button 5", async function () {
    let saveButton = await this.driver.$('button[data-test-button="save"]');
    await saveButton.click();
});

Then("I click on back to tags 5", async function () {
    let backToTagsButton = await this.driver.$('a[href="#/tags/"]');
    await backToTagsButton.click();
});

Then("I find the tag created 5", async function () {
    let h3Found = false;
    let tagCreated = await this.driver.$$("h3");
    for (let element of tagCreated) {
        if ((await element.getText()) == NAME5) {
            h3Found = true;
            break;
        }
    }
    expect(h3Found).to.be.true;
});
