import Logo from "../logo/Logo";
import Logout from "../../../features/Login/Logout";
import "./headertopnavigation.css";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';

const HeaderTopNavigation = () => {
const token = useSelector(state => state.login.token)
const firstName = useSelector(state => state.user.firstName)
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token && firstName && (
          <NavLink
            className={({ isActive }) =>
              `main-nav-item ${isActive ? "router-link-exact-active" : ""}`
            }
            to="/user"
          >
            <i className="fa fa-user-circle"></i> {firstName}{" "}
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
