import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux';

import { deleteActor} from '../../store/slices/ActorsSlice'


function ActorsList() {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.listOfActors.actors)

    const onDelete = (id) => {
      dispatch(deleteActor(id))
    } 
  return (
    <Box>
      <List>
        {actors.map((actor) => {
            return(
              <Stack key={actor.actor_id} direction='row'>
                 <ListItem>
                  <Link to={`${actor.actor_id}`}>
                      {actor.full_name}</Link>                
                </ListItem>
                <ButtonGroup>

                  <Button startIcon={<EditRoundedIcon />}>
                    <Link to={`add/${actor.actor_id}`}>
                      Edit</Link>  
                  </Button>

                 <Button
                    onClick={() => onDelete(actor.actor_id)}
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

export default ActorsList