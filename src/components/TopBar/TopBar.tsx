import { PasswordInput } from "../PasswordInput/PasswordInput.tsx";
import "./TopBar.css";
import { ChangeEvent, FormEvent } from "react";

type TopBarProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onButtonClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const TopBar = ({ onSubmit, onButtonClick, onChange }: TopBarProps) => {
  return (
    <div className="top-bar">
      <div>
        <input type="range" onChange={onChange} list="values" />
        <datalist id="values">
          <option value="1" label="1"></option>
          <option value="20" label="20 "></option>
          <option value="40" label="40 "></option>
          <option value="60" label="60 "></option>
          <option value="80" label="80 "></option>
          <option value="100" label="100"></option>
        </datalist>
      </div>
      <PasswordInput onSubmit={onSubmit} />
      <button onClick={onButtonClick}>Connexion</button>
    </div>
  );
};
