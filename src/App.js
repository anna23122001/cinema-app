import React from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/Studios/Layout';
import HomePage from './components/Studios/HomePage';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import Studios from './components/Studios/Studios';
import Directors from './components/Directors/Directors';
import ErrorPage from './components/Studios/ErrorPage';

import './App.css';
import { Grid, Stack } from '@mui/material';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<HomePage />} />
          <Route path="movies/*" element={<Movies />} />
          <Route path="actors/*" element={<Actors />}/>
          <Route path="directors/*" element={<Directors />}/>
          <Route path="studios/*" element={<Studios />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace/>}/>
        </Route>
      </Routes>
    </Router>
 
    
  );
}

export default App;

