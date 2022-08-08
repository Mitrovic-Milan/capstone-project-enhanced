import {nanoid} from 'nanoid';
import {Button} from './Button';

const Form = ({input, newInput, todos, newTodo}) => {
  const onInputChange = e => {
    newInput(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    newTodo([...todos, {id: nanoid(), title: input, completed: false, color: 'red'}]);
    newInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>Neue Todos</label>
      <br />
      <input type="text" className="task-input" value={input} required onChange={onInputChange} maxLength={40} />
      <Button textValue={'Submit'} />
    </form>
  );
};

export default Form;
