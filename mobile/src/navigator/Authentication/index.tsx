import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "./screens/LandingScreen";
import { Screens } from './screen';


const { Navigator, Screen } = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Navigator initialRouteName={Screens.Landing}>
      <Screen
        name={Screens.Landing}
        component={LandingScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthenticationStack;