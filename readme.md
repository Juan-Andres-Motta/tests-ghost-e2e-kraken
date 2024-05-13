# Proyecto E2E

# Integrantes

- Andres Duque - a.duquec@uniandes.edu.co
- Juan Motta - ja.lopezm123@uniandes.edu.co

## Kraken

Este es un proyecto de automatización end-to-end (E2E) desarrollado utilizando Kraken, una plataforma de pruebas para aplicaciones web. El propósito de este proyecto es proporcionar un conjunto de pruebas automatizadas para garantizar la calidad y la integridad de Ghost.

### Requisitos

- Node 20.12.2

### Instalación

1. Abrir la carpeta de kraken

```
cd kraken
```

2. Instalar dependencias de node

```bash
npm install
```

3. Copiar el test que se desea ejecutar de la carpeta features/cases en el archivo features/BaseFeature.feature

4. Ejecutar pruebas

```
npx kraken-node run
```

## Playwright

Este es un proyecto de automatización end-to-end (E2E) desarrollado utilizando Playwright, una plataforma de pruebas para aplicaciones web. El propósito de este proyecto es proporcionar un conjunto de pruebas automatizadas para garantizar la calidad y la integridad de Ghost.

### Requisitos

- Node 20.12.2

### Instalación

1. Abrir la carpeta de playwright

```
cd playwright
```

2. Instalar dependencias de node

```bash
npm install
```

3. Ejecutar pruebas

```
npm run cucumber
```

Para usuarios de Windows usar:

```
$env:HEAD = "1"
npm run cucumber
```

# Regresion Backstop y Playwright

## Playwright

Este es un proyecto de automatización end-to-end (E2E) desarrollado utilizando Playwright, una plataforma de pruebas para aplicaciones web. El propósito de este proyecto es proporcionar un conjunto de pruebas automatizadas para garantizar la calidad y la integridad de Ghost.

### Requisitos

- Node 20.12.2

### Instalación

1. Abrir la carpeta de playwright

```
cd playwright
```

2. Instalar dependencias de node

```bash
npm install
```
3. Instalar backstop como dependencia global

```
npm install -g backstopjs
```

4. Copiar contenido del archivo old_step_v5.8x.txt en /stepDefinitions al archivo escenarios.step.ts en /stepDefinitions

5. Copiar contenido del archivo old_escenario_v5.8x.txt en /features al archivo escenarios.feature en /features

6. Ejecutar pruebas

```
npm run cucumber
```

Para usuarios de Windows usar:

```
$env:HEAD = "1"
npm run cucumber
```

7. Ejecutar comando en carpeta playwright
```
node generateBaseImages.js
``` 

8. Copiar contenido del archivo old_step_v3.4x.txt en /stepDefinitions al archivo escenarios.step.ts en /stepDefinitions

9. Copiar contenido del archivo old_escenario_v3.4x.txt en /features al archivo escenarios.feature en /features

10. Ejecutar pruebas

```
npm run cucumber
```

Para usuarios de Windows usar:

```
$env:HEAD = "1"
npm run cucumber
```

11. Ejecutar el comando en carpeta playwright
```
node generateConfig.js
```

12. Ejecutar el comando backstop test