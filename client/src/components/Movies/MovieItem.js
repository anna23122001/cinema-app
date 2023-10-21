import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { emptyMovie } from '../../constants';
import  '../Styles/ItemStyles.css'

function MovieItem() {
  
  const movies = useSelector((state) => state.listOfMovies.movies);

  const { movieId } = useParams();

  const film = movies.find((movie) => movie.movie_id === Number(movieId));

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
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}
             className='item-info'>
        <Stack>
          <h2>Movie`s information</h2>
          <h3>Title</h3>
          <p>{movie.title}</p>

          <h3>Relise</h3>
          <p>{movie.relise_year}</p>

        
        {movie.studios ? (
      <div>
        <h3>Studios</h3>
      {movie.studios.map((studio) => (
          <p key={studio.id}>{studio}</p>
          ))}
        </div> ) : null}
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