import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {router, Stack} from 'expo-router';
import essayData from '@/src/data/essayData';
import Card from '../components/Card';

const EssayScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Essays (निबन्धहरू)',
          headerShadowVisible: true,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
          animation: 'slide_from_right',
        }}
      />

      <FlatList
        data={essayData}
        keyExtractor={data => data.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            description={item.content}
            customBgColor={item.bgColor}
            minHeight={100}
            icon="document-text"
            iconSize={50}
            onPress={() => router.push(`/essay/${item.id}?title=${encodeURIComponent(item.title)}`)}
          />
        )}
      />
    </>
  );
};

export default EssayScreen;
