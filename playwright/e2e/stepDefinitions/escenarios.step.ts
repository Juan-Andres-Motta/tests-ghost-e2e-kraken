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

When("Login", async function (this: IPlaywrightWorld) {
	await this.page.goto(
		"https://ghostold.juanandresdeveloper.com/ghost/#/signin"
	);
	await this.page.getByPlaceholder("Email Address").fill("admin@example.com");
	await this.page.getByPlaceholder("Password").fill("admin12345");
	await this.page.getByRole("button", { name: /Sign in/i }).click();
	await this.page.waitForURL(
		`https://ghostold.juanandresdeveloper.com/ghost/#/site`
	);
});

Then(
	"I take a screenshot for visual regression Login",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/Login.png` });
	}
);

Then("I click on Post button 1", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$('a[href="#/posts/"]');
	if (postButton) {
		await postButton!.click();
	}
});

Then(
	"I take a screenshot for visual regression Post button 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Post-button-1.png`,
		});
	}
);

Then("I click on new Post button 1", async function (this: IPlaywrightWorld) {
	let newPostButton = await this.page.$('a[href="#/editor/post/"]');
	if (newPostButton) {
		await newPostButton.click();
	}
});

Then(
	"I take a screenshot for visual regression new Post button 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/new-Post-button-1.png`,
		});
	}
);

Then("I enter a title 1", async function (this: IPlaywrightWorld) {
	await this.page.waitForTimeout(2000);
	let titleInput = await this.page.$('textarea[placeholder="Post Title"]');
	TITLE = faker.word.words(3);
	await titleInput!.fill(TITLE);
});

Then(
	"I take a screenshot for visual regression title 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/title-1.png` });
	}
);

Then("I enter a body 1", async function (this: IPlaywrightWorld) {
	await this.page.waitForTimeout(2000);
	let bodyInput = await this.page.$(
		'div[data-placeholder="Begin writing your post..."]'
	);
	await bodyInput!.click();
	await bodyInput!.fill(BODY);
	await this.page.waitForTimeout(2000);
});

Then(
	"I take a screenshot for visual regression body 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/body-1.png` });
	}
);

Then("I click on Publish button 1", async function (this: IPlaywrightWorld) {
	let publishButton1 = await this.page.$("div.ember-basic-dropdown-trigger");
	await publishButton1!.click();
	await this.page.waitForTimeout(2000);
	let publishButton2 = await this.page.$("button.gh-publishmenu-button");
	await publishButton2!.click();
	await this.page.waitForTimeout(2000);
});

Then(
	"I take a screenshot for visual regression Publish button 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Publish-button-1.png`,
		});
	}
);

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

Then(
	"I take a screenshot for visual regression final review 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/final-review-1.png`,
		});
	}
);

Then("I click on Publish post 1", async function (this: IPlaywrightWorld) {
	await this.page.getByText("Publish post, right now").click({ force: true });
	await this.page.waitForTimeout(2000);
});

Then(
	"I take a screenshot for visual regression Publish post 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Publish-post-1.png`,
		});
	}
);

Then("I click on back to dashboard 1", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$('a[href="#/posts/"]');
	await publishButton!.click();
	await this.page.waitForTimeout(2000);
});

Then(
	"I take a screenshot for visual regression back to dashboard 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/back-to-dashboard-1.png`,
		});
	}
);

Then("I click on back to posts 1", async function (this: IPlaywrightWorld) {
	await this.page.getByRole("link", { name: "Posts" }).click({ force: true });
	await this.page.waitForTimeout(2000);
});

Then(
	"I take a screenshot for visual regression back to posts 1",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/back-to-posts-1.png`,
		});
	}
);

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

// Scenario: Delete post

Then("I click on Post button 2", async function (this: IPlaywrightWorld) {
	let newPostButton = await this.page.$('a[href="#/posts/"]');
	if (newPostButton) {
		await newPostButton.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Post button 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Post-button-2.png`,
		});
	}
);

