import { Popover } from '@headlessui/react';
import styled from 'styled-components';

import { IoIosClose } from 'react-icons/io';
import { shade } from 'polished';

export const ButtonCloseArea = styled(Popover.Button)`
    position: absolute;
    top: 5px;
    right: 5px;

    background: transparent;
    border: 0;

`;

export const CloseButtonIcon = styled(IoIosClose)`
    font-size: 2rem;
    cursor: pointer;
    color: ${props => props.theme.widget.borderItemsWidget};

        &:hover {
            color: ${props => shade(0.15, `${props.theme.widget.borderItemsWidget}`)};
        }
   
`;