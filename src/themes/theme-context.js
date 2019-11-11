import React from "react";

export const MyContext = React.createContext();

const recipes = [
  {
    name: "Hamburguesa de pollo",
    ingredients: [
      "Pan", "Salsas", "Pollo"
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de carne",
    ingredients: [
      "Pan", "Salsas", "Carne"
    ],
    description: "Hacerlo rico"
  },
  {
    name: "Hamburguesa de Cerdo",
    ingredients: [
      "Pan", "Salsas", "Cerdo"
    ],
    description: "Hacerlo rico"
  },
]

export default class MyProvider extends React.Component {
  state = {
    daySelected: false,
    recipes
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

              }


        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
