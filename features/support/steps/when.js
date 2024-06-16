import { When } from "@cucumber/cucumber";
import { TodoActions } from "../../../app/actions.js";

const todo = new TodoActions();

When("user is landing on the Todo app", async function () {
  await todo.visit();
});

When("they add a new todo {string}", async function (string) {
  await todo.addNewTodo(string);
});

When("they click on the TodoMVC link in the footer", async function () {
  await todo.openMainPage();
});

When(
  "they edit the todo from {string} to {string} and saves",
  async function (string, string1) {
    await todo.editTodo(string, string1);
  }
);

When("the user toggles {string} todo", async function (string) {
  await todo.toggleTodo(string);
});

When("the user clicks on Toggle All button", async function () {
  await todo.toggleAllTodos();
});

When("they add {string} todos", async function (string) {
  const countOfTodos = Number(string);
  for (let i = 0; i < countOfTodos; i++) {
    await todo.addNewTodo(`todo${i + 1}`);
  }
});
