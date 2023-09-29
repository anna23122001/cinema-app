import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ClearIcon from '@mui/icons-material/Clear';

import { createNewStudio, updateStudio } from '../../store/slices/StudiosSlice';
import { emptyStudio } from '../../constants';

import '../Styles/FormStyles.css'

function StudioForm() {
  const dispatch = useDispatch();
  const studios = useSelector((state) => state.listOfStudios.studios);

  const {id} = useParams()
  const currentStudio = studios.find((studio) => studio.id === Number(id))

   const onFormSubmit = (values) => {
    !values.id
      ? dispatch(createNewStudio(values))
      : dispatch(updateStudio(values));
   };
   
  const navigate = useNavigate();
  const goHome = () => navigate('/studios')

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required field'),
  });
  
  const renderForm = ({ values, isValid }) => {
    return (
      <Form className='form-container'>
        <Stack
          spacing={1}
          sx={{
            margin: '0 auto',
          }}>
          <label htmlFor='title'>Title</label>
          <Field as={TextField} size='small' type='text' name='title' />
        </Stack>
        <ErrorMessage name='title'>
          {(msg) => <div className='error'>{msg}</div>}
        </ErrorMessage>

        <Stack
          spacing={1}
          sx={{
            
            margin: '0 auto',
          }}
        >
          <label htmlFor='location'>Location</label>
          <Field as={TextField} size='small' type='text' name='location' />
        </Stack>
        <Stack
          spacing={1}
          sx={{
            margin: '0 auto',
          }}
        >
          <label htmlFor='foundationYear'>Year of fundation</label>
          <Field as={TextField} size='small' type='text' name='foundationYear' />
        </Stack>

        <div>
          <label htmlFor='logo'>Logo</label>
          <Field
            as={TextField}
            sx={{
              width: 600,
            }}
            type='text'
            size='small'
            name='logo'
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
    )
  }
  return (
    <Formik
      initialValues={currentStudio ? currentStudio : emptyStudio}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      {renderForm}
    </Formik>
  )
}

export default StudioForm