var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // D X
  var numbers: number[] = lines[1].split(" ").map(x => {
    return Number(x);
  });
  var numD: number = Number(numbers[0]);
  var numX: number = Number(numbers[1]);

  var result: number = numX;

  for (var i: number = 2; i < lines.length; i++) {
    result = result + Math.ceil(numD / Number(lines[i]));
  }

  console.log(result);
});
