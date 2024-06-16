Feature: Delete Todos
  As a TodoMVC user
  I want to be able to delete todos
  So I can keep my to-do list up to date

  @Regression @Q-9
  Scenario: User shall delete a todo
    Given user is on the Todo app page
    And they add a new todo "Buy bread"
    When they click on the X icon near "1" todo
    Then no todos are displayed
