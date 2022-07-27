import styled from 'styled-components';

const Header = () => {
  return (
    <div className="header">
      <Styledh1>Todo-List</Styledh1>
    </div>
  );
};

const Styledh1 = styled.h1`
  display: flex;
  color: black;
  justify-content: center;
`;

export default Header;
