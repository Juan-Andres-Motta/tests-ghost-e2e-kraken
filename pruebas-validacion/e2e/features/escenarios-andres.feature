Feature: Tests playwright

    Scenario Outline: Crear un tag
        When Login
        Then I click on Tags button 4
        Then I click on new Tag button 4
        Then I enter '<name>' as tag name input using '<metodo>' method 4
        Then I enter '<color>' as tag color input using '<metodo>' method 4
        Then I enter '<slug>' as slug input using '<metodo>' method 4
        Then I enter '<description>' as description input using '<metodo>' method 4
        Then I click on Save button 4
        Then La creacion del tag fue '<resultado>'

    Examples:
        | metodo   | name       | color   | slug       | description        | resultado |
        | a-priori |            |         |            |                    | fallida   |
        | a-priori |            |         |            | fqwfwdfqwd         | fallida   |
        | a-priori |            |         | asdasd     | fqwfwdfqwd         | fallida   |
        | a-priori |            | ffffff  | asdasd     | fqwfwdfqwd         | fallida   |
        | a-priori | soyuntest1 |         |            |                    | exitosa   |
        | a-priori | soyuntest2 | 00ff00  |            |                    | exitosa   |
        | a-priori | soyuntest3 | xx33zz  |            |                    | fallida   |
        | a-priori | soyuntest4 | ttt666  | soyunslug4 |                    | fallida   |
        | a-priori | soyuntest5 | 00dd1c  | soyunslug5 |                    | exitosa   |
        | a-priori | soyuntest6 | dd00ff  | soyunslug6 | soyunadescripcion3 | exitosa   |
        | pseudo1  |            |         |            |                    | exitosa   |
        | pseudo2  |            |         |            |                    | fallida   |
        | pseudo3  |            |         |            |                    | fallida   |
        | pseudo4  |            |         |            |                    | fallida   |
        | random   |            |         |            |                    | fallida   |
        

    Scenario Outline: Editar un tag
        When Login
        Then I click on Tags button 4
        Then I click on a random tag 5
        Then I enter '<name>' as tag name input using '<metodo>' method 4
        Then I enter '<color>' as tag color input using '<metodo>' method 4
        Then I enter '<slug>' as slug input using '<metodo>' method 4
        Then I enter '<description>' as description input using '<metodo>' method 4
        Then I click on Save button 4
        Then La creacion del tag fue '<resultado>'

    Examples:
        | metodo   | name       | color   | slug       | description        | resultado |
        | a-priori |            |         |            |                    | fallida   |
        | a-priori |            |         |            | fqwfwdfqwd         | fallida   |
        | a-priori |            |         | asdasd     | fqwfwdfqwd         | fallida   |
        | a-priori |            | ffffff  | asdasd     | fqwfwdfqwd         | fallida   |
        | a-priori | soyuntest1 |         |            |                    | exitosa   |
        | a-priori | soyuntest2 | 00ff00  |            |                    | exitosa   |
        | a-priori | soyuntest3 | xx33zz  |            |                    | fallida   |
        | a-priori | soyuntest4 | ttt666  | soyunslug4 |                    | fallida   |
        | a-priori | soyuntest5 | 00dd1c  | soyunslug5 |                    | exitosa   |
        | a-priori | soyuntest6 | dd00ff  | soyunslug6 | soyunadescripcion3 | exitosa   |
        | pseudo1  |            |         |            |                    | exitosa   |
        | pseudo2  |            |         |            |                    | fallida   |
        | pseudo3  |            |         |            |                    | fallida   |
        | pseudo4  |            |         |            |                    | fallida   |
        | random   |            |         |            |                    | fallida   |
