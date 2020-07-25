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
              // 고유 값을 key로 넘겨 줘야 리스트 렌더링 시 최적화가 가능하다.
              // 배열의 index를 사용하면 경고만 사라질 뿐 실제 최적화가 되는 것은 아님.
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
