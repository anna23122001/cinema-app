import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createNewDirector, updateDirector } from '../../store/slices/DirectorsSlice';
import { emptyDirector } from '../../constants';

import '../Styles/FormStyles.css'

function DirectorForm() {

  const dispatch = useDispatch();
  const directors = useSelector((state) => state.listOfDirectors.directors)

  const { id } = useParams();
  const currentDirector = directors.find((director) => director.id === Number(id));

  const onFormSubmit = (values) => {
    !values.id
      ? dispatch(createNewDirector(values))
      : dispatch(updateDirector(values));
  };

  const navigate = useNavigate();
  const goHome = () => navigate('/actors');

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required field'),
  });
  
const renderForm = ({ values, isValid }) => {
    return (
      <Form className='form-container'>
        <Stack
          spacing={1}
          sx={{
            margin: '0 auto',
          }}>
          <label htmlFor='fullName'>Full name</label>
          <Field as={TextField} size='small' type='text' name='fullName' />
        </Stack>
        <ErrorMessage name='fullName'>
          {(msg) => <div className='error'>{msg}</div>}
        </ErrorMessage>

        <fieldset>
          <legend>Movies</legend>
          <FieldArray name='movies'>
            {({ push, remove, insert }) => (
              <div>
                {values.movies && values.movies.length > 0 ? (
                  values.movies.map((_, index) => (
                    <div key={index}>
                      <Field
                        as={TextField}
                        sx={{
                          width: 300,
                        }}
                        size='small'
                        name={`movies.${index}`}
                      />
                      <Button
                        type='button'
                        startIcon={<RemoveIcon />}
                        size='medium'
                        onClick={() => remove(index)}
                      ></Button>
                      <Button
                        type='button'
                        startIcon={<AddIcon />}
                        size='medium'
                        onClick={() => insert(index, '')}
                      ></Button>
                    </div>
                  ))
                ) : (
                  <Button
                    type='button'
                    size='small'
                    sx={{
                      fontSize: '20px',
                      backgroundColor: '#f9e763',
                      color: '#1000b4',
                    }}
                    onClick={() => push('')}
                  >
                    Add a movie
                  </Button>
                )}
              </div>
            )}
          </FieldArray>
        </fieldset>

        <Stack
          spacing={1}
          sx={{
            margin: '0 auto',
          }}
        >
          <label htmlFor='birthYear'>BirthYear</label>
          <Field as={TextField} size='small' type='text' name='birthYear' />
        </Stack>
        <Stack
          spacing={1}
          sx={{
            margin: '0 auto',
          }}
        >
          <label htmlFor='nationality'>Nationality</label>
          <Field as={TextField} size='small' type='text' name='nationality' />
        </Stack>
        <div>
          <label htmlFor='image'>Photo</label>
          <Field
            as={TextField}
            sx={{
              width: 600,
            }}
            type='text'
            size='small'
            name='image'
          />
        </div>
        <Stack direction='row'
          justifyContent='center'
          spacing={5}>
          <Button
            type='submit'
            variant='contained'
            size='small'
            sx={{
              backgroundColor: '#00b972',
              fontSize: '20px',
            }}
            startIcon={<SaveIcon />}
            disabled={!isValid}
          >
            Save
          </Button>
          <Button
            type='reset'
            variant='contained'
            size='small'
            startIcon={<ClearIcon />}
            sx={{
              backgroundColor: '#e0a435',
              fontSize: '20px',
            }}>
            Reset
          </Button>
          <Button
            type='button'
            variant='contained'
            size='small'
            startIcon={<KeyboardReturnIcon />}
            sx={{
              backgroundColor: '#4783c8',
              fontSize: '20px',
            }}
            onClick={goHome}
          >
            Return
          </Button>
        </Stack>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={currentDirector ? currentDirector : emptyDirector}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {renderForm}
    </Formik>
  )
}

export default DirectorForm