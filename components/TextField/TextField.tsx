interface TextFieldProps {
    label: String;
    value: String;
    className ? : String;
    orientation?: 'default' | 'vertical';
}

const DeallTextField = ({label, value, className, orientation}: TextFieldProps) => {
    return(
        <div className={`deall-text-field ${orientation === 'vertical' ? 'vertical' : ''}`}>
            <p className="deall-text-field-label">{label}</p>
            <p className={`deall-text-field-value ${className}`}>{value}</p>
        </div>
    )
}

export default DeallTextField;