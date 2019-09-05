'use strict';

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((accm, curr) => {
  if (accm[curr]) {
    accm[curr] += 1;
  } else {
    accm[curr] = 1;
  }
  return accm;
}, {});

console.log('counts: %o', counts);