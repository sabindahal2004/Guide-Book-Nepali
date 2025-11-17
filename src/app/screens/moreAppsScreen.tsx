import {View, Text, Image} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import NetworkBanner from '../components/NetworkBanner';

const MoreAppScreen = () => {
  return (
    <>
      <NetworkBanner />
      <Stack.Screen
        options={{
          title: 'More Apps (थप एपहरू)',
          headerShadowVisible: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
          animation: 'slide_from_right',
        }}
      />
      <View className="flex-1 bg-white justify-center items-center px-8">
        <Image
          source={require('../../../assets/images/Mobileapps.gif')}
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
        />
        <View className="mt-4 items-center justify-center">
          <Text className="text-center text-gray-500 text-xl  font-medium">
            More Apps is currently unavailable. It will be added soon.
            <Ionicons name="heart" size={20} color="pink" />
          </Text>
        </View>
      </View>
    </>
  );
};

export default MoreAppScreen;
