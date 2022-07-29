
import { useDispatch, useSelector } from 'react-redux';
import { dataFromLocalStorage } from '../../redux/actions/TodoActions';
import TodoItem from './TodoItem';



const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();

  const handleClearList = () => {
    window.confirm("Are You Sure to Delete all Todos???") &&
      localStorage.setItem("todos", JSON.stringify([]));
    /// local storage kullanmazsak bu su sekilde olacakti ama local storage kullandigimiz icin dataFromLocalStorage adinda yeni bir action tanimladik. Tüm todolar silindiginde öncelikle localstorage deki verileri siliyoruz sonra redux daki verileri localtorage den veri cekerek güncelliyoruz. 
    //  dispatch(clearTodo())
    dispatch(dataFromLocalStorage());
  };  
  // react da window.confirm ***

  return (
    <div>
      <div>
        {todos?.length === 0 && <h3>You have no Task</h3>}

        {todos?.map((item) => {
          return <TodoItem key={item?.id} {...item} />;
        })}
      </div>
      <div className="clear-wrapper">
        <button
          onClick={handleClearList}
          className="clear-button"
          style={{ cursor: "pointer" }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
