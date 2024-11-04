import { useDispatch } from "react-redux";
import { logout } from "./loginSlice";
import { clearUserData } from "../User/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    dispatch(clearUserData())
    navigate("/");
  };

  return (
    <NavLink className="main-nav-item" onClick={handleLogout}>
      <i className="fa fa-sign-out"></i> Sign Out{" "}
    </NavLink>
  );
};

export default Logout;
