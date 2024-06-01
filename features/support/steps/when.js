import { When } from "@cucumber/cucumber";
import { TodoActions } from "../../../app/actions.js";

const todo = new TodoActions();

When("Adds a new todo {string}", async function (string) {
  await todo.addNewTodo(string);
});
