import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { useSelector } from 'react-redux';

function ActorsList() {
  
  const actors = useSelector((state) => state.listOfActors.actors)

  return (
    <Box>
      <List>
        {actors !== undefined ? (
           actors.map((actor) => {
            return(
              <Stack key={actor.id} direction='row'>
                 <ListItem>
                  <Link to={`${actor.id}`}>
                      {actor.fullName}</Link>                
                </ListItem>
                <ButtonGroup>

                  <Button startIcon={<EditRoundedIcon />}>
                    <Link to={`add/${actor.id}`}>
                      Edit</Link>  
                  </Button>

                  <Button startIcon={<DeleteForeverRoundedIcon />}>
                    <Link to={`add/${actor.id}`}>
                      Del</Link>  
                  </Button>
                  
                </ButtonGroup>
             </Stack>
            )

          })
        ) : 
        <p>No actors available</p>
          
  } 
      </List>


    </Box>
  )
}

export default ActorsList