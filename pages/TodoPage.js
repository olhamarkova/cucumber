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
    this.mainPageURL = this.page.locator("footer.info p a");
    this.header = this.page.locator("h1");
    this.todoLabel = this.page.getByTestId("todo-item-label");
  }

  toggleTodoCheckbox(index) {
    return this.page.getByTestId("todo-item-toggle").nth(index - 1);
  }

  footerInfo(info) {
    return this.page.locator("footer.info p").getByText(info);
  }

  newTodoInput(placeholder) {
    return this.page.getByPlaceholder(placeholder);
  }
}
