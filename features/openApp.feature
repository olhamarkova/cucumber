Feature: Open TodoMVC app

  @Smoke @Q-1
  Scenario: User shall open the TodoMVC app
    Given User is landing on the Todo app
    Then The page title should be "TodoMVC: React"
    And The heading "todos" should be visible
    And The input field with placeholder "What needs to be done?" should be visible
