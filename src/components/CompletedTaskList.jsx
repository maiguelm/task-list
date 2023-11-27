import TaskItem from "./TaskItem";

const CompletedTaskList = ({ tasks }) => {
  return (
    <div>
      <h2>
        Tareas Realizadas <span className="count">{tasks.length} </span>
      </h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleComplete={() => handleComplete(task.id)}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default CompletedTaskList;
