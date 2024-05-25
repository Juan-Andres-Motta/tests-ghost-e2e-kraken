# Entrega Final Pruebas Automatizadas

# Grupo 24

- Andres Duque - a.duquec@uniandes.edu.co
- Juan Motta - ja.lopezm123@uniandes.edu.co

## Instrucciones

### Requisitos

- Node 20.12.2

### Instalación

1. Instalar dependencias de node

```
npm install
```

2. Instalar playwright en caso de no estar instalado

```
npx playwright install 
```

### Ejecución de Pruebas

Si desea correr las pruebas en modo estándar vaya al archivo .env y asigne el valor de HEAD=1, en caso de querer correr las pruebas en modo headless asigne el valor de HEAD=0

1. Pruebas de reconocimiento:

```
npm run monkey
```

```
npm run smart-monkey
```

2. Pruebas E2E

```
npm run cucumber:e2e
```

3. Pruebas VRT

```
npm run cucumber:vrt
```

4. Pruebas de validación

```
npm run cucumber:validacion
```

## Nota

El servidor de ghost puede presentar relentizaciones en el servicio lo que puede afectar las pruebas ocasionalmente, si se llegan a experimentar fallos en las pruebas recomendamos volver a ejecutarlas en caso de que haya sido un problema del servidor de despliegue.
