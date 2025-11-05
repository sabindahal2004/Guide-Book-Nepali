import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '../components/Card';

const screenWidth = Dimensions.get('window').width;

const Index = () => {
  const router = useRouter();
  const cardWidth = (screenWidth - 30) / 2;

  return (
    <ScrollView className=" bg-white   ">
      {/* Full-width cards */}
      <Card
        icon="book"
        title="Chapters"
        description="Every chapter Nepali books contain"
        customBgColor="#457b9d"
        onPress={() => router.push("")} 
      />
      <Card
        icon="school"
        title="Lessons"
        description="Learn step by step with examples"
        customBgColor="#2a9d8f"
        onPress={() => router.push('/(drawer)/lessons')}
      />

      {/* Grid cards */}
      <View className="flex-row flex-wrap justify-center">
        <Card
          icon="book"
          title="Grammar"
          customBgColor="#e76f51"
          flexDirection="column"
          containerStyle={{ width: cardWidth }}
          onPress={() => router.push('/grammar')}
        />
        <Card
          icon="book"
          title="Poems"
          customBgColor="#f4a261"
          flexDirection="column"
          containerStyle={{ width: cardWidth }}
          onPress={() => router.push('/poems')}
        />
      </View>
    </ScrollView>
  );
};

export default Index;
