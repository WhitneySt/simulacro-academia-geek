import React, { useEffect, useState } from 'react';
import CustomCard from "./CustomCard";
import Get from '../helpers/get';
import DeleteMovie from '../helpers/delete';

const CardsMovie = () => {
    const url = 'https://foodhut-reto-2.herokuapp.com/movies';
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const resp = await Get(url);
        setMovies(resp);
    }

    return (
        <div style={{ margin: '4em', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {movies && movies.length > 0 ? (
                movies.map(movie => (
                    <CustomCard key={movie.id} poster={movie.poster} title={movie.title} sinopsis={movie.sinopsis} id={movie.id} onClick={async () => {
                        await DeleteMovie(`${url}/${movie.id}`);
                        await getMovies();
                    }} />
                ))) : <>Loading...</>}
        </div>
    )
}

export default CardsMovie