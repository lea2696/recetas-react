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
    showIngredients = () => {
      return this.state.ingredientsArray.map(
        (ingredients, index) =>(
        <div key={index}>
        <label>Nombre</label>
        <select value={this.state.ingredientsArray[index].name} onChange={(e)=>this.handleSelectName(e, index)}>
          <option value="default">
            Selecciona un ingrediente
          </option>
            {Ingredients.map(ingredient=>(
    <option key={ingredient} value={ingredient}>{ingredient}</option>
            ))}
        </select>
        <label>Cantidad</label>
        <input  type="number" value={this.state.ingredientsArray[index].amount} onChange={(e)=>this.handleInputAmount(e, index)}/>
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
            <textarea value={this.state.description} onChange={this.handleDescription} 
            placeholder="Descripcion de la receta(opcional)" />

         </form>
           </>
        )
    }
}