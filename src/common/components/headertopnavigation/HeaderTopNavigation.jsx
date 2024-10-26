import Logo from "../logo/Logo";
import "./headertopnavigation.css";
import { NavLink } from "react-router-dom";

const HeaderTopNavigation = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <Logo />
      </NavLink>
      <div>
        <NavLink to="/" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {' '}Sign In{' '}
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderTopNavigation;
