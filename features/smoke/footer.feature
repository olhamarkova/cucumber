Feature: Verify information on the footer of TodoMVC app
  As a TodoMVC user
  I want to be able to see information about the company in the footer and the link to the main page
  So I know how to edit todo and I can go to the main page of the application

  @Smoke @Q-2
  Scenario: User shall see information on the footer
    When user is landing on the Todo app
    Then the footer contains '<information>'

    Examples:
    |information                           |
    |Double-click to edit a todo           |
    |Created by the TodoMVC Team           |
    |Part of TodoMVC                       |


  @Smoke @Q-14
  Scenario: User shall open the main page by clicking on TodoMVC link in the footer
    Given user is on the Todo app page
    When they click on the TodoMVC link in the footer
    Then the "TodoMVC" page is opened
