import "./inputgeneral.css"

const InputGeneral = ({inputType, inputID, labelText}) => {
    return (
        <div className="input-wrapper">
        <label htmlFor={inputID}>{labelText}</label>
        <input type={inputType} id={inputID} required />
    </div>
    )
}

export default InputGeneral;