import './TitleBox.css';

export const TitleBox = ({title, children, className}) => {
    return (
        <div className={`${className} title-box`}>
            <span className="title">{title}</span>
            {children}
        </div>
    )
}