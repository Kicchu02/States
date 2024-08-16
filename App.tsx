import React from "react"; // Import React with capital 'R'
import { StatusBar } from "expo-status-bar"; // Import StatusBar
import { StyleSheet, Text, View } from "react-native"; // Import other components
import WelcomePage from "./components/WelcomePage"; // Import your component

export default function App() {
  return (
    <View>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}
