import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  margin-top: 10px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  tr {
    border-bottom: 1px solid black;
    display: flex;
    align-items: stretch;
  }

  td {
    width: 75px;
    min-height: 50px;
    div {

      p {
        font-weight: bolder;
      }
      .recipe-agenda {
        margin: 0;
        font-size: 0.7rem;
        width: 100%;
        background-color: ${props => props.theme.blue};
        color: white;
      }
    }
  }
  .today {
    border: 3px solid ${props => props.theme.red};
   
  }
  .selected {
    border: 3px solid #54d11f;
  }
  thead {
    background-color: ${props => props.theme.black};
    color: white;
 
    th {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      width: 75px;
      height: 50px;
      margin: 0;
      padding: 0;
    }
  }
  @media (max-width: 720px){
    tr, thead{
        width: 90vw;
        display: flex;
        td,tr {
            flex: 1;
            text-align: center;
        }
    }
  
    }
  
`;
