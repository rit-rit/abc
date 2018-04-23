var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  var blueCardsNum: number = Number(lines[0]);

  var earnMap: { [key: string]: number } = {};

  for (var i = 1; i < blueCardsNum + 1; i++) {
    if (earnMap[lines[i]]) {
      earnMap[lines[i]] = earnMap[lines[i]] + 1;
    } else {
      earnMap[lines[i]] = 1;
    }
  }

  for (var i = blueCardsNum + 2; i < lines.length; i++) {
    if (earnMap[lines[i]]) {
      earnMap[lines[i]] = earnMap[lines[i]] - 1;
    } else {
      earnMap[lines[i]] = -1;
    }
  }

  var maxKey: string = Object.keys(earnMap).reduce(
    (prev: string, current: string): string => {
      return earnMap[current] > earnMap[prev] ? current : prev;
    }
  );
  console.log(earnMap[maxKey] < 0 ? 0 : earnMap[maxKey]);
});
