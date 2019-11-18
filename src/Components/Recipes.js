import React from "react";
import styled from "styled-components";

const RecipeContainer = styled.div`
        border: 3px solid black;
        width: 20%;
        margin: 1%;
        position: relative;
         padding: 10px;
         border-radius: 20px;
         box-shadow: 2px 2px 2px ${props => props.theme.red};
      
         /* h3{
             text-align: center;
             
         } */
         p{
    
             font-weight: bolder;
         }
         li{
             list-style: none;
         }
         button{
             box-shadow: 1px 1px black;
             transition: 0.5s;
             background-color: red;
             border: 3px solid red;
             border-radius: 5px;
             color: white;
             font-weight: bolder;
             padding: 5px;
             font-size: 1.1rem;
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);

         }
       
        @media (max-width: 720px) {
            width: 45%;
            margin: 0;
        }
` 
export class Recipe extends React.Component {
    
    state = {
        show: false
    }
    showDelete = () => {
       let show = !this.state.show
        this.setState({
            show 
        })
    }
    
    render(){
        
    return (
        <RecipeContainer onClick={this.showDelete} >

    
       <h3>
           {this.props.recipe.name}
       </h3>
       <p>Ingredientes: </p>
       <ul>
         { this.props.recipe.ingredients.map(ingredient=> 
         <li key={ingredient.name}>
        <span>{ingredient.name} </span> 
        <span>{ingredient.amount} </span> 
        <span>{ingredient.unit} </span>
         </li>) }
       </ul>
       <p>
           <span>Descripción: </span> 
          {this.props.recipe.description}
       </p>
       {this.state.show ?  <button>Eliminar Receta</button> : null}
       </RecipeContainer>
    )
}
}