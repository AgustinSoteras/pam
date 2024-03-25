import styled from 'styled-components';

type ButtonProps = {
    disabled?: boolean;
    secondary?: boolean;
}

export const Btn = styled.button<ButtonProps>`
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    height: 38px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border: ${props =>
            props.secondary
            ? '1px solid #00B8E0!important'
            : 'none'};
    align-self: stretch;
    color: ${props =>
            props.secondary
            ? '#00B8E0'
            : '#FFFFFF'};
    border-radius: 20px;
    background: ${props =>
        props.disabled
          ? '#DDDDDD'
          : '#00B8E0'};
    background-color: ${props =>
            props.secondary
            ? '#FFFFFF'
            : '#00B8E0'};
    font-size: 18px;
    border: none;
    cursor: ${props =>
        props.disabled
          ? 'initial'
          : 'pointer'};

    margin-top: ${props =>
            props.secondary
            ? '16px'
            : '0'};

    &:hover {
        background-color: ${props =>
            props.secondary
            ? '#F1F1F1F1'
            : '#00B0E0'};
    }

    @media (max-width: 70rem) {
        font-size: 16px;
    }
`;