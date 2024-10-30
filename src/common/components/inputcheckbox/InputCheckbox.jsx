import "./inputcheckbox.css"

const InputCheckbox = ({ inputID, labelText }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id={inputID} />
      <label htmlFor={inputID}>{labelText}</label>
    </div>
  );
};

export default InputCheckbox;
