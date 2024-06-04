import "./PasswordInput.css";
import { FormEvent } from "react";

type TextInputProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const PasswordInput = ({ onSubmit }: TextInputProps) => {
  return (
    <form
      className="password-form"
      onSubmit={onSubmit}
      data-testid="password-input"
    >
      <input
        className="password-input"
        name="plaintext"
        placeholder="Mot de passe"
        autoComplete="off"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};
