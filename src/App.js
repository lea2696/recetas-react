import React from "react";
import { theme, GlobalStyle } from "./Components/styles/Theme";
import { ThemeProvider } from "styled-components";
import MyProvider from "./themes/theme-context";
import UserProvider from "./themes/User-context";
import { BrowserRouter, Route} from "react-router-dom";

import { PrivateRoute } from "./Components/PrivateRoute";
import ListRecipes from "./Components/ListRecipes"
import ListShopping from "./Components/ListShopping";
import NewRecipe from "./Components/NewRecipe";
import Login from "./Components/Login";
import NewUser from "./Components/NewUser";
import Header from "./Components/Header";
import Agenda from "./Components/Agenda";

import "./App.css";


class App extends React.Component{
  render(){
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
      <MyProvider>
      
          <BrowserRouter>
          <GlobalStyle />
           <Header/>
           <Route path="/new-user" component = {NewUser} />   

           <Route path="/login"  component = {Login} />  
           <PrivateRoute path="/agenda" Component = {Agenda} />
           <PrivateRoute path="/" exact Component = {Agenda} />
           <PrivateRoute path="/recetas" exact Component= {ListRecipes} />
           <PrivateRoute path="/recetas/nuevareceta" Component={NewRecipe} />
           <PrivateRoute path="/lista" Component={ListShopping} />
          </BrowserRouter>
      </MyProvider>
      </UserProvider>
    </ThemeProvider>
  );
  }
}



export default App;
