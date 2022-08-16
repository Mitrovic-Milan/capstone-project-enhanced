import styled from 'styled-components';
import {Icon} from '@iconify/react';

export const DeleteButton = ({onClick, dataid}) => {
  return (
    <>
      <StyledButton type="submit" onClick={onClick} data-id={dataid}>
        <Icon icon="ant-design:delete-outlined" fontSize={'28px'} data-id={dataid} />
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background: transparent;
  border-radius: 10px;
  padding-top: 5px;
  color: whitesmoke;
  width: 140px;
  margin: 15px;
  max-height: 40px;
`;
