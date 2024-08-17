import { Text, TouchableOpacity } from "react-native";
import style from "../Styles";

interface ButtonProps {
  text: string;
}

export default function StyledButton({ text }: ButtonProps) {
  return (
    <TouchableOpacity style={style.buttonStyle}>
      <Text style={style.butonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
