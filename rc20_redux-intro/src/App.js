import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { combinedReducer, reducer } from "./redux";
// index.js yazdigimiz icin; sadece ./redux dan import yapti. 

// üstü cizili olmasinin nedeni insanlari toolkit e yönlendirmek
// Provider react redux dan eklenir. createStore redux dan eklenir.

function App() {
  // const store = createStore(reducer);
  const store = combinedReducer();
  
  return (
    <div className="app">
      <Provider store={store} >
        <Counter />
        <Todo />
      </Provider>
    </div>
  )
};

export default App;
