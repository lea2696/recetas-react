import React from "react";
import styled from "styled-components";

const RecipeContainer = styled.div`
        border: 3px solid black;
        width: 20%;
        margin: 1%;
         padding: 10px;
         border-radius: 20px;
         box-shadow: 2px 2px 2px ${props => props.theme.red};
      
         h3{
             text-align: center;
             
         }
         p{
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
       <p>Ingredientes: </p>
       <ul>
         { props.recipe.ingredients.map(ingredient=> 
         <li>
        <span>{ingredient.name} </span> 
        <span>{ingredient.amount} </span> 
        <span>{ingredient.unit} </span>
         </li>) }
       </ul>
       <p>
           <span>Preparacion: </span> 
          {props.recipe.description}
       </p>
       <button>Editar Receta</button>
       </RecipeContainer>
    )
}