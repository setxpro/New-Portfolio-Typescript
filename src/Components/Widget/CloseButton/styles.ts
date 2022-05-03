import { Popover } from '@headlessui/react';
import styled from 'styled-components';

import { IoIosClose } from 'react-icons/io';

export const ButtonCloseArea = styled(Popover.Button)`
    position: absolute;
    top: 5px;
    right: 5px;

    background: transparent;
    border: 0;

`;

export const CloseButtonIcon = styled(IoIosClose)`
    font-size: 2rem;
    color: #888; // alter color in type 
    cursor: pointer;
`;