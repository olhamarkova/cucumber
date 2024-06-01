import { expect } from "@playwright/test";
import { chromium } from "@playwright/test";
import { text } from "../dataProviders/pageDP.js";

let page;
let browser;

browser = await chromium.launch({
  headless: false,
});
page = await browser.newPage();

export default class TodoPage {
  constructor() {
    this.page = page;
    this.url = "https://todomvc.com/examples/react/dist/";
    this.header = this.page.locator("h1");
    this.toggleNewTodo = this.page.getByTestId("todo-item-toggle");
    this.todoLabel = this.page.locator("label[data-testid='todo-item-label']");
  }

  newTodoInput(placeholder) {
    return this.page.getByPlaceholder(placeholder);
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async addNewTodo(todo) {
    await this.newTodoInput(text.placeholder).fill(todo);
    await this.newTodoInput(text.placeholder).press("Enter");
  }

  async checkCountOfTodos(msg) {
    await expect(this.page.getByText(msg)).toBeVisible();
  }

  async toggleTodo() {
    await this.toggleNewTodo.click();
  }

  //validations and checks
  async checkTitle(title) {
    await expect(this.page).toHaveTitle(title);
  }

  async checkHeader(heading) {
    await expect(this.header).toHaveText(heading);
  }

  async validateTodoText(text, index) {
    await expect(this.todoLabel.nth(index - 1)).toHaveText(text);
  }

  async validateInput(placeholder) {
    await expect(this.newTodoInput(placeholder)).toBeVisible();
  }
}
