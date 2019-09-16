import React from 'react';
/*
 * props
function Hello(props) {
  console.log(props);
  return <div style={{
    color: props.color
  }}>안녕하세요 {props.name}</div>;
}
*/

function Hello({color, name, isSpecial}) {
  return (
    <div style={{
      color
    }}>
      {/* 값이 없을 때 렌더링을 안할 경우 조건 연산자 보다 && 연산자가 코드가 짧다. */}
      {isSpecial ? <b>*</b> : null}
      {isSpecial ? '특별하다' : '특별하지 않다.'}
      {isSpecial && <b>*</b>}
      {/*falsy 한 값 중 0만 렌더링 됨.*/}
      {undefined}
      {false}
      {null}
      {0}
      안녕하세요 {name}
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
