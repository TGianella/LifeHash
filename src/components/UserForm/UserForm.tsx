import "./UserForm.css";
import { FormEvent } from "react";

type UserFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  actionLabel: string;
};

export const UserForm = ({ onSubmit, actionLabel }: UserFormProps) => {
  return (
    <form className="user-form" onSubmit={onSubmit}>
      <div className="form-inputs">
        <input
          name="username"
          placeholder="Nom d'utilisateur"
          autoComplete="off"
        />
        <input name="password" placeholder="Mot de passe" autoComplete="off" />
      </div>
      <button type="submit">{actionLabel}</button>
    </form>
  );
};
