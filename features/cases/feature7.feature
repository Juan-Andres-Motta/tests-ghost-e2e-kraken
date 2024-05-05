Feature: Test Page Creation

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 7
  And I wait for 1 seconds
  And I enter my password "admin12345" 7
  And I wait for 1 seconds
  And I click on Login button 7
  And I wait for 1 seconds
  And I click on Pages button 7
  And I wait for 1 seconds
  And I click on new Page button 7
  And I wait for 1 seconds
  And I enter a title 7
  And I wait for 1 seconds
  And I enter a body 7
  And I wait for 1 seconds
  And I click on Publish button 7
  And I wait for 1 seconds
  And I click on Continue, final review 7
  And I wait for 1 seconds
  And I click on Publish page 7
  And I wait for 1 seconds
  And I click on back to dashboard 7
  And I wait for 1 seconds
  And I click on Page button 7
  And I wait for 1 seconds
  And Find page 7
  And I wait for 1 seconds
