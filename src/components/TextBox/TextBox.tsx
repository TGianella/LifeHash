import './TextBox.css'

type TextBoxProps = {
    className?: string;
    children: React.ReactNode;
    title: string;
};

export const TextBox = ({className, children, title}: TextBoxProps) => {
    return (
        <fieldset>
            <legend>{title}</legend>
            <p className={`text-box ${className}`}>{children}</p>
        </fieldset>
    )
}