var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // N X
  var numbers: number[] = lines[0].split(" ").map(x => {
    return Number(x);
  });
  var numD: number = Number(numbers[0]);
  var numX: number = Number(numbers[1]);

  var total: number = numX;
  var min: number = numX;

  for (var i: number = 1; i < lines.length; i++) {
    total = total - Number(lines[i]);
    if (Number(lines[i]) < min) {
      min = Number(lines[i]);
    }
  }

  console.log(lines.length - 1 + Math.floor(total / min));
});
