import styled from 'styled-components';

export const Container = styled.div`
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

export const ContentArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 810px) {
        grid-template-columns: 1fr 1fr;
    }

`;