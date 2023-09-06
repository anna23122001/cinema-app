import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { emptyMovie } from '../../constants';
import  '../Styles/ItemStyles.css'

function MovieItem() {
  
  const movies = useSelector((state) => state.listOfMovies.movies);

  const { id } = useParams();

  const film = movies.find((movie) => movie.id === Number(id));

  const movie = film ? film : emptyMovie;

  const navigate = useNavigate();
  const goHome = () => navigate('/movies');
  return (
    <Grid container>
      <Grid
        item lg={12}
        md={12}
				xl={12}
				sm={12}
				xs={12}
				className='header' >
         <h1>{movie.title}</h1>
      </Grid>
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <img src={movie.poster} alt='poster'
        className='item-img' />
      </Grid>
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <Stack>
          <h2>Movie`s information</h2>

          <h3>Actors</h3>
          {movie.stars.map((star, index) => (
            <p key={index}>{star}</p>
          ))}

          <h3>Directors</h3>
          {movie.producers.map((producer, index) => (
            <p key={index}>{producer}</p>
          ))}

          <h3>Studios</h3>
          {movie.companies.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </Stack>
        
      </Grid>
          <Button type='button'
            variant='contained'
            size='small'
            startIcon={<KeyboardReturnIcon />}
            sx={{
              backgroundColor: "#4783c8",
              fontSize: "20px"}}
            onClick={goHome}>
              Return</Button>
    </Grid>
  )
}

export default MovieItem