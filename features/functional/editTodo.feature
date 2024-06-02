Feature: Editing Todos
  As a TodoMVC user
  I want to be able to edit an existing todo
  So I can update my to-do list

  @Regression @Q-4
  Scenario: User shall edit a todo
    Given User is on the Todo app page
    When Adds a new todo "Buy bread"
    Then "1" st new todo with text "Buy bread" is added
    When Edits the "1" todo to "Buy milk" and saves
    Then The "1" st todo has text "Buy milk"

  # new