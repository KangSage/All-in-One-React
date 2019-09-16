import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
     <Hello name="react" color="red" isSpecial={true}/>
     {/* 값을 할당하지 않으면 논리값 true가 자동 할당된다 */}
     <Hello name="react" color="red" isSpecial/>
     <Hello color="red"/>
     </Wrapper>
  );
}

export default App;
