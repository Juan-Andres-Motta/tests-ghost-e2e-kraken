Feature: Tests playwright

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
