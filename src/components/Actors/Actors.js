import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
        startIcon={<AddIcon style={{color:'#1000b4', fontSize:'large'}} />}
        sx={{
          p: "5px 50px",
          m: "10px",
          backgroundColor: "#f3e53a",
          fontSize: "16px"
        }}>
        <Link
          style={{color: '#1000b4'}}
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