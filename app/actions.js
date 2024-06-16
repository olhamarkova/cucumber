import TodoPage from "../pages/TodoPage.js";
import { text } from "../data/pageDP.js";
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

  async editTodo(oldTodo, newTodo) {
    await this.todoPage.todoLabel.dblclick();
    await this.todoPage.editTodoInput(oldTodo).fill(newTodo);
    await this.todoPage.editTodoInput(oldTodo).press("Enter");
  }

  async toggleAllTodos() {
    await this.todoPage.toggleAllButton.click();
  }
}
