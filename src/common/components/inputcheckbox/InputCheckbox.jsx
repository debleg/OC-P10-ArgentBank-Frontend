import "./inputcheckbox.css"

const InputCheckbox = ({ inputID, labelText, ...props }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id={inputID} {...props}/>
      <label htmlFor={inputID}>{labelText}</label>
    </div>
  );
};

export default InputCheckbox;
