
const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const { completed, name, day, time } = task;

  const toggleComplete = () => {
    handleComplete();
    handleDelete();
  };

  return (
    <section>
      <ul >
        <li>Tarea: {task.name} </li>
        <li>Dia: {task.day ? task.day.toLocaleString() : "Sin fecha Asignada"} </li>
        <li>Hora: {task.time ? task.time : "Sin hora asignada"}</li>
      </ul>
      <div class="btnContainer" >
      <button onClick={toggleComplete}>
        {completed ? 'Deshacer' : 'Completar'}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
      </div>
    </section>
  );
};


export default TaskItem