Then("Find post 2", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$("h3");
	await this.page.waitForTimeout(2000);
	NAME = await postButton!.innerText();
	await postButton!.click({ force: true });
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Post 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/Post-2.png` });
	}
);

Then(
	"I click on Post config button 2",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$("button.post-settings");
		await postButton!.click();
		await this.page.waitForTimeout(2000);
	}
);

Then(
	"Take screenshot for visual regression Post config button 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Post-config-button-2.png`,
		});
	}
);

Then(
	"I click on delete Post button 2",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$(
			"button.settings-menu-delete-button"
		);
		await postButton!.click();
		await this.page.waitForTimeout(2000);
	}
);

Then(
	"Take screenshot for visual regression delete Post button 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Delete-Post-button-2.png`,
		});
	}
);

Then(
	"I click on confirm delete Post button 2",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$("button.gh-btn-red");
		await postButton!.click();
		await this.page.waitForTimeout(2000);
	}
);

Then(
	"Take screenshot for visual regression confirm delete Post button 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Confirm-Delete-Post-button-2.png`,
		});
	}
);

Then("Find deleted post 2", async function (this: IPlaywrightWorld) {
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
	"Take screenshot for visual regression deleted post 2",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Deleted-Post-2.png`,
		});
	}
);

// Scenario: Update post

Then("I click on Post button 3", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$('a[href="#/posts/"]');
	if (postButton) {
		await postButton!.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Post button 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Post-button-3.png`,
		});
	}
);

Then("Find post 3", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$("h3");
	await postButton!.click({ force: true });
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Post 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/Post-3.png` });
	}
);

Then("I enter a title 3", async function (this: IPlaywrightWorld) {
	let titleInput = await this.page.$('textarea[placeholder="Post Title"]');
	TITLE = faker.random.word(3);
	await titleInput!.fill(TITLE);
});

Then(
	"Take screenshot for visual regression title 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/title-3.png` });
	}
);

Then("I enter a body 3", async function (this: IPlaywrightWorld) {
	let bodyInput = await this.page.$(
		'div[data-placeholder="Begin writing your post..."]'
	);
	await bodyInput!.click();
	await bodyInput!.fill(BODY);
});

Then(
	"Take screenshot for visual regression body 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/body-3.png` });
	}
);

Then("I click on update button 3", async function (this: IPlaywrightWorld) {
	let publishButton1 = await this.page.$("div.ember-basic-dropdown-trigger");
	await publishButton1!.click();
	await this.page.waitForTimeout(2000);
	let publishButton2 = await this.page.$("button.gh-publishmenu-button");
	await publishButton2!.click();
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression update button 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/update-button-3.png`,
		});
	}
);

Then("I click on back button 3", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$('a[href="#/posts/"]');
	await publishButton!.click();
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression back button 3",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/back-button-3.png`,
		});
	}
);

Then("Find updated post 3", async function (this: IPlaywrightWorld) {
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

// Scenario: Create a new page

Then("I click on Pages button 7", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$('a[data-test-nav="pages"]');
	await postButton!.click({ force: true });
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Pages button 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Pages-button-7.png`,
		});
	}
);

Then("I click on new Page button 7", async function (this: IPlaywrightWorld) {
	let newPostButton = await this.page.$("a.ember-view.gh-btn.gh-btn-primary");
	await newPostButton!.click({ force: true });
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression new Page button 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/new-Page-button-7.png`,
		});
	}
);

Then("I enter a title 7", async function (this: IPlaywrightWorld) {
	let titleInput = await this.page.$("textarea.gh-editor-title");
	await titleInput!.fill(TITLE);
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression title 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/title-7.png` });
	}
);

Then("I enter a body 7", async function (this: IPlaywrightWorld) {
	let bodyInput = await this.page.$("div.kg-prose > p");
	await bodyInput!.click({ force: true });
	await bodyInput!.fill(BODY);
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression body 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/body-7.png` });
	}
);

