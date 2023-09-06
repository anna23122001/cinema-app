import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { emptyActor } from '../../constants';

import  '../Styles/ItemStyles.css'

function DirectorItem() {

  const directors = useSelector((state) => state.listOfDirectors.directors)

  const { id } = useParams();

  const producer = directors.find((producer) => producer.id === Number(id))

  const director = producer ? producer : emptyActor;

  const navigate = useNavigate();
  const goHome = () => navigate('/directors');

  return (
    <Grid container>
      <Grid item lg={12}
        md={12}
				xl={12}
				sm={12}
        xs={12}
        className='header'>
        <h1>{director.fullName}</h1>
      </Grid>
      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <img src={director.image} alt="Directors photo"
          className='item-img' />
        
      </Grid>
          <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <Stack>
          <h2>Directors Biography</h2>
          <h3>Movies</h3>
          {director.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}

          <h3>BirthYear</h3>
          <p>{director.birthYear}</p>

          <h3>Nationality</h3>
          <p>{director.nationality}</p>
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

export default DirectorItem