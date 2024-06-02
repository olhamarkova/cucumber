import TodoPage from "../pages/TodoPage.js";
import { text } from "../dataProviders/pageDP.js";
import "dotenv/config";

export class TodoActions {
  todoPage = new TodoPage();

  async visit() {
    await this.todoPage.page.goto(process.env.URL);
  }

  async addNewTodo(todo) {
    await this.todoPage.newTodoInput(text.placeholder).fill(todo);
    await this.todoPage.newTodoInput(text.placeholder).press("Enter");
  }

  async toggleTodo(index) {
    await this.todoPage.toggleTodoCheckbox(index).click();
  }

  async openMainPage() {
    await this.todoPage.mainPageURL.click();
  }
}
