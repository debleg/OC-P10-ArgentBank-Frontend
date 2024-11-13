import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "./logoutUtils";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onLogout = handleLogout(navigate, location, dispatch)

  return (
    <NavLink className="main-nav-item" onClick={onLogout}>
      <i className="fa fa-sign-out"></i> Sign Out{" "}
    </NavLink>
  );
};

export default Logout;
