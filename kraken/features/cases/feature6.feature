Feature: Eliminar un tag

@user1 @web
Scenario: Eliminar un tag
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email 6 "admin@example.com"
  And I wait for 1 seconds
  And I enter my password 6 "admin12345"
  And I wait for 1 seconds
  And I click on Login button 6
  And I wait for 1 seconds 
  And I click on Tags button 6
  And I wait for 1 seconds
  And I count the number of tags 6
  And I wait for 1 seconds
  And I click on a random tag 6
  And I wait for 2 seconds
  And I click the delete button tag 6
  And I wait for 1 seconds
  And I click the confirm delete button tag 6
  And I wait for 2 seconds
  And I compare the number of tags 6
  And I wait for 2 seconds