package com.test.stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

/**
 * Author: nitinkumar
 * Created Date: 02/05/20
 * Info: Step Definition of fb login feature scenarios
 **/

public class StepDefinitionsFacebook {
    WebDriver driver = null;

    @Given("^I am on Facebook login page$")
    public void goToFacebook() {
        //  System.setProperty("webdriver.chrome.driver","/usr/local/bin/chromedriver"); // uncomment if path is different
        driver = new ChromeDriver();
        driver.navigate().to("https://www.facebook.com/");
    }

    @When("^I enter username as \"(.*)\"$")
    public void enterUsername(String arg1) {
        driver.findElement(By.id("email")).sendKeys(arg1);
    }

    @When("^I enter password as \"(.*)\"$")
    public void enterPassword(String arg1) {
        driver.findElement(By.id("pass")).sendKeys(arg1);
        driver.findElement(By.id("u_0_b")).click(); //id might change
    }

    @Then("^Login should fail$")
    public void checkFail() {

        if (driver.getCurrentUrl().equalsIgnoreCase(
                "https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110")) {
            System.out.println("Test1 Pass");
        } else {
            System.out.println("Test1 Failed");
        }
        //check if this assert works
        assert driver.getCurrentUrl().equalsIgnoreCase("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110");
        driver.close();
    }

    @When("^I enter username as:$")
    public void iEnterUsernameAs() {

    }

    @When("^I enter username & password as follows:$")
    public void iEnterUsernamePasswordAsFollows(List<UserDetails> users) {
        UserDetails userToBeSignedUp = users.get(0);
        driver.findElement(By.id("email")).sendKeys(userToBeSignedUp.username);
        driver.findElement(By.id("pass")).sendKeys(userToBeSignedUp.password);
        driver.findElement(By.id("u_0_b")).click(); //id might change
    }

    private class UserDetails {
        public String username;
        public String password;
    }
}
