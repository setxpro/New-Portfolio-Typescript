import styled from 'styled-components';

export const Container = styled.div<{disappearHeader: boolean}>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    background-color: ${props => props.disappearHeader ? props.theme.colors.navbar : 'transparent'};
    
    transition: all 1s ease;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;
export const Nav = styled.nav`
    ul {
        display: flex;
        gap: 1.5rem;
        
        li {
            list-style: none;
            padding: 5px;
            border-radius: 8px;
            
            a {
                text-decoration: none;
                font-size: 1.2em;
                color: ${props => props.theme.colors.text};
                transition: all 0.5s ease;

                &:hover {
                    color: #444ddd;
                }
            }
        }
    }
`;
