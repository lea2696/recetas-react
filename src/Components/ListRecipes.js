import React from "react";
import { Recipe } from "./Recipes";
import styled from "styled-components";
import {MyContext} from "../themes/theme-context";

const ContainerRecipes = styled.div `
    display: flex;
    flex-wrap: wrap;
        div{
            width: 25%;
            padding: 10px;
        }
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
                        <div>
                        <p>
                            Lista de recetas
                        </p>
                        <ContainerRecipes>

                        {this.showRecipes(context)}

                        </ContainerRecipes>
                  
                        </div>

                    )
                }
            
          
                </MyContext.Consumer>
        )
    }

}