const fs = require("fs");

const readStream = fs.createReadStream("./data.json");
let str = [];
readStream.on("data", chunk => {
  str.push(chunk);
});

readStream.on("end", () => {
  console.log(JSON.parse(str.toString()));
});
