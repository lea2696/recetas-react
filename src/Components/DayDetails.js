import React from "react";
import { MyContext } from "../themes/theme-context";

export default class DayDetails extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => {
          if (context.state.daySelected) {
            return <p>El dia es {context.state.daySelected.day}</p>;
          } else {
            return <p>Por favor selecciona un dia</p>;
          }
        }}
      </MyContext.Consumer>
    );
  }
}
