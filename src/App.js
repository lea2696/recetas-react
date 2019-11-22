import React from "react";
import { theme, GlobalStyle } from "./Components/styles/Theme";
import { ThemeProvider } from "styled-components";
import MyProvider from "./themes/theme-context";
import { BrowserRouter, Route} from "react-router-dom";
import ListRecipes from "./Components/ListRecipes"
import ListShopping from "./Components/ListShopping";
import NewRecipe from "./Components/NewRecipe";
import Login from "./Components/Login";

import "./App.css";
import Header from "./Components/Header";
import Agenda from "./Components/Agenda";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyProvider>
      
          <BrowserRouter>
          <GlobalStyle />
          <Header />
           <Route path="/" exact component = {Login}></Route>    
           <Route path="/agenda" component = {Agenda}></Route>
           <Route path="/recetas" exact component= {ListRecipes}></Route>
           <Route path="/recetas/nuevareceta" component={NewRecipe}></Route>
           <Route path="/lista" component={ListShopping}></Route>
          </BrowserRouter>
      </MyProvider>
    </ThemeProvider>
  );
}

export default App;
