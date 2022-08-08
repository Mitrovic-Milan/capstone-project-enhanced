import {useState} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function newInput(inputValue) {
    setInput(inputValue);
  }
  function newTodo(newTodoValue) {
    setTodos(newTodoValue);
  }
  function deleteTodo(akTodo) {
    setTodos(current => current.filter(obj => obj.id !== akTodo));
  }
  function changeColor(todoid) {
    setTodos(current =>
      current.map(obj => {
        if (obj.id === todoid) {
          const bcolor = obj.color === 'red' ? 'green' : 'red';
          return {
            ...obj,
            color: bcolor,
          };
        }
        return obj;
      })
    );
  }

  function sortdata() {
    return todos.sort(todo => todo.color !== 'red');
  }
  sortdata();

  return (
    <>
      <Header />
      <StyledList>
        <TodosList todos={todos} deleteTodo={deleteTodo} changeColor={changeColor} />
      </StyledList>
      <StyledForm>
        <Form input={input} newInput={newInput} todos={todos} newTodo={newTodo} />
      </StyledForm>
    </>
  );
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  width: 100%;
  align-items: center;
`;
export default App;
