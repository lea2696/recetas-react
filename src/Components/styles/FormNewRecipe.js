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
        margin-left: 20px;
    }
    .ingredients{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
            label{
                display: block;
                font-size: 1.2rem;
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
    }
    textarea{
        display: block;
        width: 80vw;
        height: 10vh;
        border: 1px solid black;
        margin: 20px auto;
    }
    @media (max-width: 720px){
        input {
            width: 80vw;
        }
    }
`