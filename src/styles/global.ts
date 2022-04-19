import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html, body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

div#__next,
  div#__next > div {
    min-height: 100vh;
}
`;
