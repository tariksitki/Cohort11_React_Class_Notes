import { useState } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";


const ReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [img, setImg] = useState();


    const increase = () => {
        setCounter(counter + 1);
    };

  return (
    <div>
      <Header img={img} />
      <h3>Counter : {counter} </h3>
      <button onClick={increase}> Increase </button>

      <button onClick={() => setImg(fs)}> FS </button>
      {/* counter artirinca memo dan dolayi header render edilmez. ama fs buttonu ile header a img gönderimi yapariz ve header daki foto degisir. Bu nedenle render edilir.  */}

      <button onClick={() => setImg(aws)}> AWS </button>
    </div>
  );
}

export default ReactMemo;


/// header ile hic isimiz yok. ReactMemo da state de olan bir degisiklikten dolayi header da render ediliyor. 

// React memo bir hook degil. built in bir yapi. 

// birinci yöntem tüm header i sarmallama.



// react real dom u degistirmez virtual dom u degistirir. aslinda cok fazla yük binmez. Bu nedenle react memo yu da gereksiz kullanmamali 

// react memo component leri hafizaya almak icin kullanilir ve render i önler.