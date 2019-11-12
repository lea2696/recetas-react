import React from "react";
import { Title } from "./styles/Title";
import { Ingredients } from "../helpers/Ingredients"

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
      }, ]
    }

    handleName = (e) => {
          this.setState({
            name: e.target.value
          })
    }
    moreIngredients = () => {
      console.log(this.state.ingredientsArray)
      let ingredientsArray = [...this.state.ingredientsArray];
      ingredientsArray.push({
        name: "default",
        amount: "0",
        unit: "default"
      },)
          this.setState({
            ingredientsArray
          })
    }
    showIngredients = () => {
      return this.state.ingredientsArray.map(
        (ingredients, index) =>(
        <div>
        <label>Nombre</label>
        <select value={this.state.ingredientsArray[index].name}>
          <option value="default">
            Selecciona un ingrediente
          </option>
            {Ingredients.map(ingredient=>(
    <option value={ingredient}>{ingredient}</option>
            ))}
        </select>
        <label>Cantidad</label>
        <input  type="number" value={this.state.ingredientsArray[index].amount}></input>
          <label>Unidad</label>
        <select value={this.state.ingredientsArray[index].unit}>
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
        )

      )

    }
    
      
    render(){
        return (
           <>
         <Title>Crear nueva receta</Title>
         <form>
           <label>
             Nombre de la receta
           </label>
           <input value={this.state.name} onChange={this.handleName}  type="text"  id="name" />
          <p>Ingredientes: </p>
          {this.showIngredients()}
            <span onClick = {this.moreIngredients}>+</span>
         </form>
           </>
        )
    }
}