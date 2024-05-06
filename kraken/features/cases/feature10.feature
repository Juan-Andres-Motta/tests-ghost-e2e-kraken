Feature: Cambiar el color base de la pagina

@user1 @web
Scenario: Cambiar el color base de la pagina
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email 6 "admin@example.com"
  And I wait for 1 seconds
  And I enter my password 6 "admin12345"
  And I wait for 1 seconds
  And I click on Login button 6
  And I wait for 1 seconds 
  And I click on Dashboard button 10
  And I wait for 1 seconds
  And I click on customize your design button 10
  And I wait for 1 seconds
  And I clear and enter an accent color input 10
  And I wait for 2 seconds
  And I click on Save button 10
  And I wait for 1 seconds