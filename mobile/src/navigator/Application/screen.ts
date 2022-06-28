import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export enum Screens {
  Home = "Home",
}

export type AppParamList = {
  [Screens.Home]: undefined;
};

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<AppParamList>>();

export const useAppRoute = <T extends Screens>() =>
  useRoute<RouteProp<AppParamList, T>>();