import React from "react";
import { Nav } from "../Components/styles/Nav";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <h2>
            <a href="/">Shopping Easy</a>
          </h2>
          <ul>
            <li>Calendario</li>
            <li>Lista</li>
            <li>Recetas</li>
          </ul>
        </Nav>
      </div>
    );
  }
}
