// 배열 렌더링하기

import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
  <div>
    <b>{username}</b> <span>({email})</span>
    {/* 반드시 onCLick 시에 호출될 함수를 만들어서 넣어줘야 함.*/}
    <button onClick={() => onRemove(id)}>삭제</button>
  </div>
  )
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {
        users.map(
          (user) => (
            <User
              user={user}
              key={user.id}
              onRemove={onRemove}
            />
          )
        )
      }
    </div>
  )
}

export default UserList;
