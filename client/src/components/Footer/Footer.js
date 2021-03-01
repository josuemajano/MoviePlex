import React from 'react';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Exclusive Footer needs editing
                </FooterSubHeading>
                <FooterSubText>Edit Footer to see how it looks.</FooterSubText>
            </FooterSubscription>
        </FooterContainer>
    );
};

export default Footer;
