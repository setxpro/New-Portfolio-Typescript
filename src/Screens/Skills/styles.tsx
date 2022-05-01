import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding: 20px 0;
    background-color: ${props => props.theme.colors.main};
`;
export const Title = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;

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

export const ContentAreaSkills = styled.div`
    width: 100%;
    margin-top: 10rem;
`;