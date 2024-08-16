import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./components/WelcomePage";
import "./src/styles";
import styles from "./src/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}
