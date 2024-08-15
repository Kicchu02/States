import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  return (
    <View>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}
