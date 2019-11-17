import React from "react";
import { MyContext } from "../themes/theme-context"
import  MaterialUIPickers  from "./Datapicker";
import styled from  "styled-components"
import IngredientsList from "./IngredientsList"

import {Title} from "./styles/Title";

const ContainerDate = styled.div`
    display: flex;
    justify-content: center;
        * {
            margin: 5px;
        }
`

export default class ListShopping extends React.Component {


        componentDidMount(){
            let interval  = this.context.getDateInterval();
            if(interval !== {}){
                this.setState({
                    firstDate: interval.firstDate,
                    finalDate: interval.finalDate
                })

                this.searchRecipes();
            }
        }

    state = {
        firstDate: false,
        finalDate: false,
        recipes: []
    }
    changeFirstDate = (date) =>{
        let firstDate = date;
        this.setState({
            firstDate
        });
        let interval = this.context.getDateInterval();
        interval.firstDate = firstDate;
        this.context.putDateInterval(interval)


    }
    changeSecondDate = (date) => {
        let finalDate = date;
        this.setState({
            finalDate
        });
        let interval = this.context.getDateInterval();
        interval.finalDate = finalDate;
        this.context.putDateInterval(interval)

    }
    searchRecipes = () =>{
        let recipes = this.context.getRecipesAgenda();
        
        this.setState({
            recipes
        });
    }
    
    render(){
        return (
         <div> 
                        <Title>Selecciona un intervalo de fechas para generar una lista</Title>
             
                <ContainerDate>

                        <MaterialUIPickers title="Inicio" Date={this.state.firstDate} changeDate = {this.changeFirstDate} ></MaterialUIPickers>
                      {this.state.firstDate &&  <MaterialUIPickers title="Final" Date={this.state.finalDate} changeDate = {this.changeSecondDate} min={this.state.firstDate}></MaterialUIPickers>
                        }
                </ContainerDate>
         <MyContext.Consumer>
             {context =>(
                 <>
                    <div className="center">


                    </div>
                    <div>
                        {this.state.finalDate &&
                        <>
                        <Title> Ingredientes </Title> 
                        <IngredientsList
                            recipes={this.state.recipes}  firstDate={this.state.firstDate} finalDate={this.state.finalDate} />
                        </>
                        }
                   

                    </div>

                </>
             )}
        </MyContext.Consumer>

                       
        </div>
               
        )
    }
}
ListShopping.contextType = MyContext;