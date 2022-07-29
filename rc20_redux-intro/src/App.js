import { createStore } from "redux"; // redux dan
import { Provider } from "react-redux"; // react redux dan
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import counterReducer from "./redux/reducers/counterReducer"; // import sekline dikkat. sadece ./redux dan.
import { combinedStore } from "./redux";

// index.js yazdigimiz icin; sadece ./redux dan import yapti.

// üstü cizili olmasinin nedeni insanlari toolkit e yönlendirmek
// Provider react redux dan eklenir. createStore redux dan eklenir.

function App() {
    /// birinci yöntem:
  // const store = createStore(counterReducer);

    //// ikinci yöntem:
    // reducer lar reducer dosyasi icinde olusturuldu. bunlar redux a ait index.js de  combine edilerek bir degiskene atildi. sonra yine index.js de store olusturan bir func olusturuldu. Burada uzun islemler yapmak yerine sadece bu func i cagirdik.
  const store = combinedStore();

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
