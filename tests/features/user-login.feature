# Install Cucumber JS allure
# https://www.npmjs.com/package/allure-cucumberjs
# https://github.com/allure-framework/allure-js
# https://github.com/allure-framework/allure-js/blob/master/packages/allure-cucumberjs/README.md

# Feature: First Test

# Scenario: Breaker guesses a word
#   Given the Maker has chosen a word
#   When the Breaker makes a guess
#   Then the Maker is asked to score

@login @ui-tests
Feature: Login into Todoist App

Scenario: Todoist Login
    Given the user sets the email
    And the user sets the password
    When the user clicks the Login button
    Then the user should see "app/today" text on the URL


