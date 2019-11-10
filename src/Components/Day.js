import React from "react";

export default class Day extends React.Component {
  render() {
    return (
      <td>
        <p>{this.props.day || " "}</p>
      </td>
    );
  }
}
