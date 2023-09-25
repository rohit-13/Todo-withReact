import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Tasks from "./components/Tasks";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todoTab, setTodoTab] = useState("all");

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function createNewTask(task) {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  return (
    <div className="container">
      <Header />
      <Tabs todoTab={todoTab} setTodoTab={setTodoTab} />
      <TodoForm todoTab={todoTab} createNewTask={createNewTask} />
      <Tasks todoTab={todoTab} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
