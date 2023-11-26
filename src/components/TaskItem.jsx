const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const { completed, name, day, time } = task;

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const argDate = date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return argDate;
  };

  const toggleComplete = () => {
    handleComplete();
    handleDelete();
  };

  return (
    <section>
      <ul>
        <li>Tarea: {task.name} </li>
        <li>Dia: {task.day ? task.day.toLocaleString() : "Sin fecha Asignada"} </li>
        <li>Hora: {task.time ? task.time : "Sin hora asignada"}</li>
      </ul>
      <div class="btnContainer" >
      <button class="green" onClick={toggleComplete}>
        {completed ? 'Deshacer' : 'Completar'}
      </button>
      <button class="red"  onClick={handleDelete}>Eliminar</button>
      </div>
    </section>
  );
};

export default TaskItem;
