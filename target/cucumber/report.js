$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com.test/features/facebookLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook Login Tests",
  "description": "",
  "id": "facebook-login-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FacebookLoginFeatureTag1"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "User navigates to Facebook",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsFacebook.goToFacebook()"
});
formatter.result({
  "duration": 4793602437,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#Scenario with AND"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter username as \"TOM1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"JERRY1\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM1",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterUsername(String)"
});
formatter.result({
  "duration": 119233576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY1",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterPassword(String)"
});
formatter.result({
  "duration": 178403087,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsFacebook.checkFail()"
});
formatter.result({
  "duration": 26286930875,
  "status": "passed"
});
formatter.after({
  "duration": 126330,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "User navigates to Facebook",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsFacebook.goToFacebook()"
});
formatter.result({
  "duration": 3450750436,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#Scenario showing Cucumber DataTables"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@ScenarioTagWithDataTable"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter username \u0026 password as follows:",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19
    },
    {
      "cells": [
        "TOM1",
        "Jerry1"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsFacebook.iEnterUsernamePasswordAsFollows(StepDefinitionsFacebook$UserDetails\u003e)"
});
formatter.result({
  "duration": 290704017,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsFacebook.checkFail()"
});
formatter.result({
  "duration": 29290930917,
  "status": "passed"
});
formatter.after({
  "duration": 92744,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#Example of Scenario Outline and Scenario tag"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@ScenarioTag1,"
    },
    {
      "line": 24,
      "name": "@DataDrivenTag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 30,
      "id": "facebook-login-tests;;;1"
    },
    {
      "cells": [
        "Tom123",
        "Jerry123"
      ],
      "line": 31,
      "id": "facebook-login-tests;;;2"
    },
    {
      "cells": [
        "Tom1234",
        "Jerry1234"
      ],
      "line": 32,
      "id": "facebook-login-tests;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "User navigates to Facebook",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsFacebook.goToFacebook()"
});
formatter.result({
  "duration": 3508952160,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@DataDrivenTag1"
    },
    {
      "line": 24,
      "name": "@ScenarioTag1,"
    },
    {
      "line": 1,
      "name": "@FacebookLoginFeatureTag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"Tom123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"Jerry123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tom123",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterUsername(String)"
});
formatter.result({
  "duration": 134596826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jerry123",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterPassword(String)"
});
formatter.result({
  "duration": 184379423,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsFacebook.checkFail()"
});
formatter.result({
  "duration": 31141111390,
  "status": "passed"
});
formatter.after({
  "duration": 50543,
  "status": "passed"
});
formatter.after({
  "duration": 49784,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "User navigates to Facebook",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsFacebook.goToFacebook()"
});
formatter.result({
  "duration": 3940537591,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "",
  "description": "",
  "id": "facebook-login-tests;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@DataDrivenTag1"
    },
    {
      "line": 24,
      "name": "@ScenarioTag1,"
    },
    {
      "line": 1,
      "name": "@FacebookLoginFeatureTag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"Tom1234\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter password as \"Jerry1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tom1234",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterUsername(String)"
});
formatter.result({
  "duration": 113592504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jerry1234",
      "offset": 21
    }
  ],
  "location": "StepDefinitionsFacebook.enterPassword(String)"
});
formatter.result({
  "duration": 187415004,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsFacebook.checkFail()"
});
formatter.result({
  "duration": 11763663169,
  "status": "passed"
});
formatter.after({
  "duration": 43811,
  "status": "passed"
});
formatter.after({
  "duration": 35980,
  "status": "passed"
});
formatter.uri("com.test/features/wikiSearch.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Features of wiki search"
    }
  ],
  "line": 3,
  "name": "Test Wiki search",
  "description": "",
  "id": "test-wiki-search",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "User should be on wiki home page",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Navigate to Wiki HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiStepDefs.navigateToWikiHomePage()"
});
formatter.result({
  "duration": 1294749268,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for valid search String",
  "description": "",
  "id": "test-wiki-search;search-for-valid-search-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter search string as \"coronavirus\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "wait for \"1\" second",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Page title contains \"Coronavirus\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "coronavirus",
      "offset": 26
    }
  ],
  "location": "WikiStepDefs.iEnterSearchStringAs(String)"
});
formatter.result({
  "duration": 295195289,
  "status": "passed"
});
formatter.match({
  "location": "WikiStepDefs.clickOnSearchButton()"
});
formatter.result({
  "duration": 1224540543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "WikiStepDefs.waitForSecond(String)"
});
formatter.result({
  "duration": 5504720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coronavirus",
      "offset": 21
    }
  ],
  "location": "WikiStepDefs.pageTitleContains(String)"
});
formatter.result({
  "duration": 102382018,
  "status": "passed"
});
formatter.after({
  "duration": 36002,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "User should be on wiki home page",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Navigate to Wiki HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiStepDefs.navigateToWikiHomePage()"
});
formatter.result({
  "duration": 1367155120,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search for invalid search String",
  "description": "",
  "id": "test-wiki-search;search-for-invalid-search-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I enter search string as \"kuch v daala\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for \"1\" second",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page title contains \"Search results\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kuch v daala",
      "offset": 26
    }
  ],
  "location": "WikiStepDefs.iEnterSearchStringAs(String)"
});
formatter.result({
  "duration": 94785230,
  "status": "passed"
});
formatter.match({
  "location": "WikiStepDefs.clickOnSearchButton()"
});
formatter.result({
  "duration": 2755554558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "WikiStepDefs.waitForSecond(String)"
});
formatter.result({
  "duration": 2861933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search results",
      "offset": 21
    }
  ],
  "location": "WikiStepDefs.pageTitleContains(String)"
});
formatter.result({
  "duration": 240311325,
  "status": "passed"
});
formatter.after({
  "duration": 34074,
  "status": "passed"
});
});