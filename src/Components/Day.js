import React from "react";
import { MyContext } from "../themes/theme-context";

export default class Day extends React.Component {
  state = {
    isToday: false,
    isSelected: false
  }


  selectDay = (context) => {
      context.changeDay(this.props.date);
    
  };

  render() {
    
    return (
      <MyContext.Consumer>
        {context => {
         let check =  JSON.stringify(context.state.daySelected) === JSON.stringify(this.props.date); 
         let isToday = false;
         const date = new Date();
         const day = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();
        if(day === this.props.date.day && month === this.props.date.month && year === this.props.date.year){
          isToday = true;
        }
           
          return(
          <td className = {`${isToday ? "today" : ""} ${check ? "selected"  : ""}`}  onClick={() => this.selectDay(context)}>
            <p>{this.props.date.day || " "}</p>
          </td>
        )}}
      </MyContext.Consumer>
    );
  }
}

