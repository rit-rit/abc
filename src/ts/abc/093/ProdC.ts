var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // A B C
  var numbers: number[] = lines[0].split(" ").map(x => {
    return Number(x);
  });
  var maxNum: number = Math.max(...numbers);
  var sumOfSub: number =
    maxNum * 3 - numbers.reduce((prev, current) => prev + current);
  if (sumOfSub % 2 == 0) {
    console.log(sumOfSub / 2);
  } else {
    console.log((sumOfSub + 1) / 2 + 1);
  }
});
