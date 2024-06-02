Feature: Filtering Todos
  As a TodoMVC user
  I want to be able to filter all, active and completed todos
  So I will keep my to-do list in order

  @Smoke @Q-5
  Scenario: User shall see filters for todos
    Given user is on the Todo app page
    When they adds a new todo "<todo>"
    Then filters "All", "Active" and "Completed" are displayed
    And filter "All" is selected

  # new