Feature: Registarse en angular-6-registration-login-example

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com"
  And I wait for 1 seconds
  And I enter my password "admin12345"
  And I wait for 1 seconds
  And I click on Login button
  And I wait for 1 seconds
  And I click on Post button
  And I wait for 1 seconds
  And I click on new Post button
  And I wait for 1 seconds
  And I enter a title
  And I wait for 1 seconds
  And I enter a body
  And I wait for 1 seconds
  And I click on Publish button
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on Publish post