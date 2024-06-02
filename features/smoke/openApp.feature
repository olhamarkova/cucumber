Feature: Open TodoMVC app
  As a TodoMVC user
  I want to be able to open the app
  So I will be able to work with it

  @Smoke @Q-1
  Scenario: User shall open the TodoMVC app
    When User is landing on the Todo app
    Then The page title should be "TodoMVC: React"
    And The heading "todos" should be visible
    And The input field with placeholder "What needs to be done?" should be visible
