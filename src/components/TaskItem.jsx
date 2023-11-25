import React, { useState } from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const { name, completed, day, time } = task;

  const toggleComplete = () => {
    handleComplete();
    handleDelete();
  };

  return (
    <div>

      <span>{task.name} - {task.day} - {task.time} - {task.dateTime ? task.dateTime.toLocaleString() : 'No hay fecha'}</span>

      <button onClick={toggleComplete}>
        {completed ? 'Deshacer' : 'Completar'}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};


export default TaskItem