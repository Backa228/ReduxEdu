import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'filters',
    initialState: {
        status: 'all',
        priority: 'all',
    },
    reducers: {
        setStatusFilter: (state, action) => {
            state.status = action.payload
        },
        setPriorityFilter: (state, action) => {
            state.priority = action.payload
        }
    }
})

export const { setStatusFilter } = slice.actions
export default slice.reducer