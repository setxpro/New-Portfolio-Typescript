import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    padding: 2rem;
    gap: 8px;
    width: 100%;

    button {
        background: ${props => props.theme.colors.widgetItem}; // Alter
        border-radius: 5px;
        padding: 1.25rem;
        width: 6rem;

        flex: 1;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border: 2px solid transparent;

        cursor: pointer;

        span {
            color: ${props => props.theme.colors.widgetText}; 
        }
        transition: all 1s ease;
        &:hover {
            border: 2px solid #8257e6;
        }
        &:focus {
            border: 2px solid #8257e6;
            outline: none;
        }
    }
`;

