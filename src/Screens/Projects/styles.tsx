import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100vh; */
    width: 100%;
    padding: 60px 0;
    background-color: ${props => props.theme.colors.main};
`;

export const Title = styled.div`
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;

    h1 {
        margin-top: 3.5rem;
        font-size: 2rem;
       
    }

    span {
        width: 15%;
        border: 2px solid ${props => props.theme.colors.border};
        background: ${props => props.theme.colors.border};
    }
`;

export const Content = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 1090px) and (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
       
    }
    @media (max-width: 810px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 610px) {
        grid-template-columns: 1fr;
    }
`;