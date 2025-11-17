import {View, Text, FlatList, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {router, useLocalSearchParams, useNavigation} from 'expo-router';
import Card from '../components/Card';
import {collection, getDocs, orderBy, query} from 'firebase/firestore';
import {db} from '@/config/firebaseConfig';
import NetInfo from "@react-native-community/netinfo";

const EssayScreen = () => {
  const navigation = useNavigation();
  const {essays} = useLocalSearchParams();
  const [selectedEssay, setSelectedEssay] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // Set header options immediately using navigation.setOptions
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Essays (निबन्धहरू)',
      headerShadowVisible: true,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'semibold',
      },
    });
  }, [navigation]);

  // 🔹 Fetch chapter details from Firestore
  const fetchEssays = async () => {
    const net = await NetInfo.fetch();
    if (!net.isConnected) {
      Alert.alert(
        'You are Offline !',
        'Please connect to the internet to load essays.',
      );
      setLoading(false);
      return;
    }

    try {
      const essaysQuery = query(collection(db, 'essayDetails'), orderBy('id'));
      const querySnapshot = await getDocs(essaysQuery);

      const selectedEssay: any[] | ((prevState: never[]) => never[]) = [];
      querySnapshot.forEach(doc => {
        selectedEssay.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setSelectedEssay(selectedEssay);
    } catch (error) {
      console.error('❌ Error fetching chapters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEssays();
  }, [essays]);

  // Loading UI
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#2563EB" />
        <Text className="mt-3 text-gray-600">
          Loading essay, please wait...
        </Text>
      </View>
    );
  }

  // Essay not found UI
  if (!selectedEssay) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Essay not found</Text>
      </View>
    );
  }
  return (
    <>
      <FlatList
        data={selectedEssay}
        keyExtractor={data => data.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            description={item.content}
            customBgColor={item.bgColor}
            minHeight={100}
            icon="document-text"
            iconSize={50}
            onPress={() =>
              router.push(
                `/essay/${item.id}?title=${encodeURIComponent(item.title)}`,
              )
            }
          />
        )}
      />
    </>
  );
};

export default EssayScreen;
