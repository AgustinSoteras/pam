import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
  secondary?: boolean;
};

export const Btn = styled.button<ButtonProps>`
  display: flex;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.secondary ? "1px solid #00B8E0" : "none")};
  align-self: stretch;
  color: ${(props) => (props.secondary ? "#00B8E0" : "#FFFFFF")};
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "#DDDDDD" : "#00B8E0")};
  background-color: ${(props) => (props.secondary ? "#FFFFFF" : "#00B8E0")};
  font-size: 18px;
  border: none;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  margin-top: ${(props) => (props.secondary ? "16px" : "0")};

  &:hover {
    filter: ${(props) =>
      props.secondary ? "brightness(0.9)" : "brightness(1.1)"};
  }

  @media (max-width: 70rem) {
    font-size: 16px;
  }
`;
