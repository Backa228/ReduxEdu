import css from './TaskList.module.scss';
import { Task } from '../Task/Task'
import { useSelector } from 'react-redux'

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

  console.log('Current status filter:', statusFilter);
  console.log('Current priority filter:', priorityFilter);
  console.log('Tasks from state: ', tasks)

  const visibleTasks = getVisibleTasks(tasks, statusFilter, priorityFilter)

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};