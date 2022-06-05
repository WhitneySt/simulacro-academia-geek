import React from 'react'
import CardsMovieDetails from '../components/CardsMovieDetails';
import Navbar from '../components/Navbar';

const MovieDetails = () => {
  return (
    <div>
      <Navbar tab={0} />
      <CardsMovieDetails />
    </div>
  )
}

export default MovieDetails