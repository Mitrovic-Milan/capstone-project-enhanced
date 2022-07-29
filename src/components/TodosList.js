import styled from 'styled-components';

const TodosList = ({todos}) => {
  return (
    <StyledUl>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  width: 100%;
  margin-left: 15px;
  text-align: left;
  overflow-y: scroll;
`;

export default TodosList;
