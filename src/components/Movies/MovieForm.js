import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import * as Yup from 'yup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createNewMovie, updateMovie } from '../../store/slices/MoviesSlice';
import { emptyMovie } from '../../constants';

import './MovieForm.css'

function MovieForm() {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.listOfMovies.movies);

  const { id } = useParams();
  const currentMovie = movies.find((movie) => movie.id === Number(id));

  const onFormSubmit = (values) => {
    !values.id
      ? dispatch(createNewMovie(values))
      : dispatch(updateMovie(values))
  }
  const navigate = useNavigate();
  const goHome = () => navigate('/movies');

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required field')
  })

  const renderForm = ({values, isValid}) => {
    return (
      <Form className='form-container'>
        <Stack
          spacing={2}>
          <label htmlFor='title'>Title</label>
          <Field
            as={TextField}
            sx={{
              width: 350
            }}
            size='small'
            type='text'
            name='title'/>
        </Stack>

        <ErrorMessage
          name='title'>
          {(msg) => <div className='error'>{msg}</div>}
        </ErrorMessage>
            
        <fieldset className='items-container'>
          <legend>Actors</legend>
          <FieldArray name='actors'>
            {(arrayHelpers) => (
              <div>
                {values.actors && values.actors.length > 0 ? (
                  values.actors.map((actor, index) => (
                  <div key={index}>
                      <Field
                          as={TextField}
                            sx={{
                            width: 300}}
                          size='small'
                          name={`actors.${index}`} />
                    <Button
                          type='button'
                          startIcon={<RemoveIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.remove(index)}>
                        </Button>

                        <Button
                          type='button'
                          startIcon={<AddIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.insert(index, '')}>
                      </Button>
                    </div>
                  ))) : (
                    <Button
                      type='button'
                      size='small'
                      sx={{
                        fontSize: '20px',
                        backgroundColor: "#f9e763",
                        color:'#1000b4'
                      }}
                      onClick={() => arrayHelpers.push('')}>
                      Add a actor
                    </Button>
                )}
                </div>
            )}
          </FieldArray>
        </fieldset>        
        
        <fieldset>
          <legend>Directors</legend>
          <FieldArray name='directors'>
            {(arrayHelpers) => (
              <div>
                {values.directors && values.directors.length > 0 ? (
                  values.directors.map((director, index) => (
                  <div key={index}>
                      <Field
                        as={TextField}
                        sx={{
                          width: 300}}
                        size='small'
                        name={`directors.${index}`} />
                    <Button
                          type='button'
                          startIcon={<RemoveIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.remove(index)}>
                        </Button>

                        <Button
                          type='button'
                          startIcon={<AddIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.insert(index, '')}>
                      </Button>
                    </div>
                  ))) : (
                    <Button
                      type='button'
                      size='small'
                      sx={{
                        fontSize: '20px',
                        backgroundColor: "#f9e763",
                        color:'#1000b4'
                      }}
                      onClick={() => arrayHelpers.push('')}>
                      Add a director
                    </Button>
                )}
                </div>
            )}
          </FieldArray>
        </fieldset>

        <fieldset>
          <legend>Studios</legend>
          <FieldArray name='studios'>
            {(arrayHelpers) => (
              <div>
                {values.studios && values.studios.length > 0 ? (
                  values.studios.map((studio, index) => (
                  <div key={index}>
                      <Field
                        as={TextField}
                        sx={{
                          width: 300}}
                        size='small'
                        name={`studios.${index}`} />
                        <Button
                          type='button'
                          startIcon={<RemoveIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.remove(index)}>
                        </Button>

                        <Button
                          type='button'
                          startIcon={<AddIcon />}
                          size='medium'
                          onClick={() => arrayHelpers.insert(index, '')}>
                      </Button>
                    </div>
                  ))) : (
                    <Button
                      type='button'
                      size='small'
                      sx={{
                        fontSize: '20px',
                        backgroundColor: "#f9e763",
                        color:'#1000b4'
                      }}
                      onClick={() => arrayHelpers.push('')}>
                      Add a studio
                    </Button>)}
                </div>
            )}
          </FieldArray>
        </fieldset>
         <div>
          <label htmlFor='poster'>Poster</label>
          <Field
            as={TextField}
            sx={{
              width: 300
            }}
            size='small'
            name='poster'/>
        </div>
        
        <Stack
          direction='row'
          justifyContent='center'
          spacing={5}>
          
          <Button type="submit"
            variant='contained'
            size='small'
            sx={{
              backgroundColor: "#00b972",
              fontSize: "20px"
            }}
            startIcon={<SaveIcon />}
            disabled={!isValid}>
            Save</Button>
          
          <Button type='reset'
            variant='contained'
            size='small'
            startIcon={<ClearIcon />}
            sx={{
              backgroundColor: "#e0a435",
              fontSize: "20px"}}
            >
            Reset</Button>
          
          <Button type='button'
            variant='contained'
            size='small'
            startIcon={<KeyboardReturnIcon />}
            sx={{
              backgroundColor: "#4783c8",
              fontSize: "20px"}}
            onClick={goHome}>
              Return</Button>
      </Stack>
    </Form>
    )
  }
  return (
    
    <Formik
      initialValues={currentMovie ? currentMovie : emptyMovie}
      onSubmit={onFormSubmit}
      validationSchema={schema}
      
    >
        {renderForm}
    </Formik>
  )
}

export default MovieForm