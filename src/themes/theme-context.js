import React from "react";
import { recipes } from "../helpers/RecipesData"; 
export const MyContext = React.createContext();




export default class MyProvider extends React.Component {
  state = {
    daySelected: false,
    recipes,
    recipesAgenda: [],
    dateInterval: {}
  };
  componentDidMount(){
    let status = JSON.parse(localStorage.getItem("status"));
    this.setState({
      recipes : status.recipes,
      recipesAgenda: status.recipesAgenda
    })

  }
  componentDidUpdate(){
    let state = {
      recipes:  this.state.recipes,
      recipesAgenda: this.state.recipesAgenda
    }
    localStorage.setItem("status", JSON.stringify(state));

  } 
  
    render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeDay: newDate => {

              if(newDate === this.state.daySelected){
                this.setState({
                  daySelected: false
                })
              } else{

                this.setState({ daySelected: newDate }) }

              },
          addRecipe: recipe => {
              let recipesAgenda =[...this.state.recipesAgenda];
              recipesAgenda.push(recipe);
              this.setState({
                recipesAgenda
              })
          },
          deleteRecipe: recipes => {
            this.setState({
              recipesAgenda: recipes
            })
          },
          addToListOfRecipe: recipe => {
            let recipes = [...this.state.recipes];
            recipes.push(recipe);
            this.setState({
              recipes
            })
          },
          getRecipesAgenda: () => {
            return [...this.state.recipesAgenda];
          },
          putDateInterval: (interval) =>{
              this.setState({
                dateInterval: interval
              })
          },
          getDateInterval: ()=>(
            {...this.state.dateInterval}
          )


        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
