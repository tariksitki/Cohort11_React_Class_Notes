import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";
import { clearTodo } from '../../redux/actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodo());  
  };  

  const todos = useSelector((state) => state.todoReducer.todoList);

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
