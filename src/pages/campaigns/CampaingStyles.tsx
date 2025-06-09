import styled from "styled-components";

type TextProps = {
  bold?: boolean;
  tiny?: boolean;
  spaceBottom?: boolean;
  big?: boolean;
};

type ShowProps = {
  show?: boolean;
};

type PillProps = {
  status?: string;
};

export const CampaingCard = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
`;

export const ClientCard = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

export const CampaingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  min-height: auto;
  padding-top: 60px;
`;

export const TextCampaing = styled.p<TextProps>`
  color: #353535;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media (max-width: 70rem) {
    font-size: 16px;
  }
`;

export const Description = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  color: #353535;
`;

export const MoreInfo = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  color: #00b8e0;
  cursor: pointer;
  text-decoration: underline;
`;

export const DropContainer = styled.div<ShowProps>`
  width: 100%;
  height: auto;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  transition: opacity 0.5s ease-in-out;
  gap: 16px;
`;

export const BtnContainer = styled.div<ShowProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  transition: opacity 0.5s ease-in-out;
  gap: 16px;
`;

export const DropItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ClientContainer = styled.div<ShowProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const Pill = styled.span<PillProps>`
  background-color: ${(props) => {
    if (
      props.status === "En proceso" ||
      props.status === "En revisión de datos"
    )
      return "#DBEEFF";
    if (props.status === "Pendiente") return "#FFFEDD";
    if (props.status === "Observada") return "#FFCFCC";
    if (props.status === "Finalizada") return "#DEFFDF";
  }};
  font-size: 12px;
  border-radius: 20px;
  color: ${(props) => {
    if (
      props.status === "En proceso" ||
      props.status === "En revisión de datos"
    )
      return "#002A4D";
    if (props.status === "Pendiente") return "#B9B100";
    if (props.status === "Observada") return "#9D3939";
    if (props.status === "Finalizada") return "#357935";
  }};
  padding: 2px 12px;
  font-weight: 700;
  margin-right: 5px;
  cursor: pointer;
  user-select: none;
`;

export const TextFile = styled.p<TextProps>`
  color: #0f3063;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  text-decoration: underline;

  @media (max-width: 70rem) {
    font-size: 12px;
  }
`;

export const UploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  padding: 32px 0 0 0;
  cursor: pointer;
`;
