let array = [4, 2, 1, 7, 3];

let res = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] < array[i - 1]) {
    res += array[i - 1] - array[i];
  }
}

console.log(res);
