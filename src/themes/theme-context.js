import React from "react";

export const MyContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    daySelected: false
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeDay: newDate => this.setState({ daySelected: newDate })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
