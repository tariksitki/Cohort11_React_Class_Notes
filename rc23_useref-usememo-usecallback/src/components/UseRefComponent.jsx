import { useEffect, useRef, useState } from "react";

function UseRefComponent() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // console.log(document.querySelector("input"));
    // document.querySelector("input").focus();
    // console.log(inputRef);  // 
    // console.log(inputRef.current); // current ile ulasiriz.
    // inputRef.current.focus();
  }, []);

  const inputRef = useRef(null);
  const divRef = useRef(null);

  const handleClick = () => {
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00FF00",
    //   "rgb(150, 150, 150)",
    // ];
    // /// trunc tamsayi kismini alir. bu nedenle hicbir zaman length kadar olmayacak.
    // const random = Math.trunc(Math.random() * colors.length)
    // // console.log(random);
    // divRef.current.style.backgroundColor = colors[random];
    
    
    // divRef.current.style.backgroundColor = inputRef.current.value;
        // bu kodu da button icinde yazdik. o nedenle deger girdikten sonra tiklamak da gerekir.  Input type olarak color da kullanabiliriz. 
  }


        // useRef 2. kullanim:
    const valueRef = useRef(0); // baslangic degeri verebiliriz. memory de  yeri degismeyen object. bu nedenle yeni render a sebep olmaz

    const valueObj = {current : 0};  // aslinda bu valueRef ile ayni sadece yukaridakinin yeri degismez. 

      const increaseValue = () => {
        setValue(value + 1);

        /// yeniden render a sebebiyet vermedigi icin her tiklamada sayi artmaz.
        // useEffect icinde [] icine koysak da referans degismedigi icin yine render etmez. eger ui tarafinda direkt yansitma ihtiyacimiz yoksa useRef kullanabiliriz.
        // ui tarafinda basma ihtiyaci varsa useState. 
        valueRef.current += 1;
      };


  return (
    <div className="useref" ref={divRef} >
      <h2> UseRef Component </h2>
      {/* <input type="text" placeholder="Enter Text..." autoFocus /> */}
      <input type="text" placeholder="Enter Text..." ref={inputRef} />

      <button onClick={handleClick} >Change Bg Color</button>


      <h2> {value} </h2>
      <button onClick={increaseValue} > Increase Value </button>
    </div>
  );
}

export default UseRefComponent;

/// blur focus dan cikma.   onBlur aninda islem yapabiliriz.

/// useRef ikinci kullanim:   hafizada yeri degismeyen bir object olusturur