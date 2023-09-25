import { useState } from "react";

export default function TodoForm(props) {
  const { todoTab, createNewTask } = props;
  const [formData, setFormData] = useState({
    id: generateId(),
    task: "",
    isCompleted: false,
  });

  function generateId() {
    return (Math.random() + 1).toString(5).substring(2);
  }

  function handleChange(event) {
    const { value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, task: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.task.length) {
      createNewTask(formData);
    }
    setFormData({ id: generateId(), task: "", isCompleted: false });
  }

  return (
    <>
      {todoTab !== "completed" && (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="add details"
            name="todo-input"
            value={formData.task}
            onChange={handleChange}
          />
          <input className="todo-submit" type="submit" value="Add" />
        </form>
      )}
    </>
  );
}
