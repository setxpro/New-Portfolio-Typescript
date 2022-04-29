import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    /* background-color: ${props => props.theme.colors.main}; */
    color: ${props => props.theme.colors.text};
    
    display: grid;
    grid-template-rows: calc(7 * 1fr);
    gap: 1.5rem;

`;
