const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
const { faker } = require("@faker-js/faker");

let TITLE = faker.word.words(3);
let BODY = faker.lorem.paragraph(2);

// Scenario: Create a new post

When("Login", async function (this: IPlaywrightWorld) {
  await this.page.goto("https://ghost.juanandresdeveloper.com/ghost/#/signin");
  await this.page.getByLabel("Email address").fill("admin@example.com");
  await this.page.getByLabel("Password").fill("admin12345");
  await this.page.getByRole("button", { name: /Sign in/i }).click();
  await this.page.waitForURL(
    `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
  );
});

Then("I click on Post button 1", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$('a[data-test-nav="posts"]');
  if (postButton) {
    await postButton.click();
  }
});

Then("I click on new Post button 1", async function (this: IPlaywrightWorld) {
  let newPostButton = await this.page.$("a.ember-view.gh-btn.gh-btn-primary");
  if (newPostButton) {
    await newPostButton.click();
  }
});

Then("I enter a title 1", async function (this: IPlaywrightWorld) {
  let titleInput = await this.page.$("textarea.gh-editor-title");
  await titleInput!.fill(TITLE);
});

Then("I enter a body 1", async function (this: IPlaywrightWorld) {
  let bodyInput = await this.page.$("div.kg-prose > p");
  await bodyInput!.click();
  await bodyInput!.fill(BODY);
  await this.page.waitForTimeout(2000);
});

Then("I click on Publish button 1", async function (this: IPlaywrightWorld) {
  let publishButton = await this.page.$(
    'button[data-test-button="publish-flow"]'
  );
  await publishButton!.click();
  await this.page.waitForTimeout(2000);
});

Then(
  "I click on Continue, final review 1",
  async function (this: IPlaywrightWorld) {
    let publishButton = await this.page.$(
      'button[data-test-button="continue"]'
    );
    await publishButton!.click();
    await this.page.waitForTimeout(2000);
  }
);

Then("I click on Publish post 1", async function (this: IPlaywrightWorld) {
  await this.page.getByText("Publish post, right now").click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then("I click on back to dashboard 1", async function (this: IPlaywrightWorld) {
  let publishButton = await this.page.$("a.gh-back-to-editor");
  await publishButton!.click();
  await this.page.waitForTimeout(2000);
});

Then("I click on back to posts 1", async function (this: IPlaywrightWorld) {
  await this.page.getByRole("link", { name: "Posts" }).click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then('Find post 1', async function (this: IPlaywrightWorld) {
    let h3Found = false;
    let publishButton = await this.page.$$('h3')
    for (let element of publishButton) {
        if (await element.innerText() == TITLE) {
            h3Found = true;
            break;
        }
    }
    expect(h3Found).toBeTruthy();   
});

// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post



// Scenario: Create a new post
