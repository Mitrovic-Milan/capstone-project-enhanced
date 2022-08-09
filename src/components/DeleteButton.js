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
  width: 75px;
  padding-top: 1px;
  position: relative;
  left: 450px;
  bottom: 40px;
`;
