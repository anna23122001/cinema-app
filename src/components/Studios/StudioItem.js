import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button, Grid, Stack } from '@mui/material';

import { emptyStudio } from '../../constants'
import '../Styles/ItemStyles.css'

function StudioItem() {

    const studios = useSelector((state) => state.listOfStudios.studios);
    const { id } = useParams();

    const currentStudio = studios.find((studio) => studio.id === Number(id));
    const studio = currentStudio ? currentStudio : emptyStudio;

    const navigate = useNavigate();
    const goHome = () => navigate('/studios');

  return (
      <Grid container>
          <Grid item
              lg={12}
              md={12}
              xl={12}
			  sm={12}
              xs={12}
             className='header'>
              <h1>{studio.title}</h1>
          </Grid>
          <Grid item
              lg={6}
              md={6}
              xl={6}
              sm={6}
              xs={6}>
                <img src={studio.logo} alt="Studios logo"
                className='item-img' />
        </Grid>
          <Grid item lg={6} md={6} xl={6} sm={6} xs={6}
                className='item-info'>
              <Stack>
                  <h2>Information about Studio</h2>
                  <h3>Location</h3>
                  <p>{studio.location}</p>

                  <h3>Foundation Year</h3>
                  <p>{studio.foundationYear}</p>
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

export default StudioItem