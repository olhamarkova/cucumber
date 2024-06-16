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
    await expect(this.todoPage.todoLabel.nth(Number(index) - 1)).toHaveText(
      text
    );
  }

  async validateTodoCountMsg(msg) {
    await expect(this.todoPage.page.getByText(msg)).toBeVisible();
  }

  async validateInput(placeholder) {
    await expect(this.todoPage.newTodoInput(placeholder)).toBeVisible();
  }

  async validateFooterInfo(info) {
    await expect(this.todoPage.footerInfo(info)).toBeVisible();
  }

  async validateActiveFilter(filterText) {
    await expect(this.todoPage.filter(filterText)).toHaveClass("selected");
  }

  async validateFilters(filterText) {
    await expect(this.todoPage.filter(filterText)).toBeVisible();
  }

  async validateCompletedTodo(index) {
    await expect(this.todoPage.todoItem(index)).toHaveClass("completed");
  }

  async validateTodoList(className) {
    const todos = await this.todoPage.todoItems;
    for (let i = 0; i < todos.count(); i++) {
      await expect(this.todoPage.todoItem(i)).toHaveClass(className);
    }
  }

  async validateActiveTodo(index) {
    await expect(this.todoPage.todoItem(index)).not.toHaveClass("completed");
  }
}
