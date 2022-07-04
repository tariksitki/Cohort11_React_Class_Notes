import React, { useState } from 'react';
import Header from '../components/Header';
import ShowTasks from '../components/ShowTasks';
import starterData from "../helper/starterData"

// starter data mizi home page e cekecegiz. Bunu bir state e atacagiz. Cünkü bunu alt component lara göndermek zorundayiz. hatta setState func da gönderecegiz. Cünkü alt componentlarda yeni veri eklerken bu verinin starter data ya eklenmesi gerekir.

const Home = () => {
  const [tasks, setTasks] = useState(starterData);

  return <div>
    <Header tasks = {tasks} />
    <ShowTasks tasks = {tasks} />
  </div>;
};

export default Home;
