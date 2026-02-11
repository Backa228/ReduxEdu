import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'tasks', 
    initialState: {
        items: [
            { id: 0, text: "Learn HTML and CSS", completed: true },
            { id: 1, text: "Get good at JavaScript", completed: true },
            { id: 2, text: "Master React", completed: false },
            { id: 3, text: "Discover Redux", completed: false },
            { id: 4, text: "Build amazing apps", completed: false },
        ],
    },
    reducers: {
        addTask: (state, action) => {
                state.items.push(action.payload)

        },
        deleteTask: (state, action) => {
                state.items = state.items.filter(task => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            for (const task of state.items) {
                if (task.id === action.payload) {
                    task.completed = !task.completed
                }
            }
            return { 
                ...state,
                items: state.items.map(task => {
                    if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
                })
            }
        }
    }
})

export const { addTasks, deleteTask, toggleTask } = slice.actions;

export default slice.reducer
