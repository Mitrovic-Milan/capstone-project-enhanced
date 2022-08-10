import styled from 'styled-components';
import {Icon} from '@iconify/react';

export const DeleteButton = ({onClick, dataid}) => {
  return (
    <>
      <StyledButton type="submit" onClick={onClick} data-id={dataid}>
        <Icon icon="ant-design:delete-outlined" style={{fontsize: '28px'}} data-id={dataid} />
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background: transparent;
  border-radius: 5px;
  position: relative;
  width: 75px;
  left: 450px;
  bottom: 40px;
  padding-top: 1px;
`;
