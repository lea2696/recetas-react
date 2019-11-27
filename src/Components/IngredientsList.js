import React from "react";
import {MyContext} from "../themes/theme-context"

export default class IngredientList extends React.Component {
    checkInterval = (date, firstDate, finalDate) =>{
        firstDate.setHours(0,0,0,0);
        finalDate.setHours(0,0,0,0);
        const DateRecipe = new Date(date.year, date.month, date.day, );
  
        return firstDate <= DateRecipe && DateRecipe <= finalDate;
    }
    makeList = (recipes) => {
        let list = [];
        let listOfIngredients = recipes.map(recipe=> recipe.recipe.recipe.ingredients); //Change this name
        let ingredients = [...listOfIngredients];
        console.log(listOfIngredients);
        for(let i = 0; i < listOfIngredients.length; i++){
            let arr = ingredients.splice(0, 1);
            list = list.concat(arr[0]); //Se genera un array con todos los ingredientes 
        }

           let obj = list.reduce((acc, currentValue)=>{
                if(!acc[currentValue.name]){
                     acc[currentValue.name] = {
                        [currentValue.unit] : currentValue.amount
                    }
                    
                } else{
                    if(acc[currentValue.name][currentValue.unit]){
                        acc[currentValue.name] = {
                            [currentValue.unit] :  Number(acc[currentValue.name][currentValue.unit]) + Number(currentValue.amount)
                        }
                    } else{
                        acc[currentValue.name][currentValue.unit] = currentValue.amount
                    }
                }
                return acc;
            }, {});

            return obj;
            
   

        }
        showList = (recipes) => {
            let objIngredients = this.makeList(recipes);
          return  Object.entries(objIngredients).map(element=> {
                return  <li key={element[0]}> {element[0]}  {Object.entries(element[1]).map(data=> <span key={data[0]}>{data[1]} {data[0]}</span> )}</li>
           })
    
        }

    

    render(){
        let firstDate = new Date(this.props.firstDate);
        let finalDate = new Date(this.props.finalDate);
        console.log(this.props.recipes)
        let recipes = this.props.recipes.filter(recipe => this.checkInterval(recipe.day, firstDate, finalDate));
        
        return (
            <div className="center">
            <ul>
                    {this.showList(recipes)}
                    {recipes.length === 0 && <p className="bolder"> Oops! Parece que no hay ninguna receta para este intervalo,
                        puedes agregarlo desde la seccion de Agenda</p>}
           
            </ul>
            </div>

        )
    }
}
IngredientList.contextType = MyContext;