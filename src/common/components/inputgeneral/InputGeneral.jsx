import "./inputgeneral.css"

const InputGeneral = ({inputType, inputID, labelText, ...props}) => {
    return (
        <div className="input-wrapper">
        <label htmlFor={inputID}>{labelText}</label>
        <input type={inputType} id={inputID} required {...props} />
    </div>
    )
}

export default InputGeneral;