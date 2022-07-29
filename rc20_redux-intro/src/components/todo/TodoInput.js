import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, dataFromLocalStorage } from "../../redux/actions/TodoActions";

const TodoInput = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  let todos = useSelector((state) => state.todoReducer.todoList);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newTodo = { id: new Date().getTime(), text: text, completed: false }
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      dispatch(dataFromLocalStorage())
      
    } else {
      alert("Please Enter a Value for Task");
    }
    setText("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button" style={{cursor : "pointer"}} >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
