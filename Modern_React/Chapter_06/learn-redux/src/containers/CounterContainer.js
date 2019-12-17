// container component란?
// redux의 state를 조회하거나 action을 dispatch 할 수 있는 컴포넌트.

import * as React from 'react';
import Counter from '../components/Counter';
// useSelector 상태를 조회하는 함수
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelecor 함수에 넘겨주는 state는 store.getState()의 현재 상태이다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}
export default CounterContainer;
