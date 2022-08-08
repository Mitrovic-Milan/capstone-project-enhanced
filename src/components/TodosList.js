import styled from 'styled-components';
import {DeleteButton} from './DeleteButton';

const TodosList = ({todos, deleteTodo, changeColor}) => {
  function onHandleClick(e) {
    console.log(e.target.dataset);
    const todoid = e.target.dataset.id;
    deleteTodo(todoid);
  }

  function onHandleToggle(e) {
    const todoid = e.target.dataset.id;

    changeColor(todoid);
  }
  return (
    <StyledUl>
      {todos.map(todo => (
        <span key={todo.id}>
          <StyledLi color={todo.color} onClick={onHandleToggle} data-id={todo.id}>
            <span data-id={todo.id}>{todo.title}</span>
          </StyledLi>
          <DeleteButton onClick={onHandleClick} dataid={todo.id} />
        </span>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  padding-left: 140px;
  padding-right: 110px;
  text-align: left;
  overflow-y: scroll;
  display: block;
  width: 100vh;
`;
const StyledLi = styled.li`
  border: none;
  padding: 15px 32px;
  grid-template-columns: auto 100px;
  display: grid;
  font-size: 20px;
  margin-left: 0;
  overflow-x: scroll;
  background-color: ${props => (props.color ? props.color : ' hotpink')};
  position: relative;
`;

export default TodosList;
