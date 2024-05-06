const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
const { faker } = require("@faker-js/faker");

let TITLE = faker.word.words(3);
let BODY = faker.lorem.paragraph(2);
let NAME4 = faker.lorem.word();
let NAME5 = faker.lorem.word();
let NAME6 = "";

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

Then("Find post 1", async function (this: IPlaywrightWorld) {
  let h3Found = false;
  let publishButton = await this.page.$$("h3");
  for (let element of publishButton) {
    if ((await element.innerText()) == TITLE) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).toBeTruthy();
});

// Scenario: Create a new post

// Scenario: Create a new post

// Scenario: Create a new tag

Then("I click on Tags button 4", async function (this: IPlaywrightWorld) {
  let tagsButton = await this.page.$('a[data-test-nav="tags"]');
  if (tagsButton) {
    await tagsButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then("I click on new Tag button 4", async function (this: IPlaywrightWorld) {
  let newTagButton = await this.page.$('a[href="#/tags/new/"]');
  if (newTagButton) {
    await newTagButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then("I enter a tag name input 4", async function (this: IPlaywrightWorld) {
  let tagNameInput = await this.page.$('input[data-test-input="tag-name"]');
  if (tagNameInput) {
    await tagNameInput.fill(NAME4);
  }
  await this.page.waitForTimeout(2000);
});

Then("I enter a tag color input 4", async function (this: IPlaywrightWorld) {
  let tagColorInput = await this.page.$('input[data-test-input="accentColor"]');
  if (tagColorInput) {
    await tagColorInput.fill(faker.internet.color().slice(1, 7));
  }
  await this.page.waitForTimeout(2000);
});

Then("I enter a slug input 4", async function (this: IPlaywrightWorld) {
  let slugInput = await this.page.$('input[data-test-input="tag-slug"]');
  if (slugInput) {
    await slugInput.fill(faker.lorem.word());
  }
  await this.page.waitForTimeout(2000);
});

Then("I enter a description input 4", async function (this: IPlaywrightWorld) {
  let descriptionInput = await this.page.$(
    'textarea[data-test-input="tag-description"]'
  );
  if (descriptionInput) {
    await descriptionInput.fill(faker.lorem.sentence());
  }
  await this.page.waitForTimeout(2000);
});

Then("I click on Save button 4", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$('button[data-test-button="save"]');
  if (saveButton) {
    await saveButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then("I click on back to tags 4", async function (this: IPlaywrightWorld) {
  let backToTagsButton = await this.page.$('a[href="#/tags/"]');
  if (backToTagsButton) {
    await backToTagsButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then("I find the tag created 4", async function (this: IPlaywrightWorld) {
  let h3Found = false;
  let tagCreated = await this.page.$$("h3");
  for (let element of tagCreated) {
    if ((await element.innerText()) == NAME4) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).toBeTruthy();
  await this.page.waitForTimeout(2000);
});

// Scenario: Update a tag

Then("I click on tags button 5", async function (this: IPlaywrightWorld) {
  await this.page.click('a[href="#/tags/"]');
  await this.page.waitForTimeout(1000);
});

Then("I click on a random tag 5", async function (this: IPlaywrightWorld) {
  let tags = await this.page.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  await randomTag.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "I clear and enter a tag name input 5",
  async function (this: IPlaywrightWorld) {
    let tagNameInput = await this.page.$('input[data-test-input="tag-name"]');
    await tagNameInput!.fill(NAME5);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I clear and enter a tag color input 5",
  async function (this: IPlaywrightWorld) {
    let tagColorInput = await this.page.$(
      'input[data-test-input="accentColor"]'
    );
    await tagColorInput!.fill(faker.internet.color().slice(1, 7));
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I clear and enter a slug input 5",
  async function (this: IPlaywrightWorld) {
    let slugInput = await this.page.$('input[data-test-input="tag-slug"]');
    await slugInput!.fill(faker.lorem.word());
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I clear and enter a description input 5",
  async function (this: IPlaywrightWorld) {
    let descriptionInput = await this.page.$(
      'textarea[data-test-input="tag-description"]'
    );
    await descriptionInput!.fill(faker.lorem.sentence());
    await this.page.waitForTimeout(1000);
  }
);

Then("I click on Save button 5", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$('button[data-test-button="save"]');
  await saveButton!.click();
  await this.page.waitForTimeout(1000);
});

Then("I click on back to tags 5", async function (this: IPlaywrightWorld) {
  let backToTagsButton = await this.page.$('a[href="#/tags/"]');
  await backToTagsButton!.click();
  await this.page.waitForTimeout(1000);
});

Then("I find the tag created 5", async function (this: IPlaywrightWorld) {
  let h3Found = false;
  let tagCreated = await this.page.$$("h3");
  for (let element of tagCreated) {
    if ((await element.innerText()) == NAME5) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).toBeTruthy();
  await this.page.waitForTimeout(1000);
});

// Scenario: Delete a tag

Then("I click on tags button 6", async function (this: IPlaywrightWorld) {
  await this.page.click('a[href="#/tags/"]');
  await this.page.waitForTimeout(1000);
});

Then("I click on a random tag 6", async function (this: IPlaywrightWorld) {
  let tags = await this.page.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  NAME6 = await randomTag.innerText();
  await randomTag.click();
  await this.page.waitForTimeout(1000);
});

Then("I click on Delete button 6", async function (this: IPlaywrightWorld) {
  let deleteButton = await this.page.$('button[data-test-button="delete-tag"]');
  await deleteButton!.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "I click the confirm delete button tag 6",
  async function (this: IPlaywrightWorld) {
    let confirmButton = await this.page.$('button[data-test-button="confirm"]');
    await confirmButton!.click();
    await this.page.waitForTimeout(1000);
  }
);

Then("I find the tag deleted 6", async function (this: IPlaywrightWorld) {
  let h3Found = false;
  let tagCreated = await this.page.$$("h3");
  for (let element of tagCreated) {
    if ((await element.innerText()) == NAME6) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).toBeFalsy();
  await this.page.waitForTimeout(1000);
});

// Scenario: Create a new post

// Scenario: Create a new post

// Scenario: Create a new post

Then("I click on Dashboard button 10", async function (this: IPlaywrightWorld) {
  await this.page.click('a[data-test-nav="dashboard"]');
  await this.page.waitForTimeout(1000);
});

Then("I click on customize your design button 10", async function (this: IPlaywrightWorld) {
  await this.page.click('a[href="#/settings/design/edit/?ref=setup"]');
  await this.page.waitForTimeout(1000);
});

Then("I clear and enter an accent color input 10", async function (this: IPlaywrightWorld) {
  let tagColorInput = await this.page.$('input[aria-label="Color value"]');
  await tagColorInput!.fill(faker.internet.color().slice(1, 7));
  await this.page.waitForTimeout(1000);
});

Then("I click on Save button 10", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$(
    'button[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-[34px] px-4"]'
  );
  await saveButton!.click();
  await this.page.waitForTimeout(1000);
});
