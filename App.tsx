import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./components/WelcomePage";
import ClickState from "./components/ClickState";

export default function App() {
  return (
    <View>
      <WelcomePage />
      <ClickState></ClickState>
      <StatusBar style="auto" />
    </View>
  );
}
