import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

// burada tasks hic kullanmadik sadece iletme islemi yaptik. Buna prop drilling denir.

const Header = ({tasks}) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "SHOW ADD TASK BAR",
        bgColor: "purple",
      });
    } else {
      setBtnStyle({
        name: "CLOSE ADD TASK BAR",
        bgColor: "brown",
      });
    }
    setShow(!show); // bu yukarida da olsa burada da olsa sonuc degismez

    // Önemli:
    // console.log(show); console.log func icinde olursa geriden gelir
    // react bir evente gittigi zaman o event bittigi zaman state i günceller
    // react state i aninda güncellemez kuyruga alir. badge state güncellemesi
    // bir event icinde 3 tane state degisimi varsa, hepsini event bitiminde tek seferde yapar. ara state degisimlerini göremeyiz. yani async mantik ile state ler güncellenir.
    // react 18 ile default olarak herseyi badge rendering ile yapiyorlar. eskiden ara state ler görülebiliyordu. O nedenle burada func icinde yazdigimiz console sonucunu göremiyoruz.
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        className="btn"
        onClick={handleShow}
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks = {tasks} />}
    </header>
  );
};

export default Header;


//! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.
  // YANI BIR EVENT ICINDE BIR STATE E BAGLI BASKA BIR ISLEM YAPACAKSAK OLMUYOR

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates