export default function Task(props) {
  const { task, updateTask, deleteTask, todoTab} = props;

  function handleChange(event) {
    var updatedTask = { ...task, isCompleted: event.target.checked };
    updateTask(updatedTask);
  }

  function handleClick() {
    deleteTask(task.id);
  }

  return (
    <li className="todo-task-container">
      <div className="todo-task">
        <input
          className="todo-task-input"
          name="todo-task-input"
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleChange}
        />
        <span className="todo-task-label">{task.task}</span>
      </div>
      {todoTab === "completed" && (<i
        className="todo-task-delete ri-delete-bin-line"
        onClick={handleClick}
      />)}
    </li>
  );
}
