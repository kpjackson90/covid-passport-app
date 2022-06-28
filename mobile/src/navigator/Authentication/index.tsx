import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LandingScreen } from './screens/LandingScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import { Subscription } from './screens/Subscription';
import { Screens } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Navigator initialRouteName={Screens.Landing}>
      <Screen
        name={Screens.Landing}
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name={Screens.SignUp}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name={Screens.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name={Screens.ForgotPassword}
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name={Screens.Subscription}
        component={Subscription}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthenticationStack;
