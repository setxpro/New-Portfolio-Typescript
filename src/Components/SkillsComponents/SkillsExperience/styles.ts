import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    border-right: 1px dashed ${props => props.theme.colors.border};
    @media (max-width: 810px) {
        width: 40%;
    }
    @media (max-width: 543px) {
        width: 100%;
        border: none;
    }
`;
export const AreaIcon = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 1rem;
   padding: .5rem;
   margin-right: 40px;

   @media (max-width: 543px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
   }
    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;

        p {
           
           font-size: 1rem;
        }
    }
`;
