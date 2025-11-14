import {useRouter} from 'expo-router';
import React from 'react';
import {Dimensions, ScrollView, StatusBar, View} from 'react-native';
import Card from '../components/Card';
import Drawer from 'expo-router/drawer';
import {useEffect} from 'react';
import bulkUploadData from '../../../config/bulkUploadData';

const screenWidth = Dimensions.get('window').width;

const Index = () => {
  // For bulk upload data only once (To firestore)
  // useEffect(() => {
  //   bulkUploadData();
  // }, []);

  const cardWidth = (screenWidth - 30) / 2;
  const router = useRouter();
  return (
    <>
      <Drawer.Screen
        options={{
          headerShadowVisible: false,
        }}
      />
      <ScrollView className=" bg-white   " showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="default" />
        {/* Full-width cards */}
        <Card
          icon="book"
          title="Chapters "
          nepaliTitle="(अध्यायहरू)"
          description="Let's explore notes and solved questions."
          customBgColor="#457b9d"
          onPress={() => router.push('../screens/chapterScreen')}
        />
        <Card
          icon="school"
          title="Grammar "
          nepaliTitle="(व्याकरण)"
          description="Let's understand grammar easily with notes, examples, and exercises."
          customBgColor="#2a9d8f"
          onPress={() => router.push('../screens/grammarScreen')}
        />

        {/* Grid cards */}
        <View className="flex-row flex-wrap justify-center">
          <Card
            icon="document"
            title="Old Questions "
            nepaliTitle="(विगतका प्रश्नहरू)"
            customBgColor="#e76f51"
            flexDirection="column"
            containerStyle={{width: cardWidth}}
            onPress={() => router.push('../screens/oldQuestionsScreen')}
          />
          <Card
            icon="apps"
            title="More Apps "
            nepaliTitle="(थप एपहरू)"
            customBgColor="#f4a261"
            flexDirection="column"
            containerStyle={{width: cardWidth}}
            onPress={() => router.push('../screens/moreAppsScreen')}
          />
        </View>
        {/* <Card icon="heart" title="Support Us " nepaliTitle="(थप एपहरू)" /> */}
      </ScrollView>
    </>
  );
};

export default Index;
