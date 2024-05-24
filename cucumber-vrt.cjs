const pruebasVRT = "pruebas-vrt/e2e/";

const validacion = [
  `${pruebasVRT}/features/*.feature`,
  "--require-module ts-node/register",
  `--require ${pruebasVRT}/stepDefinitions/*.ts`,
  `--require ${pruebasVRT}/world/PlaywrightWorld.ts`,
  "--fail-fast",
  "--format progress-bar",
].join(" ");

module.exports = {
  default: validacion,
};
