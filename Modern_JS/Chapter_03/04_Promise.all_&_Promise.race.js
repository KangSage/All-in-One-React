function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};

const getRebbit = async () => {
  await sleep(2000);
  return '토끼';
};
const getTurtle = async () => {
  await sleep(3000);
  return '거북이';
};

async function process() {
  // const dog = await getDog();
  // console.log(dog);
  // const rebbit = await getRebbit();
  // console.log(rebbit);
  // const turtle = await  getTurtle();
  // console.log(turtle);
  const results = await Promise.all([getDog(), getRebbit(), getTurtle()]);
  console.log(results);
  // const dog = results[0];
  // const rabbit = results[1];
  // const turtle = results[2];
  const [dog, rabbit, turtle] = results;
  console.log('dog, rabbit, turtle: %o', dog, rabbit, turtle);
}

async function processRace() {
  const first = await Promise.race([getDog(), getRebbit(), getTurtle()]);
  console.log(first);
}
process();
processRace();
