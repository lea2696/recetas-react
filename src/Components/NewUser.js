import React from "react";
import { BodyContainer, LoginContainer } from "./styles/LoginStyle";
import { Link } from "react-router-dom";
import { CreateUser } from "../auth/auth";
export default class NewUser extends React.Component {
    state = {
        name: "",
        email: "",
        firstPassword: "",
        secondPassword: "",
        errors : {
            name: true,
            email: true,
            password: true
        },
       ok: false,
       message: "",
       check: false
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        let errors ={...this.state.errors};
        switch(name) {
            case "name": 
            if(value.length < 3) {
                errors[name] = "El nombre completo debe ser de minimo 3 caracteres"
            } else{
                errors[name] = false
            }
            break;
            case "email" : 
            if(value.length < 4) {
                errors[name] = "El email es invalido"
            } else{
                errors[name] = false
            }
            break;
            case "firstPassword" : 
            if(value !== this.state.secondPassword){
                errors.password = "Las contrasenas no coinciden"
            } else{
                errors[name] = false
            }
            break
            case "secondPassword" : 
            if(value !== this.state.firstPassword){
                errors.password = "Las contrasenas no coinciden"
            } else {
                errors.password = false
            }
            break;
            default: break;
            }
        
        this.setState({
            [name]: value,
            errors
        })

    }
    
    handleErrors = (errors) => {
        let valid = true;
    Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val  && (valid = false)
  );
  return valid;
       
    }

    handleSubmit = async (e, validity) => {
        e.preventDefault();
       if( e.target.checkValidity() && validity ){
           let state = {...this.state};
           let data = {
               name: state.name,
               email: state.email,
               password: state.firstPassword
           };
           let res = await CreateUser(data);
           console.log(res);
           if(!res.data.ok){
              return  this.setState({
                   ok: true,
                   message: res.data.message
               })
           } else{
                return this.setState({
                    check: true
                })
                }
           }

       } 

    

    render(){
        let validate = this.handleErrors(this.state.errors);    
        if(this.state.check){
            
           return  <BodyContainer>
                <LoginContainer>
                    <h2>Usuario creado con exito</h2>
                    <button>  <Link to="/">Iniciar sesion</Link> </button>
                </LoginContainer>
            </BodyContainer>
        }  else{

        
        return(
        <BodyContainer>
            <LoginContainer>
                <h2>Crear nuevo usuario</h2>
        {this.state.ok ? <span>{this.state.message}</span> : null} 
                <form onSubmit={(e)=>this.handleSubmit(e, validate)}>
                    <label>Nombre completo</label>
                    <input type="text" value={this.state.name} name="name"
                    onChange={this.handleChange} required></input>
                    <label>Email</label>
                    <input type="text" value={this.state.email}  name="email"
                    onChange={this.handleChange} required></input>
                    <label>Contraseña</label>
                    <input type="password" value={this.state.firstPassword} name="firstPassword"
                    onChange={this.handleChange} required></input>
                    <label>Confirma Contraseña</label>
                    <input type="password" value={this.state.secondPassword} name="secondPassword"
                    onChange={this.handleChange} required></input>
                    <button disabled={!validate}>Registrar Usuario</button>
                </form>
                <p><Link to="/">Volver</Link></p>
            </LoginContainer>
        </BodyContainer>
        )
        }
}
}