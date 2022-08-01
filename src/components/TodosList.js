import styled from 'styled-components';
import {Button} from './Button';

const TodosList = ({todos, deleteTodo}) => {
  function onHandleClick(e) {
    const todoid = e.target.dataset.id;
    deleteTodo(todoid);
  }

  return (
    <StyledUl>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <Button textValue={'Delete'} onClick={onHandleClick} dataid={todo.id} />
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 1em;
  margin-top: 1em;
  padding-left: 40px;
  list-style-type: disc;
  text-align: left;
  overflow-y: scroll;
  display: block;

  li {
    border: none;
    padding: 15px 32px;
    grid-template-columns: auto 100px;
    display: grid;
    font-size: 25px;
    margin-left: 0;
  }

  img {
    font-size: 2.5em;
  }
`;

export default TodosList;
