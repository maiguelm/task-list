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
        <li>Tarea: {task.name}</li>
        <li>Dia: {task.day ? formatDate(task.day) : "Sin fecha Asignada"} </li>
        <li>Hora: {task.time ? task.time : "Sin hora asignada"}</li>
      </ul>
      <div className="btnContainer">
        <button onClick={toggleComplete}>
          {completed ? "Deshacer" : "Completar"}
        </button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </section>
  );
};

export default TaskItem;
