import styled from 'styled-components';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

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