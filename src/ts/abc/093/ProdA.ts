var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  var str: string = lines[0];

  if (
    -1 != str.indexOf("a") &&
    -1 != str.indexOf("b") &&
    -1 != str.indexOf("c")
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
