const spiral = [
  [1, 2, 9, 10, 25],
  [4, 3, 8, 11, 24],
  [5, 6, 7, 12, 23],
  [16, 15, 14, 13, 22],
  [17, 18, 19, 20, 21],
];
const input = [
  [2, 3],
  [4, 2],
  [6, 1],
];
let output = [];

function findStuff(input) {
  for (i = 0; i < input.length; i++) {
    let goodInput = input[i].reverse();
    //console.log(goodInput);

    let col = goodInput[1] - 1;
    let row = goodInput[0] - 1;

    if (col >= 5 || row >= 5) {
      output.push("invalid pos");
    } else if (col < 0 || row < 0) {
      output.push("invalid pos");
    } else {
      output.push(spiral[col][row]);
    }
  }
  return output;
}

findStuff(input);

console.log(output);
