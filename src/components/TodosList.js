import styled from 'styled-components';
import {DeleteButton} from './DeleteButton';

const TodosList = ({todos, onDeleteTodo, onToggleCompleted}) => {
  function onHandleClick(e) {
    console.log(e.target.dataset);
    const todoid = e.target.dataset.id;
    onDeleteTodo(todoid);
  }

  function onHandleToggle(e) {
    const todoid = e.target.dataset.id;

    onToggleCompleted(todoid);
  }
  return (
    <StyledUl>
      {todos.map(todo => (
        <StyledSpan key={todo.id} completed={todo.completed}>
          <StyledLi onClick={onHandleToggle} data-id={todo.id}>
            <span data-id={todo.id}>{todo.title}</span>
            <span data-id={todo.id}>{todo.createAt}</span>
            <span data-id={todo.id}>{todo.completetAt}</span>
          </StyledLi>
          <DeleteButton onClick={onHandleClick} dataid={todo.id} />
        </StyledSpan>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  overflow-y: scroll;

  width: 100%;
`;
const StyledLi = styled.li`
  border: none;
  padding: 15px 32px 15px 15px;
  flex-direction: column;
  display: flex;
  font-size: 20px;
  overflow-x: scroll;
  width: 100%;
  position: relative;
`;
const StyledSpan = styled.span`
  background-color: ${props => (props.completed ? 'rgba(0,150,0,0.6)' : 'rgba(240,20,50,0.6)')};
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;
export default TodosList;
