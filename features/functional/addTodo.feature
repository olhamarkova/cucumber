Feature: Creating ToDos

  @Regression @Q-3
  Scenario: The user shall add a new todo
    Given User is on the Todo app page
    When Adds a new todo "<todo>"
    Then They see the message "<message>" and a "1" todo added with "<todo>" text

  
  Examples:
      | todo       | message       | 
      | Buy bread  | 1 item left!  | 
      | Do laundry | 1 item left!  |
