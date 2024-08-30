import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../Styles";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export default function ChoiceButton({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={style.choiceButtonStyle} onPress={onPress}>
      <Text style={style.butonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
