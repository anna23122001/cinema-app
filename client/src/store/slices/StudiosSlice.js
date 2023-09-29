import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/cinema-service';
import { setError, setStatus } from '../../constants';

const SLICE_NAME = 'studios';
const initialState = {
    studios: [],
    status: null,
    error: null
}

export const getAllStudios = createAsyncThunk(
    `${SLICE_NAME}/getAllStudios`,
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await api.get(`/${SLICE_NAME}`);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const createNewStudio = createAsyncThunk(
    `${SLICE_NAME}/createNewStudio`,
    async function (newStudio, { rejectWithValue }) {
        try {
            const { data } = await api.post(`/${SLICE_NAME}`, newStudio);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const updateStudio= createAsyncThunk(
    `${SLICE_NAME}/updateStudio`,
    async function (updatedStudio, { rejectWithValue }) {
        try {
            const { data } = await api.put(`/${SLICE_NAME}/${updatedStudio.id}`, updatedStudio)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteStudio = createAsyncThunk(
    `${SLICE_NAME}/deleteStudio`,
    async function (id, { rejectWithValue }) {
        try {
            await api.delete(`/${SLICE_NAME}/${id}`);
            return id
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const studioSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    extraReducers: {
        [getAllStudios.fulfilled]: (state, { payload }) => {
            state.studios = payload;
            state.status = 'fulfilled';
            state.error = null
        },
        [createNewStudio.fulfilled]: (state, { payload }) => {
            state.studios.push(payload)
            state.status = 'fulfilled';
            state.error = null
        },
        [updateStudio.fulfilled]: (state, { payload }) => {
            state.studios = state.studios.map((studio) =>
                studio.id === payload.id ? payload : studio)
            state.status = 'fulfilled';
            state.error = null
        },
        [deleteStudio.fulfilled]: (state, { payload }) => {
            state.studios = state.studios.filter((studio) =>
                studio.id !== payload)
            state.status = 'fulfilled';
            state.error = null
        },

        [getAllStudios.rejected]: setError,
        [createNewStudio.rejected]: setError,
        [updateStudio.rejected]: setError,
        [deleteStudio.rejected]: setError,

        [getAllStudios.pending]: setStatus,
        [createNewStudio.pending]: setStatus,
        [updateStudio.pending]: setStatus,
        [deleteStudio.pending]: setStatus,
    }
})

export default studioSlice.reducer;