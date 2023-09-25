import Task from "./Task";

export default function Tasks(props) {
  const { todoTab, tasks, setTasks } = props;

  var todos =
    todoTab === "all"
      ? tasks
      : tasks.filter((task) => {
          return todoTab === "active" ? !task.isCompleted : task.isCompleted;
        });

  const todoTasks = todos.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
        todoTab={todoTab}
      />
    );
  });

  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.id !== updatedTask.id) {
          return prevTask;
        }
        return updatedTask;
      })
    );
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== taskId)
    );
  }

  function deleteAllCompletedTasks() {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => !prevTask.isCompleted)
    );
  }

  return (
    <div className="todo-tasks-container">
      <ul className="todo-tasks">{todoTasks}</ul>
      {todoTab === "completed" && todos.length >= 1 && (
        <div
          className="todo-tasks-delete-all"
          onClick={deleteAllCompletedTasks}
        >
          <i className="todo-tasks-delete-icon ri-delete-bin-line" />
          <span className="todo-tasks-delete-text">delete all</span>
        </div>
      )}
    </div>
  );
}
