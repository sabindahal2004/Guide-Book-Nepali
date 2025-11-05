import {Text, View} from 'react-native';
import {Link} from 'expo-router';
import React from 'react';

const NotFound = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-4xl font-bold color-slate-600'>Page NotFound!</Text>
      <Link href={"/"}>
        <Text className='text-xl font-semibold color-blue-500'>👈 Go to Home</Text>
      </Link>
    </View>
  );
};

export default NotFound;
