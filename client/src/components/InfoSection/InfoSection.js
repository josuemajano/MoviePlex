import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { Container,  } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Form,
    CircleButton,
    Input
} from './InfoSection.elements';

const InfoSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    buttonLabel, 
    description, 
    headline, 
    lightText, 
    topLine,
    img,
    alt,
    start
}) => {
    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();
    
    const onFormSubmit = e => {
        e.preventDefault();
        setInput("");
        setBarOpened(false);
        console.log(`Form was submitted with input: ${input}`);
    };

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/'>
                                    <Form barOpended={barOpened} onClick={() => {
                                        setBarOpened(true);
                                        inputFocus.current.focus();
                                    }} onFocus={() => {
                                        setBarOpened(true);
                                        inputFocus.current.focus();
                                    }} onBlur={() => {
                                        setBarOpened(false);
                                    }} onSubmit={onFormSubmit} ref={formRef}>
                                        <CircleButton type="submit" barOpened={barOpened}>
                                            <BsSearch />
                                        </CircleButton>
                                        <Input onChange={e => setInput(e.target.value)} ref={inputFocus} value={input} barOpened={barOpened} placeholder="  Search for a movie..."/>
                                    </Form>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src="./images/svg-1.svg" alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
