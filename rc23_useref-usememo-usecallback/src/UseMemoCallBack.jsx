import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  // search islemi icin:
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("text", text, "search", search);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const inputRef = useRef();

  const handleSearch = () => {
    // setSearch(text);
    setSearch(inputRef?.current?.value);
  };

  const filteredUsers = useMemo(() =>  users?.filter((user) =>
    user?.name?.toLowerCase().includes(search?.toLowerCase())
  ), [users, search]);

  console.log(filteredUsers);



  const addUser = () => {
    setUsers([...users, {id : users.length + 1, name : `Clarusway 1`}]);
  };

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch}> Search User </button>
      <Users users={filteredUsers} addUser = {addUser} />
    </div>
  );
};

export default UseMemoCallBack;

/// useMemo, expensive calculation larin yeniden render edilmesini engeller.
// mesela binlerce sayfalik veriden filtreleme. bunu tekrar yapmasin diye memoize eder.

// useCallback ise memoize edilmis callback func return eder.
// useMemo ise memoize edilmis value return eder.

// includes yeni cikan method. eskiden indexOf vardi. indexOf == -1 ise denebilir
