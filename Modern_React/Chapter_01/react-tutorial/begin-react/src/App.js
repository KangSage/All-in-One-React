// useRef - setTimeout, setInterval의 id, 외부라이브러리 인스턴스, scroll 위치 등에 사용
// useRef를 사용할 경우 값이 바뀌어도 컴포넌트가 리렌더링 되지 않는다.

import React, { useRef, useState } from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'ksage',
      email: 'ksage@ruu.kr'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@ruu.kr'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@ruu.kr'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <fragment>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </fragment>
  );
}

export default App;
