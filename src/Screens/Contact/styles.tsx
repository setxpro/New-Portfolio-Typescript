import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.main};
    box-shadow: 2px 2px 15px #000;
    user-select: auto !important;
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

export const ContentAreaContact = styled.div`
    height: calc(100vh - 120px);
    display: flex;
    justify-content: space-between;

`;

export const ContentLeft = styled.div`
    width: 50%;
    height: 100%;
    padding: 1rem;
`;
export const ContentRight = styled.div`
    width: 50%;
    height: 100%;
    padding: 1rem;
    border-left: 1px dashed ${props => props.theme.colors.border};
`;
export const AreaTitle = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    h2 {
        text-align: center;
    }
`;