import {nanoid} from 'nanoid';
import {Button} from './Button';

const Form = ({input, setInput, todos, setTodos}) => {
  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setTodos([...todos, {id: nanoid(), title: input, completed: false}]);
    setInput('');
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
