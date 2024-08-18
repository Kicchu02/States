import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./components/WelcomePage";
import ClickCorrectStatePage from "./components/ClickCorrectStatePage";
import EnterCorrectStateNamePage from "./components/EnterCorrectStateNamePage";
import StateMultipleChoiceQuizPage from "./components/StateMultipleChoiceQuizPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen
          name="ClickCorrectStatePage"
          component={ClickCorrectStatePage}
        />
        <Stack.Screen
          name="EnterCorrectStateNamePage"
          component={EnterCorrectStateNamePage}
        />
        <Stack.Screen
          name="StateMultipleChoiceQuizPage"
          component={StateMultipleChoiceQuizPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
