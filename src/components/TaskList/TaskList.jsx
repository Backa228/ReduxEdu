import css from './TaskList.module.scss';
import { Task } from '../Task/Task'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTasks } from '../../redux/tasksSlice'

const getVisibleTasks = (tasks, statusFilter, priorityFilter) => {

  return tasks.filter(task => {
    const statusMatch =
      statusFilter === 'all' ||
      (statusFilter === 'active' && !task.completed) ||
      (statusFilter === 'completed' && task.completed)
    
    console.log('Status match', statusMatch)

    const priorityMatch =
      priorityFilter === 'all' ||
      task.priority === priorityFilter
    
    console.log('Priority match', priorityMatch)
  
    return statusMatch && priorityMatch
  })
}

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks.items);

  const statusFilter = useSelector(state => state.filters.status)
  const priorityFilter = useSelector(state => state.filters.priority)

  const isLoading = useSelector(state => state.tasks.isLoading)
  const error = useSelector(state => state.tasks.error)

  const visibleTasks = getVisibleTasks(tasks, statusFilter, priorityFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
    </>
  );
};