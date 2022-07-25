import { createStore } from "redux"; // redux dan
import { Provider } from "react-redux"; // react redux dan
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import reducer from "./redux"; // import sekline dikkat. sadece ./redux dan.

// index.js yazdigimiz icin; sadece ./redux dan import yapti.

// üstü cizili olmasinin nedeni insanlari toolkit e yönlendirmek
// Provider react redux dan eklenir. createStore redux dan eklenir.

function App() {
  const store = createStore(reducer);

  return (
      /// Cok önemli. Provider icinde store unutma ************************ 
    <Provider store = {store} >
      <div className="app">
        <Counter />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
