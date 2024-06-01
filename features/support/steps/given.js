import { Given } from "@cucumber/cucumber";
import TodoPage from "../../../pages/TodoPage.js";

const todo = new TodoPage();

Given("User is landing on the Todo app", async function () {
  await todo.visit();
});
