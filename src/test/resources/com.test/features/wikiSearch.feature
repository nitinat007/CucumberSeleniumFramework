# Features of wiki search

Feature: Test Wiki search

  Background:
  User should be on wiki home page
    Given Navigate to Wiki HomePage

  Scenario: Search for valid search String
    When I enter search string as "coronavirus"
    And Click on search button
    And wait for "1" second
    Then Page title contains "Coronavirus"

  Scenario: Search for invalid search String
    When I enter search string as "kuch v daala"
    And Click on search button
    And wait for "1" second
    Then Page title contains "Search results"