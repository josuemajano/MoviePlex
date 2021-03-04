import React from 'react';
import { homeObjOne, homeObjTwo, homeObjFour } from './Data';
import { InfoSection } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;
