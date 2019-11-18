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
      text-decoration: underline;
    }
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
        div{
          width: 50%;
            label{
              display: block;
            }
        }
        button{
        
          color: #fff !important;
          text-transform: uppercase;
          text-decoration: none;
          background: #ed3330;
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          border: none;
          transition: all 0.4s ease 0s;
          
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
    }
`
