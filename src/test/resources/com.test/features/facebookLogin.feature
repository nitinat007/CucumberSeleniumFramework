@FacebookLoginFeatureTag1
Feature: Facebook Login Tests

  Background:
  User navigates to Facebook
    Given I am on Facebook login page

#Scenario with AND
  Scenario:
    When I enter username as "TOM1"
    And I enter password as "JERRY1"
    Then Login should fail


#Scenario showing Cucumber DataTables
  @ScenarioTagWithDataTable
  Scenario:
    When I enter username & password as follows:
      | username  | password   |
      | TOM1 | Jerry1 |
    Then Login should fail

#Example of Scenario Outline and Scenario tag
  @ScenarioTag1, @DataDrivenTag1
  Scenario Outline:
    When I enter username as "<userName>"
    And I enter password as "<password>"
    Then Login should fail
    Examples:
      | userName | password  |
      | Tom123   | Jerry123  |
      | Tom1234  | Jerry1234 |