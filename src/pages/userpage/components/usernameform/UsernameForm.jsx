import { useEffect, useState } from "react";
import Button from "../../../../common/components/button/Button";
import InputGeneral from "../../../../common/components/inputgeneral/InputGeneral";
import AlertMessage from "../../../../common/components/alertmessage/AlertMessage";
import "./usernameform.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../../../../features/User/userSlice";

const UsernameForm = ({ className, onClick }) => {
  const userName = useSelector((state) => state.user.userName);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");
  const dispatch = useDispatch();
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");
  const [newUsername, setNewUsername] = useState("");

  //initially the username needs to be the original one
  //then be replaced in the field by what the user inputs
  //but userName is in the store through the API call and is async
  useEffect(() => {
    if (userName) {
      setNewUsername(userName);
    }
  }, [userName]);

  const editUser = async (e) => {
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
    } catch (error) {
      setAlertText("Username change failed:", error);
      setAlertType("error");
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
