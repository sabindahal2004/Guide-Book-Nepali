import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import Card from '../components/Card';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const Index = () => {
  const cardWidth = (screenWidth - 30) / 2;
  const router = useRouter();
  return (
    <ScrollView className=" bg-white   " showsVerticalScrollIndicator={false}>
      {/* Full-width cards */}
      <Card
        icon="book"
        title="Chapters"
        description="Every chapter Nepali books contain"
        customBgColor="#457b9d"
        onPress={() => router.push("../screens/chapterScreen")}
      />
      <Card
        icon="school"
        title="Grammar"
        description="Learn step by step with examples"
        customBgColor="#2a9d8f"
        onPress={() => router.push("../screens/grammarScreen")}
      />

      {/* Grid cards */}
      <View className="flex-row flex-wrap justify-center">
        <Card
          icon="document"
          title="Old Questions"
          customBgColor="#e76f51"
          flexDirection="column"
          containerStyle={{width: cardWidth}}
          onPress={() => router.push("../screens/oldQuestionsScreen")}
        />
        <Card
          icon="apps"
          title="More Apps"
          customBgColor="#f4a261"
          flexDirection="column"
          containerStyle={{width: cardWidth}}
          onPress={() => router.push("../screens/moreAppsScreen")}
        />
      </View>
    </ScrollView>
  );
};

export default Index;
