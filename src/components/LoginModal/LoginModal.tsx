import "./LoginModal.css";
import { UserForm } from "../UserForm/UserForm.tsx";
import { FormEvent, useState } from "react";
import { hashFunction } from "../../utils/hashFunction.ts";

const initialState = { success: false };

type LoginModalProps = {
  onCloseButtonClick: () => void;
  generationsLimit: number;
};

type Identifiers = {
  username: string;
  digest: string;
};

type LoginInfo = {
  success: boolean;
  username?: string;
  digest?: string;
};

export const LoginModal = ({
  onCloseButtonClick,
  generationsLimit,
}: LoginModalProps) => {
  const [identifiersList, setIdentifiersList] = useState<Identifiers[]>([]);
  const [triedLogin, setTriedLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(initialState);
  const [registered, setRegistered] = useState(false);

  const onRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const plaintext = formData.get("password") as string;
    const digest = hashFunction(plaintext, generationsLimit);
    const identifiers = { username, digest };

    form.reset();
    setIdentifiersList(identifiersList.concat([identifiers]));
    setRegistered(true);
    setTriedLogin(false);
  };
  const onLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const plaintext = formData.get("password") as string;
    const digest = hashFunction(plaintext, generationsLimit);
    const digestToCheck = identifiersList.find(
      (identifiers) => identifiers.username === username,
    )?.digest;
    const loginSuccess = digest === digestToCheck;
    const nextLogin = { success: loginSuccess, digest, username };

    setRegistered(false);
    setTriedLogin(true);
    setLoginInfo(nextLogin);
  };

  return (
    <div className="login-modal-background" onClick={onCloseButtonClick}>
      <div className="login-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-modal-button" onClick={onCloseButtonClick}>
          x
        </button>
        <div className="login-forms">
          <UserForm onSubmit={onRegisterSubmit} actionLabel="S'inscrire" />
          <div className="form-separator"></div>
          <UserForm onSubmit={onLoginSubmit} actionLabel="Se connecter" />
        </div>
        <div className="login-message-container">
          {triedLogin ? (
            loginInfo && loginInfo.success ? (
              <span className="login-message">
                Bienvenue {loginInfo.username} ! 👍
              </span>
            ) : (
              <span className="login-message">Identifiants invalides 🧐</span>
            )
          ) : registered ? (
            <span className="login-message">Nouveau compte créé 🎉</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
