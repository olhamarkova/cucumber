Feature: Creating Todos
  As a TodoMVC user
  I want to be able to add a new todo
  So I can have a to-do list

  @Regression @Q-3
  Scenario: User shall add a new todo
    Given user is on the Todo app page
    When they add a new todo "<todo>"
    Then they see "1" todo added with "<todo>" text
    And they see the message "<message>" 

  Examples:
      | todo       | message       | 
      | Buy bread  | 1 item left!  | 
      | Do laundry | 1 item left!  |
