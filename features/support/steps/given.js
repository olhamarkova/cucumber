import { Given } from "@cucumber/cucumber";
import { TodoActions } from "../../../app/actions.js";

const todo = new TodoActions();

Given("User is on the Todo app page", async function () {
  await todo.visit();
});
