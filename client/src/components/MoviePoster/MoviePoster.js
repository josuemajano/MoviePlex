import React from 'react';
import { IconContext } from 'react-icons/lib';
import { GiFilmProjector } from 'react-icons/gi';
import {
    PosterSection,
    PosterWrapper,
    PosterHeading,
    PosterContainer,
    PosterCard,
    PosterCardInfo,
    PosterCardIcon
} from './MoviePoster.elements'

function MoviePoster () {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PosterSection>
                <PosterWrapper>
                    <PosterHeading>Most Popular</PosterHeading>
                    <PosterContainer>
                        <PosterCard to='/popular'>
                            <PosterCardInfo>
                                <PosterCardIcon>
                                    <GiFilmProjector />
                                </PosterCardIcon>
                            </PosterCardInfo>
                        </PosterCard>
                    </PosterContainer>
                </PosterWrapper>
            </PosterSection>
        </IconContext.Provider>
    );
};

export default MoviePoster;