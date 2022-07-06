import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

// react da use ile baslayan hersey hook dur. Biz kendimiz de bir hook yazsak bu da use ile baslamak zorunda.

const Instructors = () => {
  const navigate = useNavigate();

  const [instructors, setInstructors] = useState([]);

  const getInstructors = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>INSTRUCTOR LIST</h1>
      <div className="row justify-content-center g-4"  >
        {instructors?.map((inst) => {
          const { id, name } = inst;
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={id}
              // onClick={() => navigate(`/instructors/${id}`)}
              onClick={() => navigate(`/instructors/${id}`, {state : inst})}
              // onClick={() => navigate(`/instructors/${id}`, {inst})}
              style={{cursor : "pointer"}}
                // burada component cagirmadigimiz icin direkt props gönderemeyiz. buu nedenle link icinde id gönderiyoruz.

              // onClick={() => navigate(`/instructors/${id}`, { inst })}
              // Bu sekilde navigate ile veri gönderrdik. detail sayfasina gidince bu veriyi yakalayabiliriz. dezavantaj olarak eger birisi linki direkt yazarsa calismaz. 
            >
              {/* burada id ye path in parametresi denir  */}
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                alt=""
              />
              <h6>{name}</h6>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructors;
