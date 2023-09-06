import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import logger from 'redux-logger';
import moviesReducer from './slices/MoviesSlice';
import actorsReducer from './slices/ActorsSlice';
import directorsReducer from './slices/DirectorsSlice'
import studiosReducer from './slices/StudiosSlice'

export default configureStore({
    reducer: {
        listOfMovies: moviesReducer,
        listOfActors: actorsReducer,
        listOfDirectors: directorsReducer,
        listOfStudios: studiosReducer
    },
})