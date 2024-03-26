import styled from 'styled-components';

type TextProps = {
    bold?: boolean;
    tiny?: boolean;
    spaceBottom?: boolean;
    big?: boolean;
}

type ContainerProps = {
    end?: boolean;
    fullWidth?: boolean;
}

type ErrorProps = {
    isError?: boolean;
}

export const HeaderContainer = styled.div`
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    width: 100%;
    margin-bottom: 5%;
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    bottom: 0;
    height: auto;
    margin-top: 15%;
`

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

export const DataContainer = styled.div<ContainerProps>`
    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width:  ${props =>
        props.fullWidth
          ? '80%'
          : '40%'
        };
    height: auto;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 40px;
`;

export const Title = styled.p<TextProps>`
    color: #353535;
    text-align: center;
    font-family: Inter;
    font-size: ${props =>
        props.big
          ? '36px'
          : '24px'
        };
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 0;
    margin-bottom: ${props =>
        props.spaceBottom
          ? '0px'
          : '32px'};

    @media (max-width: 70rem) {
        ${props =>
        props.big
          ? '20px'
          : '16px'
        };
    }
`;

export const Text = styled.p<TextProps>`
    color: #353535;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
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

export const Label = styled.p<TextProps>`
    color: #353535;
    font-family: Inter;
    font-size: ${props =>
        props.tiny
          ? '14px'
          : '18px'};
    font-style: normal;
    font-weight: ${props =>
        props.bold
          ? '700'
          : '400'};
    line-height: normal;
    margin-bottom: 8px;
    margin-top: ${props =>
        props.tiny
          ? '8px'
          : '0'};

    @media (max-width: 70rem) {
        font-size: ${props =>
        props.tiny
          ? '12px'
          : '16px'};
    }
`;

export const TextSecondary = styled.p`
    color: #00B8E0;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    margin: 0;
    cursor: pointer;

    @media (max-width: 70rem) {
        font-size: 12px;
    }
`;

export const ErrorText = styled.p<ErrorProps>`
    color: #FF7970;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    display: ${props =>
        props.isError
          ? 'block'
          : 'none'};;

    @media (max-width: 70rem) {
        font-size: 14px;
    }
`;

export const Input = styled.input`
    display: flex;
    height: 28px;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 20px;
    border: '1px solid #D9D9D9';
    background: #FFF;
    color: #353535;
`;

export const Select = styled.select`
    display: flex;
    height: 46px;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 20px;
    border: 1px solid #D9D9D9;
    background: #FFF;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: auto;
`;

export const Logo = styled.img`
  width: auto;
  height: 60px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: auto;
  height: 24px;
  padding-right: 5px;
  cursor: pointer;
`;

export const Isotype = styled.img`
  width: auto;
  height: 40px;
  margin-bottom: -40px 
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

export const Column = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: ${props =>
        props.end
          ? 'flex-end'
          : 'center'};
`;