Feature: Clear Completed Todos
  As a TodoMVC user
  I want to be able to clear all completed todos
  So I can keep my to-do list neat

  @Regression @Q-8
  Scenario: User shall clear completed todos
    Given user is on the Todo app page
    And they add a new todo "Buy bread"
    When the user toggles "1" todo
    Then the "1" todo is marked as completed
    When the user clicks on Clear Completed button
    Then no todos are displayed

 @Negative @Regression @Q-11
  Scenario: User shall not use the Clear Completed option if there are no completed todos
    Given user is on the Todo app page
    When they add a new todo "Buy bread"
    Then they see "1" "active" todo
    And the Clear Completed button is disabled
    