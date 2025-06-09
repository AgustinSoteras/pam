import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
  secondary?: boolean;
  bold?: boolean;
};

export const Btn = styled.button<ButtonProps>`
  display: flex;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border: 1px solid #0f3063;
  align-self: stretch;
  color: ${(props) => (props.secondary ? "#0F3063" : "#FFFFFF")};
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "#DDDDDD" : "#0F3063")};
  background-color: ${(props) => (props.secondary ? "#FFFFFF" : "#0F3063")};
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  margin-top: ${(props) => (props.secondary ? "16px" : "0")};
  ${(props) => props.bold && `font-weight: bold;`}

  &:hover {
    filter: ${(props) =>
      props.secondary ? "brightness(0.9)" : "brightness(1.1)"};
  }

  @media (max-width: 70rem) {
    font-size: 16px;
  }
`;
