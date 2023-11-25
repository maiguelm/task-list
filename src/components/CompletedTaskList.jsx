const CompletedTaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Tareas Realizadas</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>
            <ul>
              <li>Tarea realziada: {task.name}</li>
              <li>Día: {task.day}</li>
              <li>Hora: {task.time}</li>
            </ul>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CompletedTaskList;
