import styled from 'styled-components';

type TextProps = {
    bold?: boolean;
    tiny?: boolean;
    spaceBottom?: boolean;
    big?: boolean;
}

type DropProps = {
    show?: boolean;
}

export const CampaingCard = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Pill = styled.span`
    background-color: #DBEEFF;
    font-family: Inter;
    font-size: 14px;
    border-radius: 20px;
    color: #353535;
    padding: 2px 12px;
    font-weight: 700;
    margin-right: 5px;
`;

export const CampaingContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const TextCampaing = styled.p<TextProps>`
    color: #353535;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: ${props =>
        props.bold
          ? '700'
          : '400'
    };
    line-height: normal;
    margin: 0;

    @media (max-width: 70rem) {
        font-size: 16px;
    }
`;

export const Description = styled.span`
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    margin-top: 0px;
    color: #353535;
`;

export const DropContainer = styled.div<DropProps>`
    width: 100%;
    height: auto;
    display: ${props =>
        props.show
          ? 'flex'
          : 'none'
    };
    flex-direction: column;
    align-items: flex-start;
    transition: opacity 0.5s ease-in-out; 
`;

export const BtnContainer = styled.div<DropProps>`
    display: ${props =>
        props.show
          ? 'flex'
          : 'none'
    };
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    transition: opacity 0.5s ease-in-out; 
`;

export const DropItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
`;