import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    color: ${props => props.theme.colors.text};
    
    display: grid;
    grid-template-rows: 1fr;
    gap: 1.5rem;

`;
