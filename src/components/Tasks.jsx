import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import CompletedTaskList from "./CompletedTaskList";
import { toast } from "react-toastify";

const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const storeComplete = JSON.parse(localStorage.getItem("completedTasks"));

const Tasks = () => {
  const [tasks, setTasks] = useState(storedTasks ?? []);
  const [completedTasks, setCompletedTasks] = useState(storeComplete ?? []);
  
  
  // useEffect(() => {
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   } else {
  //     setTasks([]);
  //   }

  //   if (storeComplete) {
  //     setCompletedTasks(storeComplete);
  //   } else {
  //     setCompletedTasks([]);
  //   }
  // }, []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTask = (taskName, day, time) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: taskName,
      day: day,
      time: time,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    toast.success("Nueva tarea agendada", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const completedTask = tasks.find((task) => task.id === taskId);

    if (completedTask) {
      const storageComplete = JSON.stringify(completedTask);

      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const handleDelete = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
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

export default Tasks;
