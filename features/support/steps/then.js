import { Then } from "@cucumber/cucumber";
import { TodoAssertions } from "../../../app/assertions.js";

const assert = new TodoAssertions();

Then(
  "They see the message {string} and a {string} todo added with {string} text",
  async function (string, string2, string3) {
    await assert.validateTodoCountMsg(string);
    await assert.validateTodoText(string3, string2);
  }
);

Then("The page title should be {string}", async function (title) {
  await assert.checkTitle(title);
});

Then("The heading {string} should be visible", async function (heading) {
  await assert.checkHeader(heading);
});

Then(
  "The input field with placeholder {string} should be visible",
  async function (placeholder) {
    await assert.validateInput(placeholder);
  }
);

Then("The footer contains {string}", async (info) => {
  await assert.validateFooterInfo(info);
});

Then("The {string} page is opened", async function (title) {
  await assert.checkTitle(title);
});
