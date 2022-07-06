import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4">
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>  
        </li>
        <li>
          <Link to="/Instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
