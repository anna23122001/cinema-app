import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/cinema-service';
import { setError, setStatus } from '../../constants'

const SLICE_NAME = 'directors'
const initialState = {
    directors: [],
    status: null,
    error: null
}
export const getAllDirectors = createAsyncThunk(
    `${SLICE_NAME}/getAllDirectors`,
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await api.get(`/${SLICE_NAME}`);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const createNewDirector = createAsyncThunk(
    `${SLICE_NAME}/createNewDirector`,
    async function (newDirector, { rejectWithValue }) {
        try {
            const { data } = await api.post(`/${SLICE_NAME}`, newDirector);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const updateDirector = createAsyncThunk(
    `${SLICE_NAME}/updateDirector`,
    async function (updatedDirector, { rejectWithValue }) {
        try {
            const { data } = await api.put(`/${SLICE_NAME}/${updatedDirector.id}`, updatedDirector)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteDirector = createAsyncThunk(
    `${SLICE_NAME}/deleteDirector`,
    async function (id, { rejectWithValue }) {
        try {
            await api.delete(`/${SLICE_NAME}/${id}`);
            return id
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const directorsSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    extraReducers: {
        [getAllDirectors.fulfilled]: (state, { payload }) => {
            state.directors = payload;
            state.status = 'fulfilled';
            state.error = null
        },
        [createNewDirector.fulfilled]: (state, { payload }) => {
            state.directors.push(payload)
            state.status = 'fulfilled';
            state.error = null
        },
        [updateDirector.fulfilled]: (state, { payload }) => {
            state.directors = state.directors.map((director) =>
                director.id === payload.id ? payload : director)
            state.status = 'fulfilled';
            state.error = null
        },
        [deleteDirector.fulfilled]: (state, { payload }) => {
            state.directors = state.directors.filter((director) =>
                director.id !== payload)
            state.status = 'fulfilled';
            state.error = null
        },

        [getAllDirectors.rejected]: setError,
        [createNewDirector.rejected]: setError,
        [updateDirector.rejected]: setError,
        [deleteDirector.rejected]: setError,

        [getAllDirectors.pending]: setStatus,
        [createNewDirector.pending]: setStatus,
        [updateDirector.pending]: setStatus,
        [deleteDirector.pending]: setStatus,
    }

})

export default directorsSlice.reducer;