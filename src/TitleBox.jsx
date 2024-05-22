import './TitleBox.css';

export const TitleBox = ({title, children}) => {
    return (
        <div className="title-box">
            <h3 className="title">{title}</h3>
            {children}
        </div>
    )
}