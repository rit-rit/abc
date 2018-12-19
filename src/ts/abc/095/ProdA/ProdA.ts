var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});
reader.on("close", function() {
  var s = lines[0];
  console.log(700 + (s.split("o").length - 1) * 100);
});
