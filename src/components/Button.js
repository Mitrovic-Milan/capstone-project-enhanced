import styled from 'styled-components';

export const Button = ({textValue, onClick, dataid}) => {
  return (
    <>
      <StyledButton type="submit" onClick={onClick} data-id={dataid}>
        {textValue}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background: whitesmoke;
  border-radius: 6px;
  width: 80px;
  padding: 4px;
  margin-left: 15px;
  color: black;
  border: 3px solid #999;
`;
