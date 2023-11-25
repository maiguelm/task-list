import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import CompletedTaskList from "./components/CompletedTaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName, day, time) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      day: day,
      time: time,
      completed: false,
      dateTime: null,
    };
    setTasks([...tasks, newTask]);
  };

  const handleComplete = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const completedTask = tasks.find(task => task.id === taskId);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const handleDelete = taskId => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <CompletedTaskList tasks={completedTasks} />
    </div>
  );
};

export default App;

