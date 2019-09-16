'use strict';

const slime = {
  name: '슬라임'
};

const cuteSlime = {
  // name: '슬라임',
  ...slime,
  attribute: 'cute'
};

const cuteSlime2 = slime;
cuteSlime2.attribute = 'cute';

const purpleCuteSlime = {
  // name: '슬라임',
  // attribute: 'cute',
  ...cuteSlime,
  color: 'purple'
};

const greenCuteSlime = {
  color: 'green',
  ...purpleCuteSlime,
  //color: 'green'
};

const purpleCuteSlime2 = cuteSlime2;
purpleCuteSlime2.color = 'purple';

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);

console.log(slime === cuteSlime2);

console.log(greenCuteSlime);


const animals = ['개', '고양이', '참새'];
const anotherAnimals = [ ...animals, '비둘기'];
const anotherAnimals2 = animals.concat('비둘기');

console.log(animals);
console.log(anotherAnimals);
console.log(anotherAnimals2);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);
