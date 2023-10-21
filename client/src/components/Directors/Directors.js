import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

import DirectorsList from './DirectorsList';
import DirectorItem from './DirectorItem';
import DirectorForm from './DirectorForm';

import { getAllDirectors } from '../../store/slices/DirectorsSlice'

function Directors() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDirectors())
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
        <Route path='/' element={<DirectorsList />} />
        <Route path=':directorId' element={<DirectorItem />} />
        <Route path="add/:id" element={<DirectorForm />} />
        <Route path="add" element={<Navigate to="/directors/add/:directorId"/> } />
        </Routes>

    </Box>
  )
}

export default Directors