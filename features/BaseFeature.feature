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
  And I wait for 1 seconds
  And I click on back to dashboard
  And I wait for 1 seconds
  And I click on Post button
  And I wait for 1 seconds
  And Find post
  And I wait for 1 seconds
