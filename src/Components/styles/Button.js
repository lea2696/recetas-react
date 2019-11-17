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
export const ButtonGroupDark = styled.div`
display: flex;
justify-content: center;
button, span {
    text-align: center;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.2s ease 0s;
    a {
      color: white;
      text-decoration: none;
    }
    &:enabled:hover {
      letter-spacing: 1px;
      color: white;
      -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
      box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
      transition: all 0.4s ease 0s;
    }

}
    .success {
      background-color: ${props => props.theme.blue}
    }
    .danger{
      background-color: ${props => props.theme.red}
    }
    .add {
      background-color: ${props => props.theme.green};
    }
`
