
import React, { useState, useEffect } from "react";
import {useParams, useNavigate, useLocation} from "react-router-dom";

const InstructorDetail = () => {
  const location = useLocation();
  const instructor = location.state;
  console.log(location);
  console.log(instructor);
  // useLocation in  dezavantaji su: verinin tam olarak gelebilmesi icin önce instructors dan gecip sonra details a gelmesi lazim. eger kullanici direkt adres cubuguna adres girerse o zaman veri gelmez. 


  const navigate = useNavigate(); 
  const [inst, setInst] = useState([]);
  const {id} = useParams();
  // useparams, bize app.js de route da yazdigimiz id yi yakalar ve verir.

  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, [id]);

  return (
    <div className="container text-center">
      <h3>{inst.name} </h3>
      <img
        className="w-25"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email} </h4>
      <h4>{inst.phone} </h4>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">Home</button>
        <button onClick={() => navigate(-1)} className="btn btn-danger">Go Back</button>
        {/* navigate(-1) dedigimizde browser in history.back() func ini kullanir  */}
      </div>
    </div>
  );
}

export default InstructorDetail;