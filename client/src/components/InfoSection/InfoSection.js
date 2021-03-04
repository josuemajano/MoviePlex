import React, { useState } from 'react';
import './styles.css';
import MovieCard from './MovieCard';
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
    Img
    // Form,
    // CircleButton,
    // Input
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
    // const [input, setInput] = useState("");
    // const [barOpened, setBarOpened] = useState(false);
    // const formRef = useRef();
    // const inputFocus = useRef();
    
    // const onFormSubmit = e => {
    //     e.preventDefault();
    //     setInput("");
    //     setBarOpened(false);
    //     console.log(`Form was submitted with input: ${input}`);
    // };

    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b7d308e5e7d9d563bfeddd88c65fcd6e&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            setError('Failed to fetch movies');
            setMovies([]);
        } finally {
            setLoading(false);
        }
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
                                <form onSubmit={handleSubmit} className="form">
                                        <input type="text" name="query" value={query} className="input" onChange={(e) => setQuery(e.target.value)} placeholder="i.e. Jurrasic Park"/>
                                        <button className="button" type="submit">
                                            Search!
                                        </button>
                                </form>
                                {loading && <p className="flash info"> Loading...</p>}
                                {error && <p className="flash error">{error}</p>}
                                {!loading && !error && (
                                    <div className="card-list">
                                        {movies && movies.filter((movie) => movie.poster_path)
                                        .map((movie) => (
                                            <MovieCard movie={movie} key={movie.is}/>
                                        ))}
                                    </div>
                                )}
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
