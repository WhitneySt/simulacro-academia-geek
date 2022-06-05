import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import useForm from './Hooks/useForm';
import Post from '../helpers/post';

const MoviesForm = () => {
    const initialState = {
        title: '',
        year: '',
        scope: '',
        sinopsis: '',
        poster: ''
    }
    const url = 'https://foodhut-reto-2.herokuapp.com/movies';
    const [datosForm, handleInputChange, reset] = useForm(initialState);


    const handleSubmit = async (event) => {
        event.preventDefault();
        await Post(url, datosForm);
        reset(initialState)

    };

    return (
        <div style={{ margin: '3em', display: 'flex' }}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name='title' onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Year</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" name='year' onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Scope</InputLabel >
                    <Input id="my-input" aria-describedby="my-helper-text" name='scope' onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Sinopsis</InputLabel >
                    <Input id="my-input" aria-describedby="my-helper-text" name='sinopsis' onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Poster</InputLabel >
                    <Input id="my-input" aria-describedby="my-helper-text" name='poster' onChange={handleInputChange} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form >
        </div>
    )
}

export default MoviesForm