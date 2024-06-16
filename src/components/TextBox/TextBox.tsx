import "./TextBox.css";
import { ReactNode } from "react";

type TextBoxProps = {
  className?: string;
  children: ReactNode;
  title: string;
  area?: string;
};

export const TextBox = ({ className, children, title, area }: TextBoxProps) => {
  return (
    <fieldset style={{ gridArea: area }}>
      <legend>{title}</legend>
      <p className={`text-box ${className}`}>{children}</p>
    </fieldset>
  );
};
