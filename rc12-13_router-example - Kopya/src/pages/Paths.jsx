import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>

      <div>
        <Link className="btn btn-success w-50" to="fullstack">
          FullStack{" "}
        </Link>
        <Link className="btn btn-warning w-50" to="aws">
          AWS
        </Link>
      </div>
      <Outlet />
      {/* outlet paths in altindaki child lari ifade eder. yani bu component icindeki iki link ten hangisine tiklanirsa o component gelsin demek  */}
    </div>
  );
};

export default Paths;
