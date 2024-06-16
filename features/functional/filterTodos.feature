Feature: Filtering Todos
  As a TodoMVC user
  I want to be able to filter all, active and completed todos
  So I will keep my to-do list in order

  @Smoke @Q-5
  Scenario: User shall see filters for todos
    Given user is on the Todo app page
    When they add a new todo "Buy bread"
    Then filters "All", "Active" and "Completed" are displayed
    And filter "All" is selected

  @Regression @Q-7
  Scenario: User shall filter Active todos
    Given user is on the Todo app page
    And they add "2" todos
    When the user toggles "1" todo
    Then the "1" todo is marked as completed
    And filter "All" is selected
    When the user clicks on "Active" filter
    Then they see "1" "active" todo
    And filter "Active" is selected

  @Regression @Q-15
  Scenario: User shall filter Completed todos
    Given user is on the Todo app page
    And they add "2" todos
    When the user toggles "1" todo
    Then the "1" todo is marked as completed
    When the user clicks on "Completed" filter
    Then they see "1" "completed" todo
    And filter "Completed" is selected

  @Negative @Regression @Q-10
  Scenario: User shall not see a new todo if filter 'Completed' is activated
    Given user is on the Todo app page
    And they add a new todo "Buy bread"
    When the user clicks on "Completed" filter
    Then no todos are displayed