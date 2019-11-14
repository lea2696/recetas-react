import React from "react";
import { MyContext } from "../themes/theme-context"
import  MaterialUIPickers  from "./Datapicker";
import styled from  "styled-components"
import Button from '@material-ui/core/Button';

import {Title} from "./styles/Title";

const ContainerDate = styled.div`
    display: flex;
    justify-content: center;
        * {
            margin: 5px;
        }
`

export default class ListShopping extends React.Component {
    state = {
        firstDate: new Date(),
        finalDay: false,
        recipes: []
    }
    changeFirstDate = (date) =>{
        let firstDate = date;
        this.setState({
            firstDate
        })
    }
    changeSecondDate = (date) => {
        let finalDate = date;
        this.setState({
            finalDate
        })
    }
    searchRecipes = (context) =>{
        let recipes = context.getRecipesAgenda();
        
        this.setState({
            recipes
        });
        console.log(this.state.recipes)
    }
    
    render(){

            console.log(this.state.recipes)

        return (
         <div> 
                <Title>Selecciona un intervalo de fechas para generar una lista</Title>
                <ContainerDate>

             
                        <MaterialUIPickers title="Inicio" Date={this.state.firstDate} changeDate = {this.changeFirstDate} ></MaterialUIPickers>
                        <MaterialUIPickers title="Final" Date={this.state.finalDate} changeDate = {this.changeSecondDate} min={this.state.firstDate}></MaterialUIPickers>

                </ContainerDate>
         <MyContext.Consumer>
             {context =>(
                 <>
                    <div className="center">

                        <Button  color="secondary" variant="contained" onClick={()=>this.searchRecipes(context)}>Generar lista</Button>

                    </div>
                    <div>
                        {this.state.recipes[0] &&
                        <Title> Ingredientes </Title> }
                        <ul>
                            {this.state.recipes.map(element=>(
                                    <li>{element.recipe.name}</li>
                            ))}
                        </ul>

                    </div>

                </>
             )}
        </MyContext.Consumer>

                       
        </div>
               
        )
    }
}