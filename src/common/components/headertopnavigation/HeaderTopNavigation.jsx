import Logo from "../logo/Logo";
import Logout from "../../../features/Login/Logout";
import "./headertopnavigation.css";
import { NavLink } from "react-router-dom";

const HeaderTopNavigation = ({ token, user }) => {
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
            <i className="fa fa-user-circle"></i> {user.firstName}{" "}
          </NavLink>
        )}
        {token && <Logout />}
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
