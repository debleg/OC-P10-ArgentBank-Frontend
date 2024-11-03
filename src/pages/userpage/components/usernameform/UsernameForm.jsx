import { useState } from "react";
import Button from "../../../../common/components/button/Button";
import InputGeneral from "../../../../common/components/inputgeneral/InputGeneral";
import "./usernameform.css";

const UsernameForm = ({ className, onClick }) => {
  const [newUsername, setNewUsername] = useState("userName");
  //initially, the username needs to be the original one, then be replaced in the field by what the user inputs!
  const editUser = () => {
    console.log(newUsername);
  };

  return (
    <div className={className}>
      <h1 className="edit-user-header">Edit User Info</h1>
      <form className="edit-user-form" onSubmit={editUser}>
        <InputGeneral
          inputType="text"
          inputID="username"
          labelText="User Name"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <InputGeneral
          inputType="text"
          inputID="firstname"
          labelText="First Name"
          value="firstname"
          disabled
        />
        <InputGeneral
          inputType="text"
          inputID="lastname"
          labelText="Last Name"
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
