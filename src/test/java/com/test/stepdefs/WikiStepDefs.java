package com.test.stepdefs;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

/**
 * Author: nitinkumar
 * Created Date: 03/05/20
 * Info: glue code for wiki search feature
 **/

public class WikiStepDefs {
    WebDriver driver;

    @Given("^Navigate to Wiki HomePage$")
    public void navigateToWikiHomePage() {
        driver = new ChromeDriver();
        driver.navigate().to("https://www.wikipedia.org/");
    }

    @Given("^I enter search string as \"([^\"]*)\"$")
    public void iEnterSearchStringAs(String arg0) throws Throwable {
        driver.findElement(By.id("searchInput")).sendKeys(arg0);
    }

    @And("^Click on search button$")
    public void clickOnSearchButton() {
        driver.findElement(By.xpath("//*[@id=\"search-form\"]/fieldset/button/i")).click();
    }

    @And("^wait for \"([^\"]*)\" second$")
    public void waitForSecond(String arg0) throws Throwable {
        driver.manage().timeouts().pageLoadTimeout(1, TimeUnit.SECONDS);
    }

    @Then("^Page title contains \"([^\"]*)\"$")
    public void pageTitleContains(String arg0) throws Throwable {
        WebElement headingWebElement = driver.findElement(By.xpath("//*[@id=\"firstHeading\"]"));
        String heading = headingWebElement.getText();
        // System.out.println("Received title: " + heading);
        if (heading.equalsIgnoreCase(arg0)) {
            System.out.println("Test passed");
        } else {
            System.out.println("Test Failed");
        }
        driver.close();
    }

    // Example of Scenario Hook. Similarly we have @Before
    @After
    public void postScenarioStep() {
        System.out.println(" Post Scenario hook invoked..\n");
    }

    // Example of Tagged Hook. Similarly we have @Before("tagName")
    @After("@DataDrivenTag1")
    public void postTaggedHook(){
        System.out.println(" After Tag hook invoked..\n");
    }
}
