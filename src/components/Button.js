import styled from 'styled-components';

export const Button = ({textValue}) => {
  return <StyledButton type="submit">{textValue}</StyledButton>;
};

const StyledButton = styled.button`
  background: gray;
  border-radius: 5px;
`;
