import { useDispatch, useSelector } from 'react-redux';
import { clearTodo } from '../../redux/actions/TodoActions';
import TodoItem from './TodoItem';



const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todoList);
  console.log(todos);

  const dispatch = useDispatch();

  const handleClearList = () => {
     dispatch(clearTodo());
  };  

  return (
    <div>
      <div>
        {todos.length === 0 &&  <h3>You have no Task</h3>}

        {todos?.map((item, index) => {
          return <TodoItem key={item.id} {...todos[index]} />;
        })}
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
