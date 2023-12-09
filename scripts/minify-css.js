const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

function minifyFile(srcPath, destPath) {
  const code = fs.readFileSync(srcPath, "utf8");
  const result = new CleanCSS().minify(code);
  fs.writeFileSync(destPath, result.styles, "utf8");
}

function minifyFolder(srcFolder, destFolder) {
  const files = fs.readdirSync(srcFolder);

  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
  }

  files.forEach(file => {
    const srcPath = path.join(srcFolder, file);
    const destPath = path.join(destFolder, file);

    if (fs.statSync(srcPath).isDirectory()) {
      minifyFolder(srcPath, path.join(destFolder, file));
    } else if (file.endsWith(".css")) {
      minifyFile(srcPath, destPath.replace(/\.css$/, ".css"));
    }
  });
}

minifyFolder("src/css", "dist/css");
