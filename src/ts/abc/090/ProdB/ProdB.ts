var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  var strA: string = lines[0].split(" ")[0];
  var strB: string = lines[0].split(" ")[1];
  var numA: number = Number(strA);
  var numB: number = Number(strB);
  var result = 0;
  for (var i = numA; i <= numB; i++) {
    if (
      Math.floor(i / 10000) == i % 10 &&
      Math.floor(i / 1000) % 10 == Math.floor((i % 100) / 10)
    ) {
      result++;
    }
  }
  console.log(result);
});
