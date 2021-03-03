import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
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
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/signup'>Sign Up</FooterLink>
                    <FooterLink to='/'>Popular</FooterLink>
                    <FooterLink to='/'>Recently Added</FooterLink>
                    <FooterLink to='/'>Is it working?</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to='/signup'>Sign Up</FooterLink>
                    <FooterLink to='/'>Popular</FooterLink>
                    <FooterLink to='/'>Recently Added</FooterLink>
                    <FooterLink to='/'>Is it working?</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/signup'>Sign Up</FooterLink>
                    <FooterLink to='/'>Popular</FooterLink>
                    <FooterLink to='/'>Recently Added</FooterLink>
                    <FooterLink to='/'>Is it working?</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        MoviePlex
                    </SocialLogo>
                    <WebsiteRights>MoviePlex © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
