import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  html, body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  height: 100%;
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
`;