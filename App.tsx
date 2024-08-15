import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./components/WelcomePage";
import ClickState from "./components/ClickState";
import EnterStateName from "./components/EnterStateName";
import StateQuiz from "./components/StateQuiz";

export default function App() {
  return (
    <View>
      <WelcomePage />
      <ClickState />
      <EnterStateName/>
      <StateQuiz />
      <StatusBar style="auto" />
    </View>
  );
}
