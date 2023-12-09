const fs = require("fs");
const path = require("path");
const UglifyJS = require("uglify-js");

function minifyFile(srcPath, destPath) {
  const code = fs.readFileSync(srcPath, "utf8");
  const result = UglifyJS.minify(code);
  fs.writeFileSync(destPath, result.code, "utf8");
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
      minifyFolder(srcPath, destPath);
    } else if (file.endsWith(".js")) {
      minifyFile(srcPath, destPath.replace(/\.js$/, ".js"));
    }
  });
}

minifyFolder("src/js", "dist/js");
