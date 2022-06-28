import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Separator } from '../../../components';
import { Screens, useAppNavigation } from '../../screens';

export const LandingScreen = () => {
  const navigation = useAppNavigation();

  return (
    <>
      <ImageBackground
        source={require('../../../../assets/WorldMap.png')}
        style={{ height: '100%', width: '100%' }}
      >
        <View style={{ marginTop: '145%', alignItems: 'center' }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 32,
              lineHeight: 40,
              color: '#3D42CB',
            }}
          >
            Fight COVID-19
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 32,
              lineHeight: 40,
              color: '#3D42CB',
            }}
          >
            virus spread
          </Text>
          <Separator height={10} />
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.Login)}
            style={{
              width: 300,
              height: 60,
              borderRadius: 10,
              backgroundColor: '#3D42CB',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 20,
                letterSpacing: 0.2,
                color: '#FFFFFF',
              }}
            >
              Enter App
            </Text>
          </TouchableOpacity>
          <Separator height={10} />
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.SignUp)}
            style={{
              width: 300,
              height: 60,
              borderRadius: 10,
              backgroundColor: '#151557',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 20,
                letterSpacing: 0.2,
                color: '#FFFFFF',
              }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};
