Feature: Test Page Update

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 9
  And I wait for 1 seconds
  And I enter my password "admin12345" 9
  And I wait for 1 seconds
  And I click on Login button 9
  And I wait for 1 seconds
  And I click on page button 9
  And I wait for 1 seconds
  And Find page 9
  And I wait for 1 seconds
  And I enter a title 9
  And I wait for 1 seconds
  And I enter a body 9
  And I wait for 1 seconds
  And I click on update button 9
  And I wait for 1 seconds
  And I click on back button 9
  And I wait for 1 seconds
  And Find updated page 9
  And I wait for 1 seconds