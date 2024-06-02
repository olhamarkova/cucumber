Feature: Verify information on the footer of TodoMVC app

@Smoke @Q-2
  Scenario: User shall see information on the footer
    When User is landing on the Todo app
    Then The footer contains '<information>'

    Examples:
    |information                           |
    |Double-click to edit a todo           |
    |Created by the TodoMVC Team           |
    |Part of TodoMVC                       |


# @Smoke @Q-14
#   Scenario: User shall open the main page by clicking on TodoMVC link in the footer
#     Given User is landing on the Todo app
#     When User clicks on the TodoMVC link in the footer
#     Then The TodoMVC page is opened
