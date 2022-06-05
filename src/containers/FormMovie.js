import React from 'react'
import MoviesForm from '../components/MoviesForm';
import Navbar from '../components/Navbar';

const FormMovie = () => {
  return (
    <div>
      <Navbar tab={1} />
      <MoviesForm />
    </div>
  )
}

export default FormMovie