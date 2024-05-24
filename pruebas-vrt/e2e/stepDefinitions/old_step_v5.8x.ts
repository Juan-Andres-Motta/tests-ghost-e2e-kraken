const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
const { faker } = require("@faker-js/faker");

let TITLE = faker.word.words(3);
let BODY = faker.lorem.paragraph(2);
let NAME4 = faker.lorem.word();
let NAME5 = faker.lorem.word();
let NAME6 = "";

let NAME: string | null = "";

// Scenario: Create a new post

When("Login v5", async function (this: IPlaywrightWorld) {
  await this.page.goto("https://ghost.juanandresdeveloper.com/ghost/#/signin");
  await this.page.getByLabel("Email address").fill("admin@example.com");
  await this.page.getByLabel("Password").fill("admin12345");
  await this.page.getByRole("button", { name: /Sign in/i }).click();
  await this.page.waitForURL(
    `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
  );
  await this.page.waitForTimeout(2000);
});

Then(
  "I take a screenshot for visual regression Login v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Login.png`,
    });
  }
);

Then("I click on Post button 1 v5", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$('a[data-test-nav="posts"]');
  if (postButton) {
    await postButton!.click();
  }
});

Then(
  "I take a screenshot for visual regression Post button 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-button-1.png`,
    });
  }
);

Then(
  "I click on new Post button 1 v5",
  async function (this: IPlaywrightWorld) {
    let newPostButton = await this.page.$("a.ember-view.gh-btn.gh-btn-primary");
    if (newPostButton) {
      await newPostButton.click();
    }
  }
);

Then(
  "I take a screenshot for visual regression new Post button 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/new-Post-button-1.png`,
    });
  }
);

Then("I enter a title 1 v5", async function (this: IPlaywrightWorld) {
  let titleInput = await this.page.$("textarea.gh-editor-title");
  await titleInput!.fill(TITLE);
});

Then(
  "I take a screenshot for visual regression title 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/title-1.png`,
    });
  }
);

Then("I enter a body 1 v5", async function (this: IPlaywrightWorld) {
  await this.page.waitForTimeout(2000);
  let bodyInput = await this.page.$("div.kg-prose > p");
  await bodyInput!.click();
  await bodyInput!.fill(BODY);
  await this.page.waitForTimeout(2000);
});

Then(
  "I take a screenshot for visual regression body 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/body-1.png`,
    });
  }
);

Then("I click on Publish button 1 v5", async function (this: IPlaywrightWorld) {
  let publishButton = await this.page.$(
    'button[data-test-button="publish-flow"]'
  );
  await publishButton!.click();
  await this.page.waitForTimeout(2000);
});

Then(
  "I take a screenshot for visual regression Publish button 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Publish-button-1.png`,
    });
  }
);

Then(
  "I click on Continue, final review 1 v5",
  async function (this: IPlaywrightWorld) {
    let publishButton = await this.page.$(
      'button[data-test-button="continue"]'
    );
    await publishButton!.click();
    await this.page.waitForTimeout(2000);
  }
);

Then(
  "I take a screenshot for visual regression final review 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/final-review-1.png`,
    });
  }
);

Then("I click on Publish post 1 v5", async function (this: IPlaywrightWorld) {
  await this.page.getByText("Publish post, right now").click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then(
  "I take a screenshot for visual regression Publish post 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Publish-post-1.png`,
    });
  }
);

Then(
  "I click on back to dashboard 1 v5",
  async function (this: IPlaywrightWorld) {
    let publishButton = await this.page.$(
      "button[data-test-button='close-publish-flow']"
    );
    await publishButton!.click();
    await this.page.waitForTimeout(2000);
  }
);

Then(
  "I take a screenshot for visual regression back to dashboard 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/back-to-dashboard-1.png`,
    });
  }
);

Then("I click on back to posts 1 v5", async function (this: IPlaywrightWorld) {
  await this.page.getByRole("link", { name: "Posts" }).click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then(
  "I take a screenshot for visual regression back to posts 1 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/back-to-posts-1.png`,
    });
  }
);

Then("Find post 1 v5", async function (this: IPlaywrightWorld) {
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

// Scenario: Delete post

Then("I click on Post button 2 v5", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$('a[data-test-nav="posts"]');
  await postButton!.click();
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Post button 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-button-2.png`,
    });
  }
);

Then("Find post 2 v5", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$("h3");
  await this.page.waitForTimeout(2000);
  NAME = await postButton!.innerText();
  await postButton!.click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Post 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-2.png`,
    });
  }
);

Then(
  "I click on Post config button 2 v5",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$("button.settings-menu-toggle");
    await postButton!.click();
  }
);

