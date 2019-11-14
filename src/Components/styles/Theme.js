import { createGlobalStyle } from "styled-components";

export const theme = {
  black: "#393939",
  red: "#FF0000",
  blue: "#4e8ff3",
  orange: "#FF5133"
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
    box-sizing: inherit
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
