import { Given } from "@cucumber/cucumber";
import { TodoActions } from "../../../app/actions.js";

const todo = new TodoActions();

Given("User is landing on the Todo app", async function () {
  await todo.visit();
});
