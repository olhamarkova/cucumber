Feature: Editing Todos
  As a TodoMVC user
  I want to be able to edit an existing todo
  So I can update my to-do list

  @Regression @Q-4
  Scenario: User shall edit a todo
    Given user is on the Todo app page
    When they add a new todo "Buy bread"
    Then they see "1" todo added with "Buy bread" text
    When they edit the todo from "Buy bread" to "Buy milk" and saves
    Then they see "1" todo added with "Buy milk" text
