import styled from 'styled-components';

const TodosList = ({todos}) => {
  return (
    <StyledUl>
      {todos.map(todo => (
        <li className="list-item" key={todo.id}>
          <span className="list">{todo.title}</span>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  width: 100%;
  margin-left: 20px;
  text-align: left;
  overflow-y: scroll;
`;

export default TodosList;
