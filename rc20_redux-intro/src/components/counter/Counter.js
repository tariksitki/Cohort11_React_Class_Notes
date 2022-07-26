import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/actions/CounterActions";
import "./Counter.css";

// consume islemi selector ile:

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch () icine birsey almaz.
  const counter = useSelector((state) => state.counterReducer.counter);
  // console.log(counter);
  // burada state dedigimiz rootReducer.  rootReducer altinda 2 tane reducer imiz var.
  // state imiz bir object den ibarettir.

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter} </h1>
      <div>
        {/* Dispatch her zaman object return eder.  */}
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREMENT" })}
          onClick={() => dispatch(increment())}
          // ********************   ÖNEMLI:   func lardan sonra () kullaniyoruz.
        >
          increase
        </button>
        {/* burada increment da bir harf kücük olsa bile calismaz. bu durumda reducer daki case lerden hicbiri calismaz bu nedenle en alttaki default calisir. */}
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => {
            if (counter > 0 ) {
              // dispatch({ type: "DECREMENT" });
              dispatch(decrement());
            }
          }}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
