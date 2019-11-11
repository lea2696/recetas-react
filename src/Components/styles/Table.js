import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 30px;
  border-spacing: 0px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
    tr {
      border-bottom: 1px solid black;
    }
  
  td {
    display: inline-block;
    width: 75px;
    height: 75px;
    margin: 0;
    padding: 0;
    text-align: center;
     
    p {
      text-align: center;
      font-weight: bolder;
    }
  }
  .today{
        border: 3px solid #6882e8;
        box-sizing: border-box;
      }
  .selected{
    border: 3px solid #54d11f;
    box-sizing: border-box;
  }
  thead { 
    background-color: ${props => props.theme.blue};
    color: white;
    tr {
      display: flex;
      border: 2px solid #17329b;
    }
    th {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      width: 75px;
      height: 75px;
      margin: 0;
      padding: 0;
    }
  }
`;
