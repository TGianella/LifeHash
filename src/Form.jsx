export const Form = ({onSubmit, actionLabel}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-inputs">
                <input name="username" placeholder="Nom d'utilisateur" autoComplete="off"/>
                <input name="password" placeholder="Mot de passe" autoComplete="off"/>
            </div>
            <button type="submit">{actionLabel}</button>
        </form>
    )
}