import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import logger from 'redux-logger';
import moviesReducer from './slices/MoviesSlice';
import actorsReducer from './slices/ActorsSlice'

export default configureStore({
    reducer: {
        listOfMovies: moviesReducer,
        listOfActors: actorsReducer
    },
})