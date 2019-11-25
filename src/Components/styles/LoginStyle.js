import styled from "styled-components";

export const BodyContainer = styled.div`
    height: 70vh;
    overflow: hidden;
    background-image: linear-gradient(to  bottom,#feac1740 ,rgba(255, 255, 255, 0.6));

`;
export const LoginContainer = styled.div`   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: white;
    padding: 20px 40px 40px 40px;
     box-shadow: 0 0 5px #808080;
        h2 {
            text-align: center;
            font-weight: bolder;
            font-family: "Roboto", Arial, Helvetica, sans-serif;
        }
        form {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
                label{
                    margin: 10px;
                    display: block;
                    text-align: center;
                }
                input {
                    border: 1px solid gray;
                    height: 25px;
                }
        }
                button{
                    display: block;
                    width: 100%;
                    background-color: #75cf38;
                    color: white;
                    margin-top: 20px;
                    font-size: 1.2rem;
                    border: none;
                    padding: 5px;

                     a {
                         color: white;
                         text-decoration: none;
                     }

                    &:disabled {
                        background-color: #adee9d;
                    }

        }
        p{  position: absolute;
        bottom: 10px;
            font-size: 0.8rem;
            a {
                color: black;
            }
                
        }
`