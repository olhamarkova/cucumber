import TodoPage from "../pages/TodoPage.js";
import { text } from "../dataProviders/pageDP.js";

export class TodoActions {
  todoPage = new TodoPage();

  async visit() {
    await this.todoPage.page.goto(this.todoPage.url);
  }

  async addNewTodo(todo) {
    await this.todoPage.newTodoInput(text.placeholder).fill(todo);
    await this.todoPage.newTodoInput(text.placeholder).press("Enter");
  }

  async toggleTodo() {
    await this.todoPage.toggleNewTodo.click();
  }
}
