import { logout } from "./loginSlice";
import { clearUserData } from "../User/userSlice";

export const handleLogout = (dispatch, navigate, location) => {
  dispatch(logout());
  dispatch(clearUserData());
  //if the user is already on the home page, this allows the navbar to refresh to display the right information
  if (location.pathname === "/") {
    window.location.reload();
  } else {
    navigate("/");
  }
};