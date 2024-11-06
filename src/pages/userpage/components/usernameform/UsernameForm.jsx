import { useEffect, useState } from "react";
import Button from "../../../../common/components/button/Button";
import InputGeneral from "../../../../common/components/inputgeneral/InputGeneral";
import "./usernameform.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../../../../features/User/userSlice";

const UsernameForm = ({ className, onClick }) => {
  const userName = useSelector(state => state.user.userName)
  const firstName = useSelector(state => state.user.firstName)
  const lastName = useSelector(state => state.user.lastName)
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");
  
  //initially the username needs to be the original one
  //then be replaced in the field by what the user inputs
  //but userName is in the store through the API call and is async
  useEffect (() => {
    if(userName) {
      setNewUsername(userName)
    }
  }, [userName])

  const editUser = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(changeUsername({ token, newUsername }));
      if (changeUsername.fulfilled.match(resultAction)) {
        console.log("Username changed successfully:", resultAction.payload.userName);
      }

    } catch (error) {
      console.log("Username change failed:", error)
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
          value= {firstName}
          disabled
        />
        <InputGeneral
          inputType="text"
          inputID="lastname"
          labelText="Last Name"
          value= {lastName}
          disabled
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
