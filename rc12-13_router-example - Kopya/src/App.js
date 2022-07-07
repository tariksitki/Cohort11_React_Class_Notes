import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InstructorDetail from "./pages/InstructorDetail";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

// router sunu yapiyor:  multiple page görünümlü single page yapiyor. a linki ile calisinca tiklayinca baska sayfaya gecer bu multiple. ama react single page. cünkü tek sayfada farkli component lar basilir. 
// istersek index.js de komple app i sarmalayabilirz geri kalan detayi burada yapabiliriz. 

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
