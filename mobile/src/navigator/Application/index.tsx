import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../screens';
import { HomeScreen } from './screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const ApplicationStack = () => {
  return (
    <Navigator initialRouteName={Screens.Home}>
      <Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default ApplicationStack;
