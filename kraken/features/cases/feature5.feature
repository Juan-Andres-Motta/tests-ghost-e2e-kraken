Feature: Editar un tag

@user1 @web
Scenario: Editar un tag
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email 5 "admin@example.com"
  And I wait for 1 seconds
  And I enter my password 5 "admin12345"
  And I wait for 1 seconds
  And I click on Login button 5
  And I wait for 1 seconds 
  And I click on Tags button 5
  And I wait for 1 seconds
  And I click on a random tag 5
  And I wait for 2 seconds
  And I clear and enter a tag name input 5
  And I wait for 1 seconds
  And I enter a tag color input 5
  And I wait for 1 seconds
  And I enter a slug input 5
  And I wait for 1 seconds
  And I enter a description input 5
  And I wait for 1 seconds
  And I click on Save button 5
  And I wait for 2 seconds
  And I click on back to tags 5
  And I wait for 2 seconds
  And I find the tag created 5
  And I wait for 2 seconds