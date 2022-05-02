import styled from 'styled-components';

import { Popover } from '@headlessui/react'

import { BsChatDots } from 'react-icons/bs';

export const Chat = styled(BsChatDots)`
    color: #fff;
    font-size: 2rem;
`;
export const Button = styled(Popover.Button)`
        background: violet;
        border-radius: 50%;
        border: none;
        padding: 10px;
        color: #fff;
        background: ${props => props.theme.colors.icons};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        transition: all 1s ease;

        &:hover {
            border-radius: 5%;
            span {
                max-width: 100%;
            }
        }

        span {
            font-size: 1rem;
            max-width: 0;
            overflow: hidden;
        }
`;
export const Container = styled(Popover)`
    position: fixed;
    bottom: 50%;
    right: 1rem;
`;