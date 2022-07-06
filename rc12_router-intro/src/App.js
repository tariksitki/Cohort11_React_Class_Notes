import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import {Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";

// browser router ile sarmalama islemini de burada yapabilirdik. ama biz sarmalama islemini index.js de yaptik. burada geri kalanlari yaptik. 

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>

        {/* <Home />
        <Instructors />
        <ContactForm />
        <NotFound /> */}
        <Route path="/" element={<Home /> } />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound /> } />

      </Routes>
      <Footer />
    </div>
  );
}
export default App;
