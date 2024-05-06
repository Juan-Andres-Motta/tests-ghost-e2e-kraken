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