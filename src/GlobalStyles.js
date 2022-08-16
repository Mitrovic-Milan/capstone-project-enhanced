import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.125rem;
    font-family: sans-serif;
    background-color: #d99d6f;
    color: aliceblue;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
