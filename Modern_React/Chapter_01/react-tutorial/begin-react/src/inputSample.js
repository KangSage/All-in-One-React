import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const onReset = () => {
    setText('')
  };
  return (
    <div>
      {/* value = {text}를 설정하지 않으면 변경된 text가 적용되지 않음. */}
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  )
}

export default InputSample;
