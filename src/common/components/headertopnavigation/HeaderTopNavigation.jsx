import Logo from "../logo/Logo";
import "./headertopnavigation.css";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderTopNavigation = ({ token, user }) => {
  const navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
    // fix the reload with Redux later!!
    window.location.reload();
  };

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
        {token && (
          <NavLink className="main-nav-item" onClick={signOut}>
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
