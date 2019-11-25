import React from "react";
import {Redirect, Link} from "react-router-dom";
import { LoginUser} from "../auth/auth";
import { BodyContainer, LoginContainer } from "./styles/LoginStyle";

export default class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errors : {
            email: true,
            password: true
        },
        token: false
        
    }
    componentDidMount(){
         console.log("entre");
        if(localStorage.getItem("token")){
            this.setState({
                token: true
            })
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        let errors ={...this.state.errors};

        switch(name) {
            case "email" : 
            if(value.length < 4) {
                errors[name] = "El email es invalido"
            } else{
                errors[name] = false
            }
            break;
            case "password" : 
            if(value.length < 6 ) {
                errors[name] = "El password debe ser de minimo 6 caracteres"
            }else{
                errors[name] = false
            }
            break;
            default: break;
        }
        this.setState({
            [name]: value,
            errors
        })

    }
   
    handleSubmit = async (e, validity) => {
        e.preventDefault();
        if(validity){ //Is the form is valid
        let data = {
            email : this.state.email,
            password: this.state.password
        }

       let dataUser = await LoginUser(data);
       let token = dataUser.token;
    
       if(token && this.state.token === false ){
            localStorage.setItem("token", dataUser.token);  
            return this.setState({
                token: true
            })    
       } 
      
    }
    }

    checkForm = (errors) =>{
        let valid = true;
    Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val  && (valid = false)
  );
  return valid;
    }

    render(){

        let validity = this.checkForm(this.state.errors);

        if(this.state.token){
            return <Redirect to="/agenda" />
        } else{
        return (
            <BodyContainer>
        <LoginContainer>
            <h2>Login</h2>
            <form onSubmit = {(e)=>this.handleSubmit(e, validity)}>
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange = {this.handleChange} required />
                <label>Contraseña</label>
                <input type="password"  name="password" value={this.state.password} onChange = {this.handleChange} required />
                <button disabled={!validity}>Login</button>
            </form>
            <p>No eres miembro? <Link to="/new-user"> Crea tu usuario</Link></p>
        </LoginContainer>
        </BodyContainer>
        )
    }
}
}