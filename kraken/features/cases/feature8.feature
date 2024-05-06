Feature: Test Page Deletion

@user1 @web
Scenario: Rellenar formulario de registro
  Given I navigate to page "https://ghost.juanandresdeveloper.com/ghost/#/signin"
  And I wait for 1 seconds
  And I enter my email "admin@example.com" 8
  And I wait for 1 seconds
  And I enter my password "admin12345" 8
  And I wait for 1 seconds
  And I click on Login button 8
  And I wait for 1 seconds
  And I click on page button 8
  And I wait for 1 seconds
  And Find page 8
  And I wait for 1 seconds
  And I click on page config button 8
  And I wait for 1 seconds
  And I click on delete page button 8
  And I wait for 1 seconds
  And I click on confirm delete page button 8
  And I wait for 1 seconds
  And Find deleted page 8
  And I wait for 1 seconds