import { StackNavigationProp } from "@react-navigation/stack";

export type StackParamList = {
  WelcomePage: undefined;
  ClickCorrectStatePage: undefined;
  EnterCorrectStateNamePage: undefined;
  StateMultipleChoiceQuizPage: undefined;
};

export type NavigationProps = StackNavigationProp<StackParamList>;
export type ScreenNames = keyof StackParamList;
