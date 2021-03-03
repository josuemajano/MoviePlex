import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection } from '../../components';

const SignUp = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default SignUp;
