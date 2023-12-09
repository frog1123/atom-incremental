const fs = require("fs");
const path = require("path");
const htmlMinifier = require("html-minifier");

function minifyFile(srcPath, destPath) {
  const code = fs.readFileSync(srcPath, "utf8");
  const result = htmlMinifier.minify(code, {
    // Specify HTML minification options if needed
    // For example, removeComments: true, collapseWhitespace: true, etc.
  });
  fs.writeFileSync(destPath, result, "utf8");
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
    } else if (file.endsWith(".html")) {
      minifyFile(srcPath, destPath.replace(/\.html$/, ".html"));
    }
  });
}

minifyFolder("src", "dist");
