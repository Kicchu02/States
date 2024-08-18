import { Text, TouchableOpacity } from "react-native";
import style from "../Styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps, StackParamList } from "../types/NavigationProps";

interface ButtonProps {
  text: string;
  navigateTo: keyof StackParamList;
}

export default function StyledButton({ text, navigateTo }: ButtonProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      style={style.buttonStyle}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <Text style={style.butonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
