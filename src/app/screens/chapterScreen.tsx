import {ActivityIndicator, View, Text, Alert, RefreshControl} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useLocalSearchParams, useRouter, useNavigation} from 'expo-router';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../components/Card';
import {collection, getDocs, orderBy, query} from 'firebase/firestore';
import {db} from '@/config/firebaseConfig';
import NetInfo from '@react-native-community/netinfo';
import NetworkBanner from '../components/NetworkBanner';

const ChapterScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const {id} = useLocalSearchParams();
  const [chapter, setChapter] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Set header options immediately using navigation.setOptions
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chapters (अध्यायहरू)',
      headerShadowVisible: true,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'semibold',
      },
    });
  }, [navigation]);

  // 🔹 Fetch chapter details from Firestore
  const fetchChapters = async () => {
    const net = await NetInfo.fetch();

    if (!net.isConnected) {
      Alert.alert(
        'You are Offline !',
        'Please connect to the internet to load chapters.',
      );
      setLoading(false);
      return;
    }
    try {
      const chaptersQuery = query(
        collection(db, 'chapterDetails'),
        orderBy('id'),
      );
      const querySnapshot = await getDocs(chaptersQuery);

      const chapter: any[] | ((prevState: never[]) => never[]) = [];
      querySnapshot.forEach(doc => {
        chapter.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setChapter(chapter);
    } catch (error) {
      console.error('❌ Error fetching chapters:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [id]);

  const onRefresh = async () => {
    setRefreshing(true);

    const net = await NetInfo.fetch();

    if (!net.isConnected) {
      // Still offline → just stop animation
      setRefreshing(false);
      return;
    }

    // Back online → fetch again
    await fetchChapters();
    setRefreshing(false);
  };

  // 🔹 Show loading indicator while fetching
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#2563EB" />
        <Text className="mt-3 text-gray-600 text-base">
          Loading chapter please wait...
        </Text>
      </View>
    );
  }

  // 🔹 Show message if chapter not found
  if (!chapter) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg text-gray-600">Chapter not found</Text>
      </View>
    );
  }
  return (
    <>
      <NetworkBanner />
      {/* Chapters View */}
      <View className="flex-1 bg-white">
        <FlatList
          data={chapter}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={chapter => chapter.id}
          contentContainerStyle={{paddingTop: 6, paddingBottom: 32}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => (
            <Card
              minHeight={100}
              title={item.title}
              icon="book"
              iconSize={50}
              description={`पाठ - ${item.chapterNo} `}
              customBgColor={item.bgColor}
              onPress={() =>
                router.push(
                  `/chapter/${item.id}?title=${encodeURIComponent(item.title)}&chapterNo=${item.chapterNo}`,
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
