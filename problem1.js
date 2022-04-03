let array = [5, 3, 2, 4, 1];
let limit = 7;
let diff;
let result;

array.sort();

for (var i = 0; i < limit; i++) {
  if (i >= 1) {
    diff = array[i] - array[i - 1];
    diff = limit - array[i];
    if (diff == 2) {
      result = array[i] + 1;
    }
  }
}

console.log(result);
