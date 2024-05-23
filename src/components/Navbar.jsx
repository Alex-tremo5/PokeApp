import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "text");
  return (
    <div>
      <nav className="navbar space">
        <a href="/">
          <img
            className=" align-text-top pokeBall"
            src="public/images/png-transparent-poke-ball-removebg-preview.png"
          />
        </a>
        <div className="section">
          <div className="home">
            <NavLink className={setActiveClass} to="/">
              {" "}
              Home{""}
            </NavLink>
          </div>
          <NavLink className={setActiveClass} to="/characters">
            {" "}
            Characters{" "}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
