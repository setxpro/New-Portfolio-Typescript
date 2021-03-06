import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100%; */
    width: 100%;
    background-color: ${props => props.theme.colors.main};
`;


export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
export const InputArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    input {
        padding: 10px;
        width: 50%;
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 1rem;
        outline: none;
        color: ${props => props.theme.colors.subText};
        background: transparent;
        font-size: 1rem;
    }   

`;
export const MenuArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;
export const Content = styled.div`
    /* height: 100%; */
    width: 95%;
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    gap: 1rem;

    @media (max-width: 1090px) and (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 810px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 610px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 490px) {
        grid-template-columns: 1fr;
        margin: auto;
        width: 100%;
        padding: 10px;
    }
`;
