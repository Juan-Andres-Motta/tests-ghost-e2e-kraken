Feature: Tests playwright

    Scenario Outline: Create Post
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Post button 1
        Then I take a screenshot for visual regression Post button 1
        Then I click on new Post button 1
        Then I take a screenshot for visual regression new Post button 1
        Then I enter a title 1
        Then I take a screenshot for visual regression title 1
        Then I enter a body 1
        Then I take a screenshot for visual regression body 1
        Then I click on Publish button 1
        Then I take a screenshot for visual regression Publish button 1
        Then I click on Continue, final review 1
        Then I take a screenshot for visual regression final review 1
        Then I click on Publish post 1
        Then I take a screenshot for visual regression Publish post 1
        Then I click on back to dashboard 1
        Then I take a screenshot for visual regression back to dashboard 1
        Then I click on back to posts 1
        Then I take a screenshot for visual regression back to posts 1
        Then Find post 1

    Scenario Outline: Update Post
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Post button 3
        Then Take screenshot for visual regression Post button 3
        Then Find post 3
        Then Take screenshot for visual regression Post 3
        Then I enter a title 3
        Then Take screenshot for visual regression title 3
        Then I enter a body 3
        Then Take screenshot for visual regression body 3
        Then I click on update button 3
        Then Take screenshot for visual regression update button 3
        Then I click on back button 3
        Then Take screenshot for visual regression back button 3
        Then Find updated post 3


    Scenario Outline: Delete Post
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Post button 2
        Then Take screenshot for visual regression Post button 2
        Then Find post 2
        Then Take screenshot for visual regression Post 2
        Then I click on Post config button 2
        Then Take screenshot for visual regression Post config button 2
        Then I click on delete Post button 2
        Then Take screenshot for visual regression delete Post button 2
        Then I click on confirm delete Post button 2
        Then Take screenshot for visual regression confirm delete Post button 2
        Then Find deleted post 2

    Scenario Outline: Create Tag
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Tags button 4
        Then Take screenshot for visual regression Tags button 4
        Then I click on new Tag button 4
        Then Take screenshot for visual regression new Tag button 4
        Then I enter a tag name input 4
        Then Take screenshot for visual regression tag name input 4
        Then I enter a tag color input 4
        Then Take screenshot for visual regression tag color input 4
        Then I enter a slug input 4
        Then Take screenshot for visual regression slug input 4
        Then I enter a description input 4
        Then Take screenshot for visual regression description input 4
        Then I click on Save button 4
        Then Take screenshot for visual regression Save button 4
        Then I click on back to tags 4
        Then Take screenshot for visual regression back to tags 4
        Then I find the tag created 4

    Scenario Outline: Update Tag
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on tags button 5
        Then Take screenshot for visual regression tags button 5
        Then I click on a random tag 5
        Then Take screenshot for visual regression random tag 5
        Then I clear and enter a tag name input 5
        Then Take screenshot for visual regression tag name input 5
        Then I clear and enter a tag color input 5
        Then Take screenshot for visual regression tag color input 5
        Then I clear and enter a slug input 5
        Then Take screenshot for visual regression slug input 5
        Then I clear and enter a description input 5
        Then Take screenshot for visual regression description input 5
        Then I click on Save button 5
        Then Take screenshot for visual regression Save button 5
        Then I click on back to tags 5
        Then Take screenshot for visual regression back to tags 5
        Then I find the tag created 5

    Scenario Outline: Delete Tag
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on tags button 6
        Then Take screenshot for visual regression tags button 6
        Then I click on a random tag 6
        Then Take screenshot for visual regression random tag 6
        Then I click on Delete button 6
        Then Take screenshot for visual regression Delete button 6
        Then I click the confirm delete button tag 6
        Then Take screenshot for visual regression confirm delete button tag 6
        Then I find the tag deleted 6

    Scenario Outline: Create Page
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Pages button 7
        Then Take screenshot for visual regression Pages button 7
        Then I click on new Page button 7
        Then Take screenshot for visual regression new Page button 7
        Then I enter a title 7
        Then Take screenshot for visual regression title 7
        Then I enter a body 7
        Then Take screenshot for visual regression body 7
        Then I click on Publish button 7
        Then Take screenshot for visual regression Publish button 7
        Then I click on Continue, final review 7
        Then Take screenshot for visual regression Continue, final review 7
        Then I click on Publish page 7
        Then Take screenshot for visual regression Publish page 7
        Then I click on back to dashboard 7
        Then Take screenshot for visual regression back to dashboard 7
        Then I click on Pages button 7
        Then Find page 7


    Scenario Outline: Update Page
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on page button 8
        Then Take screenshot for visual regression page button 8
        Then Find page 8
        Then Take screenshot for visual regression page 8
        Then I click on page config button 8
        Then Take screenshot for visual regression page config button 8
        Then I click on delete page button 8
        Then Take screenshot for visual regression delete page button 8
        Then I click on confirm delete page button 8
        Then Take screenshot for visual regression confirm delete page button 8
        Then Find deleted page 8


    Scenario Outline: Delete Page
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on page button 9
        Then Take screenshot for visual regression page button 9
        Then Find page 9
        Then Take screenshot for visual regression found page 9
        Then I enter a title 9
        Then Take screenshot for visual regression title input 9
        Then I enter a body 9
        Then Take screenshot for visual regression body input 9
        Then I click on update button 9
        Then Take screenshot for visual regression update button 9
        Then I click on back button 9
        Then Take screenshot for visual regression back button 9
        Then Find updated page 9

    Scenario Outline: Change Base Color
        When Login
        Then I take a screenshot for visual regression Login
        Then I click on Dashboard button 10
        Then Take screenshot for visual regression Dashboard button 10
        Then I click on customize your design button 10
        Then Take screenshot for visual regression customize your design button 10
        Then I clear and enter an accent color input 10
        Then Take screenshot for visual regression accent color input 10
        Then I click on Save button 10
        Then Take screenshot for visual regression Save button 10

    
