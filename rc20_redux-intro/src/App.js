

import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";

// index.js yazdigimiz icin; sadece ./redux dan import yapti. 

// üstü cizili olmasinin nedeni insanlari toolkit e yönlendirmek
// Provider react redux dan eklenir. createStore redux dan eklenir.

function App() {
  // const store = createStore(reducer);
  
  
  return (
    <div className="app">
      
        <Counter />
        <Todo />
      
    </div>
  )
};

export default App;
