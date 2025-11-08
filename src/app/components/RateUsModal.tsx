import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, Linking} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

type RateUsModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function RateUsModal({visible, onClose}: RateUsModalProps) {
  const [rating, setRating] = useState(0);

  const PLAY_STORE_URL =
    'https://play.google.com/store/apps/details?id=com.yourapp.package';

  const handleStarPress = (value: number) => {
    setRating(value);
  };

  const handleReviewPress = async () => {
    try {
      await Linking.openURL(PLAY_STORE_URL);
    } catch (error) {
      console.log('Error opening Play Store:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View className="flex-1 bg-black/40 items-center justify-center">
        <View className="bg-white rounded-2xl w-11/12 p-6 items-center shadow-lg">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Enjoying Nepali Guide Book (SEE) ?
          </Text>
          <Text className="text-gray-600 mb-4 text-center text-base">
            Tap the stars to rate us and help others discover this application
          </Text>

          {/* ⭐ Star Rating */}
          <View className="flex-row mb-5">
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}
                className="mx-1">
                <FontAwesome
                  name={star <= rating ? 'star' : 'star-half-o'}
                  size={32}
                  color={star <= rating ? '#FFD700' : '#C0C0C0'}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Review Button */}
          <TouchableOpacity
            className="bg-blue-600 px-6 w-['100%'] py-3 rounded-xl items-center"
            onPress={handleReviewPress}>
            <Text className="text-white font-semibold text-lg">Review Now</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} className="mt-3">
            <Text className="text-gray-500 underline">Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
