Feature: Toggle Todos
  As a TodoMVC user
  I want to be able to toggle a todo
  So I can mark todo as completed

  @Smoke @Q-5
  Scenario: User shall see filters for todos
    Given user is on the Todo app page
    And they add a new todo "Buy bread"
    When the user toggles "1" todo
    Then the "1" todo is marked as completed
    And they see the message '0 items left!'
