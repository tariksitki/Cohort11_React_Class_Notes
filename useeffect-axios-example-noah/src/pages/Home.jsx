import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useEffect, useState } from 'react';

// axios ile fetch yada await kullanilabilir
// apiden cekilen verinin state e atilmasi lazim. aksi takdirede react static algilar ve bunu güncellemez. ayrica alt elementlere gönderecegimiz icin kullanmak zorundayiz
const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    // get islemi :
  const getTutorials = async() => {
    try {
      const {data} = await axios.get(url);
      setTutorials(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTutorials(); // sonsuz döngü olmasin diye burada kullandik.
  }, []);
    // ilk önce render calisir sonra effect. o nendenle önce undefined.
  // console.log(tutorials);

    // post islemi yapacak func (create) :
    // burada tutorial alt component den gönderdigimiz {title: 'ooo', description: 'ooo'} 
  const addTutorial = async (tutorial) => {
    console.log(tutorial);
    try {
      await axios.post(url, tutorial)
    } catch (error) {
      console.log(error);
    }
      /// post dan sonra sayfa yenilemeden degisiklikleri cekme:
      // getTutorials icinde kendisine ait try var o nedenle disarida yazdik burada
      // burada veri geldi mi ok mu diye detayli yapmadik. res ok mi diye
    getTutorials();
  }

  return (
    <>
      <AddTutorial addTutorial = {addTutorial} />
      <TutorialList tutorials = {tutorials} />
    </>
  );
};

export default Home;