Then(
  "Take screenshot for visual regression Post config button 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-config-button-2.png`,
    });
  }
);

Then(
  "I click on delete Post button 2 v5",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$(
      "div.settings-menu-delete-button > button"
    );
    await postButton!.click();
  }
);

Then(
  "Take screenshot for visual regression delete Post button 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Delete-Post-button-2.png`,
    });
  }
);

Then(
  "I click on confirm delete Post button 2 v5",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$("div.modal-footer > button.gh-btn-red");
    await postButton!.click();
  }
);

Then(
  "Take screenshot for visual regression confirm delete Post button 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Confirm-Delete-Post-button-2.png`,
    });
  }
);

Then("Find deleted post 2 v5", async function (this: IPlaywrightWorld) {
  let h3Found = false;
  let publishButton = await this.page.$$("h3");
  for (let element of publishButton) {
    if ((await element.innerText()) == NAME) {
      h3Found = true;
      break;
    }
  }
  expect(h3Found).toBeFalsy();
});

Then(
  "Take screenshot for visual regression deleted post 2 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Deleted-Post-2.png`,
    });
  }
);

// Scenario: Update post

Then("I click on Post button 3 v5", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$('a[data-test-nav="posts"]');
  await postButton!.click();
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Post button 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-button-3.png`,
    });
  }
);

Then("Find post 3 v5", async function (this: IPlaywrightWorld) {
  let postButton = await this.page.$("h3");
  await postButton!.click({ force: true });
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Post 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Post-3.png`,
    });
  }
);

Then("I enter a title 3 v5", async function (this: IPlaywrightWorld) {
  let titleInput = await this.page.$("textarea.gh-editor-title");
  TITLE = faker.word.words(3);
  await titleInput!.fill(TITLE);
});

Then(
  "Take screenshot for visual regression title 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/title-3.png`,
    });
  }
);

Then("I enter a body 3 v5", async function (this: IPlaywrightWorld) {
  let bodyInput = await this.page.$("div.kg-prose > p");
  await bodyInput!.click();
  await bodyInput!.fill(BODY);
});

Then(
  "Take screenshot for visual regression body 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/body-3.png`,
    });
  }
);

Then("I click on update button 3 v5", async function (this: IPlaywrightWorld) {
  let publishButton =
    (await this.page.$('button[data-test-button="publish-flow"]')) ||
    (await this.page.$('button[data-test-button="publish-save"]'));
  await publishButton!.click();
});

Then(
  "Take screenshot for visual regression update button 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/update-button-3.png`,
    });
  }
);

Then("I click on back button 3 v5", async function (this: IPlaywrightWorld) {
  let publishButton = await this.page.$(
    "button[data-test-button='close-publish-flow']"
  );
  await publishButton!.click();
});

Then(
  "Take screenshot for visual regression back button 3 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/back-button-3.png`,
    });
  }
);

Then("Find updated post 3 v5", async function (this: IPlaywrightWorld) {
  await this.page.waitForTimeout(2000);
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

// Scenario: Create a new tag

Then("I click on Tags button 4 v5", async function (this: IPlaywrightWorld) {
  let tagsButton = await this.page.$('a[data-test-nav="tags"]');
  if (tagsButton) {
    await tagsButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Tags button 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Tags-button-4.png`,
    });
  }
);

Then("I click on new Tag button 4 v5", async function (this: IPlaywrightWorld) {
  let newTagButton = await this.page.$('a[href="#/tags/new/"]');
  if (newTagButton) {
    await newTagButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression new Tag button 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/new-Tag-button-4.png`,
    });
  }
);

Then("I enter a tag name input 4 v5", async function (this: IPlaywrightWorld) {
  let tagNameInput = await this.page.$('input[data-test-input="tag-name"]');
  if (tagNameInput) {
    await tagNameInput.fill(NAME4);
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression tag name input 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/tag-name-input-4.png`,
    });
  }
);

Then("I enter a tag color input 4 v5", async function (this: IPlaywrightWorld) {
  let tagColorInput = await this.page.$('input[data-test-input="accentColor"]');
  if (tagColorInput) {
    await tagColorInput.fill(faker.internet.color().slice(1, 7));
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression tag color input 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/tag-color-input-4.png`,
    });
  }
);

Then("I enter a slug input 4 v5", async function (this: IPlaywrightWorld) {
  let slugInput = await this.page.$('input[data-test-input="tag-slug"]');
  if (slugInput) {
    await slugInput.fill(faker.lorem.word());
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression slug input 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/slug-input-4.png`,
    });
  }
);

Then(
  "I enter a description input 4 v5",
  async function (this: IPlaywrightWorld) {
    let descriptionInput = await this.page.$(
      'textarea[data-test-input="tag-description"]'
    );
    if (descriptionInput) {
      await descriptionInput.fill(faker.lorem.sentence());
    }
    await this.page.waitForTimeout(2000);
  }
);

Then(
  "Take screenshot for visual regression description input 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/description-input-4.png`,
    });
  }
);

