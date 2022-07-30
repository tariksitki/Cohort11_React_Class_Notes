
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import News from "../pages/News";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element = {<Login /> } />
        <Route path="/" element = {<PrivateRouter /> } >
          <Route path="" element = { <News /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;