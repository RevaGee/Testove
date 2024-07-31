export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostResponse {
  data: Post[];
}
export type PostResponse = Post[];

// types.ts
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type MainTabsParamList = {
  Home: undefined;
  Portfolio: undefined;
  Search: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
  CreatePin: undefined;
  ConfirmPin: { pin: string };
};

export type MainStackParamList = {
  Main: undefined;
  Auth: undefined;
};

export type MainTabsNavigationProp = BottomTabNavigationProp<MainTabsParamList>;
export type AuthStackNavigationProp = StackNavigationProp<AuthStackParamList>;
export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;
