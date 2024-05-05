import assert from "assert";
import { chromium } from "@playwright/test";
import { When, Then, Given } from "@cucumber/cucumber";
import TodoPage from "../../pages/TodoPage.js";

let page;
let browser;

browser = await chromium.launch({
  headless: false,
});
page = await browser.newPage();

const todo = new TodoPage(page);

Given("User is landing on the Todo app", async function () {
  await todo.visit();
});

When("Adds a new todo {string}", async function (string) {
  await todo.addNewTodo(string);
});

Then(
  "They see message {string} and todo added with {string} on {string} position",
  async function (string, string2, string3) {
    await todo.checkCountOfTodos(string);
    await todo.validateTodoText(string2, string3);
  }
);
