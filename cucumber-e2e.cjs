const pruebasE2E = "pruebas-e2e/e2e/";

const e2e = [
  `${pruebasE2E}/features/*.feature`,
  "--require-module ts-node/register",
  `--require ${pruebasE2E}/stepDefinitions/*.ts`,
  `--require ${pruebasE2E}/world/PlaywrightWorld.ts`,
  "--fail-fast",
  "--format progress-bar",
].join(" ");

module.exports = {
  default: e2e,
};
