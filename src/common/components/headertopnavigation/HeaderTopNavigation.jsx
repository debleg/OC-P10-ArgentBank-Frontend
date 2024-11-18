import Logo from "../logo/Logo";
import "./headertopnavigation.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../../features/Login/logoutUtils";

const HeaderTopNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  const userName = useSelector((state) => state.user.userName);

  const onLogout = (e) => {
    e.preventDefault();
    handleLogout(dispatch, navigate, location);
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="main-nav-logged-in">
        {token && userName && (
          <NavLink
            className={({ isActive }) =>
              `main-nav-item ${isActive ? "router-link-exact-active" : ""}`
            }
            to="/user"
          >
            <i className="fa fa-user-circle"></i> {userName}{" "}
          </NavLink>
        )}
        {token && (
          <NavLink className="main-nav-item" onClick={onLogout}>
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
