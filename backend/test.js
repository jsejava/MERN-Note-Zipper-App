const path = require("path");
__dirname = path.resolve();
console.log(__dirname);
console.log(path.join(__dirname, "/frontend/build"));
console.log(path.resolve("./frontend", "build", "index.html"));
console.log(path.resolve(__dirname, "frontend", "build", "index.html"));
