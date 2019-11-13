import React from "react";

export const MyContext = React.createContext();


const recipes = [
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      },
      {
        name: "Salsas",
        amount: "2",
        unit: "unidad"
      },
      {
        name: "Pollo",
        amount: "200",
        unit: "gr"
      },
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      }
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      }
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      }
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      }
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      {
        name: "Pan",
        amount: "2",
        unit: "unidad"
      }
    ],
    description: "Hacerlo rico"
  },
 
]

export default class MyProvider extends React.Component {
  state = {
    daySelected: false,
    recipes,
    recipesAgenda: [{}],
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
          }


        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
