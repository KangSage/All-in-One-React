// scope : 유효 범위
// Global, Function, Block
const value = 'hello';

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye';
  console.log(value);
}

myFunction();
otherFunction();

function myFunc() {
  const value = 'bye!';
  const anotherValue = 'world';
  function funcInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  funcInside();
}

myFunc();


function myFunc2() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunc2();

console.log('global scope: ');
console.log(value);
//console.log(anotherValue);


