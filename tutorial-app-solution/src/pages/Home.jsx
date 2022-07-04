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

    ////////  delete :
    // delete islemi icin url sonuna id numara giriyoruz.
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }


    //////////  update: (put(tamami, whole update), patch (partial update)):
    // put da bazi alanlari bos birakirsak, o alanlar undefined olur. 
    // filter ve map bize bir array return eder.
    // array leri tranformation yapmak icin map kullandik
    // filter ile sectik map ile güncelledik.
  const updateTutorial = async (id, title, desc) => {
    const filteredData = tutorials.filter((item) => item.id === id).map(() => ({title:title, description : desc}))
    try {
      await axios.put(`${url}/${id}`, filteredData[0]) // veriyi array den kurtardik
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  }

  return (
    <>
      <AddTutorial addTutorial = {addTutorial} />
      <TutorialList tutorials = {tutorials} deleteTutorial = {deleteTutorial} updateTutorial = {updateTutorial} />
    </>
  );
};

export default Home;
