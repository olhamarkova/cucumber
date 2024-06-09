import { After } from "@cucumber/cucumber";

After(async function () {
  console.log("Execution completed");
});
