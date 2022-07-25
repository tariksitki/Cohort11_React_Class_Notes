import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

// consume islemi selector ile:

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch () icine birsey almaz.
  const counter = useSelector((state) => state.counter);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter} </h1>
      <div>
        {/* Dispatch her zaman object return eder.  */}
        <button
          className="counter-button positive"
          onClick={() => dispatch({ type: "INCREMENT" })}
          // ********************   ÖNEMLI:   func lardan sonra () kullaniyoruz.
        >
          increase
        </button>
        {/* burada increment da bir harf kücük olsa bile calismaz */}
        <button className="counter-button zero">reset</button>
        <button className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
