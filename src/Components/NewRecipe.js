import React from "react";
import {MyContext} from "../themes/theme-context"

import { Title } from "./styles/Title";
import { Ingredients } from "../helpers/Ingredients"
import { FormNewRecipe } from "./styles/FormNewRecipe";
import { ButtonGroupDark } from "./styles/Button";

export default class NewRecipe extends React.Component{
    state ={
       name: "",
       ingredientsArray : [{
         name: "default",
         amount: "0",
         unit: "default"
       },{
        name: "default",
        amount: "0",
        unit: "default"
      },
      {
        name: "default",
        amount: "0",
        unit: "default"
      }, ],
      description: ""
    }

    handleName = (e) => {
          this.setState({
            name: e.target.value
          })
    }

    handleSelectName = (e, index) =>{
      let name = e.target.value;
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray[index].name = name
      this.setState({
          ingredientsArray
      })
    }
    handleSelectUnit = (e, index) =>{
      let unit = e.target.value;
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray[index].unit = unit
      this.setState({
          ingredientsArray
      })
    }
    handleInputAmount = (e, index) =>{
      let amount = e.target.value;
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray[index].amount = amount
      this.setState({
          ingredientsArray
      })
    }
    moreIngredients = () => {
      console.log(this.state.ingredientsArray)
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray.push({
        name: "default",
        amount: "0",
        unit: "default"
      });
          this.setState({
            ingredientsArray
          })
    }
    handleDescription = (e) =>{
      let description = e.target.value;
      this.setState({
        description
      })
    }
    deleteIngredient = (index) =>{
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray.splice(index, 1);
      this.setState({
        ingredientsArray
      });


    }
    handleSubmit = (e, context) =>{
      e.preventDefault();
      let recipe = {
        name: this.state.name,
        ingredients: [...this.state.ingredientsArray],
        description: this.state.description
      };

      context.addToListOfRecipe(recipe);
      this.setState({
          name: "",
          ingredientsArray : [{
            name: "default",
            amount: "0",
            unit: "default"
          },{
           name: "default",
           amount: "0",
           unit: "default"
         },
         {
           name: "default",
           amount: "0",
           unit: "default"
         }, ],
         description: ""
       
      })

    }
    showIngredients = () => {
      return this.state.ingredientsArray.map(
        (ingredients, index) =>(
        <div className="ingredients" key={index}>
          <div>
        <label>Nombre</label>
        <select value={this.state.ingredientsArray[index].name} onChange={(e)=>this.handleSelectName(e, index)}>
          <option value="default">
            Selecciona un ingrediente
          </option>
            {Ingredients.map(ingredient=>(
    <option key={ingredient} value={ingredient}>{ingredient}</option>
            ))}
        </select>
        </div>
        <div>
        <label>Cantidad</label>
        <input  type="number" value={this.state.ingredientsArray[index].amount} onChange={(e)=>this.handleInputAmount(e, index)}/>
        </div>
        <div>
          <label>Unidad</label>
        <select value={this.state.ingredientsArray[index].unit} onChange={(e)=>this.handleSelectUnit(e, index)}>
          <option value="default">
            Selecciona una unidad
          </option>
          <option value="g">
            g
          </option>
          <option value="Kg">
            Kg
          </option>
          <option value="mL">
            mL
          </option>
          <option value="L">
            L
          </option>
          <option value="unidad">Unidad</option>
        </select>
        </div>
        <a onClick = {()=>this.deleteIngredient(index)}> &times; </a>
        </div>
        )

      )

    }
    
      
    render(){
      let checkIngredient = true;
      let ingredients = [...this.state.ingredientsArray].forEach(ingredient =>{
        if(ingredient.name === "default" || ingredient.amount <= 0 || ingredient.unit ==="default"){
          checkIngredient = false
        }
      })
      let check = this.state.name.length !== 0 && checkIngredient;
        return (
           
            <MyContext.Consumer>
              { context => (
                <>
         <Title>Crear nueva receta</Title>
         <FormNewRecipe onSubmit={(e)=> this.handleSubmit(e, context)}>
           <label htmlFor="name">
             Nombre de la receta
           </label>
           <input  value={this.state.name} onChange={this.handleName}  type="text"  id="name" />
          <p>Ingredientes: </p>
          {this.showIngredients()}
            <ButtonGroupDark>

            <span  onClick = {this.moreIngredients}>Añadir mas ingredientes</span>

            </ButtonGroupDark>
            <label>Descripcion</label>
            <textarea value={this.state.description} onChange={this.handleDescription} 
            placeholder="Descripcion de la receta(opcional)" />
   
            <ButtonGroupDark>
              <button disabled={!check}>Agregar receta</button>
              <button>Volver</button>
            </ButtonGroupDark>
         </FormNewRecipe>
              </>
              )} 
            </MyContext.Consumer>
        )
    }
}