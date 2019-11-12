import React from "react";
import styled from "styled-components";

const RecipeContainer = styled.div`
        border: 3px solid black;
        width: 20%;
        margin: 1%;
         padding: 10px;
         border-radius: 20px;
         box-shadow: 5px 5px 5px ${props => props.theme.black};
      
         h3{
             text-align: center;
             
         }
         span{
             text-decoration: underline;
             font-weight: bolder;
         }
       
         button {
                display: block;
                margin: 0 auto;
         }
` 
export const Recipe = (props) =>{
    return (
        <RecipeContainer>

    
       <h3>
           {props.recipe.name}
       </h3>
       <span>Ingredientes: </span>
       <ul>
         { props.recipe.ingredients.map(ingredient=> <li>{ingredient}</li>) }
       </ul>
       <p>
           <span>Preparacion: </span> 
          {props.recipe.description}
       </p>
       <button>Editar Receta</button>
       </RecipeContainer>
    )
}