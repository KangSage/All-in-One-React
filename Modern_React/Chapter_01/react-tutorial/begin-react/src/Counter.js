import React, { useState } from 'react';

function Counter() {
  const [ number, setNumber ] = useState(0);
  const onIncrease = () => {
    // setNumber(number + 1)
    setNumber(prevNum => prevNum +1);
  };

  const  onDecrease = () => {
    // setNumber(number - 1)
    setNumber(prevNum => prevNum -1);
  };

  return (
    <div>
      <h1>{number}</h1>
      {/* 함수를 넣어주는 것이지 호출하는 것이 아니므로 괄호 X*/}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>+2</button>
    </div>
  )
}

export default Counter;
