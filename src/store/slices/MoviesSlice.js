import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/cinema-service'
import { setError, setStatus } from '../../constants'

const SLICE_NAME = 'movies';
const initialState = {
    movies: [],
    status: null,
    error: null,
}

export const getAllMovies = createAsyncThunk(
    `${SLICE_NAME}/getAllMovies`,
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await api.get(`/${SLICE_NAME}`);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const createNewMovie = createAsyncThunk(
    `${SLICE_NAME}/createNewMovie`,
    async function (newMovie, { rejectWithValue }) {
        try {
            const { data } = await api.post(`/${SLICE_NAME}`, newMovie);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateMovie = createAsyncThunk(
    `${SLICE_NAME}/updateMovie`,
    async function (updatedMovie, { rejectWithValue }) {
        try {
            const { data } = await api.put(`/${SLICE_NAME}/${updatedMovie.id}`, updatedMovie)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteMovie = createAsyncThunk(
    `${SLICE_NAME}/deleteMovie`,
    async function (id, { rejectWithValue }) {
        try {
            await api.delete(`/${SLICE_NAME}/${id}`);
            return id
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const moviesSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    extraReducers: {
        [getAllMovies.fulfilled]: (state, { payload }) => {
            state.movies = payload;
            state.status = 'fulfilled';
            state.error = null
        },
        [createNewMovie.fulfilled]: (state, { payload }) => {
            state.movies.push(payload)
            state.status = 'fulfilled';
            state.error = null
        },
        [updateMovie.fulfilled]: (state, { payload }) => {
            state.movies = state.movies.map((movie) =>
                movie.id === payload.id ? payload : movie)
            state.status = 'fulfilled';
            state.error = null
        },
        [deleteMovie.fulfilled]: (state, { payload }) => {
            state.movies = state.movies.filter((movie) =>
                movie.id !== payload)
            state.status = 'fulfilled';
            state.error = null
        },

        [getAllMovies.rejected]: setError,
        [createNewMovie.rejected]: setError,
        [updateMovie.rejected]: setError,
        [deleteMovie.rejected]: setError,

        [getAllMovies.pending]: setStatus,
        [createNewMovie.pending]: setStatus,
        [updateMovie.pending]: setStatus,
        [deleteMovie.pending]: setStatus,
    }

})

export default moviesSlice.reducer;