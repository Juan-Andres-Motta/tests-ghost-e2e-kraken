Feature: Tests playwright

    Scenario Outline: Create Post
        When Login
        Then I click on Post button 1
        Then I click on new Post button 1
        Then I enter a title 1
        Then I enter a body 1
        Then I click on Publish button 1
        Then I click on Continue, final review 1
        Then I click on Publish post 1
        Then I click on back to dashboard 1
        Then I click on back to posts 1
        Then Find post 1

    Scenario Outline: Update Post
        When Login
        Then I click on Post button 3
        Then Find post 3
        Then I enter a title 3
        Then I enter a body 3
        Then I click on update button 3
        Then I click on back button 3
        Then Find updated post 3


    Scenario Outline: Delete Post
        When Login
        Then I click on Post button 2
        Then Find post 2
        Then I click on Post config button 2
        Then I click on delete Post button 2
        Then I click on confirm delete Post button 2
        Then Find deleted post 2

    Scenario Outline: Create Tag
        When Login
        Then I click on Tags button 4
        Then I click on new Tag button 4
        Then I enter a tag name input 4
        Then I enter a tag color input 4
        Then I enter a slug input 4
        Then I enter a description input 4
        Then I click on Save button 4
        Then I click on back to tags 4
        Then I find the tag created 4

    Scenario Outline: Update Tag
        When Login
        Then I click on tags button 5
        Then I click on a random tag 5
        Then I clear and enter a tag name input 5
        Then I clear and enter a tag color input 5
        Then I clear and enter a slug input 5
        Then I clear and enter a description input 5
        Then I click on Save button 5
        Then I click on back to tags 5
        Then I find the tag created 5

    Scenario Outline: Delete Tag
        When Login
        Then I click on tags button 6
        Then I click on a random tag 6
        Then I click on Delete button 6
        Then I click the confirm delete button tag 6

    Scenario Outline: Create Page
        When Login
        Then I click on Pages button 7
        Then I click on new Page button 7
        Then I enter a title 7
        Then I enter a body 7
        Then I click on Publish button 7
        Then I click on Continue, final review 7
        Then I click on Publish page 7
        Then I click on back to dashboard 7
        Then I click on Pages button 7
        Then Find page 7


    Scenario Outline: Update Page
        When Login
        Then I click on page button 8
        Then Find page 8
        Then I click on page config button 8
        Then I click on delete page button 8
        Then I click on confirm delete page button 8

    Scenario Outline: Delete Page
        When Login
        Then I click on page button 9
        Then Find page 9
        Then I enter a title 9
        Then I enter a body 9
        Then I click on update button 9
        Then I click on back button 9

    Scenario Outline: Change Base Color
        When Login
        Then I click on Dashboard button 10
        Then I click on customize your design button 10
        Then I clear and enter an accent color input 10
        Then I click on Save button 10