import styled from 'styled-components';

import { Popover } from '@headlessui/react'

import { BsChatDots } from 'react-icons/bs';

export const Chat = styled(BsChatDots)`
    color: #fff;
    font-size: 2rem;
`;
export const Button = styled(Popover.Button)`
        border-radius: 50%;
        border: none;
        padding: 15px;
        color: #fff;
        background: ${props => props.theme.widget.backgroundButton};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &:hover {
            
        transition: all 2s ease;
            span {
                max-width: 100%;
            }
        }

        span {
            transition: all 1s ease;
            font-size: 1rem;
            max-width: 0;
            overflow: hidden;
        }
`;
export const Container = styled(Popover)`
    position: fixed;
    bottom: 20%;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
