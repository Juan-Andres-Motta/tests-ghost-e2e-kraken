# Proyecto E2E

# Integrantes

- Andres Duque
- Juan Motta

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
