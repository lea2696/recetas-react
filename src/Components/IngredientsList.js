import React from "react";
import {MyContext} from "../themes/theme-context"

export default class IngredientList extends React.Component {
    componentDidMount(){
        console.log(this.context);
    }

    checkInterval = (date, first, final) =>{
        let year = date.year >= first.year && date.year <= final.year;
        let month = date.month >= first.month && date.month <= final.month;
        let day = date.day >= first.day && date.day <= final.day;

        return year && month && day;
    }

    render(){
        let first = new Date(this.props.firstDate);
        let final = new Date(this.props.finalDate);
        let firstObject = {
            day: first.getDate(),
            month: first.getMonth(),
            year: first.getFullYear()
        };
        let finalObject = {
            day: final.getDate(),
            month: final.getMonth(),
            year: final.getFullYear()
        };

        let recipes = this.props.recipes.filter(recipe => this.checkInterval(recipe.day, firstObject, finalObject));
        console.log(recipes)
        return (
            <ul>
                    {recipes.map(element=> 
                    element.recipe.recipe.ingredients.map( ingredient => <li>{ingredient.name}</li>)
                        
                         )}
                    {recipes.length === 0 && <p className="bolder"> Oops! Parece que no hay ninguna receta para este intervalo,
                        puedes agregarlo desde la seccion de Agenda</p>}
           
            </ul>

        )
    }
}
IngredientList.contextType = MyContext;