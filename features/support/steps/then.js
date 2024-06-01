import { Then } from "@cucumber/cucumber";
import TodoPage from "../../../pages/TodoPage.js";

const todo = new TodoPage();

Then(
  "They see the message {string} and a {string} todo added with {string} text",
  async function (string, string2, string3) {
    await todo.checkCountOfTodos(string);
    await todo.validateTodoText(string3, string2);
  }
);

Then("The page title should be {string}", async function (title) {
  await todo.checkTitle(title);
});

Then("The heading {string} should be visible", async function (heading) {
  await todo.checkHeader(heading);
});

Then(
  "The input field with placeholder {string} should be visible",
  async function (placeholder) {
    await todo.validateInput(placeholder);
  }
);
