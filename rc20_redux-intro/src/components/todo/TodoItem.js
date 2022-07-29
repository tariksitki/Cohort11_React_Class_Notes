import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import {
  dataFromLocalStorage,
  toggleTodo,
} from "../../redux/actions/TodoActions";

const TodoItem = ({ completed, text, id }) => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos?.filter((item) => item.id !== id))
    );
    // dispatch(deleteTodo(id));
    dispatch(dataFromLocalStorage());
  };

  ///  *********  Güzel bir Css kullanimi:
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
