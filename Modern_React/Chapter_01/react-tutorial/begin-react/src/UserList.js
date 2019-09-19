// 배열 렌더링하기

import React from 'react';

function User({ user }) {
  return (
  <div>
    <b>{user.username}</b> <span>({user.email})</span>
  </div>
  )
}

function UserList() {
  const users = [
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
  ];

  return (
    <div>
      {/*<div>*/}
      {/*  <b>{users[0]}.username}</b> <span>({user[0].email})</span>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <b>{users[1]}.username}</b> <span>({user[1].email})</span>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <b>{users[2]}.username}</b> <span>({user[2].email})</span>*/}
      {/*</div>*/}

      {/*<User user={users[0]}/>*/}
      {/*<User user={users[1]}/>*/}
      {/*<User user={users[2]}/>*/}

      {
        // 배열의 경우 key를 넘겨주지 않으면 계속 새로 렌더링함
        users.map(
          (user, index)=> (
            <User user={user} key={index} />
          )
          // (user) => (
          //   <User user={user} key={user.id} />
          // )
        )
      }
    </div>
  )
}

export default UserList;
