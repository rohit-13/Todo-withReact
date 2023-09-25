export default function Tabs({todoTab, setTodoTab}) {
  function handleClick(event) {
    if(event.target.tagName === 'LI') {
      setTodoTab(event.target.textContent.toLowerCase());
    }
  }
  return (
    <ul className="todo-tabs" onClick={handleClick}>
      <li key={"all"} className={`todo-tab ${todoTab === "all" ? "todo-tab-active" : ""}`}>All</li>
      <li key={"active"} className={`todo-tab ${todoTab === "active" ? "todo-tab-active" : ""}`}>Active</li>
      <li key={"completed"} className={`todo-tab ${todoTab === "completed" ? "todo-tab-active" : ""}`}>Completed</li> 
    </ul>
  );
};
