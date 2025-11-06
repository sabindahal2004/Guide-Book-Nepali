import {View} from 'react-native';
import React from 'react';
import {Stack, useRouter} from 'expo-router';
import chapterData from '../../data/chapterData';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChapterScreen = () => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Chapters (अध्यायहरू)',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'semibold',
          },
          animation: 'slide_from_right',
        }}
      />

      {/* Chapters View */}
      <View className="flex-1 bg-white">
        <FlatList
          data={chapterData}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={chapter => chapter.id}
          contentContainerStyle={{paddingTop:6, paddingBottom: 32}}
          renderItem={({item}) => (
            <Card
              minHeight={98}
              title={item.title}
              icon="book"
              iconSize={50}
              description={`लेखक - ${item.writer} `}
              customBgColor={item.bgColor}
              onPress={() =>
                router.push(
                  `/chapter/${item.id}?title=${encodeURIComponent(item.title)}`,
                )
              }
            />
          )}
        />
      </View>
    </>
  );
};

export default ChapterScreen;
