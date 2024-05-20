Feature: Tests playwright

    Scenario Outline: Login
        Given un usuario que desea iniciar sesion
        When ingresa '<email>' en el campo email
        And ingresa '<password>' en el campo password
        Then el inicio de sesion es '<status>'

        Examples:
        | email | password | status |
        | admin@example.com      | admin12345 | exitoso |
        | incorrecto@example.com | admin12345 | fallido |
        |                        |            | fallido |
        | admin@example.com      |            | fallido |
        |                        | admin12345 | fallido |
        | pseudo                 | pseudo     | fallido |
        | random                 | random     | fallido |
