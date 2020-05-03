Feature: Facebook Login Tests

  Background:
  User navigates to Facebook
    Given I am on Facebook login page

#Scenario with AND
  Scenario:
    When I enter username as "TOM1"
    And I enter password as "JERRY1"
    Then Login should fail

#Scenario with BUT
  Scenario:
    When I enter username as "TOM1"
    And I enter password as "JERRY1"
    Then Login should fail
    But Relogin option should be available

#Example of Scenario Outline
 Scenario Outline:
    When I enter username as "<userName>"
    And I enter password as "<password>"
    Then Login should fail
    Examples:
   | userName | password |
   | Tom123   | Jerry123 |
   | Tom1234  | Jerry1234|