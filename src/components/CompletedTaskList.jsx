const CompletedTaskList = ({ tasks }) => {
  return (
    <div>
      <h2>
        Tareas Realizadas <span className="count">{tasks.length} </span>
      </h2>
      {tasks.map((task) => (
        <div className="taskComplete" key={task.id}>
            <ul>
              <li>Tarea realizada: {task.name}</li>
              <li>Día: {task.day}</li>
              <li>Hora: {task.time}</li>
            </ul>
        </div>
      ))}
    </div>
  );
};

export default CompletedTaskList;
