import Logo from "../logo/Logo";
import "./headertopnavigation.css";
import { NavLink } from "react-router-dom";

const HeaderTopNavigation = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo"  to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className={({ isActive }) =>
    `main-nav-item ${isActive ? "router-link-exact-active" : ""}`
  } to="/sign-in">
          <i className="fa fa-user-circle"></i>
          {' '}Sign In{' '}
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderTopNavigation;
