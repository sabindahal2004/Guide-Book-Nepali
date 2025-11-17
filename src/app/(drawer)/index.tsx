import {useRouter} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {
  AppState,
  BackHandler,
  Dimensions,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Card from '../components/Card';
import Drawer from 'expo-router/drawer';
import ExitConfirmationModal from '../components/ExitConfirmModal';
import NetworkBanner from '../components/NetworkBanner';

const screenWidth = Dimensions.get('window').width;

const Index = () => {
  const [exitModal, setExitModal] = useState(false);
  const router = useRouter();
  const cardWidth = (screenWidth - 30) / 2;

  // 🔹 Reset Exit Modal When App Reopens
  useEffect(() => {
    const appStateListener = AppState.addEventListener('change', state => {
      if (state === 'active') {
        // When app becomes active again → reset the modal
        setExitModal(false);
      }
    });

    return () => appStateListener.remove();
  }, []);

  // 🔹 Android Hardware Back Button Handler
  useEffect(() => {
    const backAction = () => {
      setExitModal(true);
      return true; // prevent default back behavior
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => subscription.remove();
  }, []);

  const handleExit = () => {
    BackHandler.exitApp();
  };

  const handleCancel = () => {
    setExitModal(false);
  };

  return (
    <>
      <StatusBar barStyle="default" />

      <Drawer.Screen
        options={{
          headerShadowVisible: false,
        }}
      />

      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <NetworkBanner />

        {/* Full-width cards */}
        <Card
          icon="book"
          title="Chapters"
          nepaliTitle="(अध्यायहरू)"
          description="Let's explore notes and solved questions."
          customBgColor="#457b9d"
          onPress={() => router.push('../screens/chapterScreen')}
        />

        <Card
          icon="document-text"
          title="Essays"
          nepaliTitle="(निबन्धहरू)"
          customBgColor="#2a9d8f"
          flexDirection="row"
          description="Let’s explore a simple collection of essays for quick learning."
          onPress={() => router.push('../screens/essayScreen')}
        />

        {/* Grid Cards */}
        <View className="flex-row flex-wrap justify-center">
          <Card
            icon="document"
            title="Old Questions"
            nepaliTitle="(विगतका प्रश्नहरू)"
            customBgColor="#e76f51"
            flexDirection="column"
            containerStyle={{width: cardWidth}}
            onPress={() => router.push('../screens/oldQuestionsScreen')}
          />

          <Card
            icon="apps"
            title="More Apps"
            nepaliTitle="(थप एपहरू)"
            customBgColor="#f4a261"
            flexDirection="column"
            containerStyle={{width: cardWidth}}
            onPress={() => router.push('../screens/moreAppsScreen')}
          />
        </View>

        <Card
          icon="school"
          title="Grammar"
          nepaliTitle="(व्याकरण)"
          description="Let's understand grammar easily with notes, examples, and exercises."
          customBgColor="#5C3E94"
          onPress={() => router.push('../screens/grammarScreen')}
        />
      </ScrollView>

      {/* Exit Confirmation Modal */}
      <ExitConfirmationModal
        visible={exitModal}
        onCancel={handleCancel}
        onExit={handleExit}
      />
    </>
  );
};

export default Index;
