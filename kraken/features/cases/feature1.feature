Feature: Test Post Creation

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 1
  And I wait for 1 seconds
  And I enter my password "admin12345" 1
  And I wait for 1 seconds
  And I click on Login button 1
  And I wait for 1 seconds
  And I click on Post button 1
  And I wait for 1 seconds
  And I click on new Post button 1
  And I wait for 1 seconds
  And I enter a title 1
  And I wait for 1 seconds
  And I enter a body 1
  And I wait for 1 seconds
  And I click on Publish button 1
  And I wait for 1 seconds
  And I click on Continue, final review 1
  And I wait for 1 seconds
  And I click on Publish post 1
  And I wait for 1 seconds
  And I click on back to dashboard 1
  And I wait for 1 seconds
  And I click on Post button 1
  And I wait for 1 seconds
  And Find post 1
  And I wait for 1 seconds
