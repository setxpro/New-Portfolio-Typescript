import styled from 'styled-components';

export const Container = styled.form<{mode: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    > input {
        width: 95%;
        padding: 10px;
        outline: none;
        font-size: 1rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme.colors.icons};
        background: transparent;
        color: #6c7293;
    }

    textarea {
        width: 95%;
        resize: none;
        outline: none;
        background: transparent;
        border: 1px solid ${props => props.theme.colors.icons};
        border-radius: 1rem;
        padding: .5rem;
        font-size: 1rem;
        color: #6c7293;
    }

    button {
        width: 150px;
        padding: 10px;
        cursor: pointer;
        border-radius: 8px;
        background: ${props => props.mode ? 'gray' : 'transparent'};
        color:  ${props => props.mode ? 'darkgray' : props.theme.colors.icons};
        font-weight: 800;
        border: 1px solid ${props => props.theme.colors.icons}; 
       
    }

    h2 {
        color: ${props => props.theme.colors.icons};
    }
`;
