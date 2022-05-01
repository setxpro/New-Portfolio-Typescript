import React from 'react';

interface Props {
    name: string;
    icon: JSX.Element;
}

const IntermediaryMap: React.FC<Props> = ({name, icon}) => {
    return(
        <div>
            {icon}
            <p>{name}</p>
        </div>
      );
}

export default IntermediaryMap;