import React from "react";
import { MyContext } from "../themes/theme-context";
import { DayStyled } from "./styles/DayStyled"

export default class DayDetails extends React.Component {
  state = {
    valueInput: "",
    valueSelect: "default",
  }

  showRecipe = (context) => {
    return context.state.recipes.map((recipe, index) => {
          let recipeString = JSON.stringify(recipe);
     return  <option key = {index}  value={recipeString}>{recipe.name}</option>
    }

    )
  }
  deleteRecipe= (context, recipe) => {
    let recipesAgenda = context.getRecipesAgenda();
    let recipesStatus = recipesAgenda.filter(recipeDay => JSON.stringify(recipe)!==JSON.stringify(recipeDay))
    context.deleteRecipe(recipesStatus)

  }
  addRecipe = (e, context) => {
    e.preventDefault();
    let recipe = {
      day: context.state.daySelected,
      recipe: {
        recipe: JSON.parse(this.state.valueSelect),
        amount: this.state.valueInput
      }
    };
    this.setState({
      valueInput: "",
      valueSelect: "default"
    })
    context.addRecipe(recipe);
  };

  handleSelect = (event) => {
    this.setState({
      valueSelect: event.target.value
    });

  }
  showRecipes = (context) => {
   return context.state.recipesAgenda.filter( recipe => JSON.stringify(recipe.day) === JSON.stringify(context.state.daySelected)
    ).map(
      (recipe, i )=><li key={i} >{recipe.recipe.recipe.name} <span onClick={()=>this.deleteRecipe(context, recipe)}>&#10008;</span></li> 
    )
 

  
  }
  handleInput = (event)=>{
    this.setState({
      valueInput: event.target.value
    })
  }

  render() {
    let defaultForm = true;
    if(this.state.valueInput !== "" && this.state.valueSelect !== "default"){
      defaultForm = false
    } 
    
    return (
      <DayStyled>

        <MyContext.Consumer>
          {context => {
            if (context.state.daySelected) {
              return (
                <>
                  <h3> Recetas para el  {context.state.daySelected.day}/{context.state.daySelected.month + 1}/{context.state.daySelected.year} </h3>
                  <ul>
                    {this.showRecipes(context).length === 0 ?  <span>Parece que no tienes ninguna receta agregada para este dia</span> : this.showRecipes(context) }

                  </ul>

                  <p> Agregar mas recetas </p>
                  <form onSubmit={(e)=>{
                    this.addRecipe(e, context)}}>

                    <div>
                      <label>Recetas</label>
                      <select value = {this.state.valueSelect} onChange={this.handleSelect}>
                        <option value="default">Selecciona una receta!</option>
                        {this.showRecipe(context)}
                      </select>
                    </div>
                    <div>
                      <label>Numero de personas</label>
                      <input min="1" onChange={this.handleInput} value={this.state.valueInput} type="number" placeholder="Numero de personas"></input>
                    </div>
                    <button disabled={defaultForm}> Agregar receta</button>
                  </form>

                </>

              )
            } else {
              return (<h3>Por favor selecciona un dia para ver que recetas tienes</h3>);
            }
          }}
        </MyContext.Consumer>

      </DayStyled>
    );
  }
}
