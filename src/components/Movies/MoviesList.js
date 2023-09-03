import React from 'react'
import { Box, Button, ButtonGroup, List, ListItem, Stack } from '@mui/material'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { deleteMovie } from '../../store/slices/MoviesSlice'


function MoviesList() {
 
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.listOfMovies.movies)
  
  const onDelete = (id) => {
    dispatch(deleteMovie(id))
  }

  return (
    <Box className='movie-list-container'>
        <List>
          {movies.map((movie) => {
            return(
              <Stack key={movie.id} direction='row'>
                 <ListItem>
                  <Link to={`${movie.id}`}>
                      {movie.title}</Link>                
                </ListItem>
                <ButtonGroup>

                  <Button startIcon={<EditRoundedIcon />}>
                    <Link to={`add/${movie.id}`}>
                      Edit</Link>  
                  </Button>

                  <Button
                    onClick={() => onDelete(movie.id)}
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

export default MoviesList