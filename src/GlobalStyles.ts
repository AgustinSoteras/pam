import styled from "styled-components";

type TextProps = {
  bold?: boolean;
  tiny?: boolean;
  spaceBottom?: boolean;
  big?: boolean;
  margin0?: boolean;
  margin?: string;
  fontSize?: string;
};

type ErrorProps = {
  isError?: boolean;
};

type InputProps = {
  margin0?: boolean;
  hasContent?: boolean;
  error?: boolean;
};

type PropsIcon = {
  paddingRight?: string;
};

type PropsTextSecondary = {
  fontSize?: string;
};

type PropsSelect = {
  hasContent?: boolean;
};

type PropsDataContainer = {
  fitContent?: boolean;
};

export const HeaderContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  width: 100%;
  margin-bottom: 5%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  bottom: 0;
  height: auto;
  margin-top: 15%;
`;

export const LogoFoot = styled.img`
  width: auto;
  height: 35px;
  margin: 30px;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`;

export const DataContainer = styled.div<PropsDataContainer>`
  ${(props) => (props.fitContent ? `width: fit-content;` : "min-width: 50%;")}
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
  user-select: none;
`;

export const Title = styled.p<TextProps>`
  color: #353535;
  text-align: center;
  font-family: Inter;
  font-size: ${(props) =>
    props.big ? "36px" : props.fontSize ? props.fontSize : "24px"};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: ${(val) => (val.margin ? val.margin : "0px")};

  @media (max-width: 70rem) {
    ${(props) => (props.big ? "20px" : "16px")};
  }
`;

export const Text = styled.p<TextProps>`
  color: #353535;
  text-align: center;
  font-family: Inter;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  line-height: normal;
  margin: 0;

  @media (max-width: 70rem) {
    font-size: 16px;
  }
`;

export const Label = styled.p<TextProps>`
  color: #353535;
  font-family: Inter;
  font-size: ${(props) => (props.tiny ? "14px" : "20px")};
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  line-height: normal;
  margin-bottom: ${(props) => (props.margin0 ? "0" : "8px")};
  margin-top: ${(props) =>
    props.margin ? props.margin : props.tiny ? "8px" : "0"};

  @media (max-width: 70rem) {
    font-size: ${(props) => (props.tiny ? "12px" : "16px")};
  }
`;

export const TextSecondary = styled.p<PropsTextSecondary>`
  color: #0f3063;
  font-family: Inter;
  font-size: ${(val) => (val.fontSize ? val.fontSize : "14px")};
  font-style: normal;
  font-weight: 600;
  margin: 0;
  cursor: pointer;

  @media (max-width: 40rem) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const ErrorText = styled.p<ErrorProps>`
  color: #e23131;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 70rem) {
    font-size: 14px;
  }
`;

export const Input = styled.input<InputProps>`
  display: flex;
  height: 20px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid
    ${(val) =>
      val.hasContent ? "#0E2F4BCC" : val.error ? "#E23131" : "#d9d9d9"};
  background: #fff;
  color: #353535;
  outline: none;
  font-size: 20px;

  &:focus {
    box-shadow: none;
  }
`;

export const Select = styled.select<PropsSelect>`
  height: 58px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid ${(val) => (val.hasContent ? "#0E2F4BCC" : "#d9d9d9")};
  background: #fff;
  outline: none;
  color: #353535;
  font-size: 16px;
`;

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: ${(props) => (props.margin0 ? "0" : "20px")};
`;

export const Logo = styled.img`
  width: auto;
  height: 60px;
  cursor: pointer;
`;

export const Icon = styled.img<PropsIcon>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: auto;
  padding-right: ${(val) => (val.paddingRight ? val.paddingRight : "5px")};
  cursor: pointer;
`;

export const Isotype = styled.img`
  width: 58px;
  height: 58px;
  margin-bottom: -35px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FileUploadLabel = styled.label`
  padding: 10px 16px;
  color: #0f3063;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 52px;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
`;

export const TextFileUploadLabel = styled.span`
  font-weight: bold;
`;

export const ContainerFileName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const IconTrash = styled.img`
  z-index: 1;
`;
