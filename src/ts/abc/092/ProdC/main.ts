var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  // A_1,A_2,...
  var numbers: number[] = lines[1].split(" ").map(x => {
    return Number(x);
  });

  var tmpArray: number[] = new Array();
  numbers.forEach((x: number) => {
    tmpArray.push(x);
  });

  var baseSum: number = Math.abs(numbers[0]);
  for (var i: number = 1; i < numbers.length; i++) {
    baseSum = baseSum + Math.abs(numbers[i] - numbers[i - 1]);
  }
  baseSum = baseSum + Math.abs(numbers[numbers.length - 1]);

  for (var i: number = 0; i < numbers.length; i++) {
    if (i == 0) {
      console.log(
        baseSum -
          Math.abs(numbers[0]) -
          Math.abs(numbers[1] - numbers[0]) +
          Math.abs(numbers[1])
      );
    } else if (i == numbers.length - 1) {
      console.log(
        baseSum -
          Math.abs(numbers[numbers.length - 1]) -
          Math.abs(numbers[numbers.length - 1] - numbers[numbers.length - 2]) +
          Math.abs(numbers[numbers.length - 2])
      );
    } else {
      console.log(
        baseSum -
          Math.abs(numbers[i + 1] - numbers[i]) -
          Math.abs(numbers[i] - numbers[i - 1]) +
          Math.abs(numbers[i + 1] - numbers[i - 1])
      );
    }
  }
});
