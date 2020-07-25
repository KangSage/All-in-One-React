import React, {
  useState,
  useRef // DOM에 직접 접근하기 위해 사용한다.
} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  // useRef()를 원하는 이름으로 할당.
  const nameInput = useRef();
  const {name, nickname} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    // 불변성을 지켜주어야만 콤포넌트가 업데이트 됨
    setInputs({
      ...inputs,
      // name에 할당 된 값이 key가 되도록 []로 감싼다.
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    // nameInput을 가지고 있는 태그에 focus가 잡히도록 한다.
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
        {/* 할당 된 useRef를 원하는 태그에 넣어 준다. */}
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
