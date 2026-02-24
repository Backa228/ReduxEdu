import axios from "axios";
import { fetchInProgress, fetchSuccess, fetchError } from "./tasksSlice"

// axios.defaults.baseURL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
axios.defaults.baseURL = "https://my-json-server.typicode.com/Backa228/Redux-Edu-API"

export const fetchTasks = () => async dispatch => {
    try {
        dispatch(fetchInProgress())
        const response = await axios.get("/tasks")
        dispatch(fetchSuccess(response.data))
    } catch (e) {
        dispatch(fetchError(e.message))
    }

}