import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aws from "./pages/Aws";
import Contact from "./pages/Contact";
import FullStack from "./pages/FullStack";
import Home from "./pages/Home";
import InstructorDetail from "./pages/InstructorDetail";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import PrivatRouter from "./pages/PrivatRouter";

// router sunu yapiyor:  multiple page görünümlü single page yapiyor. a linki ile calisinca tiklayinca baska sayfaya gecer bu multiple. ama react single page. cünkü tek sayfada farkli component lar basilir.
// istersek index.js de komple app i sarmalayabilirz geri kalan detayi burada yapabiliriz.

// note: route larin isimleri öncesinde / koyarsak absolute yazmis oluruz.
//  /courses demek ana dizinden sonra direkt courses a gec demek
// nokta atis adres veriyoruz. home dan sonra instructor gelsin.
// ama  / koymazsak  home göre git deriz. burada instructor detail sayfasinda instructor yazmasak sadece ${id} yazsak da react history sayesinde bulur.

// absolute biraz daha hard coded gibi oluyor. arada bir yol degisirse hepsi degismesi gerekir. ama relative de böyle degil.

//* İc ice sayfalari gsotermek icin Nested Route kullanilabilir.

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapılan bir
//? componentlerdir. (Nav v.b)

//? Navigate sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirmesi icin kullanilir. (v5 -> Redirect)

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />

          {/* nested route  hem de relative kullandik */}
          {/* paths e tiklandiginda birisi default acilsin diye index kullanilir. index elementin kendine göre path i olamaz parent in path ini kullanir. index sadece nested route larda kullanilir. */}
          {/* parent i sabit tutarak child lar arasinda dolasmak istiyorsak o zaman nested route kullanilir  */}
          <Route path="paths" element={<Paths />}>
            <Route element={<FullStack />} index />
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>

          {/* Contact sayfasina sadece login olan kullanicilarin girebilmesini istiyoruz  */}
          <Route path="/contact" element={<PrivatRouter />}  >
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}

              {/* kullanici valid route lardan baska birsey girerse home sayfasina yönlendir diyoruz. ama instructor detail de kendimiz hatali girilirse notFound a gönder demistik. o nedenle orada notfound a gider. mesela sayi olarak 99 girdigimizde */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
