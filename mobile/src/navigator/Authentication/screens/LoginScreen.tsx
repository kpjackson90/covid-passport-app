import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Separator } from '../../../components';
import { Screens, useAppNavigation } from '../../../navigator/screens';

export const LoginScreen = () => {
  const navigation = useAppNavigation();
  return (
    <View style={{ backgroundColor: '#151557', height: '100%', flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 32,
            lineHeight: 40,
            color: '#FFFFFF',
          }}
        >
          Welcome Back
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <ImageBackground
          source={require('../../../../assets/bg.png')}
          style={{ height: '100%', width: '100%' }}
        >
          <View
            style={{
              backgroundColor: 'white',
              height: '90%',
              marginTop: '20%',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <View style={{ margin: 40 }}>
              <TextInput
                placeholder='Email Address'
                style={{
                  borderWidth: 0.2,
                  height: 52,
                  paddingTop: 10,
                  paddingLeft: 10,
                  paddingBottom: 10,
                  borderRadius: 8,
                }}
              />
              <Separator height={15} />
              <TextInput
                placeholder='Password'
                style={{
                  borderWidth: 0.2,
                  height: 52,
                  paddingTop: 10,
                  paddingLeft: 10,
                  paddingBottom: 10,
                  borderRadius: 8,
                }}
              />
              <Separator height={35} />
              <TouchableOpacity
                onPress={() => navigation.navigate(Screens.ForgotPassword)}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: '600',
                    fontSize: 16,
                    lineHeight: 20,
                    color: '#33C4D8',
                  }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>

              <Separator height={15} />
              <TouchableOpacity
                onPress={() => navigation.navigate(Screens.Subscription)}
                style={{
                  height: 60,
                  width: 68,
                  backgroundColor: '#CECECE',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: '75%',
                }}
              ></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
