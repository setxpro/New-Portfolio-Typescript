import styled from 'styled-components';

import { BsWhatsapp } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BiCurrentLocation } from 'react-icons/bi';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
        width: 10px;
        height: 2px;
        background: ${props => props.theme.colors.icons};
    }

    h4 {
        color: #6c7293;
        
        a {
            color: #6c7293;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;


export const Wapp = styled(BsWhatsapp)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Github = styled(AiFillGithub)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Instagram = styled(AiOutlineInstagram)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Linkedin = styled(AiOutlineLinkedin)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Facebook = styled(AiOutlineFacebook)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Gmail = styled(SiGmail)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;
export const Location = styled(BiCurrentLocation)`
    font-size: 2rem;
    color: ${props => props.theme.colors.icons};
`;