import TodoItem from './TodoItem';



const TodoList = () => {
  const handleClearList = () => {
     
  };  

  return (
    <div>
      <div>
        
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
