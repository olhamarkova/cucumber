Feature: Creating ToDos

  @Regression @Q-TODOMVC-3
  Scenario: Add a new todo
    Given User is landing on the Todo app
    When Adds a new todo "<todo>"
    Then They see the message "<message>" and a "1" todo added with "<todo>" text

  
  Examples:
      | todo       | message       | 
      | Buy bread  | 1 item left!  | 
      | Do laundry | 1 item left!  |
