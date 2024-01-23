import AddToDO from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContext.Provider>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDO></AddToDO>
        <WelcomeMessage></WelcomeMessage>
        <todoItems></todoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
