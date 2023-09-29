import { configureStore } from '@reduxjs/toolkit'

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