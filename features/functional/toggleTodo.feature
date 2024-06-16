Feature: Toggle Todos
  As a TodoMVC user
  I want to be able to toggle a todo
  So I can mark todo as completed

  @Regression @Q-6
  Scenario: User shall see filters for todos
    Given user is on the Todo app page
    And they add a new todo "Buy bread"
    When the user toggles "1" todo
    Then the "1" todo is marked as completed
    And they see the message '0 items left!'

  @Regression @Q-12
  Scenario: User shall toggle all todos by clicking on 'Toggle all'
    Given user is on the Todo app page
    And they add "2" todos
    When the user clicks on Toggle All button
    Then all todos are marked as "completed"
    When the user clicks on Toggle All button
    Then all todos are marked as "active"
    And they see the message '2 items left!'
