import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import {nanoid} from 'nanoid';
import {loadFromLocalStorage, writeToLocalStorage} from './util/LocalStorage';
import {getCurrentDate} from './util/CurrentDate';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const value = loadFromLocalStorage('todos');
    return value ?? [];
  });

  useEffect(() => {
    writeToLocalStorage('todos', todos);
  }, [todos]);

  function handleAddTodo(todo) {
    console.log(todo);
    setTodos([...todos, {id: nanoid(), title: todo, completed: false, createAt: getCurrentDate(), completetAt: ''}]);
  }

  function handleDeleteTodo(akTodo) {
    setTodos(current => current.filter(obj => obj.id !== akTodo));
  }
  function handleToggleCompleted(todoid) {
    //console.log(setTodos);
    setTodos(current =>
      current.map(obj => {
        if (obj.id === todoid) {
          return {
            ...obj,
            completed: !obj.completed,
            completetAt: !obj.completed ? getCurrentDate() : '',
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
  margin: 5px;
  border: 1.5px solid whitesmoke;
  border-radius: 20px;
  box-shadow: 1px 15px 15px #999;
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
