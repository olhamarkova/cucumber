Feature: Creating ToDos

  Scenario: Add a new todo
    Given User is landing on the Todo app
    When Adds a new todo "Buy bread"
    Then They see the message "1 item left!" and a "1" todo added with "Buy bread" text
