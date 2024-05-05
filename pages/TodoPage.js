import { expect } from "@playwright/test";
import { text } from "../dataProviders/pageDP.js";

export default class TodoPage {
  constructor(page) {
    this.page = page;
    this.url = "https://todomvc.com/examples/react/dist/";
    this.header = this.page.locator("h1");
    this.newTodoInput = this.page.getByPlaceholder(text.placeholder);
    this.toggleNewTodo = this.page.getByTestId("todo-item-toggle");
    this.todoLabel = this.page.locator("label[data-testid='todo-item-label']");
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async checkTitle() {
    await expect(this.page).toHaveTitle(text.title);
  }

  async checkHeader() {
    await expect(this.header).toHaveText(text.heading);
  }

  async addNewTodo(text) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press("Enter");
  }

  async validateTodoText(text, index) {
    await expect(this.todoLabel.nth(index - 1)).toHaveText(text);
  }

  async checkCountOfTodos(msg) {
    await expect(this.page.getByText(msg)).toBeVisible();
  }

  async toggleTodo() {
    await this.toggleNewTodo.click();
  }
}
