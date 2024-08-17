import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "../Styles";
import StyledButton from "../ui-components/StyledButton";

export default function WelcomePage() {
  return (
    <View style={style.container}>
      <Text style={style.textHeaderStyle}>WELCOME TO STATES APP!</Text>
      <StyledButton text="Select State" />
      <StyledButton text="Enter State" />
      <StyledButton text="States Quiz" />
    </View>
  );
}
