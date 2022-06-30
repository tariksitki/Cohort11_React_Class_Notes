import { useState } from 'react';
import LifeCycleMethods from './components/LifeCycleMethods';
import Timer from './components/Timer';
import UseEffectHook from './components/UseEffectHook';
import Users from './components/Users';

function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show)
  } 
  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className={show ? "btn btn-danger" : "btn btn-warning"} >
        {show ? "HIDE" : "SHOW"}  
      </button>
      {/* {show && <LifeCycleMethods />} */}
      {/* <Timer /> */}

      {/* {show && <UseEffectHook /> } */}

      <Users />
    </div>
  );
}

export default App;
