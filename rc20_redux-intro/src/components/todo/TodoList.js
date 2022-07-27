import { useDispatch, useSelector } from 'react-redux';
import { clearTodo } from '../../redux/actions/TodoActions';
import TodoItem from './TodoItem';



const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todoList);
  // console.log(todos);

  const dispatch = useDispatch();

  const handleClearList = () => {
     return (window.confirm("Are You Sure to Delete all Todos???") && dispatch(clearTodo()))
  };  
  // react da window.confirm ***

  return (
    <div>
      <div>
        {todos.length === 0 &&  <h3>You have no Task</h3>}

        {todos?.map((item, index) => {
          return <TodoItem key={item?.id} {...todos[index]} />;
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
