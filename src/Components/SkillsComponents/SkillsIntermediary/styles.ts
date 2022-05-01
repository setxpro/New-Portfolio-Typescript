import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    border-right: 1px dashed ${props => props.theme.colors.border};
    @media (max-width: 810px) {
        width: 50%;
        border: none;
    }
    @media (max-width: 543px) {
        width: 100%;
    }
    
`;
export const AreaIcon = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   gap: 2rem;
   margin-right: 40px;
   @media (max-width: 543px) {
    margin: auto;
   }
    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
`;
