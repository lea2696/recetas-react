import React from "react";
import styled from "styled-components";
import {Redirect} from "react-router-dom";
import { LoginUser, CheckToken } from "../auth/auth";
const BodyContainer = styled.div`
    height: 70vh;
    overflow: hidden;
    background-image: linear-gradient(to  bottom,#feac1740 ,rgba(255, 255, 255, 0.6));

`;
const LoginContainer = styled.div`   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: white;
    padding: 20px 40px 40px 40px;
     box-shadow: 0 0 5px #808080;
        h2 {
            text-align: center;
            font-weight: bolder;
            font-family: "Roboto", Arial, Helvetica, sans-serif;
        }
        form {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
                label{
                    margin: 10px;
                    display: block;
                    text-align: center;
                }
                input {
                    border: 1px solid gray;
                    height: 25px;
                }
                button{
                    display: block;
                    width: 100%;
                    background-color: #75cf38;
                    color: white;
                    margin-top: 20px;
                    font-size: 1.2rem;
                    border: none;
                    padding: 5px;
        }
        }
        p{  position: absolute;
        bottom: 10px;
            font-size: 0.8rem;
            a {
                color: black;
            }
                
        }
`

export default class Login extends React.Component {
    state = {
        email: "",
        password: "",
    }
    handleInputUser = (e) => {
        let email = e.target.value;
        this.setState({
            email
        })
    }
    handleInputPassword = (e) => {
        let password = e.target.value;
        this.setState({
            password
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            email : this.state.email,
            password: this.state.password
        }
       let dataUser = await LoginUser(data);
       console.log(dataUser)
       if(dataUser.token){
           localStorage.setItem("token", dataUser.token);
           let check = await CheckToken(dataUser.token);
           console.log(check);
            this.setState({
                token: dataUser.token
            })
       }
       this.setState({
           email: "",
           password: ""
       })

    }

    render(){
        if(this.state.token){
            return <Redirect to="/agenda" />
        } else{
        return (
            <BodyContainer>
        <LoginContainer>
            <h2>Login</h2>
            <form onSubmit = {this.handleSubmit}>
                <label>Email</label>
                <input type="text" value={this.state.email} onChange = {this.handleInputUser} />
                <label>Contraseña</label>
                <input type="password" value={this.state.password} onChange = {this.handleInputPassword} />
                <button>Login</button>
            </form>
            <p>No eres miembro? <a href="/"> Crea tu usuario</a></p>
        </LoginContainer>
        </BodyContainer>
        )
    }
}
}