import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
	return (
	  <div>
		<h2>Lista de Tareas <span className="count"> {tasks.length}</span> </h2>
		{tasks.map(task => (
		  <TaskItem
			key={task.id}
			task={task}
			handleComplete={() => handleComplete(task.id)}
			handleDelete={() => handleDelete(task.id)}
		  />
		))}
	  </div>
	);
  };

export default TaskList;
