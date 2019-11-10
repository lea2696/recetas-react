import React from "react";
import { theme } from "./Components/styles/Theme";
import { ThemeProvider } from "styled-components";
import MyProvider from "./themes/theme-context";

import "./App.css";
import Header from "./Components/Header";
import Agenda from "./Components/Agenda";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
        <Header />
        <Agenda />
      </MyProvider>
    </ThemeProvider>
  );
}

export default App;
