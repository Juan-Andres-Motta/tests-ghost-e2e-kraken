const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

TITLE = null;
BODY = null;

When('I enter my email {kraken-string} 3', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string} 3', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login button 3', async function () {
    let loginButton = await this.driver.$('button[data-test-button="sign-in"]')
    await loginButton.click();
});

Then('I click on Post button 3', async function () {
    let postButton = await this.driver.$('a[data-test-nav="posts"]')
    await postButton.click();
});

Then('Find post 3', async function () {
    let postButtons = await this.driver.$$('h3');
    if (postButtons.length > 0) {
        // Select the last h3 element
        let postButton = postButtons[postButtons.length - 1];

        // Store the name
        NAME = await postButton.getText();
        // Click the postButton
        await postButton.click();
    }
});

Then('I enter a title 3', async function () {
    TITLE = faker.lorem.words(3);
    let titleInput = await this.driver.$("textarea.gh-editor-title")
    await titleInput.setValue(TITLE);
});

Then('I enter a body 3', async function () {
    BODY = faker.lorem.words(20);
    let bodyInput = await this.driver.$('div.kg-prose > p');
    await bodyInput.click();
    await bodyInput.setValue(BODY);
});

Then('I click on update button 3', async function () {
    let publishButton = await this.driver.$('button.gh-btn-editor.green')
    await publishButton.click();
});

Then('I click on back button 3', async function () {
    let publishButton = await this.driver.$('a.gh-editor-back-button')
    await publishButton.click();
});

Then('Find updated post 3', async function () {
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