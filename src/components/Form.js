import {Button} from './Button';
import {useState} from 'react';

const Form = ({onAddTodo}) => {
  const [todo, setTodo] = useState('');
  const onInputChange = e => {
    setTodo(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    //newTodo([...todos, {id: nanoid(), title: input, completed: false, color: 'red'}]);
    onAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Neue Todos</label>
      <br />
      <input type="text" className="task-input" value={todo} required onChange={onInputChange} maxLength={40} />
      <Button textValue={'Submit'} />
    </form>
  );
};

export default Form;
