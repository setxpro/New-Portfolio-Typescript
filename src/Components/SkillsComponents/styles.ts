import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
    
    @media (max-width: 810px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 1rem;
    }

    @media (max-width: 543px) {
        flex-direction: column;
    }
    
    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
`;
