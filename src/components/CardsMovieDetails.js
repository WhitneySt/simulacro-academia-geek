import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom'
import CustomCard from "./CustomCard";
import Get from '../helpers/get';
import DeleteMovie from '../helpers/delete';

const CardsMovieDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const url = `https://foodhut-reto-2.herokuapp.com/movies/${id}`;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            const resp = await Get(url);
            setMovie(resp);
        }
        getMovies();
    }, [url]);

    

    const removeMovie = async () => {
        await DeleteMovie(url);
        navigate('/');
    }

    return (
        <div style={{ margin: '4em', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {movie ? (
                <CustomCard poster={movie.poster} title={movie.title} sinopsis={movie.sinopsis} id={movie.id} onClick={removeMovie} />
            ) : <>Loading...</>}
        </div>
    )
}

export default CardsMovieDetails