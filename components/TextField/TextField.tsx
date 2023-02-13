interface TextFieldProps {
    label: String;
    value: String;
    className ? : String;
}

const TextField = ({label, value, className}: TextFieldProps) => {
    return(
        <div className="deall-text-field">
            <p className="deall-text-field-label">{label}</p>
            <p className={`deall-text-field-value ${className}`}>{value}</p>
        </div>
    )
}

export default TextField;