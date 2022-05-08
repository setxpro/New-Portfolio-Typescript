import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.widget.surfacePrimary};
    padding: 1rem;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 1px 5px ${props => props.theme.colors.cards};
    width: calc(100vw-2rem); // OBS

    header {

        span {
            color: ${props => props.theme.widget.textPrimary}; 
        }

    }

    footer {
        a {
            text-decoration: underline;
            text-underline-offset: 4px;
            color: ${props => props.theme.widget.textPrimary};
            font-size: 12px;
        }
    }
`;

