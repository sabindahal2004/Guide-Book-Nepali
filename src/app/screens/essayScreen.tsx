import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import {router, Stack, useLocalSearchParams} from 'expo-router';
import Card from '../components/Card';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const EssayScreen = () => {
  const { essays} = useLocalSearchParams();
    const [selectedEssay, setSelectedEssay] = useState<any>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchEssayDetails = async () => {
        try {
          if (!essays) return;
  
          const docRef = doc(db, 'essayDetails', essays as string);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            setSelectedEssay({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.warn('⚠️ Essay not found');
            setSelectedEssay(null);
          }
        } catch (error) {
          console.error('❌ Error fetching essay:', error);
          setSelectedEssay(null);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEssayDetails();
    }, [essays]);
  
    // Loading UI
    if (loading) {
      return (
        <View className="flex-1 justify-center items-center bg-white">
          <ActivityIndicator size="large" color="#2563EB" />
          <Text className="mt-3 text-gray-600">Loading essay, please wait...</Text>
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
            onPress={() => router.push(`/essay/${item.id}?title=${encodeURIComponent(item.title)}`)}
          />
        )}
      />
    </>
  );
};

export default EssayScreen;
