import React from "react";
import Calendar from "./Calendar";
import DayDetails from "./DayDetails";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-around;
  table {
    width: 50%;
  };
  
 
`;

export default class Agenda extends React.Component {
  render() {
    return (
      <FlexDiv>
        <Calendar />
        <DayDetails />
      </FlexDiv>
    );
  }
}
