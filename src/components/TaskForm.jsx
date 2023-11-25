import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState('');
	const [taskDay, setTaskDay] = useState('');
	const [taskTime, setTaskTime] = useState('');
  
	const handleSubmit = e => {
	  e.preventDefault();
	  if (taskName.trim() !== '') {
		addTask(taskName, taskDay, taskTime);
		setTaskName('');
		setTaskDay('');
		setTaskTime('');
	  }
	};
  
	return (
	  <form onSubmit={handleSubmit}>
		<label htmlFor="newTask">Nueva tarea</label>
		<input
		  type="text"
		  value={taskName}
		  onChange={e => setTaskName(e.target.value)}
		  placeholder="Nueva tarea"
		/>
		<label htmlFor="day">Dia:</label>
		<input
		  type="date"
		  value={taskDay}
		  onChange={e => setTaskDay(e.target.value)}
		  placeholder="Día"
		/>
		<label htmlFor="time">Hora:</label>
		<input
		  type="time"
		  value={taskTime}
		  onChange={e => setTaskTime(e.target.value)}
		  placeholder="Hora"
		/>
		<button type="submit">Agregar</button>
	  </form>
	);
  };

export default TaskForm;
