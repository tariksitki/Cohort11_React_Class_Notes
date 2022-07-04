import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import starterData from "../helper/starterData";

// starter data mizi home page e cekecegiz. Bunu bir state e atacagiz. Cünkü bunu alt component lara göndermek zorundayiz. hatta setState func da gönderecegiz. Cünkü alt componentlarda yeni veri eklerken bu verinin starter data ya eklenmesi gerekir.

// task verisi her degistiginde(useEffect) local storage a gönderilir.

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    // bizim verimiz kompozit halinde o nedenle stringe cevir diyoruz.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} />
    </div>
  );
};

export default Home;
