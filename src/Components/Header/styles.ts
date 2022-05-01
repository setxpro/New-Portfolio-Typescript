import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';



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

    z-index: 99;

    @media (max-width: 1080px) and (min-width: 900px) {
        background-color:${props => props.theme.colors.navbar};
    }
    @media (max-width: 810px) {
        background-color:${props => props.theme.colors.navbar};
    }

   
`;
export const Nav = styled.nav`

    @media (max-width: 1080px) and (min-width: 900px) {
        display: none;
    }
    @media (max-width: 810px) {
        display: none;
    }

    ul {
        display: flex;
        gap: 1.5rem;
            a {
                text-decoration: none;
                font-size: 1.2em;
                color: #FFF;

                li {
                    list-style: none;
                    padding: 5px;
                    border-radius: 8px;
            
                }
            }
        
        
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    @media (max-width: 1080px) and (min-width: 900px) {
        display: block;
    }

    @media (max-width: 810px) {
        display: block;
    }

    color: #FFF;
    cursor: pointer;
    font-size: 22px;
`;

export const MenuMobileArea = styled.nav`
    @media (max-width: 1080px) and (min-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`;

export const NavMobile = styled.nav<{openMenu: boolean}>`
    display: none;
    @media (max-width: 1080px) and (min-width: 900px) {
            transition: all .3s ease;
            width: ${props => props.openMenu ? '200px' : '0px'};
            height: ${props => props.openMenu ? '500px' : '0px'};
            opacity: ${props => props.openMenu ? '1' : '0'};
            padding: 1rem;
            display: block;
            position: absolute;
            margin-top: 37px;
            left: 0;
            background: ${props => props.theme.colors.cards};

            ul {
                
                a {
                    display: ${props => props.openMenu ? 'block' : 'none'};
                    opacity: ${props => props.openMenu ? '1' : '0'};
                    animation-delay: 1s;
                    transition: all .5s ease;
                    li {
                        transition: all .5s ease;
                        padding: 1rem;
                        border-radius: 1rem;
                        transition: all 1s ease;

                    &:hover {
                        background: rgba(0, 0, 255, 0.2);
                    }

                    }
                    
                }
            }
    }

    @media (max-width: 810px) {
        transition: all .3s ease;
            width: ${props => props.openMenu ? '200px' : '0px'};
            height: ${props => props.openMenu ? '500px' : '0px'};
            opacity: ${props => props.openMenu ? '1' : '0'};
            padding: 1rem;
            display: block;
            position: absolute;
            margin-top: 16px;
            left: 0;
            background: ${props => props.theme.colors.cards};

            ul {
                
                a {
                    display: ${props => props.openMenu ? 'block' : 'none'};
                    opacity: ${props => props.openMenu ? '1' : '0'};
                    animation-delay: 1s;
                    transition: all .5s ease;
                    li {
                        transition: all .5s ease;
                        padding: 1rem;
                        border-radius: 1rem;
                        transition: all 1s ease;

                    &:hover {
                        background: rgba(0, 0, 255, 0.2);
                    }

                    }
                    
                }
            }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
            a {
                text-decoration: none;
                li {
                    list-style: none;
                    color: ${props => props.theme.colors.subText};
                }
        }
    }
`;