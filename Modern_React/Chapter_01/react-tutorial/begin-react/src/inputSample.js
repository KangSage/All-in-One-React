import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const nicknameInput = useRef();
  const {name, nickname} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    // 불변성을 지켜주어야만 콤포넌트가 업데이트 됨
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus()
  };

  return (
    <div>
      {/* value = {text}를 설정하지 않으면 변경된 text가 적용되지 않음. */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample;
