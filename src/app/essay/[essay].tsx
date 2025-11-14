import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import essayData from '@/src/data/essayData';

const EssayDetails = () => {
  const {essay, title} = useLocalSearchParams(); 
  const selectedEssay = essayData.find(
    e => e.id.toString() === essay?.toString(),
  );

  if (!selectedEssay) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Essay not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-white px-4"
      contentContainerClassName="py-5"
      showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View className="p-4 mb-5">
        <Text className="text-black text-2xl font-bold text-center">
          {title ?? selectedEssay.title}
        </Text>
      </View>

      {/* Content */}
      <View className="px-1 ">
        <Text className="text-xl leading-7 text-gray-900">
          {selectedEssay.content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default EssayDetails;
