Feature: Tests playwright

    Scenario Outline: Create Post
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on Post button 1 v5
        Then I take a screenshot for visual regression Post button 1 v5
        Then I click on new Post button 1 v5
        Then I take a screenshot for visual regression new Post button 1 v5
        Then I enter a title 1 v5
        Then I take a screenshot for visual regression title 1 v5
        Then I enter a body 1 v5
        Then I take a screenshot for visual regression body 1 v5
        Then I click on Publish button 1 v5
        Then I take a screenshot for visual regression Publish button 1 v5
        Then I click on back to dashboard 1 v5
        Then I take a screenshot for visual regression back to posts 1 v5

    Scenario Outline: Delete Post
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on Post button 2 v5
        Then Take screenshot for visual regression Post button 2 v5
        Then Find post 2 v5
        Then Take screenshot for visual regression Post 2 v5
        Then I click on Post config button 2 v5
        Then Take screenshot for visual regression Post config button 2 v5
        Then I click on delete Post button 2 v5
        Then Take screenshot for visual regression delete Post button 2 v5
        Then I click on confirm delete Post button 2 v5
        Then Take screenshot for visual regression confirm delete Post button 2 v5

    Scenario Outline: Update Post
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on Post button 3 v5
        Then Take screenshot for visual regression Post button 3 v5
        Then Find post 3 v5
        Then Take screenshot for visual regression Post 3 v5
        Then I enter a title 3 v5
        Then Take screenshot for visual regression title 3 v5
        Then I enter a body 3 v5
        Then Take screenshot for visual regression body 3 v5
        Then I click on update button 3 v5
        Then Take screenshot for visual regression update button 3 v5
        Then I click on back button 3 v5
        Then Take screenshot for visual regression back button 3 v5

    Scenario Outline: Create Tag
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on Tags button 4 v5
        Then Take screenshot for visual regression Tags button 4 v5
        Then I click on new Tag button 4 v5
        Then Take screenshot for visual regression new Tag button 4 v5
        Then I enter a tag name input 4 v5
        Then Take screenshot for visual regression tag name input 4 v5
        Then I enter a tag color input 4 v5
        Then Take screenshot for visual regression tag color input 4 v5
        Then I enter a slug input 4 v5
        Then Take screenshot for visual regression slug input 4 v5
        Then I enter a description input 4 v5
        Then Take screenshot for visual regression description input 4 v5
        Then I click on Save button 4 v5
        Then Take screenshot for visual regression Save button 4 v5
        Then I click on back to tags 4 v5
        Then Take screenshot for visual regression back to tags 4 v5

    Scenario Outline: Update Tag
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on tags button 5 v5
        Then Take screenshot for visual regression tags button 5 v5
        Then I click on a random tag 5 v5
        Then Take screenshot for visual regression random tag 5 v5
        Then I clear and enter a tag name input 5 v5
        Then Take screenshot for visual regression tag name input 5 v5
        Then I clear and enter a tag color input 5 v5
        Then Take screenshot for visual regression tag color input 5 v5
        Then I clear and enter a slug input 5 v5
        Then Take screenshot for visual regression slug input 5 v5
        Then I clear and enter a description input 5 v5
        Then Take screenshot for visual regression description input 5 v5
        Then I click on Save button 5 v5
        Then Take screenshot for visual regression Save button 5 v5
        Then I click on back to tags 5 v5
        Then Take screenshot for visual regression back to tags 5 v5

    Scenario Outline: Delete Tag
        When Login v5
        Then I take a screenshot for visual regression Login v5
        Then I click on tags button 6 v5
        Then Take screenshot for visual regression tags button 6 v5
        Then I click on a random tag 6 v5
        Then Take screenshot for visual regression random tag 6 v5
        Then I click on Delete button 6 v5
        Then Take screenshot for visual regression Delete button 6 v5
        Then I click the confirm delete button tag 6 v5
        Then Take screenshot for visual regression confirm delete button tag 6 v5