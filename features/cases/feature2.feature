Feature: Test Post Deletion

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 2
  And I wait for 1 seconds
  And I enter my password "admin12345" 2
  And I wait for 1 seconds
  And I click on Login button 2
  And I wait for 1 seconds
  And I click on Post button 2
  And I wait for 1 seconds
  And Find post 2
  And I wait for 1 seconds
  And I click on Post config button 2
  And I wait for 1 seconds
  And I click on delete Post button 2
  And I wait for 1 seconds
  And I click on confirm delete Post button 2
  And I wait for 1 seconds
  And Find deleted post 2
  And I wait for 1 seconds