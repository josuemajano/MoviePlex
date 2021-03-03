import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection } from '../../components';

const About = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default About;
