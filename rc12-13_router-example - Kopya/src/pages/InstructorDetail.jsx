import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import loading from "../helpers/loading.gif"

// id + 500 farkli avatar resimleri icin.

const InstructorDetail = () => {
  const navigate = useNavigate();
  const [inst, setInst] = useState(null);
  const { id } = useParams();
  console.log(inst);

  const [error, setError] = useState(false);

  // arrow func icinde {} kullanirsak arrow un otomatik return özelligi kaybolur
  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Error");
        } else {
          return res.json();
        }
      })
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, [id]); // id her degistiginde sayfa degissin

  // didupdate ayni zamanda didmount

  // return icinde if else kullanirsan muhakkak ikisinde de return olacak
  // *****************************

  // buradaki islem sirasi önemli detayli incele

  if (error) {
    return <NotFound />;
  } else if (!inst) {
    return (
      <div className="text-center">
        {/* <h2>Data is Fetching</h2> */}
        <img src={loading} alt="" style={{width : "12rem"}} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="container text-center">
          <h2>{inst.name}</h2>
          <img
            className="w-25"
            src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
            alt=""
          />
          <h3>{inst.email}</h3>
          <h4>{inst.phone}</h4>

          <div>
            <button
              className="btn btn-success me-5"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button className="btn btn-danger" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <button
              className="btn btn-warning"
              onClick={() => navigate(`/instructors/${+id + 1}`)}
            >
              GO NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default InstructorDetail;
