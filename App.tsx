import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import WelcomePage from "./components/WelcomePage";
import style from "./Styles";

export default function App() {
  return (
    <View style={style.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}
