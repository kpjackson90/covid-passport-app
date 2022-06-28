import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export enum Screens {
  Landing = 'Landing',
  SignUp = 'SignUp',
  Login = 'Login',
  Home = 'Home',
  ForgotPassword = 'ForgotPassword',
  Subscription = 'Subscription',
}

export type AppParamList = {
  [Screens.Landing]: undefined;
  [Screens.SignUp]: undefined;
  [Screens.Home]: undefined;
  [Screens.Login]: undefined;
  [Screens.ForgotPassword]: undefined;
  [Screens.Subscription]: undefined;
};

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<AppParamList>>();

export const useAppRoute = <T extends Screens>() =>
  useRoute<RouteProp<AppParamList, T>>();
