const fs = require("fs");

const folderName = "dist";

if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
