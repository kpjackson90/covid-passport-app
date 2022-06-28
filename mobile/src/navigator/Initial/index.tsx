import React, { useEffect, useState } from 'react';
import ApplicationStack from '../Application';
import AuthenticationStack from '../Authentication';
import * as SplashScreen from 'expo-splash-screen';
import * as ScreenOrientation from 'expo-screen-orientation';

export default () => {
  const [ready, setReady] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await Promise.all([
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          ),
          await SplashScreen.preventAutoHideAsync(),
        ]);
      } catch (err) {
        console.warn(err);
      }
      try {
        //logout here
      } catch (err) {
        console.warn(err);
      }
      setReady(true);
      SplashScreen.hideAsync();
    };
    initialize();
  }, []);

  return !ready ? null : token ? (
    <AuthenticationStack />
  ) : !token ? (
    <ApplicationStack />
  ) : null;
};
