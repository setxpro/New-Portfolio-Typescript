import styled from 'styled-components';

export const Container = styled.div`
    width: 360px;
    height: 315px;

    @media (max-width: 1080px) and (min-width: 900px) {
        width: 320px;
    }
    @media (max-width: 778px) {
        width: 320px;
    }
    @media (max-width: 490px) {
        width: 390px;
    }
    @media (max-width: 394px) {
        width: 350px;
    }

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
