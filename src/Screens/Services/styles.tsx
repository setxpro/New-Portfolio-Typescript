import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 60px 0;
    background-color: ${props => props.theme.colors.main};
    box-shadow: 30px 50px 100px #000;
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
`;