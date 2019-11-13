import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  button {
    text-align: center;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: ${props => props.theme.orange};
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.2s ease 0s;
    &:hover {
      background: ${props => props.theme.red};
      letter-spacing: 1px;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
      transition: all 0.4s ease 0s;
    }
  }
`;
