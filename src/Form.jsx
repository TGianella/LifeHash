export const Form = ({onSubmit, actionLabel}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="username" autoComplete="off" />
            <input name="password" autoComplete="off"/>
            <button type="submit">{actionLabel}</button>
        </form>
    )
}