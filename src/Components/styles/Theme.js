import { createGlobalStyle } from "styled-components";

export const theme = {
  black: "#353535",
  red: "#FF9b71",
  blue: "#58d742",
  orange: "#FF781f",
  green: "#74B72E"
};
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  .center{
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  .bolder{
    font-weight: bolder;
  }

`;
