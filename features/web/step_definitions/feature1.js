const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

TITLE = faker.word.words(3)
BODY = faker.lorem.paragraph(2)

When('I enter my email {kraken-string} 1', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string} 1', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login button 1', async function () {
    let loginButton = await this.driver.$('button[data-test-button="sign-in"]')
    await loginButton.click();
});

Then('I click on Post button 1', async function () {
    let postButton = await this.driver.$('a[data-test-nav="posts"]')
    await postButton.click();
});

Then('I click on new Post button 1', async function () {
    let newPostButton = await this.driver.$("a.ember-view.gh-btn.gh-btn-primary")
    await newPostButton.click();
});

Then('I enter a title 1', async function () {
    let titleInput = await this.driver.$("textarea.gh-editor-title")
    await titleInput.setValue(TITLE);
});

Then('I enter a body 1', async function () {
    let bodyInput = await this.driver.$('div.kg-prose > p');
    await bodyInput.click();
    await bodyInput.setValue(BODY);
});

Then('I click on Publish button 1', async function () {
    let publishButton = await this.driver.$("button.gh-publish-trigger")
    await publishButton.click();
});

Then('I click on Continue, final review 1', async function () {
    let publishButton = await this.driver.$('button[data-test-button="continue"]')
    await publishButton.click();
});

Then('I click on Publish post 1', async function () {
    let publishButton = await this.driver.$('button[data-test-button="confirm-publish"]')
    await publishButton.click();
});

Then('I click on back to dashboard 1', async function () {
    let publishButton = await this.driver.$('a.gh-back-to-editor')
    await publishButton.click();
});

Then('Find post 1', async function () {
    let h3Found = false;
    let publishButton = await this.driver.$$('h3')
    for (let element of publishButton) {
        if (await element.getText() == TITLE) {
            h3Found = true;
            break;
        }
    }
    expect(h3Found).to.be.true;
});