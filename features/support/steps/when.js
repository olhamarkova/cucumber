import { When } from "@cucumber/cucumber";
import TodoPage from "../../../pages/TodoPage.js";

const todo = new TodoPage();

When("Adds a new todo {string}", async function (string) {
  await todo.addNewTodo(string);
});
