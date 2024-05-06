Feature: Crear un tag

@user1 @web
Scenario: Crear un tag
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email 4 "admin@example.com"
  And I wait for 1 seconds
  And I enter my password 4 "admin12345"
  And I wait for 1 seconds
  And I click on Login button 4
  And I wait for 1 seconds 
  And I click on Tags button 4
  And I wait for 1 seconds
  And I click on new Tag button 4
  And I wait for 1 seconds
  And I enter a tag name input 4
  And I wait for 1 seconds
  And I enter a tag color input 4
  And I wait for 1 seconds
  And I enter a slug input 4
  And I wait for 1 seconds
  And I enter a description input 4
  And I wait for 1 seconds
  And I click on Save button 4
  And I wait for 2 seconds
  And I click on back to tags 4
  And I wait for 2 seconds
  And I find the tag created 4
  And I wait for 2 seconds
  