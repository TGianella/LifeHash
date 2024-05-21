export const Form = ({onSubmit, actionLabel}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="username" placeholder="Nom d'utilisateur" autoComplete="off" />
            <input name="password" placeholder="Mot de passe" autoComplete="off"/>
            <button type="submit">{actionLabel}</button>
        </form>
    )
}