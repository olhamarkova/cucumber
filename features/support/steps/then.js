import { Then } from "@cucumber/cucumber";
import { TodoAssertions } from "../../../app/assertions.js";

const assert = new TodoAssertions();

Then(
  "they see the message {string} and a {string} todo added with {string} text",
  async function (string, string2, string3) {
    await assert.validateTodoCountMsg(string);
    await assert.validateTodoText(string3, string2);
  }
);

Then("the page title should be {string}", async function (title) {
  await assert.checkTitle(title);
});

Then("the heading {string} should be visible", async function (heading) {
  await assert.checkHeader(heading);
});

Then(
  "the input field with placeholder {string} should be visible",
  async function (placeholder) {
    await assert.validateInput(placeholder);
  }
);

Then("the footer contains {string}", async (info) => {
  await assert.validateFooterInfo(info);
});

Then("the {string} page is opened", async function (title) {
  await assert.checkTitle(title);
});
