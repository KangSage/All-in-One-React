function print(person) {
  // if (person === undefined || person === null) {
  //   return;
  // }
  if (!person) return;
  console.log(person.name)
}

const person = null/*{
  name: 'John'
};*/

print(person);

// falsy한 값들
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

// truthy한 값들
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});

const value = null;// {a : 1};
if (value) {
  console.log('value가 Truthy하다.')
}

// const truthy = value ? true : false;
const truthy = !!value;

console.log(truthy);