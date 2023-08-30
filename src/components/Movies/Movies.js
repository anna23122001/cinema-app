import React, {useEffect} from 'react'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MoviesList from './MoviesList'
import MovieItem from './MovieItem';
import './Movies.css'
import { getAllMovies } from '../../store/slices/MoviesSlice'
import MovieForm from './MovieForm';


function Movies() {
  
  const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllMovies())
    }, [dispatch])

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
        <Route path="/" element={<MoviesList /> } />
        <Route path=":id" element={<MovieItem />} />
        <Route path="add/:id" element={<MovieForm />} />

        <Route path="add" element={<Navigate to="/movies/add/:id"/> } />
      </Routes>
      

    </Box>
  )
}

export default Movies