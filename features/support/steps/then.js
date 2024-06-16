import { Then } from "@cucumber/cucumber";
import { TodoAssertions } from "../../../app/assertions.js";

const assert = new TodoAssertions();

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

Then(
  "they see {string} todo added with {string} text",
  async function (string, string2) {
    await assert.validateTodoText(string2, string);
  }
);

Then(
  "filters {string}, {string} and {string} are displayed",
  async function (string, string1, string2) {
    const filters = [string, string1, string2];
    for (let i = 0; i < filters.length; i++) {
      await assert.validateFilters(filters[i]);
    }
  }
);

Then("filter {string} is selected", async function (string) {
  await assert.validateActiveFilter(string);
});

Then("the {string} todo is marked as completed", async function (string) {
  await assert.validateCompletedTodo(string);
});

Then("they see the message {string}", async function (string) {
  await assert.validateTodoCountMsg(string);
});

Then("all todos are marked as {string}", async function (string) {
  if (string === "active") {
    await assert.validateTodoList("");
  } else {
    await assert.validateTodoList(string);
  }
});

Then("they see {string} {string} todo", async function (string, string2) {
  if (string2 === "active") {
    await assert.validateActiveTodo(string);
  } else {
    await assert.validateCompletedTodo(string);
  }
});

Then("no todos are displayed", async function () {
  await assert.validateNoTodos();
});

Then("the Clear Completed button is disabled", async function () {
  await assert.validateClearCompletedButton();
});
