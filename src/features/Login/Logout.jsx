import { useDispatch } from "react-redux";
import { logout } from "./loginSlice";
import { clearUserData } from "../User/userSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(clearUserData());
    
    //if the user is already on the home page, this allows the navbar to refresh to display the right information
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <NavLink className="main-nav-item" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i> Sign Out{" "}
    </NavLink>
  );
};

export default Logout;
