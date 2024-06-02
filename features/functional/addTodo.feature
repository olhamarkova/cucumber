Feature: Creating Todos
  As a TodoMVC user
  I want to be able to add a new todo
  So I can have a to-do list

  @Regression @Q-3
  Scenario: User shall add a new todo
    Given User is on the Todo app page
    When Adds a new todo "<todo>"
    Then They see the message "<message>" and a "1" todo added with "<todo>" text

  
  Examples:
      | todo       | message       | 
      | Buy bread  | 1 item left!  | 
      | Do laundry | 1 item left!  |
