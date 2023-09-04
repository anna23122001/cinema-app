import React from 'react'
import './ServiceForm.css'
import { Routes, Route} from 'react-router-dom'
import MovieForm from '../Movies/MovieForm'
import ActorForm from '../Actors/ActorForm'

function ServiceForm() {
  return (
    <Routes>
      <Route path='/movies/add' element={<MovieForm/>} />
      <Route path='/movies/add/:id' element={<MovieForm />} />
      
      <Route path='/actors/add' element={<ActorForm />} />
			<Route path='/actors/add/:id' element={<ActorForm />} />


    </Routes>
  )
}

export default ServiceForm