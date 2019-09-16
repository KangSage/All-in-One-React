// async / await은 es8에 소개된 문법이다.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function makeError() {
  await sleep(1000);
  throw new Error();
}

async function process() {
  // console.log('안녕하세요!');
  // await sleep(1000);
  // console.log('반갑습니다!');
  // return true;
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process().then(v => {
  console.log(v);
});