Then("I click on Save button 4 v5", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$('button[data-test-button="save"]');
  if (saveButton) {
    await saveButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression Save button 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Save-button-4.png`,
    });
  }
);

Then("I click on back to tags 4 v5", async function (this: IPlaywrightWorld) {
  let backToTagsButton = await this.page.$('a[href="#/tags/"]');
  if (backToTagsButton) {
    await backToTagsButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "Take screenshot for visual regression back to tags 4 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/back-to-tags-4.png`,
    });
  }
);

Then("I find the tag created 4 v5", async function (this: IPlaywrightWorld) {
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

Then("I click on tags button 5 v5", async function (this: IPlaywrightWorld) {
  await this.page.click('a[href="#/tags/"]');
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression tags button 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Tags-button-5.png`,
    });
  }
);

Then("I click on a random tag 5 v5", async function (this: IPlaywrightWorld) {
  let tags = await this.page.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  await randomTag.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression random tag 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Random-tag-5.png`,
    });
  }
);

Then(
  "I clear and enter a tag name input 5 v5",
  async function (this: IPlaywrightWorld) {
    let tagNameInput = await this.page.$('input[data-test-input="tag-name"]');
    await tagNameInput!.fill(NAME5);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "Take screenshot for visual regression tag name input 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Tag-name-input-5.png`,
    });
  }
);

Then(
  "I clear and enter a tag color input 5 v5",
  async function (this: IPlaywrightWorld) {
    let tagColorInput = await this.page.$(
      'input[data-test-input="accentColor"]'
    );
    await tagColorInput!.fill(faker.internet.color().slice(1, 7));
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "Take screenshot for visual regression tag color input 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Tag-color-input-5.png`,
    });
  }
);

Then(
  "I clear and enter a slug input 5 v5",
  async function (this: IPlaywrightWorld) {
    let slugInput = await this.page.$('input[data-test-input="tag-slug"]');
    await slugInput!.fill(faker.lorem.word());
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "Take screenshot for visual regression slug input 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Slug-input-5.png`,
    });
  }
);

Then(
  "I clear and enter a description input 5 v5",
  async function (this: IPlaywrightWorld) {
    let descriptionInput = await this.page.$(
      'textarea[data-test-input="tag-description"]'
    );
    await descriptionInput!.fill(faker.lorem.sentence());
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "Take screenshot for visual regression description input 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Description-input-5.png`,
    });
  }
);

Then("I click on Save button 5 v5", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$('button[data-test-button="save"]');
  await saveButton!.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression Save button 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Save-button-5.png`,
    });
  }
);

Then("I click on back to tags 5 v5", async function (this: IPlaywrightWorld) {
  let backToTagsButton = await this.page.$('a[href="#/tags/"]');
  await backToTagsButton!.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression back to tags 5 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Back-to-tags-5.png`,
    });
  }
);

Then("I find the tag created 5 v5", async function (this: IPlaywrightWorld) {
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

Then("I click on tags button 6 v5", async function (this: IPlaywrightWorld) {
  await this.page.click('a[href="#/tags/"]');
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression tags button 6 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Tags-button-6.png`,
    });
  }
);

Then("I click on a random tag 6 v5", async function (this: IPlaywrightWorld) {
  let tags = await this.page.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  NAME6 = await randomTag.innerText();
  await randomTag.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression random tag 6 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Random-tag-6.png`,
    });
  }
);

Then("I click on Delete button 6 v5", async function (this: IPlaywrightWorld) {
  let deleteButton = await this.page.$('button[data-test-button="delete-tag"]');
  await deleteButton!.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "Take screenshot for visual regression Delete button 6 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Delete-button-6.png`,
    });
  }
);

Then(
  "I click the confirm delete button tag 6 v5",
  async function (this: IPlaywrightWorld) {
    let confirmButton = await this.page.$('button[data-test-button="confirm"]');
    await confirmButton!.click();
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "Take screenshot for visual regression confirm delete button tag 6 v5",
  async function (this: IPlaywrightWorld) {
    await this.page.screenshot({
      path: `pruebas-vrt/e2e/screenshots2/Confirm-delete-button-tag-6.png`,
    });
  }
);

Then("I find the tag deleted 6 v5", async function (this: IPlaywrightWorld) {
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
