import './Counter.css';


// consume islemi selector ile:

const Counter = () => {
 
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1></h1>
      <div>
        {/* Dispatch her zaman object return eder.  */}
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREMENT" })}
          // ********************   ÖNEMLI:   func lardan sonra () kullaniyoruz. 
         
        >
          increase
        </button>
        {/* burada increment da bir harf kücük olsa bile calismaz */}
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          
        >
          reset
        </button>
        <button
          className="counter-button negative"
         
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
