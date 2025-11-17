import {Ionicons} from '@expo/vector-icons';
import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import NetworkBanner from '../components/NetworkBanner';

export default function AboutScreen() {
  return (
    <>
      <NetworkBanner />
      <ScrollView className="flex-1 bg-white px-5 py-6 pb-15">
        <View className="items-center mb-5">
          <Text className="text-2xl font-bold text-['#2a9d8f'] mb-2">
            Nepali Guide Book (SEE)
          </Text>
          <Text className="text-gray-500 text-sm">
            Developed by Mr EngineerDev
          </Text>
        </View>

        <Text className="text-lg text-black leading-6 mb-4">
          <Text className="text-['#2a9d8f'] font-semibold">
            Nepali Guide Book (SEE){' '}
          </Text>
          is a complete study companion for SEE students. It includes
          chapter-wise notes, grammar, summaries, and all necessary exercises in
          a simple and organized format.
        </Text>

        <Text className="text-lg text-black leading-6 mb-4">
          The app is designed to help students prepare effectively for the
          Secondary Education Examination (SEE) and understand every topic with
          clarity. Whether you are revising or learning new chapters, this guide
          is made to support you anytime, anywhere.
        </Text>

        <View className="mt-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="diamond" size={18} color="#f4a261" />
            <Text className="text-lg font-semibold text-gray-900 pl-2">
              Our Key Features :
            </Text>
          </View>
          <View className="ml-2">
            <Text className="text-black mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Chapter-wise Notes
            </Text>
            <Text className="text-black mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Important Essays
            </Text>
            <Text className="text-gray-400 mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Grammar & Writing Section (Comming Soon)
            </Text>
            <Text className="text-black mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" /> Old
              Questions (SEE)
            </Text>
            <Text className="text-blacj=k mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Easy-to-use Interface
            </Text>
            <Text className="text-black mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Regular Updates
            </Text>
            <Text className="text-black mb-1 text-lg">
              <Ionicons name="checkmark-circle" size={16} color="#2a9d8f" />{' '}
              Free for all students
            </Text>
          </View>
        </View>

        <View className="mt-6 border-t border-gray-200 pt-4">
          <Text className="text-base  text-gray-800 mb-2">
            If you have any questions or feedback about this app, feel free to
            contact us. We’ll get back to you as soon as possible.
          </Text>
          <View className="flex-row items-center mb-2">
            <Ionicons name="mail" size={18} color="#e76f51" />
            <Text className="text-lg font-semibold text-gray-900 pl-2">
              Contact Developer
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto:mail.mrengineerdev@gmail.com')
            }>
            <Text className="text-blue-600 underline">
              mail.mrengineerdev@gmail.com
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-center text-gray-400 text-sm mt-8">
          © 2025 Mr EngineerDev. All Rights Reserved.
        </Text>
      </ScrollView>
    </>
  );
}
