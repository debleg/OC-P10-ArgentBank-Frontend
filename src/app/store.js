import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/Login/loginSlice";
import userReducer from "../features/User/userSlice";

export default configureStore({
  reducer: { login: loginReducer, user: userReducer },
});
