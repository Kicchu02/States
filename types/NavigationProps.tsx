import { StackNavigationProp } from "@react-navigation/stack";

export type StackParamList = {
  WelcomePage: undefined;
  ClickCorrectStatePage: undefined;
  EnterStatePage: undefined;
  StatesQuizPage: undefined;
};

export type NavigationProps = StackNavigationProp<StackParamList>;
