import styled from 'styled-components';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';
import { BsCodeSlash } from 'react-icons/bs';
import { ImMobile } from 'react-icons/im';


import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaNodeJs } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';


export const ArrowGoHome = styled(BsFillArrowUpSquareFill)<{disappearHeader: boolean}>`
    position: fixed;
    bottom: 20px;
    right: 20px;

    opacity: ${props => props.disappearHeader ? '1' : '0'};

    color: #44DD;
    font-size: 50px;
    cursor: pointer;

    animation: jump 1s both ease;
    transition: all 1s ease;
    @keyframes jump {
        0% {
            transform: rotate(10deg);
        }
        25% {
            transform: rotate(20deg);
        }
        50% {
            transform: rotate(-20deg);
        }
        75% {
            transform: rotate(10deg);
        }
    }
`;

export const ScreenIcon = styled(CgScreen)`
    font-size: 8em;
    color: ${props => props.theme.colors.text};

`;
export const CodeIcon = styled(BsCodeSlash)`
    font-size: 8em;
    color: ${props => props.theme.colors.text};
`;
export const MobileIcon = styled(ImMobile)`
    font-size: 8em;
    color: ${props => props.theme.colors.text};
`;

// Icons to Skills

export const HTMLIcon = styled(AiFillHtml5)`
    font-size: 2.3em;
    color: #f7a000;
`;
export const CssIcon = styled(DiCss3)`
    font-size: 2.3em;
    color: #00f;
`;
export const ReactI = styled(FaReact)`
    font-size: 2.3em;
    color: #00aae3;
`;
export const JavaScriptIcon = styled(SiJavascript)`
    font-size: 2.3em;
    color: #FF0;
`;
export const StyledComponentsIcon = styled(SiStyledcomponents)`
    font-size: 3em;
    color: ${props => props.theme.colors.icons};
`;
export const TypescriptIcon = styled(SiTypescript)`
    font-size: 2.3em;
    color: #00f;
`;

export const NextJSIcon = styled(SiNextdotjs)`
    font-size: 2.3em;
    color: #000;
`;
export const SassIcon = styled(IoLogoSass)`
    font-size: 2.3em;
    color: #C86193;
`;
export const LaravelIcon = styled(FaLaravel)`
    font-size: 2.3em;
    color: #E8392C;
`;
export const NodeJsIcon = styled(FaNodeJs)`
    font-size: 2.3em;
    color: #7FC728;
`;
export const PHPIcon = styled(FaPhp)`
    font-size: 2.3em;
    color: #858EBB;
`;
export const MySqlIcon = styled(SiMysql)`
    font-size: 2.3em;
    color: #1C4A63;
`;

export const ReactNative = styled(FaReact)`
    font-size: 2.3em;
    color: #0BD5F7;
`;
export const VueJs = styled(FaVuejs)`
    font-size: 2.3em;
    color: #018233;
`;
export const PythonIcon = styled(SiPython)`
    font-size: 2.3em;
    color: ${props => props.theme.colors.icons};
`;
