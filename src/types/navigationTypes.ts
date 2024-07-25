import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  Auth: undefined;
  Main: undefined;
};


export type AuthStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  CreatePin: undefined;
  ConfirmPin: { pin: string };
};

export type MainTabsParamList = {
  Dashboard: undefined;
  Portfolio: undefined;
  Search: undefined;
  Profile: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;
export type AuthStackNavigationProp = StackNavigationProp<AuthStackParamList>;
export type MainTabsNavigationProp = BottomTabNavigationProp<MainTabsParamList>;
