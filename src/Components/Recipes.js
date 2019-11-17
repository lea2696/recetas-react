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
         li{
             list-style: none;
         }
       
        @media (max-width: 720px) {
            width: 45%;
            margin: 0;
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
         <li key={ingredient.name}>
        <span>{ingredient.name} </span> 
        <span>{ingredient.amount} </span> 
        <span>{ingredient.unit} </span>
         </li>) }
       </ul>
       <p>
           <span>Preparacion: </span> 
          {props.recipe.description}
       </p>
       </RecipeContainer>
    )
}