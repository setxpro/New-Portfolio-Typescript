import styled from 'styled-components';

export const Container = styled.div`
    width: 360px;
    height: 315px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: auto;
    margin-top: 2rem;
    padding: 5px;
    background: ${props => props.theme.colors.cards};

    border-radius: 1rem;
    cursor: pointer;

    transition: all 1s ease;

    &:hover {
        background: ${props => props.theme.colors.icons};
        color: ${props => props.theme.colors.text};
    }

    p {
        font-size: 19px;
        text-align: center;
    }
`;
