import React from "react";

export const myContext = React.createContext();

export default class MyProvider extends React.Component {
  state = {
    name: "Luis",
    age: 23
  };
  render() {
    return (
      <myContext.Provider
        value={{
          state: this.state,
          changeAge: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </myContext.Provider>
    );
  }
}
