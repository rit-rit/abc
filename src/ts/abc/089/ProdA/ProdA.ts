var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function (line: string) {
  lines.push(line);
});
reader.on("close", function () {
  var numN = Number(lines[0]);
  if (numN % 3 == 0) {
    console.log(numN / 3);
  } else {
    console.log(Math.floor(numN / 3));
  }
});
