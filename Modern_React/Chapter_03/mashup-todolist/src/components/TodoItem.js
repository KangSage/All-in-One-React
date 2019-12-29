import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from './TodoContext';

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  // 이때 dispatch만 가져오므로 다른 컴포넌트들에는 영향이 없다.
  // state, dispatch를 통으로 가져올 경우 다른 컴포넌트에도 영향을 미쳐서 계속 리렌더링 된다.
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: 'TOGGLE',
      id
    });
  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id
    });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

// React.memo를 사용하면 불필요한 렌더링을 막아줘서 컴포넌트 최적화가 된다.
export default React.memo(TodoItem);
