// B - Toll Gates
var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});
reader.on("close", function() {
  var valueN: number = Number(lines[0].split(" ")[0]);
  var valueM: number = Number(lines[0].split(" ")[1]);
  var valueX: number = Number(lines[0].split(" ")[2]);
  var listA: number[] = lines[1]
    .split(" ")
    .map(function(value: string): number {
      return Number(value);
    });

  var counterA: number = 0;
  var costList: number[] = new Array<number>(valueN + 1).fill(0);
  for (var idx in listA) {
    costList[listA[idx]] = 1;
  }

  var firstSum = costList
    .slice(0, valueX)
    .reduce(function(accumulator, currentValue): number {
      return accumulator + currentValue;
    }, 0);
  var secondSum = costList
    .slice(valueX, valueN + 1)
    .reduce(function(accumulator, currentValue): number {
      return accumulator + currentValue;
    }, 0);
  if (firstSum > secondSum) {
    console.log(secondSum);
  } else {
    console.log(firstSum);
  }
});
