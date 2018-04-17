var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // A B K
  var numbers: number[] = lines[0].split(" ").map(x => {
    return Number(x);
  });
  var numA: number = numbers[0];
  var numB: number = numbers[1];
  var numK: number = numbers[2];
  var maxNumInFirst: number = 0;
  for (var i: number = numA; i < numA + numK && i <= numB; i++) {
    console.log(i);
    maxNumInFirst = i;
  }
  for (var i: number = numB - numK + 1; i < numB + 1; i++) {
    if (maxNumInFirst < i) {
      console.log(i);
    }
  }
});
