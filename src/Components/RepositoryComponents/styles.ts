import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    

    > button {
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 8px;
        cursor: pointer;
        padding: 8px 15px;
        background: transparent;
        color: ${props => props.theme.colors.buttheme};
        transition: all .5s ease;
        font-size: 1rem;
        font-weight: bold;

        &.active {
            background: ${props => props.theme.colors.icons};
            color: ${props => props.theme.colors.button};
        }

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }
`;
