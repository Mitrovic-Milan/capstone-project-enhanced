import {useState} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import {nanoid} from 'nanoid';

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    console.log(todo);
    setTodos([...todos, {id: nanoid(), title: todo, completed: false}]);
    // add todo to todos
  }

  function handleDeleteTodo(akTodo) {
    setTodos(current => current.filter(obj => obj.id !== akTodo));
  }
  function handleToggleCompleted(todoid) {
    console.log(setTodos);
    setTodos(current =>
      current.map(obj => {
        if (obj.id === todoid) {
          return {
            ...obj,
            completed: !obj.completed,
          };
        }
        return obj;
      })
    );
  }

  return (
    <>
      <Header />
      <StyledList>
        <TodosList
          todos={todos.sort((a, b) => (a.completed ? (b.completed ? 0 : 1) : !b.completed ? 0 : -1))}
          onDeleteTodo={handleDeleteTodo}
          onToggleCompleted={handleToggleCompleted}
        />
      </StyledList>
      <StyledForm>
        <Form onAddTodo={handleAddTodo} />
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
