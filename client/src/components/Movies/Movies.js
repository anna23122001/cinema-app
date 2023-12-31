import React, {useEffect} from 'react'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';

import MoviesList from './MoviesList'
import MovieItem from './MovieItem';
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
        startIcon={<AddIcon style={{color:'#1000b4', fontSize:'large', margin:'8'}} />}
        sx={{
          p: " 5px 25px",
          m: "10px 0 20px 250px",
          backgroundColor: "#f3e53a",
          fontSize: "18px"
        }}>
        <Link
          style={{color: '#1000b4'}}
          to="add">
          Add
        </Link>
      </Button>

      <Routes>
        <Route path="/" element={<MoviesList /> } />
        <Route path=":movieId" element={<MovieItem />} />
        <Route path="add/:id" element={<MovieForm /> } />

        <Route path="add" element={<Navigate to="/movies/add/:movieId"/> } />
      </Routes>
      

    </Box>
  )
}

export default Movies