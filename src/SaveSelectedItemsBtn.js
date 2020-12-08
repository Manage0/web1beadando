import styled from "styled-components/macro";

const Button = styled.button`
  color: #000;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.color : "blue")};
  color: white;
  padding: 10px;
  border: 0px;
  margin: 5px;
  cursor: pointer;
  text-transform: capitalize;
  disabled: false;

  :hover {
    background: rgba(0, 0, 255, 0.5);
  }
`;

export default Button;