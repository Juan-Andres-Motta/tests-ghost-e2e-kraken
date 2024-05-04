Feature: Registarse en angular-6-registration-login-example

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 2 seconds
  And I enter my email "admin@example.com"
  And I wait for 2 seconds
  And I enter my password "admin12345"
  And I wait for 2 seconds
  And I click on Login button
  And I wait for 2 seconds
  And I click on Post button
  And I wait for 2 seconds
  And I click on new Post button
  And I wait for 2 seconds
  And I enter a title "Test con kraken"
  And I wait for 2 seconds
  And I enter a body "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  And I wait for 2 seconds
  And I click on Publish button
  And I wait for 2 seconds
  And I click on Continue, final review
  And I wait for 2 seconds
  And I click on Publish post
  And I wait for 2 seconds
  And I click on back to dashboard
  And I wait for 2 seconds
  And I click on Post button
  And I wait for 2 seconds
