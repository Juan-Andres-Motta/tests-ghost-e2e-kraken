const pruebasValidacion = "pruebas-validacion/e2e/";

const validacion = [
  `${pruebasValidacion}/features/*.feature`,
  "--require-module ts-node/register",
  `--require ${pruebasValidacion}/stepDefinitions/*.ts`,
  `--require ${pruebasValidacion}/world/PlaywrightWorld.ts`,
  "--fail-fast",
  "--format progress-bar",
].join(" ");

module.exports = {
  default: validacion,
};
