import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 30px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;

  td {
    border-bottom: 1px solid black;
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    text-align: center;
    p {
      text-align: center;
      font-weight: bolder;
    }
  }
  thead {
    border-bottom: 1px solid black;
    background-color: #6882e8;
    color: white;
    tr {
      display: flex;
      border: 2px solid #17329b;
    }
    th {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      margin: 0;
      padding: 0;
    }
  }
`;
