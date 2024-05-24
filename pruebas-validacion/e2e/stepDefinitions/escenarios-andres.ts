const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
import { faker } from "@faker-js/faker";

When("Login", async function (this: IPlaywrightWorld) {
  await this.page.goto("https://ghost.juanandresdeveloper.com/ghost/#/signin");
  await this.page.getByLabel("Email address").fill("admin@example.com");
  await this.page.getByLabel("Password").fill("admin12345");
  await this.page.getByRole("button", { name: /Sign in/i }).click();
  await this.page.waitForURL(
    `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
  );
  await this.page.waitForTimeout(2000);
});

// Scenario: Create a new tag with static data with void name

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

Then("I click on a random tag 5", async function (this: IPlaywrightWorld) {
  let tags = await this.page.$$("h3");
  let randomTag = tags[Math.floor(Math.random() * tags.length)];
  await randomTag.click();
  await this.page.waitForTimeout(1000);
});

Then(
  "I enter {string} as tag name input using {string} method 4",
  async function (this: IPlaywrightWorld, name: string, metodo: string) {
    faker.seed(Math.random() * 1000);
    let tagNameInput = await this.page.$('input[data-test-input="tag-name"]');
    if (tagNameInput) {
      if (metodo === "a-priori") {
        await tagNameInput!.fill(name);
      }
      if (metodo === "pseudo1") {
        await tagNameInput!.fill(faker.lorem.word());
      }
      if (metodo === "pseudo2") {
        await tagNameInput!.fill(faker.string.alpha(200));
      }
      if (metodo === "pseudo3") {
        await tagNameInput!.fill(faker.lorem.word());
      }
      if (metodo === "pseudo4") {
        await tagNameInput!.fill(faker.lorem.word());
      }
      if (metodo === "random") {
        await tagNameInput!.fill(faker.string.alphanumeric(10));
      }
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I enter {string} as tag color input using {string} method 4",
  async function (this: IPlaywrightWorld, color: string, metodo: string) {
    faker.seed(Math.random() * 1000);
    let tagColorInput = await this.page.$(
      'input[data-test-input="accentColor"]'
    );
    if (tagColorInput) {
      if (metodo === "a-priori") {
        await tagColorInput!.fill(color);
      }
      if (metodo === "pseudo1") {
        await tagColorInput!.fill(faker.internet.color().slice(1, 7));
      }
      if (metodo === "pseudo2") {
        await tagColorInput!.fill(faker.internet.color().slice(1, 7));
      }
      if (metodo === "pseudo3") {
        await tagColorInput!.fill(faker.internet.color().slice(1, 7));
      }
      if (metodo === "pseudo4") {
        await tagColorInput!.fill(faker.internet.color().slice(1, 7));
      }
      if (metodo === "random") {
        await tagColorInput!.fill(faker.string.alphanumeric(10));
      }
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I enter {string} as slug input using {string} method 4",
  async function (this: IPlaywrightWorld, slug: string, metodo: string) {
    faker.seed(Math.random() * 1000);
    let slugInput = await this.page.$('input[data-test-input="tag-slug"]');
    if (slugInput) {
      if (metodo === "a-priori") {
        await slugInput!.fill(slug);
      }
      if (metodo === "pseudo1") {
        await slugInput!.fill(faker.lorem.word());
      }
      if (metodo === "pseudo2") {
        await slugInput!.fill(faker.lorem.word());
      }
      if (metodo === "pseudo3") {
        await slugInput!.fill(faker.string.alpha(200));
      }
      if (metodo === "pseudo4") {
        await slugInput!.fill(faker.lorem.word());
      }
      if (metodo === "random") {
        await slugInput!.fill(faker.string.alphanumeric(10));
      }
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "I enter {string} as description input using {string} method 4",
  async function (this: IPlaywrightWorld, description: string, metodo: string) {
    faker.seed(Math.random() * 1000);
    let descriptionInput = await this.page.$(
      'textarea[data-test-input="tag-description"]'
    );
    if (descriptionInput) {
      if (metodo === "a-priori") {
        await descriptionInput!.fill(description);
      }
      if (metodo === "pseudo1") {
        await descriptionInput!.fill(faker.lorem.sentence());
      }
      if (metodo === "pseudo2") {
        await descriptionInput!.fill(faker.lorem.sentence());
      }
      if (metodo === "pseudo3") {
        await descriptionInput!.fill(faker.lorem.sentence());
      }
      if (metodo === "pseudo4") {
        await descriptionInput!.fill(faker.string.alpha(600));
      }
      if (metodo === "random") {
        await descriptionInput!.fill(faker.string.alphanumeric(10));
      }
    }
    await this.page.waitForTimeout(1000);
  }
);

Then("I click on Save button 4", async function (this: IPlaywrightWorld) {
  let saveButton = await this.page.$('button[data-test-button="save"]');
  if (saveButton) {
    await saveButton.click();
  }
  await this.page.waitForTimeout(2000);
});

Then(
  "La creacion del tag fue {string}",
  async function (this: IPlaywrightWorld, resultado: string) {
    const esExitoso = resultado === "exitosa";
    if (!esExitoso) {
      await expect(this.page.getByText("Retry")).toBeVisible();
    } else {
    }
  }
);
