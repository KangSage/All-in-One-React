function subtract(x, y) {
  return x - y;
}

const result = subtract(1, 2);

const numbers = [1, 2];
const result2 = subtract(numbers[0], numbers[1]);
const result3 = subtract(...numbers);
console.log(result);
console.log(result2);
console.log(result3);

function sum(...rest) {
  return rest.reduce((accm, curr) => accm + curr, 0);
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sum(...nums));
