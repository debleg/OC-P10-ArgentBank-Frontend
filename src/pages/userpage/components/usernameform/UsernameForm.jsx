import { useEffect, useState } from "react";
import Button from "../../../../common/components/button/Button";
import InputGeneral from "../../../../common/components/inputgeneral/InputGeneral";
import AlertMessage from "../../../../common/components/alertmessage/AlertMessage";
import "./usernameform.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../../../../features/User/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "../../../../features/Login/logoutUtils";

const UsernameForm = ({ className, onClick }) => {
  const userName = useSelector((state) => state.user.userName);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [invalidToken, setInvalidToken] = useState(false);

  useEffect(() => {
    if (invalidToken) {
      handleLogout(dispatch, navigate, location);
    }
  });
  //initially the username needs to be the original one
  //then be replaced in the field by what the user inputs
  //but userName is in the store through the API call and is async
  useEffect(() => {
    if (userName) {
      setNewUsername(userName);
    }
  }, [userName]);

  const editUser = async (e) => {
    //put token here to handle 401 case and avoid it being set from page load
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    e.preventDefault();
    setAlertText("");
    try {
      const resultAction = await dispatch(
        changeUsername({ token, newUsername })
      );
      if (changeUsername.fulfilled.match(resultAction)) {
        setAlertText("Username changed successfully");
        setAlertType("success");
      }
      if (changeUsername.rejected.match(resultAction)) {
        if (resultAction.error.message == 401) {
          setInvalidToken(true);
        } else {
          setAlertText("Username change failed");
          setAlertType("error");
        }
      }
    } catch (error) {
      console.log("The following error occurred", error);
    }
  };

  return (
    <div className={className}>
      <h1 className="edit-user-header">Edit User Info</h1>
      <form className="edit-user-form" onSubmit={editUser}>
        <InputGeneral
          inputType="text"
          inputID="username"
          labelText="User Name"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <InputGeneral
          inputType="text"
          inputID="firstname"
          labelText="First Name"
          value={firstName}
          disabled
        />
        <InputGeneral
          inputType="text"
          inputID="lastname"
          labelText="Last Name"
          value={lastName}
          disabled
        />
        <AlertMessage
          key={alertText}
          alertText={alertText}
          alertType={alertType}
        />
        <div className="edit-user-buttons">
          <Button className="edit-button-form" type="submit" text="Save" />
          <Button
            className="edit-button-form"
            type="button"
            text="Cancel"
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

export default UsernameForm;
