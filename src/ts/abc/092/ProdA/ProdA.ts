var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // A B
  var numbers: number[] = lines[0].split(" ").map(x => {
    return Number(x);
  });
  var numA: number = Number(lines[0]);
  var numB: number = Number(lines[1]);
  var numC: number = Number(lines[2]);
  var numD: number = Number(lines[3]);
  var result: number = 0;
  if (numA < numB) {
    result = numA;
  } else {
    result = numB;
  }
  if (numC < numD) {
    result = result + numC;
  } else {
    result = result + numD;
  }

  console.log(result);
});
