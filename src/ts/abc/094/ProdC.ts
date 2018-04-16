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

  var listX: number[] = lines[1]
    .split(" ")
    .map(function(value: string): number {
      return Number(value);
    });
  var sortedList: number[] = new Array(valueN);
  listX.forEach(x => {
    sortedList.push(x);
  });
  sortedList.sort((n1, n2) => n1 - n2);

  var smallMedian: number = sortedList[valueN / 2 - 1];
  var largeMedian: number = sortedList[valueN / 2];

  for (var i: number = 0; i < valueN; i++) {
    if (listX[i] <= smallMedian) {
      console.log(largeMedian);
    } else {
      console.log(smallMedian);
    }
  }
});
