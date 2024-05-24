Feature: Tests playwright

    Scenario Outline: Login
        Given un usuario que desea iniciar sesion 1
        When ingresa '<email>' en el campo email 1
        And ingresa '<password>' en el campo password 1
        Then el inicio de sesion es '<status>' 1

    Examples:
        | email | password | status |
        | admin@example.com      | admin12345 | exitoso |
        | incorrecto@example.com | admin12345 | fallido |
        |                        |            | fallido |
        | admin@example.com      |            | fallido |
        |                        | admin12345 | fallido |
        | pseudo                 | pseudo     | fallido |
        | random                 | random     | fallido |

    Scenario Outline: Creacion de post 2
        Given un usuario que desea iniciar sesion 2
        When ingresa 'admin@example.com' en el campo email 2
        And ingresa 'admin12345' en el campo password 2
        And el inicio de sesion es 'exitoso' 2
        And presiona en boton post en la barra lateral 2
        And presiona en boton crear post 2
        And ingresa el titulo '<titulo>' de la publicacion 2
        And ingresa el cuerpo '<contenido>' de la publicacion 2
        Then la creacion del post es '<status>' 2

    Examples:
        | titulo                     | contenido                                        | status  |
        | Pruebas automatizadas      | Las pruebas automatizadas son muy importantes... | exitoso |
        |                            | Las pruebas automatizadas son muy importantes... | exitoso |
        | Pruebas automatizadas      |                                                  | exitoso |
        | pseudo                     | pseudo                                           | exitoso |
        | random                     | random                                           | exitoso |

    Scenario Outline: Creacion de una pagina 3
        Given un usuario que desea iniciar sesion 3
        When ingresa 'admin@example.com' en el campo email 3
        And ingresa 'admin12345' en el campo password 3
        And el inicio de sesion es 'exitoso' 3
        And presiona en boton pages en la barra lateral 3
        And presiona en boton crear pagina 3
        And ingresa el titulo '<titulo>' de la publicacion 3
        And ingresa el cuerpo '<contenido>' de la publicacion 3
        Then la creacion de la pagina es '<status>' 3

    Examples:
        | titulo                     | contenido                                        | status  |
        | Pruebas automatizadas      | Las pruebas automatizadas son muy importantes... | exitoso |
        |                            | Las pruebas automatizadas son muy importantes... | exitoso |
        | Pruebas automatizadas      |                                                  | exitoso |
        | pseudo                     | pseudo                                           | exitoso |
        | random                     | random                                           | exitoso |

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
        | Jhon Doe 1 | pseudo | Ingeniero | Ingeniero tiktoker | exitoso |
        |          |                  |           |                    | fallido |
        | Jhon Doe 2 | jhon2@example.com |           |                    | fallido |
        | Jhon Doe 3 |                  |           |                    | fallido |
        |          | jhon3@example.com |           |                    | fallido |
        |          |                  | Ingeniero |                    | fallido |
        |          |                  |           | Ingeniero tiktoker | fallido |
        | pseudo | pseudo           | Ingeniero | Ingeniero tiktoker | exitoso |
        | pseudo   | pseudo           | pseudo    | pseudo             | exitoso |
        | pseudo   | pseudo           |           |                    | exitoso |
        | random   | random           |           |                    | fallido |
        | random   | random           | random    | random             | fallido |
        |          |                  | random    |                    | fallido |
        |          |                  |           | random             | fallido |
        | Jhon Doe 5 | pseudo | Ingeniero | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 | fallido |