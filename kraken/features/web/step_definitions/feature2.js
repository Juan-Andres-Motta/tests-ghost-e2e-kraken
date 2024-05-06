const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const expect = require('chai').expect;

NAME = null;

When('I enter my email {kraken-string} 2', async function (value) {
    let element = await this.driver.$('#identification');
    return await element.setValue(value);
});

When('I enter my password {kraken-string} 2', async function (value) {
    let element = await this.driver.$('#password');
    return await element.setValue(value);
});

Then('I click on Login button 2', async function () {
    let loginButton = await this.driver.$('button[data-test-button="sign-in"]')
    await loginButton.click();
});

Then('I click on Post button 2', async function () {
    let postButton = await this.driver.$('a[data-test-nav="posts"]')
    await postButton.click();
});

Then('Find post 2', async function () {
    let postButton = await this.driver.$('h3')
    NAME = await postButton.getText();
    await postButton.click();
});

Then('I click on Post config button 2', async function () {
    let postButton = await this.driver.$('button.settings-menu-toggle')
    await postButton.click();
});

Then('I click on delete Post button 2', async function () {
    let postButton = await this.driver.$('div.settings-menu-delete-button > button')
    await postButton.click();
});

Then('I click on confirm delete Post button 2', async function () {
    let postButton = await this.driver.$('div.modal-footer > button.gh-btn-red')
    await postButton.click();
});

Then('Find deleted post 2', async function () {
    let h3Found = false;
    let publishButton = await this.driver.$$('h3')
    for (let element of publishButton) {
        if (await element.getText() == TITLE) {
            h3Found = true;
            break;
        }
    }
    expect(h3Found).to.be.false;
});