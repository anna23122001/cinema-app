import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import { getAllActors } from '../../store/slices/ActorsSlice'

import ActorItem from './ActorItem';
import ActorsList from './ActorsList';

function Actors() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllActors())
  }, [dispatch])


  return (
      <Box className='actor-container'>
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
        <Route path="/" element={<ActorsList />} />
        <Route path=":id" element={<ActorItem />} />
        <Route path="add" element={<Navigate to="/actors/add/:id"/> } />
      </Routes>
    
    </Box>
  )
}

export default Actors