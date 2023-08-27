import React, {useEffect, useState} from 'react'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import api from '../../api/cinema-service';

import MoviesList from './MoviesList'
import MovieItem from './MovieItem';
import './Movies.css'





function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('/movies')
        .then(({data}) => {
            data ? setMovies(data) : setMovies([]);
        })
    }, [])

  return (
    <Box className='movie-container'>
      <Button
        variant='contained'
        size='small'
        sx={{
          p: "10px 30px",
          m: "10px",
          backgroundColor: "secondary.light",
          fontSize: "16px"
        }}
      >
        <Link
          style={{color: 'white'}}
          to="add">
          Add
        </Link>
      </Button>

      <Routes>
        <Route path="/" element={<MoviesList movies={movies} /> } />
        <Route path=":id" element={<MovieItem />} />

        <Route path="add" element={<Navigate to="/movies/add/:id"/> } />
      </Routes>
      

    </Box>
  )
}

export default Movies