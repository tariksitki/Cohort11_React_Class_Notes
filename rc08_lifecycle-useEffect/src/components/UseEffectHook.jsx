import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    // useEffect(() => {
    //   // burasi didmount + didupdate gibi calisir.
    
    //   return () => {    
    //    // burasi da willunmount gibi calisir.
    //   }
    // }, []) // dependency array denir. 

    // eger api den veri cekme islemini button  a baglarsak bu durumda useEffect e ihtiyac olmayabilir. ama sayfa her yenilendiginde veri cekeceksek useEffect kullanmak zorundayiz.

    // 60 dk gecerli token lar olabiliyor. Bunun icin useEffect ile önce token var mi yok mu diye bakilir. sonra islem yapilabilir. 

    const [count, setCount] = useState(0);
        // useEffect for DidMount:    
    // useEffect(() => {   // fetch, async, setTimeout, localstorage icin burasi
    //     console.log("did Mounted");
    //     setTimeout(() =>  {
    //         console.log("Data Fetched");
    //     }, 3000)
    // }, [])
    // buradaki bos array i silince bir kere degil her render dan sonra calisir. yani didupdate olmus olur. 
    // willunmount yoksa return kullanmiyoruz.

    // func component larda render yok. Biz burada bir yerde ne yazarsak o render ici olur.
    // burada ayrica constructor da yok.
    // console.log("render");


        /// useEffect for DidUpdate: 
    // useEffect(() => {   // fetch, async, setTimeout, localstorage icin burasi
    //     console.log("did Mounted");
    //     setTimeout(() =>  {
    //         console.log("Data Fetched");
    //     }, 3000)
    // }, [count])  // dependency array i silince mount ve update beraber calisir. sadece update calistiramiyoruz. 
        ///  ***********************  ÖNEMLI:
    //dependency array yerine state yazdigimizdaki durum ile hicbir sey yazmadigimiz ayni sey.

    // didmount + willunmount:
    // useEffect snippet   ES7  eklentisinden gelir.
    const fetchData = () => {
        console.log("Data Fetched");
    }
        // eger willunmount yani return icini yazmazsak component i hide yaptigimizda arka planda setinterval calismaya devam eder.
    useEffect(() => {
        const timerId = setInterval(fetchData ,1000);
        console.log("mounted(Burasi 1 kere calisir)");
        return () => {
            clearInterval(timerId)
        }
    }, [])


  return (
    <div className='container text-center mt-4'>
        <h1 className='text-danger'>UseEffectHook</h1>
        <h3>Count: {count} </h3>
        <button className='btn btn-warning' onClick={() => setCount(count + 1)}>INCREASE</button>
    </div>
  )
}

export default UseEffectHook



// her zaman önce render edilir. sonra mounting

//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenlerde yan etkileri
//! (sede effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

    // icine bir callbak func alir.
//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* return kullanirsak componentWillUnmount code olur. Kulanmazsak olmaz*/
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);


    /// advance seviye birsey burasi ögren!!!

// bu sistemde sadece didupdate gibi calisan bir func yazmak mümkün degil.
// eger hem didmount a hem de didupdate e ihtiyacimiz olursa 
// https://stackoverflow.com/questions/68030020/componentdidmount-and-componentdidupdate-together-using-useeffect-hook


