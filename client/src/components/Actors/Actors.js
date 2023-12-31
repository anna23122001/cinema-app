import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { getAllActors } from '../../store/slices/ActorsSlice'

import ActorItem from './ActorItem';
import ActorsList from './ActorsList';
import ActorForm from './ActorForm';

function Actors() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllActors())
  }, [dispatch])

  return (
      <Box>
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
        <Route path="/" element={<ActorsList />} />
        <Route path=":actorId" element={<ActorItem />} />
        <Route path="add/:id" element={<ActorForm />} />
        <Route path="add" element={<Navigate to="/actors/add/:actorId"/> } />
      </Routes>
    </Box>
  )
}

export default Actors