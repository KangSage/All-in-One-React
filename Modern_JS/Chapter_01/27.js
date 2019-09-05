'use strict';

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});

console.log(sum);

const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum2);

const avg = numbers.reduce((accm, curr, i, arr) => {
  if (i === arr.length -1 ) {
    return (accm + curr) / arr.length;
  }
  return accm + curr;
}, 0);

console.log(avg);