import React from "react";
import { Recipe } from "./Recipes";
import styled from "styled-components";
import {MyContext} from "../themes/theme-context";

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

        }
        div:hover{
            transform: rotate(0deg);
            /* box-shadow: 10px 10px 10px ${props => props.theme.red}; */

        }
`
const Title = styled.h2`

                font-family: "Lobster", cursive;
                font-size: 2.5rem;
                text-align: center;
                    
            `
export default class ListRecipes extends React.Component{
        showRecipes = (context) => {
            console.log(context);
            return context.state.recipes.map(recipe=> <Recipe recipe={recipe} />)
        }
    render(){
        return(
            <MyContext.Consumer>
                {
                    context =>(
                     
                        <>
                        <Title>
                            Recetas
                        </Title>
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