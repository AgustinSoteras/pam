import styled from "styled-components";

type PropsSelectButton = {
  hasContent?: boolean;
};

export const ContainerSelect = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const SelectButton = styled.button<PropsSelectButton>`
  all: unset;
  display: flex;
  height: 20px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid ${(val) => (val.hasContent ? "#0E2F4BCC" : "#d9d9d9")};
  background: #fff;
  color: #353535;
  outline: none;
  font-size: 20px;
  width: 100%;

  &:focus {
    box-shadow: none;
  }
`;

export const SelectOption = styled.p``;

export const ContainerOptions = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0px 8px 15px 0px rgba(0, 42, 77, 0.25);
  flex-direction: column;
  top: 100%;
`;

export const ButtonOption = styled.button`
  all: unset;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

export const Option = styled.span`
  color: #353535;
  font-size: 20px;
  padding-left: 16px;
`;
