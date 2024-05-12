const fs = require("fs");
const path = require("path");

const screenshotsDir = "e2e/screenshots";
const screenshots2Dir = "e2e/screenshots2";

const backstopConfig = {
  id: "backstop_default",
  viewports: [{ label: "desktop", width: 1280, height: 720 }],
  scenarios: [],
  paths: {
    bitmaps_reference: screenshotsDir,
    bitmaps_test: screenshots2Dir,
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: { args: ["--no-sandbox", "--allow-file-access-from-files"] },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};

// Función para formatear el nombre del archivo de referencia según el esquema dado
function formatReferenceName(fileName) {
  const baseName = fileName.replace(/\.[^/.]+$/, "").replace(/\./g, '');
  return `backstop_default_${baseName}png_0_document_0_desktop.png`;
}

fs.readdir(screenshots2Dir, (err, testFiles) => {
  if (err) throw err;

  // Crea un mapa de nombres de archivo de referencia esperados
  const expectedReferenceFiles = testFiles.map(file => formatReferenceName(file));

  fs.readdir(screenshotsDir, (err, referenceFiles) => {
    if (err) throw err;

    testFiles.forEach(file => {
      const formattedReferenceName = formatReferenceName(file);

      if (referenceFiles.includes(formattedReferenceName)) {
        const referencePath = path.join(process.cwd(), screenshotsDir, formattedReferenceName);
        const testPath = path.join(process.cwd(), screenshots2Dir, file);

        console.log(`Adding scenario for: ${file}`);
        console.log(`Reference URL: ${formattedReferenceName}`);
        console.log(`Test URL: ${file}`);
        backstopConfig.scenarios.push({
          label: file,
          referenceUrl: `file://${referencePath}`,
          url: `file://${testPath}`,
          hideSelectors: [],
          removeSelectors: [],
          selectors: ["document"],
          readyEvent: null,
          delay: 500,
          misMatchThreshold: 0.1,
        });
      } else {
        console.log(`Reference file not found for: ${formattedReferenceName}`);
      }
    });

    fs.writeFile("backstop.json", JSON.stringify(backstopConfig, null, 2), err => {
      if (err) throw err;
      console.log("BackstopJS config generated successfully!");
    });
  });
});
