// https://jsonplaceholder.typicode.com/users
// foto icin:
// https://i.pravatar.cc/300?img=${id}
// burada id icin js placeholder daki id kullanilir.

import { useEffect, useState } from "react";

// eger fetch islemini useEffect icinde kullanmazsak sonsuz döngü sürekli fetch yapar!!!!!!
// yada buton tiklandiginda bu func calistir dersek problem yine cözülür.

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // // butona bu func verilebilir onclick olarak.
  // const getUsers = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  // }

  console.log(users);
  return (
    <div>
      <h1>USER LIST</h1>
      <div className="row">
        <div className="col">
          <img src="" alt="" />
          <h6></h6>
        </div>
      </div>
    </div>
  );
};

export default Users;
