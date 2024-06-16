import { After } from "@cucumber/cucumber";
import TodoPage from "../../../pages/TodoPage.js";

const todoPage = new TodoPage();

After(async function (scenario) {
  console.log("Execution completed");
  await todoPage.page.screenshot({
    path: `screenshots/screenshot${scenario.testCaseStartedId}.png`,
    fullPage: true,
  });
});
