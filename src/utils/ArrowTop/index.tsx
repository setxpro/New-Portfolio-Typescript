import React from 'react';
import { ArrowGoHome } from '../../styles/icons/icons';

interface Props {
    disappearHeader: boolean;
}

const ArrowTop: React.FC<Props> = ({disappearHeader}) => {

    function OpacityArrowTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return <ArrowGoHome disappearHeader={disappearHeader} onClick={OpacityArrowTop}/>;
}

export default ArrowTop;