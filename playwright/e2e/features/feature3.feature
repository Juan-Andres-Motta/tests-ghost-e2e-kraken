Feature: Tests playwright

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
