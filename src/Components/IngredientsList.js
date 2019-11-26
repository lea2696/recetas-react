import React from "react";
import {MyContext} from "../themes/theme-context"

export default class IngredientList extends React.Component {
    checkInterval = (date, firstDate, finalDate) =>{
        const DateRecipe = new Date(date.year, date.month, date.day);
        return firstDate <= DateRecipe && DateRecipe <= finalDate;
    }
    makeList = (recipes) => {
        let list = [];
        let listOfIngredients = recipes.map(recipe=> recipe.recipe.recipe.ingredients);
        let ingredients = [...listOfIngredients]
        for(let i = 0; i < listOfIngredients.length; i++){
            let arr = ingredients.splice(0, 1);
            list = list.concat(arr[0]); //Se genera un array con todos los ingredientes 
        }
     
   

        }

    

    render(){
        let firstDate = new Date(this.props.firstDate);
        let finalDate = new Date(this.props.finalDate);
        let recipes = this.props.recipes.filter(recipe => this.checkInterval(recipe.day, firstDate, finalDate));
        this.makeList(recipes);
        return (
            <div className="center">
            <ul>
                    {recipes.map(element=> 
                    element.recipe.recipe.ingredients.map( ingredient => <li key={ingredient.amount}>{ingredient.name}</li>)
                        
                         )}
                    {recipes.length === 0 && <p className="bolder"> Oops! Parece que no hay ninguna receta para este intervalo,
                        puedes agregarlo desde la seccion de Agenda</p>}
           
            </ul>
            </div>

        )
    }
}
IngredientList.contextType = MyContext;