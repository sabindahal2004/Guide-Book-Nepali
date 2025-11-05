import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const ChapterScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Chapters',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
        }}
      />
      <View>
        <Text>ChapterScreen</Text>
      </View>
    </>
  );
};

export default ChapterScreen;
