import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createNewMovie, updateMovie } from '../../store/slices/MoviesSlice'
import { emptyMovie } from '../../constants';
import { useParams } from 'react-router-dom';

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

  const renderForm = ({values}) => {
    return (
      <Form>
        <div>
          <label htmlFor='title'>Title</label>
          <Field
            id='title'
            type='text'
            name='title'
          />
        </div>

        <div>
          <label>Actors</label>
          <FieldArray name='actors'>
            {(arrayHelpers) => (
              <div>
                {values.actors && values.actors.length > 0 ? (
                  values.actors.map((actor, index) => (
                  <div key={index}>
                    <Field name={`actors.${index}`}/>
                    <button
                      type='button'
                      onClick={() => arrayHelpers.remove(index)}>
                        -
                    </button>

                    <button
                      type='button'
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
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
                <div>
                  <button type="submit">Submit</button>
                </div>
                </div>
            )}

          </FieldArray>
        </div>
                    
        
        <div>
          <label>Directors</label>
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
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
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
                <div>
                  <button type="submit">Submit</button>
                </div>
                </div>
            )}

          </FieldArray>
        </div>

        <div>
          <label>Studios</label>
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
                      onClick={() => arrayHelpers.insert(index, '')}
                    >
                      +
                    </button>
                    </div>
                  ))) : (
                    <button
                      type='button'
                      onClick={() => arrayHelpers.push('')}>
                      Add a studio
                    </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
                </div>
            )}

          </FieldArray>
        </div>

         <div>
          <label htmlFor='poster'>Poster</label>
          <Field
            id='poster'
            type='file'
            name='poster'
          />
        </div>
      </Form>
    )
  }

  return (
    <Formik
      initialValues={currentMovie ? currentMovie : emptyMovie}
      onSubmit={onFormSubmit}
    >
        {renderForm}
    </Formik>
  )
}

export default MovieForm