Feature: Test Post Update

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 3
  And I wait for 1 seconds
  And I enter my password "admin12345" 3
  And I wait for 1 seconds
  And I click on Login button 3
  And I wait for 1 seconds
  And I click on Post button 3
  And I wait for 1 seconds
  And Find post 3
  And I wait for 1 seconds
  And I enter a title 3
  And I wait for 1 seconds
  And I enter a body 3
  And I wait for 1 seconds
  And I click on update button 3
  And I wait for 1 seconds
  And I click on back button 3
  And I wait for 1 seconds
  And Find updated post 3
  And I wait for 1 seconds