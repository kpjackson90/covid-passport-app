import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

export const ForgotPasswordScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 80, flex: 1 }}>
        <Text>Forgot Password</Text>
        <Text>Enter your email address below to initiate</Text>
        <Text>a reset password email.</Text>
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
      </View>
      <View style={{ flex: 5 }}>
        <Image
          source={require('../../../../assets/worldbg.png')}
          style={{ height: '100%', width: '100%' }}
        />
      </View>
    </View>
  );
};
