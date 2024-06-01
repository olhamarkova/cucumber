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
    this.mainPageURL = this.page.locator("footer.info p a");
    this.header = this.page.locator("h1");
    this.toggleNewTodo = this.page.getByTestId("todo-item-toggle");
    this.todoLabel = this.page.locator("label[data-testid='todo-item-label']");
  }

  footerInfo(info) {
    return this.page.locator("footer.info p").getByText(info);
  }

  newTodoInput(placeholder) {
    return this.page.getByPlaceholder(placeholder);
  }
}
