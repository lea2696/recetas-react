import React from "react";
import { Nav } from "../Components/styles/Nav";
import  { Link } from "react-router-dom"

export default class Header extends React.Component {
  render() {
    // if(this.props.showNav){

    
    return (
      <div>
        <Nav>
          <h2>
           <Link to="/">
             Easy Shopping
           </Link>
          </h2>
          <ul>
              <li>
                
            <Link to="/agenda">
              Agenda
            </Link>

              </li>
            <li>

            <Link to="/lista">
              Lista
            </Link>

            </li>
            <li>

        <Link to = "/recetas">
          Recetas
        </Link>
            </li>
          </ul>
        </Nav>
      </div>
    );
  // } else{
  //   return  <Nav>
  //     <h2>
  //       <Link to="/">
  //            Shopping Easy
  //          </Link>
  //          </h2>
  //   </Nav>
  // }
}
}
