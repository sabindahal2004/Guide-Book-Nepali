import {Text, View} from 'react-native';
import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import chapterData from '@/src/data/chapterData';

const ChapterDetails = () => {
  const {id} = useLocalSearchParams();
  const chapter = chapterData.find(chap => chap.id === (id as string));

  if (!chapter) {
    return (
      <View>
        <Text>Chapter not found</Text>
      </View>
    );
  }
  return (
    <View className='bg-white flex-1'>
      <Text >{chapter.title}</Text>
      <Text>{chapter.writer}</Text>
      <Text>{chapter.content}</Text>
    </View>
  );
};

export default ChapterDetails;