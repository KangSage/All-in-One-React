const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const {color, ...rest} = purpleCuteSlime;
console.log(color);
console.log(rest);

const { attribute, ...slime } = rest;

const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, two, ...threeTosix] = numbers;

console.log(one);
console.log(threeTosix);