Then("I click on Publish button 7", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$("button.gh-publish-trigger");
	await publishButton!.click({ force: true });
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Publish button 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Publish-button-7.png`,
		});
	}
);

Then(
	"I click on Continue, final review 7",
	async function (this: IPlaywrightWorld) {
		let publishButton = await this.page.$(
			'button[data-test-button="continue"]'
		);
		await publishButton!.click({ force: true });
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression Continue, final review 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Continue-final-review-7.png`,
		});
	}
);

Then("I click on Publish page 7", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$(
		'button[data-test-button="confirm-publish"]'
	);
	await publishButton!.click({ force: true });
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Publish page 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Publish-page-7.png`,
		});
	}
);

Then("I click on back to dashboard 7", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$("a.gh-back-to-editor");
	await publishButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression back to dashboard 7",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/back-to-dashboard-7.png`,
		});
	}
);

Then("Find page 7", async function (this: IPlaywrightWorld) {
	let h3Found = false;
	let publishButton = await this.page.$$("h3");
	for (let element of publishButton) {
		if ((await element.innerText()) == TITLE) {
			h3Found = true;
			break;
		}
	}
	expect(h3Found).toBeTruthy();
	await this.page.waitForTimeout(1000);
});

// Scenario: Create a delete post

Then("I click on page button 8", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$('a[data-test-nav="pages"]');
	await postButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression page button 8",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Page-button-8.png`,
		});
	}
);

Then("Find page 8", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$("h3");
	NAME = await postButton!.innerText();
	await postButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression page 8",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({ path: `e2e/screenshots2/Page-8.png` });
	}
);

Then(
	"I click on page config button 8",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$("button.settings-menu-toggle");
		await postButton!.click();
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression page config button 8",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Page-config-button-8.png`,
		});
	}
);

Then(
	"I click on delete page button 8",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$(
			"div.settings-menu-delete-button > button"
		);
		await postButton!.click();
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression delete page button 8",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Delete-page-button-8.png`,
		});
	}
);

Then(
	"I click on confirm delete page button 8",
	async function (this: IPlaywrightWorld) {
		let postButton = await this.page.$(
			"div.modal-footer > button.gh-btn-red"
		);
		await postButton!.click();
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression confirm delete page button 8",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Confirm-delete-page-button-8.png`,
		});
	}
);

Then("Find deleted page 8", async function (this: IPlaywrightWorld) {
	let h3Found = false;
	let publishButton = await this.page.$$("h3");
	for (let element of publishButton) {
		if ((await element!.innerText()) == TITLE) {
			h3Found = true;
			break;
		}
	}
	expect(h3Found).toBeTruthy();
	await this.page.waitForTimeout(1000);
});

// Scenario: Create a new tag

Then("I click on Tags button 4", async function (this: IPlaywrightWorld) {
	let tagsButton = await this.page.$('a[href="#/tags/"]');
	if (tagsButton) {
		await tagsButton.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Tags button 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Tags-button-4.png`,
		});
	}
);

Then("I click on new Tag button 4", async function (this: IPlaywrightWorld) {
	let newTagButton = await this.page.$('a[href="#/tags/new/"]');
	if (newTagButton) {
		await newTagButton.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression new Tag button 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/new-Tag-button-4.png`,
		});
	}
);

Then("I enter a tag name input 4", async function (this: IPlaywrightWorld) {
	let tagNameInput = await this.page.$("input#tag-name");
	let NAME4 = faker.lorem.word();
	if (tagNameInput) {
		await tagNameInput.fill(NAME4);
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression tag name input 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/tag-name-input-4.png`,
		});
	}
);

Then("I enter a tag color input 4", async function (this: IPlaywrightWorld) {
	let tagColorInput = await this.page.$('input[name="accent-color"]');
	if (tagColorInput) {
		await tagColorInput.fill(faker.internet.color().slice(1, 7));
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression tag color input 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/tag-color-input-4.png`,
		});
	}
);

