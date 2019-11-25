import React from "react";
import { theme, GlobalStyle } from "./Components/styles/Theme";
import { ThemeProvider } from "styled-components";
import MyProvider from "./themes/theme-context";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import ListRecipes from "./Components/ListRecipes"
import ListShopping from "./Components/ListShopping";
import NewRecipe from "./Components/NewRecipe";
import Login from "./Components/Login";
import NewUser from "./Components/NewUser";


import "./App.css";
import Header from "./Components/Header";
import Agenda from "./Components/Agenda";

const  PrivateRoute =  ({Component, ...rest}) => {
    return (<Route {...rest} render = {(props)=> (
      localStorage.getItem("token") ? (<Component {...props} />) :
      (<Redirect to ="/login" />)
    )}/> )
}


class App extends React.Component{
  render(){
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
  }
}



export default App;
