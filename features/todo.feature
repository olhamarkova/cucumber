Feature: Creating ToDos

  Scenario: Add a new todo
    Given User is landing on the Todo app
    When Adds a new todo "Buy bread"
    Then They see message "1 item left!" and todo added with "Buy bread" on "1" position

