import { IoAdd } from "react-icons/io5";
import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={TodoItemsContext}
          >
            <IoAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
