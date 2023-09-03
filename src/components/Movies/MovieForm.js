import React from 'react';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import * as Yup from 'yup';


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

  const renderForm = ({values, isValid, handleReset}) => {
    return (
      <Form className='form-container'>
        <div>
          <label htmlFor='title'>Title</label>
          <Field
            type='text'
            name='title'/>
        </div>
        <ErrorMessage name='title'>
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
                      <Field name={`actors.${index}`} />
                    <button
                      type='button'
                      onClick={() => arrayHelpers.remove(index)}>
                        -
                    </button>

                    <button
                      type='button'
                      onClick={() => arrayHelpers.insert(index, '')}>
                      +
                    </button>
                    </div>
                  ))) : (
                    <button
                      type='button'
                      onClick={() => arrayHelpers.push('')}>
                      Add an actor
                    </button>
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
                    <Field name={`directors.${index}`}/>
                    <button
                      type='button'
                      onClick={() => arrayHelpers.remove(index)}>
                        -
                    </button>

                    <button
                      type='button'
                      onClick={() => arrayHelpers.insert(index, '')}>
                      +
                    </button>
                    </div>
                  ))) : (
                    <button
                      type='button'
                      onClick={() => arrayHelpers.push('')}>
                      Add a director
                    </button>
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
                    <Field name={`studios.${index}`}/>
                    <button
                      type='button'
                      onClick={() => arrayHelpers.remove(index)}>
                        -
                    </button>

                    <button
                      type='button'
                      onClick={() => arrayHelpers.insert(index, '')}>
                      +
                    </button>
                    </div>
                  ))) : (
                    <button
                      type='button'
                      onClick={() => arrayHelpers.push('')}>
                      Add a studio
                    </button>)}
                </div>
            )}
          </FieldArray>
        </fieldset>
         <div>
          <label htmlFor='poster'>Poster</label>
          <Field
            as='textarea'
            name='poster'/>
        </div>
        
      <ButtonGroup>
          <Button type="submit"
            disabled={!isValid}>
              Save</Button>
          <Button type='button'
            onClick={handleReset}>
              Reset</Button>
          <Button type='button'
            onClick={goHome}>
              Return</Button>
      </ButtonGroup>
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