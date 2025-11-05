import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const GrammerScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Grammar (व्याकरण)',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
        }}
      />
      <View>
        <Text>Grammar Screen</Text>
      </View>
    </>
  );
};

export default GrammerScreen;
