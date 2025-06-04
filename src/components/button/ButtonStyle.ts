import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
  secondary?: boolean;
};

export const Btn = styled.button<ButtonProps>`
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 38px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: ${(props) =>
    props.secondary ? "1px solid #0F3063!important" : "none"};
  align-self: stretch;
  color: ${(props) => (props.secondary ? "#0F3063" : "#FFFFFF")};
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "#DDDDDD" : "#0F3063")};
  background-color: ${(props) => (props.secondary ? "#FFFFFF" : "#0F3063")};
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
