import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

const EssayDetails = () => {
  const { essays, title } = useLocalSearchParams();
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
    <ScrollView
      className="flex-1 bg-white px-4"
      contentContainerClassName="py-5"
      showsVerticalScrollIndicator={false}>
      
      {/* Title */}
      <View className="p-4 mb-5">
        <Text className="text-black text-2xl font-bold text-center">
          {title || selectedEssay.title}
        </Text>
      </View>

      {/* Content */}
      <View className="px-1">
        <Text className="text-xl leading-7 text-gray-900">
          {selectedEssay.content}
        </Text>
      </View>

    </ScrollView>
  );
};

export default EssayDetails;
