import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import NotFound from "./NotFound";

// id + 500 farkli avatar resimleri icin.

const InstructorDetail = () => {
  const navigate = useNavigate();
  const [inst, setInst] = useState([]);
  const {id} = useParams();
  console.log(inst);

  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, [id]); // id her degistiginde sayfa degissin
  
  return (
    <div>
    {id < 11 ? (
            <div className="container text-center">
      <h2>{inst.name}</h2>
      <img className="w-25" src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`} alt="" />
      <h3>{inst.email}</h3>
      <h4>{inst.phone}</h4>

      <div>
        <button className="btn btn-success me-5" onClick={() => navigate("/")} >Home</button>
        <button className="btn btn-danger" onClick={() => navigate(-1)} >Go Back</button>
        <button className='btn btn-warning' onClick={() => navigate(`/instructors/${+id+1}`)}>GO NEXT</button>
      </div>
    </div>
        ) : (
            <NotFound />
            )}
    </div>
  )
};

export default InstructorDetail;
