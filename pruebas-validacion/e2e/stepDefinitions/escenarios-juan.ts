const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
import { faker } from "@faker-js/faker";

const BASE_URL = "https://ghost.juanandresdeveloper.com/ghost/#/signin";

// Scenario: Create a new post

Given(
  "un usuario que desea iniciar sesion 1",
  async function (this: IPlaywrightWorld) {
    await this.page.goto(BASE_URL);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo email 1",
  async function (this: IPlaywrightWorld, email: string) {
    if (email === "pseudo") {
      email = faker.internet.email();
    }
    if (email === "random") {
      email = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Email address").fill(email);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo password 1",
  async function (this: IPlaywrightWorld, password: string) {
    if (password === "pseudo") {
      password = faker.internet.email();
    }
    if (password === "random") {
      password = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Password").fill(password);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "el inicio de sesion es {string} 1",
  async function (this: IPlaywrightWorld, resultado: string) {
    await this.page.getByRole("button", { name: /Sign in/i }).click();
    if (resultado === "exitoso") {
      await this.page.waitForURL(
        `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
      );
      return;
    }
    if (resultado === "fallido") {
      const button = this.page.getByRole("button", { name: /Retry/i });
      expect(button).toBeTruthy();
    }
    await this.page.waitForTimeout(1000);
  }
);

// Scenario: Create a new post

Given(
  "un usuario que desea iniciar sesion 2",
  async function (this: IPlaywrightWorld) {
    await this.page.goto(BASE_URL);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo email 2",
  async function (this: IPlaywrightWorld, email: string) {
    if (email === "pseudo") {
      email = faker.internet.email();
    }
    if (email === "random") {
      email = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Email address").fill(email);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo password 2",
  async function (this: IPlaywrightWorld, password: string) {
    if (password === "pseudo") {
      password = faker.internet.email();
    }
    if (password === "random") {
      password = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Password").fill(password);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "el inicio de sesion es {string} 2",
  async function (this: IPlaywrightWorld, resultado: string) {
    await this.page.getByRole("button", { name: /Sign in/i }).click();
    if (resultado === "exitoso") {
      await this.page.waitForURL(
        `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
      );
      return;
    }
    if (resultado === "fallido") {
      const button = this.page.getByRole("button", { name: /Retry/i });
      expect(button).toBeTruthy();
    }
    await this.page.waitForTimeout(1000);
  }
);

When(
  "presiona en boton post en la barra lateral 2",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$('a[data-test-nav="posts"]');
    if (postButton) {
      await postButton!.click();
    }
    await this.page.waitForTimeout(1000);
  }
);

Then("presiona en boton crear post 2", async function (this: IPlaywrightWorld) {
  let newPostButton = await this.page.$("a.ember-view.gh-btn.gh-btn-primary");
  if (newPostButton) {
    await newPostButton.click();
  }
  await this.page.waitForTimeout(1000);
});

Then(
  "ingresa el titulo {string} de la publicacion 2",
  async function (this: IPlaywrightWorld, title: string) {
    if (title === "pseudo") {
      faker.seed(Math.random() * 1000);
      title = faker.lorem.words(3);
    }
    if (title === "random") {
      title = faker.string.alphanumeric(15);
    }
    let titleInput = await this.page.$("textarea.gh-editor-title");
    await titleInput!.fill(title);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el cuerpo {string} de la publicacion 2",
  async function (this: IPlaywrightWorld, body: string) {
    if (body === "pseudo") {
      faker.seed(Math.random() * 1000);
      body = faker.lorem.paragraphs(3);
    }
    if (body === "random") {
      body = faker.string.alphanumeric(100);
    }
    let bodyInput = await this.page.$("div.kg-prose > p");
    await this.page.waitForTimeout(1000);
    await bodyInput!.click();
    await this.page.waitForTimeout(1000);
    await bodyInput!.fill(body);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "la creacion del post es {string} 2",
  async function (this: IPlaywrightWorld, resultado: string) {
    let publishButton = await this.page.$(
      'button[data-test-button="publish-flow"]'
    );
    if (resultado === "exitoso") {
      expect(publishButton).toBeTruthy();
    }
    if (resultado === "fallido") {
      expect(publishButton).toBeFalsy();
    }
    await this.page.waitForTimeout(1000);
  }
);

// Scenario: Create a new post

Given(
  "un usuario que desea iniciar sesion 3",
  async function (this: IPlaywrightWorld) {
    await this.page.goto(BASE_URL);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo email 3",
  async function (this: IPlaywrightWorld, email: string) {
    if (email === "pseudo") {
      email = faker.internet.email();
    }
    if (email === "random") {
      email = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Email address").fill(email);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo password 3",
  async function (this: IPlaywrightWorld, password: string) {
    if (password === "pseudo") {
      password = faker.internet.email();
    }
    if (password === "random") {
      password = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Password").fill(password);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "el inicio de sesion es {string} 3",
  async function (this: IPlaywrightWorld, resultado: string) {
    await this.page.getByRole("button", { name: /Sign in/i }).click();
    if (resultado === "exitoso") {
      await this.page.waitForURL(
        `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
      );
      return;
    }
    if (resultado === "fallido") {
      const button = this.page.getByRole("button", { name: /Retry/i });
      expect(button).toBeTruthy();
    }
    await this.page.waitForTimeout(1000);
  }
);

When(
  "presiona en boton pages en la barra lateral 3",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$('a[data-test-nav="pages"]');
    if (postButton) {
      await postButton!.click();
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "presiona en boton crear pagina 3",
  async function (this: IPlaywrightWorld) {
    let newPostButton = await this.page.$("a.ember-view.gh-btn.gh-btn-primary");
    if (newPostButton) {
      await newPostButton.click();
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el titulo {string} de la publicacion 3",
  async function (this: IPlaywrightWorld, title: string) {
    if (title === "pseudo") {
      faker.seed(Math.random() * 1000);
      title = faker.lorem.words(3);
    }
    if (title === "random") {
      title = faker.string.alphanumeric(15);
    }
    let titleInput = await this.page.$("textarea.gh-editor-title");
    await titleInput!.fill(title);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el cuerpo {string} de la publicacion 3",
  async function (this: IPlaywrightWorld, body: string) {
    if (body === "pseudo") {
      faker.seed(Math.random() * 1000);
      body = faker.lorem.paragraphs(3);
    }
    if (body === "random") {
      body = faker.string.alphanumeric(100);
    }
    let bodyInput = await this.page.$("div.kg-prose > p");
    await this.page.waitForTimeout(1000);
    await bodyInput!.click();
    await this.page.waitForTimeout(1000);
    await bodyInput!.fill(body);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "la creacion de la pagina es {string} 3",
  async function (this: IPlaywrightWorld, resultado: string) {
    let publishButton = await this.page.$(
      'button[data-test-button="publish-flow"]'
    );
    if (resultado === "exitoso") {
      expect(publishButton).toBeTruthy();
    }
    if (resultado === "fallido") {
      expect(publishButton).toBeFalsy();
    }
    await this.page.waitForTimeout(1000);
  }
);

// Scenario: Create a new post

Given(
  "un usuario que desea iniciar sesion 4",
  async function (this: IPlaywrightWorld) {
    await this.page.goto(BASE_URL);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo email 4",
  async function (this: IPlaywrightWorld, email: string) {
    if (email === "pseudo") {
      email = faker.internet.email();
    }
    if (email === "random") {
      email = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Email address").fill(email);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "ingresa {string} en el campo password 4",
  async function (this: IPlaywrightWorld, password: string) {
    if (password === "pseudo") {
      password = faker.internet.email();
    }
    if (password === "random") {
      password = faker.string.alphanumeric(10);
    }
    await this.page.getByLabel("Password").fill(password);
    await this.page.waitForTimeout(1000);
  }
);

When(
  "el inicio de sesion es {string} 4",
  async function (this: IPlaywrightWorld, resultado: string) {
    await this.page.getByRole("button", { name: /Sign in/i }).click();
    if (resultado === "exitoso") {
      await this.page.waitForURL(
        `https://ghost.juanandresdeveloper.com/ghost/#/dashboard`
      );
      return;
    }
    if (resultado === "fallido") {
      const button = this.page.getByRole("button", { name: /Retry/i });
      expect(button).toBeTruthy();
    }
    await this.page.waitForTimeout(1000);
  }
);

When(
  "presiona en boton members en la barra lateral 4",
  async function (this: IPlaywrightWorld) {
    let postButton = await this.page.$('a[href="#/members/"]');
    if (postButton) {
      await postButton!.click();
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "presiona en boton crear miembro 4",
  async function (this: IPlaywrightWorld) {
    let newPostButton = await this.page.$('a[href="#/members/new/"]');
    if (newPostButton) {
      await newPostButton.click();
    }
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el nombre {string} del miembro 4",
  async function (this: IPlaywrightWorld, name: string) {
    if (name === "pseudo") {
      faker.seed(Math.random() * 1000);
      name = faker.person.firstName() + " " + faker.person.lastName();
    }
    if (name === "random") {
      name = faker.string.alphanumeric(15);
    }
    await this.page.getByLabel("Name").fill(name);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el email {string} del miembro 4",
  async function (this: IPlaywrightWorld, email: string) {
    if (email === "pseudo") {
      faker.seed(Math.random() * 1000);
      email = faker.internet.email();
    }
    if (email === "random") {
      email = faker.string.alphanumeric(15);
    }
    await this.page.getByLabel("Email").fill(email);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa el label {string} del miembro 4",
  async function (this: IPlaywrightWorld, label: string) {
    if (label === "pseudo") {
      faker.seed(Math.random() * 1000);
      label = faker.word.noun();
    }
    if (label === "random") {
      label = faker.string.alphanumeric(15);
    }
    const inputLabel = await this.page.$(
      "input.ember-power-select-trigger-multiple-input"
    );
    await inputLabel?.click();
    await inputLabel?.fill(label);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "ingresa la nota {string} del miembro 4",
  async function (this: IPlaywrightWorld, note: string) {
    if (note === "pseudo") {
      faker.seed(Math.random() * 1000);
      note = faker.lorem.sentence(3);
    }
    if (note === "random") {
      note = faker.string.alphanumeric(15);
    }
    await this.page.getByLabel("Note").fill(note);
    await this.page.waitForTimeout(1000);
  }
);

Then(
  "la creacion del miembro es {string} 4",
  async function (this: IPlaywrightWorld, resultado: string) {
    await this.page.getByRole("button", { name: /Save/i }).click();
    await this.page.waitForTimeout(1000);
    const esExitoso = resultado === "exitoso";
    if (!esExitoso) {
      await expect(this.page.getByText("Retry")).toBeVisible();
    } else {
    }
    await this.page.waitForTimeout(1000);
  }
);
