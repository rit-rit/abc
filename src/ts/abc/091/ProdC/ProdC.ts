var lines: string[] = [];
var reader: any = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on("line", function(line: string) {
  lines.push(line);
});

reader.on("close", function() {
  var numN: number = Number(lines[0]);

  var redPoints: { x: number; y: number; isMatch: boolean }[] = [];
  for (var i = 1; i < numN + 1; i++) {
    redPoints.push({
      x: Number(lines[i].split(" ")[0]),
      y: Number(lines[i].split(" ")[1]),
      isMatch: false
    });
  }

  var bluePoints: { x: number; y: number; isMatch: boolean }[] = [];
  for (var i = numN + 1; i < lines.length; i++) {
    bluePoints.push({
      x: Number(lines[i].split(" ")[0]),
      y: Number(lines[i].split(" ")[1]),
      isMatch: false
    });
  }

  // sort redPoints order by y desc
  redPoints.sort((a, b) => {
    return b["y"] < a["y"] ? -1 : 1;
  }); // sort bluePoints order by x asc
  bluePoints.sort((a, b) => {
    return b["x"] < a["x"] ? 1 : -1;
  });

  // console.log(redPoints);
  // console.log(bluePoints);
  var result: number = 0;
  for (var i = 0; i < numN; i++) {
    if (!bluePoints[i].isMatch) {
      for (var j = 0; j < numN; j++) {
        if (!redPoints[j].isMatch) {
          if (
            redPoints[j].x < bluePoints[i].x &&
            redPoints[j].y < bluePoints[i].y
          ) {
            // console.log("Pair:", redPoints[j], bluePoints[i]);
            redPoints[j].isMatch = true;
            bluePoints[i].isMatch = true;
            result++;
            break;
          }
        }
      }
    }
  }
  console.log(result);
});
