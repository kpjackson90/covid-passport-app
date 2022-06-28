import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Separator } from '../../../components';
import { Screens, useAppNavigation } from '../../screens';

export const Subscription = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center' }}>
        <Text>Subscription</Text>
        <Text>Select a plan below. You can always</Text>
        <Text>update your decision later in settings.</Text>
      </View>
      <Separator height={30} />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 366,
            height: 160,
            backgroundColor: '#3D42CB',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Free Tier</Text>
          <Text>5 tests & results</Text>
        </TouchableOpacity>
        <Separator height={30} />
        <TouchableOpacity
          style={{
            width: 366,
            height: 160,
            backgroundColor: '#3D42CB',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Traveller Tier</Text>
          <Text>20 tests & results</Text>
        </TouchableOpacity>
        <Separator height={30} />
        <TouchableOpacity
          style={{
            width: 366,
            height: 160,
            backgroundColor: '#3D42CB',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Nomad Tier</Text>
          <Text>Unlimited tests & results</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(Screens.Home)}
            style={{
              height: 60,
              width: 68,
              backgroundColor: '#CECECE',
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: '20%',
            }}
          ></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
