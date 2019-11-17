import styled from "styled-components";

export const FormNewRecipe = styled.form`
    label[for=name], label {
        display: block;
        text-align: center;
        font-size: 1.4rem;
    }
    input#name{
        margin: 5px auto;
        display: block;
        min-width: 50vw;
        height: 30px;
    }
    p{
        font-weight: bolder;
        font-size: 1.2rem;
        margin: 20px 0px;
        text-align: center;
    }
    .ingredients{
        margin: 20px 0px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
            label{
                display: block;
                font-size: 1.2rem;
                font-weight: bolder;
            }
            input, select{
                margin: 5px;
                width: 200px
            }
            a{
                cursor: pointer;
                font-weight: bolder;
                transition: 0.2s;
            }
            a:hover{
                text-decoration: 1px 1px black;

            }
            .deleteIngredient {
                background-color: ${props => props.theme.orange};
                border: none;
                padding: 0px;
                color: white;
                height: 40px;
                padding: 5px;
                font-family: "Roboto", Arial, Helvetica, sans-serif;
                border-radius: 5px;
                &:hover{
                    background-color: ${props => props.theme.red}
                }

            }
    }
    textarea{
        display: block;
        width: 80vw;
        height: 10vh;
        border: 1px solid black;
        margin: 20px auto;
    }
    @media (max-width: 720px){
        input#name {
            width: 80vw;
            border: 1px solid gray;
        }
        .ingredients {
            padding: 20px;
            border-bottom: 1px solid gray;
            input, select {
                width: 70vw;
                height: 30px;
                margin: 10px;
            }

            .deleteIngredient{
                background-color: ${props => props.theme.red};
                width: 100px;
        }
    }
    }
`