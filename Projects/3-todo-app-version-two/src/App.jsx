import AddToDO from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "Like me",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDO></AddToDO>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
