# CucumberSeleniumFrameworkDemo

Cucumber is a testing tool that supports Behavior Driven Development (BDD) framework. It defines application behavior using simple English text, defined by a language called Gherkin. Cucumber was initially implemented in Ruby and then extended to Java framework.

A feature usually contains a list of scenarios to be tested for that feature. A file in which we store features, description about the features and scenarios to be tested is known as Feature File.
The file, in which Cucumber tests are written, is known as feature files (with .feature extension).  

A simple feature file consists of the following keywords/parts −
* Feature − Name of the feature under test.
* Description (optional) − Describe about feature under test.
* Scenario − What is the test scenario.
* Given − Prerequisite before the test steps get executed.
* When − Specific condition which should match in order to execute the next step.
* Then − What should happen if the condition mentioned in WHEN is satisfied.
* Example of few other keywords − Background, But, *, Scenario Outline, Examples

Scenario Outline is the same scenario can be executed for multiple sets of data using the scenario outline. The data is provided by a tabular structure separated by (I I).
Background keyword is used to group multiple given statements into a single group. The keyword mostly used when the same set of given statements are repeated in each scenario of the feature file.

Steps definition file stores the mapping between each step of the scenario defined in the feature file with a code of function to be executed.

Advantages of Cucumber Over Other Tools
* Cucumber supports different languages like Java.net and Ruby.
* It acts as a bridge between the business and technical language. We can accomplish this by creating a test case in plain English text.
* It allows the test script to be written without knowledge of any code, it allows the involvement of non-programmers as well.
* It serves the purpose of end-to-end test framework unlike other tools.
* Due to simple test script architecture, Cucumber provides code reusability.
