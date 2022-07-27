import {useState} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <Styleddiv>
          <TodosList todos={todos} setTodos={setTodos} />
        </Styleddiv>
        <Styleddiv2>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        </Styleddiv2>
      </div>
    </div>
  );
};

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 400px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  overflow-y: scroll;
`;
const Styleddiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  width: 100%;
  align-items: center;
`;
export default App;
