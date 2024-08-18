import React from "react";
import { Text, View } from "react-native";
import style from "../Styles";
import StyledButton from "../ui-components/StyledButton";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenNames } from "../types/NavigationProps";

export default function WelcomePage() {
  const navigation = useNavigation();
  const stack = createStackNavigator();
  return (
    <View>
      <Text style={style.textHeaderStyle}>WELCOME TO STATES APP!</Text>
      <StyledButton text="Select State" navigateTo="ClickCorrectStatePage" />
      <StyledButton text="Enter State" navigateTo="EnterCorrectStateNamePage" />
      <StyledButton
        text="States Quiz"
        navigateTo="StateMultipleChoiceQuizPage"
      />
    </View>
  );
}
