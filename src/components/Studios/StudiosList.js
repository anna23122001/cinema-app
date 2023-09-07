import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

import { deleteStudio } from '../../store/slices/StudiosSlice';

function StudiosList() {
    const dispatch = useDispatch();
    const studios = useSelector((state) => state.listOfStudios.studios);

    const onDelete = (id) => {
        dispatch(deleteStudio(id))
    }
  return (
    <Box>
        <List>
        {studios.map((studio) => {
            return (
                <Stack key={studio.id}
                    direction='row'>
                    <ListItem>
                        <Link to={`${studio.id}`}>
                            {studio.title}
                        </Link>
                    </ListItem>
            <ButtonGroup>
                  <Button startIcon={<EditRoundedIcon />}>
                    <Link to={`add/${studio.id}`}>
                      Edit</Link>  
                  </Button>
                  <Button
                    onClick={() => onDelete(studio.id)}
                    startIcon={<DeleteForeverRoundedIcon />}>
                      Del 
                  </Button>
            </ButtonGroup>
                    </Stack>
                  )
              })}
        </List>
    </Box>
  )
}

export default StudiosList