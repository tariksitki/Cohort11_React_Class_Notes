import './Counter.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from '../../redux/actions/counterActions';
// consume islemi selector ile:

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer.counter );

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        {/* Dispatch her zaman object return ederr.  */}
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREMENT" })}
          // ********************   ÖNEMLI:   func lardan sonra () kullaniyoruz. 
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
        {/* burada increment da bir harf kücük olsa bile calismaz */}
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
