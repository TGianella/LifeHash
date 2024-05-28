import './TitleBox.css';

type TitleBoxProps = {
    title: string;
    children: React.ReactNode;
    className: string;
}

export const TitleBox = ({title, children, className}: TitleBoxProps) => {
    return (
        <div className={`${className} title-box`}>
            <span className="title">{title}</span>
            {children}
        </div>
    )
}