import './TextBox.css'
export const TextBox = ({className, children, title}) => {
    return (
        <fieldset>
            <legend>{title}</legend>
            <p className={`text-box ${className}`}>{children}</p>
        </fieldset>
    )
}