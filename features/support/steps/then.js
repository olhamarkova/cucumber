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
