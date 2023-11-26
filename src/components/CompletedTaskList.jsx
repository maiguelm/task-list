
const CompletedTaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Tareas Realizadas <span class="count">{tasks.length} </span></h2>
      {tasks.map((task) => (
        <div class="taskComplete" key={task.id}>
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
