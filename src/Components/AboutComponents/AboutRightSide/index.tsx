import React from 'react';
import { Verified } from '../AboutContent/styles';

interface Props {
    resum: string;
}

const AboutRightSide: React.FC<Props> = ({ resum }) => <p><Verified/> { resum }</p>

export default AboutRightSide;