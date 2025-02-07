import styled from "styled-components";

export const DayStyled = styled.div`
width: 40%;
    span{
      cursor: pointer;
    }
    h3 {
      font-size: 1.5rem;
      text-align: center;
    }
    ul {
      li {
        list-style: none;
      }
    }
    p {
      font-weight: bolder;
    }
    
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
        div{
          width: 50%;
            label{
              display: block;
              font-weight: bolder;
              margin: 5px;
            }
        }
        button{
        
          color: #fff ;
          text-transform: uppercase;
          text-decoration: none;
          background-color: ${props => props.theme.orange};
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          border: none;
          transition: all 0.4s ease 0s;
              &:disabled {
                        background-color: ${props => props.theme.red};
                         }
          
        }
    }
    @media (max-width: 720px){
      margin-top: 10px;
      width: 100%;
      h3{
        font-size: 1.2rem;

      }
      ul{
        margin: 20px;
      }
      form{
        flex-direction: column;
              input, select {
                margin: 10px;
                border: 1px solid gray;
              }
      }
    }
`
