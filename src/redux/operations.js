import axios from "axios";
// import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
axios.defaults.baseURL = "https://699ef84578dda56d396bff6f.mockapi.io"

export const fetchTasks = createAsyncThunk (
    "tasks/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/tasks")
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }

    }
)

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (task, thunkAPI) => {
        try {
            const response = await axios.post(`/tasks`, task)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`/tasks/${taskId}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

// export const toggleTask = createAsyncThunk(
//     'tasks/toggleTask',
//     async (task, thunkAPI) => {
//         try {
//             const response = await axios.put(`/tasks/${task.id}`, {
//                 completed: !task.completed
//             })
//             return response.data
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message)
//         }
//     }
// )

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (id, updates, thunkAPI) => {
        try { 
            const response = await axios.put(`/tasks/${id}`, updates)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