Then("I enter a slug input 4", async function (this: IPlaywrightWorld) {
	let slugInput = await this.page.$("input#tag-slug");
	if (slugInput) {
		await slugInput.fill(faker.lorem.word());
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression slug input 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/slug-input-4.png`,
		});
	}
);

Then("I enter a description input 4", async function (this: IPlaywrightWorld) {
	let descriptionInput = await this.page.$("textarea#tag-description");
	if (descriptionInput) {
		await descriptionInput.fill(faker.lorem.sentence());
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression description input 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/description-input-4.png`,
		});
	}
);

Then("I click on Save button 4", async function (this: IPlaywrightWorld) {
	let saveButton = await this.page.$("button.gh-btn-blue");
	if (saveButton) {
		await saveButton.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression Save button 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Save-button-4.png`,
		});
	}
);

Then("I click on back to tags 4", async function (this: IPlaywrightWorld) {
	let tagsButton = await this.page.$('a[href="#/tags/"]');
	if (tagsButton) {
		await tagsButton.click();
	}
	await this.page.waitForTimeout(2000);
});

Then(
	"Take screenshot for visual regression back to tags 4",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/back-to-tags-4.png`,
		});
	}
);

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
	let tagsButton = await this.page.$('a[href="#/tags/"]');
	if (tagsButton) {
		await tagsButton.click();
	}
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression tags button 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Tags-button-5.png`,
		});
	}
);

Then("I click on a random tag 5", async function (this: IPlaywrightWorld) {
	let tags = await this.page.$$("h3");
	let randomTag = tags[Math.floor(Math.random() * tags.length)];
	await randomTag.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression random tag 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Random-tag-5.png`,
		});
	}
);

Then(
	"I clear and enter a tag name input 5",
	async function (this: IPlaywrightWorld) {
		let tagNameInput = await this.page.$("input#tag-name");
		await tagNameInput!.fill(NAME5);
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression tag name input 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Tag-name-input-5.png`,
		});
	}
);

Then(
	"I clear and enter a tag color input 5",
	async function (this: IPlaywrightWorld) {
		let tagColorInput = await this.page.$('input[name="accent-color"]');
		await tagColorInput!.fill(faker.internet.color().slice(1, 7));
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression tag color input 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Tag-color-input-5.png`,
		});
	}
);

Then(
	"I clear and enter a slug input 5",
	async function (this: IPlaywrightWorld) {
		let slugInput = await this.page.$("input#tag-slug");
		if (slugInput) {
			await slugInput.fill(faker.lorem.word());
		}
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression slug input 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Slug-input-5.png`,
		});
	}
);

Then(
	"I clear and enter a description input 5",
	async function (this: IPlaywrightWorld) {
		let descriptionInput = await this.page.$("textarea#tag-description");
		if (descriptionInput) {
			await descriptionInput.fill(faker.lorem.sentence());
		}
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression description input 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Description-input-5.png`,
		});
	}
);

Then("I click on Save button 5", async function (this: IPlaywrightWorld) {
	let saveButton = await this.page.$("button.gh-btn-blue");
	if (saveButton) {
		await saveButton.click();
	}
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Save button 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Save-button-5.png`,
		});
	}
);

Then("I click on back to tags 5", async function (this: IPlaywrightWorld) {
	let tagsButton = await this.page.$('a[href="#/tags/"]');
	if (tagsButton) {
		await tagsButton.click();
	}
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression back to tags 5",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Back-to-tags-5.png`,
		});
	}
);

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
	let tagsButton = await this.page.$('a[href="#/tags/"]');
	if (tagsButton) {
		await tagsButton.click();
	}
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression tags button 6",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Tags-button-6.png`,
		});
	}
);

Then("I click on a random tag 6", async function (this: IPlaywrightWorld) {
	let tags = await this.page.$$("h3");
	let randomTag = tags[Math.floor(Math.random() * tags.length)];
	NAME6 = await randomTag.innerText();
	await randomTag.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression random tag 6",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Random-tag-6.png`,
		});
	}
);

