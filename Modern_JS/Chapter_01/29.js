'use strict';

function countBiggerThanTenByForEach(numbers) {
  let count = 0;
  numbers.forEach(n => {
    if (n > 10) count++;
  });
  return count
}

function countBiggerThanTenByFilter(numbers) {
  return numbers.filter(n => n > 10).length;
}

function countBiggerThanTenByReduce(numbers) {
  let count = 0;
  return numbers.reduce((accm, curr) => {
    if (curr > 10) {
      return accm + 1;
    } else {
      return accm;
    }
  }, 0)
}

var count = countBiggerThanTenByForEach([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
var count = countBiggerThanTenByFilter([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
var count = countBiggerThanTenByReduce([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

