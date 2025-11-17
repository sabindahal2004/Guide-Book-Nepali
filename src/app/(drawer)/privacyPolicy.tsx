import {Linking, ScrollView, Text, View} from 'react-native';
import NetworkBanner from '../components/NetworkBanner';

export default function PrivacyPolicyScreen() {
  return (
    <>
      <NetworkBanner />
      <ScrollView
        className="flex-1 bg-white px-5 py-6 pb-15"
        showsVerticalScrollIndicator={false}>
        <View className="mb-4">
          <Text className="text-2xl font-bold text-['#e76f51'] mb-2 text-center">
            Privacy Policy
          </Text>
          <Text className="text-gray-500 text-center text-sm">
            Last Updated: December 2025
          </Text>
        </View>

        <Text className="text-lg text-black leading-6 mb-4">
          <Text className="font-semibold text-['#e76f51'] ">
            Nepali Guide Book (SEE)
          </Text>{' '}
          is developed by Mr EngineerDev. This Privacy Policy describes how we
          handle user data and educational content in the app.
        </Text>

        <Text className="text-lg font-semibold mb-2">
          1. Information We Collect
        </Text>
        <Text className="text-black mb-4 text-lg">
          We do not collect personal data from users. Only limited, anonymous
          device or app performance data may be collected automatically to
          improve app performance.
        </Text>

        <Text className="text-lg font-semibold mb-2">
          2. Content & Copyright
        </Text>
        <Text className="text-black mb-4 text-lg">
          All materials are for educational purposes only. If you are a
          copyright owner and believe your content has been used without proper
          permission, please contact us for removal or credit.
        </Text>

        <Text className="text-lg font-semibold mb-2">3. Data Security</Text>
        <Text className="text-black text-lg mb-4">
          No sensitive data is stored or shared. We take reasonable steps to
          ensure your privacy remains protected.
        </Text>

        <Text className="text-lg font-semibold mb-2">4. Contact Us</Text>
        <Text className="text-black text-lg mb-2">
          For any questions or feedback regarding this policy or the app, please
          reach out to us.
        </Text>
        <Text
          className="text-blue-600 underline"
          onPress={() =>
            Linking.openURL('mailto:mail.mrengineerdev@gmail.com')
          }>
          mail.mrengineerdev@gmail.com
        </Text>

        <Text className="text-center text-gray-400 text-sm mt-8">
          © 2025 Mr EngineerDev. All Rights Reserved.
        </Text>
      </ScrollView>
    </>
  );
}
