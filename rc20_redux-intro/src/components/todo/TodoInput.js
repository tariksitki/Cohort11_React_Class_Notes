import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/TodoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: new Date().getTime(), text: text, completed: false }
    if (text) {
      dispatch(
          addTodo(newTodo)
        );

      setTodos([...todos, newTodo]);
      
    } else {
      alert("Please Enter a Value for Task");
    }
    setText("");
    
    // todos?.length > 0
    //   ? localStorage.setItem("todos", JSON.stringify([...todos, newTodo]))
    //   : localStorage.setItem("todos", JSON.stringify([newTodo]));
    
    
    
  };
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);
  
  console.log(todos);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
