import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { deleteDirector } from '../../store/slices/DirectorsSlice'
function DirectorsList() {

  const dispatch = useDispatch();
  const directors = useSelector((state) => state.listOfDirectors.directors);

  const onDelete = (id) => {
      dispatch(deleteDirector(id))
  }

  return (
    <Box>
      <List>
        {directors.map((director) => {
          return (
            <Stack key={director.id} direction='row'>
              <ListItem>
                <Link to={`${director.id}`}>
                  {director.fullName}
                </Link>
              </ListItem>
              <ButtonGroup>
                  <Button startIcon={<EditRoundedIcon />}>
                    <Link to={`add/${director.id}`}>
                      Edit</Link>  
                  </Button>
                  <Button
                    onClick={() => onDelete(director.id)}
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

export default DirectorsList