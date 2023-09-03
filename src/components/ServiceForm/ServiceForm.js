import React from 'react'
import './ServiceForm.css'
import { Routes, Route} from 'react-router-dom'
import MovieForm from '../Movies/MovieForm'

function ServiceForm() {
  return (
    <Routes>
      <Route path='/movies/add' element={<MovieForm/>} />
      <Route path='/movies/add/:id' element={<MovieForm />} />
      


    </Routes>
  )
}

export default ServiceForm