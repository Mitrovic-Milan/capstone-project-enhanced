import styled from 'styled-components';
import {Icon} from '@iconify/react';

export const Button = ({textValue, onClick, dataid}) => {
  return (
    <StyledButton type="submit" onClick={onClick} data-id={dataid}>
      {textValue === 'Delete' ? '' : textValue}
      {textValue === 'Delete' ? <Icon icon="ant-design:delete-outlined" style={{fontsize: '28px'}} /> : ''}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: gray;
  border-radius: 5px;
  padding-top: 1px;
`;
