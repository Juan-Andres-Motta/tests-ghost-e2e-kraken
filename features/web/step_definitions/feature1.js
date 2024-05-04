const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter my email {kraken-string}', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string}', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login button', async function () {
    let loginButton = await this.driver.$('button[data-test-button="sign-in"]')
    await loginButton.click();
});

Then('I click on Post button', async function () {
    let postButton = await this.driver.$("#ember19")
    await postButton.click();
});

Then('I click on new Post button', async function () {
    let newPostButton = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary")
    await newPostButton.click();
});

Then('I enter a title {kraken-string}', async function (value) {
    let titleInput = await this.driver.$("textarea.gh-editor-title")
    await titleInput.setValue(value);
});

Then('I enter a body {kraken-string}', async function (value) {
    let bodyInput = await this.driver.$('div.kg-prose > p');
    await bodyInput.click();
    await bodyInput.setValue(value);
});

Then('I click on Publish button', async function () {
    let publishButton = await this.driver.$("button.gh-publish-trigger")
    await publishButton.click();
});

Then('I click on Continue, final review', async function () {
    let publishButton = await this.driver.$('button[data-test-button="continue"]')
    await publishButton.click();
});

Then('I click on Publish post', async function () {
    let publishButton = await this.driver.$('button[data-test-button="confirm-publish"]')
    await publishButton.click();
});