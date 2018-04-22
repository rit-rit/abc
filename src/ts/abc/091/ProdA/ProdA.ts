var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // A,B,C
  var numbers: number[] = lines[0].split(" ").map(x => {
    return Number(x);
  });
  if (numbers[0] + numbers[1] >= numbers[2]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
