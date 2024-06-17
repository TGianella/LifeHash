import { PasswordInput } from "../PasswordInput/PasswordInput.tsx";
import "./TopBar.css";
import { ChangeEvent, FormEvent, useState } from "react";

type TopBarProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onButtonClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const TopBar = ({ onSubmit, onButtonClick, onChange }: TopBarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="top-bar">
      <div>
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          Paramètres
        </button>
        <div
          className="dropdown-background"
          style={{ display: isDropdownOpen ? "block" : "none" }}
          onClick={() => setIsDropdownOpen(false)}
        ></div>
        <div
          className="options-dropdown"
          style={{ display: isDropdownOpen ? "block" : "none" }}
        >
          <label>Limite de générations</label>
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
      </div>
      <PasswordInput onSubmit={onSubmit} />
      <button onClick={onButtonClick}>Connexion</button>
    </div>
  );
};
