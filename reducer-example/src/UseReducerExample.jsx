// import { useState } from "react";

import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
//   const [dog, setDog] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);
    // reducer da bu state lere ihtiyacimiz yok. 

    const [state, dispatch] = useReducer(reducer, initialState);
    // useReducer icine 2 parametre alir. reducer func ve initialState

    console.log(state);

  const fetchDog = () => {
    // setLoading(true);   bunun yerine dispatch
    dispatch({type : "START"});

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const { message } = data;
        // setDog(message);
        // setLoading(false);
            // bu iki state i tek kalemde degistirecegiz:
        dispatch({type : "SUCCESS", payload : message}); // veri gönderimi buradan
            // success gittiginde, reducer da tanimladigimiz gibi loading false olacak
      })
      .catch((error) => {
        // setError("Data can not be fetched");
        // setLoading(false);
        dispatch({ type: "FAIL", payload: "Data can not be fetched" });
      });
  };

  return (
    <>
      {/* {loading && <h1>Loading ...</h1>} */}
      {state.loading && <h1>Loading ...</h1>}

      <div>
        {/* <img src={dog} alt="" /> <br /> <br /> */}
        <img src={state.dog} alt="" /> <br /> <br />
        {/* <button onClick={fetchDog} disabled={loading}> */}
        <button onClick={fetchDog} disabled={state.loading}>
          Fetch Dog
        </button>
      </div>

      {/* {error && <h1>{error} </h1>} */}
      {state.error && <h1>{state.error} </h1>}
    </>
  );
};

export default UseReducerExample;




//// Önemli: initial state state icine nerede aktarilir ???
/// const [state, dispatch] = useReducer(reducer, initialState);   bu kod ile aktarilir.