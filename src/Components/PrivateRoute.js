import React from "react";
import {Route, Redirect} from "react-router-dom";
import {UserContext} from "../themes/User-context";

export const  PrivateRoute =  ({Component, ...rest}) => {
    return (
      <UserContext.Consumer>
        {context => (
    <Route {...rest} render = {(props)=> (
      context.state.token ? (<Component {...props} />) :
      (<Redirect to ="/login" />)
    )}/> 
        )}
    </UserContext.Consumer>
    )
}