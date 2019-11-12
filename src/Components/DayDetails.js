import React from "react";
import { MyContext } from "../themes/theme-context";
import styled from "styled-components";

const DayStyled = styled.div`
width: 40%;

    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    ul {
      li {
        list-style: none;
      }
    }
    p {
      font-weight: bolder;
      text-decoration: underline;
    }
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
        div{
          width: 50%;
            label{
              display: block;
            }
        }
        button{
        
          color: #fff !important;
          text-transform: uppercase;
          text-decoration: none;
          background: #ed3330;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          border: none;
          transition: all 0.4s ease 0s;
          
        }
    }
`


export default class DayDetails extends React.Component {
  state = {
    valueInput: "",
    valueSelect: "default",
  }

  showRecipe = (context) => {
    return context.state.recipes.map((recipe, index) => (

      <option key = {index} value={recipe.name}>{recipe.name}</option>
    ))
  }
  addRecipe = (e, context) => {
    e.preventDefault();
    let recipe = {
      day: context.state.daySelected,
      recipe: {
        name: this.state.valueSelect,
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
    })

  }
  showRecipes = (context) => {
   return context.state.recipesAgenda.filter( recipe => JSON.stringify(recipe.day) === JSON.stringify(context.state.daySelected)
    ).map(
      (recipe, i )=> <li key={i} >{recipe.recipe.name}</li>
    )
 

  
  }
  handleInput = (event)=>{
    this.setState({
      valueInput: event.target.value
    })
  }

  render() {
    return (
      <DayStyled>

        <MyContext.Consumer>
          {context => {
            if (context.state.daySelected) {
              return (
                <>
                  <h3> Recetas para el  {context.state.daySelected.day} / {context.state.daySelected.month + 1} / {context.state.daySelected.year} </h3>
                  <ul>
                    {this.showRecipes(context) }
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
                      <input onChange={this.handleInput} value={this.state.valueInput} type="number" placeholder="Numero de personas"></input>
                    </div>
                    <button> Agregar receta</button>
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
