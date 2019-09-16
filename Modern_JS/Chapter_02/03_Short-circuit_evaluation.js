true && true // true
true && false // true
true || false // true
false || true // true

!3 // false

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  // if (animal) {
  //   return animal.name;
  // }
  // return undefined;

  return animal && animal.name;
}

const name = getName(/*dog*/);
console.log(name);

// True 뒤에 오는 것이 결과물이 되고 false는 무조건 false가 된다.
console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
