import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  /** primary **/
  --color-primary: #f48b03;
  --color-primary-rgb: 255, 201, 0;
  --color-primary-contrast: #ffffff;
  --color-primary-contrast-rgb: 255, 255, 255;
  --color-primary-shade: #d77a03;
  --color-primary-tint: #f5971c;

  /** secondary **/
  --color-secondary: #333333;
  --color-secondary-rgb: 51, 51, 51;
  --color-secondary-contrast: #ffffff;
  --color-secondary-contrast-rgb: 255, 255, 255;
  --color-secondary-shade: #2d2d2d;
  --color-secondary-tint: #474747;

  /** tertiary **/
  --color-tertiary: #000000;
  --color-tertiary-rgb: 0, 0, 0;
  --color-tertiary-contrast: #ffffff;
  --color-tertiary-contrast-rgb: 255, 255, 255;
  --color-tertiary-shade: #000000;
  --color-tertiary-tint: #1a1a1a;

  /** success **/
  --color-success: #2dd36f;
  --color-success-rgb: 45, 211, 111;
  --color-success-contrast: #ffffff;
  --color-success-contrast-rgb: 255, 255, 255;
  --color-success-shade: #28ba62;
  --color-success-tint: #42d77d;

  /** warning **/
  --color-warning: #ffc409;
  --color-warning-rgb: 255, 196, 9;
  --color-warning-contrast: #000000;
  --color-warning-contrast-rgb: 0, 0, 0;
  --color-warning-shade: #e0ac08;
  --color-warning-tint: #ffca22;

  /** danger **/
  --color-danger: #eb445a;
  --color-danger-rgb: 235, 68, 90;
  --color-danger-contrast: #ffffff;
  --color-danger-contrast-rgb: 255, 255, 255;
  --color-danger-shade: #cf3c4f;
  --color-danger-tint: #ed576b;

  /** dark **/
  --color-dark: #222428;
  --color-dark-rgb: 34, 36, 40;
  --color-dark-contrast: #ffffff;
  --color-dark-contrast-rgb: 255, 255, 255;
  --color-dark-shade: #1e2023;
  --color-dark-tint: #383a3e;

  /** medium **/
  --color-medium: #92949c;
  --color-medium-rgb: 146, 148, 156;
  --color-medium-contrast: #ffffff;
  --color-medium-contrast-rgb: 255, 255, 255;
  --color-medium-shade: #808289;
  --color-medium-tint: #9d9fa6;

  /** light **/
  --color-light: #f4f5f8;
  --color-light-rgb: 244, 245, 248;
  --color-light-contrast: #000000;
  --color-light-contrast-rgb: 0, 0, 0;
  --color-light-shade: #d7d8da;
  --color-light-tint: #f5f6f9;
}


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
    &::-webkit-scrollbar {
    display: none;
  }
}

div#__next,
  div#__next > div {
    /* min-height: 100vh; */
}

.Toastify {
  height: 0px !important;
}
`;
