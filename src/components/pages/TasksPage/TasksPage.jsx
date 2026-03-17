import AppBar from "../../AppBar/AppBar"
import TaskForm from "../../TaskForm/TaskForm"
import TaskList from "../../TaskList/TaskList"

const TasksPage = () => {
    return (
        <div>
            <h1>Tasks Page</h1>
            <AppBar></AppBar>
            <TaskForm></TaskForm>
            <TaskList></TaskList>
        </div>
    )
}
export default TasksPage