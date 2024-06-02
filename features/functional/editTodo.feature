Feature: Editing Todos
  As a TodoMVC user
  I want to be able to edit an existing todo
  So I can update my to-do list

  @Regression @Q-4
  Scenario: User shall edit a todo
    Given user is on the Todo app page
    When they add a new todo "Buy bread"
    Then "1" st new todo with text "Buy bread" is added
    When they edit the "1" todo to "Buy milk" and saves
    Then the "1" st todo has text "Buy milk"

  # new