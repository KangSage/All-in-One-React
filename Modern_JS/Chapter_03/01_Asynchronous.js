function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0); // timeout은 브라우저에선 자동으로 최소 4ms로 설정된다.
}
console.log('작업 시작');
work();
console.log('다음 작업');

function syncWork(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end - start);
  }, 0);
}
console.log('작업 시작');
syncWork((ms) => {
  console.log('작업이 끝났어요.');
  console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');
