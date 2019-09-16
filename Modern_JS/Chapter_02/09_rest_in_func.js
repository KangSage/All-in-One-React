function sum(a, b, c, d, e, f, g) {
  // return a + b + c + d + e + f + g;
  let result = 0;
  if (a) result += a;
  if (b) result += b;
  if (c) result += c;
  if (d) result += d;
  if (e) result += e;
  if (f) result += f;
  if (g) result += g;
  return result;
}

function sum2(...rest) {
  return rest.reduce((accm, curr) => accm + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum2(1, 2, 3, 4, 5, 6));
