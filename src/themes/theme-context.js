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
