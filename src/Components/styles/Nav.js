import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  border-bottom: 5px solid ${props => props.theme.red};
  justify-content: space-between;
  align-items: baseline;

  h2 {
    display: inline-block;
    width: 30%;
    margin-left: 10px;
    a {
      text-decoration: none;
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      color: ${props => props.theme.black};
    }
  }
  ul {
    display: flex;
    width: 30%;
    li {
      font-size: 1.3rem;
      font-weight: bolder;
      list-style: none;
        a {
          text-decoration: none;
          
          color: ${props => props.theme.black}
        }
    }
  }
  @media (max-width: 720px){
    display: block;
    
      h2{
        display: block;
         width: 100%;
        margin: 0;
          a {
            display: block;
            text-align: center;
          }
      }
      ul{
        width: 100%;
        justify-content: center;
          li{
           flex: 1;
            display: block;
            text-align: center;
          }
      }
  }
`;
