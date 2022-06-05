import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FormMovie from '../containers/FormMovie'
import MovieDetails from '../containers/MovieDetails'
import Home from '../containers/Home'

const AppRouter = () => {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add' element={<FormMovie/>}/>
                <Route path='/movies/:id' element={<MovieDetails/>}/>
                <Route path='*' element={<Navigate to={"/"}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter