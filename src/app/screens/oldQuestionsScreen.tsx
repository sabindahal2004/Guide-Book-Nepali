import {View, Text} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const OldQuestionScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Old Questions (विगतका प्रश्नहरू)',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
        }}
      />
      <View>
        <Text>Old Questions</Text>
      </View>
    </>
  );
};

export default OldQuestionScreen;
