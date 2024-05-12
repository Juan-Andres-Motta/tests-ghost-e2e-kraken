const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require('fs');

const { options } = config;

async function executeTest() {
    const resultInfo = {};
    const datetime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    for (const b of config.escenarios) {
        // if (!b in ['chromium', "login"]) {
        //     continue;
        // }

        const beforeImagePath = `./e2e/screenshots/backstop_default_${b.replace('.png', '')}png_0_document_0_desktop.png`;
        const afterImagePath = `./e2e/screenshots2/${b}`;

        if (!fs.existsSync(beforeImagePath) || !fs.existsSync(afterImagePath)) {
            console.error(`${beforeImagePath} || ${afterImagePath}`);
            console.error(`Images not found for ${b}`);
            continue;
        }

        const data = await compareImages(
            fs.readFileSync(beforeImagePath),
            fs.readFileSync(afterImagePath),
            options
        );

        resultInfo[b] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        };

        fs.writeFileSync(`./results/compare-${b}.png`, data.getBuffer());
    }

    fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/index.css`);

    console.log('------------------------------------------------------------------------------------');
    console.log("Execution finished. Check the report under the results folder");
    return resultInfo;
}

(async () => console.log(await executeTest()))();

function browser(b, info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../e2e/screenshots/backstop_default_${b.replace('.png', '')}png_0_document_0_desktop.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../e2e/screenshots2/${b}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo) {
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.escenarios.map(b => browser(b, resInfo[b])).join('')}
            </div>
        </body>
    </html>`;
}