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

  var listA: number[] = lines[1]
    .split(" ")
    .map(function(value: string): number {
      return Number(value);
    });
  var sortedList: number[] = new Array();
  listA.forEach(x => {
    sortedList.push(x);
  });

  sortedList.sort((n1, n2) => n1 - n2);
  //.filter((x, i, self) => {
  //  self.indexOf(x) === i;
  //});
  var minDiff: number = 1000000000;
  var minDiffNum: number = 0;
  var tmpDiff: number = 0;
  for (var i = 0; i < sortedList.length - 1; i++) {
    tmpDiff = Math.abs(sortedList[sortedList.length - 1] / 2 - sortedList[i]);
    if (tmpDiff < minDiff) {
      minDiff = tmpDiff;
      minDiffNum = sortedList[i];
    }
  }
  console.log(sortedList[sortedList.length - 1], minDiffNum);
});
