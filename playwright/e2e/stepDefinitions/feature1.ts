const { Given, When, Then } = require("@cucumber/cucumber");
import { expect, Page } from "@playwright/test";
import { IPlaywrightWorld } from "../world";
import { faker } from "@faker-js/faker";

const BASE_URL = "https://ghost.juanandresdeveloper.com/ghost/#/signin";

// Scenario: Create a new post

Given(
	"un usuario que desea iniciar sesion",
	async function (this: IPlaywrightWorld) {
		await this.page.goto(BASE_URL);
		await this.page.waitForTimeout(1000);
	}
);

When(
	"ingresa {string} en el campo email",
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
	"ingresa {string} en el campo password",
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
	"el inicio de sesion es {string}",
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
