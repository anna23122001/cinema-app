import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/cinema-service';

import { setError, setStatus } from '../../constants';

const SLICE_NAME = 'actors';

const initialState = {
    actors: [],
    status: null,
    error: null,
}

export const getAllActors = createAsyncThunk(
    `${SLICE_NAME}/getAllActors`,
    async function (_, { rejectWithValue }) {
        try {
            const { data } = await api.get(`/${SLICE_NAME}`);
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const createNewActor = createAsyncThunk(
    `${SLICE_NAME}/createNewActor`,
    async function (newActor, { rejectWithValue }) {
        try {
            const { data } = await api.post(`/${SLICE_NAME}`, newActor);
            return data 
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const updateActor = createAsyncThunk(
    `${SLICE_NAME}/updateActor`,
    async function (updatedActor, { rejectWithValue }) {
        try {
            const { data } = await api.put(`/${SLICE_NAME}/${updatedActor.id}`, updatedActor)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const deleteActor = createAsyncThunk(
    `${SLICE_NAME}/deleteActor`,
    async function (id, { rejectWithValue }) {
        try {
            await api.delete(`${SLICE_NAME}/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const actorsSlice = createSlice({
    name: `${SLICE_NAME}`,
    initialState,
    extraReducers: {
        [getAllActors.fulfilled]: (state, { payload }) => {
            state.actors = payload;
            state.status = 'fulfilled';
            state.error = null
        },
        [createNewActor.fulfilled]: (state, { payload }) => {
            state.actors.push(payload);
            state.status = 'fulfilled';
            state.error = null
        },
        [updateActor.fulfilled]: (state, { payload }) => {
            state.actors = state.actors.map((actor) =>
                actor.id === payload.id ? payload : actor)
            state.status = 'fulfilled';
            state.error = null
        },
        [deleteActor.fulfilled]: (state, { payload }) => {
            state.actors = state.actors.filter((actor) => actor.id !== payload)
            state.status = 'fulfilled';
            state.error = null
        },


        [getAllActors.rejected]: setError,
        [createNewActor.rejected]: setError,
        [updateActor.rejected]: setError,
        [deleteActor.rejected]: setError,

        [getAllActors.pending]: setStatus,
        [createNewActor.pending]: setStatus,
        [updateActor.pending]: setStatus,
        [deleteActor.pending]: setStatus,

    }
})


export default actorsSlice.reducer