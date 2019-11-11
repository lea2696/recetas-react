import React from "react";
import { MyContext } from "../themes/theme-context";
import styled from  "styled-components";

const DayStyled = styled.div`

    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    ul {
      li {
        list-style: none;
      }
    }
    form {
      display: flex;
        div{
          width: 40%;
        }
        button{
        
          color: #fff !important;
          text-transform: uppercase;
          text-decoration: none;
          background: #ed3330;
          padding: 20px;
          border-radius: 5px;
          display: inline-block;
          border: none;
          transition: all 0.4s ease 0s;

        }
    }
`


export default class DayDetails extends React.Component {

    addRecipe = () => {

    }

  render() {
    return (
      <DayStyled>

    <MyContext.Consumer>
        {context => 

           {  if (context.state.daySelected) {
            return (
              <DayStyled>
            <h3> Recetas para el  {context.state.daySelected.day} / {context.state.daySelected.month + 1} / {context.state.daySelected.year} </h3>
            <ul>
              <li>
                Receta 
              </li>
              <li>
                Receta 
              </li>
              <li>
                Receta 
              </li>
              <li>
                Receta 
              </li>
            </ul>

              <p> Agregar mas recetas </p>
              <form>
            
                <div>
                <label>Recetas</label>
                <select>
                  <option>Seleciona una receta</option>
                  <option>Receta </option>
                  <option>Receta </option>
                  <option>Receta </option>
                  <option>Receta </option>
                </select>
                </div>
                <div>
                <label>Numero de personas</label>
                <input type="number" placeholder="numero de personas"></input>
                </div>
              </form>

            </DayStyled>
              
            )
          } else {
            return (<h3>Por favor selecciona un dia para ver que recetas tienes</h3>);
          }}  }
      </MyContext.Consumer>
      
      </DayStyled>  
    );
  }
}