Then("I click on Delete button 6", async function (this: IPlaywrightWorld) {
	let deleteButton = await this.page.$("button.gh-btn-red");
	await deleteButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Delete button 6",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Delete-button-6.png`,
		});
	}
);

Then(
	"I click the confirm delete button tag 6",
	async function (this: IPlaywrightWorld) {
		let confirmButton = await this.page.getByRole("button", {
			name: "Delete",
			exact: true,
		});
		await confirmButton!.click({ force: true });
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression confirm delete button tag 6",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Confirm-delete-button-tag-6.png`,
		});
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

// Scenario: Update page
Then("I click on page button 9", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$('a[data-test-nav="pages"]');
	await postButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression page button 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Page-button-9.png`,
		});
	}
);

Then("Find page 9", async function (this: IPlaywrightWorld) {
	let postButton = await this.page.$("h3");
	NAME = await postButton!.innerText();
	await postButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression found page 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Found-page-9.png`,
		});
	}
);

Then("I enter a title 9", async function (this: IPlaywrightWorld) {
	let titleInput = await this.page.$("textarea.gh-editor-title");
	await titleInput!.fill(TITLE);
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression title input 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Title-input-9.png`,
		});
	}
);

Then("I enter a body 9", async function (this: IPlaywrightWorld) {
	let bodyInput = await this.page.$("div.kg-prose > p");
	await bodyInput!.click();
	await bodyInput!.fill(BODY);
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression body input 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Body-input-9.png`,
		});
	}
);

Then("I click on update button 9", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$(
		'button[data-test-button="publish-save"]'
	);
	await publishButton!.click({ force: true });
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression update button 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Update-button-9.png`,
		});
	}
);

Then("I click on back button 9", async function (this: IPlaywrightWorld) {
	let publishButton = await this.page.$("a.gh-editor-back-button");
	await publishButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression back button 9",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Back-button-9.png`,
		});
	}
);

Then("Find updated page 9", async function (this: IPlaywrightWorld) {
	let h3Found = false;
	let publishButton = await this.page.$$("h3");
	for (let element of publishButton) {
		if ((await element.innerText()) == TITLE) {
			h3Found = true;
			break;
		}
	}
	expect(h3Found).toBeTruthy();
	await this.page.waitForTimeout(1000);
});

// Scenario: Customize accent color

Then("I click on Dashboard button 10", async function (this: IPlaywrightWorld) {
	await this.page.click('a[data-test-nav="dashboard"]');
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Dashboard button 10",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Dashboard-button-10.png`,
		});
	}
);

Then(
	"I click on customize your design button 10",
	async function (this: IPlaywrightWorld) {
		await this.page.click('a[href="#/settings/design/edit/?ref=setup"]');
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression customize your design button 10",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Customize-your-design-button-10.png`,
		});
	}
);

Then(
	"I clear and enter an accent color input 10",
	async function (this: IPlaywrightWorld) {
		let tagColorInput = await this.page.$(
			'input[aria-label="Color value"]'
		);
		await tagColorInput!.fill(faker.internet.color().slice(1, 7));
		await this.page.waitForTimeout(1000);
	}
);

Then(
	"Take screenshot for visual regression accent color input 10",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Accent-color-input-10.png`,
		});
	}
);

Then("I click on Save button 10", async function (this: IPlaywrightWorld) {
	let saveButton = await this.page.$(
		'button[class="cursor-pointer bg-black text-white dark:bg-white dark:text-black hover:bg-grey-900 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold h-[34px] px-4"]'
	);
	await saveButton!.click();
	await this.page.waitForTimeout(1000);
});

Then(
	"Take screenshot for visual regression Save button 10",
	async function (this: IPlaywrightWorld) {
		await this.page.screenshot({
			path: `e2e/screenshots2/Save-button-10.png`,
		});
	}
);
