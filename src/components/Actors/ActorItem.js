import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Grid, Stack } from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { emptyActor } from '../../constants'
import  '../Styles/ItemStyles.css'


function ActorItem() {

  const actors = useSelector((state) => state.listOfActors.actors)

  const { id } = useParams();

  const star = actors.find((star) => star.id === Number(id))

  const actor = star ? star : emptyActor;

  const navigate = useNavigate();
  const goHome = () => navigate('/actors');

  return (
    <Grid container>
      <Grid item lg={12}
        md={12}
				xl={12}
				sm={12}
        xs={12}
        className='header'>
        <h1>{actor.fullName}</h1>
      </Grid>

      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <img src={actor.image} alt="Actors photo"
        className='item-img'/>
      </Grid>

      <Grid item lg={6} md={6} xl={6} sm={6} xs={6}>
        <Stack>
          <h2>Actors Biography</h2>
          <h3>Movies</h3>
          {actor.movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}

          <h3>BirthYear</h3>
          <p>{actor.birthYear}</p>

          <h3>Nationality</h3>
          <p>{actor.nationality}</p>
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

export default ActorItem
