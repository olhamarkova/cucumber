import { expect } from "@playwright/test";
import TodoPage from "../pages/TodoPage.js";

export class TodoAssertions {
  todoPage = new TodoPage();

  async checkTitle(title) {
    await expect(this.todoPage.page).toHaveTitle(title);
  }

  async checkHeader(heading) {
    await expect(this.todoPage.header).toHaveText(heading);
  }

  async validateTodoText(text, index) {
    await expect(this.todoPage.todoLabel.nth(index - 1)).toHaveText(text);
  }

  async checkCountOfTodos(msg) {
    await expect(this.todoPage.page.getByText(msg)).toBeVisible();
  }

  async validateInput(placeholder) {
    await expect(this.todoPage.newTodoInput(placeholder)).toBeVisible();
  }

  async validateFooterInfo(info) {
    await expect(this.todoPage.footerInfo(info)).toBeVisible();
  }
}
