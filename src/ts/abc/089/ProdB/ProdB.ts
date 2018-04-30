var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  var inputs: String[] = lines[1].split(" ");
  switch (new Set(inputs).size) {
    case 3:
      console.log("Three");
      break;
    case 4:
      console.log("Four");
      break;
  }
});
