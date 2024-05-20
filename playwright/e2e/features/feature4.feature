Feature: Tests playwright

    Scenario Outline: Creacion de un miebro 4
        Given un usuario que desea iniciar sesion 4
        When ingresa 'admin@example.com' en el campo email 4
        And ingresa 'admin12345' en el campo password 4
        And el inicio de sesion es 'exitoso' 4
        And presiona en boton members en la barra lateral 4
        And presiona en boton crear miembro 4
        And ingresa el nombre '<nombre>' del miembro 4
        And ingresa el email '<email>' del miembro 4
        And ingresa el label '<label>' del miembro 4
        And ingresa la nota '<nota>' del miembro 4
        Then la creacion del miembro es '<status>' 4

        Examples:
        | nombre | email | label | nota | status  |
        | Jhon Doe | jhon@example.com | Ingeniero | Ingeniero tiktoker | fallido |
        |          |                  |           |                    | fallido |
        | Jhon Doe | jhon@example.com |           |                    | fallido |
        | Jhon Doe |                  |           |                    | fallido |
        |          | jhon@example.com |           |                    | fallido |
        |          |                  | Ingeniero |                    | fallido |
        |          |                  |           | Ingeniero tiktoker | fallido |
        | Jhon Doe | pseudo           | Ingeniero | Ingeniero tiktoker | exitoso |
        | pseudo   | pseudo           | pseudo    | pseudo             | fallido |
        | pseudo   | pseudo           |           |                    | fallido |
        | random   | random           |           |                    | fallido |
        | random   | random           | random    | random             | fallido |
        |          |                  | random    |                    | fallido |
        |          |                  |           | random             | fallido |
        | Jhon Doe | pseudo | Ingeniero | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 | fallido |

        






        






