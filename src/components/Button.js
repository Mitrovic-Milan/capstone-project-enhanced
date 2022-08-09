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
  background: sandybrown;
  border-radius: 6px;
  width: 75px;
  padding-top: 3px;
`;
