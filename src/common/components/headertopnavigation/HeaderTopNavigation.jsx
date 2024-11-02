import Logo from "../logo/Logo";
import "./headertopnavigation.css";
import { NavLink } from "react-router-dom";

const HeaderTopNavigation = ({ token, user }) => {
  //needs conditions to show specific ones based on state/token
  //needs logout on link click
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token && user && (
          <NavLink
            className={({ isActive }) =>
              `main-nav-item ${isActive ? "router-link-exact-active" : ""}`
            }
            to="/user"
          >
            <i className="fa fa-user-circle"></i> {" "}{user.firstName}{" "}
          </NavLink>
        )}
        {token && (
          <NavLink className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i> Sign Out{" "}
          </NavLink>
        )}
        {!token && (
          <NavLink
            className={({ isActive }) =>
              `main-nav-item ${isActive ? "router-link-exact-active" : ""}`
            }
            to="/sign-in"
          >
            <i className="fa fa-user-circle"></i> Sign In{" "}
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default HeaderTopNavigation;
