import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

import StudiosList from './StudiosList';
import StudioItem from './StudioItem';
import StudioForm from './StudioForm';

import { getAllStudios } from '../../store/slices/StudiosSlice'

function Studios() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudios())
  })
  return (
    <Box>
        <Button
        variant='contained'
        size='small'
        startIcon={<AddIcon style={{
          color: '#1000b4',
          fontSize: 'large',
          margin: '8'
        }} />}
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
        <Route path='/' element={<StudiosList/>} />
        <Route path=':id' element={<StudioItem/>} />
        <Route path='add/:id' element={<StudioForm />} />
        <Route path="add" element={<Navigate to="/studios/add/:id"/> } />
        <Route/>
      </Routes>
    </Box>
  )
}

export default Studios