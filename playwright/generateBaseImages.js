const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "e2e", "screenshots2");
const targetDir = path.join(__dirname, "e2e", "screenshots");

// Función para formatear el nombre de la imagen de destino
function formatFileName(fileName) {
  const baseName = fileName.replace(/\.[^/.]+$/, ""); // Elimina la extensión
  return `backstop_default_${baseName}png_0_document_0_desktop.png`; // Añade la nueva estructura
}

// Asegura que el directorio de destino existe
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Lee el directorio de origen
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  files.forEach((file) => {
    // Ignora archivos que no sean imágenes .png
    if (path.extname(file).toLowerCase() === ".png") {
      const formattedFileName = formatFileName(file);
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(targetDir, formattedFileName);

      // Copia y renombra el archivo
      fs.copyFile(srcPath, destPath, (err) => {
        if (err) {
          console.error(`Error copying ${file}:`, err);
        } else {
          console.log(`${file} was copied and renamed to ${formattedFileName}`);
        }
      });
    }
  });
});
