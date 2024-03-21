import styled from 'styled-components';

type ButtonProps = {
    disabled?: boolean;  
}

export const Btn = styled.button<ButtonProps>`
    display: flex;
    height: 46px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    align-self: stretch;
    color: white;
    border-radius: 20px;
    background: ${props =>
        props.disabled
          ? '#DDDDDD'
          : '#00B8E0'};
    font-size: 18px;
    border: none;
    cursor: ${props =>
        props.disabled
          ? 'initial'
          : 'pointer'};

    @media (max-width: 70rem) {
        font-size: 16px;
    }
`;