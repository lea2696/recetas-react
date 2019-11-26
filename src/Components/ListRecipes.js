import React from "react";
import { Recipe } from "./Recipes";
import styled from "styled-components";
import {MyContext} from "../themes/theme-context";
import { Link } from "react-router-dom";
import {GetRecipes} from "../auth/auth"
const ContainerRecipes = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
        div:nth-child(odd){
            transform: rotate(3deg);
            transition: 0.4s;

      
        }
        div:nth-child(even){
            transform: rotate(-3deg);
            transition: 0.4s;
            z-index: 99;
            background-color: white;
        }
        div:hover{
            transform: rotate(0deg);
            /* box-shadow: 10px 10px 10px ${props => props.theme.red}; */

        }
`
const AddRecipeButton = styled.button`
    background-color: white;
    box-shadow: 1px 1px gray;
    color: black;
    border: 1px solid gray;
    padding: 5px;
    margin: 10px;
    border-radius: 5px;
        a{
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
        }

`
export default class ListRecipes extends React.Component{
        componentDidMount(){
            let token = localStorage.getItem("token");
            let recipes = []
            // GetRecipes(token)
            // .then(
            //     res=> {
            //         console.log(res)
            //     }
            // )
            // .catch(err => {
            //     console.log(err.response)
            // })
        }

        showRecipes = (context) => {
            return context.state.recipes.map(recipe=> <Recipe key={recipe.name} recipe={recipe} />)
        }
    render(){
        return(
            <MyContext.Consumer>
                {
                    context =>(
                     
                        <>
                        <AddRecipeButton>
                            <Link to="/recetas/nuevareceta" >Crear receta</Link>
                        </AddRecipeButton>
                        <h2 className="center">
                            Recetas
                        </h2>
                        <ContainerRecipes>
                        {this.showRecipes(context)}

                        </ContainerRecipes>
                  
                        </>

                    )
                }
            
          
                </MyContext.Consumer>
        )
    }

}