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
    min-height: 75px;
    margin: 0;
    padding: 0;
    text-align: center;
    table-layout: fixed;
    div {
      p {
        font-weight: bolder;
      }
      .recipe-agenda {
        font-size: 0.6rem;
        display: block;
        width: 100%;
        background-color: ${props => props.theme.blue};
        border-top: 1px solid white;
      }
    }
  }
  .today {
    border: 3px solid ${props => props.theme.red};
    height: 100%;
    display: inline-block;
  }
  .selected {
    display: inline-block;
    border: 3px solid #54d11f;
    height: 100%;
  }
  thead {
    background-color: ${props => props.theme.black};
    color: white;
    tr {
      display: flex;
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
