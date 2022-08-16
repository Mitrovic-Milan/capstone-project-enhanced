import {Button} from './Button';
import {useState} from 'react';
import styled from 'styled-components';

const Form = ({onAddTodo}) => {
  const [todo, setTodo] = useState('');
  const onInputChange = e => {
    setTodo(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onAddTodo(todo);
    setTodo('');
  };

  return (
    <>
      <StyledLabel>Neue Todos</StyledLabel>
      <StyledForm onSubmit={onFormSubmit}>
        <StyledInput type="text" className="task-input" value={todo} required onChange={onInputChange} maxLength={40} />
        <Button textValue={'Submit'} />
      </StyledForm>
    </>
  );
};
const StyledLabel = styled.label`
  padding-right: 230px;
  font-size: 20px;
  color: whitesmoke;
`;

const StyledInput = styled.input`
  font-size: 25px;
  border: 3px solid #999;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
`;

export default Form;
