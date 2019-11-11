import React from "react";
import { MyContext } from "../themes/theme-context";

export default class Day extends React.Component {
  componentDidMount() {}
  showDay = () => {
    console.log(this.props);
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <td onClick={() => context.changeDay(this.props.date)}>
            <p>{this.props.date.day || " "}</p>
          </td>
        )}
      </MyContext.Consumer>
    );
  }
}
