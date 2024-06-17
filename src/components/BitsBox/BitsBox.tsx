import { TextBox } from "../TextBox/TextBox.tsx";
import { Cells } from "../../types.tsx";

type BitsBoxProps = {
  hasInput: boolean;
  content: Cells | string;
  title: string;
  area: string;
};

export const BitsBox = ({ hasInput, content, ...rest }: BitsBoxProps) => {
  return <TextBox {...rest}>{hasInput ? content : ""}</TextBox>;
};
