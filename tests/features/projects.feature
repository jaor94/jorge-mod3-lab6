@ui-tests @api-tests
Feature: Todoist Projects
Background: Login into Todoist
    Given the user logged into Todoist

@test-many-steps @delete-project-api
Scenario: Create Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    And the user clicks the Add Project Icon on the Vertical Menu

    And the user sets "Jorge in many steps" as Project Name on the Add Project popup
    And the user sets "mint_green" as Project Color 
    #colores: berry_red, red, orange, yellow, olive_green, lime_green, green, mint_green, teal, sky_blue,
    #         light_blue, blue, grape, violet, lavender, magenta, salmon, charcoal, grey, taupe 
    And the user sets the new project as favorite "true"
    #cadenas: true, false
    And the user sets the new project as a "Board"
    #opciones: List, Board

    When the user clicks the Add Button on the Add Project popup

    Then the user should see the New Project on the Vertical Menu

@test-one-step
Scenario: Create New Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    And the user clicks the Add Project Icon on the Vertical Menu

    And the user sets "Jorge in one step" as Project name, "lime_green" as project color, "true" as favorite and "Board" as type

    When the user clicks the Add Button on the Add Project popup
    Then the user should see the New Project on the Vertical Menu