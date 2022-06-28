import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export enum Screens {
  Landing = "Landing",
}

export type AppParamList = {
  [Screens.Landing]: undefined;
};

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<AppParamList>>();

export const useAppRoute = <T extends Screens>() =>
  useRoute<RouteProp<AppParamList, T>>();