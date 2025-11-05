import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const MoreAppScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'More Apps (थप एपहरू)',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
        }}
      />
      <View>
        <Text>More Apps</Text>
      </View>
    </>
  );
};

export default MoreAppScreen;
