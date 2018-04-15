// A - Cats and Dogs
var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});
reader.on("close", function() {
  var value_a: number = Number(lines[0].split(" ")[0]);
  var value_b: number = Number(lines[0].split(" ")[1]);
  var value_x: number = Number(lines[0].split(" ")[2]);
  if (value_a > value_x) {
    console.log("NO");
  } else if (value_b >= value_x - value_a) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
